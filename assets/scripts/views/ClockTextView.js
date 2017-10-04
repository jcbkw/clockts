System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ClockTextView;
    return {
        setters: [],
        execute: function () {
            ClockTextView = /** @class */ (function () {
                function ClockTextView(parent) {
                    this.parent = parent;
                    this.render();
                }
                ClockTextView.prototype.update = function (shit) {
                    console.log(shit.hours + ":" + shit.minutes + ":" + shit.seconds);
                };
                ClockTextView.prototype.getElement = function () {
                    return null;
                };
                ClockTextView.prototype.render = function () { };
                return ClockTextView;
            }());
            exports_1("ClockTextView", ClockTextView);
        }
    };
});
