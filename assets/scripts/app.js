System.register(["./ClockController"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ClockController_1;
    return {
        setters: [
            function (ClockController_1_1) {
                ClockController_1 = ClockController_1_1;
            }
        ],
        execute: function () {
            (function () {
                var controller = new ClockController_1.ClockController(document);
                controller.render();
            })();
        }
    };
});
