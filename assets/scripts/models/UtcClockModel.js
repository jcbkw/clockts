System.register(["./Clocks"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Clocks_1, UtcClockModel;
    return {
        setters: [
            function (Clocks_1_1) {
                Clocks_1 = Clocks_1_1;
            }
        ],
        execute: function () {
            UtcClockModel = /** @class */ (function () {
                function UtcClockModel() {
                }
                UtcClockModel.prototype.update = function (date) {
                    this.hours = Clocks_1.Clocks.formatDigits(date.getUTCHours());
                    this.minutes = Clocks_1.Clocks.formatDigits(date.getUTCMinutes());
                    this.seconds = Clocks_1.Clocks.formatDigits(date.getUTCSeconds());
                    return this;
                };
                return UtcClockModel;
            }());
            exports_1("UtcClockModel", UtcClockModel);
        }
    };
});
