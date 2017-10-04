System.register(["./Clocks"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Clocks_1, DefaultClockModel;
    return {
        setters: [
            function (Clocks_1_1) {
                Clocks_1 = Clocks_1_1;
            }
        ],
        execute: function () {
            DefaultClockModel = /** @class */ (function () {
                function DefaultClockModel() {
                }
                DefaultClockModel.prototype.update = function (date) {
                    this.hours = Clocks_1.Clocks.formatDigits(date.getHours());
                    this.minutes = Clocks_1.Clocks.formatDigits(date.getMinutes());
                    this.seconds = Clocks_1.Clocks.formatDigits(date.getSeconds());
                    return this;
                };
                return DefaultClockModel;
            }());
            exports_1("DefaultClockModel", DefaultClockModel);
        }
    };
});
