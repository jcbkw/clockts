System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ClockView;
    return {
        setters: [],
        execute: function () {
            ClockView = /** @class */ (function () {
                function ClockView(parent, clockClass) {
                    if (clockClass === void 0) { clockClass = "clock"; }
                    this.parent = parent;
                    this.clockClass = clockClass;
                    this.render();
                }
                ClockView.prototype.update = function (shit) {
                    this.el.innerHTML = shit.hours + ":" + shit.minutes + ":" + shit.seconds + " " + shit.timeZone;
                };
                ClockView.prototype.getElement = function () {
                    return this.el;
                };
                ClockView.prototype.render = function () {
                    this.el = document.createElement("div");
                    this.el.className = this.clockClass;
                    this.parent.getElement().appendChild(this.el);
                };
                return ClockView;
            }());
            exports_1("ClockView", ClockView);
        }
    };
});
