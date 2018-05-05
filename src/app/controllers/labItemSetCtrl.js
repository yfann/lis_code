app.controller('LabItemSetListCtrl', ['$scope', '$state', 'dataService', function ($scope, $state, dataService) {

    var link='app.labitemset_detail';
    var editUrl = '<a class="edit-tpl" ui-sref="'+link+'({id: row.entity.id})">编辑</a>';
    editUrl+='<a class="delete-tpl" ng-click="grid.appScope.delete(row.entity)">删除</a>';
    
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
                field: 'lisCode',
                displayName: '组合项目代码'
            },
            {
                field: 'lisName',
                displayName: '组合项目名称'
            },
            {
                field: 'comment',
                displayName: '备注'
            },
            {
                name: 'edit',
                displayName: '操作',
                cellTemplate: editUrl
            }
        ]
    };

    dataService.getLabItemSetList().then(function (result) {
        $scope.gridOptions.data = result.data;
    });

    $scope.search = function () {
        $scope.gridApi.grid.refresh();
    };

    $scope.create = function () {
        $state.go(link);
    };

    $scope.delete = function (obj) {
        dataService.deleteLabItemSet(id).then(function(){
            for(var i=0;i<$scope.gridOptions.data.length;i++){
                if($scope.gridOptions.data[i].id==obj.id){
                    $scope.gridOptions.data.splice(i,1);
                    break
                }
            }
        });
    };

    $scope.filter=function(renderableRows){
        var matcher = new RegExp($scope.filterValue);
        renderableRows.forEach( function( row ) {
          var match = false;
          [ 'lisName' ].forEach(function( field ){
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
}]);

app.controller('LabItemSetDetailCtrl', ['$scope', '$state', '$stateParams', 'dataService', function ($scope, $state, $stateParams, dataService) {

    $scope.model = {
        selectedlabItem: null,
        normalUp: null
    };

    $scope.selectedlabItem=null;
    $scope.labItemList=null;

    dataService.getlabitemList().then(function (result) {
        $scope.labItemList = result.data;
    });

    $scope.submit = function () {
        console.log($scope.model);
    };

}]);