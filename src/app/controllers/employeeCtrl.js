app.controller('EmployeeListCtrl', ['$scope', '$state', 'dataService', function ($scope, $state, dataService) {

    var link = 'app.employee_detail';
    var editUrl = '<a class="editTpl" ui-sref="' + link + '({id: row.entity.id})">编辑</a>'

    $scope.gridOptions = {
        enableFiltering: false,
        onRegisterApi: function (gridApi) {
            $scope.gridApi = gridApi;
            $scope.gridApi.grid.registerRowsProcessor($scope.filter, 200);
        },
        columnDefs: [
            {
                field: 'id',
                displayName: 'Id',
                visible: false
            },
            {
                field: 'emCode',
                displayName: '员工编码'
            },
            {
                field: 'emName',
                displayName: '员工名称'
            },
            {
                field: 'titleName',
                displayName: '职称名称'
            },
            {
                field: 'iDNumber',
                displayName: '身份证号'
            },
            {
                name: 'edit',
                displayName: '操作',
                cellTemplate: editUrl
            }
        ]
    };

    dataService.getEmployeeList().then(function (result) {
        $scope.gridOptions.data = result.data;
    });

    $scope.search = function () {
        $scope.gridApi.grid.refresh();
    };

    $scope.create = function () {
        $state.go(link);
    };

    $scope.filter = function (renderableRows) {
        var matcher = new RegExp($scope.filterValue);
        renderableRows.forEach(function (row) {
            var match = false;
            ['emName'].forEach(function (field) {
                if (row.entity[field].match(matcher)) {
                    match = true;
                }
            });
            if (!match) {
                row.visible = false;
            }
        });
        return renderableRows;
    };
}]);

app.controller('EmployeeDetailCtrl', ['$scope', '$state', '$stateParams', 'dataService', function ($scope, $state, $stateParams, dataService) {
    //console.log($stateParams);
    $scope.model = {

        id: null,
        siteId: null,
        deptId: null,
        emCode: null,
        emName: null,
        iDNumber: null,
        phone: null,
        titleId: null,
        titleName: null,
        password: null,
        desc: null,
        birthDay: null
    };

    $scope.siteList = null;
    $scope.deptList = null;
    $scope.selectedSex = null;
    $scope.selectedSite = null;
    $scope.selectedDept = null;

    $scope.dateOptions = {
        formatYear: 'yy',
        startingDay: 1,
        class: 'datepicker'
    };

    $scope.openDate = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();

        $scope.opened = true;
    };

    dataService.getSiteList().then(function (result) {
        $scope.siteList = result.data;
    });
    dataService.getDeptList().then(function (result) {
        $scope.deptList = result.data;
    });

    $scope.submit = function () {
        console.log($scope.model);
        dataService.saveEmployee($scope.model).then(function(){

        });
    };

}]);