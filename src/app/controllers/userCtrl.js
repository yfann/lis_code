app.controller('UserCtrl', ['$scope', '$modal', '$state', 'dataService', 'util', 'storage', function ($scope, $modal, $state, dataService, util, storage) {

    $scope.model = {
        userName: null,
        password: null
    };

    $scope.login = function () {
        if ($scope.model.userName && $scope.model.password) {
            dataService.login($scope.model.userName, $scope.model.password).then(function (result) {
                if (result.data && result.data.token) {
                    storage.setTokenAndUser(result.data.token,result.data.user);
                    $state.go('app.request');
                }
            });
        }
    };
}]);