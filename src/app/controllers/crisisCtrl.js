app.controller('CrisisListCtrl', ['$scope', '$state', 'dataService', function ($scope, $state, dataService) {
    var editTpl = '<button id="editBtn" type="button" class="btn-small" ng-click="grid.appScope.go(row.entity)" >Edit</button>';
    $scope.go = function (rowData) {
        $state.go('app.crisis_detail', { id: rowData.id });
    }
    $scope.gridOptions = {
        columnDefs: [
            {
                field: 'id',
                displayName: 'Id'
            },
            {
                field: 'name',
                displayName: 'Name'
            },
            {
                name: 'edit',
                displayName: 'Edit',
                cellTemplate: editTpl
            }
        ]
    };

    dataService.getlabitemList().then(function (result) {
        $scope.gridOptions.data = result.data;
    });
}]);

app.controller('CrisisDetailCtrl', ['$scope', '$state', 'dataService', function ($scope, $state, dataService) {
    $scope.selectedItem = {};

    dataService.getlabitemList().then(function(result){
        $scope.itemList=result.data;
    });
}]);