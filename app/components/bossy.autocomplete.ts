import {Component} from 'angular2/core';

export interface BossyAutocompleteConfig {
    text: string;
    align: string;
    position: string;
    color: string;
    type: string;
    progress: number;
    icon: string;
    iconFloat: string;
    persists: boolean;
}

@Component({
    selector: 'bossy-autocomplete',
    templateUrl: 'app/components/bossy-autocomplete.html',
    inputs: ['config'],
    styleUrls: ['app/components/_bossy-autocomplete.css']
})

export class BossyAutocomplete {
    public config: BossyAutocompleteConfig;

    createMatrix(x,y){
        let i, mat = new Array(x);
            for (i = 0; i < x; i++) {
                mat[i] = new Array(y);
        }
        return mat;
    };

    filterStartsWith(words, query, caseInsensitive){
        let compare;
        if (caseInsensitive) {
            compare = function (w) {
                return w.toLowerCase().startsWith(query.toLowerCase());
            };
        }
        else {
            compare = function (w) {
                return w.startsWith(query)
            };
        }
        return words.filter(compare);
    };
    function levDist(str1, str2 : string) {
        let i, j, mat = utility.createMatrix(str1.length + 1, str2.length + 1);
        // More readable if strings are 1-indexed
        // lower case for case-insensitive matching
        str1 = ' ' + str1.toLowerCase();
        str2 = ' ' + str2.toLowerCase();
        // Initialize first row values to edit distance from empty string
        for (i = 0; i < str1.length; i++) {
            mat[i][0] = i;
        }
        // Initialize first column values to edit distance from empty string
        for (j = 0; j < str2.length; j++) {
            mat[0][j] = j;
        }
        // Flood fill mat with edit distances between substrs of str1/str2
            for (j = 1; j < str2.length; j++) {
                for (i = 1; i < str1.length; i++) {
                    if (str1[i] === str2[j]) {
                        mat[i][j] = mat[i - 1][j - 1];
                }
                else {
                    mat[i][j] = Math.min(mat[i - 1][j] + 1,    // a deletion
                        mat[i][j - 1] + 1,    // an insertion
                        mat[i - 1][j - 1] + 1); // a substitution
                }
            }
        }
        return mat[str1.length - 1][str2.length - 1];
    }
     let BKTreeNode = function (str) {
        this.str = str;
        this.children = {}; // key is edit-distance from this.str
    };

    BKTreeNode.prototype = {

        add: function (newNode: string) {
            let dist; // if newNode.str in tree, do nothing.
            if (newNode.str !== this.str) {
                dist = levDist(newNode.str, this.str);
                if (this.children[dist] === undefined) {
                    this.children[dist] = newNode;
                }
                else {
                    this.children[dist].add(newNode);
                }
            }
        },

        search: function (query, tolerance, matchObj) {
            let i, dist = levDist(query, this.str);
            if (dist <= tolerance) {
                matchObj[dist].push(this.str);
            }
            // Can't have negative distance
            i = dist - tolerance > 0 ? dist - tolerance : 0;
            for (; i <= dist + tolerance; i++) {
                if (this.children[i]) {
                    this.children[i].search(query, tolerance, matchObj);
                }
            }
        }
    };


    
}
function Autocomplete(BKTree, utility) {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            config: '='
        },
        link: function (scope, element, attrs) {
            scope.dict = scope.config.dict || [];
            scope.maxCorrections = scope.config.maxCorrections || 0;
            scope.maxSuggestions = scope.config.maxSuggestions || 5;
            scope.tree = new BKTree(scope.dict);
            scope.suggestions = [];

            scope.updateSuggestions = function (query) {
                var startsWithMatches = utility.filterStartsWith(scope.dict, query, true),
                    correctionMatches = scope.tree.query(query, scope.maxCorrections);
                if (query.length > 0) {
                    // ng-repeat doesn't work with Sets
                    scope.suggestions = Array.from(new Set(startsWithMatches.concat(correctionMatches)));
                }
                else {
                    scope.suggestions = [];
                }
            };
            scope.chooseSuggestion = function (suggestion) {
                scope.query = suggestion;
                scope.updateSuggestions(suggestion);
            };
        },        
    };
}
