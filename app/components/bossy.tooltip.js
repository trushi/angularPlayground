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
    var BossyTooltip;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            BossyTooltip = (function () {
                function BossyTooltip() {
                }
                BossyTooltip.prototype.setAlignment = function (alignment) {
                    // Anchor Alignment
                    var alignmentClass = '';
                    if (alignment) {
                        if (alignment.toLowerCase() === 'left') {
                            alignmentClass = 'bossy-tooltip-align-left';
                        }
                        else if (alignment.toLowerCase() === 'right') {
                            alignmentClass = 'bossy-tooltip-align-right';
                        }
                    }
                    return alignmentClass;
                };
                ;
                BossyTooltip.prototype.setActive = function (persist) {
                    // Force tooltip to persist without hovering
                    var activeClass = '';
                    if (persist) {
                        activeClass = 'active';
                    }
                    return activeClass;
                };
                ;
                BossyTooltip.prototype.setPositioning = function (position) {
                    // tooltipPosition handles the position of the whole tooltip,
                    // above, below, right, or left of the element requiring a tooltip
                    var positionClass = '';
                    if (position) {
                        if (position.toLowerCase() === 'left') {
                            positionClass = 'bossy-tooltip-pos-left';
                        }
                        else if (position.toLowerCase() === 'right') {
                            positionClass = 'bossy-tooltip-pos-right';
                        }
                        else if (position.toLowerCase() === 'bottom') {
                            positionClass = 'bossy-tooltip-pos-bottom';
                        }
                    }
                    return positionClass;
                };
                ;
                BossyTooltip.prototype.setContentType = function (type) {
                    // Content type
                    var contentType = '';
                    if (type) {
                        if (type.toLowerCase() === 'download') {
                            contentType = 'download';
                        }
                    }
                    return contentType;
                };
                ;
                BossyTooltip.prototype.setIconFloat = function (direction) {
                    // Float icon to left or right
                    var iconDirection = '';
                    if (direction) {
                        if (direction.toLowerCase() === 'left') {
                            iconDirection = 'icon-left';
                        }
                        else if (direction.toLowerCase() === 'right') {
                            iconDirection = 'icon-right';
                        }
                    }
                    return iconDirection;
                };
                ;
                BossyTooltip = __decorate([
                    core_1.Component({
                        selector: 'bossy-tooltip',
                        templateUrl: 'app/components/bossy-tooltip.html',
                        inputs: ['config'],
                        styleUrls: ['app/components/_bossy-tooltip.css']
                    }), 
                    __metadata('design:paramtypes', [])
                ], BossyTooltip);
                return BossyTooltip;
            }());
            exports_1("BossyTooltip", BossyTooltip);
        }
    }
});
//# sourceMappingURL=bossy.tooltip.js.map