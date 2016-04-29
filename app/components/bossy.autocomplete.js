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
                //var BossyAutocomplete;
                BossyAutocomplete.prototype.updateSuggestions = function (query) {
                    console.log('test');
                    var startsWithMatches = utility.filterStartsWith(scope.dict, query, true), correctionMatches = scope.tree.query(query, scope.maxCorrections);
                    if (query.length > 0) {
                        // ng-repeat doesn't work with Sets
                        scope.suggestions = Array.from(new Set(startsWithMatches.concat(correctionMatches)));
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
                BossyAutocomplete = __decorate([
                    core_1.Component({
                        selector: 'bossy-autocomplete',
                        template: "<div>\n        <input [(ngModel)]=\"query\" (keypress)=\"updateSuggestions(query)\">\n        <div *ngFor=\"#sug of suggestions\" (click)=\"chooseSuggestion($sug)\">{{sug}}</div>\n        </div>"
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