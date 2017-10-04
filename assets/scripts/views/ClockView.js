System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ClockView;
    return {
        setters: [],
        execute: function () {
            ClockView = /** @class */ (function () {
                function ClockView(parent) {
                    this.parent = parent;
                    this.render();
                }
                ClockView.prototype.update = function (shit) {
                    this.el.innerHTML = shit.hours + ":" + shit.minutes + ":" + shit.seconds;
                };
                ClockView.prototype.getElement = function () {
                    return this.el;
                };
                ClockView.prototype.render = function () {
                    this.el = document.createElement("div");
                    this.el.className = "clock";
                    this.parent.getElement().appendChild(this.el);
                };
                return ClockView;
            }());
            exports_1("ClockView", ClockView);
        }
    };
});
