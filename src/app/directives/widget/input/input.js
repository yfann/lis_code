angular.module('uiDirect')
    .directive('uiInput', function () {
        return {
            restrict: 'E',
            scope: {
                value: '='
            },
            replace: true,
            templateUrl: '',
            controller: function ($scope, $element, $attrs) {

            }
        };
    });

