System.register(["./views/ClockView", "./views/Layout", "./models/DefaultClockModel", "./models/UtcClockModel"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ClockView_1, Layout_1, DefaultClockModel_1, UtcClockModel_1, ClockController;
    return {
        setters: [
            function (ClockView_1_1) {
                ClockView_1 = ClockView_1_1;
            },
            function (Layout_1_1) {
                Layout_1 = Layout_1_1;
            },
            function (DefaultClockModel_1_1) {
                DefaultClockModel_1 = DefaultClockModel_1_1;
            },
            function (UtcClockModel_1_1) {
                UtcClockModel_1 = UtcClockModel_1_1;
            }
        ],
        execute: function () {
            ClockController = /** @class */ (function () {
                function ClockController(dom) {
                    this.dom = dom;
                }
                ClockController.prototype.render = function () {
                    var layout = new Layout_1.Layout(this.dom);
                    var estView = new ClockView_1.ClockView(layout);
                    var utcView = new ClockView_1.ClockView(layout);
                    var defaultModel = new DefaultClockModel_1.DefaultClockModel;
                    var utcModel = new UtcClockModel_1.UtcClockModel;
                    function updateView() {
                        estView.update(defaultModel.update(new Date()));
                        utcView.update(utcModel.update(new Date()));
                    }
                    setInterval(updateView, 1000);
                    updateView();
                };
                return ClockController;
            }());
            exports_1("ClockController", ClockController);
        }
    };
});
