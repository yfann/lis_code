app.controller('UserCtrl', ['$scope', '$modal', '$state', 'dataService', 'util', '$localStorage', function ($scope, $modal, $state, dataService, util,$localStorage) {

    $scope.model = {
        userName: null,
        password: null
    };

    $scope.login = function () {
        if ($scope.model.userName && $scope.model.password) {
            dataService.login($scope.model.userName, $scope.model.password).then(function (data) {
                debugger
                if(data.token){
                    $localStorage.set('token',data.token);
                    $localStorage.set('user',data.user);
                }
            });
        }
    };
}]);