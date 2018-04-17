app.controller('CrisisCtrl', ['$scope', '$state', function ($scope, $state) {
    var editTpl = '<button id="editBtn" type="button" class="btn-small" ng-click="grid.appScope.go(row.entity)" >Edit</button>';
    $scope.go = function (rowData) {
        $state.go('app.crisis_detail');
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
        ],
        data: [
            {
                'id': 1,
                'name': 'test001'
            },
            {
                'id': 2,
                'name': 'test002'
            },
            {
                'id': 3,
                'name': 'test003'
            },
            {
                'id': 4,
                'name': 'test004'
            }
        ]
    };

}]);