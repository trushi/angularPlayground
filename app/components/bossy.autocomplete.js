System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var BossyAutocomplete;
    function levDist(str1, str2) {
        var i, j, mat = utility.createMatrix(str1.length + 1, str2.length + 1);
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
                    mat[i][j] = Math.min(mat[i - 1][j] + 1, // a deletion
                    mat[i][j - 1] + 1, // an insertion
                    mat[i - 1][j - 1] + 1); // a substitution
                }
            }
        }
        return mat[str1.length - 1][str2.length - 1];
    }
    function Autocomplete(BKTree, utility) {
    }
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            BossyAutocomplete = (function () {
                function BossyAutocomplete() {
                }
                BossyAutocomplete.prototype.foo = function ($event) {
                    console.log('bar', $event, this.query);
                };
                BossyAutocomplete.prototype.updateSuggestions = function (query) {
                    console.log('test', query);
                    var startsWithMatches = utility.filterStartsWith(scope.dict, query, true), correctionMatches = scope.tree.query(query, scope.maxCorrections);
                    if (query.length > 0) {
                    }
                    else {
                        scope.suggestions = [];
                    }
                };
                ;
                BossyAutocomplete.prototype.chooseSuggestion = function (suggestion) {
                    scope.query = suggestion;
                    scope.updateSuggestions(suggestion);
                };
                ;
                BossyAutocomplete.prototype.createMatrix = function (x, y) {
                    //let i, mat = new Array(x);
                    for (i = 0; i < x; i++) {
                    }
                    return mat;
                };
                ;
                BossyAutocomplete.prototype.filterStartsWith = function (words, query, caseInsensitive) {
                    var compare;
                    if (caseInsensitive) {
                        compare = function (w) {
                            return w.toLowerCase().startsWith(query.toLowerCase());
                        };
                    }
                    else {
                        compare = function (w) {
                            return w.startsWith(query);
                        };
                    }
                    return words.filter(compare);
                };
                ;
                BossyAutocomplete = __decorate([
                    core_1.Component({
                        selector: 'bossy-autocomplete',
                        template: "<div>\n        <input [(ngModel)]=\"query\" (keyup)=\"foo()\">\n        <div *ngFor=\"#sug of suggestions\" (click)=\"chooseSuggestion(sug)\">{{sug}}</div>\n        </div>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], BossyAutocomplete);
                return BossyAutocomplete;
            }());
            exports_1("BossyAutocomplete", BossyAutocomplete);
        }
    }
});
//# sourceMappingURL=bossy.autocomplete.js.map