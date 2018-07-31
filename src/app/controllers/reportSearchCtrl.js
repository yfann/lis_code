app.controller('ReportSearchCtrl', ['$scope', '$state', 'dataService', 'util', '$location', function ($scope, $state, dataService, util, $location) {
    var editUrl = '<a class="edit-tpl" ui-sref="report_print({id: row.entity.id})">查看</a>'

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
    $scope.search = function () {
        //$scope.gridApi.grid.refresh();
        $scope.load();
    };

    $scope.load();

}]);



app.controller('ReportPrintCtrl', ['$scope', '$state', '$stateParams', 'dataService', 'util', '$location', function ($scope, $state, $stateParams, dataService, util, $location) {
    var params = $location.search();
    var id = $stateParams.id || (params ? params.reportId : null);
    if (id) {
        dataService.getReportById(id).then(function (result) {
            result.data.formatedApplicationTime = util.formateDate(result.data.applicationTime);
            result.data.formatedSendTime = util.formateDate(result.data.sendTime);
            result.data.formatedReportTime = util.formateDate(result.data.reportTime);
            if (result.data.details) {
                result.data.details.forEach(function (item) {
                    var resultValue = new Number(item.labResult.resultValue);
                    var refLo = new Number(item.labResult.refLo);
                    var refHi = new Number(item.labResult.refHi);
                    if (!isNaN(resultValue) && !isNaN(refLo) && !isNaN(refHi)) {
                        if (resultValue < refLo || resultValue > refHi) {
                            item.isRed = true;
                        }
                    } else {
                        item.isRange = true;
                        if (item.labResult.resultValue != item.labResult.refRange) {
                            item.isRed = true;
                        }
                    }
                });
            }
            $scope.model = result.data;
        });
    }

    $scope.downloadPDF = function () {
        window.open(location.origin + '/home/DownloadPdf?reportId=' + id, '_blank');
    };
}]);