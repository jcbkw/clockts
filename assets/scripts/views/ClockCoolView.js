System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ClockCoolView;
    return {
        setters: [],
        execute: function () {
            ClockCoolView = /** @class */ (function () {
                function ClockCoolView(parent) {
                    this.parent = parent;
                    this.render();
                }
                ClockCoolView.prototype.update = function (shit) {
                    this.setText(this.hours, shit.hours);
                    this.setText(this.minutes, shit.minutes);
                    this.setText(this.seconds, shit.seconds);
                };
                ClockCoolView.prototype.getElement = function () {
                    return this.el;
                };
                /// -- privates
                ClockCoolView.prototype.setText = function (element, value) {
                    this.empty(element);
                    element.appendChild(document.createTextNode(value));
                };
                ClockCoolView.prototype.empty = function (element) {
                    while (element && element.firstChild) {
                        element.removeChild(element.firstChild);
                    }
                };
                ClockCoolView.prototype.render = function () {
                    this.el = document.createElement("div");
                    this.el.className = "clock";
                    this.hours = document.createElement("span");
                    this.minutes = this.hours.cloneNode(true);
                    this.seconds = this.hours.cloneNode(true);
                    this.el.appendChild(this.hours);
                    this.el.appendChild(document.createTextNode(":"));
                    this.el.appendChild(this.minutes);
                    this.el.appendChild(document.createTextNode(":"));
                    this.el.appendChild(this.seconds);
                    this.parent.getElement().appendChild(this.el);
                };
                return ClockCoolView;
            }());
            exports_1("ClockCoolView", ClockCoolView);
        }
    };
});
