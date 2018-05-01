app.controller('DepartListCtrl', ['$scope', '$state', 'dataService', function ($scope, $state, dataService) {
    var editUrl = '<a class="editTpl" ui-sref="app.depart_detail({id: row.entity.id})">编辑</a>'

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
                field: 'deptCode',
                displayName: '科室编码'
            },
            {
                field: 'deptName',
                displayName: '科室名称'
            },
            {
                field: 'siteName',
                displayName: '所属机构'
            },
            {
                name: 'edit',
                displayName: '操作',
                cellTemplate: editUrl
            }
        ]
    };

    dataService.getDeptList().then(function (result) {
        $scope.gridOptions.data = result.data;
    });

    $scope.search = function () {
        $scope.gridApi.grid.refresh();
    };

    $scope.create = function () {
        $state.go('app.depart_detail');
    };

    $scope.filter=function(renderableRows){
        var matcher = new RegExp($scope.filterValue);
        renderableRows.forEach( function( row ) {
          var match = false;
          [ 'deptName' ].forEach(function( field ){
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

app.controller('DepartDetailCtrl', ['$scope', '$state', '$stateParams', 'dataService', function ($scope, $state, $stateParams, dataService) {
    //console.log($stateParams);
    $scope.model = {
        id:null,
        siteId:null,
        deptCode:null,
        deptName:null,
        desc:null
    };
    $scope.siteList=null;
    $scope.selectedSite=null;

    dataService.getSiteList().then(function (result) {
        $scope.siteList = result.data;
    });

    $scope.submit = function () {
        console.log($scope.model);
        dataService.saveSite($scope.model).then(function (result) {
        });
    };

}]);