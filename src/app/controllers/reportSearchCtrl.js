app.controller('ReportSearchCtrl', ['$scope', '$state', 'dataService', 'util', '$location', function ($scope, $state, dataService, util, $location) {
    var editUrl = '<a class="edit-tpl" ui-sref="labresult_print({id: row.entity.id})">查看</a>'

    $scope.gridOptions = {
        enableFiltering: false,
        onRegisterApi: function (gridApi) {
            $scope.gridApi = gridApi;
        },
        columnDefs: [
            {
                field: 'id',
                visible: false
            },
            {
                field: 'patientName',
                displayName: '姓名'
            },
            {
                field: 'gender',
                displayName: '性别'
            },
            {
                field: 'birthDay',
                displayName: '生日'
            },
            {
                field: 'age',
                displayName: '年龄'
            },
            {
                field: 'miName',
                displayName: '检验医院名称'
            },
            {
                field: 'reportTime',
                displayName: '检验日期'
            },
            {
                field: 'setName',
                displayName: '检验项目'
            },
            {
                field: 'sampleId',
                displayName: '检验样本号'
            },
            {
                field: 'deviceName',
                displayName: '检验仪器'
            },
            {
                name: 'edit',
                displayName: '操作',
                cellTemplate: editUrl
            }
        ]
    };

    $scope.model = {
        selectedSite: null,
        patientName: null,
        idCard: null,
        checkoutDate: null,
        startOpened: false,
        endOpened: false,
    };

    $scope.dateOptions = {
        formatYear: 'yy',
        startingDay: 1,
        class: 'datepicker'
    };

    $scope.startOpen = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
        $scope.model.startOpened = true;
    };

    $scope.endOpen = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
        $scope.model.endOpened = true;
    };



    $scope.load = function () {

        dataService.searchReport($scope.model.patientName,$scope.model.idCard,$scope.model.checkoutDate).then(function (result) {
            $scope.gridOptions.data = result.data;
        });
    };

    var params = $location.search();
    if (params.requestId) {
        dataService.getRequestById(params.requestId).then(function (result) {
            if (result.data) {
                result.data.reports.forEach(function (item) {
                    item.formatedCreateTime = util.formateDate(item.createTime);
                });
                $scope.gridOptions.data = result.data.reports;
            }
        });
    } else {
        $scope.load();
    };




    $scope.search = function () {
        //$scope.gridApi.grid.refresh();
        $scope.load();
    };

    $scope.create = function () {
        $state.go('app.labresult_detail');
    };


    $scope.model = {
        selectedSite: null
    };
    $scope.siteList = null;

    dataService.getSiteList().then(function (result) {
        $scope.siteList = result.data;
    });

}]);
