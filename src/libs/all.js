'use strict';


angular.module('app', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ngStorage',
    'ui.router',
    'ui.bootstrap',
    'ui.load',
    'ui.jq',
    'ui.validate',
    'oc.lazyLoad',
    'pascalprecht.translate',
    'toaster',
    'ui.grid',
    'ui.grid.edit',
    'ui.grid.selection',
    'ui.select',
    //custom
    'httpService',
    'uiDirect'
]);

angular.module('uiDirect',[]);

// config

var app =
  angular.module('app').config(
    ['$controllerProvider', '$compileProvider', '$filterProvider', '$provide',
      function ($controllerProvider, $compileProvider, $filterProvider, $provide) {

        // lazy controller, directive and service
        app.controller = $controllerProvider.register;
        app.directive = $compileProvider.directive;
        app.filter = $filterProvider.register;
        app.factory = $provide.factory;
        app.service = $provide.service;
        app.constant = $provide.constant;
        app.value = $provide.value;
      }
    ]).config(['$translateProvider', function ($translateProvider) {
      $translateProvider.useStaticFilesLoader({
        prefix: 'i18n/',
        suffix: '.json'
      });
      $translateProvider.preferredLanguage('zh_cn');
      $translateProvider.useLocalStorage();
    }]);

// 翻译快捷方式
var T = {};
// 本地存储快捷方式
var S = {};
app.run(['$translate', '$localStorage',
        function ($translate, $localStorage) {
            // 定义翻译快捷方式
            T = function (key) {
                return $translate.instant(key);
            };

            S = $localStorage;
        }
    ]);
// lazyload config

angular.module('app')
  .constant('JQ_CONFIG', {
      filestyle:      ['vendor2/jquery/file/bootstrap-filestyle.min.js'],
      slider:         ['vendor2/jquery/slider/bootstrap-slider.js',
                          'vendor2/jquery/slider/slider.css'],
      wysiwyg:        ['vendor2/jquery/wysiwyg/bootstrap-wysiwyg.js',
                          'vendor2/jquery/wysiwyg/jquery.hotkeys.js'],
      chosen:         ['vendor2/jquery/chosen/chosen.jquery.min.js',
                          'vendor2/jquery/chosen/chosen.css'],
      TouchSpin:      ['vendor2/jquery/spinner/jquery.bootstrap-touchspin.min.js',
                          'vendor2/jquery/spinner/jquery.bootstrap-touchspin.css'],
      }
  );
'use strict';

/**
 * Config for the router
 */
angular.module('app')
    .run(
        ['$rootScope', '$state', '$stateParams',
            function ($rootScope, $state, $stateParams) {
                $rootScope.$state = $state;
                $rootScope.$stateParams = $stateParams;
            }
        ]
    )
    .config(
        ['$stateProvider', '$urlRouterProvider',
            function ($stateProvider, $urlRouterProvider) {

                $urlRouterProvider.otherwise('/app/request');

                $stateProvider
                    .state('app', {
                        abstract: true,
                        url: '/app',
                        templateUrl: 'tpl/app.html'
                    })
                    .state('app.crisis', {
                        url: '/crisis',
                        templateUrl: 'tpl/crisis/crisis_list.html',
                        controller: 'CrisisListCtrl'
                    })
                    .state('app.crisis_detail', {
                        url: '/crisis_detail',
                        params: {
                            id: null
                        },
                        templateUrl: 'tpl/crisis/crisis_detail.html',
                        controller: 'CrisisDetailCtrl'
                    })
                    .state('app.depart', {
                        url: '/depart',
                        templateUrl: 'tpl/depart/depart_list.html',
                        controller: 'DepartListCtrl'
                    })
                    .state('app.depart_detail', {
                        url: '/depart_detail',
                        params: {
                            id: null
                        },
                        templateUrl: 'tpl/depart/depart_detail.html',
                        controller: 'DepartDetailCtrl'
                    })
                    .state('app.request', {
                        url: '/request',
                        params: {
                            id: null
                        },
                        templateUrl: 'tpl/request/request_list.html',
                        controller: 'RequestListCtrl'
                    })
                    .state('app.request_detail', {
                        url: '/request_detail',
                        params: {
                            id: null
                        },
                        templateUrl: 'tpl/request/request_detail.html',
                        controller: 'RequestDetailCtrl'
                    })
                    .state('app.employee', {
                        url: '/employee',
                        params: {
                            id: null
                        },
                        templateUrl: 'tpl/employee/employee_list.html',
                        controller: 'EmployeeListCtrl'
                    })
                    .state('app.employee_detail', {
                        url: '/employee_detail',
                        params: {
                            id: null
                        },
                        templateUrl: 'tpl/employee/employee_detail.html',
                        controller: 'EmployeeDetailCtrl'
                    })
                    .state('app.patient', {
                        url: '/patient',
                        params: {
                            id: null
                        },
                        templateUrl: 'tpl/patient/patient_list.html',
                        controller: 'PatientListCtrl'
                    })
                    .state('app.patient_detail', {
                        url: '/patient_detail',
                        params: {
                            id: null
                        },
                        templateUrl: 'tpl/patient/patient_detail.html',
                        controller: 'PatientDetailCtrl'
                    })
                    .state('app.medical', {
                        url: '/medical',
                        params: {
                            id: null
                        },
                        templateUrl: 'tpl/medical/medical_list.html',
                        controller: 'MedicalListCtrl'
                    })
                    .state('app.medical_detail', {
                        url: '/medical_detail',
                        params: {
                            id: null
                        },
                        templateUrl: 'tpl/medical/medical_detail.html',
                        controller: 'MedicalDetailCtrl'
                    })
                    .state('app.labitem', {
                        url: '/labitem',
                        params: {
                            id: null
                        },
                        templateUrl: 'tpl/labitem/labitem_list.html',
                        controller: 'LabitemListCtrl'
                    })
                    .state('app.labitem_detail', {
                        url: '/labitem_detail',
                        params: {
                            id: null
                        },
                        templateUrl: 'tpl/labitem/labitem_detail.html',
                        controller: 'LabitemDetailCtrl'
                    })
                    .state('app.category', {
                        url: '/category',
                        params: {
                            id: null
                        },
                        templateUrl: 'tpl/category/category_list.html',
                        controller: 'CategoryListCtrl'
                    })
                    .state('app.category_detail', {
                        url: '/category_detail',
                        params: {
                            id: null
                        },
                        templateUrl: 'tpl/category/category_detail.html',
                        controller: 'CategoryDetailCtrl'
                    })
                    .state('app.logistics', {
                        url: '/logistics',
                        params: {
                            id: null
                        },
                        templateUrl: 'tpl/logistics/logistics_list.html',
                        controller: 'LogisticsListCtrl'
                    })
                    .state('app.labresult', {
                        url: '/labresult',
                        params: {
                            id: null
                        },
                        templateUrl: 'tpl/labresult/labresult_list.html',
                        controller: 'LabresultListCtrl'
                    })
                    .state('app.labresult_detail', {
                        url: '/labresult_detail',
                        params: {
                            id: null
                        },
                        templateUrl: 'tpl/labresult/labresult_detail.html',
                        controller: 'LabresultDetailCtrl'
                    })
                    .state('app.sampletype', {
                        url: '/sampletype',
                        params: {
                            id: null
                        },
                        templateUrl: 'tpl/sample_type/sampletype_list.html',
                        controller: 'SampleTypeListCtrl'
                    })
                    .state('app.sampletype_detail', {
                        url: '/sampletype_detail',
                        params: {
                            id: null
                        },
                        templateUrl: 'tpl/sample_type/sampletype_detail.html',
                        controller: 'SampleTypeDetailCtrl'
                    })
                    .state('app.qcvalue', {
                        url: '/qcvalue',
                        params: {
                            id: null
                        },
                        templateUrl: 'tpl/qcvalue/qcvalue_list.html',
                        controller: 'QcvalueListCtrl'
                    })
                    .state('app.qcvalue_detail', {
                        url: '/qcvalue_detail',
                        params: {
                            id: null
                        },
                        templateUrl: 'tpl/qcvalue/qcvalue_detail.html',
                        controller: 'QcvalueDetailCtrl'
                    })
                    .state('app.labitemset', {
                        url: '/labitemset',
                        params: {
                            id: null
                        },
                        templateUrl: 'tpl/labitemset/labitemset_list.html',
                        controller: 'LabItemSetListCtrl'
                    })
                    .state('app.labitemset_detail', {
                        url: '/labitemset_detail',
                        params: {
                            id: null
                        },
                        templateUrl: 'tpl/labitemset/labitemset_detail.html',
                        controller: 'LabItemSetDetailCtrl'
                    })
                    .state('labresult_print', {
                        url: '/labresult_print',
                        params: {
                            id: null
                        },
                        templateUrl: 'tpl/labresult/labresult_print.html',
                        controller: 'LabresultPrintCtrl'
                    })
            }
        ]
    );
'use strict';

/* Controllers */

angular.module('app')
  .controller('AppCtrl', ['$scope', '$translate', '$localStorage', '$window',
    function ($scope, $translate, $localStorage, $window) {
      // add 'ie' classes to html
      var isIE = !!navigator.userAgent.match(/MSIE/i);
      isIE && angular.element($window.document.body).addClass('ie');
      isSmartDevice($window) && angular.element($window.document.body).addClass('smart');

      // config
      $scope.app = {
        settings: {
          themeID: 1,
          navbarHeaderColor: 'bg-black',
          navbarCollapseColor: 'head-lightblue',
          asideColor: 'aside-blue',
          headerFixed: true,
          asideFixed: true,
          asideFolded: false,
          asideDock: false,
          container: false
        }
      }

      // save settings to local storage
      // if ( angular.isDefined($localStorage.settings) ) {
      //   $scope.app.settings = $localStorage.settings;
      // } else {
      //   $localStorage.settings = $scope.app.settings;
      // }
      $scope.$watch('app.settings', function () {
        if ($scope.app.settings.asideDock && $scope.app.settings.asideFixed) {
          // aside dock and fixed must set the header fixed.
          $scope.app.settings.headerFixed = true;
        }
        // save to local storage
        $localStorage.settings = $scope.app.settings;
      }, true);

      function isSmartDevice($window) {
        // Adapted from http://www.detectmobilebrowsers.com
        var ua = $window['navigator']['userAgent'] || $window['navigator']['vendor'] || $window['opera'];
        // Checks for iOs, Android, Blackberry, Opera Mini, and Windows mobile devices
        return (/iPhone|iPod|iPad|Silk|Android|BlackBerry|Opera Mini|IEMobile/).test(ua);
      }

      $scope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {

      });

      //top level scope
      //fix me
      //$scope.filter_tip = T('list.filter_tip');
      $scope.filter_tip = '输入搜索关键字';
    }]);
app.controller('CategoryListCtrl', ['$scope', '$state', 'dataService', function ($scope, $state, dataService) {

    var link = 'app.category_detail';
    var editUrl = '<a class="edit-tpl" ui-sref="' + link + '({id: row.entity.id})">编辑</a>';
        editUrl+='<a class="delete-tpl" ng-click="grid.appScope.delete(row.entity.id)">删除</a>';

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
                field: 'lcCode',
                displayName: '检验类别代码'
            },
            {
                field: 'lcName',
                displayName: '检验类别名称'
            },
            {
                field: 'lcName',
                displayName: '检验类别名称'
            },
            {
                field: 'barcodePre',
                displayName: '代码前缀'
            },
            {
                name: 'edit',
                displayName: '操作',
                cellTemplate: editUrl
            }
        ]
    };

    dataService.getLabCategoryList().then(function (result) {
        $scope.gridOptions.data = result.data;
    });

    $scope.search = function () {
        $scope.gridApi.grid.refresh();
    };

    $scope.create = function () {
        $state.go(link);
    };

    $scope.delete = function (id) {
        dataService.deleteLabCategory(id);
    };

    $scope.filter = function (renderableRows) {
        var matcher = new RegExp($scope.filterValue);
        renderableRows.forEach(function (row) {
            var match = false;
            ['lcName'].forEach(function (field) {
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

app.controller('CategoryDetailCtrl', ['$scope', '$state', '$stateParams', 'dataService', function ($scope, $state, $stateParams, dataService) {

    $scope.model = {
        id: null,
        lcCode: null,
        lcName: null,
        barcodePre: null,
        externalCode: null,
        color: null,
        booldAlone: null,
        examNum: null
    };


    $scope.submit = function () {
        console.log($scope.model);
        dataService.saveLabCategory($scope.model).then();
    };

}]);
app.controller('CrisisListCtrl', ['$scope', '$state', 'dataService', function ($scope, $state, dataService) {
    // var tpl = '<button id="editBtn" type="button" class="btn-small" ng-click="grid.appScope.go(row.entity)" >Edit</button>';
    // $scope.go = function (rowData) {
    //     $state.go('app.crisis_detail', { id: rowData.id });
    // }

    var editUrl = '<a class="edit-tpl" ui-sref="app.crisis_detail({id: row.entity.id})">编辑</a><a class="delete-tpl" ng-click="grid.appScope.delete(row.entity.id)">删除</a>'

    $scope.gridOptions = {
        enableFiltering: false,
        onRegisterApi: function (gridApi) {
            $scope.gridApi = gridApi;
            $scope.gridApi.grid.registerRowsProcessor($scope.filter, 200);
        },
        columnDefs: [
            {
                field: 'id',
                displayName: 'Id'
            },
            {
                field: 'labItemName',
                displayName: '检验项目'
            },
            {
                field: 'normalUpper',
                displayName: '正常上限'
            },
            {
                field: 'normalLow',
                displayName: '正常下限'
            },
            {
                field: 'createTime',
                displayName: '创建时间'
            },
            {
                name: 'edit',
                displayName: '操作',
                cellTemplate: editUrl
            }
        ]
    };

    dataService.getCrisisList().then(function (result) {
        $scope.gridOptions.data = result.data;
    });

    $scope.search = function () {
        $scope.gridApi.grid.refresh();
    };

    $scope.create = function () {
        $state.go('app.crisis_detail');
    };

    $scope.delete = function (id) {
        dataService.deleteCrisis(id);
    };

    $scope.filter=function(renderableRows){
        var matcher = new RegExp($scope.filterValue);
        renderableRows.forEach( function( row ) {
          var match = false;
          [ 'labItemName' ].forEach(function( field ){
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

app.controller('CrisisDetailCtrl', ['$scope', '$state', '$stateParams', 'dataService', function ($scope, $state, $stateParams, dataService) {
    //console.log($stateParams);
    $scope.model = {
        selectedlabItem: null,
        id:null,
        lmId:null,
        normalUpper:null,
        normalLow:null,
        crisisUpper:null,
        crisisLow:null,
        crisisClinical:null,
        clinicasSignificance:null
    };
    dataService.getlabitemList().then(function (result) {
        $scope.labItemList = result.data;
    });

    $scope.submit = function () {
        console.log($scope.model);
        dataService.saveCrisis($scope.model).then(function(){

        });
    };

}]);
app.controller('DepartListCtrl', ['$scope', '$state', 'dataService', function ($scope, $state, dataService) {
    var editUrl = '<a class="edit-tpl" ui-sref="app.depart_detail({id: row.entity.id})">编辑</a>';
    editUrl+='<a class="delete-tpl" ng-click="grid.appScope.delete(row.entity.id)">删除</a>';

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

    $scope.delete = function (id) {
        dataService.deleteDept(id);
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
app.controller('EmployeeListCtrl', ['$scope', '$state', 'dataService', function ($scope, $state, dataService) {

    var link = 'app.employee_detail';
    var editUrl = '<a class="edit-tpl" ui-sref="' + link + '({id: row.entity.id})">编辑</a>';
    editUrl+='<a class="delete-tpl" ng-click="grid.appScope.delete(row.entity.id)">删除</a>';

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

    $scope.delete = function (id) {
        dataService.deleteEmployee(id);
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
app.controller('LabitemListCtrl', ['$scope', '$state', 'dataService', function ($scope, $state, dataService) {

    var link = 'app.labitem_detail';
    var editUrl = '<a class="edit-tpl" ui-sref="' + link + '({id: row.entity.id})">编辑</a>';
    editUrl+='<a class="delete-tpl" ng-click="grid.appScope.delete(row.entity.id)">删除</a>';

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
                field: 'itemCode',
                displayName: '代码'
            },
            {
                field: 'standardCode',
                displayName: '标准代码'
            },
            {
                field: 'itemName',
                displayName: '项目名称'
            },
            {
                field: 'resultType',
                displayName: '结果类型'
            },
            {
                name: 'edit',
                displayName: '操作',
                cellTemplate: editUrl
            }
        ]
    };

    dataService.getlabitemList().then(function (result) {
        $scope.gridOptions.data = result.data;
    });

    $scope.search = function () {
        $scope.gridApi.grid.refresh();
    };

    $scope.create = function () {
        $state.go(link);
    };

    $scope.delete = function (id) {
        dataService.deleteLabItem(id);
    };

    $scope.filter = function (renderableRows) {
        var matcher = new RegExp($scope.filterValue);
        renderableRows.forEach(function (row) {
            var match = false;
            ['itemName'].forEach(function (field) {
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

app.controller('LabitemDetailCtrl', ['$scope', '$state', '$stateParams', 'dataService', function ($scope, $state, $stateParams, dataService) {
    //console.log($stateParams);
    $scope.model = {
        id: null,
        lcId: null,
        itemCode: null,
        standardCode: null,
        itemName: null,
        category: null,
        resultType: null,
        unit: null,
        lifeLimit: null,
        defValue: null,
        typeCode1: null,
        typeCode2: null,
        important: null,
        associated: null,
        conditionAudit: null,
        comment: null,
        display: null,
        precision: null,
        price: null,
        canZero: null,
        canLessZero: null,
        meanOfclinic: null,
        desc: null
    };
    $scope.selectedLabCategory = null;
    $scope.labCategoryList = null;
    dataService.getLabCategoryList().then(function (result) {
        $scope.labCategoryList = result.data;
    });

    $scope.submit = function () {
        console.log($scope.model);
        dataService.saveLabitem($scope.model).then();
    };

}]);
app.controller('LabItemSetListCtrl', ['$scope', '$state', 'dataService', function ($scope, $state, dataService) {

    var link='app.labitemset_detail';
    var editUrl = '<a class="edit-tpl" ui-sref="'+link+'({id: row.entity.id})">编辑</a>';
    editUrl+='<a class="delete-tpl" ng-click="grid.appScope.delete(row.entity.id)">删除</a>';
    
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

    $scope.delete = function (id) {
        dataService.deleteLabItemSet(id);
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
app.controller('LabresultListCtrl', ['$scope', '$state', 'dataService', function ($scope, $state, dataService) {
    var editUrl = '<a class="edit-tpl" ui-sref="labresult_print({id: row.entity.id})">打印</a>'

    $scope.gridOptions = {
        enableFiltering: false,
        onRegisterApi: function (gridApi) {
            $scope.gridApi = gridApi;
            $scope.gridApi.grid.registerRowsProcessor($scope.filter, 200);
        },
        columnDefs:  [
            {
                field: 'id',
                visible: false
            },
            {
                field: 'requestNo',
                displayName: '申请单号'
            },
            {
                field: 'empName',
                displayName: '申请员工'
            },
            {
                field: 'reqTime',
                displayName: '申请时间'
            },
            {
                name: 'edit',
                displayName: '操作',
                cellTemplate: editUrl
            }
        ]
    };

    dataService.getRequestList().then(function (result) {
        $scope.gridOptions.data = result.data;
    });

    $scope.search = function () {
        $scope.gridApi.grid.refresh();
    };

    $scope.create = function () {
        $state.go('app.labresult_detail');
    };

    $scope.filter=function(renderableRows){
        // var matcher = new RegExp($scope.filterValue);
        // renderableRows.forEach( function( row ) {
        //   var match = false;
        //   [ 'name' ].forEach(function( field ){
        //     if ( row.entity[field].match(matcher) ){
        //       match = true;
        //     }
        //   });
        //   if ( !match ){
        //     row.visible = false;
        //   }
        // });
        return renderableRows;
    };

    $scope.accept=function(){

    };

    $scope.reject=function(){

    };
}]);

app.controller('LabresultDetailCtrl', ['$scope', '$state', '$stateParams', 'dataService', function ($scope, $state, $stateParams, dataService) {

    $scope.model = {
        selectedlabItem: null,
        normalUp: null
    };
    dataService.getRequestList().then(function (result) {
        $scope.itemList = result.data;
    });

    $scope.submit = function () {
        console.log($scope.model);
    };

}]);

app.controller('LabresultPrintCtrl', ['$scope', '$state', '$stateParams', 'dataService', function ($scope, $state, $stateParams, dataService) {

}]);
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

    dataService.getSampleList().then(function (result) {
        $scope.gridOptions.data = result.data;
    });

    $scope.search = function () {
        $scope.gridApi.grid.refresh();
    };

    $scope.filter = function (renderableRows) {
        // var matcher = new RegExp($scope.filterValue);
        // renderableRows.forEach( function( row ) {
        //   var match = false;
        //   [ 'name' ].forEach(function( field ){
        //     if ( row.entity[field].match(matcher) ){
        //       match = true;
        //     }
        //   });
        //   if ( !match ){
        //     row.visible = false;
        //   }
        // });
        return renderableRows;
    };

    $scope.accept = function () {

    };

    $scope.reject = function () {

    };

    $scope.openDialog = function () {
        $modal.open({
            templateUrl: '../tpl/dialog/sample_dialog.html',
            controller: 'SampleDialogCtrl',
            size: 'lg'
        });
    };
}]);

app.controller('SampleDialogCtrl', ['$scope', '$modalInstance', 'dataService', function ($scope, $modalInstance, dataService) {
    $scope.sampleNo = null;
    $scope.focusFlag = 1;
    $scope.sampleList = [];
    $scope.sendEmp=null;

    $scope.keypress = function (event) {
        if (event.charCode == 13) {
            event.preventDefault();
            event.stopPropagation();
            if($scope.sampleNo){
                $scope.sampleList.push($scope.sampleNo);
            }
            $scope.sampleNo = '';
            $scope.focusFlag++;
        }
    };

    $scope.dialogSubmit = function () {
        $modalInstance.close();
    };
}]);

app.controller('MedicalListCtrl', ['$scope', '$state', 'dataService', function ($scope, $state, dataService) {

    var link = 'app.medical_detail';
    var editUrl = '<a class="edit-tpl" ui-sref="' + link + '({id: row.entity.id})">编辑</a>';
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
                field: 'miCode',
                displayName: '机构编码'
            },
            {
                field: 'miName',
                displayName: '机构名称'
            },
            {
                field: 'miCategory',
                displayName: '机构类别'
            },
            {
                name: 'edit',
                displayName: '操作',
                cellTemplate: editUrl
            }
        ]
    };

    dataService.getSiteList().then(function (result) {
        $scope.gridOptions.data = result.data;
    });

    $scope.search = function () {
        $scope.gridApi.grid.refresh();
    };

    $scope.create = function () {
        $state.go(link);
    };

    $scope.delete = function (obj) {
        dataService.deleteSite(obj).then(function(){
            for(var i=0;i<$scope.gridOptions.data.length;i++){
                if($scope.gridOptions.data[i].id==obj.id){
                    $scope.gridOptions.data.splice(i,1);
                    break
                }
            }
        });
    };

    $scope.filter = function (renderableRows) {
        var matcher = new RegExp($scope.filterValue);
        renderableRows.forEach(function (row) {
            var match = false;
            ['miName'].forEach(function (field) {
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

app.controller('MedicalDetailCtrl', ['$scope', '$state', '$stateParams', 'dataService', function ($scope, $state, $stateParams, dataService) {
    $scope.model = {
        id: null,
        miCode: null,
        miName: null,
        miCategory: null,
        areaCode: null,
        address: null,
        desc: null
    };
    
    
    if($stateParams.id){
        dataService.getSiteById($stateParams.id).then(function(result){
            if(result.data){
                $scope.model=result.data;
            }
        });
    }

    

    $scope.submit = function () {
        console.log($scope.model);
        dataService.saveSite($scope.model).then(function(){
            $state.go('app.medical');
        });
    };

}]);
app.controller('PatientListCtrl', ['$scope', '$state', 'dataService', function ($scope, $state, dataService) {

    var link='app.patient_detail';
    var editUrl = '<a class="edit-tpl" ui-sref="'+link+'({id: row.entity.id})">编辑</a>';
    editUrl+='<a class="delete-tpl" ng-click="grid.appScope.delete(row.entity.id)">删除</a>';

    $scope.gridOptions = {
        enableFiltering: false,
        onRegisterApi: function (gridApi) {
            $scope.gridApi = gridApi;
            $scope.gridApi.grid.registerRowsProcessor($scope.filter, 200);
        },
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
                cellTemplate: editUrl
            }
        ]
    };

    dataService.getlabitemList().then(function (result) {
        $scope.gridOptions.data = result.data;
    });

    $scope.search = function () {
        $scope.gridApi.grid.refresh();
    };

    $scope.create = function () {
        $state.go(link);
    };

    $scope.delete = function (id) {
        dataService.deletePatient(id);
    };

    $scope.filter=function(renderableRows){
        var matcher = new RegExp($scope.filterValue);
        renderableRows.forEach( function( row ) {
          var match = false;
          [ 'name' ].forEach(function( field ){
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

app.controller('PatientDetailCtrl', ['$scope', '$state', '$stateParams', 'dataService', function ($scope, $state, $stateParams, dataService) {
    //console.log($stateParams);
    $scope.model = {
        selectedSex: null,
        birthDate: new Date()
    };

    $scope.dateOptions = {
        formatYear: 'yy',
        startingDay: 1,
        class: 'datepicker'
    };

    $scope.openDate = function($event) {
        $event.preventDefault();
        $event.stopPropagation();
  
        $scope.opened = true;
    };

    dataService.getSexList().then(function (result) {
        $scope.sexList = result.data;
    });

    $scope.submit = function () {
        console.log($scope.model);
    };

}]);
app.controller('QcvalueListCtrl', ['$scope', '$state', 'dataService', function ($scope, $state, dataService) {

    var link = 'app.qcvalue_detail';
    var editUrl = '<a class="edit-tpl" ui-sref="' + link + '({id: row.entity.id})">编辑</a>';
    editUrl+='<a class="delete-tpl" ng-click="grid.appScope.delete(row.entity.id)">删除</a>';

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
                field: 'miName',
                displayName: '医院名称'
            },
            {
                field: 'instrumentName',
                displayName: '仪器名称'
            },
            {
                field: 'instrumentName',
                displayName: '质控项目'
            },
            {
                field: 'value',
                displayName: '质控值'
            },
            {
                field: 'qcTime',
                displayName: '质控时间'
            },
            {
                field: 'qcer',
                displayName: '质控人员'
            },
            {
                name: 'edit',
                displayName: '操作',
                cellTemplate: editUrl
            }
        ]
    };

    dataService.getQCValueList().then(function (result) {
        $scope.gridOptions.data = result.data;
    });

    $scope.search = function () {
        $scope.gridApi.grid.refresh();
    };

    $scope.create = function () {
        $state.go(link);
    };

    $scope.delete = function (id) {
        dataService.deleteQCValue(id);
    };

    $scope.filter = function (renderableRows) {
        var matcher = new RegExp($scope.filterValue);
        renderableRows.forEach(function (row) {
            var match = false;
            ['instrumentName'].forEach(function (field) {
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

app.controller('QcvalueDetailCtrl', ['$scope', '$state', '$stateParams', 'dataService', function ($scope, $state, $stateParams, dataService) {

    $scope.model = {
        id: null,
        lmId: null,
        miId: null,
        instrumentId: null,
        instrumentName: null,
        qcer: null,
        qcTime: null,
        qcNum: null,
        value: null,
        comment: null,
        other1: null,
        other2: null,
        other3: null,
        other4: null,
        other5: null,
        other6: null
    };

    $scope.labItemList=null;
    $scope.selectedLabItem=null;
    $scope.siteList=null;
    $scope.selectedSite=null;


    dataService.getlabitemList().then(function (result) {
        $scope.labItemList = result.data;
    });

    dataService.getSiteList().then(function (result) {
        $scope.siteList = result.data;
    });

    $scope.submit = function () {
        console.log($scope.model);
        dataService.saveQCValue($scope.model).then();
    };

}]);
app.controller('RequestListCtrl', ['$scope', '$modal', '$state', 'dataService', function ($scope, $modal, $state, dataService) {
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

    var tpl = '<div><button class="btn grid-btn btn-success" ng-click="grid.appScope.accept(row.entity)">接受</button><button class="btn grid-btn left-space btn-danger" ng-click="grid.appScope.reject(row.entity)">拒绝</button></div>';
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
                field: 'empName',
                displayName: '申请员工'
            },
            {
                field: 'reqTime',
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

    dataService.getRequestList().then(function (result) {
        $scope.gridOptions.data = result.data;
    });

    $scope.search = function () {
        $scope.gridApi.grid.refresh();
    };

    $scope.filter = function (renderableRows) {
        var matcher = new RegExp($scope.filterValue);
        renderableRows.forEach(function (row) {
            var match = false;
            ['requestNo'].forEach(function (field) {
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

    $scope.accept = function () {

    };

    $scope.reject = function () {
        $scope.modalInstance = $modal.open({
            templateUrl: '../tpl/dialog/reject_dialog.html',
            controller: 'RejectDialogCtrl',
            size: 'lg'
        });
    };


}]);


app.controller('RejectDialogCtrl', ['$scope', '$modalInstance', 'dataService', function ($scope, $modalInstance, dataService) {
    $scope.rejectReason = null;

    $scope.dialogSubmit = function () {
        $modalInstance.close();
    };
}]);

app.controller('RequestDetailCtrl', ['$scope', '$state', '$stateParams', 'dataService', function ($scope, $state, $stateParams, dataService) {

}]);
app.controller('SampleTypeListCtrl', ['$scope', '$state', 'dataService', function ($scope, $state, dataService) {

    var link='app.sampletype_detail';
    var editUrl = '<a class="edit-tpl" ui-sref="'+link+'({id: row.entity.id})">编辑</a>';
    editUrl+='<a class="delete-tpl" ng-click="grid.appScope.delete(row.entity.id)">删除</a>';
    
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
                field: 'code',
                displayName: '编码'
            },
            {
                field: 'chtName',
                displayName: '中文名称'
            },
            {
                field: 'engName',
                displayName: '英文名称'
            },
            {
                field: 'seqNo',
                displayName: '排序号'
            },
            {
                name: 'edit',
                displayName: '操作',
                cellTemplate: editUrl
            }
        ]
    };

    dataService.getSampleTypeList().then(function (result) {
        $scope.gridOptions.data = result.data;
    });

    $scope.search = function () {
        $scope.gridApi.grid.refresh();
    };

    $scope.create = function () {
        $state.go(link);
    };

    $scope.delete = function (id) {
        dataService.deleteSampleType(id);
    };

    $scope.filter=function(renderableRows){
        var matcher = new RegExp($scope.filterValue);
        renderableRows.forEach( function( row ) {
          var match = false;
          [ 'code' ].forEach(function( field ){
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

app.controller('SampleTypeDetailCtrl', ['$scope', '$state', '$stateParams', 'dataService', function ($scope, $state, $stateParams, dataService) {

    if($stateParams.id){

    }

    $scope.model = {
        id:null,
        parentId:null,
        code:null,
        chtName:null,
        engName:null,
        seqNo:null,
        helpCode:null
    };


    $scope.submit = function () {
        console.log($scope.model);
        dataService.saveSampleType($scope.model).then();
    };

}]);
angular.module('app')
  .directive('setNgAnimate', ['$animate', function ($animate) {
    return {
        link: function ($scope, $element, $attrs) {
            $scope.$watch( function() {
                return $scope.$eval($attrs.setNgAnimate, $scope);
            }, function(valnew, valold){
                $animate.enabled(!!valnew, $element);
            });
        }
    };
  }]);
angular.module('app')
  .directive('uiButterbar', ['$rootScope', '$anchorScroll', function($rootScope, $anchorScroll) {
     return {
      restrict: 'AC',
      template:'<span class="bar"></span>',
      link: function(scope, el, attrs) {        
        el.addClass('butterbar hide');
        scope.$on('$stateChangeStart', function(event) {
          $anchorScroll();
          el.removeClass('hide').addClass('active');
        });
        scope.$on('$stateChangeSuccess', function( event, toState, toParams, fromState ) {
          event.targetScope.$watch('$viewContentLoaded', function(){
            el.addClass('hide').removeClass('active');
          })
        });
      }
     };
  }]);
angular.module('app')
  .directive('uiFocus', function($timeout, $parse) {
    return {
      link: function(scope, element, attr) {
        var model = $parse(attr.uiFocus);
        $timeout(function() {
          element[0].focus();
        });
        scope.$watch(model, function(value) {
          if(value) {
            $timeout(function() {
              element[0].focus();
            });
          }
        });
        element.bind('blur', function() {
           //scope.$apply(model.assign(scope, false));
        });
      }
    };
  });
 angular.module('app')
  .directive('uiFullscreen', ['uiLoad', '$document', '$window', function(uiLoad, $document, $window) {
    return {
      restrict: 'AC',
      template:'<i class="fa fa-expand fa-fw text"></i><i class="fa fa-compress fa-fw text-active"></i>',
      link: function(scope, el, attr) {
        el.addClass('hide');
        uiLoad.load('vendor/libs/screenfull.min.js').then(function(){
          // disable on ie11
          if (screenfull.enabled && !navigator.userAgent.match(/Trident.*rv:11\./)) {
            el.removeClass('hide');
          }
          el.on('click', function(){
            var target;
            attr.target && ( target = $(attr.target)[0] );            
            screenfull.toggle(target);
          });
          $document.on(screenfull.raw.fullscreenchange, function () {
            if(screenfull.isFullscreen){
              el.addClass('active');
            }else{
              el.removeClass('active');
            }
          });
        });
      }
    };
  }]);
'use strict';

/**
 * 0.1.1
 * General-purpose jQuery wrapper. Simply pass the plugin name as the expression.
 *
 * It is possible to specify a default set of parameters for each jQuery plugin.
 * Under the jq key, namespace each plugin by that which will be passed to ui-jq.
 * Unfortunately, at this time you can only pre-define the first parameter.
 * @example { jq : { datepicker : { showOn:'click' } } }
 *
 * @param ui-jq {string} The $elm.[pluginName]() to call.
 * @param [ui-options] {mixed} Expression to be evaluated and passed as options to the function
 *     Multiple parameters can be separated by commas
 * @param [ui-refresh] {expression} Watch expression and refire plugin on changes
 *
 * @example <input ui-jq="datepicker" ui-options="{showOn:'click'},secondParameter,thirdParameter" ui-refresh="iChange">
 */
angular.module('ui.jq', ['ui.load']).
  value('uiJqConfig', {}).
  directive('uiJq', ['uiJqConfig', 'JQ_CONFIG', 'uiLoad', '$timeout', function uiJqInjectingFunction(uiJqConfig, JQ_CONFIG, uiLoad, $timeout) {

  return {
    restrict: 'A',
    compile: function uiJqCompilingFunction(tElm, tAttrs) {

      if (!angular.isFunction(tElm[tAttrs.uiJq]) && !JQ_CONFIG[tAttrs.uiJq]) {
        throw new Error('ui-jq: The "' + tAttrs.uiJq + '" function does not exist');
      }
      var options = uiJqConfig && uiJqConfig[tAttrs.uiJq];

      return function uiJqLinkingFunction(scope, elm, attrs) {

        function getOptions(){
          var linkOptions = [];

          // If ui-options are passed, merge (or override) them onto global defaults and pass to the jQuery method
          if (attrs.uiOptions) {
            linkOptions = scope.$eval('[' + attrs.uiOptions + ']');
            if (angular.isObject(options) && angular.isObject(linkOptions[0])) {
              linkOptions[0] = angular.extend({}, options, linkOptions[0]);
            }
          } else if (options) {
            linkOptions = [options];
          }
          return linkOptions;
        }

        // If change compatibility is enabled, the form input's "change" event will trigger an "input" event
        if (attrs.ngModel && elm.is('select,input,textarea')) {
          elm.bind('change', function() {
            elm.trigger('input');
          });
        }

        // Call jQuery method and pass relevant options
        function callPlugin() {
          $timeout(function() {
            elm[attrs.uiJq].apply(elm, getOptions());
          }, 0, false);
        }

        function refresh(){
          // If ui-refresh is used, re-fire the the method upon every change
          if (attrs.uiRefresh) {
            scope.$watch(attrs.uiRefresh, function() {
              callPlugin();
            });
          }
        }

        if ( JQ_CONFIG[attrs.uiJq] ) {
          uiLoad.load(JQ_CONFIG[attrs.uiJq]).then(function() {
            callPlugin();
            refresh();
          }).catch(function() {
            
          });
        } else {
          callPlugin();
          refresh();
        }
      };
    }
  };
}]);
angular.module('app')
  .directive('uiModule', ['MODULE_CONFIG','uiLoad', '$compile', function(MODULE_CONFIG, uiLoad, $compile) {
    return {
      restrict: 'A',
      compile: function (el, attrs) {
        var contents = el.contents().clone();
        return function(scope, el, attrs){
          el.contents().remove();
          uiLoad.load(MODULE_CONFIG[attrs.uiModule])
          .then(function(){
            $compile(contents)(scope, function(clonedElement, scope) {
              el.append(clonedElement);
            });
          });
        }
      }
    };
  }]);
angular.module('app')
  .directive('uiNav', ['$timeout', function($timeout) {
    return {
      restrict: 'AC',
      link: function(scope, el, attr) {
        var _window = $(window), 
        _mb = 768, 
        wrap = $('.app-aside'), 
        next, 
        backdrop = '.dropdown-backdrop';
        // unfolded
        el.on('click', 'a', function(e) {
          next && next.trigger('mouseleave.nav');
          var _this = $(this);
          _this.parent().siblings( ".active" ).toggleClass('active');
          _this.next().is('ul') &&  _this.parent().toggleClass('active') &&  e.preventDefault();
          // mobile
          _this.next().is('ul') || ( ( _window.width() < _mb ) && $('.app-aside').removeClass('show off-screen') );
        });

        // folded & fixed
        el.on('mouseenter', 'a', function(e){
          next && next.trigger('mouseleave.nav');
          $('> .nav', wrap).remove();
          if ( !$('.app-aside-fixed.app-aside-folded').length || ( _window.width() < _mb ) || $('.app-aside-dock').length) return;
          var _this = $(e.target)
          , top
          , w_h = $(window).height()
          , offset = 50
          , min = 150;

          !_this.is('a') && (_this = _this.closest('a'));
          if( _this.next().is('ul') ){
             next = _this.next();
          }else{
            return;
          }
         
          _this.parent().addClass('active');
          top = _this.parent().position().top + offset;
          next.css('top', top);
          if( top + next.height() > w_h ){
            next.css('bottom', 0);
          }
          if(top + min > w_h){
            next.css('bottom', w_h - top - offset).css('top', 'auto');
          }
          next.appendTo(wrap);

          next.on('mouseleave.nav', function(e){
            $(backdrop).remove();
            next.appendTo(_this.parent());
            next.off('mouseleave.nav').css('top', 'auto').css('bottom', 'auto');
            _this.parent().removeClass('active');
          });

          $('.smart').length && $('<div class="dropdown-backdrop"/>').insertAfter('.app-aside').on('click', function(next){
            next && next.trigger('mouseleave.nav');
          });

        });

        wrap.on('mouseleave', function(e){
          next && next.trigger('mouseleave.nav');
          $('> .nav', wrap).remove();
        });
      }
    };
  }]);
angular.module('app')
  .directive('uiScroll', ['$location', '$anchorScroll', function($location, $anchorScroll) {
    return {
      restrict: 'AC',
      link: function(scope, el, attr) {
        el.on('click', function(e) {
          $location.hash(attr.uiScroll);
          $anchorScroll();
        });
      }
    };
  }]);
angular.module('app')
  .directive('uiShift', ['$timeout', function($timeout) {
    return {
      restrict: 'A',
      link: function(scope, el, attr) {
        // get the $prev or $parent of this el
        var _el = $(el),
            _window = $(window),
            prev = _el.prev(),
            parent,
            width = _window.width()
            ;

        !prev.length && (parent = _el.parent());
        
        function sm(){
          $timeout(function () {
            var method = attr.uiShift;
            var target = attr.target;
            _el.hasClass('in') || _el[method](target).addClass('in');
          });
        }
        
        function md(){
          parent && parent['prepend'](el);
          !parent && _el['insertAfter'](prev);
          _el.removeClass('in');
        }

        (width < 768 && sm()) || md();

        _window.resize(function() {
          if(width !== _window.width()){
            $timeout(function(){
              (_window.width() < 768 && sm()) || md();
              width = _window.width();
            });
          }
        });
      }
    };
  }]);
angular.module('app')
  .directive('uiToggleClass', ['$timeout', '$document', function($timeout, $document) {
    return {
      restrict: 'AC',
      link: function(scope, el, attr) {
        el.on('click', function(e) {
          e.preventDefault();
          var classes = attr.uiToggleClass.split(','),
              targets = (attr.target && attr.target.split(',')) || Array(el),
              key = 0;
          angular.forEach(classes, function( _class ) {
            var target = targets[(targets.length && key)];            
            ( _class.indexOf( '*' ) !== -1 ) && magic(_class, target);
            $( target ).toggleClass(_class);
            key ++;
          });
          $(el).toggleClass('active');

          function magic(_class, target){
            var patt = new RegExp( '\\s' + 
                _class.
                  replace( /\*/g, '[A-Za-z0-9-_]+' ).
                  split( ' ' ).
                  join( '\\s|\\s' ) + 
                '\\s', 'g' );
            var cn = ' ' + $(target)[0].className + ' ';
            while ( patt.test( cn ) ) {
              cn = cn.replace( patt, ' ' );
            }
            $(target)[0].className = $.trim( cn );
          }
        });
      }
    };
  }]);
'use strict';

/**
 * General-purpose validator for ngModel.
 * angular.js comes with several built-in validation mechanism for input fields (ngRequired, ngPattern etc.) but using
 * an arbitrary validation function requires creation of a custom formatters and / or parsers.
 * The ui-validate directive makes it easy to use any function(s) defined in scope as a validator function(s).
 * A validator function will trigger validation on both model and input changes.
 *
 * @example <input ui-validate=" 'myValidatorFunction($value)' ">
 * @example <input ui-validate="{ foo : '$value > anotherModel', bar : 'validateFoo($value)' }">
 * @example <input ui-validate="{ foo : '$value > anotherModel' }" ui-validate-watch=" 'anotherModel' ">
 * @example <input ui-validate="{ foo : '$value > anotherModel', bar : 'validateFoo($value)' }" ui-validate-watch=" { foo : 'anotherModel' } ">
 *
 * @param ui-validate {string|object literal} If strings is passed it should be a scope's function to be used as a validator.
 * If an object literal is passed a key denotes a validation error key while a value should be a validator function.
 * In both cases validator function should take a value to validate as its argument and should return true/false indicating a validation result.
 */
angular.module('ui.validate',[]).directive('uiValidate', function () {

  return {
    restrict: 'A',
    require: 'ngModel',
    link: function (scope, elm, attrs, ctrl) {
      var validateFn, validators = {},
          validateExpr = scope.$eval(attrs.uiValidate);

      if (!validateExpr){ return;}

      if (angular.isString(validateExpr)) {
        validateExpr = { validator: validateExpr };
      }

      angular.forEach(validateExpr, function (exprssn, key) {
        validateFn = function (valueToValidate) {
          var expression = scope.$eval(exprssn, { '$value' : valueToValidate });
          if (angular.isObject(expression) && angular.isFunction(expression.then)) {
            // expression is a promise
            expression.then(function(){
              ctrl.$setValidity(key, true);
            }, function(){
              ctrl.$setValidity(key, false);
            });
            return valueToValidate;
          } else if (expression) {
            // expression is true
            ctrl.$setValidity(key, true);
            return valueToValidate;
          } else {
            // expression is false
            ctrl.$setValidity(key, false);
            return valueToValidate;
          }
        };
        validators[key] = validateFn;
        ctrl.$formatters.push(validateFn);
        ctrl.$parsers.push(validateFn);
      });

      function apply_watch(watch)
      {
          //string - update all validators on expression change
          if (angular.isString(watch))
          {
              scope.$watch(watch, function(){
                  angular.forEach(validators, function(validatorFn){
                      validatorFn(ctrl.$modelValue);
                  });
              });
              return;
          }

          //array - update all validators on change of any expression
          if (angular.isArray(watch))
          {
              angular.forEach(watch, function(expression){
                  scope.$watch(expression, function()
                  {
                      angular.forEach(validators, function(validatorFn){
                          validatorFn(ctrl.$modelValue);
                      });
                  });
              });
              return;
          }

          //object - update appropriate validator
          if (angular.isObject(watch))
          {
              angular.forEach(watch, function(expression, validatorKey)
              {
                  //value is string - look after one expression
                  if (angular.isString(expression))
                  {
                      scope.$watch(expression, function(){
                          validators[validatorKey](ctrl.$modelValue);
                      });
                  }

                  //value is array - look after all expressions in array
                  if (angular.isArray(expression))
                  {
                      angular.forEach(expression, function(intExpression)
                      {
                          scope.$watch(intExpression, function(){
                              validators[validatorKey](ctrl.$modelValue);
                          });
                      });
                  }
              });
          }
      }
      // Support for ui-validate-watch
      if (attrs.uiValidateWatch){
          apply_watch( scope.$eval(attrs.uiValidateWatch) );
      }
    }
  };
});


var view = {
    loading_dialog: null,
    loading_num: 0
};

// dialog
view.dialog = function (opt) {
    var title = opt.title || T("dialog.DIALOG"),
        content = opt.content || "",
        ok_btn = opt.ok_btn,
        cancel_btn = opt.cancel_btn,
        close_btn = opt.close_btn,
        ok_fn = opt.ok_fn || null,
        cancel_fn = opt.cancel_fn || null,
        pre_fn = opt.pre_fn || null,
        dialog = null,
        dialog_html = '<div class="modal fade">\
            <div class="modal-dialog">\
            <div class="modal-content">\
            <div class="modal-header">\
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>\
        <h4 class="modal-title">' + title + '</h4>\
            </div>\
            <div class="modal-body">' + content + '</div>\
            <div class="modal-footer">';

    if (cancel_btn) {
        dialog_html += '<button type="button" class="btn btn-default dialog_btn cancel">' + T("button.CANCEL") + '</button>';
    }

    if (ok_btn) {
        dialog_html += '<button type="button" class="btn btn-primary dialog_btn ok">' + T("button.OK") + '</button>';
    }

    if (close_btn) {
        dialog_html += '<button type="button" class="btn btn-primary dialog_btn ok">' + T("button.CLOSE") + '</button>';
    }

    dialog_html += '</div></div></div></div>';

    dialog = $(dialog_html);

    dialog
        .on('show.bs.modal', function (e) {
            if (opt.width) {
                var css = {
                    'width': opt.width + 'px'
                };
                $(this).children(".modal-dialog").css(css);
            }
            pre_fn && pre_fn($(this));
        })
        .on("shown.bs.modal", function (e) {
        })
        .on("hide.bs.modal", function (e) {
        })
        .on("hidden.bs.modal", function (e) {
            dialog.remove();
        })
        .on("click", ".dialog_btn", function () {
            if ($(this).hasClass("ok")) {
                ok_fn && ok_fn();
            }

            if ($(this).hasClass("cancel")) {
                cancel_fn && cancel_fn();
                dialog.modal("hide");
            }

            if (!opt.prevent_auto_hide || opt.prevent_auto_hide == false) {
                dialog.modal("hide");
            }
        })
        .on('shown', function () {
            pre_fn && pre_fn($(this));
        })
        .modal('show');

    dialog.close = function () {
        $(this).modal('hide');
    };

    return dialog;
};

// loading
view.loading = function () {
    if (view.loading_dialog == null) {
        var opt = {
            title: T("dialog.ALERT"),
            content: "<img src='img/loading.gif'/> <span style='font-size: 18px;'>" + T("dialog.LOADING") + "</span>",
            ok_btn: false,
            cancel_btn: false
        };

        view.loading_dialog = view.dialog(opt);
    }

    view.loading_num++;
};

// 关闭loading
view.close_loading = function () {
    view.loading_num--;

    if (view.loading_dialog != null && view.loading_num == 0) {
        view.loading_dialog.close();
        view.loading_dialog = null;
    }
};

// alert
view.alert = function (msg, ok) {
    var opt = {
        title: T("dialog.ALERT"),
        content: "" + msg + "",
        close_btn: true,
        ok_fn: ok
    };

    return view.dialog(opt);
};

// show
view.show = function (msg, title, width, ok, cancel) {
    var opt = {
        title: T("dialog.ALERT"),
        content: "<p style='word-wrap:break-word'>" + msg + "</p>",
        close_btn: true,
        ok_fn: ok,
        cancel_fn: cancel
    };

    if (title != undefined) {
        opt.title = title;
    }

    if (width != undefined) {
        opt.width = width;
    }

    return view.dialog(opt);
};

// confirm
view.confirm = function (content, ok, cancel) {

    var opt = {
        title: T("dialog.ALERT"),
        content: '<span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"> ' + content + '</span>',
        ok_btn: true,
        cancel_btn: true,
        ok_fn: ok,
        cancel_fn: cancel
    };

    return view.dialog(opt);
};

// prompt
view.prompt = function (title, default_val, ok, cancel) {
    var ok_fn = function () {
        var value = $("#prompt_input").val();
        ok(value);
    };

    var content = '<input type="text" class="form-control" id="prompt_input">';
    if (default_val != null && default_val != undefined) {
        content = '<input type="text" class="form-control" id="prompt_input" value="' + default_val + '">';
    }

    var opt = {
        title: title,
        content: content,
        ok_btn: true,
        cancel_btn: true,
        ok_fn: ok_fn,
        cancel_fn: cancel
    };

    return view.dialog(opt);
};

// prompt_time
view.prompt_time = function (title, ok, cancel) {
    var ok_fn = function () {
        var value = $("#prompt_input").val();
        ok(value);
    };

    var opt = {
        title: title,
        content: '<input type="text" class="form-control" data-date-format="yyyy-mm-dd hh:ii:ss" id="prompt_input">',
        ok_btn: true,
        cancel_btn: true,
        ok_fn: ok_fn,
        cancel_fn: cancel
    };

    return view.dialog(opt);
};

// prompt_textarea
view.prompt_textarea = function (title, ok, cancel, value) {
    value = value || "";

    var ok_fn = function () {
        var value = $("#prompt_input").val();
        ok(value);
    };

    var opt = {
        title: title,
        content: '<textarea class="form-control" id="prompt_input">' + value + '</textarea>',
        ok_btn: true,
        cancel_btn: true,
        ok_fn: ok_fn,
        cancel_fn: cancel
    };

    return view.dialog(opt);
};

var utils = {};

utils.exportExcel = function (params, url, method) {
    if (params) {
        // params 是 string 或者 array/object
        if (typeof params == 'string') {
            params = {};
        }
        params['export'] = 1;
        // 把参数组装成 form的  input
        var inputs = [];
        $.each(params, function (k, v) {
            if (v == undefined) {
                return;
            }
            inputs.push('<input type="hidden" name="' + k + '" value="' + v + '" />');
        });
        $(document).off('submit');
        $('<form id="download" action="' + (url || 'index.php') + '" method="' + (method || "post") + '" target="_blank">' + inputs.join('') + '</form>')
            .appendTo('body').submit().remove();
        $(document).on('submit', false);
    }
};

utils.base64ToBlob = function(base64Data, contentType) {
    contentType = contentType || '';
    var sliceSize = 1024;
    var byteCharacters = atob(base64Data);
    var bytesLength = byteCharacters.length;
    var slicesCount = Math.ceil(bytesLength / sliceSize);
    var byteArrays = new Array(slicesCount);

    for (var sliceIndex = 0; sliceIndex < slicesCount; ++sliceIndex) {
        var begin = sliceIndex * sliceSize;
        var end = Math.min(begin + sliceSize, bytesLength);

        var bytes = new Array(end - begin);
        for (var offset = begin, i = 0 ; offset < end; ++i, ++offset) {
            bytes[i] = byteCharacters[offset].charCodeAt(0);
        }
        byteArrays[sliceIndex] = new Uint8Array(bytes);
    }
    return new Blob(byteArrays, { type: contentType });
};


angular.module('httpService', []).
    service('mockService', ['$q', '$timeout', '$http', '$state',
        function ($q, $timeout, $http, $state) {
            this.get = function (url, params) {
                var deferred = $q.defer();
                url = "/mock_data/" + url + ".json";
                //view.loading();
                $http.get(url).then(function (result) {
                    var d = result.data;
                    if (d.status == 0) {
                        deferred.resolve(d.data);
                    } else {
                        switch (d.status) {
                            default:
                                // view.alert(result.msg);
                                //$state.go("login");
                                deferred.reject(d);
                        }
                    }
                }, function (x) {
                    //view.close_loading();
                    deferred.reject(T("msg.system_error"));
                });

                return deferred.promise;
            };
        }]);


angular.module('httpService', []).
    service('dataService', ['$http',
        function ($http) {
            var host="http://localhost:8123";

            return {
                getlabitemList: function () {
                    var url = '/mock_data/labitem_list.json';
                    return $http.get(url);
                },
                saveLabitem: function (model) {

                },
                getLabItemSetList: function () {
                    var url = '/mock_data/labitemset_list.json';
                    return $http.get(url);
                },
                saveLabItemSet: function (model) {

                },
                getLabCategoryList: function () {
                    var url = '/mock_data/category_list.json';
                    return $http.get(url);
                },
                saveLabCategory: function (model) {

                },
                getQCValueList: function () {
                    var url = '/mock_data/qcvalue_list.json';
                    return $http.get(url);
                },
                saveQCValue: function (model) {

                },
                getSampleTypeList: function () {
                    var url = '/mock_data/sampleType_list.json';
                    return $http.get(url);
                },
                saveSampleType: function (model) {

                },
                getCrisisList: function () {
                    var url = '/mock_data/list.json';
                    return $http.get(url);
                },
                getCrisisDetailById: function () {

                },
                getRequestList: function () {
                    var url = '/mock_data/request_list.json';
                    return $http.get(url);
                },
                getSexList: function () {
                    var url = '/mock_data/sex_list.json';
                    return $http.get(url);
                },
                getSampleList: function () {
                    var url = '/mock_data/sample_list.json';
                    return $http.get(url);
                },
                saveCrisis: function (model) {

                },
                getCrisisList: function () {
                    var url = '/mock_data/crisis_list.json';
                    return $http.get(url);
                },
                savePatient: function (model) {

                },
                getPatientList: function () {

                },
                saveEmployee: function (model) {

                },
                getEmployeeList: function () {
                    var url = '/mock_data/employee_list.json';
                    return $http.get(url);
                },
                getSiteList: function (query) {
                    var url = host+'/api/system/medicalinstitutions?search=';
                    return $http.get(url+(query?query:''));
                },
                saveSite: function (model) {
                    var url = '/api/system/medicalinstitutions';
                    return $http.post(url,model);
                },
                getSiteById:function(id){
                    var url = '/api/system/medicalinstitutiondetail?id=';
                    return $http.get(url + id);
                },
                deleteSite:function(entity){
                    var url = '/api/system/medicalinstitutions';
                    return $http.delete(url,{
                        "headers":{
                            'Content-Type':'application/json'
                        },
                        data:entity
                    });
                },
                getDeptList: function () {
                    var url = '/mock_data/dept_list.json';
                    return $http.get(url);
                },
                deleteLabCategory:function(id){

                },
                deleteCrisis:function(id){

                },
                deleteDept:function(id){

                },
                deleteEmployee:function(id){

                },
                deleteLabItem:function(id){

                },
                deleteLabItemSet:function(id){

                },
                deletePatient:function(id){

                },
                deleteQCValue:function(id){

                },
                deleteSampleType:function(id){

                }
            };
        }]);
'use strict';

/**
 * 0.1.1
 * Deferred load js/css file, used for ui-jq.js and Lazy Loading.
 * 
 * @ flatfull.com All Rights Reserved.
 * Author url: #user/flatfull
 */

angular.module('ui.load', [])
	.service('uiLoad', ['$document', '$q', '$timeout', function ($document, $q, $timeout) {

		var loaded = [];
		var promise = false;
		var deferred = $q.defer();

		/**
		 * Chain loads the given sources
		 * @param srcs array, script or css
		 * @returns {*} Promise that will be resolved once the sources has been loaded.
		 */
		this.load = function (srcs) {
			srcs = angular.isArray(srcs) ? srcs : srcs.split(/\s+/);
			var self = this;
			if(!promise){
				promise = deferred.promise;
			}
      angular.forEach(srcs, function(src) {
      	promise = promise.then( function(){
      		return src.indexOf('.css') >=0 ? self.loadCSS(src) : self.loadScript(src);
      	} );
      });
      deferred.resolve();
      return promise;
		}

		/**
		 * Dynamically loads the given script
		 * @param src The url of the script to load dynamically
		 * @returns {*} Promise that will be resolved once the script has been loaded.
		 */
		this.loadScript = function (src) {
			if(loaded[src]) return loaded[src].promise;

			var deferred = $q.defer();
			var script = $document[0].createElement('script');
			script.src = src;
			script.onload = function (e) {
				$timeout(function () {
					deferred.resolve(e);
				});
			};
			script.onerror = function (e) {
				$timeout(function () {
					deferred.reject(e);
				});
			};
			$document[0].body.appendChild(script);
			loaded[src] = deferred;

			return deferred.promise;
		};

		/**
		 * Dynamically loads the given CSS file
		 * @param href The url of the CSS to load dynamically
		 * @returns {*} Promise that will be resolved once the CSS file has been loaded.
		 */
		this.loadCSS = function (href) {
			if(loaded[href]) return loaded[href].promise;

			var deferred = $q.defer();
			var style = $document[0].createElement('link');
			style.rel = 'stylesheet';
			style.type = 'text/css';
			style.href = href;
			style.onload = function (e) {
				$timeout(function () {
					deferred.resolve(e);
				});
			};
			style.onerror = function (e) {
				$timeout(function () {
					deferred.reject(e);
				});
			};
			$document[0].head.appendChild(style);
			loaded[href] = deferred;

			return deferred.promise;
		};
}]);
angular.module('uiDirect')
    .directive('uiInput', function () {
        return {
            restrict: 'E',
            scope: {
                val: '='
            },
            replace: true,
            templateUrl: 'app/directives/widget/input/input.html',
            link:function($scope, elem, attr, ctrl){

            },
            controller: function ($scope, $element, $attrs) {

            }
        };
    });


//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsImNvbmZpZy5qcyIsImNvbmZpZy5sYXp5bG9hZC5qcyIsImNvbmZpZy5yb3V0ZXIuanMiLCJtYWluLmpzIiwiY29udHJvbGxlcnMvY2F0ZWdvcnlDdHJsLmpzIiwiY29udHJvbGxlcnMvY3Jpc2lzQ3RybC5qcyIsImNvbnRyb2xsZXJzL2RlcGF0Q3RybC5qcyIsImNvbnRyb2xsZXJzL2VtcGxveWVlQ3RybC5qcyIsImNvbnRyb2xsZXJzL2xhYkl0ZW1DdHJsLmpzIiwiY29udHJvbGxlcnMvbGFiSXRlbVNldEN0cmwuanMiLCJjb250cm9sbGVycy9sYWJyZXN1bHRDdHJsLmpzIiwiY29udHJvbGxlcnMvbG9naXN0aWNzQ3RybC5qcyIsImNvbnRyb2xsZXJzL21lZGljYWxDdHJsLmpzIiwiY29udHJvbGxlcnMvcGF0aWVudEN0cmwuanMiLCJjb250cm9sbGVycy9xY3ZhbHVlQ3RybC5qcyIsImNvbnRyb2xsZXJzL3JlcXVlc3RDdHJsLmpzIiwiY29udHJvbGxlcnMvc2FtcGxlVHlwZUN0cmwuanMiLCJkaXJlY3RpdmVzL3NldG5nYW5pbWF0ZS5qcyIsImRpcmVjdGl2ZXMvdWktYnV0dGVyYmFyLmpzIiwiZGlyZWN0aXZlcy91aS1mb2N1cy5qcyIsImRpcmVjdGl2ZXMvdWktZnVsbHNjcmVlbi5qcyIsImRpcmVjdGl2ZXMvdWktanEuanMiLCJkaXJlY3RpdmVzL3VpLW1vZHVsZS5qcyIsImRpcmVjdGl2ZXMvdWktbmF2LmpzIiwiZGlyZWN0aXZlcy91aS1zY3JvbGwuanMiLCJkaXJlY3RpdmVzL3VpLXNoaWZ0LmpzIiwiZGlyZWN0aXZlcy91aS10b2dnbGVjbGFzcy5qcyIsImRpcmVjdGl2ZXMvdWktdmFsaWRhdGUuanMiLCJzZXJ2aWNlcy9nbG9iYWwuanMiLCJzZXJ2aWNlcy9odHRwU2VydmljZS5qcyIsInNlcnZpY2VzL3VpLWxvYWQuanMiLCJkaXJlY3RpdmVzL3dpZGdldC9pbnB1dC9pbnB1dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN0T0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN6REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzlGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDcEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMzRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM5SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDakhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3pGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN6RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDM0dBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDMUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDM0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3ZIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDakdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDckZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNwRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDekNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdkhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzdRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2xLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM1RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYWxsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxuXHJcbmFuZ3VsYXIubW9kdWxlKCdhcHAnLCBbXHJcbiAgICAnbmdBbmltYXRlJyxcclxuICAgICduZ0Nvb2tpZXMnLFxyXG4gICAgJ25nUmVzb3VyY2UnLFxyXG4gICAgJ25nU2FuaXRpemUnLFxyXG4gICAgJ25nVG91Y2gnLFxyXG4gICAgJ25nU3RvcmFnZScsXHJcbiAgICAndWkucm91dGVyJyxcclxuICAgICd1aS5ib290c3RyYXAnLFxyXG4gICAgJ3VpLmxvYWQnLFxyXG4gICAgJ3VpLmpxJyxcclxuICAgICd1aS52YWxpZGF0ZScsXHJcbiAgICAnb2MubGF6eUxvYWQnLFxyXG4gICAgJ3Bhc2NhbHByZWNodC50cmFuc2xhdGUnLFxyXG4gICAgJ3RvYXN0ZXInLFxyXG4gICAgJ3VpLmdyaWQnLFxyXG4gICAgJ3VpLmdyaWQuZWRpdCcsXHJcbiAgICAndWkuZ3JpZC5zZWxlY3Rpb24nLFxyXG4gICAgJ3VpLnNlbGVjdCcsXHJcbiAgICAvL2N1c3RvbVxyXG4gICAgJ2h0dHBTZXJ2aWNlJyxcclxuICAgICd1aURpcmVjdCdcclxuXSk7XHJcblxyXG5hbmd1bGFyLm1vZHVsZSgndWlEaXJlY3QnLFtdKTtcclxuIiwiLy8gY29uZmlnXG5cbnZhciBhcHAgPVxuICBhbmd1bGFyLm1vZHVsZSgnYXBwJykuY29uZmlnKFxuICAgIFsnJGNvbnRyb2xsZXJQcm92aWRlcicsICckY29tcGlsZVByb3ZpZGVyJywgJyRmaWx0ZXJQcm92aWRlcicsICckcHJvdmlkZScsXG4gICAgICBmdW5jdGlvbiAoJGNvbnRyb2xsZXJQcm92aWRlciwgJGNvbXBpbGVQcm92aWRlciwgJGZpbHRlclByb3ZpZGVyLCAkcHJvdmlkZSkge1xuXG4gICAgICAgIC8vIGxhenkgY29udHJvbGxlciwgZGlyZWN0aXZlIGFuZCBzZXJ2aWNlXG4gICAgICAgIGFwcC5jb250cm9sbGVyID0gJGNvbnRyb2xsZXJQcm92aWRlci5yZWdpc3RlcjtcbiAgICAgICAgYXBwLmRpcmVjdGl2ZSA9ICRjb21waWxlUHJvdmlkZXIuZGlyZWN0aXZlO1xuICAgICAgICBhcHAuZmlsdGVyID0gJGZpbHRlclByb3ZpZGVyLnJlZ2lzdGVyO1xuICAgICAgICBhcHAuZmFjdG9yeSA9ICRwcm92aWRlLmZhY3Rvcnk7XG4gICAgICAgIGFwcC5zZXJ2aWNlID0gJHByb3ZpZGUuc2VydmljZTtcbiAgICAgICAgYXBwLmNvbnN0YW50ID0gJHByb3ZpZGUuY29uc3RhbnQ7XG4gICAgICAgIGFwcC52YWx1ZSA9ICRwcm92aWRlLnZhbHVlO1xuICAgICAgfVxuICAgIF0pLmNvbmZpZyhbJyR0cmFuc2xhdGVQcm92aWRlcicsIGZ1bmN0aW9uICgkdHJhbnNsYXRlUHJvdmlkZXIpIHtcbiAgICAgICR0cmFuc2xhdGVQcm92aWRlci51c2VTdGF0aWNGaWxlc0xvYWRlcih7XG4gICAgICAgIHByZWZpeDogJ2kxOG4vJyxcbiAgICAgICAgc3VmZml4OiAnLmpzb24nXG4gICAgICB9KTtcbiAgICAgICR0cmFuc2xhdGVQcm92aWRlci5wcmVmZXJyZWRMYW5ndWFnZSgnemhfY24nKTtcbiAgICAgICR0cmFuc2xhdGVQcm92aWRlci51c2VMb2NhbFN0b3JhZ2UoKTtcbiAgICB9XSk7XG5cbi8vIOe/u+ivkeW/q+aNt+aWueW8j1xudmFyIFQgPSB7fTtcbi8vIOacrOWcsOWtmOWCqOW/q+aNt+aWueW8j1xudmFyIFMgPSB7fTtcbmFwcC5ydW4oWyckdHJhbnNsYXRlJywgJyRsb2NhbFN0b3JhZ2UnLFxuICAgICAgICBmdW5jdGlvbiAoJHRyYW5zbGF0ZSwgJGxvY2FsU3RvcmFnZSkge1xuICAgICAgICAgICAgLy8g5a6a5LmJ57+76K+R5b+r5o235pa55byPXG4gICAgICAgICAgICBUID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAkdHJhbnNsYXRlLmluc3RhbnQoa2V5KTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIFMgPSAkbG9jYWxTdG9yYWdlO1xuICAgICAgICB9XG4gICAgXSk7IiwiLy8gbGF6eWxvYWQgY29uZmlnXG5cbmFuZ3VsYXIubW9kdWxlKCdhcHAnKVxuICAuY29uc3RhbnQoJ0pRX0NPTkZJRycsIHtcbiAgICAgIGZpbGVzdHlsZTogICAgICBbJ3ZlbmRvcjIvanF1ZXJ5L2ZpbGUvYm9vdHN0cmFwLWZpbGVzdHlsZS5taW4uanMnXSxcbiAgICAgIHNsaWRlcjogICAgICAgICBbJ3ZlbmRvcjIvanF1ZXJ5L3NsaWRlci9ib290c3RyYXAtc2xpZGVyLmpzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ3ZlbmRvcjIvanF1ZXJ5L3NsaWRlci9zbGlkZXIuY3NzJ10sXG4gICAgICB3eXNpd3lnOiAgICAgICAgWyd2ZW5kb3IyL2pxdWVyeS93eXNpd3lnL2Jvb3RzdHJhcC13eXNpd3lnLmpzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ3ZlbmRvcjIvanF1ZXJ5L3d5c2l3eWcvanF1ZXJ5LmhvdGtleXMuanMnXSxcbiAgICAgIGNob3NlbjogICAgICAgICBbJ3ZlbmRvcjIvanF1ZXJ5L2Nob3Nlbi9jaG9zZW4uanF1ZXJ5Lm1pbi5qcycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICd2ZW5kb3IyL2pxdWVyeS9jaG9zZW4vY2hvc2VuLmNzcyddLFxuICAgICAgVG91Y2hTcGluOiAgICAgIFsndmVuZG9yMi9qcXVlcnkvc3Bpbm5lci9qcXVlcnkuYm9vdHN0cmFwLXRvdWNoc3Bpbi5taW4uanMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAndmVuZG9yMi9qcXVlcnkvc3Bpbm5lci9qcXVlcnkuYm9vdHN0cmFwLXRvdWNoc3Bpbi5jc3MnXSxcbiAgICAgIH1cbiAgKTsiLCIndXNlIHN0cmljdCc7XHJcblxyXG4vKipcclxuICogQ29uZmlnIGZvciB0aGUgcm91dGVyXHJcbiAqL1xyXG5hbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuICAgIC5ydW4oXHJcbiAgICAgICAgWyckcm9vdFNjb3BlJywgJyRzdGF0ZScsICckc3RhdGVQYXJhbXMnLFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoJHJvb3RTY29wZSwgJHN0YXRlLCAkc3RhdGVQYXJhbXMpIHtcclxuICAgICAgICAgICAgICAgICRyb290U2NvcGUuJHN0YXRlID0gJHN0YXRlO1xyXG4gICAgICAgICAgICAgICAgJHJvb3RTY29wZS4kc3RhdGVQYXJhbXMgPSAkc3RhdGVQYXJhbXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICApXHJcbiAgICAuY29uZmlnKFxyXG4gICAgICAgIFsnJHN0YXRlUHJvdmlkZXInLCAnJHVybFJvdXRlclByb3ZpZGVyJyxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvYXBwL3JlcXVlc3QnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkc3RhdGVQcm92aWRlclxyXG4gICAgICAgICAgICAgICAgICAgIC5zdGF0ZSgnYXBwJywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhYnN0cmFjdDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiAnL2FwcCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAndHBsL2FwcC5odG1sJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnN0YXRlKCdhcHAuY3Jpc2lzJywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6ICcvY3Jpc2lzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICd0cGwvY3Jpc2lzL2NyaXNpc19saXN0Lmh0bWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnQ3Jpc2lzTGlzdEN0cmwnXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuc3RhdGUoJ2FwcC5jcmlzaXNfZGV0YWlsJywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6ICcvY3Jpc2lzX2RldGFpbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICd0cGwvY3Jpc2lzL2NyaXNpc19kZXRhaWwuaHRtbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdDcmlzaXNEZXRhaWxDdHJsJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnN0YXRlKCdhcHAuZGVwYXJ0Jywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6ICcvZGVwYXJ0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICd0cGwvZGVwYXJ0L2RlcGFydF9saXN0Lmh0bWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnRGVwYXJ0TGlzdEN0cmwnXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuc3RhdGUoJ2FwcC5kZXBhcnRfZGV0YWlsJywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6ICcvZGVwYXJ0X2RldGFpbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICd0cGwvZGVwYXJ0L2RlcGFydF9kZXRhaWwuaHRtbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdEZXBhcnREZXRhaWxDdHJsJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnN0YXRlKCdhcHAucmVxdWVzdCcsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiAnL3JlcXVlc3QnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAndHBsL3JlcXVlc3QvcmVxdWVzdF9saXN0Lmh0bWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnUmVxdWVzdExpc3RDdHJsJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnN0YXRlKCdhcHAucmVxdWVzdF9kZXRhaWwnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJy9yZXF1ZXN0X2RldGFpbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICd0cGwvcmVxdWVzdC9yZXF1ZXN0X2RldGFpbC5odG1sJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ1JlcXVlc3REZXRhaWxDdHJsJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnN0YXRlKCdhcHAuZW1wbG95ZWUnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJy9lbXBsb3llZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICd0cGwvZW1wbG95ZWUvZW1wbG95ZWVfbGlzdC5odG1sJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ0VtcGxveWVlTGlzdEN0cmwnXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuc3RhdGUoJ2FwcC5lbXBsb3llZV9kZXRhaWwnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJy9lbXBsb3llZV9kZXRhaWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAndHBsL2VtcGxveWVlL2VtcGxveWVlX2RldGFpbC5odG1sJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ0VtcGxveWVlRGV0YWlsQ3RybCdcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdGF0ZSgnYXBwLnBhdGllbnQnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJy9wYXRpZW50JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3RwbC9wYXRpZW50L3BhdGllbnRfbGlzdC5odG1sJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ1BhdGllbnRMaXN0Q3RybCdcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdGF0ZSgnYXBwLnBhdGllbnRfZGV0YWlsJywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6ICcvcGF0aWVudF9kZXRhaWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAndHBsL3BhdGllbnQvcGF0aWVudF9kZXRhaWwuaHRtbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdQYXRpZW50RGV0YWlsQ3RybCdcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdGF0ZSgnYXBwLm1lZGljYWwnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJy9tZWRpY2FsJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3RwbC9tZWRpY2FsL21lZGljYWxfbGlzdC5odG1sJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ01lZGljYWxMaXN0Q3RybCdcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdGF0ZSgnYXBwLm1lZGljYWxfZGV0YWlsJywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6ICcvbWVkaWNhbF9kZXRhaWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAndHBsL21lZGljYWwvbWVkaWNhbF9kZXRhaWwuaHRtbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdNZWRpY2FsRGV0YWlsQ3RybCdcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdGF0ZSgnYXBwLmxhYml0ZW0nLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJy9sYWJpdGVtJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3RwbC9sYWJpdGVtL2xhYml0ZW1fbGlzdC5odG1sJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ0xhYml0ZW1MaXN0Q3RybCdcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdGF0ZSgnYXBwLmxhYml0ZW1fZGV0YWlsJywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6ICcvbGFiaXRlbV9kZXRhaWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAndHBsL2xhYml0ZW0vbGFiaXRlbV9kZXRhaWwuaHRtbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdMYWJpdGVtRGV0YWlsQ3RybCdcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdGF0ZSgnYXBwLmNhdGVnb3J5Jywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6ICcvY2F0ZWdvcnknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAndHBsL2NhdGVnb3J5L2NhdGVnb3J5X2xpc3QuaHRtbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdDYXRlZ29yeUxpc3RDdHJsJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnN0YXRlKCdhcHAuY2F0ZWdvcnlfZGV0YWlsJywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6ICcvY2F0ZWdvcnlfZGV0YWlsJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3RwbC9jYXRlZ29yeS9jYXRlZ29yeV9kZXRhaWwuaHRtbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdDYXRlZ29yeURldGFpbEN0cmwnXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuc3RhdGUoJ2FwcC5sb2dpc3RpY3MnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJy9sb2dpc3RpY3MnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAndHBsL2xvZ2lzdGljcy9sb2dpc3RpY3NfbGlzdC5odG1sJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ0xvZ2lzdGljc0xpc3RDdHJsJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnN0YXRlKCdhcHAubGFicmVzdWx0Jywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6ICcvbGFicmVzdWx0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3RwbC9sYWJyZXN1bHQvbGFicmVzdWx0X2xpc3QuaHRtbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdMYWJyZXN1bHRMaXN0Q3RybCdcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdGF0ZSgnYXBwLmxhYnJlc3VsdF9kZXRhaWwnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJy9sYWJyZXN1bHRfZGV0YWlsJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3RwbC9sYWJyZXN1bHQvbGFicmVzdWx0X2RldGFpbC5odG1sJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ0xhYnJlc3VsdERldGFpbEN0cmwnXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuc3RhdGUoJ2FwcC5zYW1wbGV0eXBlJywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6ICcvc2FtcGxldHlwZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICd0cGwvc2FtcGxlX3R5cGUvc2FtcGxldHlwZV9saXN0Lmh0bWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnU2FtcGxlVHlwZUxpc3RDdHJsJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnN0YXRlKCdhcHAuc2FtcGxldHlwZV9kZXRhaWwnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJy9zYW1wbGV0eXBlX2RldGFpbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICd0cGwvc2FtcGxlX3R5cGUvc2FtcGxldHlwZV9kZXRhaWwuaHRtbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdTYW1wbGVUeXBlRGV0YWlsQ3RybCdcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdGF0ZSgnYXBwLnFjdmFsdWUnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJy9xY3ZhbHVlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3RwbC9xY3ZhbHVlL3FjdmFsdWVfbGlzdC5odG1sJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ1FjdmFsdWVMaXN0Q3RybCdcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdGF0ZSgnYXBwLnFjdmFsdWVfZGV0YWlsJywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6ICcvcWN2YWx1ZV9kZXRhaWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAndHBsL3FjdmFsdWUvcWN2YWx1ZV9kZXRhaWwuaHRtbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdRY3ZhbHVlRGV0YWlsQ3RybCdcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdGF0ZSgnYXBwLmxhYml0ZW1zZXQnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJy9sYWJpdGVtc2V0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3RwbC9sYWJpdGVtc2V0L2xhYml0ZW1zZXRfbGlzdC5odG1sJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ0xhYkl0ZW1TZXRMaXN0Q3RybCdcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdGF0ZSgnYXBwLmxhYml0ZW1zZXRfZGV0YWlsJywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6ICcvbGFiaXRlbXNldF9kZXRhaWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAndHBsL2xhYml0ZW1zZXQvbGFiaXRlbXNldF9kZXRhaWwuaHRtbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdMYWJJdGVtU2V0RGV0YWlsQ3RybCdcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdGF0ZSgnbGFicmVzdWx0X3ByaW50Jywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6ICcvbGFicmVzdWx0X3ByaW50JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3RwbC9sYWJyZXN1bHQvbGFicmVzdWx0X3ByaW50Lmh0bWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnTGFicmVzdWx0UHJpbnRDdHJsJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICApOyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbi8qIENvbnRyb2xsZXJzICovXHJcblxyXG5hbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuICAuY29udHJvbGxlcignQXBwQ3RybCcsIFsnJHNjb3BlJywgJyR0cmFuc2xhdGUnLCAnJGxvY2FsU3RvcmFnZScsICckd2luZG93JyxcclxuICAgIGZ1bmN0aW9uICgkc2NvcGUsICR0cmFuc2xhdGUsICRsb2NhbFN0b3JhZ2UsICR3aW5kb3cpIHtcclxuICAgICAgLy8gYWRkICdpZScgY2xhc3NlcyB0byBodG1sXHJcbiAgICAgIHZhciBpc0lFID0gISFuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9NU0lFL2kpO1xyXG4gICAgICBpc0lFICYmIGFuZ3VsYXIuZWxlbWVudCgkd2luZG93LmRvY3VtZW50LmJvZHkpLmFkZENsYXNzKCdpZScpO1xyXG4gICAgICBpc1NtYXJ0RGV2aWNlKCR3aW5kb3cpICYmIGFuZ3VsYXIuZWxlbWVudCgkd2luZG93LmRvY3VtZW50LmJvZHkpLmFkZENsYXNzKCdzbWFydCcpO1xyXG5cclxuICAgICAgLy8gY29uZmlnXHJcbiAgICAgICRzY29wZS5hcHAgPSB7XHJcbiAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgIHRoZW1lSUQ6IDEsXHJcbiAgICAgICAgICBuYXZiYXJIZWFkZXJDb2xvcjogJ2JnLWJsYWNrJyxcclxuICAgICAgICAgIG5hdmJhckNvbGxhcHNlQ29sb3I6ICdoZWFkLWxpZ2h0Ymx1ZScsXHJcbiAgICAgICAgICBhc2lkZUNvbG9yOiAnYXNpZGUtYmx1ZScsXHJcbiAgICAgICAgICBoZWFkZXJGaXhlZDogdHJ1ZSxcclxuICAgICAgICAgIGFzaWRlRml4ZWQ6IHRydWUsXHJcbiAgICAgICAgICBhc2lkZUZvbGRlZDogZmFsc2UsXHJcbiAgICAgICAgICBhc2lkZURvY2s6IGZhbHNlLFxyXG4gICAgICAgICAgY29udGFpbmVyOiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gc2F2ZSBzZXR0aW5ncyB0byBsb2NhbCBzdG9yYWdlXHJcbiAgICAgIC8vIGlmICggYW5ndWxhci5pc0RlZmluZWQoJGxvY2FsU3RvcmFnZS5zZXR0aW5ncykgKSB7XHJcbiAgICAgIC8vICAgJHNjb3BlLmFwcC5zZXR0aW5ncyA9ICRsb2NhbFN0b3JhZ2Uuc2V0dGluZ3M7XHJcbiAgICAgIC8vIH0gZWxzZSB7XHJcbiAgICAgIC8vICAgJGxvY2FsU3RvcmFnZS5zZXR0aW5ncyA9ICRzY29wZS5hcHAuc2V0dGluZ3M7XHJcbiAgICAgIC8vIH1cclxuICAgICAgJHNjb3BlLiR3YXRjaCgnYXBwLnNldHRpbmdzJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICgkc2NvcGUuYXBwLnNldHRpbmdzLmFzaWRlRG9jayAmJiAkc2NvcGUuYXBwLnNldHRpbmdzLmFzaWRlRml4ZWQpIHtcclxuICAgICAgICAgIC8vIGFzaWRlIGRvY2sgYW5kIGZpeGVkIG11c3Qgc2V0IHRoZSBoZWFkZXIgZml4ZWQuXHJcbiAgICAgICAgICAkc2NvcGUuYXBwLnNldHRpbmdzLmhlYWRlckZpeGVkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gc2F2ZSB0byBsb2NhbCBzdG9yYWdlXHJcbiAgICAgICAgJGxvY2FsU3RvcmFnZS5zZXR0aW5ncyA9ICRzY29wZS5hcHAuc2V0dGluZ3M7XHJcbiAgICAgIH0sIHRydWUpO1xyXG5cclxuICAgICAgZnVuY3Rpb24gaXNTbWFydERldmljZSgkd2luZG93KSB7XHJcbiAgICAgICAgLy8gQWRhcHRlZCBmcm9tIGh0dHA6Ly93d3cuZGV0ZWN0bW9iaWxlYnJvd3NlcnMuY29tXHJcbiAgICAgICAgdmFyIHVhID0gJHdpbmRvd1snbmF2aWdhdG9yJ11bJ3VzZXJBZ2VudCddIHx8ICR3aW5kb3dbJ25hdmlnYXRvciddWyd2ZW5kb3InXSB8fCAkd2luZG93WydvcGVyYSddO1xyXG4gICAgICAgIC8vIENoZWNrcyBmb3IgaU9zLCBBbmRyb2lkLCBCbGFja2JlcnJ5LCBPcGVyYSBNaW5pLCBhbmQgV2luZG93cyBtb2JpbGUgZGV2aWNlc1xyXG4gICAgICAgIHJldHVybiAoL2lQaG9uZXxpUG9kfGlQYWR8U2lsa3xBbmRyb2lkfEJsYWNrQmVycnl8T3BlcmEgTWluaXxJRU1vYmlsZS8pLnRlc3QodWEpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAkc2NvcGUuJG9uKCckc3RhdGVDaGFuZ2VTdGFydCcsIGZ1bmN0aW9uIChldmVudCwgdG9TdGF0ZSwgdG9QYXJhbXMsIGZyb21TdGF0ZSwgZnJvbVBhcmFtcykge1xyXG5cclxuICAgICAgfSk7XHJcblxyXG4gICAgICAvL3RvcCBsZXZlbCBzY29wZVxyXG4gICAgICAvL2ZpeCBtZVxyXG4gICAgICAvLyRzY29wZS5maWx0ZXJfdGlwID0gVCgnbGlzdC5maWx0ZXJfdGlwJyk7XHJcbiAgICAgICRzY29wZS5maWx0ZXJfdGlwID0gJ+i+k+WFpeaQnOe0ouWFs+mUruWtlyc7XHJcbiAgICB9XSk7IiwiYXBwLmNvbnRyb2xsZXIoJ0NhdGVnb3J5TGlzdEN0cmwnLCBbJyRzY29wZScsICckc3RhdGUnLCAnZGF0YVNlcnZpY2UnLCBmdW5jdGlvbiAoJHNjb3BlLCAkc3RhdGUsIGRhdGFTZXJ2aWNlKSB7XHJcblxyXG4gICAgdmFyIGxpbmsgPSAnYXBwLmNhdGVnb3J5X2RldGFpbCc7XHJcbiAgICB2YXIgZWRpdFVybCA9ICc8YSBjbGFzcz1cImVkaXQtdHBsXCIgdWktc3JlZj1cIicgKyBsaW5rICsgJyh7aWQ6IHJvdy5lbnRpdHkuaWR9KVwiPue8lui+kTwvYT4nO1xyXG4gICAgICAgIGVkaXRVcmwrPSc8YSBjbGFzcz1cImRlbGV0ZS10cGxcIiBuZy1jbGljaz1cImdyaWQuYXBwU2NvcGUuZGVsZXRlKHJvdy5lbnRpdHkuaWQpXCI+5Yig6ZmkPC9hPic7XHJcblxyXG4gICAgJHNjb3BlLmdyaWRPcHRpb25zID0ge1xyXG4gICAgICAgIGVuYWJsZUZpbHRlcmluZzogZmFsc2UsXHJcbiAgICAgICAgb25SZWdpc3RlckFwaTogZnVuY3Rpb24gKGdyaWRBcGkpIHtcclxuICAgICAgICAgICAgJHNjb3BlLmdyaWRBcGkgPSBncmlkQXBpO1xyXG4gICAgICAgICAgICAkc2NvcGUuZ3JpZEFwaS5ncmlkLnJlZ2lzdGVyUm93c1Byb2Nlc3Nvcigkc2NvcGUuZmlsdGVyLCAyMDApO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29sdW1uRGVmczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogJ2lkJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAnSWQnLFxyXG4gICAgICAgICAgICAgICAgdmlzaWJsZTogZmFsc2VcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQ6ICdsY0NvZGUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICfmo4DpqoznsbvliKvku6PnoIEnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiAnbGNOYW1lJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAn5qOA6aqM57G75Yir5ZCN56ewJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogJ2xjTmFtZScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogJ+ajgOmqjOexu+WIq+WQjeensCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQ6ICdiYXJjb2RlUHJlJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAn5Luj56CB5YmN57yAJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnZWRpdCcsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogJ+aTjeS9nCcsXHJcbiAgICAgICAgICAgICAgICBjZWxsVGVtcGxhdGU6IGVkaXRVcmxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgIH07XHJcblxyXG4gICAgZGF0YVNlcnZpY2UuZ2V0TGFiQ2F0ZWdvcnlMaXN0KCkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgJHNjb3BlLmdyaWRPcHRpb25zLmRhdGEgPSByZXN1bHQuZGF0YTtcclxuICAgIH0pO1xyXG5cclxuICAgICRzY29wZS5zZWFyY2ggPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJHNjb3BlLmdyaWRBcGkuZ3JpZC5yZWZyZXNoKCk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5jcmVhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJHN0YXRlLmdvKGxpbmspO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuZGVsZXRlID0gZnVuY3Rpb24gKGlkKSB7XHJcbiAgICAgICAgZGF0YVNlcnZpY2UuZGVsZXRlTGFiQ2F0ZWdvcnkoaWQpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuZmlsdGVyID0gZnVuY3Rpb24gKHJlbmRlcmFibGVSb3dzKSB7XHJcbiAgICAgICAgdmFyIG1hdGNoZXIgPSBuZXcgUmVnRXhwKCRzY29wZS5maWx0ZXJWYWx1ZSk7XHJcbiAgICAgICAgcmVuZGVyYWJsZVJvd3MuZm9yRWFjaChmdW5jdGlvbiAocm93KSB7XHJcbiAgICAgICAgICAgIHZhciBtYXRjaCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBbJ2xjTmFtZSddLmZvckVhY2goZnVuY3Rpb24gKGZpZWxkKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocm93LmVudGl0eVtmaWVsZF0ubWF0Y2gobWF0Y2hlcikpIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXRjaCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAoIW1hdGNoKSB7XHJcbiAgICAgICAgICAgICAgICByb3cudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHJlbmRlcmFibGVSb3dzO1xyXG4gICAgfTtcclxufV0pO1xyXG5cclxuYXBwLmNvbnRyb2xsZXIoJ0NhdGVnb3J5RGV0YWlsQ3RybCcsIFsnJHNjb3BlJywgJyRzdGF0ZScsICckc3RhdGVQYXJhbXMnLCAnZGF0YVNlcnZpY2UnLCBmdW5jdGlvbiAoJHNjb3BlLCAkc3RhdGUsICRzdGF0ZVBhcmFtcywgZGF0YVNlcnZpY2UpIHtcclxuXHJcbiAgICAkc2NvcGUubW9kZWwgPSB7XHJcbiAgICAgICAgaWQ6IG51bGwsXHJcbiAgICAgICAgbGNDb2RlOiBudWxsLFxyXG4gICAgICAgIGxjTmFtZTogbnVsbCxcclxuICAgICAgICBiYXJjb2RlUHJlOiBudWxsLFxyXG4gICAgICAgIGV4dGVybmFsQ29kZTogbnVsbCxcclxuICAgICAgICBjb2xvcjogbnVsbCxcclxuICAgICAgICBib29sZEFsb25lOiBudWxsLFxyXG4gICAgICAgIGV4YW1OdW06IG51bGxcclxuICAgIH07XHJcblxyXG5cclxuICAgICRzY29wZS5zdWJtaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJHNjb3BlLm1vZGVsKTtcclxuICAgICAgICBkYXRhU2VydmljZS5zYXZlTGFiQ2F0ZWdvcnkoJHNjb3BlLm1vZGVsKS50aGVuKCk7XHJcbiAgICB9O1xyXG5cclxufV0pOyIsImFwcC5jb250cm9sbGVyKCdDcmlzaXNMaXN0Q3RybCcsIFsnJHNjb3BlJywgJyRzdGF0ZScsICdkYXRhU2VydmljZScsIGZ1bmN0aW9uICgkc2NvcGUsICRzdGF0ZSwgZGF0YVNlcnZpY2UpIHtcclxuICAgIC8vIHZhciB0cGwgPSAnPGJ1dHRvbiBpZD1cImVkaXRCdG5cIiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4tc21hbGxcIiBuZy1jbGljaz1cImdyaWQuYXBwU2NvcGUuZ28ocm93LmVudGl0eSlcIiA+RWRpdDwvYnV0dG9uPic7XHJcbiAgICAvLyAkc2NvcGUuZ28gPSBmdW5jdGlvbiAocm93RGF0YSkge1xyXG4gICAgLy8gICAgICRzdGF0ZS5nbygnYXBwLmNyaXNpc19kZXRhaWwnLCB7IGlkOiByb3dEYXRhLmlkIH0pO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIHZhciBlZGl0VXJsID0gJzxhIGNsYXNzPVwiZWRpdC10cGxcIiB1aS1zcmVmPVwiYXBwLmNyaXNpc19kZXRhaWwoe2lkOiByb3cuZW50aXR5LmlkfSlcIj7nvJbovpE8L2E+PGEgY2xhc3M9XCJkZWxldGUtdHBsXCIgbmctY2xpY2s9XCJncmlkLmFwcFNjb3BlLmRlbGV0ZShyb3cuZW50aXR5LmlkKVwiPuWIoOmZpDwvYT4nXHJcblxyXG4gICAgJHNjb3BlLmdyaWRPcHRpb25zID0ge1xyXG4gICAgICAgIGVuYWJsZUZpbHRlcmluZzogZmFsc2UsXHJcbiAgICAgICAgb25SZWdpc3RlckFwaTogZnVuY3Rpb24gKGdyaWRBcGkpIHtcclxuICAgICAgICAgICAgJHNjb3BlLmdyaWRBcGkgPSBncmlkQXBpO1xyXG4gICAgICAgICAgICAkc2NvcGUuZ3JpZEFwaS5ncmlkLnJlZ2lzdGVyUm93c1Byb2Nlc3Nvcigkc2NvcGUuZmlsdGVyLCAyMDApO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29sdW1uRGVmczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogJ2lkJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAnSWQnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiAnbGFiSXRlbU5hbWUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICfmo4Dpqozpobnnm64nXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiAnbm9ybWFsVXBwZXInLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICfmraPluLjkuIrpmZAnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiAnbm9ybWFsTG93JyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAn5q2j5bi45LiL6ZmQJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogJ2NyZWF0ZVRpbWUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICfliJvlu7rml7bpl7QnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdlZGl0JyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAn5pON5L2cJyxcclxuICAgICAgICAgICAgICAgIGNlbGxUZW1wbGF0ZTogZWRpdFVybFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgfTtcclxuXHJcbiAgICBkYXRhU2VydmljZS5nZXRDcmlzaXNMaXN0KCkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgJHNjb3BlLmdyaWRPcHRpb25zLmRhdGEgPSByZXN1bHQuZGF0YTtcclxuICAgIH0pO1xyXG5cclxuICAgICRzY29wZS5zZWFyY2ggPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJHNjb3BlLmdyaWRBcGkuZ3JpZC5yZWZyZXNoKCk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5jcmVhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJHN0YXRlLmdvKCdhcHAuY3Jpc2lzX2RldGFpbCcpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuZGVsZXRlID0gZnVuY3Rpb24gKGlkKSB7XHJcbiAgICAgICAgZGF0YVNlcnZpY2UuZGVsZXRlQ3Jpc2lzKGlkKTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmZpbHRlcj1mdW5jdGlvbihyZW5kZXJhYmxlUm93cyl7XHJcbiAgICAgICAgdmFyIG1hdGNoZXIgPSBuZXcgUmVnRXhwKCRzY29wZS5maWx0ZXJWYWx1ZSk7XHJcbiAgICAgICAgcmVuZGVyYWJsZVJvd3MuZm9yRWFjaCggZnVuY3Rpb24oIHJvdyApIHtcclxuICAgICAgICAgIHZhciBtYXRjaCA9IGZhbHNlO1xyXG4gICAgICAgICAgWyAnbGFiSXRlbU5hbWUnIF0uZm9yRWFjaChmdW5jdGlvbiggZmllbGQgKXtcclxuICAgICAgICAgICAgaWYgKCByb3cuZW50aXR5W2ZpZWxkXS5tYXRjaChtYXRjaGVyKSApe1xyXG4gICAgICAgICAgICAgIG1hdGNoID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBpZiAoICFtYXRjaCApe1xyXG4gICAgICAgICAgICByb3cudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiByZW5kZXJhYmxlUm93cztcclxuICAgIH07XHJcbn1dKTtcclxuXHJcbmFwcC5jb250cm9sbGVyKCdDcmlzaXNEZXRhaWxDdHJsJywgWyckc2NvcGUnLCAnJHN0YXRlJywgJyRzdGF0ZVBhcmFtcycsICdkYXRhU2VydmljZScsIGZ1bmN0aW9uICgkc2NvcGUsICRzdGF0ZSwgJHN0YXRlUGFyYW1zLCBkYXRhU2VydmljZSkge1xyXG4gICAgLy9jb25zb2xlLmxvZygkc3RhdGVQYXJhbXMpO1xyXG4gICAgJHNjb3BlLm1vZGVsID0ge1xyXG4gICAgICAgIHNlbGVjdGVkbGFiSXRlbTogbnVsbCxcclxuICAgICAgICBpZDpudWxsLFxyXG4gICAgICAgIGxtSWQ6bnVsbCxcclxuICAgICAgICBub3JtYWxVcHBlcjpudWxsLFxyXG4gICAgICAgIG5vcm1hbExvdzpudWxsLFxyXG4gICAgICAgIGNyaXNpc1VwcGVyOm51bGwsXHJcbiAgICAgICAgY3Jpc2lzTG93Om51bGwsXHJcbiAgICAgICAgY3Jpc2lzQ2xpbmljYWw6bnVsbCxcclxuICAgICAgICBjbGluaWNhc1NpZ25pZmljYW5jZTpudWxsXHJcbiAgICB9O1xyXG4gICAgZGF0YVNlcnZpY2UuZ2V0bGFiaXRlbUxpc3QoKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAkc2NvcGUubGFiSXRlbUxpc3QgPSByZXN1bHQuZGF0YTtcclxuICAgIH0pO1xyXG5cclxuICAgICRzY29wZS5zdWJtaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJHNjb3BlLm1vZGVsKTtcclxuICAgICAgICBkYXRhU2VydmljZS5zYXZlQ3Jpc2lzKCRzY29wZS5tb2RlbCkudGhlbihmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG59XSk7IiwiYXBwLmNvbnRyb2xsZXIoJ0RlcGFydExpc3RDdHJsJywgWyckc2NvcGUnLCAnJHN0YXRlJywgJ2RhdGFTZXJ2aWNlJywgZnVuY3Rpb24gKCRzY29wZSwgJHN0YXRlLCBkYXRhU2VydmljZSkge1xyXG4gICAgdmFyIGVkaXRVcmwgPSAnPGEgY2xhc3M9XCJlZGl0LXRwbFwiIHVpLXNyZWY9XCJhcHAuZGVwYXJ0X2RldGFpbCh7aWQ6IHJvdy5lbnRpdHkuaWR9KVwiPue8lui+kTwvYT4nO1xyXG4gICAgZWRpdFVybCs9JzxhIGNsYXNzPVwiZGVsZXRlLXRwbFwiIG5nLWNsaWNrPVwiZ3JpZC5hcHBTY29wZS5kZWxldGUocm93LmVudGl0eS5pZClcIj7liKDpmaQ8L2E+JztcclxuXHJcbiAgICAkc2NvcGUuZ3JpZE9wdGlvbnMgPSB7XHJcbiAgICAgICAgZW5hYmxlRmlsdGVyaW5nOiBmYWxzZSxcclxuICAgICAgICBvblJlZ2lzdGVyQXBpOiBmdW5jdGlvbiAoZ3JpZEFwaSkge1xyXG4gICAgICAgICAgICAkc2NvcGUuZ3JpZEFwaSA9IGdyaWRBcGk7XHJcbiAgICAgICAgICAgICRzY29wZS5ncmlkQXBpLmdyaWQucmVnaXN0ZXJSb3dzUHJvY2Vzc29yKCRzY29wZS5maWx0ZXIsIDIwMCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb2x1bW5EZWZzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiAnaWQnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICdJZCcsXHJcbiAgICAgICAgICAgICAgICB2aXNpYmxlOiBmYWxzZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogJ2RlcHRDb2RlJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAn56eR5a6k57yW56CBJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogJ2RlcHROYW1lJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAn56eR5a6k5ZCN56ewJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogJ3NpdGVOYW1lJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAn5omA5bGe5py65p6EJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnZWRpdCcsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogJ+aTjeS9nCcsXHJcbiAgICAgICAgICAgICAgICBjZWxsVGVtcGxhdGU6IGVkaXRVcmxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgIH07XHJcblxyXG4gICAgZGF0YVNlcnZpY2UuZ2V0RGVwdExpc3QoKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAkc2NvcGUuZ3JpZE9wdGlvbnMuZGF0YSA9IHJlc3VsdC5kYXRhO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJHNjb3BlLnNlYXJjaCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkc2NvcGUuZ3JpZEFwaS5ncmlkLnJlZnJlc2goKTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmNyZWF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkc3RhdGUuZ28oJ2FwcC5kZXBhcnRfZGV0YWlsJyk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5kZWxldGUgPSBmdW5jdGlvbiAoaWQpIHtcclxuICAgICAgICBkYXRhU2VydmljZS5kZWxldGVEZXB0KGlkKTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmZpbHRlcj1mdW5jdGlvbihyZW5kZXJhYmxlUm93cyl7XHJcbiAgICAgICAgdmFyIG1hdGNoZXIgPSBuZXcgUmVnRXhwKCRzY29wZS5maWx0ZXJWYWx1ZSk7XHJcbiAgICAgICAgcmVuZGVyYWJsZVJvd3MuZm9yRWFjaCggZnVuY3Rpb24oIHJvdyApIHtcclxuICAgICAgICAgIHZhciBtYXRjaCA9IGZhbHNlO1xyXG4gICAgICAgICAgWyAnZGVwdE5hbWUnIF0uZm9yRWFjaChmdW5jdGlvbiggZmllbGQgKXtcclxuICAgICAgICAgICAgaWYgKCByb3cuZW50aXR5W2ZpZWxkXS5tYXRjaChtYXRjaGVyKSApe1xyXG4gICAgICAgICAgICAgIG1hdGNoID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBpZiAoICFtYXRjaCApe1xyXG4gICAgICAgICAgICByb3cudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiByZW5kZXJhYmxlUm93cztcclxuICAgIH07XHJcbn1dKTtcclxuXHJcbmFwcC5jb250cm9sbGVyKCdEZXBhcnREZXRhaWxDdHJsJywgWyckc2NvcGUnLCAnJHN0YXRlJywgJyRzdGF0ZVBhcmFtcycsICdkYXRhU2VydmljZScsIGZ1bmN0aW9uICgkc2NvcGUsICRzdGF0ZSwgJHN0YXRlUGFyYW1zLCBkYXRhU2VydmljZSkge1xyXG4gICAgLy9jb25zb2xlLmxvZygkc3RhdGVQYXJhbXMpO1xyXG4gICAgJHNjb3BlLm1vZGVsID0ge1xyXG4gICAgICAgIGlkOm51bGwsXHJcbiAgICAgICAgc2l0ZUlkOm51bGwsXHJcbiAgICAgICAgZGVwdENvZGU6bnVsbCxcclxuICAgICAgICBkZXB0TmFtZTpudWxsLFxyXG4gICAgICAgIGRlc2M6bnVsbFxyXG4gICAgfTtcclxuICAgICRzY29wZS5zaXRlTGlzdD1udWxsO1xyXG4gICAgJHNjb3BlLnNlbGVjdGVkU2l0ZT1udWxsO1xyXG5cclxuICAgIGRhdGFTZXJ2aWNlLmdldFNpdGVMaXN0KCkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgJHNjb3BlLnNpdGVMaXN0ID0gcmVzdWx0LmRhdGE7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkc2NvcGUuc3VibWl0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCRzY29wZS5tb2RlbCk7XHJcbiAgICAgICAgZGF0YVNlcnZpY2Uuc2F2ZVNpdGUoJHNjb3BlLm1vZGVsKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG59XSk7IiwiYXBwLmNvbnRyb2xsZXIoJ0VtcGxveWVlTGlzdEN0cmwnLCBbJyRzY29wZScsICckc3RhdGUnLCAnZGF0YVNlcnZpY2UnLCBmdW5jdGlvbiAoJHNjb3BlLCAkc3RhdGUsIGRhdGFTZXJ2aWNlKSB7XHJcblxyXG4gICAgdmFyIGxpbmsgPSAnYXBwLmVtcGxveWVlX2RldGFpbCc7XHJcbiAgICB2YXIgZWRpdFVybCA9ICc8YSBjbGFzcz1cImVkaXQtdHBsXCIgdWktc3JlZj1cIicgKyBsaW5rICsgJyh7aWQ6IHJvdy5lbnRpdHkuaWR9KVwiPue8lui+kTwvYT4nO1xyXG4gICAgZWRpdFVybCs9JzxhIGNsYXNzPVwiZGVsZXRlLXRwbFwiIG5nLWNsaWNrPVwiZ3JpZC5hcHBTY29wZS5kZWxldGUocm93LmVudGl0eS5pZClcIj7liKDpmaQ8L2E+JztcclxuXHJcbiAgICAkc2NvcGUuZ3JpZE9wdGlvbnMgPSB7XHJcbiAgICAgICAgZW5hYmxlRmlsdGVyaW5nOiBmYWxzZSxcclxuICAgICAgICBvblJlZ2lzdGVyQXBpOiBmdW5jdGlvbiAoZ3JpZEFwaSkge1xyXG4gICAgICAgICAgICAkc2NvcGUuZ3JpZEFwaSA9IGdyaWRBcGk7XHJcbiAgICAgICAgICAgICRzY29wZS5ncmlkQXBpLmdyaWQucmVnaXN0ZXJSb3dzUHJvY2Vzc29yKCRzY29wZS5maWx0ZXIsIDIwMCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb2x1bW5EZWZzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiAnaWQnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICdJZCcsXHJcbiAgICAgICAgICAgICAgICB2aXNpYmxlOiBmYWxzZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogJ2VtQ29kZScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogJ+WRmOW3pee8lueggSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQ6ICdlbU5hbWUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICflkZjlt6XlkI3np7AnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiAndGl0bGVOYW1lJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAn6IGM56ew5ZCN56ewJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogJ2lETnVtYmVyJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAn6Lqr5Lu96K+B5Y+3J1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnZWRpdCcsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogJ+aTjeS9nCcsXHJcbiAgICAgICAgICAgICAgICBjZWxsVGVtcGxhdGU6IGVkaXRVcmxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgIH07XHJcblxyXG4gICAgZGF0YVNlcnZpY2UuZ2V0RW1wbG95ZWVMaXN0KCkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgJHNjb3BlLmdyaWRPcHRpb25zLmRhdGEgPSByZXN1bHQuZGF0YTtcclxuICAgIH0pO1xyXG5cclxuICAgICRzY29wZS5zZWFyY2ggPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJHNjb3BlLmdyaWRBcGkuZ3JpZC5yZWZyZXNoKCk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5jcmVhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJHN0YXRlLmdvKGxpbmspO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuZGVsZXRlID0gZnVuY3Rpb24gKGlkKSB7XHJcbiAgICAgICAgZGF0YVNlcnZpY2UuZGVsZXRlRW1wbG95ZWUoaWQpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuZmlsdGVyID0gZnVuY3Rpb24gKHJlbmRlcmFibGVSb3dzKSB7XHJcbiAgICAgICAgdmFyIG1hdGNoZXIgPSBuZXcgUmVnRXhwKCRzY29wZS5maWx0ZXJWYWx1ZSk7XHJcbiAgICAgICAgcmVuZGVyYWJsZVJvd3MuZm9yRWFjaChmdW5jdGlvbiAocm93KSB7XHJcbiAgICAgICAgICAgIHZhciBtYXRjaCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBbJ2VtTmFtZSddLmZvckVhY2goZnVuY3Rpb24gKGZpZWxkKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocm93LmVudGl0eVtmaWVsZF0ubWF0Y2gobWF0Y2hlcikpIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXRjaCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAoIW1hdGNoKSB7XHJcbiAgICAgICAgICAgICAgICByb3cudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHJlbmRlcmFibGVSb3dzO1xyXG4gICAgfTtcclxufV0pO1xyXG5cclxuYXBwLmNvbnRyb2xsZXIoJ0VtcGxveWVlRGV0YWlsQ3RybCcsIFsnJHNjb3BlJywgJyRzdGF0ZScsICckc3RhdGVQYXJhbXMnLCAnZGF0YVNlcnZpY2UnLCBmdW5jdGlvbiAoJHNjb3BlLCAkc3RhdGUsICRzdGF0ZVBhcmFtcywgZGF0YVNlcnZpY2UpIHtcclxuICAgIC8vY29uc29sZS5sb2coJHN0YXRlUGFyYW1zKTtcclxuICAgICRzY29wZS5tb2RlbCA9IHtcclxuXHJcbiAgICAgICAgaWQ6IG51bGwsXHJcbiAgICAgICAgc2l0ZUlkOiBudWxsLFxyXG4gICAgICAgIGRlcHRJZDogbnVsbCxcclxuICAgICAgICBlbUNvZGU6IG51bGwsXHJcbiAgICAgICAgZW1OYW1lOiBudWxsLFxyXG4gICAgICAgIGlETnVtYmVyOiBudWxsLFxyXG4gICAgICAgIHBob25lOiBudWxsLFxyXG4gICAgICAgIHRpdGxlSWQ6IG51bGwsXHJcbiAgICAgICAgdGl0bGVOYW1lOiBudWxsLFxyXG4gICAgICAgIHBhc3N3b3JkOiBudWxsLFxyXG4gICAgICAgIGRlc2M6IG51bGwsXHJcbiAgICAgICAgYmlydGhEYXk6IG51bGxcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnNpdGVMaXN0ID0gbnVsbDtcclxuICAgICRzY29wZS5kZXB0TGlzdCA9IG51bGw7XHJcbiAgICAkc2NvcGUuc2VsZWN0ZWRTZXggPSBudWxsO1xyXG4gICAgJHNjb3BlLnNlbGVjdGVkU2l0ZSA9IG51bGw7XHJcbiAgICAkc2NvcGUuc2VsZWN0ZWREZXB0ID0gbnVsbDtcclxuXHJcbiAgICAkc2NvcGUuZGF0ZU9wdGlvbnMgPSB7XHJcbiAgICAgICAgZm9ybWF0WWVhcjogJ3l5JyxcclxuICAgICAgICBzdGFydGluZ0RheTogMSxcclxuICAgICAgICBjbGFzczogJ2RhdGVwaWNrZXInXHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5vcGVuRGF0ZSA9IGZ1bmN0aW9uICgkZXZlbnQpIHtcclxuICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgICAgICRzY29wZS5vcGVuZWQgPSB0cnVlO1xyXG4gICAgfTtcclxuXHJcbiAgICBkYXRhU2VydmljZS5nZXRTaXRlTGlzdCgpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICRzY29wZS5zaXRlTGlzdCA9IHJlc3VsdC5kYXRhO1xyXG4gICAgfSk7XHJcbiAgICBkYXRhU2VydmljZS5nZXREZXB0TGlzdCgpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICRzY29wZS5kZXB0TGlzdCA9IHJlc3VsdC5kYXRhO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJHNjb3BlLnN1Ym1pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygkc2NvcGUubW9kZWwpO1xyXG4gICAgICAgIGRhdGFTZXJ2aWNlLnNhdmVFbXBsb3llZSgkc2NvcGUubW9kZWwpLnRoZW4oZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxufV0pOyIsImFwcC5jb250cm9sbGVyKCdMYWJpdGVtTGlzdEN0cmwnLCBbJyRzY29wZScsICckc3RhdGUnLCAnZGF0YVNlcnZpY2UnLCBmdW5jdGlvbiAoJHNjb3BlLCAkc3RhdGUsIGRhdGFTZXJ2aWNlKSB7XHJcblxyXG4gICAgdmFyIGxpbmsgPSAnYXBwLmxhYml0ZW1fZGV0YWlsJztcclxuICAgIHZhciBlZGl0VXJsID0gJzxhIGNsYXNzPVwiZWRpdC10cGxcIiB1aS1zcmVmPVwiJyArIGxpbmsgKyAnKHtpZDogcm93LmVudGl0eS5pZH0pXCI+57yW6L6RPC9hPic7XHJcbiAgICBlZGl0VXJsKz0nPGEgY2xhc3M9XCJkZWxldGUtdHBsXCIgbmctY2xpY2s9XCJncmlkLmFwcFNjb3BlLmRlbGV0ZShyb3cuZW50aXR5LmlkKVwiPuWIoOmZpDwvYT4nO1xyXG5cclxuICAgICRzY29wZS5ncmlkT3B0aW9ucyA9IHtcclxuICAgICAgICBlbmFibGVGaWx0ZXJpbmc6IGZhbHNlLFxyXG4gICAgICAgIG9uUmVnaXN0ZXJBcGk6IGZ1bmN0aW9uIChncmlkQXBpKSB7XHJcbiAgICAgICAgICAgICRzY29wZS5ncmlkQXBpID0gZ3JpZEFwaTtcclxuICAgICAgICAgICAgJHNjb3BlLmdyaWRBcGkuZ3JpZC5yZWdpc3RlclJvd3NQcm9jZXNzb3IoJHNjb3BlLmZpbHRlciwgMjAwKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbHVtbkRlZnM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQ6ICdpZCcsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogJ0lkJyxcclxuICAgICAgICAgICAgICAgIHZpc2libGU6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiAnaXRlbUNvZGUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICfku6PnoIEnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiAnc3RhbmRhcmRDb2RlJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAn5qCH5YeG5Luj56CBJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogJ2l0ZW1OYW1lJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAn6aG555uu5ZCN56ewJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogJ3Jlc3VsdFR5cGUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICfnu5PmnpznsbvlnosnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdlZGl0JyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAn5pON5L2cJyxcclxuICAgICAgICAgICAgICAgIGNlbGxUZW1wbGF0ZTogZWRpdFVybFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgfTtcclxuXHJcbiAgICBkYXRhU2VydmljZS5nZXRsYWJpdGVtTGlzdCgpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICRzY29wZS5ncmlkT3B0aW9ucy5kYXRhID0gcmVzdWx0LmRhdGE7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkc2NvcGUuc2VhcmNoID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICRzY29wZS5ncmlkQXBpLmdyaWQucmVmcmVzaCgpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuY3JlYXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICRzdGF0ZS5nbyhsaW5rKTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmRlbGV0ZSA9IGZ1bmN0aW9uIChpZCkge1xyXG4gICAgICAgIGRhdGFTZXJ2aWNlLmRlbGV0ZUxhYkl0ZW0oaWQpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuZmlsdGVyID0gZnVuY3Rpb24gKHJlbmRlcmFibGVSb3dzKSB7XHJcbiAgICAgICAgdmFyIG1hdGNoZXIgPSBuZXcgUmVnRXhwKCRzY29wZS5maWx0ZXJWYWx1ZSk7XHJcbiAgICAgICAgcmVuZGVyYWJsZVJvd3MuZm9yRWFjaChmdW5jdGlvbiAocm93KSB7XHJcbiAgICAgICAgICAgIHZhciBtYXRjaCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBbJ2l0ZW1OYW1lJ10uZm9yRWFjaChmdW5jdGlvbiAoZmllbGQpIHtcclxuICAgICAgICAgICAgICAgIGlmIChyb3cuZW50aXR5W2ZpZWxkXS5tYXRjaChtYXRjaGVyKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hdGNoID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmICghbWF0Y2gpIHtcclxuICAgICAgICAgICAgICAgIHJvdy52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcmVuZGVyYWJsZVJvd3M7XHJcbiAgICB9O1xyXG59XSk7XHJcblxyXG5hcHAuY29udHJvbGxlcignTGFiaXRlbURldGFpbEN0cmwnLCBbJyRzY29wZScsICckc3RhdGUnLCAnJHN0YXRlUGFyYW1zJywgJ2RhdGFTZXJ2aWNlJywgZnVuY3Rpb24gKCRzY29wZSwgJHN0YXRlLCAkc3RhdGVQYXJhbXMsIGRhdGFTZXJ2aWNlKSB7XHJcbiAgICAvL2NvbnNvbGUubG9nKCRzdGF0ZVBhcmFtcyk7XHJcbiAgICAkc2NvcGUubW9kZWwgPSB7XHJcbiAgICAgICAgaWQ6IG51bGwsXHJcbiAgICAgICAgbGNJZDogbnVsbCxcclxuICAgICAgICBpdGVtQ29kZTogbnVsbCxcclxuICAgICAgICBzdGFuZGFyZENvZGU6IG51bGwsXHJcbiAgICAgICAgaXRlbU5hbWU6IG51bGwsXHJcbiAgICAgICAgY2F0ZWdvcnk6IG51bGwsXHJcbiAgICAgICAgcmVzdWx0VHlwZTogbnVsbCxcclxuICAgICAgICB1bml0OiBudWxsLFxyXG4gICAgICAgIGxpZmVMaW1pdDogbnVsbCxcclxuICAgICAgICBkZWZWYWx1ZTogbnVsbCxcclxuICAgICAgICB0eXBlQ29kZTE6IG51bGwsXHJcbiAgICAgICAgdHlwZUNvZGUyOiBudWxsLFxyXG4gICAgICAgIGltcG9ydGFudDogbnVsbCxcclxuICAgICAgICBhc3NvY2lhdGVkOiBudWxsLFxyXG4gICAgICAgIGNvbmRpdGlvbkF1ZGl0OiBudWxsLFxyXG4gICAgICAgIGNvbW1lbnQ6IG51bGwsXHJcbiAgICAgICAgZGlzcGxheTogbnVsbCxcclxuICAgICAgICBwcmVjaXNpb246IG51bGwsXHJcbiAgICAgICAgcHJpY2U6IG51bGwsXHJcbiAgICAgICAgY2FuWmVybzogbnVsbCxcclxuICAgICAgICBjYW5MZXNzWmVybzogbnVsbCxcclxuICAgICAgICBtZWFuT2ZjbGluaWM6IG51bGwsXHJcbiAgICAgICAgZGVzYzogbnVsbFxyXG4gICAgfTtcclxuICAgICRzY29wZS5zZWxlY3RlZExhYkNhdGVnb3J5ID0gbnVsbDtcclxuICAgICRzY29wZS5sYWJDYXRlZ29yeUxpc3QgPSBudWxsO1xyXG4gICAgZGF0YVNlcnZpY2UuZ2V0TGFiQ2F0ZWdvcnlMaXN0KCkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgJHNjb3BlLmxhYkNhdGVnb3J5TGlzdCA9IHJlc3VsdC5kYXRhO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJHNjb3BlLnN1Ym1pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygkc2NvcGUubW9kZWwpO1xyXG4gICAgICAgIGRhdGFTZXJ2aWNlLnNhdmVMYWJpdGVtKCRzY29wZS5tb2RlbCkudGhlbigpO1xyXG4gICAgfTtcclxuXHJcbn1dKTsiLCJhcHAuY29udHJvbGxlcignTGFiSXRlbVNldExpc3RDdHJsJywgWyckc2NvcGUnLCAnJHN0YXRlJywgJ2RhdGFTZXJ2aWNlJywgZnVuY3Rpb24gKCRzY29wZSwgJHN0YXRlLCBkYXRhU2VydmljZSkge1xyXG5cclxuICAgIHZhciBsaW5rPSdhcHAubGFiaXRlbXNldF9kZXRhaWwnO1xyXG4gICAgdmFyIGVkaXRVcmwgPSAnPGEgY2xhc3M9XCJlZGl0LXRwbFwiIHVpLXNyZWY9XCInK2xpbmsrJyh7aWQ6IHJvdy5lbnRpdHkuaWR9KVwiPue8lui+kTwvYT4nO1xyXG4gICAgZWRpdFVybCs9JzxhIGNsYXNzPVwiZGVsZXRlLXRwbFwiIG5nLWNsaWNrPVwiZ3JpZC5hcHBTY29wZS5kZWxldGUocm93LmVudGl0eS5pZClcIj7liKDpmaQ8L2E+JztcclxuICAgIFxyXG4gICAgJHNjb3BlLmdyaWRPcHRpb25zID0ge1xyXG4gICAgICAgIGVuYWJsZUZpbHRlcmluZzogZmFsc2UsXHJcbiAgICAgICAgb25SZWdpc3RlckFwaTogZnVuY3Rpb24gKGdyaWRBcGkpIHtcclxuICAgICAgICAgICAgJHNjb3BlLmdyaWRBcGkgPSBncmlkQXBpO1xyXG4gICAgICAgICAgICAkc2NvcGUuZ3JpZEFwaS5ncmlkLnJlZ2lzdGVyUm93c1Byb2Nlc3Nvcigkc2NvcGUuZmlsdGVyLCAyMDApO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29sdW1uRGVmczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogJ2lkJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAnSWQnLFxyXG4gICAgICAgICAgICAgICAgdmlzaWJsZTogZmFsc2VcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQ6ICdsaXNDb2RlJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAn57uE5ZCI6aG555uu5Luj56CBJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogJ2xpc05hbWUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICfnu4TlkIjpobnnm67lkI3np7AnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiAnY29tbWVudCcsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogJ+Wkh+azqCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ2VkaXQnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICfmk43kvZwnLFxyXG4gICAgICAgICAgICAgICAgY2VsbFRlbXBsYXRlOiBlZGl0VXJsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICB9O1xyXG5cclxuICAgIGRhdGFTZXJ2aWNlLmdldExhYkl0ZW1TZXRMaXN0KCkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgJHNjb3BlLmdyaWRPcHRpb25zLmRhdGEgPSByZXN1bHQuZGF0YTtcclxuICAgIH0pO1xyXG5cclxuICAgICRzY29wZS5zZWFyY2ggPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJHNjb3BlLmdyaWRBcGkuZ3JpZC5yZWZyZXNoKCk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5jcmVhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJHN0YXRlLmdvKGxpbmspO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuZGVsZXRlID0gZnVuY3Rpb24gKGlkKSB7XHJcbiAgICAgICAgZGF0YVNlcnZpY2UuZGVsZXRlTGFiSXRlbVNldChpZCk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5maWx0ZXI9ZnVuY3Rpb24ocmVuZGVyYWJsZVJvd3Mpe1xyXG4gICAgICAgIHZhciBtYXRjaGVyID0gbmV3IFJlZ0V4cCgkc2NvcGUuZmlsdGVyVmFsdWUpO1xyXG4gICAgICAgIHJlbmRlcmFibGVSb3dzLmZvckVhY2goIGZ1bmN0aW9uKCByb3cgKSB7XHJcbiAgICAgICAgICB2YXIgbWF0Y2ggPSBmYWxzZTtcclxuICAgICAgICAgIFsgJ2xpc05hbWUnIF0uZm9yRWFjaChmdW5jdGlvbiggZmllbGQgKXtcclxuICAgICAgICAgICAgaWYgKCByb3cuZW50aXR5W2ZpZWxkXS5tYXRjaChtYXRjaGVyKSApe1xyXG4gICAgICAgICAgICAgIG1hdGNoID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBpZiAoICFtYXRjaCApe1xyXG4gICAgICAgICAgICByb3cudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiByZW5kZXJhYmxlUm93cztcclxuICAgIH07XHJcbn1dKTtcclxuXHJcbmFwcC5jb250cm9sbGVyKCdMYWJJdGVtU2V0RGV0YWlsQ3RybCcsIFsnJHNjb3BlJywgJyRzdGF0ZScsICckc3RhdGVQYXJhbXMnLCAnZGF0YVNlcnZpY2UnLCBmdW5jdGlvbiAoJHNjb3BlLCAkc3RhdGUsICRzdGF0ZVBhcmFtcywgZGF0YVNlcnZpY2UpIHtcclxuXHJcbiAgICAkc2NvcGUubW9kZWwgPSB7XHJcbiAgICAgICAgc2VsZWN0ZWRsYWJJdGVtOiBudWxsLFxyXG4gICAgICAgIG5vcm1hbFVwOiBudWxsXHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5zZWxlY3RlZGxhYkl0ZW09bnVsbDtcclxuICAgICRzY29wZS5sYWJJdGVtTGlzdD1udWxsO1xyXG5cclxuICAgIGRhdGFTZXJ2aWNlLmdldGxhYml0ZW1MaXN0KCkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgJHNjb3BlLmxhYkl0ZW1MaXN0ID0gcmVzdWx0LmRhdGE7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkc2NvcGUuc3VibWl0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCRzY29wZS5tb2RlbCk7XHJcbiAgICB9O1xyXG5cclxufV0pOyIsImFwcC5jb250cm9sbGVyKCdMYWJyZXN1bHRMaXN0Q3RybCcsIFsnJHNjb3BlJywgJyRzdGF0ZScsICdkYXRhU2VydmljZScsIGZ1bmN0aW9uICgkc2NvcGUsICRzdGF0ZSwgZGF0YVNlcnZpY2UpIHtcclxuICAgIHZhciBlZGl0VXJsID0gJzxhIGNsYXNzPVwiZWRpdC10cGxcIiB1aS1zcmVmPVwibGFicmVzdWx0X3ByaW50KHtpZDogcm93LmVudGl0eS5pZH0pXCI+5omT5Y2wPC9hPidcclxuXHJcbiAgICAkc2NvcGUuZ3JpZE9wdGlvbnMgPSB7XHJcbiAgICAgICAgZW5hYmxlRmlsdGVyaW5nOiBmYWxzZSxcclxuICAgICAgICBvblJlZ2lzdGVyQXBpOiBmdW5jdGlvbiAoZ3JpZEFwaSkge1xyXG4gICAgICAgICAgICAkc2NvcGUuZ3JpZEFwaSA9IGdyaWRBcGk7XHJcbiAgICAgICAgICAgICRzY29wZS5ncmlkQXBpLmdyaWQucmVnaXN0ZXJSb3dzUHJvY2Vzc29yKCRzY29wZS5maWx0ZXIsIDIwMCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb2x1bW5EZWZzOiAgW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogJ2lkJyxcclxuICAgICAgICAgICAgICAgIHZpc2libGU6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiAncmVxdWVzdE5vJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAn55Sz6K+35Y2V5Y+3J1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogJ2VtcE5hbWUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICfnlLPor7flkZjlt6UnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiAncmVxVGltZScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogJ+eUs+ivt+aXtumXtCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ2VkaXQnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICfmk43kvZwnLFxyXG4gICAgICAgICAgICAgICAgY2VsbFRlbXBsYXRlOiBlZGl0VXJsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICB9O1xyXG5cclxuICAgIGRhdGFTZXJ2aWNlLmdldFJlcXVlc3RMaXN0KCkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgJHNjb3BlLmdyaWRPcHRpb25zLmRhdGEgPSByZXN1bHQuZGF0YTtcclxuICAgIH0pO1xyXG5cclxuICAgICRzY29wZS5zZWFyY2ggPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJHNjb3BlLmdyaWRBcGkuZ3JpZC5yZWZyZXNoKCk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5jcmVhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJHN0YXRlLmdvKCdhcHAubGFicmVzdWx0X2RldGFpbCcpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuZmlsdGVyPWZ1bmN0aW9uKHJlbmRlcmFibGVSb3dzKXtcclxuICAgICAgICAvLyB2YXIgbWF0Y2hlciA9IG5ldyBSZWdFeHAoJHNjb3BlLmZpbHRlclZhbHVlKTtcclxuICAgICAgICAvLyByZW5kZXJhYmxlUm93cy5mb3JFYWNoKCBmdW5jdGlvbiggcm93ICkge1xyXG4gICAgICAgIC8vICAgdmFyIG1hdGNoID0gZmFsc2U7XHJcbiAgICAgICAgLy8gICBbICduYW1lJyBdLmZvckVhY2goZnVuY3Rpb24oIGZpZWxkICl7XHJcbiAgICAgICAgLy8gICAgIGlmICggcm93LmVudGl0eVtmaWVsZF0ubWF0Y2gobWF0Y2hlcikgKXtcclxuICAgICAgICAvLyAgICAgICBtYXRjaCA9IHRydWU7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyAgIH0pO1xyXG4gICAgICAgIC8vICAgaWYgKCAhbWF0Y2ggKXtcclxuICAgICAgICAvLyAgICAgcm93LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAvLyAgIH1cclxuICAgICAgICAvLyB9KTtcclxuICAgICAgICByZXR1cm4gcmVuZGVyYWJsZVJvd3M7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5hY2NlcHQ9ZnVuY3Rpb24oKXtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5yZWplY3Q9ZnVuY3Rpb24oKXtcclxuXHJcbiAgICB9O1xyXG59XSk7XHJcblxyXG5hcHAuY29udHJvbGxlcignTGFicmVzdWx0RGV0YWlsQ3RybCcsIFsnJHNjb3BlJywgJyRzdGF0ZScsICckc3RhdGVQYXJhbXMnLCAnZGF0YVNlcnZpY2UnLCBmdW5jdGlvbiAoJHNjb3BlLCAkc3RhdGUsICRzdGF0ZVBhcmFtcywgZGF0YVNlcnZpY2UpIHtcclxuXHJcbiAgICAkc2NvcGUubW9kZWwgPSB7XHJcbiAgICAgICAgc2VsZWN0ZWRsYWJJdGVtOiBudWxsLFxyXG4gICAgICAgIG5vcm1hbFVwOiBudWxsXHJcbiAgICB9O1xyXG4gICAgZGF0YVNlcnZpY2UuZ2V0UmVxdWVzdExpc3QoKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAkc2NvcGUuaXRlbUxpc3QgPSByZXN1bHQuZGF0YTtcclxuICAgIH0pO1xyXG5cclxuICAgICRzY29wZS5zdWJtaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJHNjb3BlLm1vZGVsKTtcclxuICAgIH07XHJcblxyXG59XSk7XHJcblxyXG5hcHAuY29udHJvbGxlcignTGFicmVzdWx0UHJpbnRDdHJsJywgWyckc2NvcGUnLCAnJHN0YXRlJywgJyRzdGF0ZVBhcmFtcycsICdkYXRhU2VydmljZScsIGZ1bmN0aW9uICgkc2NvcGUsICRzdGF0ZSwgJHN0YXRlUGFyYW1zLCBkYXRhU2VydmljZSkge1xyXG5cclxufV0pOyIsImFwcC5jb250cm9sbGVyKCdMb2dpc3RpY3NMaXN0Q3RybCcsIFsnJHNjb3BlJywgJyRtb2RhbCcsICckc3RhdGUnLCAnZGF0YVNlcnZpY2UnLCBmdW5jdGlvbiAoJHNjb3BlLCAkbW9kYWwsICRzdGF0ZSwgZGF0YVNlcnZpY2UpIHtcclxuXHJcbiAgICAkc2NvcGUuZ3JpZE9wdGlvbnMgPSB7XHJcbiAgICAgICAgZW5hYmxlRmlsdGVyaW5nOiBmYWxzZSxcclxuICAgICAgICBvblJlZ2lzdGVyQXBpOiBmdW5jdGlvbiAoZ3JpZEFwaSkge1xyXG4gICAgICAgICAgICAkc2NvcGUuZ3JpZEFwaSA9IGdyaWRBcGk7XHJcbiAgICAgICAgICAgICRzY29wZS5ncmlkQXBpLmdyaWQucmVnaXN0ZXJSb3dzUHJvY2Vzc29yKCRzY29wZS5maWx0ZXIsIDIwMCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb2x1bW5EZWZzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiAnaWQnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICdJZCcsXHJcbiAgICAgICAgICAgICAgICB2aXNpYmxlOiBmYWxzZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogJ3NhbXBsZU5vJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAn5qC35pys5Y+3J1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogJ3NlbmRFbXAnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICfpgIHmo4DkuronXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiAnc2VuZFRpbWUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICfpgIHmo4Dml7bpl7QnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiAnbHNTdGF0dXMnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICfnianmtYHnirbmgIEnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICB9O1xyXG5cclxuICAgIGRhdGFTZXJ2aWNlLmdldFNhbXBsZUxpc3QoKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAkc2NvcGUuZ3JpZE9wdGlvbnMuZGF0YSA9IHJlc3VsdC5kYXRhO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJHNjb3BlLnNlYXJjaCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkc2NvcGUuZ3JpZEFwaS5ncmlkLnJlZnJlc2goKTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmZpbHRlciA9IGZ1bmN0aW9uIChyZW5kZXJhYmxlUm93cykge1xyXG4gICAgICAgIC8vIHZhciBtYXRjaGVyID0gbmV3IFJlZ0V4cCgkc2NvcGUuZmlsdGVyVmFsdWUpO1xyXG4gICAgICAgIC8vIHJlbmRlcmFibGVSb3dzLmZvckVhY2goIGZ1bmN0aW9uKCByb3cgKSB7XHJcbiAgICAgICAgLy8gICB2YXIgbWF0Y2ggPSBmYWxzZTtcclxuICAgICAgICAvLyAgIFsgJ25hbWUnIF0uZm9yRWFjaChmdW5jdGlvbiggZmllbGQgKXtcclxuICAgICAgICAvLyAgICAgaWYgKCByb3cuZW50aXR5W2ZpZWxkXS5tYXRjaChtYXRjaGVyKSApe1xyXG4gICAgICAgIC8vICAgICAgIG1hdGNoID0gdHJ1ZTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vICAgfSk7XHJcbiAgICAgICAgLy8gICBpZiAoICFtYXRjaCApe1xyXG4gICAgICAgIC8vICAgICByb3cudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIC8vICAgfVxyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgICAgIHJldHVybiByZW5kZXJhYmxlUm93cztcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmFjY2VwdCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5yZWplY3QgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUub3BlbkRpYWxvZyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkbW9kYWwub3Blbih7XHJcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnLi4vdHBsL2RpYWxvZy9zYW1wbGVfZGlhbG9nLmh0bWwnLFxyXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnU2FtcGxlRGlhbG9nQ3RybCcsXHJcbiAgICAgICAgICAgIHNpemU6ICdsZydcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbn1dKTtcclxuXHJcbmFwcC5jb250cm9sbGVyKCdTYW1wbGVEaWFsb2dDdHJsJywgWyckc2NvcGUnLCAnJG1vZGFsSW5zdGFuY2UnLCAnZGF0YVNlcnZpY2UnLCBmdW5jdGlvbiAoJHNjb3BlLCAkbW9kYWxJbnN0YW5jZSwgZGF0YVNlcnZpY2UpIHtcclxuICAgICRzY29wZS5zYW1wbGVObyA9IG51bGw7XHJcbiAgICAkc2NvcGUuZm9jdXNGbGFnID0gMTtcclxuICAgICRzY29wZS5zYW1wbGVMaXN0ID0gW107XHJcbiAgICAkc2NvcGUuc2VuZEVtcD1udWxsO1xyXG5cclxuICAgICRzY29wZS5rZXlwcmVzcyA9IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIGlmIChldmVudC5jaGFyQ29kZSA9PSAxMykge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgaWYoJHNjb3BlLnNhbXBsZU5vKXtcclxuICAgICAgICAgICAgICAgICRzY29wZS5zYW1wbGVMaXN0LnB1c2goJHNjb3BlLnNhbXBsZU5vKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAkc2NvcGUuc2FtcGxlTm8gPSAnJztcclxuICAgICAgICAgICAgJHNjb3BlLmZvY3VzRmxhZysrO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmRpYWxvZ1N1Ym1pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkbW9kYWxJbnN0YW5jZS5jbG9zZSgpO1xyXG4gICAgfTtcclxufV0pO1xyXG4iLCJhcHAuY29udHJvbGxlcignTWVkaWNhbExpc3RDdHJsJywgWyckc2NvcGUnLCAnJHN0YXRlJywgJ2RhdGFTZXJ2aWNlJywgZnVuY3Rpb24gKCRzY29wZSwgJHN0YXRlLCBkYXRhU2VydmljZSkge1xyXG5cclxuICAgIHZhciBsaW5rID0gJ2FwcC5tZWRpY2FsX2RldGFpbCc7XHJcbiAgICB2YXIgZWRpdFVybCA9ICc8YSBjbGFzcz1cImVkaXQtdHBsXCIgdWktc3JlZj1cIicgKyBsaW5rICsgJyh7aWQ6IHJvdy5lbnRpdHkuaWR9KVwiPue8lui+kTwvYT4nO1xyXG4gICAgZWRpdFVybCs9JzxhIGNsYXNzPVwiZGVsZXRlLXRwbFwiIG5nLWNsaWNrPVwiZ3JpZC5hcHBTY29wZS5kZWxldGUocm93LmVudGl0eSlcIj7liKDpmaQ8L2E+JztcclxuXHJcbiAgICAkc2NvcGUuZ3JpZE9wdGlvbnMgPSB7XHJcbiAgICAgICAgZW5hYmxlRmlsdGVyaW5nOiBmYWxzZSxcclxuICAgICAgICBvblJlZ2lzdGVyQXBpOiBmdW5jdGlvbiAoZ3JpZEFwaSkge1xyXG4gICAgICAgICAgICAkc2NvcGUuZ3JpZEFwaSA9IGdyaWRBcGk7XHJcbiAgICAgICAgICAgICRzY29wZS5ncmlkQXBpLmdyaWQucmVnaXN0ZXJSb3dzUHJvY2Vzc29yKCRzY29wZS5maWx0ZXIsIDIwMCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb2x1bW5EZWZzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiAnaWQnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICdJZCcsXHJcbiAgICAgICAgICAgICAgICB2aXNpYmxlOiBmYWxzZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogJ21pQ29kZScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogJ+acuuaehOe8lueggSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQ6ICdtaU5hbWUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICfmnLrmnoTlkI3np7AnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiAnbWlDYXRlZ29yeScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogJ+acuuaehOexu+WIqydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ2VkaXQnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICfmk43kvZwnLFxyXG4gICAgICAgICAgICAgICAgY2VsbFRlbXBsYXRlOiBlZGl0VXJsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICB9O1xyXG5cclxuICAgIGRhdGFTZXJ2aWNlLmdldFNpdGVMaXN0KCkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgJHNjb3BlLmdyaWRPcHRpb25zLmRhdGEgPSByZXN1bHQuZGF0YTtcclxuICAgIH0pO1xyXG5cclxuICAgICRzY29wZS5zZWFyY2ggPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJHNjb3BlLmdyaWRBcGkuZ3JpZC5yZWZyZXNoKCk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5jcmVhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJHN0YXRlLmdvKGxpbmspO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuZGVsZXRlID0gZnVuY3Rpb24gKG9iaikge1xyXG4gICAgICAgIGRhdGFTZXJ2aWNlLmRlbGV0ZVNpdGUob2JqKS50aGVuKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIGZvcih2YXIgaT0wO2k8JHNjb3BlLmdyaWRPcHRpb25zLmRhdGEubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgICAgICBpZigkc2NvcGUuZ3JpZE9wdGlvbnMuZGF0YVtpXS5pZD09b2JqLmlkKXtcclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZ3JpZE9wdGlvbnMuZGF0YS5zcGxpY2UoaSwxKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5maWx0ZXIgPSBmdW5jdGlvbiAocmVuZGVyYWJsZVJvd3MpIHtcclxuICAgICAgICB2YXIgbWF0Y2hlciA9IG5ldyBSZWdFeHAoJHNjb3BlLmZpbHRlclZhbHVlKTtcclxuICAgICAgICByZW5kZXJhYmxlUm93cy5mb3JFYWNoKGZ1bmN0aW9uIChyb3cpIHtcclxuICAgICAgICAgICAgdmFyIG1hdGNoID0gZmFsc2U7XHJcbiAgICAgICAgICAgIFsnbWlOYW1lJ10uZm9yRWFjaChmdW5jdGlvbiAoZmllbGQpIHtcclxuICAgICAgICAgICAgICAgIGlmIChyb3cuZW50aXR5W2ZpZWxkXS5tYXRjaChtYXRjaGVyKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hdGNoID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmICghbWF0Y2gpIHtcclxuICAgICAgICAgICAgICAgIHJvdy52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcmVuZGVyYWJsZVJvd3M7XHJcbiAgICB9O1xyXG59XSk7XHJcblxyXG5hcHAuY29udHJvbGxlcignTWVkaWNhbERldGFpbEN0cmwnLCBbJyRzY29wZScsICckc3RhdGUnLCAnJHN0YXRlUGFyYW1zJywgJ2RhdGFTZXJ2aWNlJywgZnVuY3Rpb24gKCRzY29wZSwgJHN0YXRlLCAkc3RhdGVQYXJhbXMsIGRhdGFTZXJ2aWNlKSB7XHJcbiAgICAkc2NvcGUubW9kZWwgPSB7XHJcbiAgICAgICAgaWQ6IG51bGwsXHJcbiAgICAgICAgbWlDb2RlOiBudWxsLFxyXG4gICAgICAgIG1pTmFtZTogbnVsbCxcclxuICAgICAgICBtaUNhdGVnb3J5OiBudWxsLFxyXG4gICAgICAgIGFyZWFDb2RlOiBudWxsLFxyXG4gICAgICAgIGFkZHJlc3M6IG51bGwsXHJcbiAgICAgICAgZGVzYzogbnVsbFxyXG4gICAgfTtcclxuICAgIFxyXG4gICAgXHJcbiAgICBpZigkc3RhdGVQYXJhbXMuaWQpe1xyXG4gICAgICAgIGRhdGFTZXJ2aWNlLmdldFNpdGVCeUlkKCRzdGF0ZVBhcmFtcy5pZCkudGhlbihmdW5jdGlvbihyZXN1bHQpe1xyXG4gICAgICAgICAgICBpZihyZXN1bHQuZGF0YSl7XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUubW9kZWw9cmVzdWx0LmRhdGE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBcclxuXHJcbiAgICAkc2NvcGUuc3VibWl0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCRzY29wZS5tb2RlbCk7XHJcbiAgICAgICAgZGF0YVNlcnZpY2Uuc2F2ZVNpdGUoJHNjb3BlLm1vZGVsKS50aGVuKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICRzdGF0ZS5nbygnYXBwLm1lZGljYWwnKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG59XSk7IiwiYXBwLmNvbnRyb2xsZXIoJ1BhdGllbnRMaXN0Q3RybCcsIFsnJHNjb3BlJywgJyRzdGF0ZScsICdkYXRhU2VydmljZScsIGZ1bmN0aW9uICgkc2NvcGUsICRzdGF0ZSwgZGF0YVNlcnZpY2UpIHtcclxuXHJcbiAgICB2YXIgbGluaz0nYXBwLnBhdGllbnRfZGV0YWlsJztcclxuICAgIHZhciBlZGl0VXJsID0gJzxhIGNsYXNzPVwiZWRpdC10cGxcIiB1aS1zcmVmPVwiJytsaW5rKycoe2lkOiByb3cuZW50aXR5LmlkfSlcIj7nvJbovpE8L2E+JztcclxuICAgIGVkaXRVcmwrPSc8YSBjbGFzcz1cImRlbGV0ZS10cGxcIiBuZy1jbGljaz1cImdyaWQuYXBwU2NvcGUuZGVsZXRlKHJvdy5lbnRpdHkuaWQpXCI+5Yig6ZmkPC9hPic7XHJcblxyXG4gICAgJHNjb3BlLmdyaWRPcHRpb25zID0ge1xyXG4gICAgICAgIGVuYWJsZUZpbHRlcmluZzogZmFsc2UsXHJcbiAgICAgICAgb25SZWdpc3RlckFwaTogZnVuY3Rpb24gKGdyaWRBcGkpIHtcclxuICAgICAgICAgICAgJHNjb3BlLmdyaWRBcGkgPSBncmlkQXBpO1xyXG4gICAgICAgICAgICAkc2NvcGUuZ3JpZEFwaS5ncmlkLnJlZ2lzdGVyUm93c1Byb2Nlc3Nvcigkc2NvcGUuZmlsdGVyLCAyMDApO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29sdW1uRGVmczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogJ2lkJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAnSWQnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiAnbmFtZScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogJ05hbWUnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdlZGl0JyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAnRWRpdCcsXHJcbiAgICAgICAgICAgICAgICBjZWxsVGVtcGxhdGU6IGVkaXRVcmxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgIH07XHJcblxyXG4gICAgZGF0YVNlcnZpY2UuZ2V0bGFiaXRlbUxpc3QoKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAkc2NvcGUuZ3JpZE9wdGlvbnMuZGF0YSA9IHJlc3VsdC5kYXRhO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJHNjb3BlLnNlYXJjaCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkc2NvcGUuZ3JpZEFwaS5ncmlkLnJlZnJlc2goKTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmNyZWF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkc3RhdGUuZ28obGluayk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5kZWxldGUgPSBmdW5jdGlvbiAoaWQpIHtcclxuICAgICAgICBkYXRhU2VydmljZS5kZWxldGVQYXRpZW50KGlkKTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmZpbHRlcj1mdW5jdGlvbihyZW5kZXJhYmxlUm93cyl7XHJcbiAgICAgICAgdmFyIG1hdGNoZXIgPSBuZXcgUmVnRXhwKCRzY29wZS5maWx0ZXJWYWx1ZSk7XHJcbiAgICAgICAgcmVuZGVyYWJsZVJvd3MuZm9yRWFjaCggZnVuY3Rpb24oIHJvdyApIHtcclxuICAgICAgICAgIHZhciBtYXRjaCA9IGZhbHNlO1xyXG4gICAgICAgICAgWyAnbmFtZScgXS5mb3JFYWNoKGZ1bmN0aW9uKCBmaWVsZCApe1xyXG4gICAgICAgICAgICBpZiAoIHJvdy5lbnRpdHlbZmllbGRdLm1hdGNoKG1hdGNoZXIpICl7XHJcbiAgICAgICAgICAgICAgbWF0Y2ggPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGlmICggIW1hdGNoICl7XHJcbiAgICAgICAgICAgIHJvdy52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHJlbmRlcmFibGVSb3dzO1xyXG4gICAgfTtcclxufV0pO1xyXG5cclxuYXBwLmNvbnRyb2xsZXIoJ1BhdGllbnREZXRhaWxDdHJsJywgWyckc2NvcGUnLCAnJHN0YXRlJywgJyRzdGF0ZVBhcmFtcycsICdkYXRhU2VydmljZScsIGZ1bmN0aW9uICgkc2NvcGUsICRzdGF0ZSwgJHN0YXRlUGFyYW1zLCBkYXRhU2VydmljZSkge1xyXG4gICAgLy9jb25zb2xlLmxvZygkc3RhdGVQYXJhbXMpO1xyXG4gICAgJHNjb3BlLm1vZGVsID0ge1xyXG4gICAgICAgIHNlbGVjdGVkU2V4OiBudWxsLFxyXG4gICAgICAgIGJpcnRoRGF0ZTogbmV3IERhdGUoKVxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuZGF0ZU9wdGlvbnMgPSB7XHJcbiAgICAgICAgZm9ybWF0WWVhcjogJ3l5JyxcclxuICAgICAgICBzdGFydGluZ0RheTogMSxcclxuICAgICAgICBjbGFzczogJ2RhdGVwaWNrZXInXHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5vcGVuRGF0ZSA9IGZ1bmN0aW9uKCRldmVudCkge1xyXG4gICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICBcclxuICAgICAgICAkc2NvcGUub3BlbmVkID0gdHJ1ZTtcclxuICAgIH07XHJcblxyXG4gICAgZGF0YVNlcnZpY2UuZ2V0U2V4TGlzdCgpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICRzY29wZS5zZXhMaXN0ID0gcmVzdWx0LmRhdGE7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkc2NvcGUuc3VibWl0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCRzY29wZS5tb2RlbCk7XHJcbiAgICB9O1xyXG5cclxufV0pOyIsImFwcC5jb250cm9sbGVyKCdRY3ZhbHVlTGlzdEN0cmwnLCBbJyRzY29wZScsICckc3RhdGUnLCAnZGF0YVNlcnZpY2UnLCBmdW5jdGlvbiAoJHNjb3BlLCAkc3RhdGUsIGRhdGFTZXJ2aWNlKSB7XHJcblxyXG4gICAgdmFyIGxpbmsgPSAnYXBwLnFjdmFsdWVfZGV0YWlsJztcclxuICAgIHZhciBlZGl0VXJsID0gJzxhIGNsYXNzPVwiZWRpdC10cGxcIiB1aS1zcmVmPVwiJyArIGxpbmsgKyAnKHtpZDogcm93LmVudGl0eS5pZH0pXCI+57yW6L6RPC9hPic7XHJcbiAgICBlZGl0VXJsKz0nPGEgY2xhc3M9XCJkZWxldGUtdHBsXCIgbmctY2xpY2s9XCJncmlkLmFwcFNjb3BlLmRlbGV0ZShyb3cuZW50aXR5LmlkKVwiPuWIoOmZpDwvYT4nO1xyXG5cclxuICAgICRzY29wZS5ncmlkT3B0aW9ucyA9IHtcclxuICAgICAgICBlbmFibGVGaWx0ZXJpbmc6IGZhbHNlLFxyXG4gICAgICAgIG9uUmVnaXN0ZXJBcGk6IGZ1bmN0aW9uIChncmlkQXBpKSB7XHJcbiAgICAgICAgICAgICRzY29wZS5ncmlkQXBpID0gZ3JpZEFwaTtcclxuICAgICAgICAgICAgJHNjb3BlLmdyaWRBcGkuZ3JpZC5yZWdpc3RlclJvd3NQcm9jZXNzb3IoJHNjb3BlLmZpbHRlciwgMjAwKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbHVtbkRlZnM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQ6ICdpZCcsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogJ0lkJyxcclxuICAgICAgICAgICAgICAgIHZpc2libGU6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiAnbWlOYW1lJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAn5Yy76Zmi5ZCN56ewJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogJ2luc3RydW1lbnROYW1lJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAn5Luq5Zmo5ZCN56ewJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogJ2luc3RydW1lbnROYW1lJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAn6LSo5o6n6aG555uuJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogJ3ZhbHVlJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAn6LSo5o6n5YC8J1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogJ3FjVGltZScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogJ+i0qOaOp+aXtumXtCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQ6ICdxY2VyJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAn6LSo5o6n5Lq65ZGYJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnZWRpdCcsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogJ+aTjeS9nCcsXHJcbiAgICAgICAgICAgICAgICBjZWxsVGVtcGxhdGU6IGVkaXRVcmxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgIH07XHJcblxyXG4gICAgZGF0YVNlcnZpY2UuZ2V0UUNWYWx1ZUxpc3QoKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAkc2NvcGUuZ3JpZE9wdGlvbnMuZGF0YSA9IHJlc3VsdC5kYXRhO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJHNjb3BlLnNlYXJjaCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkc2NvcGUuZ3JpZEFwaS5ncmlkLnJlZnJlc2goKTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmNyZWF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkc3RhdGUuZ28obGluayk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5kZWxldGUgPSBmdW5jdGlvbiAoaWQpIHtcclxuICAgICAgICBkYXRhU2VydmljZS5kZWxldGVRQ1ZhbHVlKGlkKTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmZpbHRlciA9IGZ1bmN0aW9uIChyZW5kZXJhYmxlUm93cykge1xyXG4gICAgICAgIHZhciBtYXRjaGVyID0gbmV3IFJlZ0V4cCgkc2NvcGUuZmlsdGVyVmFsdWUpO1xyXG4gICAgICAgIHJlbmRlcmFibGVSb3dzLmZvckVhY2goZnVuY3Rpb24gKHJvdykge1xyXG4gICAgICAgICAgICB2YXIgbWF0Y2ggPSBmYWxzZTtcclxuICAgICAgICAgICAgWydpbnN0cnVtZW50TmFtZSddLmZvckVhY2goZnVuY3Rpb24gKGZpZWxkKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocm93LmVudGl0eVtmaWVsZF0ubWF0Y2gobWF0Y2hlcikpIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXRjaCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAoIW1hdGNoKSB7XHJcbiAgICAgICAgICAgICAgICByb3cudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHJlbmRlcmFibGVSb3dzO1xyXG4gICAgfTtcclxufV0pO1xyXG5cclxuYXBwLmNvbnRyb2xsZXIoJ1FjdmFsdWVEZXRhaWxDdHJsJywgWyckc2NvcGUnLCAnJHN0YXRlJywgJyRzdGF0ZVBhcmFtcycsICdkYXRhU2VydmljZScsIGZ1bmN0aW9uICgkc2NvcGUsICRzdGF0ZSwgJHN0YXRlUGFyYW1zLCBkYXRhU2VydmljZSkge1xyXG5cclxuICAgICRzY29wZS5tb2RlbCA9IHtcclxuICAgICAgICBpZDogbnVsbCxcclxuICAgICAgICBsbUlkOiBudWxsLFxyXG4gICAgICAgIG1pSWQ6IG51bGwsXHJcbiAgICAgICAgaW5zdHJ1bWVudElkOiBudWxsLFxyXG4gICAgICAgIGluc3RydW1lbnROYW1lOiBudWxsLFxyXG4gICAgICAgIHFjZXI6IG51bGwsXHJcbiAgICAgICAgcWNUaW1lOiBudWxsLFxyXG4gICAgICAgIHFjTnVtOiBudWxsLFxyXG4gICAgICAgIHZhbHVlOiBudWxsLFxyXG4gICAgICAgIGNvbW1lbnQ6IG51bGwsXHJcbiAgICAgICAgb3RoZXIxOiBudWxsLFxyXG4gICAgICAgIG90aGVyMjogbnVsbCxcclxuICAgICAgICBvdGhlcjM6IG51bGwsXHJcbiAgICAgICAgb3RoZXI0OiBudWxsLFxyXG4gICAgICAgIG90aGVyNTogbnVsbCxcclxuICAgICAgICBvdGhlcjY6IG51bGxcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmxhYkl0ZW1MaXN0PW51bGw7XHJcbiAgICAkc2NvcGUuc2VsZWN0ZWRMYWJJdGVtPW51bGw7XHJcbiAgICAkc2NvcGUuc2l0ZUxpc3Q9bnVsbDtcclxuICAgICRzY29wZS5zZWxlY3RlZFNpdGU9bnVsbDtcclxuXHJcblxyXG4gICAgZGF0YVNlcnZpY2UuZ2V0bGFiaXRlbUxpc3QoKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAkc2NvcGUubGFiSXRlbUxpc3QgPSByZXN1bHQuZGF0YTtcclxuICAgIH0pO1xyXG5cclxuICAgIGRhdGFTZXJ2aWNlLmdldFNpdGVMaXN0KCkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgJHNjb3BlLnNpdGVMaXN0ID0gcmVzdWx0LmRhdGE7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkc2NvcGUuc3VibWl0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCRzY29wZS5tb2RlbCk7XHJcbiAgICAgICAgZGF0YVNlcnZpY2Uuc2F2ZVFDVmFsdWUoJHNjb3BlLm1vZGVsKS50aGVuKCk7XHJcbiAgICB9O1xyXG5cclxufV0pOyIsImFwcC5jb250cm9sbGVyKCdSZXF1ZXN0TGlzdEN0cmwnLCBbJyRzY29wZScsICckbW9kYWwnLCAnJHN0YXRlJywgJ2RhdGFTZXJ2aWNlJywgZnVuY3Rpb24gKCRzY29wZSwgJG1vZGFsLCAkc3RhdGUsIGRhdGFTZXJ2aWNlKSB7XHJcbiAgICAkc2NvcGUubW9kZWwgPSB7XHJcbiAgICAgICAgZmlsdGVyVmFsdWU6IG51bGwsXHJcbiAgICAgICAgc3RhcnRUaW1lOiBudWxsLFxyXG4gICAgICAgIGVuZFRpbWU6IG51bGwsXHJcbiAgICAgICAgc3RhcnRPcGVuZWQ6IGZhbHNlLFxyXG4gICAgICAgIGVuZE9wZW5lZDogZmFsc2VcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmRhdGVPcHRpb25zID0ge1xyXG4gICAgICAgIGZvcm1hdFllYXI6ICd5eScsXHJcbiAgICAgICAgc3RhcnRpbmdEYXk6IDEsXHJcbiAgICAgICAgY2xhc3M6ICdkYXRlcGlja2VyJ1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuc3RhcnRPcGVuID0gZnVuY3Rpb24gKCRldmVudCkge1xyXG4gICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAkc2NvcGUubW9kZWwuc3RhcnRPcGVuZWQgPSB0cnVlO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuZW5kT3BlbiA9IGZ1bmN0aW9uICgkZXZlbnQpIHtcclxuICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgJHNjb3BlLm1vZGVsLmVuZE9wZW5lZCA9IHRydWU7XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciB0cGwgPSAnPGRpdj48YnV0dG9uIGNsYXNzPVwiYnRuIGdyaWQtYnRuIGJ0bi1zdWNjZXNzXCIgbmctY2xpY2s9XCJncmlkLmFwcFNjb3BlLmFjY2VwdChyb3cuZW50aXR5KVwiPuaOpeWPlzwvYnV0dG9uPjxidXR0b24gY2xhc3M9XCJidG4gZ3JpZC1idG4gbGVmdC1zcGFjZSBidG4tZGFuZ2VyXCIgbmctY2xpY2s9XCJncmlkLmFwcFNjb3BlLnJlamVjdChyb3cuZW50aXR5KVwiPuaLkue7nTwvYnV0dG9uPjwvZGl2Pic7XHJcbiAgICB2YXIgb3RoZXJUcGwgPSAnPGEgY2xhc3M9XCJlZGl0LXRwbFwiIHVpLXNyZWY9XCJhcHAucmVxdWVzdF9kZXRhaWwoe2lkOiByb3cuZW50aXR5LmlkfSlcIj7or6bmg4U8L2E+JztcclxuICAgICRzY29wZS5ncmlkT3B0aW9ucyA9IHtcclxuICAgICAgICBlbmFibGVGaWx0ZXJpbmc6IGZhbHNlLFxyXG4gICAgICAgIG9uUmVnaXN0ZXJBcGk6IGZ1bmN0aW9uIChncmlkQXBpKSB7XHJcbiAgICAgICAgICAgICRzY29wZS5ncmlkQXBpID0gZ3JpZEFwaTtcclxuICAgICAgICAgICAgJHNjb3BlLmdyaWRBcGkuZ3JpZC5yZWdpc3RlclJvd3NQcm9jZXNzb3IoJHNjb3BlLmZpbHRlciwgMjAwKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbHVtbkRlZnM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQ6ICdpZCcsXHJcbiAgICAgICAgICAgICAgICB2aXNpYmxlOiBmYWxzZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogJ3JlcXVlc3RObycsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogJ+eUs+ivt+WNleWPtydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQ6ICdlbXBOYW1lJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAn55Sz6K+35ZGY5belJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogJ3JlcVRpbWUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICfnlLPor7fml7bpl7QnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiAncmVTdGF0dXMnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICfnlLPor7fljZXnirbmgIEnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdlZGl0JyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAn5pON5L2cJyxcclxuICAgICAgICAgICAgICAgIGNlbGxUZW1wbGF0ZTogdHBsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdvdGhlcicsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogJ+WFtuS7licsXHJcbiAgICAgICAgICAgICAgICBjZWxsVGVtcGxhdGU6IG90aGVyVHBsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICB9O1xyXG5cclxuICAgIGRhdGFTZXJ2aWNlLmdldFJlcXVlc3RMaXN0KCkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgJHNjb3BlLmdyaWRPcHRpb25zLmRhdGEgPSByZXN1bHQuZGF0YTtcclxuICAgIH0pO1xyXG5cclxuICAgICRzY29wZS5zZWFyY2ggPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJHNjb3BlLmdyaWRBcGkuZ3JpZC5yZWZyZXNoKCk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5maWx0ZXIgPSBmdW5jdGlvbiAocmVuZGVyYWJsZVJvd3MpIHtcclxuICAgICAgICB2YXIgbWF0Y2hlciA9IG5ldyBSZWdFeHAoJHNjb3BlLmZpbHRlclZhbHVlKTtcclxuICAgICAgICByZW5kZXJhYmxlUm93cy5mb3JFYWNoKGZ1bmN0aW9uIChyb3cpIHtcclxuICAgICAgICAgICAgdmFyIG1hdGNoID0gZmFsc2U7XHJcbiAgICAgICAgICAgIFsncmVxdWVzdE5vJ10uZm9yRWFjaChmdW5jdGlvbiAoZmllbGQpIHtcclxuICAgICAgICAgICAgICAgIGlmIChyb3cuZW50aXR5W2ZpZWxkXS5tYXRjaChtYXRjaGVyKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hdGNoID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmICghbWF0Y2gpIHtcclxuICAgICAgICAgICAgICAgIHJvdy52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcmVuZGVyYWJsZVJvd3M7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5hY2NlcHQgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUucmVqZWN0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICRzY29wZS5tb2RhbEluc3RhbmNlID0gJG1vZGFsLm9wZW4oe1xyXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4uL3RwbC9kaWFsb2cvcmVqZWN0X2RpYWxvZy5odG1sJyxcclxuICAgICAgICAgICAgY29udHJvbGxlcjogJ1JlamVjdERpYWxvZ0N0cmwnLFxyXG4gICAgICAgICAgICBzaXplOiAnbGcnXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuXHJcbn1dKTtcclxuXHJcblxyXG5hcHAuY29udHJvbGxlcignUmVqZWN0RGlhbG9nQ3RybCcsIFsnJHNjb3BlJywgJyRtb2RhbEluc3RhbmNlJywgJ2RhdGFTZXJ2aWNlJywgZnVuY3Rpb24gKCRzY29wZSwgJG1vZGFsSW5zdGFuY2UsIGRhdGFTZXJ2aWNlKSB7XHJcbiAgICAkc2NvcGUucmVqZWN0UmVhc29uID0gbnVsbDtcclxuXHJcbiAgICAkc2NvcGUuZGlhbG9nU3VibWl0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICRtb2RhbEluc3RhbmNlLmNsb3NlKCk7XHJcbiAgICB9O1xyXG59XSk7XHJcblxyXG5hcHAuY29udHJvbGxlcignUmVxdWVzdERldGFpbEN0cmwnLCBbJyRzY29wZScsICckc3RhdGUnLCAnJHN0YXRlUGFyYW1zJywgJ2RhdGFTZXJ2aWNlJywgZnVuY3Rpb24gKCRzY29wZSwgJHN0YXRlLCAkc3RhdGVQYXJhbXMsIGRhdGFTZXJ2aWNlKSB7XHJcblxyXG59XSk7IiwiYXBwLmNvbnRyb2xsZXIoJ1NhbXBsZVR5cGVMaXN0Q3RybCcsIFsnJHNjb3BlJywgJyRzdGF0ZScsICdkYXRhU2VydmljZScsIGZ1bmN0aW9uICgkc2NvcGUsICRzdGF0ZSwgZGF0YVNlcnZpY2UpIHtcclxuXHJcbiAgICB2YXIgbGluaz0nYXBwLnNhbXBsZXR5cGVfZGV0YWlsJztcclxuICAgIHZhciBlZGl0VXJsID0gJzxhIGNsYXNzPVwiZWRpdC10cGxcIiB1aS1zcmVmPVwiJytsaW5rKycoe2lkOiByb3cuZW50aXR5LmlkfSlcIj7nvJbovpE8L2E+JztcclxuICAgIGVkaXRVcmwrPSc8YSBjbGFzcz1cImRlbGV0ZS10cGxcIiBuZy1jbGljaz1cImdyaWQuYXBwU2NvcGUuZGVsZXRlKHJvdy5lbnRpdHkuaWQpXCI+5Yig6ZmkPC9hPic7XHJcbiAgICBcclxuICAgICRzY29wZS5ncmlkT3B0aW9ucyA9IHtcclxuICAgICAgICBlbmFibGVGaWx0ZXJpbmc6IGZhbHNlLFxyXG4gICAgICAgIG9uUmVnaXN0ZXJBcGk6IGZ1bmN0aW9uIChncmlkQXBpKSB7XHJcbiAgICAgICAgICAgICRzY29wZS5ncmlkQXBpID0gZ3JpZEFwaTtcclxuICAgICAgICAgICAgJHNjb3BlLmdyaWRBcGkuZ3JpZC5yZWdpc3RlclJvd3NQcm9jZXNzb3IoJHNjb3BlLmZpbHRlciwgMjAwKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbHVtbkRlZnM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQ6ICdpZCcsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogJ0lkJyxcclxuICAgICAgICAgICAgICAgIHZpc2libGU6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiAnY29kZScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogJ+e8lueggSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQ6ICdjaHROYW1lJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAn5Lit5paH5ZCN56ewJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogJ2VuZ05hbWUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICfoi7HmloflkI3np7AnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiAnc2VxTm8nLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICfmjpLluo/lj7cnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdlZGl0JyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAn5pON5L2cJyxcclxuICAgICAgICAgICAgICAgIGNlbGxUZW1wbGF0ZTogZWRpdFVybFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgfTtcclxuXHJcbiAgICBkYXRhU2VydmljZS5nZXRTYW1wbGVUeXBlTGlzdCgpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICRzY29wZS5ncmlkT3B0aW9ucy5kYXRhID0gcmVzdWx0LmRhdGE7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkc2NvcGUuc2VhcmNoID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICRzY29wZS5ncmlkQXBpLmdyaWQucmVmcmVzaCgpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuY3JlYXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICRzdGF0ZS5nbyhsaW5rKTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmRlbGV0ZSA9IGZ1bmN0aW9uIChpZCkge1xyXG4gICAgICAgIGRhdGFTZXJ2aWNlLmRlbGV0ZVNhbXBsZVR5cGUoaWQpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuZmlsdGVyPWZ1bmN0aW9uKHJlbmRlcmFibGVSb3dzKXtcclxuICAgICAgICB2YXIgbWF0Y2hlciA9IG5ldyBSZWdFeHAoJHNjb3BlLmZpbHRlclZhbHVlKTtcclxuICAgICAgICByZW5kZXJhYmxlUm93cy5mb3JFYWNoKCBmdW5jdGlvbiggcm93ICkge1xyXG4gICAgICAgICAgdmFyIG1hdGNoID0gZmFsc2U7XHJcbiAgICAgICAgICBbICdjb2RlJyBdLmZvckVhY2goZnVuY3Rpb24oIGZpZWxkICl7XHJcbiAgICAgICAgICAgIGlmICggcm93LmVudGl0eVtmaWVsZF0ubWF0Y2gobWF0Y2hlcikgKXtcclxuICAgICAgICAgICAgICBtYXRjaCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgaWYgKCAhbWF0Y2ggKXtcclxuICAgICAgICAgICAgcm93LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcmVuZGVyYWJsZVJvd3M7XHJcbiAgICB9O1xyXG59XSk7XHJcblxyXG5hcHAuY29udHJvbGxlcignU2FtcGxlVHlwZURldGFpbEN0cmwnLCBbJyRzY29wZScsICckc3RhdGUnLCAnJHN0YXRlUGFyYW1zJywgJ2RhdGFTZXJ2aWNlJywgZnVuY3Rpb24gKCRzY29wZSwgJHN0YXRlLCAkc3RhdGVQYXJhbXMsIGRhdGFTZXJ2aWNlKSB7XHJcblxyXG4gICAgaWYoJHN0YXRlUGFyYW1zLmlkKXtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgJHNjb3BlLm1vZGVsID0ge1xyXG4gICAgICAgIGlkOm51bGwsXHJcbiAgICAgICAgcGFyZW50SWQ6bnVsbCxcclxuICAgICAgICBjb2RlOm51bGwsXHJcbiAgICAgICAgY2h0TmFtZTpudWxsLFxyXG4gICAgICAgIGVuZ05hbWU6bnVsbCxcclxuICAgICAgICBzZXFObzpudWxsLFxyXG4gICAgICAgIGhlbHBDb2RlOm51bGxcclxuICAgIH07XHJcblxyXG5cclxuICAgICRzY29wZS5zdWJtaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJHNjb3BlLm1vZGVsKTtcclxuICAgICAgICBkYXRhU2VydmljZS5zYXZlU2FtcGxlVHlwZSgkc2NvcGUubW9kZWwpLnRoZW4oKTtcclxuICAgIH07XHJcblxyXG59XSk7IiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbiAgLmRpcmVjdGl2ZSgnc2V0TmdBbmltYXRlJywgWyckYW5pbWF0ZScsIGZ1bmN0aW9uICgkYW5pbWF0ZSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBsaW5rOiBmdW5jdGlvbiAoJHNjb3BlLCAkZWxlbWVudCwgJGF0dHJzKSB7XHJcbiAgICAgICAgICAgICRzY29wZS4kd2F0Y2goIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICRzY29wZS4kZXZhbCgkYXR0cnMuc2V0TmdBbmltYXRlLCAkc2NvcGUpO1xyXG4gICAgICAgICAgICB9LCBmdW5jdGlvbih2YWxuZXcsIHZhbG9sZCl7XHJcbiAgICAgICAgICAgICAgICAkYW5pbWF0ZS5lbmFibGVkKCEhdmFsbmV3LCAkZWxlbWVudCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgfV0pOyIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4gIC5kaXJlY3RpdmUoJ3VpQnV0dGVyYmFyJywgWyckcm9vdFNjb3BlJywgJyRhbmNob3JTY3JvbGwnLCBmdW5jdGlvbigkcm9vdFNjb3BlLCAkYW5jaG9yU2Nyb2xsKSB7XHJcbiAgICAgcmV0dXJuIHtcclxuICAgICAgcmVzdHJpY3Q6ICdBQycsXHJcbiAgICAgIHRlbXBsYXRlOic8c3BhbiBjbGFzcz1cImJhclwiPjwvc3Bhbj4nLFxyXG4gICAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWwsIGF0dHJzKSB7ICAgICAgICBcclxuICAgICAgICBlbC5hZGRDbGFzcygnYnV0dGVyYmFyIGhpZGUnKTtcclxuICAgICAgICBzY29wZS4kb24oJyRzdGF0ZUNoYW5nZVN0YXJ0JywgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICAgICRhbmNob3JTY3JvbGwoKTtcclxuICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdoaWRlJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNjb3BlLiRvbignJHN0YXRlQ2hhbmdlU3VjY2VzcycsIGZ1bmN0aW9uKCBldmVudCwgdG9TdGF0ZSwgdG9QYXJhbXMsIGZyb21TdGF0ZSApIHtcclxuICAgICAgICAgIGV2ZW50LnRhcmdldFNjb3BlLiR3YXRjaCgnJHZpZXdDb250ZW50TG9hZGVkJywgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgZWwuYWRkQ2xhc3MoJ2hpZGUnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgfTtcclxuICB9XSk7IiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbiAgLmRpcmVjdGl2ZSgndWlGb2N1cycsIGZ1bmN0aW9uKCR0aW1lb3V0LCAkcGFyc2UpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbGVtZW50LCBhdHRyKSB7XHJcbiAgICAgICAgdmFyIG1vZGVsID0gJHBhcnNlKGF0dHIudWlGb2N1cyk7XHJcbiAgICAgICAgJHRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICBlbGVtZW50WzBdLmZvY3VzKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2NvcGUuJHdhdGNoKG1vZGVsLCBmdW5jdGlvbih2YWx1ZSkge1xyXG4gICAgICAgICAgaWYodmFsdWUpIHtcclxuICAgICAgICAgICAgJHRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgZWxlbWVudFswXS5mb2N1cygpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBlbGVtZW50LmJpbmQoJ2JsdXInLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAvL3Njb3BlLiRhcHBseShtb2RlbC5hc3NpZ24oc2NvcGUsIGZhbHNlKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfSk7IiwiIGFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4gIC5kaXJlY3RpdmUoJ3VpRnVsbHNjcmVlbicsIFsndWlMb2FkJywgJyRkb2N1bWVudCcsICckd2luZG93JywgZnVuY3Rpb24odWlMb2FkLCAkZG9jdW1lbnQsICR3aW5kb3cpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHJlc3RyaWN0OiAnQUMnLFxyXG4gICAgICB0ZW1wbGF0ZTonPGkgY2xhc3M9XCJmYSBmYS1leHBhbmQgZmEtZncgdGV4dFwiPjwvaT48aSBjbGFzcz1cImZhIGZhLWNvbXByZXNzIGZhLWZ3IHRleHQtYWN0aXZlXCI+PC9pPicsXHJcbiAgICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbCwgYXR0cikge1xyXG4gICAgICAgIGVsLmFkZENsYXNzKCdoaWRlJyk7XHJcbiAgICAgICAgdWlMb2FkLmxvYWQoJ3ZlbmRvci9saWJzL3NjcmVlbmZ1bGwubWluLmpzJykudGhlbihmdW5jdGlvbigpe1xyXG4gICAgICAgICAgLy8gZGlzYWJsZSBvbiBpZTExXHJcbiAgICAgICAgICBpZiAoc2NyZWVuZnVsbC5lbmFibGVkICYmICFuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9UcmlkZW50LipydjoxMVxcLi8pKSB7XHJcbiAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdoaWRlJyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlbC5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICB2YXIgdGFyZ2V0O1xyXG4gICAgICAgICAgICBhdHRyLnRhcmdldCAmJiAoIHRhcmdldCA9ICQoYXR0ci50YXJnZXQpWzBdICk7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHNjcmVlbmZ1bGwudG9nZ2xlKHRhcmdldCk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgICRkb2N1bWVudC5vbihzY3JlZW5mdWxsLnJhdy5mdWxsc2NyZWVuY2hhbmdlLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmKHNjcmVlbmZ1bGwuaXNGdWxsc2NyZWVuKXtcclxuICAgICAgICAgICAgICBlbC5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfV0pOyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbi8qKlxyXG4gKiAwLjEuMVxyXG4gKiBHZW5lcmFsLXB1cnBvc2UgalF1ZXJ5IHdyYXBwZXIuIFNpbXBseSBwYXNzIHRoZSBwbHVnaW4gbmFtZSBhcyB0aGUgZXhwcmVzc2lvbi5cclxuICpcclxuICogSXQgaXMgcG9zc2libGUgdG8gc3BlY2lmeSBhIGRlZmF1bHQgc2V0IG9mIHBhcmFtZXRlcnMgZm9yIGVhY2ggalF1ZXJ5IHBsdWdpbi5cclxuICogVW5kZXIgdGhlIGpxIGtleSwgbmFtZXNwYWNlIGVhY2ggcGx1Z2luIGJ5IHRoYXQgd2hpY2ggd2lsbCBiZSBwYXNzZWQgdG8gdWktanEuXHJcbiAqIFVuZm9ydHVuYXRlbHksIGF0IHRoaXMgdGltZSB5b3UgY2FuIG9ubHkgcHJlLWRlZmluZSB0aGUgZmlyc3QgcGFyYW1ldGVyLlxyXG4gKiBAZXhhbXBsZSB7IGpxIDogeyBkYXRlcGlja2VyIDogeyBzaG93T246J2NsaWNrJyB9IH0gfVxyXG4gKlxyXG4gKiBAcGFyYW0gdWktanEge3N0cmluZ30gVGhlICRlbG0uW3BsdWdpbk5hbWVdKCkgdG8gY2FsbC5cclxuICogQHBhcmFtIFt1aS1vcHRpb25zXSB7bWl4ZWR9IEV4cHJlc3Npb24gdG8gYmUgZXZhbHVhdGVkIGFuZCBwYXNzZWQgYXMgb3B0aW9ucyB0byB0aGUgZnVuY3Rpb25cclxuICogICAgIE11bHRpcGxlIHBhcmFtZXRlcnMgY2FuIGJlIHNlcGFyYXRlZCBieSBjb21tYXNcclxuICogQHBhcmFtIFt1aS1yZWZyZXNoXSB7ZXhwcmVzc2lvbn0gV2F0Y2ggZXhwcmVzc2lvbiBhbmQgcmVmaXJlIHBsdWdpbiBvbiBjaGFuZ2VzXHJcbiAqXHJcbiAqIEBleGFtcGxlIDxpbnB1dCB1aS1qcT1cImRhdGVwaWNrZXJcIiB1aS1vcHRpb25zPVwie3Nob3dPbjonY2xpY2snfSxzZWNvbmRQYXJhbWV0ZXIsdGhpcmRQYXJhbWV0ZXJcIiB1aS1yZWZyZXNoPVwiaUNoYW5nZVwiPlxyXG4gKi9cclxuYW5ndWxhci5tb2R1bGUoJ3VpLmpxJywgWyd1aS5sb2FkJ10pLlxyXG4gIHZhbHVlKCd1aUpxQ29uZmlnJywge30pLlxyXG4gIGRpcmVjdGl2ZSgndWlKcScsIFsndWlKcUNvbmZpZycsICdKUV9DT05GSUcnLCAndWlMb2FkJywgJyR0aW1lb3V0JywgZnVuY3Rpb24gdWlKcUluamVjdGluZ0Z1bmN0aW9uKHVpSnFDb25maWcsIEpRX0NPTkZJRywgdWlMb2FkLCAkdGltZW91dCkge1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcmVzdHJpY3Q6ICdBJyxcclxuICAgIGNvbXBpbGU6IGZ1bmN0aW9uIHVpSnFDb21waWxpbmdGdW5jdGlvbih0RWxtLCB0QXR0cnMpIHtcclxuXHJcbiAgICAgIGlmICghYW5ndWxhci5pc0Z1bmN0aW9uKHRFbG1bdEF0dHJzLnVpSnFdKSAmJiAhSlFfQ09ORklHW3RBdHRycy51aUpxXSkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcigndWktanE6IFRoZSBcIicgKyB0QXR0cnMudWlKcSArICdcIiBmdW5jdGlvbiBkb2VzIG5vdCBleGlzdCcpO1xyXG4gICAgICB9XHJcbiAgICAgIHZhciBvcHRpb25zID0gdWlKcUNvbmZpZyAmJiB1aUpxQ29uZmlnW3RBdHRycy51aUpxXTtcclxuXHJcbiAgICAgIHJldHVybiBmdW5jdGlvbiB1aUpxTGlua2luZ0Z1bmN0aW9uKHNjb3BlLCBlbG0sIGF0dHJzKSB7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGdldE9wdGlvbnMoKXtcclxuICAgICAgICAgIHZhciBsaW5rT3B0aW9ucyA9IFtdO1xyXG5cclxuICAgICAgICAgIC8vIElmIHVpLW9wdGlvbnMgYXJlIHBhc3NlZCwgbWVyZ2UgKG9yIG92ZXJyaWRlKSB0aGVtIG9udG8gZ2xvYmFsIGRlZmF1bHRzIGFuZCBwYXNzIHRvIHRoZSBqUXVlcnkgbWV0aG9kXHJcbiAgICAgICAgICBpZiAoYXR0cnMudWlPcHRpb25zKSB7XHJcbiAgICAgICAgICAgIGxpbmtPcHRpb25zID0gc2NvcGUuJGV2YWwoJ1snICsgYXR0cnMudWlPcHRpb25zICsgJ10nKTtcclxuICAgICAgICAgICAgaWYgKGFuZ3VsYXIuaXNPYmplY3Qob3B0aW9ucykgJiYgYW5ndWxhci5pc09iamVjdChsaW5rT3B0aW9uc1swXSkpIHtcclxuICAgICAgICAgICAgICBsaW5rT3B0aW9uc1swXSA9IGFuZ3VsYXIuZXh0ZW5kKHt9LCBvcHRpb25zLCBsaW5rT3B0aW9uc1swXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gZWxzZSBpZiAob3B0aW9ucykge1xyXG4gICAgICAgICAgICBsaW5rT3B0aW9ucyA9IFtvcHRpb25zXTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiBsaW5rT3B0aW9ucztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIElmIGNoYW5nZSBjb21wYXRpYmlsaXR5IGlzIGVuYWJsZWQsIHRoZSBmb3JtIGlucHV0J3MgXCJjaGFuZ2VcIiBldmVudCB3aWxsIHRyaWdnZXIgYW4gXCJpbnB1dFwiIGV2ZW50XHJcbiAgICAgICAgaWYgKGF0dHJzLm5nTW9kZWwgJiYgZWxtLmlzKCdzZWxlY3QsaW5wdXQsdGV4dGFyZWEnKSkge1xyXG4gICAgICAgICAgZWxtLmJpbmQoJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBlbG0udHJpZ2dlcignaW5wdXQnKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQ2FsbCBqUXVlcnkgbWV0aG9kIGFuZCBwYXNzIHJlbGV2YW50IG9wdGlvbnNcclxuICAgICAgICBmdW5jdGlvbiBjYWxsUGx1Z2luKCkge1xyXG4gICAgICAgICAgJHRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGVsbVthdHRycy51aUpxXS5hcHBseShlbG0sIGdldE9wdGlvbnMoKSk7XHJcbiAgICAgICAgICB9LCAwLCBmYWxzZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiByZWZyZXNoKCl7XHJcbiAgICAgICAgICAvLyBJZiB1aS1yZWZyZXNoIGlzIHVzZWQsIHJlLWZpcmUgdGhlIHRoZSBtZXRob2QgdXBvbiBldmVyeSBjaGFuZ2VcclxuICAgICAgICAgIGlmIChhdHRycy51aVJlZnJlc2gpIHtcclxuICAgICAgICAgICAgc2NvcGUuJHdhdGNoKGF0dHJzLnVpUmVmcmVzaCwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgY2FsbFBsdWdpbigpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICggSlFfQ09ORklHW2F0dHJzLnVpSnFdICkge1xyXG4gICAgICAgICAgdWlMb2FkLmxvYWQoSlFfQ09ORklHW2F0dHJzLnVpSnFdKS50aGVuKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBjYWxsUGx1Z2luKCk7XHJcbiAgICAgICAgICAgIHJlZnJlc2goKTtcclxuICAgICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjYWxsUGx1Z2luKCk7XHJcbiAgICAgICAgICByZWZyZXNoKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gIH07XHJcbn1dKTsiLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuICAuZGlyZWN0aXZlKCd1aU1vZHVsZScsIFsnTU9EVUxFX0NPTkZJRycsJ3VpTG9hZCcsICckY29tcGlsZScsIGZ1bmN0aW9uKE1PRFVMRV9DT05GSUcsIHVpTG9hZCwgJGNvbXBpbGUpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHJlc3RyaWN0OiAnQScsXHJcbiAgICAgIGNvbXBpbGU6IGZ1bmN0aW9uIChlbCwgYXR0cnMpIHtcclxuICAgICAgICB2YXIgY29udGVudHMgPSBlbC5jb250ZW50cygpLmNsb25lKCk7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKHNjb3BlLCBlbCwgYXR0cnMpe1xyXG4gICAgICAgICAgZWwuY29udGVudHMoKS5yZW1vdmUoKTtcclxuICAgICAgICAgIHVpTG9hZC5sb2FkKE1PRFVMRV9DT05GSUdbYXR0cnMudWlNb2R1bGVdKVxyXG4gICAgICAgICAgLnRoZW4oZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgJGNvbXBpbGUoY29udGVudHMpKHNjb3BlLCBmdW5jdGlvbihjbG9uZWRFbGVtZW50LCBzY29wZSkge1xyXG4gICAgICAgICAgICAgIGVsLmFwcGVuZChjbG9uZWRFbGVtZW50KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfV0pOyIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4gIC5kaXJlY3RpdmUoJ3VpTmF2JywgWyckdGltZW91dCcsIGZ1bmN0aW9uKCR0aW1lb3V0KSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICByZXN0cmljdDogJ0FDJyxcclxuICAgICAgbGluazogZnVuY3Rpb24oc2NvcGUsIGVsLCBhdHRyKSB7XHJcbiAgICAgICAgdmFyIF93aW5kb3cgPSAkKHdpbmRvdyksIFxyXG4gICAgICAgIF9tYiA9IDc2OCwgXHJcbiAgICAgICAgd3JhcCA9ICQoJy5hcHAtYXNpZGUnKSwgXHJcbiAgICAgICAgbmV4dCwgXHJcbiAgICAgICAgYmFja2Ryb3AgPSAnLmRyb3Bkb3duLWJhY2tkcm9wJztcclxuICAgICAgICAvLyB1bmZvbGRlZFxyXG4gICAgICAgIGVsLm9uKCdjbGljaycsICdhJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgbmV4dCAmJiBuZXh0LnRyaWdnZXIoJ21vdXNlbGVhdmUubmF2Jyk7XHJcbiAgICAgICAgICB2YXIgX3RoaXMgPSAkKHRoaXMpO1xyXG4gICAgICAgICAgX3RoaXMucGFyZW50KCkuc2libGluZ3MoIFwiLmFjdGl2ZVwiICkudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgX3RoaXMubmV4dCgpLmlzKCd1bCcpICYmICBfdGhpcy5wYXJlbnQoKS50b2dnbGVDbGFzcygnYWN0aXZlJykgJiYgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgIC8vIG1vYmlsZVxyXG4gICAgICAgICAgX3RoaXMubmV4dCgpLmlzKCd1bCcpIHx8ICggKCBfd2luZG93LndpZHRoKCkgPCBfbWIgKSAmJiAkKCcuYXBwLWFzaWRlJykucmVtb3ZlQ2xhc3MoJ3Nob3cgb2ZmLXNjcmVlbicpICk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIGZvbGRlZCAmIGZpeGVkXHJcbiAgICAgICAgZWwub24oJ21vdXNlZW50ZXInLCAnYScsIGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgbmV4dCAmJiBuZXh0LnRyaWdnZXIoJ21vdXNlbGVhdmUubmF2Jyk7XHJcbiAgICAgICAgICAkKCc+IC5uYXYnLCB3cmFwKS5yZW1vdmUoKTtcclxuICAgICAgICAgIGlmICggISQoJy5hcHAtYXNpZGUtZml4ZWQuYXBwLWFzaWRlLWZvbGRlZCcpLmxlbmd0aCB8fCAoIF93aW5kb3cud2lkdGgoKSA8IF9tYiApIHx8ICQoJy5hcHAtYXNpZGUtZG9jaycpLmxlbmd0aCkgcmV0dXJuO1xyXG4gICAgICAgICAgdmFyIF90aGlzID0gJChlLnRhcmdldClcclxuICAgICAgICAgICwgdG9wXHJcbiAgICAgICAgICAsIHdfaCA9ICQod2luZG93KS5oZWlnaHQoKVxyXG4gICAgICAgICAgLCBvZmZzZXQgPSA1MFxyXG4gICAgICAgICAgLCBtaW4gPSAxNTA7XHJcblxyXG4gICAgICAgICAgIV90aGlzLmlzKCdhJykgJiYgKF90aGlzID0gX3RoaXMuY2xvc2VzdCgnYScpKTtcclxuICAgICAgICAgIGlmKCBfdGhpcy5uZXh0KCkuaXMoJ3VsJykgKXtcclxuICAgICAgICAgICAgIG5leHQgPSBfdGhpcy5uZXh0KCk7XHJcbiAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICBcclxuICAgICAgICAgIF90aGlzLnBhcmVudCgpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgIHRvcCA9IF90aGlzLnBhcmVudCgpLnBvc2l0aW9uKCkudG9wICsgb2Zmc2V0O1xyXG4gICAgICAgICAgbmV4dC5jc3MoJ3RvcCcsIHRvcCk7XHJcbiAgICAgICAgICBpZiggdG9wICsgbmV4dC5oZWlnaHQoKSA+IHdfaCApe1xyXG4gICAgICAgICAgICBuZXh0LmNzcygnYm90dG9tJywgMCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZih0b3AgKyBtaW4gPiB3X2gpe1xyXG4gICAgICAgICAgICBuZXh0LmNzcygnYm90dG9tJywgd19oIC0gdG9wIC0gb2Zmc2V0KS5jc3MoJ3RvcCcsICdhdXRvJyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBuZXh0LmFwcGVuZFRvKHdyYXApO1xyXG5cclxuICAgICAgICAgIG5leHQub24oJ21vdXNlbGVhdmUubmF2JywgZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgICAgICQoYmFja2Ryb3ApLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICBuZXh0LmFwcGVuZFRvKF90aGlzLnBhcmVudCgpKTtcclxuICAgICAgICAgICAgbmV4dC5vZmYoJ21vdXNlbGVhdmUubmF2JykuY3NzKCd0b3AnLCAnYXV0bycpLmNzcygnYm90dG9tJywgJ2F1dG8nKTtcclxuICAgICAgICAgICAgX3RoaXMucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgJCgnLnNtYXJ0JykubGVuZ3RoICYmICQoJzxkaXYgY2xhc3M9XCJkcm9wZG93bi1iYWNrZHJvcFwiLz4nKS5pbnNlcnRBZnRlcignLmFwcC1hc2lkZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKG5leHQpe1xyXG4gICAgICAgICAgICBuZXh0ICYmIG5leHQudHJpZ2dlcignbW91c2VsZWF2ZS5uYXYnKTtcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgd3JhcC5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgbmV4dCAmJiBuZXh0LnRyaWdnZXIoJ21vdXNlbGVhdmUubmF2Jyk7XHJcbiAgICAgICAgICAkKCc+IC5uYXYnLCB3cmFwKS5yZW1vdmUoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9XSk7IiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbiAgLmRpcmVjdGl2ZSgndWlTY3JvbGwnLCBbJyRsb2NhdGlvbicsICckYW5jaG9yU2Nyb2xsJywgZnVuY3Rpb24oJGxvY2F0aW9uLCAkYW5jaG9yU2Nyb2xsKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICByZXN0cmljdDogJ0FDJyxcclxuICAgICAgbGluazogZnVuY3Rpb24oc2NvcGUsIGVsLCBhdHRyKSB7XHJcbiAgICAgICAgZWwub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgJGxvY2F0aW9uLmhhc2goYXR0ci51aVNjcm9sbCk7XHJcbiAgICAgICAgICAkYW5jaG9yU2Nyb2xsKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfV0pOyIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4gIC5kaXJlY3RpdmUoJ3VpU2hpZnQnLCBbJyR0aW1lb3V0JywgZnVuY3Rpb24oJHRpbWVvdXQpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHJlc3RyaWN0OiAnQScsXHJcbiAgICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbCwgYXR0cikge1xyXG4gICAgICAgIC8vIGdldCB0aGUgJHByZXYgb3IgJHBhcmVudCBvZiB0aGlzIGVsXHJcbiAgICAgICAgdmFyIF9lbCA9ICQoZWwpLFxyXG4gICAgICAgICAgICBfd2luZG93ID0gJCh3aW5kb3cpLFxyXG4gICAgICAgICAgICBwcmV2ID0gX2VsLnByZXYoKSxcclxuICAgICAgICAgICAgcGFyZW50LFxyXG4gICAgICAgICAgICB3aWR0aCA9IF93aW5kb3cud2lkdGgoKVxyXG4gICAgICAgICAgICA7XHJcblxyXG4gICAgICAgICFwcmV2Lmxlbmd0aCAmJiAocGFyZW50ID0gX2VsLnBhcmVudCgpKTtcclxuICAgICAgICBcclxuICAgICAgICBmdW5jdGlvbiBzbSgpe1xyXG4gICAgICAgICAgJHRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgbWV0aG9kID0gYXR0ci51aVNoaWZ0O1xyXG4gICAgICAgICAgICB2YXIgdGFyZ2V0ID0gYXR0ci50YXJnZXQ7XHJcbiAgICAgICAgICAgIF9lbC5oYXNDbGFzcygnaW4nKSB8fCBfZWxbbWV0aG9kXSh0YXJnZXQpLmFkZENsYXNzKCdpbicpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGZ1bmN0aW9uIG1kKCl7XHJcbiAgICAgICAgICBwYXJlbnQgJiYgcGFyZW50WydwcmVwZW5kJ10oZWwpO1xyXG4gICAgICAgICAgIXBhcmVudCAmJiBfZWxbJ2luc2VydEFmdGVyJ10ocHJldik7XHJcbiAgICAgICAgICBfZWwucmVtb3ZlQ2xhc3MoJ2luJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAod2lkdGggPCA3NjggJiYgc20oKSkgfHwgbWQoKTtcclxuXHJcbiAgICAgICAgX3dpbmRvdy5yZXNpemUoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICBpZih3aWR0aCAhPT0gX3dpbmRvdy53aWR0aCgpKXtcclxuICAgICAgICAgICAgJHRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAoX3dpbmRvdy53aWR0aCgpIDwgNzY4ICYmIHNtKCkpIHx8IG1kKCk7XHJcbiAgICAgICAgICAgICAgd2lkdGggPSBfd2luZG93LndpZHRoKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH1dKTsiLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuICAuZGlyZWN0aXZlKCd1aVRvZ2dsZUNsYXNzJywgWyckdGltZW91dCcsICckZG9jdW1lbnQnLCBmdW5jdGlvbigkdGltZW91dCwgJGRvY3VtZW50KSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICByZXN0cmljdDogJ0FDJyxcclxuICAgICAgbGluazogZnVuY3Rpb24oc2NvcGUsIGVsLCBhdHRyKSB7XHJcbiAgICAgICAgZWwub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgdmFyIGNsYXNzZXMgPSBhdHRyLnVpVG9nZ2xlQ2xhc3Muc3BsaXQoJywnKSxcclxuICAgICAgICAgICAgICB0YXJnZXRzID0gKGF0dHIudGFyZ2V0ICYmIGF0dHIudGFyZ2V0LnNwbGl0KCcsJykpIHx8IEFycmF5KGVsKSxcclxuICAgICAgICAgICAgICBrZXkgPSAwO1xyXG4gICAgICAgICAgYW5ndWxhci5mb3JFYWNoKGNsYXNzZXMsIGZ1bmN0aW9uKCBfY2xhc3MgKSB7XHJcbiAgICAgICAgICAgIHZhciB0YXJnZXQgPSB0YXJnZXRzWyh0YXJnZXRzLmxlbmd0aCAmJiBrZXkpXTsgICAgICAgICAgICBcclxuICAgICAgICAgICAgKCBfY2xhc3MuaW5kZXhPZiggJyonICkgIT09IC0xICkgJiYgbWFnaWMoX2NsYXNzLCB0YXJnZXQpO1xyXG4gICAgICAgICAgICAkKCB0YXJnZXQgKS50b2dnbGVDbGFzcyhfY2xhc3MpO1xyXG4gICAgICAgICAgICBrZXkgKys7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgICQoZWwpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxuXHJcbiAgICAgICAgICBmdW5jdGlvbiBtYWdpYyhfY2xhc3MsIHRhcmdldCl7XHJcbiAgICAgICAgICAgIHZhciBwYXR0ID0gbmV3IFJlZ0V4cCggJ1xcXFxzJyArIFxyXG4gICAgICAgICAgICAgICAgX2NsYXNzLlxyXG4gICAgICAgICAgICAgICAgICByZXBsYWNlKCAvXFwqL2csICdbQS1aYS16MC05LV9dKycgKS5cclxuICAgICAgICAgICAgICAgICAgc3BsaXQoICcgJyApLlxyXG4gICAgICAgICAgICAgICAgICBqb2luKCAnXFxcXHN8XFxcXHMnICkgKyBcclxuICAgICAgICAgICAgICAgICdcXFxccycsICdnJyApO1xyXG4gICAgICAgICAgICB2YXIgY24gPSAnICcgKyAkKHRhcmdldClbMF0uY2xhc3NOYW1lICsgJyAnO1xyXG4gICAgICAgICAgICB3aGlsZSAoIHBhdHQudGVzdCggY24gKSApIHtcclxuICAgICAgICAgICAgICBjbiA9IGNuLnJlcGxhY2UoIHBhdHQsICcgJyApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICQodGFyZ2V0KVswXS5jbGFzc05hbWUgPSAkLnRyaW0oIGNuICk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfV0pOyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbi8qKlxyXG4gKiBHZW5lcmFsLXB1cnBvc2UgdmFsaWRhdG9yIGZvciBuZ01vZGVsLlxyXG4gKiBhbmd1bGFyLmpzIGNvbWVzIHdpdGggc2V2ZXJhbCBidWlsdC1pbiB2YWxpZGF0aW9uIG1lY2hhbmlzbSBmb3IgaW5wdXQgZmllbGRzIChuZ1JlcXVpcmVkLCBuZ1BhdHRlcm4gZXRjLikgYnV0IHVzaW5nXHJcbiAqIGFuIGFyYml0cmFyeSB2YWxpZGF0aW9uIGZ1bmN0aW9uIHJlcXVpcmVzIGNyZWF0aW9uIG9mIGEgY3VzdG9tIGZvcm1hdHRlcnMgYW5kIC8gb3IgcGFyc2Vycy5cclxuICogVGhlIHVpLXZhbGlkYXRlIGRpcmVjdGl2ZSBtYWtlcyBpdCBlYXN5IHRvIHVzZSBhbnkgZnVuY3Rpb24ocykgZGVmaW5lZCBpbiBzY29wZSBhcyBhIHZhbGlkYXRvciBmdW5jdGlvbihzKS5cclxuICogQSB2YWxpZGF0b3IgZnVuY3Rpb24gd2lsbCB0cmlnZ2VyIHZhbGlkYXRpb24gb24gYm90aCBtb2RlbCBhbmQgaW5wdXQgY2hhbmdlcy5cclxuICpcclxuICogQGV4YW1wbGUgPGlucHV0IHVpLXZhbGlkYXRlPVwiICdteVZhbGlkYXRvckZ1bmN0aW9uKCR2YWx1ZSknIFwiPlxyXG4gKiBAZXhhbXBsZSA8aW5wdXQgdWktdmFsaWRhdGU9XCJ7IGZvbyA6ICckdmFsdWUgPiBhbm90aGVyTW9kZWwnLCBiYXIgOiAndmFsaWRhdGVGb28oJHZhbHVlKScgfVwiPlxyXG4gKiBAZXhhbXBsZSA8aW5wdXQgdWktdmFsaWRhdGU9XCJ7IGZvbyA6ICckdmFsdWUgPiBhbm90aGVyTW9kZWwnIH1cIiB1aS12YWxpZGF0ZS13YXRjaD1cIiAnYW5vdGhlck1vZGVsJyBcIj5cclxuICogQGV4YW1wbGUgPGlucHV0IHVpLXZhbGlkYXRlPVwieyBmb28gOiAnJHZhbHVlID4gYW5vdGhlck1vZGVsJywgYmFyIDogJ3ZhbGlkYXRlRm9vKCR2YWx1ZSknIH1cIiB1aS12YWxpZGF0ZS13YXRjaD1cIiB7IGZvbyA6ICdhbm90aGVyTW9kZWwnIH0gXCI+XHJcbiAqXHJcbiAqIEBwYXJhbSB1aS12YWxpZGF0ZSB7c3RyaW5nfG9iamVjdCBsaXRlcmFsfSBJZiBzdHJpbmdzIGlzIHBhc3NlZCBpdCBzaG91bGQgYmUgYSBzY29wZSdzIGZ1bmN0aW9uIHRvIGJlIHVzZWQgYXMgYSB2YWxpZGF0b3IuXHJcbiAqIElmIGFuIG9iamVjdCBsaXRlcmFsIGlzIHBhc3NlZCBhIGtleSBkZW5vdGVzIGEgdmFsaWRhdGlvbiBlcnJvciBrZXkgd2hpbGUgYSB2YWx1ZSBzaG91bGQgYmUgYSB2YWxpZGF0b3IgZnVuY3Rpb24uXHJcbiAqIEluIGJvdGggY2FzZXMgdmFsaWRhdG9yIGZ1bmN0aW9uIHNob3VsZCB0YWtlIGEgdmFsdWUgdG8gdmFsaWRhdGUgYXMgaXRzIGFyZ3VtZW50IGFuZCBzaG91bGQgcmV0dXJuIHRydWUvZmFsc2UgaW5kaWNhdGluZyBhIHZhbGlkYXRpb24gcmVzdWx0LlxyXG4gKi9cclxuYW5ndWxhci5tb2R1bGUoJ3VpLnZhbGlkYXRlJyxbXSkuZGlyZWN0aXZlKCd1aVZhbGlkYXRlJywgZnVuY3Rpb24gKCkge1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcmVzdHJpY3Q6ICdBJyxcclxuICAgIHJlcXVpcmU6ICduZ01vZGVsJyxcclxuICAgIGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWxtLCBhdHRycywgY3RybCkge1xyXG4gICAgICB2YXIgdmFsaWRhdGVGbiwgdmFsaWRhdG9ycyA9IHt9LFxyXG4gICAgICAgICAgdmFsaWRhdGVFeHByID0gc2NvcGUuJGV2YWwoYXR0cnMudWlWYWxpZGF0ZSk7XHJcblxyXG4gICAgICBpZiAoIXZhbGlkYXRlRXhwcil7IHJldHVybjt9XHJcblxyXG4gICAgICBpZiAoYW5ndWxhci5pc1N0cmluZyh2YWxpZGF0ZUV4cHIpKSB7XHJcbiAgICAgICAgdmFsaWRhdGVFeHByID0geyB2YWxpZGF0b3I6IHZhbGlkYXRlRXhwciB9O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBhbmd1bGFyLmZvckVhY2godmFsaWRhdGVFeHByLCBmdW5jdGlvbiAoZXhwcnNzbiwga2V5KSB7XHJcbiAgICAgICAgdmFsaWRhdGVGbiA9IGZ1bmN0aW9uICh2YWx1ZVRvVmFsaWRhdGUpIHtcclxuICAgICAgICAgIHZhciBleHByZXNzaW9uID0gc2NvcGUuJGV2YWwoZXhwcnNzbiwgeyAnJHZhbHVlJyA6IHZhbHVlVG9WYWxpZGF0ZSB9KTtcclxuICAgICAgICAgIGlmIChhbmd1bGFyLmlzT2JqZWN0KGV4cHJlc3Npb24pICYmIGFuZ3VsYXIuaXNGdW5jdGlvbihleHByZXNzaW9uLnRoZW4pKSB7XHJcbiAgICAgICAgICAgIC8vIGV4cHJlc3Npb24gaXMgYSBwcm9taXNlXHJcbiAgICAgICAgICAgIGV4cHJlc3Npb24udGhlbihmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgIGN0cmwuJHNldFZhbGlkaXR5KGtleSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgY3RybC4kc2V0VmFsaWRpdHkoa2V5LCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWVUb1ZhbGlkYXRlO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChleHByZXNzaW9uKSB7XHJcbiAgICAgICAgICAgIC8vIGV4cHJlc3Npb24gaXMgdHJ1ZVxyXG4gICAgICAgICAgICBjdHJsLiRzZXRWYWxpZGl0eShrZXksIHRydWUpO1xyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWVUb1ZhbGlkYXRlO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gZXhwcmVzc2lvbiBpcyBmYWxzZVxyXG4gICAgICAgICAgICBjdHJsLiRzZXRWYWxpZGl0eShrZXksIGZhbHNlKTtcclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlVG9WYWxpZGF0ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHZhbGlkYXRvcnNba2V5XSA9IHZhbGlkYXRlRm47XHJcbiAgICAgICAgY3RybC4kZm9ybWF0dGVycy5wdXNoKHZhbGlkYXRlRm4pO1xyXG4gICAgICAgIGN0cmwuJHBhcnNlcnMucHVzaCh2YWxpZGF0ZUZuKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBmdW5jdGlvbiBhcHBseV93YXRjaCh3YXRjaClcclxuICAgICAge1xyXG4gICAgICAgICAgLy9zdHJpbmcgLSB1cGRhdGUgYWxsIHZhbGlkYXRvcnMgb24gZXhwcmVzc2lvbiBjaGFuZ2VcclxuICAgICAgICAgIGlmIChhbmd1bGFyLmlzU3RyaW5nKHdhdGNoKSlcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBzY29wZS4kd2F0Y2god2F0Y2gsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgIGFuZ3VsYXIuZm9yRWFjaCh2YWxpZGF0b3JzLCBmdW5jdGlvbih2YWxpZGF0b3JGbil7XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3JGbihjdHJsLiRtb2RlbFZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC8vYXJyYXkgLSB1cGRhdGUgYWxsIHZhbGlkYXRvcnMgb24gY2hhbmdlIG9mIGFueSBleHByZXNzaW9uXHJcbiAgICAgICAgICBpZiAoYW5ndWxhci5pc0FycmF5KHdhdGNoKSlcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBhbmd1bGFyLmZvckVhY2god2F0Y2gsIGZ1bmN0aW9uKGV4cHJlc3Npb24pe1xyXG4gICAgICAgICAgICAgICAgICBzY29wZS4kd2F0Y2goZXhwcmVzc2lvbiwgZnVuY3Rpb24oKVxyXG4gICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBhbmd1bGFyLmZvckVhY2godmFsaWRhdG9ycywgZnVuY3Rpb24odmFsaWRhdG9yRm4pe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvckZuKGN0cmwuJG1vZGVsVmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvL29iamVjdCAtIHVwZGF0ZSBhcHByb3ByaWF0ZSB2YWxpZGF0b3JcclxuICAgICAgICAgIGlmIChhbmd1bGFyLmlzT2JqZWN0KHdhdGNoKSlcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBhbmd1bGFyLmZvckVhY2god2F0Y2gsIGZ1bmN0aW9uKGV4cHJlc3Npb24sIHZhbGlkYXRvcktleSlcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIC8vdmFsdWUgaXMgc3RyaW5nIC0gbG9vayBhZnRlciBvbmUgZXhwcmVzc2lvblxyXG4gICAgICAgICAgICAgICAgICBpZiAoYW5ndWxhci5pc1N0cmluZyhleHByZXNzaW9uKSlcclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgc2NvcGUuJHdhdGNoKGV4cHJlc3Npb24sIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yc1t2YWxpZGF0b3JLZXldKGN0cmwuJG1vZGVsVmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIC8vdmFsdWUgaXMgYXJyYXkgLSBsb29rIGFmdGVyIGFsbCBleHByZXNzaW9ucyBpbiBhcnJheVxyXG4gICAgICAgICAgICAgICAgICBpZiAoYW5ndWxhci5pc0FycmF5KGV4cHJlc3Npb24pKVxyXG4gICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBhbmd1bGFyLmZvckVhY2goZXhwcmVzc2lvbiwgZnVuY3Rpb24oaW50RXhwcmVzc2lvbilcclxuICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzY29wZS4kd2F0Y2goaW50RXhwcmVzc2lvbiwgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yc1t2YWxpZGF0b3JLZXldKGN0cmwuJG1vZGVsVmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAvLyBTdXBwb3J0IGZvciB1aS12YWxpZGF0ZS13YXRjaFxyXG4gICAgICBpZiAoYXR0cnMudWlWYWxpZGF0ZVdhdGNoKXtcclxuICAgICAgICAgIGFwcGx5X3dhdGNoKCBzY29wZS4kZXZhbChhdHRycy51aVZhbGlkYXRlV2F0Y2gpICk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG59KTtcclxuIiwiXHJcbnZhciB2aWV3ID0ge1xyXG4gICAgbG9hZGluZ19kaWFsb2c6IG51bGwsXHJcbiAgICBsb2FkaW5nX251bTogMFxyXG59O1xyXG5cclxuLy8gZGlhbG9nXHJcbnZpZXcuZGlhbG9nID0gZnVuY3Rpb24gKG9wdCkge1xyXG4gICAgdmFyIHRpdGxlID0gb3B0LnRpdGxlIHx8IFQoXCJkaWFsb2cuRElBTE9HXCIpLFxyXG4gICAgICAgIGNvbnRlbnQgPSBvcHQuY29udGVudCB8fCBcIlwiLFxyXG4gICAgICAgIG9rX2J0biA9IG9wdC5va19idG4sXHJcbiAgICAgICAgY2FuY2VsX2J0biA9IG9wdC5jYW5jZWxfYnRuLFxyXG4gICAgICAgIGNsb3NlX2J0biA9IG9wdC5jbG9zZV9idG4sXHJcbiAgICAgICAgb2tfZm4gPSBvcHQub2tfZm4gfHwgbnVsbCxcclxuICAgICAgICBjYW5jZWxfZm4gPSBvcHQuY2FuY2VsX2ZuIHx8IG51bGwsXHJcbiAgICAgICAgcHJlX2ZuID0gb3B0LnByZV9mbiB8fCBudWxsLFxyXG4gICAgICAgIGRpYWxvZyA9IG51bGwsXHJcbiAgICAgICAgZGlhbG9nX2h0bWwgPSAnPGRpdiBjbGFzcz1cIm1vZGFsIGZhZGVcIj5cXFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtZGlhbG9nXCI+XFxcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj5cXFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+XFxcclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgYXJpYS1sYWJlbD1cIkNsb3NlXCI+PHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj48L2J1dHRvbj5cXFxyXG4gICAgICAgIDxoNCBjbGFzcz1cIm1vZGFsLXRpdGxlXCI+JyArIHRpdGxlICsgJzwvaDQ+XFxcclxuICAgICAgICAgICAgPC9kaXY+XFxcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWJvZHlcIj4nICsgY29udGVudCArICc8L2Rpdj5cXFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtZm9vdGVyXCI+JztcclxuXHJcbiAgICBpZiAoY2FuY2VsX2J0bikge1xyXG4gICAgICAgIGRpYWxvZ19odG1sICs9ICc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBkaWFsb2dfYnRuIGNhbmNlbFwiPicgKyBUKFwiYnV0dG9uLkNBTkNFTFwiKSArICc8L2J1dHRvbj4nO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChva19idG4pIHtcclxuICAgICAgICBkaWFsb2dfaHRtbCArPSAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgZGlhbG9nX2J0biBva1wiPicgKyBUKFwiYnV0dG9uLk9LXCIpICsgJzwvYnV0dG9uPic7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNsb3NlX2J0bikge1xyXG4gICAgICAgIGRpYWxvZ19odG1sICs9ICc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBkaWFsb2dfYnRuIG9rXCI+JyArIFQoXCJidXR0b24uQ0xPU0VcIikgKyAnPC9idXR0b24+JztcclxuICAgIH1cclxuXHJcbiAgICBkaWFsb2dfaHRtbCArPSAnPC9kaXY+PC9kaXY+PC9kaXY+PC9kaXY+JztcclxuXHJcbiAgICBkaWFsb2cgPSAkKGRpYWxvZ19odG1sKTtcclxuXHJcbiAgICBkaWFsb2dcclxuICAgICAgICAub24oJ3Nob3cuYnMubW9kYWwnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBpZiAob3B0LndpZHRoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY3NzID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICd3aWR0aCc6IG9wdC53aWR0aCArICdweCdcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmNoaWxkcmVuKFwiLm1vZGFsLWRpYWxvZ1wiKS5jc3MoY3NzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwcmVfZm4gJiYgcHJlX2ZuKCQodGhpcykpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLm9uKFwic2hvd24uYnMubW9kYWxcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5vbihcImhpZGUuYnMubW9kYWxcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5vbihcImhpZGRlbi5icy5tb2RhbFwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBkaWFsb2cucmVtb3ZlKCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAub24oXCJjbGlja1wiLCBcIi5kaWFsb2dfYnRuXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoXCJva1wiKSkge1xyXG4gICAgICAgICAgICAgICAgb2tfZm4gJiYgb2tfZm4oKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoXCJjYW5jZWxcIikpIHtcclxuICAgICAgICAgICAgICAgIGNhbmNlbF9mbiAmJiBjYW5jZWxfZm4oKTtcclxuICAgICAgICAgICAgICAgIGRpYWxvZy5tb2RhbChcImhpZGVcIik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghb3B0LnByZXZlbnRfYXV0b19oaWRlIHx8IG9wdC5wcmV2ZW50X2F1dG9faGlkZSA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgZGlhbG9nLm1vZGFsKFwiaGlkZVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLm9uKCdzaG93bicsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcHJlX2ZuICYmIHByZV9mbigkKHRoaXMpKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5tb2RhbCgnc2hvdycpO1xyXG5cclxuICAgIGRpYWxvZy5jbG9zZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKHRoaXMpLm1vZGFsKCdoaWRlJyk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiBkaWFsb2c7XHJcbn07XHJcblxyXG4vLyBsb2FkaW5nXHJcbnZpZXcubG9hZGluZyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICh2aWV3LmxvYWRpbmdfZGlhbG9nID09IG51bGwpIHtcclxuICAgICAgICB2YXIgb3B0ID0ge1xyXG4gICAgICAgICAgICB0aXRsZTogVChcImRpYWxvZy5BTEVSVFwiKSxcclxuICAgICAgICAgICAgY29udGVudDogXCI8aW1nIHNyYz0naW1nL2xvYWRpbmcuZ2lmJy8+IDxzcGFuIHN0eWxlPSdmb250LXNpemU6IDE4cHg7Jz5cIiArIFQoXCJkaWFsb2cuTE9BRElOR1wiKSArIFwiPC9zcGFuPlwiLFxyXG4gICAgICAgICAgICBva19idG46IGZhbHNlLFxyXG4gICAgICAgICAgICBjYW5jZWxfYnRuOiBmYWxzZVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHZpZXcubG9hZGluZ19kaWFsb2cgPSB2aWV3LmRpYWxvZyhvcHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHZpZXcubG9hZGluZ19udW0rKztcclxufTtcclxuXHJcbi8vIOWFs+mXrWxvYWRpbmdcclxudmlldy5jbG9zZV9sb2FkaW5nID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmlldy5sb2FkaW5nX251bS0tO1xyXG5cclxuICAgIGlmICh2aWV3LmxvYWRpbmdfZGlhbG9nICE9IG51bGwgJiYgdmlldy5sb2FkaW5nX251bSA9PSAwKSB7XHJcbiAgICAgICAgdmlldy5sb2FkaW5nX2RpYWxvZy5jbG9zZSgpO1xyXG4gICAgICAgIHZpZXcubG9hZGluZ19kaWFsb2cgPSBudWxsO1xyXG4gICAgfVxyXG59O1xyXG5cclxuLy8gYWxlcnRcclxudmlldy5hbGVydCA9IGZ1bmN0aW9uIChtc2csIG9rKSB7XHJcbiAgICB2YXIgb3B0ID0ge1xyXG4gICAgICAgIHRpdGxlOiBUKFwiZGlhbG9nLkFMRVJUXCIpLFxyXG4gICAgICAgIGNvbnRlbnQ6IFwiXCIgKyBtc2cgKyBcIlwiLFxyXG4gICAgICAgIGNsb3NlX2J0bjogdHJ1ZSxcclxuICAgICAgICBva19mbjogb2tcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHZpZXcuZGlhbG9nKG9wdCk7XHJcbn07XHJcblxyXG4vLyBzaG93XHJcbnZpZXcuc2hvdyA9IGZ1bmN0aW9uIChtc2csIHRpdGxlLCB3aWR0aCwgb2ssIGNhbmNlbCkge1xyXG4gICAgdmFyIG9wdCA9IHtcclxuICAgICAgICB0aXRsZTogVChcImRpYWxvZy5BTEVSVFwiKSxcclxuICAgICAgICBjb250ZW50OiBcIjxwIHN0eWxlPSd3b3JkLXdyYXA6YnJlYWstd29yZCc+XCIgKyBtc2cgKyBcIjwvcD5cIixcclxuICAgICAgICBjbG9zZV9idG46IHRydWUsXHJcbiAgICAgICAgb2tfZm46IG9rLFxyXG4gICAgICAgIGNhbmNlbF9mbjogY2FuY2VsXHJcbiAgICB9O1xyXG5cclxuICAgIGlmICh0aXRsZSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICBvcHQudGl0bGUgPSB0aXRsZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAod2lkdGggIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgb3B0LndpZHRoID0gd2lkdGg7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHZpZXcuZGlhbG9nKG9wdCk7XHJcbn07XHJcblxyXG4vLyBjb25maXJtXHJcbnZpZXcuY29uZmlybSA9IGZ1bmN0aW9uIChjb250ZW50LCBvaywgY2FuY2VsKSB7XHJcblxyXG4gICAgdmFyIG9wdCA9IHtcclxuICAgICAgICB0aXRsZTogVChcImRpYWxvZy5BTEVSVFwiKSxcclxuICAgICAgICBjb250ZW50OiAnPHNwYW4gY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLWV4Y2xhbWF0aW9uLXNpZ25cIiBhcmlhLWhpZGRlbj1cInRydWVcIj4gJyArIGNvbnRlbnQgKyAnPC9zcGFuPicsXHJcbiAgICAgICAgb2tfYnRuOiB0cnVlLFxyXG4gICAgICAgIGNhbmNlbF9idG46IHRydWUsXHJcbiAgICAgICAgb2tfZm46IG9rLFxyXG4gICAgICAgIGNhbmNlbF9mbjogY2FuY2VsXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB2aWV3LmRpYWxvZyhvcHQpO1xyXG59O1xyXG5cclxuLy8gcHJvbXB0XHJcbnZpZXcucHJvbXB0ID0gZnVuY3Rpb24gKHRpdGxlLCBkZWZhdWx0X3ZhbCwgb2ssIGNhbmNlbCkge1xyXG4gICAgdmFyIG9rX2ZuID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciB2YWx1ZSA9ICQoXCIjcHJvbXB0X2lucHV0XCIpLnZhbCgpO1xyXG4gICAgICAgIG9rKHZhbHVlKTtcclxuICAgIH07XHJcblxyXG4gICAgdmFyIGNvbnRlbnQgPSAnPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cInByb21wdF9pbnB1dFwiPic7XHJcbiAgICBpZiAoZGVmYXVsdF92YWwgIT0gbnVsbCAmJiBkZWZhdWx0X3ZhbCAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICBjb250ZW50ID0gJzxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJwcm9tcHRfaW5wdXRcIiB2YWx1ZT1cIicgKyBkZWZhdWx0X3ZhbCArICdcIj4nO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBvcHQgPSB7XHJcbiAgICAgICAgdGl0bGU6IHRpdGxlLFxyXG4gICAgICAgIGNvbnRlbnQ6IGNvbnRlbnQsXHJcbiAgICAgICAgb2tfYnRuOiB0cnVlLFxyXG4gICAgICAgIGNhbmNlbF9idG46IHRydWUsXHJcbiAgICAgICAgb2tfZm46IG9rX2ZuLFxyXG4gICAgICAgIGNhbmNlbF9mbjogY2FuY2VsXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB2aWV3LmRpYWxvZyhvcHQpO1xyXG59O1xyXG5cclxuLy8gcHJvbXB0X3RpbWVcclxudmlldy5wcm9tcHRfdGltZSA9IGZ1bmN0aW9uICh0aXRsZSwgb2ssIGNhbmNlbCkge1xyXG4gICAgdmFyIG9rX2ZuID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciB2YWx1ZSA9ICQoXCIjcHJvbXB0X2lucHV0XCIpLnZhbCgpO1xyXG4gICAgICAgIG9rKHZhbHVlKTtcclxuICAgIH07XHJcblxyXG4gICAgdmFyIG9wdCA9IHtcclxuICAgICAgICB0aXRsZTogdGl0bGUsXHJcbiAgICAgICAgY29udGVudDogJzxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgZGF0YS1kYXRlLWZvcm1hdD1cInl5eXktbW0tZGQgaGg6aWk6c3NcIiBpZD1cInByb21wdF9pbnB1dFwiPicsXHJcbiAgICAgICAgb2tfYnRuOiB0cnVlLFxyXG4gICAgICAgIGNhbmNlbF9idG46IHRydWUsXHJcbiAgICAgICAgb2tfZm46IG9rX2ZuLFxyXG4gICAgICAgIGNhbmNlbF9mbjogY2FuY2VsXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB2aWV3LmRpYWxvZyhvcHQpO1xyXG59O1xyXG5cclxuLy8gcHJvbXB0X3RleHRhcmVhXHJcbnZpZXcucHJvbXB0X3RleHRhcmVhID0gZnVuY3Rpb24gKHRpdGxlLCBvaywgY2FuY2VsLCB2YWx1ZSkge1xyXG4gICAgdmFsdWUgPSB2YWx1ZSB8fCBcIlwiO1xyXG5cclxuICAgIHZhciBva19mbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgdmFsdWUgPSAkKFwiI3Byb21wdF9pbnB1dFwiKS52YWwoKTtcclxuICAgICAgICBvayh2YWx1ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBvcHQgPSB7XHJcbiAgICAgICAgdGl0bGU6IHRpdGxlLFxyXG4gICAgICAgIGNvbnRlbnQ6ICc8dGV4dGFyZWEgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cInByb21wdF9pbnB1dFwiPicgKyB2YWx1ZSArICc8L3RleHRhcmVhPicsXHJcbiAgICAgICAgb2tfYnRuOiB0cnVlLFxyXG4gICAgICAgIGNhbmNlbF9idG46IHRydWUsXHJcbiAgICAgICAgb2tfZm46IG9rX2ZuLFxyXG4gICAgICAgIGNhbmNlbF9mbjogY2FuY2VsXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB2aWV3LmRpYWxvZyhvcHQpO1xyXG59O1xyXG5cclxudmFyIHV0aWxzID0ge307XHJcblxyXG51dGlscy5leHBvcnRFeGNlbCA9IGZ1bmN0aW9uIChwYXJhbXMsIHVybCwgbWV0aG9kKSB7XHJcbiAgICBpZiAocGFyYW1zKSB7XHJcbiAgICAgICAgLy8gcGFyYW1zIOaYryBzdHJpbmcg5oiW6ICFIGFycmF5L29iamVjdFxyXG4gICAgICAgIGlmICh0eXBlb2YgcGFyYW1zID09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgIHBhcmFtcyA9IHt9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBwYXJhbXNbJ2V4cG9ydCddID0gMTtcclxuICAgICAgICAvLyDmiorlj4LmlbDnu4Too4XmiJAgZm9ybeeahCAgaW5wdXRcclxuICAgICAgICB2YXIgaW5wdXRzID0gW107XHJcbiAgICAgICAgJC5lYWNoKHBhcmFtcywgZnVuY3Rpb24gKGssIHYpIHtcclxuICAgICAgICAgICAgaWYgKHYgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW5wdXRzLnB1c2goJzxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIicgKyBrICsgJ1wiIHZhbHVlPVwiJyArIHYgKyAnXCIgLz4nKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKGRvY3VtZW50KS5vZmYoJ3N1Ym1pdCcpO1xyXG4gICAgICAgICQoJzxmb3JtIGlkPVwiZG93bmxvYWRcIiBhY3Rpb249XCInICsgKHVybCB8fCAnaW5kZXgucGhwJykgKyAnXCIgbWV0aG9kPVwiJyArIChtZXRob2QgfHwgXCJwb3N0XCIpICsgJ1wiIHRhcmdldD1cIl9ibGFua1wiPicgKyBpbnB1dHMuam9pbignJykgKyAnPC9mb3JtPicpXHJcbiAgICAgICAgICAgIC5hcHBlbmRUbygnYm9keScpLnN1Ym1pdCgpLnJlbW92ZSgpO1xyXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdzdWJtaXQnLCBmYWxzZSk7XHJcbiAgICB9XHJcbn07XHJcblxyXG51dGlscy5iYXNlNjRUb0Jsb2IgPSBmdW5jdGlvbihiYXNlNjREYXRhLCBjb250ZW50VHlwZSkge1xyXG4gICAgY29udGVudFR5cGUgPSBjb250ZW50VHlwZSB8fCAnJztcclxuICAgIHZhciBzbGljZVNpemUgPSAxMDI0O1xyXG4gICAgdmFyIGJ5dGVDaGFyYWN0ZXJzID0gYXRvYihiYXNlNjREYXRhKTtcclxuICAgIHZhciBieXRlc0xlbmd0aCA9IGJ5dGVDaGFyYWN0ZXJzLmxlbmd0aDtcclxuICAgIHZhciBzbGljZXNDb3VudCA9IE1hdGguY2VpbChieXRlc0xlbmd0aCAvIHNsaWNlU2l6ZSk7XHJcbiAgICB2YXIgYnl0ZUFycmF5cyA9IG5ldyBBcnJheShzbGljZXNDb3VudCk7XHJcblxyXG4gICAgZm9yICh2YXIgc2xpY2VJbmRleCA9IDA7IHNsaWNlSW5kZXggPCBzbGljZXNDb3VudDsgKytzbGljZUluZGV4KSB7XHJcbiAgICAgICAgdmFyIGJlZ2luID0gc2xpY2VJbmRleCAqIHNsaWNlU2l6ZTtcclxuICAgICAgICB2YXIgZW5kID0gTWF0aC5taW4oYmVnaW4gKyBzbGljZVNpemUsIGJ5dGVzTGVuZ3RoKTtcclxuXHJcbiAgICAgICAgdmFyIGJ5dGVzID0gbmV3IEFycmF5KGVuZCAtIGJlZ2luKTtcclxuICAgICAgICBmb3IgKHZhciBvZmZzZXQgPSBiZWdpbiwgaSA9IDAgOyBvZmZzZXQgPCBlbmQ7ICsraSwgKytvZmZzZXQpIHtcclxuICAgICAgICAgICAgYnl0ZXNbaV0gPSBieXRlQ2hhcmFjdGVyc1tvZmZzZXRdLmNoYXJDb2RlQXQoMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJ5dGVBcnJheXNbc2xpY2VJbmRleF0gPSBuZXcgVWludDhBcnJheShieXRlcyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbmV3IEJsb2IoYnl0ZUFycmF5cywgeyB0eXBlOiBjb250ZW50VHlwZSB9KTtcclxufTtcclxuXHJcbiIsImFuZ3VsYXIubW9kdWxlKCdodHRwU2VydmljZScsIFtdKS5cclxuICAgIHNlcnZpY2UoJ21vY2tTZXJ2aWNlJywgWyckcScsICckdGltZW91dCcsICckaHR0cCcsICckc3RhdGUnLFxyXG4gICAgICAgIGZ1bmN0aW9uICgkcSwgJHRpbWVvdXQsICRodHRwLCAkc3RhdGUpIHtcclxuICAgICAgICAgICAgdGhpcy5nZXQgPSBmdW5jdGlvbiAodXJsLCBwYXJhbXMpIHtcclxuICAgICAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcbiAgICAgICAgICAgICAgICB1cmwgPSBcIi9tb2NrX2RhdGEvXCIgKyB1cmwgKyBcIi5qc29uXCI7XHJcbiAgICAgICAgICAgICAgICAvL3ZpZXcubG9hZGluZygpO1xyXG4gICAgICAgICAgICAgICAgJGh0dHAuZ2V0KHVybCkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGQgPSByZXN1bHQuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZC5zdGF0dXMgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKGQuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChkLnN0YXR1cykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB2aWV3LmFsZXJ0KHJlc3VsdC5tc2cpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vJHN0YXRlLmdvKFwibG9naW5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KGQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gKHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAvL3ZpZXcuY2xvc2VfbG9hZGluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdChUKFwibXNnLnN5c3RlbV9lcnJvclwiKSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XSk7XHJcblxyXG5cclxuYW5ndWxhci5tb2R1bGUoJ2h0dHBTZXJ2aWNlJywgW10pLlxyXG4gICAgc2VydmljZSgnZGF0YVNlcnZpY2UnLCBbJyRodHRwJyxcclxuICAgICAgICBmdW5jdGlvbiAoJGh0dHApIHtcclxuICAgICAgICAgICAgdmFyIGhvc3Q9XCJodHRwOi8vbG9jYWxob3N0OjgxMjNcIjtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBnZXRsYWJpdGVtTGlzdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB1cmwgPSAnL21vY2tfZGF0YS9sYWJpdGVtX2xpc3QuanNvbic7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICRodHRwLmdldCh1cmwpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHNhdmVMYWJpdGVtOiBmdW5jdGlvbiAobW9kZWwpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZ2V0TGFiSXRlbVNldExpc3Q6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdXJsID0gJy9tb2NrX2RhdGEvbGFiaXRlbXNldF9saXN0Lmpzb24nO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAkaHR0cC5nZXQodXJsKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBzYXZlTGFiSXRlbVNldDogZnVuY3Rpb24gKG1vZGVsKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGdldExhYkNhdGVnb3J5TGlzdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB1cmwgPSAnL21vY2tfZGF0YS9jYXRlZ29yeV9saXN0Lmpzb24nO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAkaHR0cC5nZXQodXJsKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBzYXZlTGFiQ2F0ZWdvcnk6IGZ1bmN0aW9uIChtb2RlbCkge1xyXG5cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBnZXRRQ1ZhbHVlTGlzdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB1cmwgPSAnL21vY2tfZGF0YS9xY3ZhbHVlX2xpc3QuanNvbic7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICRodHRwLmdldCh1cmwpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHNhdmVRQ1ZhbHVlOiBmdW5jdGlvbiAobW9kZWwpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZ2V0U2FtcGxlVHlwZUxpc3Q6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdXJsID0gJy9tb2NrX2RhdGEvc2FtcGxlVHlwZV9saXN0Lmpzb24nO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAkaHR0cC5nZXQodXJsKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBzYXZlU2FtcGxlVHlwZTogZnVuY3Rpb24gKG1vZGVsKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGdldENyaXNpc0xpc3Q6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdXJsID0gJy9tb2NrX2RhdGEvbGlzdC5qc29uJztcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJGh0dHAuZ2V0KHVybCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZ2V0Q3Jpc2lzRGV0YWlsQnlJZDogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBnZXRSZXF1ZXN0TGlzdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB1cmwgPSAnL21vY2tfZGF0YS9yZXF1ZXN0X2xpc3QuanNvbic7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICRodHRwLmdldCh1cmwpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGdldFNleExpc3Q6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdXJsID0gJy9tb2NrX2RhdGEvc2V4X2xpc3QuanNvbic7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICRodHRwLmdldCh1cmwpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGdldFNhbXBsZUxpc3Q6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdXJsID0gJy9tb2NrX2RhdGEvc2FtcGxlX2xpc3QuanNvbic7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICRodHRwLmdldCh1cmwpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHNhdmVDcmlzaXM6IGZ1bmN0aW9uIChtb2RlbCkge1xyXG5cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBnZXRDcmlzaXNMaXN0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHVybCA9ICcvbW9ja19kYXRhL2NyaXNpc19saXN0Lmpzb24nO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAkaHR0cC5nZXQodXJsKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBzYXZlUGF0aWVudDogZnVuY3Rpb24gKG1vZGVsKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGdldFBhdGllbnRMaXN0OiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHNhdmVFbXBsb3llZTogZnVuY3Rpb24gKG1vZGVsKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGdldEVtcGxveWVlTGlzdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB1cmwgPSAnL21vY2tfZGF0YS9lbXBsb3llZV9saXN0Lmpzb24nO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAkaHR0cC5nZXQodXJsKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBnZXRTaXRlTGlzdDogZnVuY3Rpb24gKHF1ZXJ5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHVybCA9IGhvc3QrJy9hcGkvc3lzdGVtL21lZGljYWxpbnN0aXR1dGlvbnM/c2VhcmNoPSc7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICRodHRwLmdldCh1cmwrKHF1ZXJ5P3F1ZXJ5OicnKSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgc2F2ZVNpdGU6IGZ1bmN0aW9uIChtb2RlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB1cmwgPSAnL2FwaS9zeXN0ZW0vbWVkaWNhbGluc3RpdHV0aW9ucyc7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICRodHRwLnBvc3QodXJsLG1vZGVsKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBnZXRTaXRlQnlJZDpmdW5jdGlvbihpZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHVybCA9ICcvYXBpL3N5c3RlbS9tZWRpY2FsaW5zdGl0dXRpb25kZXRhaWw/aWQ9JztcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJGh0dHAuZ2V0KHVybCArIGlkKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBkZWxldGVTaXRlOmZ1bmN0aW9uKGVudGl0eSl7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHVybCA9ICcvYXBpL3N5c3RlbS9tZWRpY2FsaW5zdGl0dXRpb25zJztcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJGh0dHAuZGVsZXRlKHVybCx7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaGVhZGVyc1wiOntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOidhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOmVudGl0eVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGdldERlcHRMaXN0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHVybCA9ICcvbW9ja19kYXRhL2RlcHRfbGlzdC5qc29uJztcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJGh0dHAuZ2V0KHVybCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZGVsZXRlTGFiQ2F0ZWdvcnk6ZnVuY3Rpb24oaWQpe1xyXG5cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBkZWxldGVDcmlzaXM6ZnVuY3Rpb24oaWQpe1xyXG5cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBkZWxldGVEZXB0OmZ1bmN0aW9uKGlkKXtcclxuXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZGVsZXRlRW1wbG95ZWU6ZnVuY3Rpb24oaWQpe1xyXG5cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBkZWxldGVMYWJJdGVtOmZ1bmN0aW9uKGlkKXtcclxuXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZGVsZXRlTGFiSXRlbVNldDpmdW5jdGlvbihpZCl7XHJcblxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGRlbGV0ZVBhdGllbnQ6ZnVuY3Rpb24oaWQpe1xyXG5cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBkZWxldGVRQ1ZhbHVlOmZ1bmN0aW9uKGlkKXtcclxuXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZGVsZXRlU2FtcGxlVHlwZTpmdW5jdGlvbihpZCl7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1dKTsiLCIndXNlIHN0cmljdCc7XHJcblxyXG4vKipcclxuICogMC4xLjFcclxuICogRGVmZXJyZWQgbG9hZCBqcy9jc3MgZmlsZSwgdXNlZCBmb3IgdWktanEuanMgYW5kIExhenkgTG9hZGluZy5cclxuICogXHJcbiAqIEAgZmxhdGZ1bGwuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqIEF1dGhvciB1cmw6ICN1c2VyL2ZsYXRmdWxsXHJcbiAqL1xyXG5cclxuYW5ndWxhci5tb2R1bGUoJ3VpLmxvYWQnLCBbXSlcclxuXHQuc2VydmljZSgndWlMb2FkJywgWyckZG9jdW1lbnQnLCAnJHEnLCAnJHRpbWVvdXQnLCBmdW5jdGlvbiAoJGRvY3VtZW50LCAkcSwgJHRpbWVvdXQpIHtcclxuXHJcblx0XHR2YXIgbG9hZGVkID0gW107XHJcblx0XHR2YXIgcHJvbWlzZSA9IGZhbHNlO1xyXG5cdFx0dmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIENoYWluIGxvYWRzIHRoZSBnaXZlbiBzb3VyY2VzXHJcblx0XHQgKiBAcGFyYW0gc3JjcyBhcnJheSwgc2NyaXB0IG9yIGNzc1xyXG5cdFx0ICogQHJldHVybnMgeyp9IFByb21pc2UgdGhhdCB3aWxsIGJlIHJlc29sdmVkIG9uY2UgdGhlIHNvdXJjZXMgaGFzIGJlZW4gbG9hZGVkLlxyXG5cdFx0ICovXHJcblx0XHR0aGlzLmxvYWQgPSBmdW5jdGlvbiAoc3Jjcykge1xyXG5cdFx0XHRzcmNzID0gYW5ndWxhci5pc0FycmF5KHNyY3MpID8gc3JjcyA6IHNyY3Muc3BsaXQoL1xccysvKTtcclxuXHRcdFx0dmFyIHNlbGYgPSB0aGlzO1xyXG5cdFx0XHRpZighcHJvbWlzZSl7XHJcblx0XHRcdFx0cHJvbWlzZSA9IGRlZmVycmVkLnByb21pc2U7XHJcblx0XHRcdH1cclxuICAgICAgYW5ndWxhci5mb3JFYWNoKHNyY3MsIGZ1bmN0aW9uKHNyYykge1xyXG4gICAgICBcdHByb21pc2UgPSBwcm9taXNlLnRoZW4oIGZ1bmN0aW9uKCl7XHJcbiAgICAgIFx0XHRyZXR1cm4gc3JjLmluZGV4T2YoJy5jc3MnKSA+PTAgPyBzZWxmLmxvYWRDU1Moc3JjKSA6IHNlbGYubG9hZFNjcmlwdChzcmMpO1xyXG4gICAgICBcdH0gKTtcclxuICAgICAgfSk7XHJcbiAgICAgIGRlZmVycmVkLnJlc29sdmUoKTtcclxuICAgICAgcmV0dXJuIHByb21pc2U7XHJcblx0XHR9XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBEeW5hbWljYWxseSBsb2FkcyB0aGUgZ2l2ZW4gc2NyaXB0XHJcblx0XHQgKiBAcGFyYW0gc3JjIFRoZSB1cmwgb2YgdGhlIHNjcmlwdCB0byBsb2FkIGR5bmFtaWNhbGx5XHJcblx0XHQgKiBAcmV0dXJucyB7Kn0gUHJvbWlzZSB0aGF0IHdpbGwgYmUgcmVzb2x2ZWQgb25jZSB0aGUgc2NyaXB0IGhhcyBiZWVuIGxvYWRlZC5cclxuXHRcdCAqL1xyXG5cdFx0dGhpcy5sb2FkU2NyaXB0ID0gZnVuY3Rpb24gKHNyYykge1xyXG5cdFx0XHRpZihsb2FkZWRbc3JjXSkgcmV0dXJuIGxvYWRlZFtzcmNdLnByb21pc2U7XHJcblxyXG5cdFx0XHR2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xyXG5cdFx0XHR2YXIgc2NyaXB0ID0gJGRvY3VtZW50WzBdLmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xyXG5cdFx0XHRzY3JpcHQuc3JjID0gc3JjO1xyXG5cdFx0XHRzY3JpcHQub25sb2FkID0gZnVuY3Rpb24gKGUpIHtcclxuXHRcdFx0XHQkdGltZW91dChmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0XHRkZWZlcnJlZC5yZXNvbHZlKGUpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9O1xyXG5cdFx0XHRzY3JpcHQub25lcnJvciA9IGZ1bmN0aW9uIChlKSB7XHJcblx0XHRcdFx0JHRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdFx0ZGVmZXJyZWQucmVqZWN0KGUpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9O1xyXG5cdFx0XHQkZG9jdW1lbnRbMF0uYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpO1xyXG5cdFx0XHRsb2FkZWRbc3JjXSA9IGRlZmVycmVkO1xyXG5cclxuXHRcdFx0cmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcblx0XHR9O1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogRHluYW1pY2FsbHkgbG9hZHMgdGhlIGdpdmVuIENTUyBmaWxlXHJcblx0XHQgKiBAcGFyYW0gaHJlZiBUaGUgdXJsIG9mIHRoZSBDU1MgdG8gbG9hZCBkeW5hbWljYWxseVxyXG5cdFx0ICogQHJldHVybnMgeyp9IFByb21pc2UgdGhhdCB3aWxsIGJlIHJlc29sdmVkIG9uY2UgdGhlIENTUyBmaWxlIGhhcyBiZWVuIGxvYWRlZC5cclxuXHRcdCAqL1xyXG5cdFx0dGhpcy5sb2FkQ1NTID0gZnVuY3Rpb24gKGhyZWYpIHtcclxuXHRcdFx0aWYobG9hZGVkW2hyZWZdKSByZXR1cm4gbG9hZGVkW2hyZWZdLnByb21pc2U7XHJcblxyXG5cdFx0XHR2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xyXG5cdFx0XHR2YXIgc3R5bGUgPSAkZG9jdW1lbnRbMF0uY3JlYXRlRWxlbWVudCgnbGluaycpO1xyXG5cdFx0XHRzdHlsZS5yZWwgPSAnc3R5bGVzaGVldCc7XHJcblx0XHRcdHN0eWxlLnR5cGUgPSAndGV4dC9jc3MnO1xyXG5cdFx0XHRzdHlsZS5ocmVmID0gaHJlZjtcclxuXHRcdFx0c3R5bGUub25sb2FkID0gZnVuY3Rpb24gKGUpIHtcclxuXHRcdFx0XHQkdGltZW91dChmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0XHRkZWZlcnJlZC5yZXNvbHZlKGUpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9O1xyXG5cdFx0XHRzdHlsZS5vbmVycm9yID0gZnVuY3Rpb24gKGUpIHtcclxuXHRcdFx0XHQkdGltZW91dChmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0XHRkZWZlcnJlZC5yZWplY3QoZSk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH07XHJcblx0XHRcdCRkb2N1bWVudFswXS5oZWFkLmFwcGVuZENoaWxkKHN0eWxlKTtcclxuXHRcdFx0bG9hZGVkW2hyZWZdID0gZGVmZXJyZWQ7XHJcblxyXG5cdFx0XHRyZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuXHRcdH07XHJcbn1dKTsiLCJhbmd1bGFyLm1vZHVsZSgndWlEaXJlY3QnKVxyXG4gICAgLmRpcmVjdGl2ZSgndWlJbnB1dCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICByZXN0cmljdDogJ0UnLFxyXG4gICAgICAgICAgICBzY29wZToge1xyXG4gICAgICAgICAgICAgICAgdmFsOiAnPSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcmVwbGFjZTogdHJ1ZSxcclxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvZGlyZWN0aXZlcy93aWRnZXQvaW5wdXQvaW5wdXQuaHRtbCcsXHJcbiAgICAgICAgICAgIGxpbms6ZnVuY3Rpb24oJHNjb3BlLCBlbGVtLCBhdHRyLCBjdHJsKXtcclxuXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6IGZ1bmN0aW9uICgkc2NvcGUsICRlbGVtZW50LCAkYXR0cnMpIHtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfSk7XHJcblxyXG4iXX0=
