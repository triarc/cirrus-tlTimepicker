var Triarc;
(function (Triarc) {
    var Web;
    (function (Web) {
        var mod = angular.module("tlTimepicker", ["ui.bootstrap"]);
        mod.directive("tlTimepickerFocus", ["$timeout", function ($timeout) {
                return {
                    require: ["timepicker"],
                    restrict: "A",
                    link: function (scope, element, attrs) {
                        $timeout(function () {
                            element.find("input").first().focus().select();
                        }, 200);
                    }
                };
            }]);
        mod.directive("tlTimepickerNumeric", function () {
            return {
                require: ["timepicker"],
                restrict: "A",
                link: function (scope, element, attrs) {
                    var inputs = element.find("input:lt(2)");
                    inputs.attr("pattern", "[0-9]*").attr("type", "number").css("padding-right", "14px");
                }
            };
        });
        mod.directive("tlTimepickerPrune", function () {
            return {
                restrict: "A",
                require: ["timepicker", "?^ngModel"],
                link: function (scope, element, attrs, ctrls) {
                    var ngModelCtrl = ctrls[1];
                    if (ngModelCtrl) {
                        scope.$watch(function () {
                            return ngModelCtrl.$modelValue;
                        }, function (newVal) {
                            if (newVal !== undefined && newVal !== null) {
                                newVal.setMilliseconds(0);
                                newVal.setSeconds(0);
                            }
                        });
                    }
                }
            };
        });
    })(Web = Triarc.Web || (Triarc.Web = {}));
})(Triarc || (Triarc = {}));

