System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Clocks;
    return {
        setters: [],
        execute: function () {
            Clocks = /** @class */ (function () {
                function Clocks() {
                }
                Clocks.formatDigits = function (val) {
                    return val < 10 ? "0" + val : String(val);
                };
                return Clocks;
            }());
            exports_1("Clocks", Clocks);
        }
    };
});
