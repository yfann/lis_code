app.controller('RequestListCtrl', ['$scope', '$modal', '$state', 'dataService','util', function ($scope, $modal, $state, dataService,util) {
    $scope.model = {
        filterValue: null,
        startTime: null,
        endTime: null,
        startOpened: false,
        endOpened: false
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

    var tpl = '<div ng-hide="row.entity.reStatus!=1"><button class="btn grid-btn btn-success" ng-click="grid.appScope.accept(row.entity)">接受</button><button class="btn grid-btn left-space btn-danger" ng-click="grid.appScope.reject(row.entity)">拒绝</button></div>';
    var otherTpl = '<a class="edit-tpl" ui-sref="app.request_detail({id: row.entity.id})">详情</a>';
    $scope.gridOptions = {
        enableFiltering: false,
        onRegisterApi: function (gridApi) {
            $scope.gridApi = gridApi;
            $scope.gridApi.grid.registerRowsProcessor($scope.filter, 200);
        },
        columnDefs: [
            {
                field: 'id',
                visible: false
            },
            {
                field: 'requestNo',
                displayName: '申请单号'
            },
            {
                field: 'patient.ptName',
                displayName: '病人名字'
            },
            {
                field: 'miName',
                displayName: '机构名称'
            },
            {
                field: 'formatedReqTime',
                displayName: '申请时间'
            },
            {
                field: 'reStatus',
                displayName: '申请单状态'
            },
            {
                name: 'edit',
                displayName: '操作',
                cellTemplate: tpl
            },
            {
                name: 'other',
                displayName: '其他',
                cellTemplate: otherTpl
            }
        ]
    };

    $scope.load = function () {
        dataService.getRequestList().then(function (result) {
            result.data.forEach(function (item) {
                item.formatedReqTime = util.formateDate(item.reqTime);
            });
    
            $scope.gridOptions.data = result.data;
        });
    };

    $scope.load();

    $scope.search = function () {
        $scope.gridApi.grid.refresh();
    };

    $scope.filter = function (renderableRows) {
        var matcher = new RegExp($scope.filterValue);
        renderableRows.forEach(function (row) {
            var match = false;
            ['requestNo','patient.ptName','miName'].forEach(function (field) {
                var entity = row.entity;
                field.split('.').forEach(function (f) {
                    if(entity[f]){
                        entity = entity[f];
                    }
                });
                entity = entity + '';
                if (entity.match(matcher)) {
                    match = true;
                }
            });
            if (!match) {
                row.visible = false;
            }
        });
        return renderableRows;
    };

    $scope.accept = function (obj) {
        dataService.acceptRequest(obj).then(function () {
            $scope.load();
        });
    };

    $scope.reject = function (obj) {
        $scope.modalInstance = $modal.open({
            templateUrl: '/app/tpl/dialog/reject_dialog.html',
            controller: 'RejectDialogCtrl',
            size: 'lg',
            resolve: {
                data: function () {
                    return obj;
                },
                grid: function () {
                    return {
                        reload: $scope.load
                    }
                }
            }
        });
    };


}]);


app.controller('RejectDialogCtrl', ['$scope', '$modalInstance', 'dataService', 'data', 'grid', function ($scope, $modalInstance, dataService, data, grid) {
    $scope.rejectReason = null;

    $scope.dialogSubmit = function () {
        if (data) {
            data.rejectReason = $scope.rejectReason;
        }
        dataService.rejectReqeust(data).then(function () {
            grid.reload();
            $modalInstance.close();
        });

    };
}]);

app.controller('RequestDetailCtrl', ['$scope', '$state', '$stateParams', 'dataService', 'util', function ($scope, $state, $stateParams, dataService, util) {


    if ($stateParams.id) {
        dataService.getRequestById($stateParams.id).then(function (result) {
            if (result.data) {
                result.data.reqTime = util.formateDate(result.data.reqTime);
                $scope.model = result.data;
            }
        });
    }
}]);