var Triarc;
(function (Triarc) {
    var Timepicker;
    (function (Timepicker) {
        var mod = angular.module("tlTimepicker", ["ui.bootstrap"]);
        mod.directive("tlTimepickerFocus", ["$timeout", function ($timeout) {
            return {
                restrict: "A",
                link: function (scope, element, attrs) {
                    $timeout(function () {
                        element.find("input").first().focus();
                    }, 200);
                }
            };
        }]);
        mod.directive("tlTimepickerNumeric", function () {
            return {
                restrict: "A",
                link: function (scope, element, attrs) {
                    var inputs = element.find("input:lt(2)");
                    inputs.attr("pattern", "[0-9]*").attr("type", "number").css("padding-right", "14px");
                }
            };
        });
    })(Timepicker = Triarc.Timepicker || (Triarc.Timepicker = {}));
})(Triarc || (Triarc = {}));

