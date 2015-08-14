var Triarc;
(function (Triarc) {
    var Timepicker;
    (function (Timepicker) {
        var mod = angular.module("tlTimepicker", ["ui.bootstrap"]);
        mod.directive("tlTimepickerFocus", function () {
            return {
                restrict: "A",
                link: function (scope, element, attrs) {
                    element.find("input").first().focus();
                }
            };
        });
        mod.directive("tlTimepickerNumeric", function () {
            return {
                restrict: "A",
                link: function (scope, element, attrs) {
                    var inputs = element.find("input:lt(2)");
                    inputs.attr("pattern", "[0-9]*").attr("type", "number");
                }
            };
        });
    })(Timepicker = Triarc.Timepicker || (Triarc.Timepicker = {}));
})(Triarc || (Triarc = {}));

