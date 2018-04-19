angular.module('uiDirect')
    .directive('uiInput', function () {
        return {
            restrict: 'E',
            scope: {
                value: '='
            },
            replace: true,
            templateUrl: 'app/directives/widget/input/input.html',
            controller: function ($scope, $element, $attrs) {

            }
        };
    });

