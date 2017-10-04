System.register(["./Clocks"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Clocks_1, SpecificClockModel;
    return {
        setters: [
            function (Clocks_1_1) {
                Clocks_1 = Clocks_1_1;
            }
        ],
        execute: function () {
            SpecificClockModel = /** @class */ (function () {
                function SpecificClockModel() {
                }
                SpecificClockModel.prototype.update = function (date, offset) {
                    if (offset === void 0) { offset = 0; }
                    if (offset !== 0) {
                        date = this.calcTime(offset, date);
                    }
                    this.hours = Clocks_1.Clocks.formatDigits(date.getHours());
                    this.minutes = Clocks_1.Clocks.formatDigits(date.getMinutes());
                    this.seconds = Clocks_1.Clocks.formatDigits(date.getSeconds());
                    return this;
                };
                /**
                 * function to calculate local time
                 * in a different city
                 * given the city's UTC offset
                 *
                 * @param offset the timezone offset in hours.
                 * @param d the date to add the offset to
                 */
                SpecificClockModel.prototype.calcTime = function (offset, d) {
                    // convert to msec
                    // add local time offset
                    var utc = d.getTime() +
                        // get UTC time offset in msec
                        (d.getTimezoneOffset() * 60 * 1000);
                    // create new Date object for different city
                    // using supplied offset
                    return new Date(utc + (3600000 * offset));
                };
                return SpecificClockModel;
            }());
            exports_1("SpecificClockModel", SpecificClockModel);
        }
    };
});
