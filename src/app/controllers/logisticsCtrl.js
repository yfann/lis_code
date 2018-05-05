app.controller('LogisticsListCtrl', ['$scope', '$modal', '$state', 'dataService', function ($scope, $modal, $state, dataService) {

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
                field: 'sampleNo',
                displayName: '样本号'
            },
            {
                field: 'sendEmp',
                displayName: '送检人'
            },
            {
                field: 'sendTime',
                displayName: '送检时间'
            },
            {
                field: 'lsStatus',
                displayName: '物流状态'
            }
        ]
    };

    $scope.reload=function(){
        dataService.getLogiList().then(function (result) {
            $scope.gridOptions.data = result.data;
        });
    };

    $scope.reload();

    $scope.search = function () {
        $scope.gridApi.grid.refresh();
    };

    $scope.filter = function (renderableRows) {
        var matcher = new RegExp($scope.filterValue);
        renderableRows.forEach( function( row ) {
          var match = false;
          [ 'sampleNo' ].forEach(function( field ){
            if ( row.entity[field].match(matcher) ){
              match = true;
            }
          });
          if ( !match ){
            row.visible = false;
          }
        });
        return renderableRows;
    };

    $scope.accept = function () {

    };

    $scope.reject = function () {

    };

    $scope.openDialog = function () {
        $modal.open({
            templateUrl: '/app/tpl/dialog/sample_dialog.html',
            controller: 'SampleDialogCtrl',
            size: 'lg',
            resolve:{
                grid:function(){
                    return {
                        reload:$scope.reload
                    }
                }
            }
        });
    };
}]);

app.controller('SampleDialogCtrl', ['$scope', '$modalInstance', 'dataService','grid', function ($scope, $modalInstance, dataService,grid) {
    $scope.sampleNo = null;
    $scope.focusFlag = 1;
    $scope.model = {
        selectedSendUser: null,
        selectedAcceptUser: null,
        selectedCenterAcceptUser: null,
        sendEmId:null,
        lsEmId:null,
        centerEmId:null,
        barCodes: []
    };

    $scope.keypress = function (event) {
        if (event.charCode == 13) {
            event.preventDefault();
            event.stopPropagation();
            if ($scope.sampleNo) {
                $scope.model.barCodes.push($scope.sampleNo);
            }
            $scope.sampleNo = '';
            $scope.focusFlag++;
        }
    };

    dataService.getEmployeeList().then(function (result) {
        $scope.userList = result.data;
    });

    $scope.dialogSubmit = function () {
        if($scope.model.selectedSendUser){
            $scope.model.sendEmId=$scope.model.selectedSendUser.id;
        }
        if($scope.model.selectedAcceptUser){
            $scope.model.lsEmId=$scope.model.selectedAcceptUser.id;
        }
        if($scope.model.selectedCenterAcceptUser){
            $scope.model.centerEmId=$scope.model.selectedCenterAcceptUser.id;
        }
        dataService.acceptLogi($scope.model).then(function () {
            grid.reload();
            $modalInstance.close();
        });
    };
}]);
