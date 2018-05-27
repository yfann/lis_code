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
    'commonService',
    'uiDirect'
]);

angular.module('uiDirect',[]);

angular.module('commonService',[]);

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
        suffix: '.js'
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

app.constant('config', {
  host: 'http://localhost:8123'
});
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
                    .state('app.analyze', {
                        url: '/analyze',
                        params: {
                            data: null
                        },
                        templateUrl: 'tpl/analyze/analyze.html',
                        controller: 'AnalyzeCtrl'
                    })
                    .state('app.change_pwd', {
                        url: '/change_pwd',
                        params: {
                            data: null
                        },
                        templateUrl: 'tpl/user/change_pwd.html',
                        controller: 'UserCtrl'
                    })
                    .state('login', {
                        url: '/login',
                        params: {
                            data: null
                        },
                        templateUrl: 'tpl/user/login.html',
                        controller: 'UserCtrl'
                    })
                    .state('labresult_print', {
                        url: '/labresult_print',
                        params: {
                            id: null
                        },
                        templateUrl: 'tpl/labresult/labresult_print.html',
                        controller: 'LabresultPrintCtrl'
                    })
                    .state('logistics_print', {
                        url: '/logistics_print',
                        params: {
                            data: null,
                            type: null
                        },
                        templateUrl: 'tpl/logistics/logistics_print.html',
                        controller: 'LogisticsPrintCtrl'
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
app.controller('AnalyzeCtrl', ['$scope', '$modal', '$state', 'dataService', 'util', function ($scope, $modal, $state, dataService, util) {


    $scope.search = function () {

    };

    $scope.model = {
        selectedSite: null
    };
    $scope.siteList = null;

    dataService.getSiteList().then(function (result) {
        $scope.siteList = result.data;
    });
}]);
app.controller('CategoryListCtrl', ['$scope', '$state', 'dataService', function ($scope, $state, dataService) {

    var link = 'app.category_detail';
    var editUrl = '<a class="edit-tpl" ui-sref="' + link + '({id: row.entity.id})">编辑</a>';
    editUrl += '<a class="delete-tpl" ng-click="grid.appScope.delete(row.entity)">删除</a>';

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
                field: 'barcodePre',
                displayName: '代码前缀'
            },
            {
                field: 'externalCode',
                displayName: '外部代码'
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

    $scope.delete = function (obj) {
        dataService.deleteLabCategory(obj).then(function () {
            for (var i = 0; i < $scope.gridOptions.data.length; i++) {
                if ($scope.gridOptions.data[i].id == obj.id) {
                    $scope.gridOptions.data.splice(i, 1);
                    break
                }
            }
        });;
    };

    $scope.filter = function (renderableRows) {
        var matcher = new RegExp($scope.filterValue);
        renderableRows.forEach(function (row) {
            var match = false;
            ['lcCode', 'lcName', 'barcodePre', 'externalCode'].forEach(function (field) {
                var entity = row.entity[field] + '';
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


    if ($stateParams.id) {
        dataService.getLabCategoryById($stateParams.id).then(function (result) {
            if (result.data) {
                $scope.model = result.data;
            }
        });
    }

    $scope.submit = function () {
        //console.log($scope.model);
        dataService.saveLabCategory($scope.model).then(function () {
            $state.go('app.category');
        });
    };

}]);
app.controller('CrisisListCtrl', ['$scope', '$state', 'dataService', function ($scope, $state, dataService) {
    // var tpl = '<button id="editBtn" type="button" class="btn-small" ng-click="grid.appScope.go(row.entity)" >Edit</button>';
    // $scope.go = function (rowData) {
    //     $state.go('app.crisis_detail', { id: rowData.id });
    // }

    var editUrl = '<a class="edit-tpl" ui-sref="app.crisis_detail({id: row.entity.id})">编辑</a><a class="delete-tpl" ng-click="grid.appScope.delete(row.entity)">删除</a>'

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
                field: 'labItem.itemName',
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

    $scope.delete = function (obj) {
        dataService.deleteCrisis(obj).then(function () {
            for (var i = 0; i < $scope.gridOptions.data.length; i++) {
                if ($scope.gridOptions.data[i].id == obj.id) {
                    $scope.gridOptions.data.splice(i, 1);
                    break
                }
            }
        });
    };

    $scope.filter = function (renderableRows) {
        var matcher = new RegExp($scope.filterValue);
        renderableRows.forEach(function (row) {
            var match = false;
            ['labItem.itemName', 'normalUpper','normalLow'].forEach(function (field) {
                var entity = row.entity;
                field.split('.').forEach(function (f) {
                    entity = entity[f];
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
}]);

app.controller('CrisisDetailCtrl', ['$scope', '$state', '$stateParams', 'dataService', function ($scope, $state, $stateParams, dataService) {
    //console.log($stateParams);
    $scope.model = {
        id: null,
        lmId: null,
        normalUpper: null,
        normalLow: null,
        crisisUpper: null,
        crisisLow: null,
        crisisClinical: null,
        clinicasSignificance: null,
        selectedlabItem: null
    };
    $scope.labItemList = null;
    dataService.getlabitemList().then(function (result) {
        $scope.labItemList = result.data;
        if ($stateParams.id) {
            dataService.getCrisisById($stateParams.id).then(function (result) {
                if (result.data) {
                    $scope.model = result.data;
                    for (var i = 0; i < $scope.labItemList.length; i++) {
                        if ($scope.labItemList[i].id == $scope.model.lmId) {
                            $scope.model.selectedlabItem = $scope.labItemList[i];
                        }
                    }
                }
            });
        }
    });



    $scope.submit = function () {
        //console.log($scope.model);
        if ($scope.model.selectedlabItem) {
            $scope.model.lmId = $scope.model.selectedlabItem.id;
        }
        dataService.saveCrisis($scope.model).then(function () {
            $state.go('app.crisis');
        });
    };

}]);
app.controller('DepartListCtrl', ['$scope', '$state', 'dataService', function ($scope, $state, dataService) {
    var editUrl = '<a class="edit-tpl" ui-sref="app.depart_detail({id: row.entity.id})">编辑</a>';
    editUrl += '<a class="delete-tpl" ng-click="grid.appScope.delete(row.entity)">删除</a>';

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
                field: 'miName',
                displayName: '机构名称'
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

    $scope.delete = function (obj) {
        dataService.deleteDept(obj).then(function () {
            for (var i = 0; i < $scope.gridOptions.data.length; i++) {
                if ($scope.gridOptions.data[i].id == obj.id) {
                    $scope.gridOptions.data.splice(i, 1);
                    break
                }
            }
        });
    };

    $scope.filter = function (renderableRows) {
        var matcher = new RegExp($scope.filterValue);
        renderableRows.forEach(function (row) {
            var match = false,depMatch=false;
            if($scope.model.selectedSite){
                if(row.entity['miName']==$scope.model.selectedSite.miName){
                    depMatch=true;
                }else{
                    depMatch=false;
                }

            }else{
                depMatch=true;
            }

            ['deptCode','miName'].forEach(function (field) {
                var entity= row.entity[field]+'';
                if (entity.match(matcher)) {
                    match = true && depMatch;
                }
            });
            if (!match) {
                row.visible = false;
            }
        });
        return renderableRows;
    };

    $scope.model = {
        selectedSite: null
    };
    $scope.siteList = null;

    dataService.getSiteList().then(function (result) {
        $scope.siteList = result.data;
    });
}]);

app.controller('DepartDetailCtrl', ['$scope', '$state', '$stateParams', 'dataService', function ($scope, $state, $stateParams, dataService) {
    //console.log($stateParams);
    $scope.model = {
        id: null,
        siteId: null,
        deptCode: null,
        deptName: null,
        desc: null,
        selectedSite: null
    };
    $scope.siteList = null;

    dataService.getSiteList().then(function (result) {
        $scope.siteList = result.data;
        if ($stateParams.id) {
            dataService.getDeptById($stateParams.id).then(function (result) {
                if (result.data) {
                    $scope.model = result.data;
                    for (var i = 0; i < $scope.siteList.length; i++) {
                        if ($scope.siteList[i].id == $scope.model.siteId) {
                            $scope.model.selectedSite = $scope.siteList[i];
                        }
                    }
                }
            });
        }
    });



    $scope.submit = function () {
        //console.log($scope.model);
        if ($scope.model.selectedSite) {
            $scope.model.siteId = $scope.model.selectedSite.id;
        }
        dataService.saveDept($scope.model).then(function (result) {
            $state.go('app.depart');
        });
    };

}]);
app.controller('EmployeeListCtrl', ['$scope', '$state', 'dataService', function ($scope, $state, dataService) {

    var link = 'app.employee_detail';
    var editUrl = '<a class="edit-tpl" ui-sref="' + link + '({id: row.entity.id})">编辑</a>';
    editUrl += '<a class="delete-tpl" ng-click="grid.appScope.delete(row.entity)">删除</a>';

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
                field: 'idNumber',
                displayName: '身份证号'
            },
            {
                field: 'miName',
                displayName: '机构名称'
            },
            {
                field: 'deptName',
                displayName: '科室名称'
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

    $scope.delete = function (obj) {
        dataService.deleteEmployee(obj).then(function () {
            for (var i = 0; i < $scope.gridOptions.data.length; i++) {
                if ($scope.gridOptions.data[i].id == obj.id) {
                    $scope.gridOptions.data.splice(i, 1);
                    break
                }
            }
        });
    };

    $scope.filter = function (renderableRows) {
        var matcher = new RegExp($scope.filterValue);
        renderableRows.forEach(function (row) {
            var match = false;
            ['emCode', 'emName', 'titleName', 'idNumber', 'miName', 'deptName'].forEach(function (field) {
                var entity = row.entity[field] + '';
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
}]);

app.controller('EmployeeDetailCtrl', ['$scope', '$state', '$stateParams', 'dataService', '$q', function ($scope, $state, $stateParams, dataService, $q) {
    //console.log($stateParams);
    $scope.model = {

        id: null,
        siteId: null,
        deptId: null,
        emCode: null,
        emName: null,
        idNumber: null,
        phone: null,
        titleId: null,
        titleName: null,
        password: null,
        desc: null,
        birthDay: null,
        selectedSite: null,
        selectedDept: null
    };

    $scope.siteList = null;
    $scope.deptList = null;
    $scope.selectedSex = null;

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

    if ($stateParams.id) {
        $q.all([
            dataService.getSiteList(),
            dataService.getDeptList(),
            dataService.getEmployeeById($stateParams.id)
        ]).then(function (result) {
            $scope.siteList = result[0].data;
            $scope.deptList = result[1].data;
            $scope.model = result[2].data;
            $scope.model.password1 = $scope.model.password;
            if ($scope.siteList) {
                $scope.siteList.forEach(function (item) {
                    if (item.id == $scope.model.siteId) {
                        $scope.model.selectedSite = item;
                    }
                });
            }
            if ($scope.deptList) {
                $scope.deptList.forEach(function (item) {
                    if (item.id == $scope.model.deptId) {
                        $scope.model.selectedDept = item;
                    }
                });
            }
        });
    } else {
        dataService.getSiteList().then(function (result) {
            $scope.siteList = result.data;
        });
        dataService.getDeptList().then(function (result) {
            $scope.deptList = result.data;
        });
    }



    $scope.submit = function () {
        //console.log($scope.model);
        if ($scope.model.selectedSite) {
            $scope.model.siteId = $scope.model.selectedSite.id;
        }
        if ($scope.model.selectedDept) {
            $scope.model.deptId = $scope.model.selectedDept.id;
        }

        dataService.saveEmployee($scope.model).then(function () {
            $state.go('app.employee');
        });
    };

}]);
app.controller('LabitemListCtrl', ['$scope', '$state', 'dataService', function ($scope, $state, dataService) {

    var link = 'app.labitem_detail';
    var editUrl = '<a class="edit-tpl" ui-sref="' + link + '({id: row.entity.id})">编辑</a>';
    editUrl += '<a class="delete-tpl" ng-click="grid.appScope.delete(row.entity)">删除</a>';

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
                displayName: '检验分类'
            },
            {
                field: 'itemName',
                displayName: '项目名称'
            },
            {
                field: 'category',
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

    $scope.delete = function (obj) {
        dataService.deleteLabItem(obj).then(function () {
            for (var i = 0; i < $scope.gridOptions.data.length; i++) {
                if ($scope.gridOptions.data[i].id == obj.id) {
                    $scope.gridOptions.data.splice(i, 1);
                    break
                }
            }
        });
    };

    $scope.filter = function (renderableRows) {
        var matcher = new RegExp($scope.filterValue);
        renderableRows.forEach(function (row) {
            var match = false;
            ['itemCode', 'itemName', 'standardCode'].forEach(function (field) {
                var entity = row.entity[field] + '';
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
}]);

app.controller('LabitemDetailCtrl', ['$scope', '$state', '$stateParams', 'dataService', '$q', function ($scope, $state, $stateParams, dataService, $q) {
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
        desc: null,
        selectedLabCategory: null
    };
    $scope.labCategoryList = null;


    if ($stateParams.id) {
        $q.all([
            dataService.getLabCategoryList(),
            dataService.getLabItemById($stateParams.id)
        ]).then(function (result) {
            $scope.labCategoryList = result[0].data;
            $scope.model = result[1].data;
            if ($scope.labCategoryList) {
                $scope.labCategoryList.forEach(function (item) {
                    if (item.id == $scope.model.lcId) {
                        $scope.model.selectedLabCategory = item;
                    }
                });
            }
        });
    } else {
        dataService.getLabCategoryList().then(function (result) {
            $scope.labCategoryList = result.data;
        });
    }

    $scope.submit = function () {
        //console.log($scope.model);
        if ($scope.model.selectedLabCategory) {
            $scope.model.lcId = $scope.model.selectedLabCategory.id;
        }
        dataService.saveLabitem($scope.model).then(function () {
            $state.go('app.labitem');
        });
    };

}]);
app.controller('LabItemSetListCtrl', ['$scope', '$state', 'dataService', function ($scope, $state, dataService) {

    var link = 'app.labitemset_detail';
    var editUrl = '<a class="edit-tpl" ui-sref="' + link + '({id: row.entity.id})">编辑</a>';
    editUrl += '<a class="delete-tpl" ng-click="grid.appScope.delete(row.entity)">删除</a>';

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
                field: 'labItemString',
                displayName: '包含项目'
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
        dataService.deleteLabItemSet(obj).then(function () {
            for (var i = 0; i < $scope.gridOptions.data.length; i++) {
                if ($scope.gridOptions.data[i].id == obj.id) {
                    $scope.gridOptions.data.splice(i, 1);
                    break
                }
            }
        });
    };

    $scope.filter = function (renderableRows) {
        var matcher = new RegExp($scope.filterValue);
        renderableRows.forEach(function (row) {
            var match = false;
            ['lisName', 'lisCode','labItemString'].forEach(function (field) {
                var entity = row.entity[field] + '';
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
}]);

app.controller('LabItemSetDetailCtrl', ['$scope', '$state', '$stateParams', 'dataService', function ($scope, $state, $stateParams, dataService) {

    $scope.model = {
        labItems: [],
        lisCode: null,
        lisName: null,
        comment: null,
    };

    $scope.selectedlabItem = null;
    $scope.labItemList = null;

    dataService.getlabitemList().then(function (result) {
        $scope.labItemList = result.data;
        if ($stateParams.id) {
            dataService.getLabItemSetById($stateParams.id).then(function (result) {
                if (result.data) {
                    $scope.model = result.data;
                    if ($scope.model.labItems && $scope.model.labItems.length > 0 &&
                        $scope.labItemList && $scope.labItemList.length > 0) {
                        var list = [];
                        $scope.model.labItems.forEach(function (item) {
                            $scope.labItemList.forEach(function (lab) {
                                if (item.id == lab.id) {
                                    list.push(lab);
                                }
                            });
                        });
                        $scope.model.labItems = list;
                    }
                }
            });
        }
    });

    $scope.submit = function () {
        dataService.saveLabItemSet($scope.model).then(function () {
            $state.go('app.labitemset');
        });
    };

}]);
app.controller('LabresultListCtrl', ['$scope', '$state', 'dataService', 'util', '$location', function ($scope, $state, dataService, util,$location) {
    var editUrl = '<a class="edit-tpl" ui-sref="labresult_print({id: row.entity.id})">查看</a>'

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
                name: 'edit',
                displayName: '操作',
                cellTemplate: editUrl
            }
        ]
    };
    var params=$location.search();
    if(params.reid){
        debugger
    }else{
        dataService.getRequestList().then(function (result) {
            result.data.forEach(function (item) {
                item.formatedReqTime = util.formateDate(item.reqTime);
            });
            $scope.gridOptions.data = result.data;
        });
    }



    $scope.search = function () {
        $scope.gridApi.grid.refresh();
    };

    $scope.create = function () {
        $state.go('app.labresult_detail');
    };

    $scope.filter = function (renderableRows) {
        var matcher = new RegExp($scope.filterValue);
        renderableRows.forEach(function (row) {
            var match = false;
            ['requestNo', 'patient.ptName','miName'].forEach(function (field) {
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

    $scope.model = {
        selectedSite: null
    };
    $scope.siteList = null;

    dataService.getSiteList().then(function (result) {
        $scope.siteList = result.data;
    });

}]);

app.controller('LabresultDetailCtrl', ['$scope', '$state', '$stateParams', 'dataService', function ($scope, $state, $stateParams, dataService) {

    $scope.data = {
        selectedlabItem: null
    };
    dataService.getRequestList().then(function (result) {
        $scope.itemList = result.data;
    });

    $scope.$watch('data.selectedlabItem', function (newV, oldV) {
        if (newV) {
            dataService.getRequestById(newV.id).then(function (result) {
                $scope.model = result.data;
                if ($scope.model.labInfos) {
                    $scope.model.labInfos.forEach(function (item) {
                        //init list
                        if(!item.labResult){
                            item.labResult={};
                        }
                    });
                }
            });
        }
    });

    $scope.submit = function () {
        dataService.saveLabResult($scope.model.labInfos).then(function(){
            $state.go('app.labresult');
        });
    };
}]);

app.controller('LabresultPrintCtrl', ['$scope', '$state', '$stateParams', 'dataService', function ($scope, $state, $stateParams, dataService) {
    
    if ($stateParams.id) {
        dataService.getRequestById($stateParams.id).then(function (result) {
            $scope.model = result.data;
        });
    }
}]);
app.controller('LogisticsListCtrl', ['$scope', '$modal', '$state', 'dataService', 'util', function ($scope, $modal, $state, dataService, util) {

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
                field: 'sendEmName',
                displayName: '送检人'
            },
            {
                field: 'lsEmName',
                displayName: '物流接收人'
            },
            {
                field: 'centerEmName',
                displayName: '检验中心接收人'
            },
            {
                field: 'miName',
                displayName: '机构名称'
            },
            {
                field: 'formatedSendTime',
                displayName: '送检时间'
            },
            {
                field: 'lsStatusName',
                displayName: '物流状态'
            }
        ]
    };

    $scope.reload = function () {
        dataService.getLogiList().then(function (result) {
            result.data.forEach(function (item) {
                item.formatedSendTime = util.formateDate(item.sendTime);
                item.lsStatusName = util.getLogisticsStatus(item.lsStatus);
            });

            $scope.gridOptions.data = result.data;
        });
    };

    $scope.reload();

    $scope.search = function () {
        $scope.gridApi.grid.refresh();
    };

    $scope.filter = function (renderableRows) {
        var matcher = new RegExp($scope.filterValue);
        renderableRows.forEach(function (row) {
            var match = false;
            ['sendEmName', 'lsEmName', 'centerEmName', 'lsStatusName'].forEach(function (field) {
                var entity = row.entity[field] + '';
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

    $scope.accept = function () {

    };

    $scope.reject = function () {

    };

    $scope.openAcceptDialog = function () {
        $modal.open({
            templateUrl: '/app/tpl/dialog/accept_sample_dialog.html',
            controller: 'SampleDialogCtrl',
            size: 'lg',
            resolve: {
                grid: function () {
                    return {
                        reload: $scope.reload
                    }
                }
            }
        });
    };

    $scope.openSendDialog = function () {
        $modal.open({
            templateUrl: '/app/tpl/dialog/send_sample_dialog.html',
            controller: 'SampleDialogCtrl',
            size: 'lg',
            resolve: {
                grid: function () {
                    return {
                        reload: $scope.reload
                    }
                }
            }
        });
    };

    $scope.model = {
        selectedSite: null
    };
    $scope.siteList = null;

    dataService.getSiteList().then(function (result) {
        $scope.siteList = result.data;
    });
}]);

app.controller('SampleDialogCtrl', ['$scope', '$state', '$modalInstance', 'dataService', 'grid', function ($scope, $state, $modalInstance, dataService, grid) {
    $scope.sampleNo = null;
    $scope.focusFlag = 1;
    $scope.model = {
        selectedSendUser: null,
        selectedAcceptUser: null,
        selectedCenterAcceptUser: null,
        sendEmId: null,
        lsEmId: null,
        centerEmId: null,
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
    $scope.sendSample = function () {
        $scope.setModel();
        dataService.sendLogi($scope.model).then(function (result) {
            grid.reload();
            // var url = $state.href('logistics_print', { data: $scope.model });
            // window.open(window.location.href.split('#')[0] + url, '_blank');
            $state.go('logistics_print', { data: result, type: 'send' });
            $modalInstance.close();
        });
    };
    $scope.acceptSample = function () {
        $scope.setModel();
        dataService.acceptLogi($scope.model).then(function (result) {
            grid.reload();
            // var url = $state.href('logistics_print', { data: $scope.model });
            // window.open(window.location.href.split('#')[0] + url, '_blank');
            $state.go('logistics_print', { data: result, type: 'receive' });
            $modalInstance.close();
        });
    }
    $scope.setModel = function () {
        if ($scope.model.selectedSendUser) {
            $scope.model.sendEmId = $scope.model.selectedSendUser.id;
        }
        if ($scope.model.selectedAcceptUser) {
            $scope.model.lsEmId = $scope.model.selectedAcceptUser.id;
        }
        if ($scope.model.selectedCenterAcceptUser) {
            $scope.model.centerEmId = $scope.model.selectedCenterAcceptUser.id;
        }
    };
}]);


app.controller('LogisticsPrintCtrl', ['$scope', '$stateParams', 'util', function ($scope, $stateParams, util) {
    $scope.data = $stateParams.data;

    $scope.model = {
        sendEm: '',
        lsEm: '',
        centerEm: '',
        barCodes: [],
        isSend: false,
        isReceive: false,
        receiveTime: null,
        status: null,
        title: null,
        receiveTimeLabel: null
    };

    if ($stateParams.data && $stateParams.data.data) {
        $scope.model.sendEm = $stateParams.data.data.sendEmName;
        $scope.model.lsEm = $stateParams.data.data.lsEmName;
        $scope.model.centerEm = $stateParams.data.data.centerEmName;
        $scope.model.receiveTime = util.formateDate($stateParams.data.data.receiveTime);
    }
    if ($stateParams.data && $stateParams.data.data.labSamples) {
        $scope.model.barCodes = $stateParams.data.data.labSamples.map(function (item) {
            return item.barCode;
        });
    }

    if ($stateParams.type == 'send') {
        $scope.model.isSend = true;
        $scope.model.status = '物流已接收';
        $scope.model.title = '送检单';
        $scope.model.receiveTimeLabel = '送检时间:';
    } else {
        $scope.model.isReceive = true;
        $scope.model.status = '中心已接收';
        $scope.model.title = '接收单';
        $scope.model.receiveTimeLabel = '接收时间:';
    }


}]);

app.controller('MedicalListCtrl', ['$scope', '$state', 'dataService', function ($scope, $state, dataService) {

    var link = 'app.medical_detail';
    var editUrl = '<a class="edit-tpl" ui-sref="' + link + '({id: row.entity.id})">编辑</a>';
    editUrl += '<a class="delete-tpl" ng-click="grid.appScope.delete(row.entity)">删除</a>';

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
                field: 'parentName',
                displayName: '上级机构'
            },
            {
                name: 'edit',
                displayName: '操作',
                cellTemplate: editUrl
            }
        ]
    };
    $scope.model = {
        selectedParentSite: null
    };
    $scope.parentSiteList = null;

    dataService.getSiteList().then(function (result) {
        $scope.gridOptions.data = result.data;
        $scope.parentSiteList = result.data.filter(function (item) {
            return item.parentId == null;
        });
    });

    $scope.search = function () {
        $scope.gridApi.grid.refresh();
    };

    $scope.create = function () {
        $state.go(link);
    };

    $scope.delete = function (obj) {
        dataService.deleteSite(obj).then(function () {
            for (var i = 0; i < $scope.gridOptions.data.length; i++) {
                if ($scope.gridOptions.data[i].id == obj.id) {
                    $scope.gridOptions.data.splice(i, 1);
                    break
                }
            }
        });
    };

    $scope.filter = function (renderableRows) {
        var matcher = new RegExp($scope.filterValue);
        renderableRows.forEach(function (row) {
            var match = false;
            ['miCode', 'miName', 'miCategory'].forEach(function (field) {
                var entity = row.entity[field] + '';
                if (entity.match(matcher)) {
                    match = true;
                }
            });
            if ($scope.model.selectedParentSite) {
                if (row.entity['parentName'] == $scope.model.selectedParentSite.miName) {

                } else {
                    match = false;
                }
            }

            if (!match) {
                row.visible = false;
            }
        });
        return renderableRows;
    };
}]);

app.controller('MedicalDetailCtrl', ['$scope', '$state', '$stateParams', 'dataService', '$q', function ($scope, $state, $stateParams, dataService, $q) {
    $scope.model = {
        id: null,
        miCode: null,
        miName: null,
        miCategory: null,
        areaCode: null,
        address: null,
        desc: null,
        selectedParentSite: null,
        parentId: null,
        parentName: null
    };
    $scope.parentSiteList = null;
    $scope.isTopMI = false;

    if ($stateParams.id) {
        $q.all([
            dataService.getSiteList(),
            dataService.getSiteById($stateParams.id)
        ]).then(function (result) {
            if (result[0].data && result[0].data.length > 0) {
                $scope.parentSiteList = result[0].data.filter(function (item) {
                    return item.parentId == null && item.id != $stateParams.id;
                });
                result[0].data.forEach(function (item) {
                    if (item.parentId == $stateParams.id) {
                        $scope.isTopMI = true;
                    }
                });
            }

            if (result[1].data) {
                $scope.model = result[1].data;
                if ($scope.model.parentId) {
                    for (var i = 0; i < $scope.parentSiteList.length; i++) {
                        if ($scope.parentSiteList[i].id == $scope.model.parentId) {
                            $scope.model.selectedParentSite = $scope.parentSiteList[i];
                        }
                    }
                }
            }
        });
    } else {
        dataService.getSiteList().then(function (result) {
            if (result.data && result.data.length > 0) {
                $scope.parentSiteList = result.data.filter(function (item) {
                    return item.parentId == null;
                });
            }
        });
    }



    $scope.submit = function () {
        //console.log($scope.model);
        if ($scope.model.selectedParentSite) {
            $scope.model.parentId = $scope.model.selectedParentSite.id;
            $scope.model.parentName = $scope.model.selectedParentSite.miName;
        }
        dataService.saveSite($scope.model).then(function () {
            $state.go('app.medical');
        });
    };

}]);
app.controller('PatientListCtrl', ['$scope', '$state', 'dataService', function ($scope, $state, dataService) {

    var link='app.patient_detail';
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

    $scope.delete = function (obj) {
        dataService.deletePatient(obj).then(function(){
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
app.controller('QcvalueListCtrl', ['$scope', '$state', 'dataService', 'util', function ($scope, $state, dataService, util) {

    var link = 'app.qcvalue_detail';
    var editUrl = '<a class="edit-tpl" ui-sref="' + link + '({id: row.entity.id})">编辑</a>';
    editUrl += '<a class="delete-tpl" ng-click="grid.appScope.delete(row.entity)">删除</a>';

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
                field: 'labItemName',
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
        result.data.forEach(function (item) {
            item.qcTime = util.formateDate(item.qcTime);
        });

        $scope.gridOptions.data = result.data;
    });

    $scope.search = function () {
        $scope.gridApi.grid.refresh();
    };

    $scope.create = function () {
        $state.go(link);
    };

    $scope.delete = function (obj) {
        dataService.deleteQCValue(obj).then(function () {
            for (var i = 0; i < $scope.gridOptions.data.length; i++) {
                if ($scope.gridOptions.data[i].id == obj.id) {
                    $scope.gridOptions.data.splice(i, 1);
                    break
                }
            }
        });
    };

    $scope.filter = function (renderableRows) {
        var matcher = new RegExp($scope.filterValue);
        renderableRows.forEach(function (row) {
            var match = false;
            ['miName','instrumentName','labItemName'].forEach(function (field) {
                var entity = row.entity[field] + '';
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
}]);

app.controller('QcvalueDetailCtrl', ['$scope', '$state', '$stateParams', 'dataService', '$q', function ($scope, $state, $stateParams, dataService, $q) {

    $scope.model = {
        id: null,
        lmId: null,
        miId: null,
        instrumentId: '',
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
        other6: null,
        selectedLabItem: null,
        selectedSite: null,
        selectedQcer: null
    };

    $scope.labItemList = null;
    $scope.siteList = null;
    $scope.userList = null;

    $scope.siteList = null;
    $scope.deptList = null;
    $scope.selectedSex = null;

    $scope.dateOptions = {
        formatYear: 'yy',
        startingDay: 1,
        class: 'datepicker'
    };

    $scope.qcOpen = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
        $scope.qcOpened = true;
    };

    if ($stateParams.id) {
        $q.all([
            dataService.getlabitemList(),
            dataService.getSiteList(),
            dataService.getQCValueById($stateParams.id),
            dataService.getEmployeeList()
        ]).then(function (result) {
            $scope.labItemList = result[0].data;
            $scope.siteList = result[1].data;
            $scope.model = result[2].data;
            $scope.userList = result[3].data;
            if ($scope.labItemList) {
                $scope.labItemList.forEach(function (item) {
                    if (item.id == $scope.model.lmId) {
                        $scope.model.selectedLabItem = item;
                    }
                });
            }
            if ($scope.siteList) {
                $scope.siteList.forEach(function (item) {
                    if (item.id == $scope.model.miId) {
                        $scope.model.selectedSite = item;
                    }
                });
            }
            if ($scope.userList) {
                $scope.userList.forEach(function (item) {
                    if (item.id == $scope.model.qcer) {
                        $scope.model.selectedQcer = item;
                    }
                });
            }
            // if($scope.model.qcTime){
            //     $scope.model.qcTime=new Date($scope.model.qcTime);
            // }
        });
    } else {
        dataService.getlabitemList().then(function (result) {
            $scope.labItemList = result.data;
        });
        dataService.getSiteList().then(function (result) {
            $scope.siteList = result.data;
        });
    }

    $scope.submit = function () {
        //console.log($scope.model);
        if ($scope.model.selectedLabItem) {
            $scope.model.lmId = $scope.model.selectedLabItem.id;
        }
        if ($scope.model.selectedSite) {
            $scope.model.miId = $scope.model.selectedSite.id;
        }
        if ($scope.model.selectedQcer) {
            $scope.model.qcer = $scope.model.selectedQcer.id;
        }
        dataService.saveQCValue($scope.model).then(function () {
            $state.go('app.qcvalue');
        });
    };

}]);
app.controller('RequestListCtrl', ['$scope', '$modal', '$state', 'dataService', 'util', function ($scope, $modal, $state, dataService, util) {
    $scope.model = {
        filterValue: null,
        startTime: new Date(),
        endTime: new Date(),
        startOpened: false,
        endOpened: false,
        selectedSite: null
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
            //$scope.gridApi.grid.registerRowsProcessor($scope.filter, 200);
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
                field: 'reStatusName',
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
        dataService.getRequestList($scope.model.filterValue, util.formateDate($scope.model.startTime), util.formateDate($scope.model.endTime)).then(function (result) {
            result.data.forEach(function (item) {
                item.formatedReqTime = util.formateDate(item.reqTime);
                item.reStatusName = util.getRequestStatus(item.reStatus);
            });

            $scope.gridOptions.data = result.data;
        });
    };

    $scope.search = function () {
        //$scope.gridApi.grid.refresh();
        $scope.gridOptions.data = null;
        $scope.load();
    };

    $scope.filter = function (renderableRows) {
        var matcher = new RegExp($scope.model.filterValue);
        renderableRows.forEach(function (row) {
            var match = false;
            ['requestNo', 'patient.ptName', 'miName', 'reStatusName'].forEach(function (field) {
                var entity = row.entity;
                field.split('.').forEach(function (f) {
                    if (entity[f]) {
                        entity = entity[f];
                    }
                });
                entity = entity + '';
                if ($scope.model.filterValue && entity.match(matcher)) {
                    match = true;
                } else if ($scope.model.filterValue == null || $scope.model.filterValue == '') {
                    match = true;
                }

            });
            var time = row.entity['formatedReqTime'];
            var current = time ? new Date(time).getTime() : null;

            if ($scope.model.startTime && current) {
                var start = new Date($scope.model.startTime).getTime();
                if (start > current) {
                    match = false;
                }
            }
            if ($scope.model.endTime && current) {
                var end = new Date($scope.model.endTime).getTime();
                if (current > end) {
                    match = false;
                }
            }

            if (($scope.model.startTime || $scope.model.endTime) && !current) {
                match = false;
            }



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


    $scope.siteList = null;

    dataService.getSiteList().then(function (result) {
        $scope.siteList = result.data;
    });

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
                result.data.reStatusName = util.getRequestStatus(result.data.reStatus);
                $scope.model = result.data;
            }
        });
    }
}]);
app.controller('SampleTypeListCtrl', ['$scope', '$state', 'dataService', function ($scope, $state, dataService) {

    var link = 'app.sampletype_detail';
    var editUrl = '<a class="edit-tpl" ui-sref="' + link + '({id: row.entity.id})">编辑</a>';
    editUrl += '<a class="delete-tpl" ng-click="grid.appScope.delete(row.entity)">删除</a>';

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

    $scope.delete = function (obj) {
        dataService.deleteSampleType(obj).then(function () {
            for (var i = 0; i < $scope.gridOptions.data.length; i++) {
                if ($scope.gridOptions.data[i].id == obj.id) {
                    $scope.gridOptions.data.splice(i, 1);
                    break
                }
            }
        });
    };

    $scope.filter = function (renderableRows) {
        var matcher = new RegExp($scope.filterValue);
        renderableRows.forEach(function (row) {
            var match = false;
            ['code', 'chtName', 'engName', 'seqNo'].forEach(function (field) {
                var entity = row.entity[field] + '';
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
}]);

app.controller('SampleTypeDetailCtrl', ['$scope', '$state', '$stateParams', 'dataService', function ($scope, $state, $stateParams, dataService) {

    $scope.model = {
        id: null,
        parentId: null,
        code: null,
        chtName: null,
        engName: null,
        seqNo: null,
        helpCode: null
    };

    if ($stateParams.id) {
        dataService.getSampleTypeById($stateParams.id).then(function (result) {
            if (result.data) {
                $scope.model = result.data;
            }
        });
    }


    $scope.submit = function () {
        console.log($scope.model);
        dataService.saveSampleType($scope.model).then(function () {
            $state.go('app.sampletype');
        });
    };

}]);
app.controller('UserCtrl', ['$scope', '$modal', '$state', 'dataService', 'util', function ($scope, $modal, $state, dataService, util) {


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

angular.module('commonService').
    service('enumService', [function () {
        return {
            "request_st": {
                "1": "申请单已提交",
                "2": "申请单已拒绝",
                "3": "申请单已接收",
                "4": "中心样本已接收",
                "5": "检验中",
                "6": "检验已完成",
                "7": "检验报告已完成",
                "8": "检验报告已审核",
                "9": "检验报告已上传中心"
            },
            "logistics_st": {
                "1": "物流已接收",
                "2": "检验中心已接收"
            }
        };
    }]);

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


// angular.module('httpService', []).
//     service('mockService', ['$q', '$timeout', '$http', '$state',
//         function ($q, $timeout, $http, $state) {
//             this.get = function (url, params) {
//                 var deferred = $q.defer();
//                 url = "/mock_data/" + url + ".json";
//                 //view.loading();
//                 $http.get(url).then(function (result) {
//                     var d = result.data;
//                     if (d.status == 0) {
//                         deferred.resolve(d.data);
//                     } else {
//                         switch (d.status) {
//                             default:
//                                 // view.alert(result.msg);
//                                 //$state.go("login");
//                                 deferred.reject(d);
//                         }
//                     }
//                 }, function (x) {
//                     //view.close_loading();
//                     deferred.reject(T("msg.system_error"));
//                 });

//                 return deferred.promise;
//             };
//         }]);


angular.module('httpService', []).
    service('dataService', ['$http', 'config',
        function ($http, config) {
            var host = config.host;

            return {
                //request
                getRequestReportById: function (id) {
                    var url = host + '/api/lis/requests/reports?id=';
                    return $http.get(url + id);
                },
                getRequestById: function (id) {
                    var url = host + '/api/lis/requestdetail?id=';
                    return $http.get(url + id);
                },
                getRequestList: function (query, from, to) {
                    var url = host + '/api/lis/requests';
                    url += '?search=' + (query ? query : '');
                    url += '&from=' + (from ? from : '');
                    url += '&to=' + (to ? to : '');
                    return $http.get(url);
                },
                acceptRequest: function (obj) {
                    var url = host + '/api/lis/requestaccept';
                    return $http.post(url, obj);
                },
                rejectReqeust: function (obj) {
                    var url = host + '/api/lis/requestrefuse';
                    return $http.post(url, obj);
                },
                //lab item
                getLabItemById: function (id) {
                    var url = host + '/api/system/labitemdetail?id=';
                    return $http.get(url + id);
                },
                getlabitemList: function (query) {
                    var url = host + '/api/system/labitems?search=';
                    return $http.get(url + (query ? query : ''));
                },
                saveLabitem: function (model) {
                    var url = host + '/api/system/labitems';
                    return $http.post(url, model);
                },
                deleteLabItem: function (obj) {
                    var url = host + '/api/system/labitems';
                    return $http.delete(url, {
                        "headers": {
                            'Content-Type': 'application/json'
                        },
                        data: obj
                    });
                },
                //lab item set
                getLabItemSetById: function (id) {
                    var url = host + '/api/system/labitemsetdetail?id=';
                    return $http.get(url + id);
                },
                getLabItemSetList: function (query) {
                    var url = host + '/api/system/labitemsets?search=';
                    return $http.get(url + (query ? query : ''));
                },
                saveLabItemSet: function (model) {
                    var url = host + '/api/system/labitemsets';
                    return $http.post(url, model);
                },
                deleteLabItemSet: function (obj) {
                    var url = host + '/api/system/labitemsets';
                    return $http.delete(url, {
                        "headers": {
                            'Content-Type': 'application/json'
                        },
                        data: obj
                    });
                },
                //lab category
                getLabCategoryById: function (id) {
                    var url = host + '/api/system/labcategorydetail?id=';
                    return $http.get(url + id);
                },
                getLabCategoryList: function (query) {
                    var url = host + '/api/system/labcategories?search=';
                    return $http.get(url + (query ? query : ''));
                },
                saveLabCategory: function (model) {
                    var url = host + '/api/system/labcategories';
                    return $http.post(url, model);
                },
                deleteLabCategory: function (obj) {
                    var url = host + '/api/system/labcategories';
                    return $http.delete(url, {
                        "headers": {
                            'Content-Type': 'application/json'
                        },
                        data: obj
                    });
                },
                //qc value
                getQCValueById: function (id) {
                    var url = host + '/api/system/qcvaluedetail?id=';
                    return $http.get(url + id);
                },
                getQCValueList: function (query) {
                    var url = host + '/api/system/qcvalues?search=';
                    return $http.get(url + (query ? query : ''));
                },
                saveQCValue: function (model) {
                    var url = host + '/api/system/qcvalues';
                    return $http.post(url, model);
                },
                deleteQCValue: function (obj) {
                    var url = host + '/api/system/qcvalues';
                    return $http.delete(url, {
                        "headers": {
                            'Content-Type': 'application/json'
                        },
                        data: obj
                    });
                },
                //sample type
                getSampleTypeById: function (id) {
                    var url = host + '/api/system/sampletypedetail?id=';
                    return $http.get(url + id);
                },
                getSampleTypeList: function (query) {
                    var url = host + '/api/system/sampletypes?search=';
                    return $http.get(url + (query ? query : ''));
                },
                saveSampleType: function (model) {
                    var url = host + '/api/system/sampletypes';
                    return $http.post(url, model);
                },
                deleteSampleType: function (obj) {
                    var url = host + '/api/system/sampletypes';
                    return $http.delete(url, {
                        "headers": {
                            'Content-Type': 'application/json'
                        },
                        data: obj
                    });
                },
                //crisis
                getCrisisById: function (id) {
                    var url = host + '/api/system/crisisdetail?id=';
                    return $http.get(url + id);
                },
                getCrisisList: function (query) {
                    var url = host + '/api/system/crisis?search=';
                    return $http.get(url + (query ? query : ''));
                },
                saveCrisis: function (model) {
                    var url = host + '/api/system/crisis';
                    return $http.post(url, model);
                },
                deleteCrisis: function (obj) {
                    var url = host + '/api/system/crisis';
                    return $http.delete(url, {
                        "headers": {
                            'Content-Type': 'application/json'
                        },
                        data: obj
                    });
                },
                //user
                getEmployeeById: function (id) {
                    var url = host + '/api/system/userdetail?id=';
                    return $http.get(url + id);
                },
                saveEmployee: function (model) {
                    var url = host + '/api/system/users';
                    return $http.post(url, model);
                },
                getEmployeeList: function (query) {
                    var url = host + '/api/system/users?search=';
                    return $http.get(url + (query ? query : ''));
                },
                deleteEmployee: function (obj) {
                    var url = host + '/api/system/users';
                    return $http.delete(url, {
                        "headers": {
                            'Content-Type': 'application/json'
                        },
                        data: obj
                    });
                },
                //medical
                getSiteList: function (query) {
                    var url = host + '/api/system/medicalinstitutions?search=';
                    return $http.get(url + (query ? query : ''));
                },
                saveSite: function (model) {
                    var url = host + '/api/system/medicalinstitutions';
                    return $http.post(url, model);
                },
                getSiteById: function (id) {
                    var url = host + '/api/system/medicalinstitutiondetail?id=';
                    return $http.get(url + id);
                },
                deleteSite: function (entity) {
                    var url = host + '/api/system/medicalinstitutions';
                    return $http.delete(url, {
                        "headers": {
                            'Content-Type': 'application/json'
                        },
                        data: entity
                    });
                },
                // department
                getDeptById: function (id) {
                    var url = host + '/api/system/deptdetail?id=';
                    return $http.get(url + id);
                },
                getDeptList: function (query) {
                    var url = host + '/api/system/depts?search=';
                    return $http.get(url + (query ? query : ''));
                },
                deleteDept: function (entity) {
                    var url = host + '/api/system/depts';
                    return $http.delete(url, {
                        "headers": {
                            'Content-Type': 'application/json'
                        },
                        data: entity
                    });
                },
                saveDept: function (model) {
                    var url = host + '/api/system/depts';
                    return $http.post(url, model);
                },
                //logistics
                getLogiList: function (from, to) {
                    var url = host + '/api/lis/logistics';
                    url += '?from=' + (from ? from : '');
                    url += '&to=' + (to ? to : '');
                    return $http.get(url);
                },
                sendLogi: function (model) {
                    var url = host + '/api/lis/sendlogistics';
                    return $http.post(url, model);
                },
                acceptLogi: function (model) {
                    var url = host + '/api/lis/receivelogistics';
                    return $http.post(url, model);
                },
                //labresult
                saveLabResult: function (model) {
                    var url = host + '/api/system/labresults';
                    return $http.post(url, model);
                },
                //other
                getSexList: function () {
                    var url = host + '/app/mock_data/sex_list.json';
                    return $http.get(url);
                },
                getEnum: function () {
                    var url = host + '/app/config/enum.js';
                    return $http.get(url);
                },
                deletePatient: function (id) {

                },
                getSampleList: function () {
                    var url = host + '/mock_data/sample_list.json';
                    return $http.get(url);
                },
                savePatient: function (model) {

                },
                getPatientList: function () {

                },
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
angular.module('commonService').
    service('util', ['enumService', function (enumSerbice) {
        var enumMap = enumSerbice;
        return {
            formateDate: function (date) {
                if(!date){
                    return null;
                }

                var d = new Date(date),
                    month = '' + (d.getMonth() + 1),
                    day = '' + d.getDate(),
                    year = d.getFullYear();

                if (month.length < 2) month = '0' + month;
                if (day.length < 2) day = '0' + day;

                return [year, month, day].join('-');
            },
            getRequestStatus: function (value) {
                return enumMap['request_st'][value];
            },
            getLogisticsStatus: function (value) {
                return enumMap['logistics_st'][value];
            }
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


//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsImNvbmZpZy5qcyIsImNvbmZpZy5sYXp5bG9hZC5qcyIsImNvbmZpZy5yb3V0ZXIuanMiLCJtYWluLmpzIiwiY29udHJvbGxlcnMvYW5hbHl6ZUN0cmwuanMiLCJjb250cm9sbGVycy9jYXRlZ29yeUN0cmwuanMiLCJjb250cm9sbGVycy9jcmlzaXNDdHJsLmpzIiwiY29udHJvbGxlcnMvZGVwYXRDdHJsLmpzIiwiY29udHJvbGxlcnMvZW1wbG95ZWVDdHJsLmpzIiwiY29udHJvbGxlcnMvbGFiSXRlbUN0cmwuanMiLCJjb250cm9sbGVycy9sYWJJdGVtU2V0Q3RybC5qcyIsImNvbnRyb2xsZXJzL2xhYnJlc3VsdEN0cmwuanMiLCJjb250cm9sbGVycy9sb2dpc3RpY3NDdHJsLmpzIiwiY29udHJvbGxlcnMvbWVkaWNhbEN0cmwuanMiLCJjb250cm9sbGVycy9wYXRpZW50Q3RybC5qcyIsImNvbnRyb2xsZXJzL3FjdmFsdWVDdHJsLmpzIiwiY29udHJvbGxlcnMvcmVxdWVzdEN0cmwuanMiLCJjb250cm9sbGVycy9zYW1wbGVUeXBlQ3RybC5qcyIsImNvbnRyb2xsZXJzL3VzZXJDdHJsLmpzIiwiZGlyZWN0aXZlcy9zZXRuZ2FuaW1hdGUuanMiLCJkaXJlY3RpdmVzL3VpLWJ1dHRlcmJhci5qcyIsImRpcmVjdGl2ZXMvdWktZm9jdXMuanMiLCJkaXJlY3RpdmVzL3VpLWZ1bGxzY3JlZW4uanMiLCJkaXJlY3RpdmVzL3VpLWpxLmpzIiwiZGlyZWN0aXZlcy91aS1tb2R1bGUuanMiLCJkaXJlY3RpdmVzL3VpLW5hdi5qcyIsImRpcmVjdGl2ZXMvdWktc2Nyb2xsLmpzIiwiZGlyZWN0aXZlcy91aS1zaGlmdC5qcyIsImRpcmVjdGl2ZXMvdWktdG9nZ2xlY2xhc3MuanMiLCJkaXJlY3RpdmVzL3VpLXZhbGlkYXRlLmpzIiwic2VydmljZXMvZW51bVNlcnZpY2UuanMiLCJzZXJ2aWNlcy9nbG9iYWwuanMiLCJzZXJ2aWNlcy9odHRwU2VydmljZS5qcyIsInNlcnZpY2VzL3VpLWxvYWQuanMiLCJzZXJ2aWNlcy91dGlsLmpzIiwiZGlyZWN0aXZlcy93aWRnZXQvaW5wdXQvaW5wdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQy9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3hRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbklBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3pJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2pMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDakpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM1SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNwSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbk9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3BLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDakdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3hNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN4TUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMvR0E7QUFDQTtBQUNBO0FBQ0E7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3JGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDcEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3ZIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzdRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzVTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM1RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFsbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcblxyXG5hbmd1bGFyLm1vZHVsZSgnYXBwJywgW1xyXG4gICAgJ25nQW5pbWF0ZScsXHJcbiAgICAnbmdDb29raWVzJyxcclxuICAgICduZ1Jlc291cmNlJyxcclxuICAgICduZ1Nhbml0aXplJyxcclxuICAgICduZ1RvdWNoJyxcclxuICAgICduZ1N0b3JhZ2UnLFxyXG4gICAgJ3VpLnJvdXRlcicsXHJcbiAgICAndWkuYm9vdHN0cmFwJyxcclxuICAgICd1aS5sb2FkJyxcclxuICAgICd1aS5qcScsXHJcbiAgICAndWkudmFsaWRhdGUnLFxyXG4gICAgJ29jLmxhenlMb2FkJyxcclxuICAgICdwYXNjYWxwcmVjaHQudHJhbnNsYXRlJyxcclxuICAgICd0b2FzdGVyJyxcclxuICAgICd1aS5ncmlkJyxcclxuICAgICd1aS5ncmlkLmVkaXQnLFxyXG4gICAgJ3VpLmdyaWQuc2VsZWN0aW9uJyxcclxuICAgICd1aS5zZWxlY3QnLFxyXG4gICAgLy9jdXN0b21cclxuICAgICdodHRwU2VydmljZScsXHJcbiAgICAnY29tbW9uU2VydmljZScsXHJcbiAgICAndWlEaXJlY3QnXHJcbl0pO1xyXG5cclxuYW5ndWxhci5tb2R1bGUoJ3VpRGlyZWN0JyxbXSk7XHJcblxyXG5hbmd1bGFyLm1vZHVsZSgnY29tbW9uU2VydmljZScsW10pO1xyXG4iLCIvLyBjb25maWdcblxudmFyIGFwcCA9XG4gIGFuZ3VsYXIubW9kdWxlKCdhcHAnKS5jb25maWcoXG4gICAgWyckY29udHJvbGxlclByb3ZpZGVyJywgJyRjb21waWxlUHJvdmlkZXInLCAnJGZpbHRlclByb3ZpZGVyJywgJyRwcm92aWRlJyxcbiAgICAgIGZ1bmN0aW9uICgkY29udHJvbGxlclByb3ZpZGVyLCAkY29tcGlsZVByb3ZpZGVyLCAkZmlsdGVyUHJvdmlkZXIsICRwcm92aWRlKSB7XG5cbiAgICAgICAgLy8gbGF6eSBjb250cm9sbGVyLCBkaXJlY3RpdmUgYW5kIHNlcnZpY2VcbiAgICAgICAgYXBwLmNvbnRyb2xsZXIgPSAkY29udHJvbGxlclByb3ZpZGVyLnJlZ2lzdGVyO1xuICAgICAgICBhcHAuZGlyZWN0aXZlID0gJGNvbXBpbGVQcm92aWRlci5kaXJlY3RpdmU7XG4gICAgICAgIGFwcC5maWx0ZXIgPSAkZmlsdGVyUHJvdmlkZXIucmVnaXN0ZXI7XG4gICAgICAgIGFwcC5mYWN0b3J5ID0gJHByb3ZpZGUuZmFjdG9yeTtcbiAgICAgICAgYXBwLnNlcnZpY2UgPSAkcHJvdmlkZS5zZXJ2aWNlO1xuICAgICAgICBhcHAuY29uc3RhbnQgPSAkcHJvdmlkZS5jb25zdGFudDtcbiAgICAgICAgYXBwLnZhbHVlID0gJHByb3ZpZGUudmFsdWU7XG4gICAgICB9XG4gICAgXSkuY29uZmlnKFsnJHRyYW5zbGF0ZVByb3ZpZGVyJywgZnVuY3Rpb24gKCR0cmFuc2xhdGVQcm92aWRlcikge1xuICAgICAgJHRyYW5zbGF0ZVByb3ZpZGVyLnVzZVN0YXRpY0ZpbGVzTG9hZGVyKHtcbiAgICAgICAgcHJlZml4OiAnaTE4bi8nLFxuICAgICAgICBzdWZmaXg6ICcuanMnXG4gICAgICB9KTtcbiAgICAgICR0cmFuc2xhdGVQcm92aWRlci5wcmVmZXJyZWRMYW5ndWFnZSgnemhfY24nKTtcbiAgICAgICR0cmFuc2xhdGVQcm92aWRlci51c2VMb2NhbFN0b3JhZ2UoKTtcbiAgICB9XSk7XG5cbi8vIOe/u+ivkeW/q+aNt+aWueW8j1xudmFyIFQgPSB7fTtcbi8vIOacrOWcsOWtmOWCqOW/q+aNt+aWueW8j1xudmFyIFMgPSB7fTtcbmFwcC5ydW4oWyckdHJhbnNsYXRlJywgJyRsb2NhbFN0b3JhZ2UnLFxuICBmdW5jdGlvbiAoJHRyYW5zbGF0ZSwgJGxvY2FsU3RvcmFnZSkge1xuICAgIC8vIOWumuS5iee/u+ivkeW/q+aNt+aWueW8j1xuICAgIFQgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICByZXR1cm4gJHRyYW5zbGF0ZS5pbnN0YW50KGtleSk7XG4gICAgfTtcblxuICAgIFMgPSAkbG9jYWxTdG9yYWdlO1xuICB9XG5dKTtcblxuYXBwLmNvbnN0YW50KCdjb25maWcnLCB7XG4gIGhvc3Q6ICdodHRwOi8vbG9jYWxob3N0OjgxMjMnXG59KTsiLCIvLyBsYXp5bG9hZCBjb25maWdcblxuYW5ndWxhci5tb2R1bGUoJ2FwcCcpXG4gIC5jb25zdGFudCgnSlFfQ09ORklHJywge1xuICAgICAgZmlsZXN0eWxlOiAgICAgIFsndmVuZG9yMi9qcXVlcnkvZmlsZS9ib290c3RyYXAtZmlsZXN0eWxlLm1pbi5qcyddLFxuICAgICAgc2xpZGVyOiAgICAgICAgIFsndmVuZG9yMi9qcXVlcnkvc2xpZGVyL2Jvb3RzdHJhcC1zbGlkZXIuanMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAndmVuZG9yMi9qcXVlcnkvc2xpZGVyL3NsaWRlci5jc3MnXSxcbiAgICAgIHd5c2l3eWc6ICAgICAgICBbJ3ZlbmRvcjIvanF1ZXJ5L3d5c2l3eWcvYm9vdHN0cmFwLXd5c2l3eWcuanMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAndmVuZG9yMi9qcXVlcnkvd3lzaXd5Zy9qcXVlcnkuaG90a2V5cy5qcyddLFxuICAgICAgY2hvc2VuOiAgICAgICAgIFsndmVuZG9yMi9qcXVlcnkvY2hvc2VuL2Nob3Nlbi5qcXVlcnkubWluLmpzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ3ZlbmRvcjIvanF1ZXJ5L2Nob3Nlbi9jaG9zZW4uY3NzJ10sXG4gICAgICBUb3VjaFNwaW46ICAgICAgWyd2ZW5kb3IyL2pxdWVyeS9zcGlubmVyL2pxdWVyeS5ib290c3RyYXAtdG91Y2hzcGluLm1pbi5qcycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICd2ZW5kb3IyL2pxdWVyeS9zcGlubmVyL2pxdWVyeS5ib290c3RyYXAtdG91Y2hzcGluLmNzcyddLFxuICAgICAgfVxuICApOyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbi8qKlxyXG4gKiBDb25maWcgZm9yIHRoZSByb3V0ZXJcclxuICovXHJcbmFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4gICAgLnJ1bihcclxuICAgICAgICBbJyRyb290U2NvcGUnLCAnJHN0YXRlJywgJyRzdGF0ZVBhcmFtcycsXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uICgkcm9vdFNjb3BlLCAkc3RhdGUsICRzdGF0ZVBhcmFtcykge1xyXG4gICAgICAgICAgICAgICAgJHJvb3RTY29wZS4kc3RhdGUgPSAkc3RhdGU7XHJcbiAgICAgICAgICAgICAgICAkcm9vdFNjb3BlLiRzdGF0ZVBhcmFtcyA9ICRzdGF0ZVBhcmFtcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgIClcclxuICAgIC5jb25maWcoXHJcbiAgICAgICAgWyckc3RhdGVQcm92aWRlcicsICckdXJsUm91dGVyUHJvdmlkZXInLFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikge1xyXG5cclxuICAgICAgICAgICAgICAgICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy9hcHAvcmVxdWVzdCcpO1xyXG5cclxuICAgICAgICAgICAgICAgICRzdGF0ZVByb3ZpZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgLnN0YXRlKCdhcHAnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFic3RyYWN0OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6ICcvYXBwJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICd0cGwvYXBwLmh0bWwnXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuc3RhdGUoJ2FwcC5jcmlzaXMnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJy9jcmlzaXMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3RwbC9jcmlzaXMvY3Jpc2lzX2xpc3QuaHRtbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdDcmlzaXNMaXN0Q3RybCdcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdGF0ZSgnYXBwLmNyaXNpc19kZXRhaWwnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJy9jcmlzaXNfZGV0YWlsJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3RwbC9jcmlzaXMvY3Jpc2lzX2RldGFpbC5odG1sJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ0NyaXNpc0RldGFpbEN0cmwnXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuc3RhdGUoJ2FwcC5kZXBhcnQnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJy9kZXBhcnQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3RwbC9kZXBhcnQvZGVwYXJ0X2xpc3QuaHRtbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdEZXBhcnRMaXN0Q3RybCdcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdGF0ZSgnYXBwLmRlcGFydF9kZXRhaWwnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJy9kZXBhcnRfZGV0YWlsJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3RwbC9kZXBhcnQvZGVwYXJ0X2RldGFpbC5odG1sJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ0RlcGFydERldGFpbEN0cmwnXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuc3RhdGUoJ2FwcC5yZXF1ZXN0Jywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6ICcvcmVxdWVzdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICd0cGwvcmVxdWVzdC9yZXF1ZXN0X2xpc3QuaHRtbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdSZXF1ZXN0TGlzdEN0cmwnXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuc3RhdGUoJ2FwcC5yZXF1ZXN0X2RldGFpbCcsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiAnL3JlcXVlc3RfZGV0YWlsJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3RwbC9yZXF1ZXN0L3JlcXVlc3RfZGV0YWlsLmh0bWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnUmVxdWVzdERldGFpbEN0cmwnXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuc3RhdGUoJ2FwcC5lbXBsb3llZScsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiAnL2VtcGxveWVlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3RwbC9lbXBsb3llZS9lbXBsb3llZV9saXN0Lmh0bWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnRW1wbG95ZWVMaXN0Q3RybCdcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdGF0ZSgnYXBwLmVtcGxveWVlX2RldGFpbCcsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiAnL2VtcGxveWVlX2RldGFpbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICd0cGwvZW1wbG95ZWUvZW1wbG95ZWVfZGV0YWlsLmh0bWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnRW1wbG95ZWVEZXRhaWxDdHJsJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnN0YXRlKCdhcHAucGF0aWVudCcsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiAnL3BhdGllbnQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAndHBsL3BhdGllbnQvcGF0aWVudF9saXN0Lmh0bWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnUGF0aWVudExpc3RDdHJsJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnN0YXRlKCdhcHAucGF0aWVudF9kZXRhaWwnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJy9wYXRpZW50X2RldGFpbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICd0cGwvcGF0aWVudC9wYXRpZW50X2RldGFpbC5odG1sJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ1BhdGllbnREZXRhaWxDdHJsJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnN0YXRlKCdhcHAubWVkaWNhbCcsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiAnL21lZGljYWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAndHBsL21lZGljYWwvbWVkaWNhbF9saXN0Lmh0bWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnTWVkaWNhbExpc3RDdHJsJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnN0YXRlKCdhcHAubWVkaWNhbF9kZXRhaWwnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJy9tZWRpY2FsX2RldGFpbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICd0cGwvbWVkaWNhbC9tZWRpY2FsX2RldGFpbC5odG1sJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ01lZGljYWxEZXRhaWxDdHJsJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnN0YXRlKCdhcHAubGFiaXRlbScsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiAnL2xhYml0ZW0nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAndHBsL2xhYml0ZW0vbGFiaXRlbV9saXN0Lmh0bWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnTGFiaXRlbUxpc3RDdHJsJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnN0YXRlKCdhcHAubGFiaXRlbV9kZXRhaWwnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJy9sYWJpdGVtX2RldGFpbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICd0cGwvbGFiaXRlbS9sYWJpdGVtX2RldGFpbC5odG1sJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ0xhYml0ZW1EZXRhaWxDdHJsJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnN0YXRlKCdhcHAuY2F0ZWdvcnknLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJy9jYXRlZ29yeScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICd0cGwvY2F0ZWdvcnkvY2F0ZWdvcnlfbGlzdC5odG1sJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ0NhdGVnb3J5TGlzdEN0cmwnXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuc3RhdGUoJ2FwcC5jYXRlZ29yeV9kZXRhaWwnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJy9jYXRlZ29yeV9kZXRhaWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAndHBsL2NhdGVnb3J5L2NhdGVnb3J5X2RldGFpbC5odG1sJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ0NhdGVnb3J5RGV0YWlsQ3RybCdcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdGF0ZSgnYXBwLmxvZ2lzdGljcycsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiAnL2xvZ2lzdGljcycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICd0cGwvbG9naXN0aWNzL2xvZ2lzdGljc19saXN0Lmh0bWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnTG9naXN0aWNzTGlzdEN0cmwnXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuc3RhdGUoJ2FwcC5sYWJyZXN1bHQnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJy9sYWJyZXN1bHQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAndHBsL2xhYnJlc3VsdC9sYWJyZXN1bHRfbGlzdC5odG1sJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ0xhYnJlc3VsdExpc3RDdHJsJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnN0YXRlKCdhcHAubGFicmVzdWx0X2RldGFpbCcsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiAnL2xhYnJlc3VsdF9kZXRhaWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAndHBsL2xhYnJlc3VsdC9sYWJyZXN1bHRfZGV0YWlsLmh0bWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnTGFicmVzdWx0RGV0YWlsQ3RybCdcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdGF0ZSgnYXBwLnNhbXBsZXR5cGUnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJy9zYW1wbGV0eXBlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3RwbC9zYW1wbGVfdHlwZS9zYW1wbGV0eXBlX2xpc3QuaHRtbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdTYW1wbGVUeXBlTGlzdEN0cmwnXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuc3RhdGUoJ2FwcC5zYW1wbGV0eXBlX2RldGFpbCcsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiAnL3NhbXBsZXR5cGVfZGV0YWlsJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3RwbC9zYW1wbGVfdHlwZS9zYW1wbGV0eXBlX2RldGFpbC5odG1sJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ1NhbXBsZVR5cGVEZXRhaWxDdHJsJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnN0YXRlKCdhcHAucWN2YWx1ZScsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiAnL3FjdmFsdWUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAndHBsL3FjdmFsdWUvcWN2YWx1ZV9saXN0Lmh0bWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnUWN2YWx1ZUxpc3RDdHJsJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnN0YXRlKCdhcHAucWN2YWx1ZV9kZXRhaWwnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJy9xY3ZhbHVlX2RldGFpbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICd0cGwvcWN2YWx1ZS9xY3ZhbHVlX2RldGFpbC5odG1sJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ1FjdmFsdWVEZXRhaWxDdHJsJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnN0YXRlKCdhcHAubGFiaXRlbXNldCcsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiAnL2xhYml0ZW1zZXQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAndHBsL2xhYml0ZW1zZXQvbGFiaXRlbXNldF9saXN0Lmh0bWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnTGFiSXRlbVNldExpc3RDdHJsJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnN0YXRlKCdhcHAubGFiaXRlbXNldF9kZXRhaWwnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJy9sYWJpdGVtc2V0X2RldGFpbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICd0cGwvbGFiaXRlbXNldC9sYWJpdGVtc2V0X2RldGFpbC5odG1sJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ0xhYkl0ZW1TZXREZXRhaWxDdHJsJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnN0YXRlKCdhcHAuYW5hbHl6ZScsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiAnL2FuYWx5emUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICd0cGwvYW5hbHl6ZS9hbmFseXplLmh0bWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnQW5hbHl6ZUN0cmwnXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuc3RhdGUoJ2FwcC5jaGFuZ2VfcHdkJywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6ICcvY2hhbmdlX3B3ZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3RwbC91c2VyL2NoYW5nZV9wd2QuaHRtbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdVc2VyQ3RybCdcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdGF0ZSgnbG9naW4nLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJy9sb2dpbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3RwbC91c2VyL2xvZ2luLmh0bWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnVXNlckN0cmwnXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuc3RhdGUoJ2xhYnJlc3VsdF9wcmludCcsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiAnL2xhYnJlc3VsdF9wcmludCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICd0cGwvbGFicmVzdWx0L2xhYnJlc3VsdF9wcmludC5odG1sJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ0xhYnJlc3VsdFByaW50Q3RybCdcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdGF0ZSgnbG9naXN0aWNzX3ByaW50Jywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6ICcvbG9naXN0aWNzX3ByaW50JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3RwbC9sb2dpc3RpY3MvbG9naXN0aWNzX3ByaW50Lmh0bWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnTG9naXN0aWNzUHJpbnRDdHJsJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgKTsiLCIndXNlIHN0cmljdCc7XHJcblxyXG4vKiBDb250cm9sbGVycyAqL1xyXG5cclxuYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbiAgLmNvbnRyb2xsZXIoJ0FwcEN0cmwnLCBbJyRzY29wZScsICckdHJhbnNsYXRlJywgJyRsb2NhbFN0b3JhZ2UnLCAnJHdpbmRvdycsXHJcbiAgICBmdW5jdGlvbiAoJHNjb3BlLCAkdHJhbnNsYXRlLCAkbG9jYWxTdG9yYWdlLCAkd2luZG93KSB7XHJcbiAgICAgIC8vIGFkZCAnaWUnIGNsYXNzZXMgdG8gaHRtbFxyXG4gICAgICB2YXIgaXNJRSA9ICEhbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvTVNJRS9pKTtcclxuICAgICAgaXNJRSAmJiBhbmd1bGFyLmVsZW1lbnQoJHdpbmRvdy5kb2N1bWVudC5ib2R5KS5hZGRDbGFzcygnaWUnKTtcclxuICAgICAgaXNTbWFydERldmljZSgkd2luZG93KSAmJiBhbmd1bGFyLmVsZW1lbnQoJHdpbmRvdy5kb2N1bWVudC5ib2R5KS5hZGRDbGFzcygnc21hcnQnKTtcclxuXHJcbiAgICAgIC8vIGNvbmZpZ1xyXG4gICAgICAkc2NvcGUuYXBwID0ge1xyXG4gICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICB0aGVtZUlEOiAxLFxyXG4gICAgICAgICAgbmF2YmFySGVhZGVyQ29sb3I6ICdiZy1ibGFjaycsXHJcbiAgICAgICAgICBuYXZiYXJDb2xsYXBzZUNvbG9yOiAnaGVhZC1saWdodGJsdWUnLFxyXG4gICAgICAgICAgYXNpZGVDb2xvcjogJ2FzaWRlLWJsdWUnLFxyXG4gICAgICAgICAgaGVhZGVyRml4ZWQ6IHRydWUsXHJcbiAgICAgICAgICBhc2lkZUZpeGVkOiB0cnVlLFxyXG4gICAgICAgICAgYXNpZGVGb2xkZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgYXNpZGVEb2NrOiBmYWxzZSxcclxuICAgICAgICAgIGNvbnRhaW5lcjogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIHNhdmUgc2V0dGluZ3MgdG8gbG9jYWwgc3RvcmFnZVxyXG4gICAgICAvLyBpZiAoIGFuZ3VsYXIuaXNEZWZpbmVkKCRsb2NhbFN0b3JhZ2Uuc2V0dGluZ3MpICkge1xyXG4gICAgICAvLyAgICRzY29wZS5hcHAuc2V0dGluZ3MgPSAkbG9jYWxTdG9yYWdlLnNldHRpbmdzO1xyXG4gICAgICAvLyB9IGVsc2Uge1xyXG4gICAgICAvLyAgICRsb2NhbFN0b3JhZ2Uuc2V0dGluZ3MgPSAkc2NvcGUuYXBwLnNldHRpbmdzO1xyXG4gICAgICAvLyB9XHJcbiAgICAgICRzY29wZS4kd2F0Y2goJ2FwcC5zZXR0aW5ncycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoJHNjb3BlLmFwcC5zZXR0aW5ncy5hc2lkZURvY2sgJiYgJHNjb3BlLmFwcC5zZXR0aW5ncy5hc2lkZUZpeGVkKSB7XHJcbiAgICAgICAgICAvLyBhc2lkZSBkb2NrIGFuZCBmaXhlZCBtdXN0IHNldCB0aGUgaGVhZGVyIGZpeGVkLlxyXG4gICAgICAgICAgJHNjb3BlLmFwcC5zZXR0aW5ncy5oZWFkZXJGaXhlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHNhdmUgdG8gbG9jYWwgc3RvcmFnZVxyXG4gICAgICAgICRsb2NhbFN0b3JhZ2Uuc2V0dGluZ3MgPSAkc2NvcGUuYXBwLnNldHRpbmdzO1xyXG4gICAgICB9LCB0cnVlKTtcclxuXHJcbiAgICAgIGZ1bmN0aW9uIGlzU21hcnREZXZpY2UoJHdpbmRvdykge1xyXG4gICAgICAgIC8vIEFkYXB0ZWQgZnJvbSBodHRwOi8vd3d3LmRldGVjdG1vYmlsZWJyb3dzZXJzLmNvbVxyXG4gICAgICAgIHZhciB1YSA9ICR3aW5kb3dbJ25hdmlnYXRvciddWyd1c2VyQWdlbnQnXSB8fCAkd2luZG93WyduYXZpZ2F0b3InXVsndmVuZG9yJ10gfHwgJHdpbmRvd1snb3BlcmEnXTtcclxuICAgICAgICAvLyBDaGVja3MgZm9yIGlPcywgQW5kcm9pZCwgQmxhY2tiZXJyeSwgT3BlcmEgTWluaSwgYW5kIFdpbmRvd3MgbW9iaWxlIGRldmljZXNcclxuICAgICAgICByZXR1cm4gKC9pUGhvbmV8aVBvZHxpUGFkfFNpbGt8QW5kcm9pZHxCbGFja0JlcnJ5fE9wZXJhIE1pbml8SUVNb2JpbGUvKS50ZXN0KHVhKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJHNjb3BlLiRvbignJHN0YXRlQ2hhbmdlU3RhcnQnLCBmdW5jdGlvbiAoZXZlbnQsIHRvU3RhdGUsIHRvUGFyYW1zLCBmcm9tU3RhdGUsIGZyb21QYXJhbXMpIHtcclxuXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy90b3AgbGV2ZWwgc2NvcGVcclxuICAgICAgLy9maXggbWVcclxuICAgICAgLy8kc2NvcGUuZmlsdGVyX3RpcCA9IFQoJ2xpc3QuZmlsdGVyX3RpcCcpO1xyXG4gICAgICAkc2NvcGUuZmlsdGVyX3RpcCA9ICfovpPlhaXmkJzntKLlhbPplK7lrZcnO1xyXG4gICAgfV0pOyIsImFwcC5jb250cm9sbGVyKCdBbmFseXplQ3RybCcsIFsnJHNjb3BlJywgJyRtb2RhbCcsICckc3RhdGUnLCAnZGF0YVNlcnZpY2UnLCAndXRpbCcsIGZ1bmN0aW9uICgkc2NvcGUsICRtb2RhbCwgJHN0YXRlLCBkYXRhU2VydmljZSwgdXRpbCkge1xyXG5cclxuXHJcbiAgICAkc2NvcGUuc2VhcmNoID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLm1vZGVsID0ge1xyXG4gICAgICAgIHNlbGVjdGVkU2l0ZTogbnVsbFxyXG4gICAgfTtcclxuICAgICRzY29wZS5zaXRlTGlzdCA9IG51bGw7XHJcblxyXG4gICAgZGF0YVNlcnZpY2UuZ2V0U2l0ZUxpc3QoKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAkc2NvcGUuc2l0ZUxpc3QgPSByZXN1bHQuZGF0YTtcclxuICAgIH0pO1xyXG59XSk7IiwiYXBwLmNvbnRyb2xsZXIoJ0NhdGVnb3J5TGlzdEN0cmwnLCBbJyRzY29wZScsICckc3RhdGUnLCAnZGF0YVNlcnZpY2UnLCBmdW5jdGlvbiAoJHNjb3BlLCAkc3RhdGUsIGRhdGFTZXJ2aWNlKSB7XHJcblxyXG4gICAgdmFyIGxpbmsgPSAnYXBwLmNhdGVnb3J5X2RldGFpbCc7XHJcbiAgICB2YXIgZWRpdFVybCA9ICc8YSBjbGFzcz1cImVkaXQtdHBsXCIgdWktc3JlZj1cIicgKyBsaW5rICsgJyh7aWQ6IHJvdy5lbnRpdHkuaWR9KVwiPue8lui+kTwvYT4nO1xyXG4gICAgZWRpdFVybCArPSAnPGEgY2xhc3M9XCJkZWxldGUtdHBsXCIgbmctY2xpY2s9XCJncmlkLmFwcFNjb3BlLmRlbGV0ZShyb3cuZW50aXR5KVwiPuWIoOmZpDwvYT4nO1xyXG5cclxuICAgICRzY29wZS5ncmlkT3B0aW9ucyA9IHtcclxuICAgICAgICBlbmFibGVGaWx0ZXJpbmc6IGZhbHNlLFxyXG4gICAgICAgIG9uUmVnaXN0ZXJBcGk6IGZ1bmN0aW9uIChncmlkQXBpKSB7XHJcbiAgICAgICAgICAgICRzY29wZS5ncmlkQXBpID0gZ3JpZEFwaTtcclxuICAgICAgICAgICAgJHNjb3BlLmdyaWRBcGkuZ3JpZC5yZWdpc3RlclJvd3NQcm9jZXNzb3IoJHNjb3BlLmZpbHRlciwgMjAwKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbHVtbkRlZnM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQ6ICdpZCcsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogJ0lkJyxcclxuICAgICAgICAgICAgICAgIHZpc2libGU6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiAnbGNDb2RlJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAn5qOA6aqM57G75Yir5Luj56CBJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogJ2xjTmFtZScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogJ+ajgOmqjOexu+WIq+WQjeensCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQ6ICdiYXJjb2RlUHJlJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAn5Luj56CB5YmN57yAJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogJ2V4dGVybmFsQ29kZScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogJ+WklumDqOS7o+eggSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ2VkaXQnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICfmk43kvZwnLFxyXG4gICAgICAgICAgICAgICAgY2VsbFRlbXBsYXRlOiBlZGl0VXJsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICB9O1xyXG5cclxuICAgIGRhdGFTZXJ2aWNlLmdldExhYkNhdGVnb3J5TGlzdCgpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICRzY29wZS5ncmlkT3B0aW9ucy5kYXRhID0gcmVzdWx0LmRhdGE7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkc2NvcGUuc2VhcmNoID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICRzY29wZS5ncmlkQXBpLmdyaWQucmVmcmVzaCgpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuY3JlYXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICRzdGF0ZS5nbyhsaW5rKTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmRlbGV0ZSA9IGZ1bmN0aW9uIChvYmopIHtcclxuICAgICAgICBkYXRhU2VydmljZS5kZWxldGVMYWJDYXRlZ29yeShvYmopLnRoZW4oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8ICRzY29wZS5ncmlkT3B0aW9ucy5kYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoJHNjb3BlLmdyaWRPcHRpb25zLmRhdGFbaV0uaWQgPT0gb2JqLmlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmdyaWRPcHRpb25zLmRhdGEuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTs7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5maWx0ZXIgPSBmdW5jdGlvbiAocmVuZGVyYWJsZVJvd3MpIHtcclxuICAgICAgICB2YXIgbWF0Y2hlciA9IG5ldyBSZWdFeHAoJHNjb3BlLmZpbHRlclZhbHVlKTtcclxuICAgICAgICByZW5kZXJhYmxlUm93cy5mb3JFYWNoKGZ1bmN0aW9uIChyb3cpIHtcclxuICAgICAgICAgICAgdmFyIG1hdGNoID0gZmFsc2U7XHJcbiAgICAgICAgICAgIFsnbGNDb2RlJywgJ2xjTmFtZScsICdiYXJjb2RlUHJlJywgJ2V4dGVybmFsQ29kZSddLmZvckVhY2goZnVuY3Rpb24gKGZpZWxkKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZW50aXR5ID0gcm93LmVudGl0eVtmaWVsZF0gKyAnJztcclxuICAgICAgICAgICAgICAgIGlmIChlbnRpdHkubWF0Y2gobWF0Y2hlcikpIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXRjaCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAoIW1hdGNoKSB7XHJcbiAgICAgICAgICAgICAgICByb3cudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHJlbmRlcmFibGVSb3dzO1xyXG4gICAgfTtcclxufV0pO1xyXG5cclxuYXBwLmNvbnRyb2xsZXIoJ0NhdGVnb3J5RGV0YWlsQ3RybCcsIFsnJHNjb3BlJywgJyRzdGF0ZScsICckc3RhdGVQYXJhbXMnLCAnZGF0YVNlcnZpY2UnLCBmdW5jdGlvbiAoJHNjb3BlLCAkc3RhdGUsICRzdGF0ZVBhcmFtcywgZGF0YVNlcnZpY2UpIHtcclxuXHJcbiAgICAkc2NvcGUubW9kZWwgPSB7XHJcbiAgICAgICAgaWQ6IG51bGwsXHJcbiAgICAgICAgbGNDb2RlOiBudWxsLFxyXG4gICAgICAgIGxjTmFtZTogbnVsbCxcclxuICAgICAgICBiYXJjb2RlUHJlOiBudWxsLFxyXG4gICAgICAgIGV4dGVybmFsQ29kZTogbnVsbCxcclxuICAgICAgICBjb2xvcjogbnVsbCxcclxuICAgICAgICBib29sZEFsb25lOiBudWxsLFxyXG4gICAgICAgIGV4YW1OdW06IG51bGxcclxuICAgIH07XHJcblxyXG5cclxuICAgIGlmICgkc3RhdGVQYXJhbXMuaWQpIHtcclxuICAgICAgICBkYXRhU2VydmljZS5nZXRMYWJDYXRlZ29yeUJ5SWQoJHN0YXRlUGFyYW1zLmlkKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5kYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUubW9kZWwgPSByZXN1bHQuZGF0YTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgICRzY29wZS5zdWJtaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZygkc2NvcGUubW9kZWwpO1xyXG4gICAgICAgIGRhdGFTZXJ2aWNlLnNhdmVMYWJDYXRlZ29yeSgkc2NvcGUubW9kZWwpLnRoZW4oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkc3RhdGUuZ28oJ2FwcC5jYXRlZ29yeScpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbn1dKTsiLCJhcHAuY29udHJvbGxlcignQ3Jpc2lzTGlzdEN0cmwnLCBbJyRzY29wZScsICckc3RhdGUnLCAnZGF0YVNlcnZpY2UnLCBmdW5jdGlvbiAoJHNjb3BlLCAkc3RhdGUsIGRhdGFTZXJ2aWNlKSB7XHJcbiAgICAvLyB2YXIgdHBsID0gJzxidXR0b24gaWQ9XCJlZGl0QnRuXCIgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuLXNtYWxsXCIgbmctY2xpY2s9XCJncmlkLmFwcFNjb3BlLmdvKHJvdy5lbnRpdHkpXCIgPkVkaXQ8L2J1dHRvbj4nO1xyXG4gICAgLy8gJHNjb3BlLmdvID0gZnVuY3Rpb24gKHJvd0RhdGEpIHtcclxuICAgIC8vICAgICAkc3RhdGUuZ28oJ2FwcC5jcmlzaXNfZGV0YWlsJywgeyBpZDogcm93RGF0YS5pZCB9KTtcclxuICAgIC8vIH1cclxuXHJcbiAgICB2YXIgZWRpdFVybCA9ICc8YSBjbGFzcz1cImVkaXQtdHBsXCIgdWktc3JlZj1cImFwcC5jcmlzaXNfZGV0YWlsKHtpZDogcm93LmVudGl0eS5pZH0pXCI+57yW6L6RPC9hPjxhIGNsYXNzPVwiZGVsZXRlLXRwbFwiIG5nLWNsaWNrPVwiZ3JpZC5hcHBTY29wZS5kZWxldGUocm93LmVudGl0eSlcIj7liKDpmaQ8L2E+J1xyXG5cclxuICAgICRzY29wZS5ncmlkT3B0aW9ucyA9IHtcclxuICAgICAgICBlbmFibGVGaWx0ZXJpbmc6IGZhbHNlLFxyXG4gICAgICAgIG9uUmVnaXN0ZXJBcGk6IGZ1bmN0aW9uIChncmlkQXBpKSB7XHJcbiAgICAgICAgICAgICRzY29wZS5ncmlkQXBpID0gZ3JpZEFwaTtcclxuICAgICAgICAgICAgJHNjb3BlLmdyaWRBcGkuZ3JpZC5yZWdpc3RlclJvd3NQcm9jZXNzb3IoJHNjb3BlLmZpbHRlciwgMjAwKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbHVtbkRlZnM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQ6ICdpZCcsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogJ0lkJyxcclxuICAgICAgICAgICAgICAgIHZpc2libGU6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiAnbGFiSXRlbS5pdGVtTmFtZScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogJ+ajgOmqjOmhueebridcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQ6ICdub3JtYWxVcHBlcicsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogJ+ato+W4uOS4iumZkCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQ6ICdub3JtYWxMb3cnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICfmraPluLjkuIvpmZAnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiAnY3JlYXRlVGltZScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogJ+WIm+W7uuaXtumXtCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ2VkaXQnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICfmk43kvZwnLFxyXG4gICAgICAgICAgICAgICAgY2VsbFRlbXBsYXRlOiBlZGl0VXJsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICB9O1xyXG5cclxuICAgIGRhdGFTZXJ2aWNlLmdldENyaXNpc0xpc3QoKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAkc2NvcGUuZ3JpZE9wdGlvbnMuZGF0YSA9IHJlc3VsdC5kYXRhO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJHNjb3BlLnNlYXJjaCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkc2NvcGUuZ3JpZEFwaS5ncmlkLnJlZnJlc2goKTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmNyZWF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkc3RhdGUuZ28oJ2FwcC5jcmlzaXNfZGV0YWlsJyk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5kZWxldGUgPSBmdW5jdGlvbiAob2JqKSB7XHJcbiAgICAgICAgZGF0YVNlcnZpY2UuZGVsZXRlQ3Jpc2lzKG9iaikudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgJHNjb3BlLmdyaWRPcHRpb25zLmRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmICgkc2NvcGUuZ3JpZE9wdGlvbnMuZGF0YVtpXS5pZCA9PSBvYmouaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZ3JpZE9wdGlvbnMuZGF0YS5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuZmlsdGVyID0gZnVuY3Rpb24gKHJlbmRlcmFibGVSb3dzKSB7XHJcbiAgICAgICAgdmFyIG1hdGNoZXIgPSBuZXcgUmVnRXhwKCRzY29wZS5maWx0ZXJWYWx1ZSk7XHJcbiAgICAgICAgcmVuZGVyYWJsZVJvd3MuZm9yRWFjaChmdW5jdGlvbiAocm93KSB7XHJcbiAgICAgICAgICAgIHZhciBtYXRjaCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBbJ2xhYkl0ZW0uaXRlbU5hbWUnLCAnbm9ybWFsVXBwZXInLCdub3JtYWxMb3cnXS5mb3JFYWNoKGZ1bmN0aW9uIChmaWVsZCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGVudGl0eSA9IHJvdy5lbnRpdHk7XHJcbiAgICAgICAgICAgICAgICBmaWVsZC5zcGxpdCgnLicpLmZvckVhY2goZnVuY3Rpb24gKGYpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbnRpdHkgPSBlbnRpdHlbZl07XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGVudGl0eSA9IGVudGl0eSArICcnO1xyXG4gICAgICAgICAgICAgICAgaWYgKGVudGl0eS5tYXRjaChtYXRjaGVyKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hdGNoID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmICghbWF0Y2gpIHtcclxuICAgICAgICAgICAgICAgIHJvdy52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcmVuZGVyYWJsZVJvd3M7XHJcbiAgICB9O1xyXG59XSk7XHJcblxyXG5hcHAuY29udHJvbGxlcignQ3Jpc2lzRGV0YWlsQ3RybCcsIFsnJHNjb3BlJywgJyRzdGF0ZScsICckc3RhdGVQYXJhbXMnLCAnZGF0YVNlcnZpY2UnLCBmdW5jdGlvbiAoJHNjb3BlLCAkc3RhdGUsICRzdGF0ZVBhcmFtcywgZGF0YVNlcnZpY2UpIHtcclxuICAgIC8vY29uc29sZS5sb2coJHN0YXRlUGFyYW1zKTtcclxuICAgICRzY29wZS5tb2RlbCA9IHtcclxuICAgICAgICBpZDogbnVsbCxcclxuICAgICAgICBsbUlkOiBudWxsLFxyXG4gICAgICAgIG5vcm1hbFVwcGVyOiBudWxsLFxyXG4gICAgICAgIG5vcm1hbExvdzogbnVsbCxcclxuICAgICAgICBjcmlzaXNVcHBlcjogbnVsbCxcclxuICAgICAgICBjcmlzaXNMb3c6IG51bGwsXHJcbiAgICAgICAgY3Jpc2lzQ2xpbmljYWw6IG51bGwsXHJcbiAgICAgICAgY2xpbmljYXNTaWduaWZpY2FuY2U6IG51bGwsXHJcbiAgICAgICAgc2VsZWN0ZWRsYWJJdGVtOiBudWxsXHJcbiAgICB9O1xyXG4gICAgJHNjb3BlLmxhYkl0ZW1MaXN0ID0gbnVsbDtcclxuICAgIGRhdGFTZXJ2aWNlLmdldGxhYml0ZW1MaXN0KCkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgJHNjb3BlLmxhYkl0ZW1MaXN0ID0gcmVzdWx0LmRhdGE7XHJcbiAgICAgICAgaWYgKCRzdGF0ZVBhcmFtcy5pZCkge1xyXG4gICAgICAgICAgICBkYXRhU2VydmljZS5nZXRDcmlzaXNCeUlkKCRzdGF0ZVBhcmFtcy5pZCkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUubW9kZWwgPSByZXN1bHQuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8ICRzY29wZS5sYWJJdGVtTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJHNjb3BlLmxhYkl0ZW1MaXN0W2ldLmlkID09ICRzY29wZS5tb2RlbC5sbUlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUubW9kZWwuc2VsZWN0ZWRsYWJJdGVtID0gJHNjb3BlLmxhYkl0ZW1MaXN0W2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcblxyXG5cclxuICAgICRzY29wZS5zdWJtaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZygkc2NvcGUubW9kZWwpO1xyXG4gICAgICAgIGlmICgkc2NvcGUubW9kZWwuc2VsZWN0ZWRsYWJJdGVtKSB7XHJcbiAgICAgICAgICAgICRzY29wZS5tb2RlbC5sbUlkID0gJHNjb3BlLm1vZGVsLnNlbGVjdGVkbGFiSXRlbS5pZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGF0YVNlcnZpY2Uuc2F2ZUNyaXNpcygkc2NvcGUubW9kZWwpLnRoZW4oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkc3RhdGUuZ28oJ2FwcC5jcmlzaXMnKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG59XSk7IiwiYXBwLmNvbnRyb2xsZXIoJ0RlcGFydExpc3RDdHJsJywgWyckc2NvcGUnLCAnJHN0YXRlJywgJ2RhdGFTZXJ2aWNlJywgZnVuY3Rpb24gKCRzY29wZSwgJHN0YXRlLCBkYXRhU2VydmljZSkge1xyXG4gICAgdmFyIGVkaXRVcmwgPSAnPGEgY2xhc3M9XCJlZGl0LXRwbFwiIHVpLXNyZWY9XCJhcHAuZGVwYXJ0X2RldGFpbCh7aWQ6IHJvdy5lbnRpdHkuaWR9KVwiPue8lui+kTwvYT4nO1xyXG4gICAgZWRpdFVybCArPSAnPGEgY2xhc3M9XCJkZWxldGUtdHBsXCIgbmctY2xpY2s9XCJncmlkLmFwcFNjb3BlLmRlbGV0ZShyb3cuZW50aXR5KVwiPuWIoOmZpDwvYT4nO1xyXG5cclxuICAgICRzY29wZS5ncmlkT3B0aW9ucyA9IHtcclxuICAgICAgICBlbmFibGVGaWx0ZXJpbmc6IGZhbHNlLFxyXG4gICAgICAgIG9uUmVnaXN0ZXJBcGk6IGZ1bmN0aW9uIChncmlkQXBpKSB7XHJcbiAgICAgICAgICAgICRzY29wZS5ncmlkQXBpID0gZ3JpZEFwaTtcclxuICAgICAgICAgICAgJHNjb3BlLmdyaWRBcGkuZ3JpZC5yZWdpc3RlclJvd3NQcm9jZXNzb3IoJHNjb3BlLmZpbHRlciwgMjAwKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbHVtbkRlZnM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQ6ICdpZCcsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogJ0lkJyxcclxuICAgICAgICAgICAgICAgIHZpc2libGU6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiAnZGVwdENvZGUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICfnp5HlrqTnvJbnoIEnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiAnZGVwdE5hbWUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICfnp5HlrqTlkI3np7AnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiAnbWlOYW1lJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAn5py65p6E5ZCN56ewJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnZWRpdCcsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogJ+aTjeS9nCcsXHJcbiAgICAgICAgICAgICAgICBjZWxsVGVtcGxhdGU6IGVkaXRVcmxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgIH07XHJcblxyXG4gICAgZGF0YVNlcnZpY2UuZ2V0RGVwdExpc3QoKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAkc2NvcGUuZ3JpZE9wdGlvbnMuZGF0YSA9IHJlc3VsdC5kYXRhO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJHNjb3BlLnNlYXJjaCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkc2NvcGUuZ3JpZEFwaS5ncmlkLnJlZnJlc2goKTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmNyZWF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkc3RhdGUuZ28oJ2FwcC5kZXBhcnRfZGV0YWlsJyk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5kZWxldGUgPSBmdW5jdGlvbiAob2JqKSB7XHJcbiAgICAgICAgZGF0YVNlcnZpY2UuZGVsZXRlRGVwdChvYmopLnRoZW4oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8ICRzY29wZS5ncmlkT3B0aW9ucy5kYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoJHNjb3BlLmdyaWRPcHRpb25zLmRhdGFbaV0uaWQgPT0gb2JqLmlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmdyaWRPcHRpb25zLmRhdGEuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmZpbHRlciA9IGZ1bmN0aW9uIChyZW5kZXJhYmxlUm93cykge1xyXG4gICAgICAgIHZhciBtYXRjaGVyID0gbmV3IFJlZ0V4cCgkc2NvcGUuZmlsdGVyVmFsdWUpO1xyXG4gICAgICAgIHJlbmRlcmFibGVSb3dzLmZvckVhY2goZnVuY3Rpb24gKHJvdykge1xyXG4gICAgICAgICAgICB2YXIgbWF0Y2ggPSBmYWxzZSxkZXBNYXRjaD1mYWxzZTtcclxuICAgICAgICAgICAgaWYoJHNjb3BlLm1vZGVsLnNlbGVjdGVkU2l0ZSl7XHJcbiAgICAgICAgICAgICAgICBpZihyb3cuZW50aXR5WydtaU5hbWUnXT09JHNjb3BlLm1vZGVsLnNlbGVjdGVkU2l0ZS5taU5hbWUpe1xyXG4gICAgICAgICAgICAgICAgICAgIGRlcE1hdGNoPXRydWU7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBkZXBNYXRjaD1mYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgZGVwTWF0Y2g9dHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgWydkZXB0Q29kZScsJ21pTmFtZSddLmZvckVhY2goZnVuY3Rpb24gKGZpZWxkKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZW50aXR5PSByb3cuZW50aXR5W2ZpZWxkXSsnJztcclxuICAgICAgICAgICAgICAgIGlmIChlbnRpdHkubWF0Y2gobWF0Y2hlcikpIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXRjaCA9IHRydWUgJiYgZGVwTWF0Y2g7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAoIW1hdGNoKSB7XHJcbiAgICAgICAgICAgICAgICByb3cudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHJlbmRlcmFibGVSb3dzO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUubW9kZWwgPSB7XHJcbiAgICAgICAgc2VsZWN0ZWRTaXRlOiBudWxsXHJcbiAgICB9O1xyXG4gICAgJHNjb3BlLnNpdGVMaXN0ID0gbnVsbDtcclxuXHJcbiAgICBkYXRhU2VydmljZS5nZXRTaXRlTGlzdCgpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICRzY29wZS5zaXRlTGlzdCA9IHJlc3VsdC5kYXRhO1xyXG4gICAgfSk7XHJcbn1dKTtcclxuXHJcbmFwcC5jb250cm9sbGVyKCdEZXBhcnREZXRhaWxDdHJsJywgWyckc2NvcGUnLCAnJHN0YXRlJywgJyRzdGF0ZVBhcmFtcycsICdkYXRhU2VydmljZScsIGZ1bmN0aW9uICgkc2NvcGUsICRzdGF0ZSwgJHN0YXRlUGFyYW1zLCBkYXRhU2VydmljZSkge1xyXG4gICAgLy9jb25zb2xlLmxvZygkc3RhdGVQYXJhbXMpO1xyXG4gICAgJHNjb3BlLm1vZGVsID0ge1xyXG4gICAgICAgIGlkOiBudWxsLFxyXG4gICAgICAgIHNpdGVJZDogbnVsbCxcclxuICAgICAgICBkZXB0Q29kZTogbnVsbCxcclxuICAgICAgICBkZXB0TmFtZTogbnVsbCxcclxuICAgICAgICBkZXNjOiBudWxsLFxyXG4gICAgICAgIHNlbGVjdGVkU2l0ZTogbnVsbFxyXG4gICAgfTtcclxuICAgICRzY29wZS5zaXRlTGlzdCA9IG51bGw7XHJcblxyXG4gICAgZGF0YVNlcnZpY2UuZ2V0U2l0ZUxpc3QoKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAkc2NvcGUuc2l0ZUxpc3QgPSByZXN1bHQuZGF0YTtcclxuICAgICAgICBpZiAoJHN0YXRlUGFyYW1zLmlkKSB7XHJcbiAgICAgICAgICAgIGRhdGFTZXJ2aWNlLmdldERlcHRCeUlkKCRzdGF0ZVBhcmFtcy5pZCkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUubW9kZWwgPSByZXN1bHQuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8ICRzY29wZS5zaXRlTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJHNjb3BlLnNpdGVMaXN0W2ldLmlkID09ICRzY29wZS5tb2RlbC5zaXRlSWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5tb2RlbC5zZWxlY3RlZFNpdGUgPSAkc2NvcGUuc2l0ZUxpc3RbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgJHNjb3BlLnN1Ym1pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKCRzY29wZS5tb2RlbCk7XHJcbiAgICAgICAgaWYgKCRzY29wZS5tb2RlbC5zZWxlY3RlZFNpdGUpIHtcclxuICAgICAgICAgICAgJHNjb3BlLm1vZGVsLnNpdGVJZCA9ICRzY29wZS5tb2RlbC5zZWxlY3RlZFNpdGUuaWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRhdGFTZXJ2aWNlLnNhdmVEZXB0KCRzY29wZS5tb2RlbCkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICRzdGF0ZS5nbygnYXBwLmRlcGFydCcpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbn1dKTsiLCJhcHAuY29udHJvbGxlcignRW1wbG95ZWVMaXN0Q3RybCcsIFsnJHNjb3BlJywgJyRzdGF0ZScsICdkYXRhU2VydmljZScsIGZ1bmN0aW9uICgkc2NvcGUsICRzdGF0ZSwgZGF0YVNlcnZpY2UpIHtcclxuXHJcbiAgICB2YXIgbGluayA9ICdhcHAuZW1wbG95ZWVfZGV0YWlsJztcclxuICAgIHZhciBlZGl0VXJsID0gJzxhIGNsYXNzPVwiZWRpdC10cGxcIiB1aS1zcmVmPVwiJyArIGxpbmsgKyAnKHtpZDogcm93LmVudGl0eS5pZH0pXCI+57yW6L6RPC9hPic7XHJcbiAgICBlZGl0VXJsICs9ICc8YSBjbGFzcz1cImRlbGV0ZS10cGxcIiBuZy1jbGljaz1cImdyaWQuYXBwU2NvcGUuZGVsZXRlKHJvdy5lbnRpdHkpXCI+5Yig6ZmkPC9hPic7XHJcblxyXG4gICAgJHNjb3BlLmdyaWRPcHRpb25zID0ge1xyXG4gICAgICAgIGVuYWJsZUZpbHRlcmluZzogZmFsc2UsXHJcbiAgICAgICAgb25SZWdpc3RlckFwaTogZnVuY3Rpb24gKGdyaWRBcGkpIHtcclxuICAgICAgICAgICAgJHNjb3BlLmdyaWRBcGkgPSBncmlkQXBpO1xyXG4gICAgICAgICAgICAkc2NvcGUuZ3JpZEFwaS5ncmlkLnJlZ2lzdGVyUm93c1Byb2Nlc3Nvcigkc2NvcGUuZmlsdGVyLCAyMDApO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29sdW1uRGVmczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogJ2lkJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAnSWQnLFxyXG4gICAgICAgICAgICAgICAgdmlzaWJsZTogZmFsc2VcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQ6ICdlbUNvZGUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICflkZjlt6XnvJbnoIEnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiAnZW1OYW1lJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAn5ZGY5bel5ZCN56ewJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogJ3RpdGxlTmFtZScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogJ+iBjOensOWQjeensCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQ6ICdpZE51bWJlcicsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogJ+i6q+S7veivgeWPtydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQ6ICdtaU5hbWUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICfmnLrmnoTlkI3np7AnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiAnZGVwdE5hbWUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICfnp5HlrqTlkI3np7AnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdlZGl0JyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAn5pON5L2cJyxcclxuICAgICAgICAgICAgICAgIGNlbGxUZW1wbGF0ZTogZWRpdFVybFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgfTtcclxuXHJcbiAgICBkYXRhU2VydmljZS5nZXRFbXBsb3llZUxpc3QoKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAkc2NvcGUuZ3JpZE9wdGlvbnMuZGF0YSA9IHJlc3VsdC5kYXRhO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJHNjb3BlLnNlYXJjaCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkc2NvcGUuZ3JpZEFwaS5ncmlkLnJlZnJlc2goKTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmNyZWF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkc3RhdGUuZ28obGluayk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5kZWxldGUgPSBmdW5jdGlvbiAob2JqKSB7XHJcbiAgICAgICAgZGF0YVNlcnZpY2UuZGVsZXRlRW1wbG95ZWUob2JqKS50aGVuKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAkc2NvcGUuZ3JpZE9wdGlvbnMuZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKCRzY29wZS5ncmlkT3B0aW9ucy5kYXRhW2ldLmlkID09IG9iai5pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5ncmlkT3B0aW9ucy5kYXRhLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5maWx0ZXIgPSBmdW5jdGlvbiAocmVuZGVyYWJsZVJvd3MpIHtcclxuICAgICAgICB2YXIgbWF0Y2hlciA9IG5ldyBSZWdFeHAoJHNjb3BlLmZpbHRlclZhbHVlKTtcclxuICAgICAgICByZW5kZXJhYmxlUm93cy5mb3JFYWNoKGZ1bmN0aW9uIChyb3cpIHtcclxuICAgICAgICAgICAgdmFyIG1hdGNoID0gZmFsc2U7XHJcbiAgICAgICAgICAgIFsnZW1Db2RlJywgJ2VtTmFtZScsICd0aXRsZU5hbWUnLCAnaWROdW1iZXInLCAnbWlOYW1lJywgJ2RlcHROYW1lJ10uZm9yRWFjaChmdW5jdGlvbiAoZmllbGQpIHtcclxuICAgICAgICAgICAgICAgIHZhciBlbnRpdHkgPSByb3cuZW50aXR5W2ZpZWxkXSArICcnO1xyXG4gICAgICAgICAgICAgICAgaWYgKGVudGl0eS5tYXRjaChtYXRjaGVyKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hdGNoID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmICghbWF0Y2gpIHtcclxuICAgICAgICAgICAgICAgIHJvdy52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcmVuZGVyYWJsZVJvd3M7XHJcbiAgICB9O1xyXG59XSk7XHJcblxyXG5hcHAuY29udHJvbGxlcignRW1wbG95ZWVEZXRhaWxDdHJsJywgWyckc2NvcGUnLCAnJHN0YXRlJywgJyRzdGF0ZVBhcmFtcycsICdkYXRhU2VydmljZScsICckcScsIGZ1bmN0aW9uICgkc2NvcGUsICRzdGF0ZSwgJHN0YXRlUGFyYW1zLCBkYXRhU2VydmljZSwgJHEpIHtcclxuICAgIC8vY29uc29sZS5sb2coJHN0YXRlUGFyYW1zKTtcclxuICAgICRzY29wZS5tb2RlbCA9IHtcclxuXHJcbiAgICAgICAgaWQ6IG51bGwsXHJcbiAgICAgICAgc2l0ZUlkOiBudWxsLFxyXG4gICAgICAgIGRlcHRJZDogbnVsbCxcclxuICAgICAgICBlbUNvZGU6IG51bGwsXHJcbiAgICAgICAgZW1OYW1lOiBudWxsLFxyXG4gICAgICAgIGlkTnVtYmVyOiBudWxsLFxyXG4gICAgICAgIHBob25lOiBudWxsLFxyXG4gICAgICAgIHRpdGxlSWQ6IG51bGwsXHJcbiAgICAgICAgdGl0bGVOYW1lOiBudWxsLFxyXG4gICAgICAgIHBhc3N3b3JkOiBudWxsLFxyXG4gICAgICAgIGRlc2M6IG51bGwsXHJcbiAgICAgICAgYmlydGhEYXk6IG51bGwsXHJcbiAgICAgICAgc2VsZWN0ZWRTaXRlOiBudWxsLFxyXG4gICAgICAgIHNlbGVjdGVkRGVwdDogbnVsbFxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuc2l0ZUxpc3QgPSBudWxsO1xyXG4gICAgJHNjb3BlLmRlcHRMaXN0ID0gbnVsbDtcclxuICAgICRzY29wZS5zZWxlY3RlZFNleCA9IG51bGw7XHJcblxyXG4gICAgJHNjb3BlLmRhdGVPcHRpb25zID0ge1xyXG4gICAgICAgIGZvcm1hdFllYXI6ICd5eScsXHJcbiAgICAgICAgc3RhcnRpbmdEYXk6IDEsXHJcbiAgICAgICAgY2xhc3M6ICdkYXRlcGlja2VyJ1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUub3BlbkRhdGUgPSBmdW5jdGlvbiAoJGV2ZW50KSB7XHJcbiAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICRzY29wZS5vcGVuZWQgPSB0cnVlO1xyXG4gICAgfTtcclxuXHJcbiAgICBpZiAoJHN0YXRlUGFyYW1zLmlkKSB7XHJcbiAgICAgICAgJHEuYWxsKFtcclxuICAgICAgICAgICAgZGF0YVNlcnZpY2UuZ2V0U2l0ZUxpc3QoKSxcclxuICAgICAgICAgICAgZGF0YVNlcnZpY2UuZ2V0RGVwdExpc3QoKSxcclxuICAgICAgICAgICAgZGF0YVNlcnZpY2UuZ2V0RW1wbG95ZWVCeUlkKCRzdGF0ZVBhcmFtcy5pZClcclxuICAgICAgICBdKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgJHNjb3BlLnNpdGVMaXN0ID0gcmVzdWx0WzBdLmRhdGE7XHJcbiAgICAgICAgICAgICRzY29wZS5kZXB0TGlzdCA9IHJlc3VsdFsxXS5kYXRhO1xyXG4gICAgICAgICAgICAkc2NvcGUubW9kZWwgPSByZXN1bHRbMl0uZGF0YTtcclxuICAgICAgICAgICAgJHNjb3BlLm1vZGVsLnBhc3N3b3JkMSA9ICRzY29wZS5tb2RlbC5wYXNzd29yZDtcclxuICAgICAgICAgICAgaWYgKCRzY29wZS5zaXRlTGlzdCkge1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLnNpdGVMaXN0LmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5pZCA9PSAkc2NvcGUubW9kZWwuc2l0ZUlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5tb2RlbC5zZWxlY3RlZFNpdGUgPSBpdGVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICgkc2NvcGUuZGVwdExpc3QpIHtcclxuICAgICAgICAgICAgICAgICRzY29wZS5kZXB0TGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0uaWQgPT0gJHNjb3BlLm1vZGVsLmRlcHRJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUubW9kZWwuc2VsZWN0ZWREZXB0ID0gaXRlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBkYXRhU2VydmljZS5nZXRTaXRlTGlzdCgpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAkc2NvcGUuc2l0ZUxpc3QgPSByZXN1bHQuZGF0YTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBkYXRhU2VydmljZS5nZXREZXB0TGlzdCgpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAkc2NvcGUuZGVwdExpc3QgPSByZXN1bHQuZGF0YTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgICRzY29wZS5zdWJtaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZygkc2NvcGUubW9kZWwpO1xyXG4gICAgICAgIGlmICgkc2NvcGUubW9kZWwuc2VsZWN0ZWRTaXRlKSB7XHJcbiAgICAgICAgICAgICRzY29wZS5tb2RlbC5zaXRlSWQgPSAkc2NvcGUubW9kZWwuc2VsZWN0ZWRTaXRlLmlkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoJHNjb3BlLm1vZGVsLnNlbGVjdGVkRGVwdCkge1xyXG4gICAgICAgICAgICAkc2NvcGUubW9kZWwuZGVwdElkID0gJHNjb3BlLm1vZGVsLnNlbGVjdGVkRGVwdC5pZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRhdGFTZXJ2aWNlLnNhdmVFbXBsb3llZSgkc2NvcGUubW9kZWwpLnRoZW4oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkc3RhdGUuZ28oJ2FwcC5lbXBsb3llZScpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbn1dKTsiLCJhcHAuY29udHJvbGxlcignTGFiaXRlbUxpc3RDdHJsJywgWyckc2NvcGUnLCAnJHN0YXRlJywgJ2RhdGFTZXJ2aWNlJywgZnVuY3Rpb24gKCRzY29wZSwgJHN0YXRlLCBkYXRhU2VydmljZSkge1xyXG5cclxuICAgIHZhciBsaW5rID0gJ2FwcC5sYWJpdGVtX2RldGFpbCc7XHJcbiAgICB2YXIgZWRpdFVybCA9ICc8YSBjbGFzcz1cImVkaXQtdHBsXCIgdWktc3JlZj1cIicgKyBsaW5rICsgJyh7aWQ6IHJvdy5lbnRpdHkuaWR9KVwiPue8lui+kTwvYT4nO1xyXG4gICAgZWRpdFVybCArPSAnPGEgY2xhc3M9XCJkZWxldGUtdHBsXCIgbmctY2xpY2s9XCJncmlkLmFwcFNjb3BlLmRlbGV0ZShyb3cuZW50aXR5KVwiPuWIoOmZpDwvYT4nO1xyXG5cclxuICAgICRzY29wZS5ncmlkT3B0aW9ucyA9IHtcclxuICAgICAgICBlbmFibGVGaWx0ZXJpbmc6IGZhbHNlLFxyXG4gICAgICAgIG9uUmVnaXN0ZXJBcGk6IGZ1bmN0aW9uIChncmlkQXBpKSB7XHJcbiAgICAgICAgICAgICRzY29wZS5ncmlkQXBpID0gZ3JpZEFwaTtcclxuICAgICAgICAgICAgJHNjb3BlLmdyaWRBcGkuZ3JpZC5yZWdpc3RlclJvd3NQcm9jZXNzb3IoJHNjb3BlLmZpbHRlciwgMjAwKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbHVtbkRlZnM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQ6ICdpZCcsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogJ0lkJyxcclxuICAgICAgICAgICAgICAgIHZpc2libGU6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiAnaXRlbUNvZGUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICfku6PnoIEnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiAnc3RhbmRhcmRDb2RlJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAn5qOA6aqM5YiG57G7J1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogJ2l0ZW1OYW1lJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAn6aG555uu5ZCN56ewJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogJ2NhdGVnb3J5JyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAn57uT5p6c57G75Z6LJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnZWRpdCcsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogJ+aTjeS9nCcsXHJcbiAgICAgICAgICAgICAgICBjZWxsVGVtcGxhdGU6IGVkaXRVcmxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgIH07XHJcblxyXG4gICAgZGF0YVNlcnZpY2UuZ2V0bGFiaXRlbUxpc3QoKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAkc2NvcGUuZ3JpZE9wdGlvbnMuZGF0YSA9IHJlc3VsdC5kYXRhO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJHNjb3BlLnNlYXJjaCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkc2NvcGUuZ3JpZEFwaS5ncmlkLnJlZnJlc2goKTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmNyZWF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkc3RhdGUuZ28obGluayk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5kZWxldGUgPSBmdW5jdGlvbiAob2JqKSB7XHJcbiAgICAgICAgZGF0YVNlcnZpY2UuZGVsZXRlTGFiSXRlbShvYmopLnRoZW4oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8ICRzY29wZS5ncmlkT3B0aW9ucy5kYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoJHNjb3BlLmdyaWRPcHRpb25zLmRhdGFbaV0uaWQgPT0gb2JqLmlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmdyaWRPcHRpb25zLmRhdGEuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmZpbHRlciA9IGZ1bmN0aW9uIChyZW5kZXJhYmxlUm93cykge1xyXG4gICAgICAgIHZhciBtYXRjaGVyID0gbmV3IFJlZ0V4cCgkc2NvcGUuZmlsdGVyVmFsdWUpO1xyXG4gICAgICAgIHJlbmRlcmFibGVSb3dzLmZvckVhY2goZnVuY3Rpb24gKHJvdykge1xyXG4gICAgICAgICAgICB2YXIgbWF0Y2ggPSBmYWxzZTtcclxuICAgICAgICAgICAgWydpdGVtQ29kZScsICdpdGVtTmFtZScsICdzdGFuZGFyZENvZGUnXS5mb3JFYWNoKGZ1bmN0aW9uIChmaWVsZCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGVudGl0eSA9IHJvdy5lbnRpdHlbZmllbGRdICsgJyc7XHJcbiAgICAgICAgICAgICAgICBpZiAoZW50aXR5Lm1hdGNoKG1hdGNoZXIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF0Y2ggPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYgKCFtYXRjaCkge1xyXG4gICAgICAgICAgICAgICAgcm93LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiByZW5kZXJhYmxlUm93cztcclxuICAgIH07XHJcbn1dKTtcclxuXHJcbmFwcC5jb250cm9sbGVyKCdMYWJpdGVtRGV0YWlsQ3RybCcsIFsnJHNjb3BlJywgJyRzdGF0ZScsICckc3RhdGVQYXJhbXMnLCAnZGF0YVNlcnZpY2UnLCAnJHEnLCBmdW5jdGlvbiAoJHNjb3BlLCAkc3RhdGUsICRzdGF0ZVBhcmFtcywgZGF0YVNlcnZpY2UsICRxKSB7XHJcbiAgICAvL2NvbnNvbGUubG9nKCRzdGF0ZVBhcmFtcyk7XHJcbiAgICAkc2NvcGUubW9kZWwgPSB7XHJcbiAgICAgICAgaWQ6IG51bGwsXHJcbiAgICAgICAgbGNJZDogbnVsbCxcclxuICAgICAgICBpdGVtQ29kZTogbnVsbCxcclxuICAgICAgICBzdGFuZGFyZENvZGU6IG51bGwsXHJcbiAgICAgICAgaXRlbU5hbWU6IG51bGwsXHJcbiAgICAgICAgY2F0ZWdvcnk6IG51bGwsXHJcbiAgICAgICAgcmVzdWx0VHlwZTogbnVsbCxcclxuICAgICAgICB1bml0OiBudWxsLFxyXG4gICAgICAgIGxpZmVMaW1pdDogbnVsbCxcclxuICAgICAgICBkZWZWYWx1ZTogbnVsbCxcclxuICAgICAgICB0eXBlQ29kZTE6IG51bGwsXHJcbiAgICAgICAgdHlwZUNvZGUyOiBudWxsLFxyXG4gICAgICAgIGltcG9ydGFudDogbnVsbCxcclxuICAgICAgICBhc3NvY2lhdGVkOiBudWxsLFxyXG4gICAgICAgIGNvbmRpdGlvbkF1ZGl0OiBudWxsLFxyXG4gICAgICAgIGNvbW1lbnQ6IG51bGwsXHJcbiAgICAgICAgZGlzcGxheTogbnVsbCxcclxuICAgICAgICBwcmVjaXNpb246IG51bGwsXHJcbiAgICAgICAgcHJpY2U6IG51bGwsXHJcbiAgICAgICAgY2FuWmVybzogbnVsbCxcclxuICAgICAgICBjYW5MZXNzWmVybzogbnVsbCxcclxuICAgICAgICBtZWFuT2ZjbGluaWM6IG51bGwsXHJcbiAgICAgICAgZGVzYzogbnVsbCxcclxuICAgICAgICBzZWxlY3RlZExhYkNhdGVnb3J5OiBudWxsXHJcbiAgICB9O1xyXG4gICAgJHNjb3BlLmxhYkNhdGVnb3J5TGlzdCA9IG51bGw7XHJcblxyXG5cclxuICAgIGlmICgkc3RhdGVQYXJhbXMuaWQpIHtcclxuICAgICAgICAkcS5hbGwoW1xyXG4gICAgICAgICAgICBkYXRhU2VydmljZS5nZXRMYWJDYXRlZ29yeUxpc3QoKSxcclxuICAgICAgICAgICAgZGF0YVNlcnZpY2UuZ2V0TGFiSXRlbUJ5SWQoJHN0YXRlUGFyYW1zLmlkKVxyXG4gICAgICAgIF0pLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAkc2NvcGUubGFiQ2F0ZWdvcnlMaXN0ID0gcmVzdWx0WzBdLmRhdGE7XHJcbiAgICAgICAgICAgICRzY29wZS5tb2RlbCA9IHJlc3VsdFsxXS5kYXRhO1xyXG4gICAgICAgICAgICBpZiAoJHNjb3BlLmxhYkNhdGVnb3J5TGlzdCkge1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmxhYkNhdGVnb3J5TGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0uaWQgPT0gJHNjb3BlLm1vZGVsLmxjSWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLm1vZGVsLnNlbGVjdGVkTGFiQ2F0ZWdvcnkgPSBpdGVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRhdGFTZXJ2aWNlLmdldExhYkNhdGVnb3J5TGlzdCgpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAkc2NvcGUubGFiQ2F0ZWdvcnlMaXN0ID0gcmVzdWx0LmRhdGE7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgJHNjb3BlLnN1Ym1pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKCRzY29wZS5tb2RlbCk7XHJcbiAgICAgICAgaWYgKCRzY29wZS5tb2RlbC5zZWxlY3RlZExhYkNhdGVnb3J5KSB7XHJcbiAgICAgICAgICAgICRzY29wZS5tb2RlbC5sY0lkID0gJHNjb3BlLm1vZGVsLnNlbGVjdGVkTGFiQ2F0ZWdvcnkuaWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRhdGFTZXJ2aWNlLnNhdmVMYWJpdGVtKCRzY29wZS5tb2RlbCkudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICRzdGF0ZS5nbygnYXBwLmxhYml0ZW0nKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG59XSk7IiwiYXBwLmNvbnRyb2xsZXIoJ0xhYkl0ZW1TZXRMaXN0Q3RybCcsIFsnJHNjb3BlJywgJyRzdGF0ZScsICdkYXRhU2VydmljZScsIGZ1bmN0aW9uICgkc2NvcGUsICRzdGF0ZSwgZGF0YVNlcnZpY2UpIHtcclxuXHJcbiAgICB2YXIgbGluayA9ICdhcHAubGFiaXRlbXNldF9kZXRhaWwnO1xyXG4gICAgdmFyIGVkaXRVcmwgPSAnPGEgY2xhc3M9XCJlZGl0LXRwbFwiIHVpLXNyZWY9XCInICsgbGluayArICcoe2lkOiByb3cuZW50aXR5LmlkfSlcIj7nvJbovpE8L2E+JztcclxuICAgIGVkaXRVcmwgKz0gJzxhIGNsYXNzPVwiZGVsZXRlLXRwbFwiIG5nLWNsaWNrPVwiZ3JpZC5hcHBTY29wZS5kZWxldGUocm93LmVudGl0eSlcIj7liKDpmaQ8L2E+JztcclxuXHJcbiAgICAkc2NvcGUuZ3JpZE9wdGlvbnMgPSB7XHJcbiAgICAgICAgZW5hYmxlRmlsdGVyaW5nOiBmYWxzZSxcclxuICAgICAgICBvblJlZ2lzdGVyQXBpOiBmdW5jdGlvbiAoZ3JpZEFwaSkge1xyXG4gICAgICAgICAgICAkc2NvcGUuZ3JpZEFwaSA9IGdyaWRBcGk7XHJcbiAgICAgICAgICAgICRzY29wZS5ncmlkQXBpLmdyaWQucmVnaXN0ZXJSb3dzUHJvY2Vzc29yKCRzY29wZS5maWx0ZXIsIDIwMCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb2x1bW5EZWZzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiAnaWQnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICdJZCcsXHJcbiAgICAgICAgICAgICAgICB2aXNpYmxlOiBmYWxzZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogJ2xpc0NvZGUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICfnu4TlkIjpobnnm67ku6PnoIEnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiAnbGlzTmFtZScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogJ+e7hOWQiOmhueebruWQjeensCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQ6ICdsYWJJdGVtU3RyaW5nJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAn5YyF5ZCr6aG555uuJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogJ2NvbW1lbnQnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICflpIfms6gnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdlZGl0JyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAn5pON5L2cJyxcclxuICAgICAgICAgICAgICAgIGNlbGxUZW1wbGF0ZTogZWRpdFVybFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgfTtcclxuXHJcbiAgICBkYXRhU2VydmljZS5nZXRMYWJJdGVtU2V0TGlzdCgpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICRzY29wZS5ncmlkT3B0aW9ucy5kYXRhID0gcmVzdWx0LmRhdGE7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkc2NvcGUuc2VhcmNoID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICRzY29wZS5ncmlkQXBpLmdyaWQucmVmcmVzaCgpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuY3JlYXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICRzdGF0ZS5nbyhsaW5rKTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmRlbGV0ZSA9IGZ1bmN0aW9uIChvYmopIHtcclxuICAgICAgICBkYXRhU2VydmljZS5kZWxldGVMYWJJdGVtU2V0KG9iaikudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgJHNjb3BlLmdyaWRPcHRpb25zLmRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmICgkc2NvcGUuZ3JpZE9wdGlvbnMuZGF0YVtpXS5pZCA9PSBvYmouaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZ3JpZE9wdGlvbnMuZGF0YS5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuZmlsdGVyID0gZnVuY3Rpb24gKHJlbmRlcmFibGVSb3dzKSB7XHJcbiAgICAgICAgdmFyIG1hdGNoZXIgPSBuZXcgUmVnRXhwKCRzY29wZS5maWx0ZXJWYWx1ZSk7XHJcbiAgICAgICAgcmVuZGVyYWJsZVJvd3MuZm9yRWFjaChmdW5jdGlvbiAocm93KSB7XHJcbiAgICAgICAgICAgIHZhciBtYXRjaCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBbJ2xpc05hbWUnLCAnbGlzQ29kZScsJ2xhYkl0ZW1TdHJpbmcnXS5mb3JFYWNoKGZ1bmN0aW9uIChmaWVsZCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGVudGl0eSA9IHJvdy5lbnRpdHlbZmllbGRdICsgJyc7XHJcbiAgICAgICAgICAgICAgICBpZiAoZW50aXR5Lm1hdGNoKG1hdGNoZXIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF0Y2ggPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYgKCFtYXRjaCkge1xyXG4gICAgICAgICAgICAgICAgcm93LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiByZW5kZXJhYmxlUm93cztcclxuICAgIH07XHJcbn1dKTtcclxuXHJcbmFwcC5jb250cm9sbGVyKCdMYWJJdGVtU2V0RGV0YWlsQ3RybCcsIFsnJHNjb3BlJywgJyRzdGF0ZScsICckc3RhdGVQYXJhbXMnLCAnZGF0YVNlcnZpY2UnLCBmdW5jdGlvbiAoJHNjb3BlLCAkc3RhdGUsICRzdGF0ZVBhcmFtcywgZGF0YVNlcnZpY2UpIHtcclxuXHJcbiAgICAkc2NvcGUubW9kZWwgPSB7XHJcbiAgICAgICAgbGFiSXRlbXM6IFtdLFxyXG4gICAgICAgIGxpc0NvZGU6IG51bGwsXHJcbiAgICAgICAgbGlzTmFtZTogbnVsbCxcclxuICAgICAgICBjb21tZW50OiBudWxsLFxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuc2VsZWN0ZWRsYWJJdGVtID0gbnVsbDtcclxuICAgICRzY29wZS5sYWJJdGVtTGlzdCA9IG51bGw7XHJcblxyXG4gICAgZGF0YVNlcnZpY2UuZ2V0bGFiaXRlbUxpc3QoKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAkc2NvcGUubGFiSXRlbUxpc3QgPSByZXN1bHQuZGF0YTtcclxuICAgICAgICBpZiAoJHN0YXRlUGFyYW1zLmlkKSB7XHJcbiAgICAgICAgICAgIGRhdGFTZXJ2aWNlLmdldExhYkl0ZW1TZXRCeUlkKCRzdGF0ZVBhcmFtcy5pZCkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUubW9kZWwgPSByZXN1bHQuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoJHNjb3BlLm1vZGVsLmxhYkl0ZW1zICYmICRzY29wZS5tb2RlbC5sYWJJdGVtcy5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5sYWJJdGVtTGlzdCAmJiAkc2NvcGUubGFiSXRlbUxpc3QubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbGlzdCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUubW9kZWwubGFiSXRlbXMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmxhYkl0ZW1MaXN0LmZvckVhY2goZnVuY3Rpb24gKGxhYikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLmlkID09IGxhYi5pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0LnB1c2gobGFiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5tb2RlbC5sYWJJdGVtcyA9IGxpc3Q7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAkc2NvcGUuc3VibWl0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGRhdGFTZXJ2aWNlLnNhdmVMYWJJdGVtU2V0KCRzY29wZS5tb2RlbCkudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICRzdGF0ZS5nbygnYXBwLmxhYml0ZW1zZXQnKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG59XSk7IiwiYXBwLmNvbnRyb2xsZXIoJ0xhYnJlc3VsdExpc3RDdHJsJywgWyckc2NvcGUnLCAnJHN0YXRlJywgJ2RhdGFTZXJ2aWNlJywgJ3V0aWwnLCAnJGxvY2F0aW9uJywgZnVuY3Rpb24gKCRzY29wZSwgJHN0YXRlLCBkYXRhU2VydmljZSwgdXRpbCwkbG9jYXRpb24pIHtcclxuICAgIHZhciBlZGl0VXJsID0gJzxhIGNsYXNzPVwiZWRpdC10cGxcIiB1aS1zcmVmPVwibGFicmVzdWx0X3ByaW50KHtpZDogcm93LmVudGl0eS5pZH0pXCI+5p+l55yLPC9hPidcclxuXHJcbiAgICAkc2NvcGUuZ3JpZE9wdGlvbnMgPSB7XHJcbiAgICAgICAgZW5hYmxlRmlsdGVyaW5nOiBmYWxzZSxcclxuICAgICAgICBvblJlZ2lzdGVyQXBpOiBmdW5jdGlvbiAoZ3JpZEFwaSkge1xyXG4gICAgICAgICAgICAkc2NvcGUuZ3JpZEFwaSA9IGdyaWRBcGk7XHJcbiAgICAgICAgICAgICRzY29wZS5ncmlkQXBpLmdyaWQucmVnaXN0ZXJSb3dzUHJvY2Vzc29yKCRzY29wZS5maWx0ZXIsIDIwMCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb2x1bW5EZWZzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiAnaWQnLFxyXG4gICAgICAgICAgICAgICAgdmlzaWJsZTogZmFsc2VcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQ6ICdyZXF1ZXN0Tm8nLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICfnlLPor7fljZXlj7cnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiAncGF0aWVudC5wdE5hbWUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICfnl4XkurrlkI3lrZcnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiAnbWlOYW1lJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAn5py65p6E5ZCN56ewJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogJ2Zvcm1hdGVkUmVxVGltZScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogJ+eUs+ivt+aXtumXtCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ2VkaXQnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICfmk43kvZwnLFxyXG4gICAgICAgICAgICAgICAgY2VsbFRlbXBsYXRlOiBlZGl0VXJsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICB9O1xyXG4gICAgdmFyIHBhcmFtcz0kbG9jYXRpb24uc2VhcmNoKCk7XHJcbiAgICBpZihwYXJhbXMucmVpZCl7XHJcbiAgICAgICAgZGVidWdnZXJcclxuICAgIH1lbHNle1xyXG4gICAgICAgIGRhdGFTZXJ2aWNlLmdldFJlcXVlc3RMaXN0KCkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIHJlc3VsdC5kYXRhLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0uZm9ybWF0ZWRSZXFUaW1lID0gdXRpbC5mb3JtYXRlRGF0ZShpdGVtLnJlcVRpbWUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgJHNjb3BlLmdyaWRPcHRpb25zLmRhdGEgPSByZXN1bHQuZGF0YTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgICRzY29wZS5zZWFyY2ggPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJHNjb3BlLmdyaWRBcGkuZ3JpZC5yZWZyZXNoKCk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5jcmVhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJHN0YXRlLmdvKCdhcHAubGFicmVzdWx0X2RldGFpbCcpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuZmlsdGVyID0gZnVuY3Rpb24gKHJlbmRlcmFibGVSb3dzKSB7XHJcbiAgICAgICAgdmFyIG1hdGNoZXIgPSBuZXcgUmVnRXhwKCRzY29wZS5maWx0ZXJWYWx1ZSk7XHJcbiAgICAgICAgcmVuZGVyYWJsZVJvd3MuZm9yRWFjaChmdW5jdGlvbiAocm93KSB7XHJcbiAgICAgICAgICAgIHZhciBtYXRjaCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBbJ3JlcXVlc3RObycsICdwYXRpZW50LnB0TmFtZScsJ21pTmFtZSddLmZvckVhY2goZnVuY3Rpb24gKGZpZWxkKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZW50aXR5ID0gcm93LmVudGl0eTtcclxuICAgICAgICAgICAgICAgIGZpZWxkLnNwbGl0KCcuJykuZm9yRWFjaChmdW5jdGlvbiAoZikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGVudGl0eVtmXSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eSA9IGVudGl0eVtmXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGVudGl0eSA9IGVudGl0eSArICcnO1xyXG4gICAgICAgICAgICAgICAgaWYgKGVudGl0eS5tYXRjaChtYXRjaGVyKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hdGNoID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmICghbWF0Y2gpIHtcclxuICAgICAgICAgICAgICAgIHJvdy52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcmVuZGVyYWJsZVJvd3M7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5tb2RlbCA9IHtcclxuICAgICAgICBzZWxlY3RlZFNpdGU6IG51bGxcclxuICAgIH07XHJcbiAgICAkc2NvcGUuc2l0ZUxpc3QgPSBudWxsO1xyXG5cclxuICAgIGRhdGFTZXJ2aWNlLmdldFNpdGVMaXN0KCkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgJHNjb3BlLnNpdGVMaXN0ID0gcmVzdWx0LmRhdGE7XHJcbiAgICB9KTtcclxuXHJcbn1dKTtcclxuXHJcbmFwcC5jb250cm9sbGVyKCdMYWJyZXN1bHREZXRhaWxDdHJsJywgWyckc2NvcGUnLCAnJHN0YXRlJywgJyRzdGF0ZVBhcmFtcycsICdkYXRhU2VydmljZScsIGZ1bmN0aW9uICgkc2NvcGUsICRzdGF0ZSwgJHN0YXRlUGFyYW1zLCBkYXRhU2VydmljZSkge1xyXG5cclxuICAgICRzY29wZS5kYXRhID0ge1xyXG4gICAgICAgIHNlbGVjdGVkbGFiSXRlbTogbnVsbFxyXG4gICAgfTtcclxuICAgIGRhdGFTZXJ2aWNlLmdldFJlcXVlc3RMaXN0KCkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgJHNjb3BlLml0ZW1MaXN0ID0gcmVzdWx0LmRhdGE7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkc2NvcGUuJHdhdGNoKCdkYXRhLnNlbGVjdGVkbGFiSXRlbScsIGZ1bmN0aW9uIChuZXdWLCBvbGRWKSB7XHJcbiAgICAgICAgaWYgKG5ld1YpIHtcclxuICAgICAgICAgICAgZGF0YVNlcnZpY2UuZ2V0UmVxdWVzdEJ5SWQobmV3Vi5pZCkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUubW9kZWwgPSByZXN1bHQuZGF0YTtcclxuICAgICAgICAgICAgICAgIGlmICgkc2NvcGUubW9kZWwubGFiSW5mb3MpIHtcclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUubW9kZWwubGFiSW5mb3MuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2luaXQgbGlzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZighaXRlbS5sYWJSZXN1bHQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5sYWJSZXN1bHQ9e307XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgJHNjb3BlLnN1Ym1pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBkYXRhU2VydmljZS5zYXZlTGFiUmVzdWx0KCRzY29wZS5tb2RlbC5sYWJJbmZvcykudGhlbihmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAkc3RhdGUuZ28oJ2FwcC5sYWJyZXN1bHQnKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbn1dKTtcclxuXHJcbmFwcC5jb250cm9sbGVyKCdMYWJyZXN1bHRQcmludEN0cmwnLCBbJyRzY29wZScsICckc3RhdGUnLCAnJHN0YXRlUGFyYW1zJywgJ2RhdGFTZXJ2aWNlJywgZnVuY3Rpb24gKCRzY29wZSwgJHN0YXRlLCAkc3RhdGVQYXJhbXMsIGRhdGFTZXJ2aWNlKSB7XHJcbiAgICBcclxuICAgIGlmICgkc3RhdGVQYXJhbXMuaWQpIHtcclxuICAgICAgICBkYXRhU2VydmljZS5nZXRSZXF1ZXN0QnlJZCgkc3RhdGVQYXJhbXMuaWQpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAkc2NvcGUubW9kZWwgPSByZXN1bHQuZGF0YTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufV0pOyIsImFwcC5jb250cm9sbGVyKCdMb2dpc3RpY3NMaXN0Q3RybCcsIFsnJHNjb3BlJywgJyRtb2RhbCcsICckc3RhdGUnLCAnZGF0YVNlcnZpY2UnLCAndXRpbCcsIGZ1bmN0aW9uICgkc2NvcGUsICRtb2RhbCwgJHN0YXRlLCBkYXRhU2VydmljZSwgdXRpbCkge1xyXG5cclxuICAgICRzY29wZS5ncmlkT3B0aW9ucyA9IHtcclxuICAgICAgICBlbmFibGVGaWx0ZXJpbmc6IGZhbHNlLFxyXG4gICAgICAgIG9uUmVnaXN0ZXJBcGk6IGZ1bmN0aW9uIChncmlkQXBpKSB7XHJcbiAgICAgICAgICAgICRzY29wZS5ncmlkQXBpID0gZ3JpZEFwaTtcclxuICAgICAgICAgICAgJHNjb3BlLmdyaWRBcGkuZ3JpZC5yZWdpc3RlclJvd3NQcm9jZXNzb3IoJHNjb3BlLmZpbHRlciwgMjAwKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbHVtbkRlZnM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQ6ICdpZCcsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogJ0lkJyxcclxuICAgICAgICAgICAgICAgIHZpc2libGU6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiAnc2VuZEVtTmFtZScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogJ+mAgeajgOS6uidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQ6ICdsc0VtTmFtZScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogJ+eJqea1geaOpeaUtuS6uidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQ6ICdjZW50ZXJFbU5hbWUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICfmo4DpqozkuK3lv4PmjqXmlLbkuronXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiAnbWlOYW1lJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAn5py65p6E5ZCN56ewJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogJ2Zvcm1hdGVkU2VuZFRpbWUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICfpgIHmo4Dml7bpl7QnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiAnbHNTdGF0dXNOYW1lJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAn54mp5rWB54q25oCBJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUucmVsb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGRhdGFTZXJ2aWNlLmdldExvZ2lMaXN0KCkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIHJlc3VsdC5kYXRhLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0uZm9ybWF0ZWRTZW5kVGltZSA9IHV0aWwuZm9ybWF0ZURhdGUoaXRlbS5zZW5kVGltZSk7XHJcbiAgICAgICAgICAgICAgICBpdGVtLmxzU3RhdHVzTmFtZSA9IHV0aWwuZ2V0TG9naXN0aWNzU3RhdHVzKGl0ZW0ubHNTdGF0dXMpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICRzY29wZS5ncmlkT3B0aW9ucy5kYXRhID0gcmVzdWx0LmRhdGE7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5yZWxvYWQoKTtcclxuXHJcbiAgICAkc2NvcGUuc2VhcmNoID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICRzY29wZS5ncmlkQXBpLmdyaWQucmVmcmVzaCgpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuZmlsdGVyID0gZnVuY3Rpb24gKHJlbmRlcmFibGVSb3dzKSB7XHJcbiAgICAgICAgdmFyIG1hdGNoZXIgPSBuZXcgUmVnRXhwKCRzY29wZS5maWx0ZXJWYWx1ZSk7XHJcbiAgICAgICAgcmVuZGVyYWJsZVJvd3MuZm9yRWFjaChmdW5jdGlvbiAocm93KSB7XHJcbiAgICAgICAgICAgIHZhciBtYXRjaCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBbJ3NlbmRFbU5hbWUnLCAnbHNFbU5hbWUnLCAnY2VudGVyRW1OYW1lJywgJ2xzU3RhdHVzTmFtZSddLmZvckVhY2goZnVuY3Rpb24gKGZpZWxkKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZW50aXR5ID0gcm93LmVudGl0eVtmaWVsZF0gKyAnJztcclxuICAgICAgICAgICAgICAgIGlmIChlbnRpdHkubWF0Y2gobWF0Y2hlcikpIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXRjaCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAoIW1hdGNoKSB7XHJcbiAgICAgICAgICAgICAgICByb3cudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHJlbmRlcmFibGVSb3dzO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuYWNjZXB0ID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnJlamVjdCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5vcGVuQWNjZXB0RGlhbG9nID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICRtb2RhbC5vcGVuKHtcclxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICcvYXBwL3RwbC9kaWFsb2cvYWNjZXB0X3NhbXBsZV9kaWFsb2cuaHRtbCcsXHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdTYW1wbGVEaWFsb2dDdHJsJyxcclxuICAgICAgICAgICAgc2l6ZTogJ2xnJyxcclxuICAgICAgICAgICAgcmVzb2x2ZToge1xyXG4gICAgICAgICAgICAgICAgZ3JpZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbG9hZDogJHNjb3BlLnJlbG9hZFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUub3BlblNlbmREaWFsb2cgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJG1vZGFsLm9wZW4oe1xyXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy9hcHAvdHBsL2RpYWxvZy9zZW5kX3NhbXBsZV9kaWFsb2cuaHRtbCcsXHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdTYW1wbGVEaWFsb2dDdHJsJyxcclxuICAgICAgICAgICAgc2l6ZTogJ2xnJyxcclxuICAgICAgICAgICAgcmVzb2x2ZToge1xyXG4gICAgICAgICAgICAgICAgZ3JpZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbG9hZDogJHNjb3BlLnJlbG9hZFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUubW9kZWwgPSB7XHJcbiAgICAgICAgc2VsZWN0ZWRTaXRlOiBudWxsXHJcbiAgICB9O1xyXG4gICAgJHNjb3BlLnNpdGVMaXN0ID0gbnVsbDtcclxuXHJcbiAgICBkYXRhU2VydmljZS5nZXRTaXRlTGlzdCgpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICRzY29wZS5zaXRlTGlzdCA9IHJlc3VsdC5kYXRhO1xyXG4gICAgfSk7XHJcbn1dKTtcclxuXHJcbmFwcC5jb250cm9sbGVyKCdTYW1wbGVEaWFsb2dDdHJsJywgWyckc2NvcGUnLCAnJHN0YXRlJywgJyRtb2RhbEluc3RhbmNlJywgJ2RhdGFTZXJ2aWNlJywgJ2dyaWQnLCBmdW5jdGlvbiAoJHNjb3BlLCAkc3RhdGUsICRtb2RhbEluc3RhbmNlLCBkYXRhU2VydmljZSwgZ3JpZCkge1xyXG4gICAgJHNjb3BlLnNhbXBsZU5vID0gbnVsbDtcclxuICAgICRzY29wZS5mb2N1c0ZsYWcgPSAxO1xyXG4gICAgJHNjb3BlLm1vZGVsID0ge1xyXG4gICAgICAgIHNlbGVjdGVkU2VuZFVzZXI6IG51bGwsXHJcbiAgICAgICAgc2VsZWN0ZWRBY2NlcHRVc2VyOiBudWxsLFxyXG4gICAgICAgIHNlbGVjdGVkQ2VudGVyQWNjZXB0VXNlcjogbnVsbCxcclxuICAgICAgICBzZW5kRW1JZDogbnVsbCxcclxuICAgICAgICBsc0VtSWQ6IG51bGwsXHJcbiAgICAgICAgY2VudGVyRW1JZDogbnVsbCxcclxuICAgICAgICBiYXJDb2RlczogW11cclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmtleXByZXNzID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgaWYgKGV2ZW50LmNoYXJDb2RlID09IDEzKSB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICBpZiAoJHNjb3BlLnNhbXBsZU5vKSB7XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUubW9kZWwuYmFyQ29kZXMucHVzaCgkc2NvcGUuc2FtcGxlTm8pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICRzY29wZS5zYW1wbGVObyA9ICcnO1xyXG4gICAgICAgICAgICAkc2NvcGUuZm9jdXNGbGFnKys7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBkYXRhU2VydmljZS5nZXRFbXBsb3llZUxpc3QoKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAkc2NvcGUudXNlckxpc3QgPSByZXN1bHQuZGF0YTtcclxuICAgIH0pO1xyXG4gICAgJHNjb3BlLnNlbmRTYW1wbGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJHNjb3BlLnNldE1vZGVsKCk7XHJcbiAgICAgICAgZGF0YVNlcnZpY2Uuc2VuZExvZ2koJHNjb3BlLm1vZGVsKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgZ3JpZC5yZWxvYWQoKTtcclxuICAgICAgICAgICAgLy8gdmFyIHVybCA9ICRzdGF0ZS5ocmVmKCdsb2dpc3RpY3NfcHJpbnQnLCB7IGRhdGE6ICRzY29wZS5tb2RlbCB9KTtcclxuICAgICAgICAgICAgLy8gd2luZG93Lm9wZW4od2luZG93LmxvY2F0aW9uLmhyZWYuc3BsaXQoJyMnKVswXSArIHVybCwgJ19ibGFuaycpO1xyXG4gICAgICAgICAgICAkc3RhdGUuZ28oJ2xvZ2lzdGljc19wcmludCcsIHsgZGF0YTogcmVzdWx0LCB0eXBlOiAnc2VuZCcgfSk7XHJcbiAgICAgICAgICAgICRtb2RhbEluc3RhbmNlLmNsb3NlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgJHNjb3BlLmFjY2VwdFNhbXBsZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkc2NvcGUuc2V0TW9kZWwoKTtcclxuICAgICAgICBkYXRhU2VydmljZS5hY2NlcHRMb2dpKCRzY29wZS5tb2RlbCkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGdyaWQucmVsb2FkKCk7XHJcbiAgICAgICAgICAgIC8vIHZhciB1cmwgPSAkc3RhdGUuaHJlZignbG9naXN0aWNzX3ByaW50JywgeyBkYXRhOiAkc2NvcGUubW9kZWwgfSk7XHJcbiAgICAgICAgICAgIC8vIHdpbmRvdy5vcGVuKHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNwbGl0KCcjJylbMF0gKyB1cmwsICdfYmxhbmsnKTtcclxuICAgICAgICAgICAgJHN0YXRlLmdvKCdsb2dpc3RpY3NfcHJpbnQnLCB7IGRhdGE6IHJlc3VsdCwgdHlwZTogJ3JlY2VpdmUnIH0pO1xyXG4gICAgICAgICAgICAkbW9kYWxJbnN0YW5jZS5jbG9zZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgJHNjb3BlLnNldE1vZGVsID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICgkc2NvcGUubW9kZWwuc2VsZWN0ZWRTZW5kVXNlcikge1xyXG4gICAgICAgICAgICAkc2NvcGUubW9kZWwuc2VuZEVtSWQgPSAkc2NvcGUubW9kZWwuc2VsZWN0ZWRTZW5kVXNlci5pZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCRzY29wZS5tb2RlbC5zZWxlY3RlZEFjY2VwdFVzZXIpIHtcclxuICAgICAgICAgICAgJHNjb3BlLm1vZGVsLmxzRW1JZCA9ICRzY29wZS5tb2RlbC5zZWxlY3RlZEFjY2VwdFVzZXIuaWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICgkc2NvcGUubW9kZWwuc2VsZWN0ZWRDZW50ZXJBY2NlcHRVc2VyKSB7XHJcbiAgICAgICAgICAgICRzY29wZS5tb2RlbC5jZW50ZXJFbUlkID0gJHNjb3BlLm1vZGVsLnNlbGVjdGVkQ2VudGVyQWNjZXB0VXNlci5pZDtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XSk7XHJcblxyXG5cclxuYXBwLmNvbnRyb2xsZXIoJ0xvZ2lzdGljc1ByaW50Q3RybCcsIFsnJHNjb3BlJywgJyRzdGF0ZVBhcmFtcycsICd1dGlsJywgZnVuY3Rpb24gKCRzY29wZSwgJHN0YXRlUGFyYW1zLCB1dGlsKSB7XHJcbiAgICAkc2NvcGUuZGF0YSA9ICRzdGF0ZVBhcmFtcy5kYXRhO1xyXG5cclxuICAgICRzY29wZS5tb2RlbCA9IHtcclxuICAgICAgICBzZW5kRW06ICcnLFxyXG4gICAgICAgIGxzRW06ICcnLFxyXG4gICAgICAgIGNlbnRlckVtOiAnJyxcclxuICAgICAgICBiYXJDb2RlczogW10sXHJcbiAgICAgICAgaXNTZW5kOiBmYWxzZSxcclxuICAgICAgICBpc1JlY2VpdmU6IGZhbHNlLFxyXG4gICAgICAgIHJlY2VpdmVUaW1lOiBudWxsLFxyXG4gICAgICAgIHN0YXR1czogbnVsbCxcclxuICAgICAgICB0aXRsZTogbnVsbCxcclxuICAgICAgICByZWNlaXZlVGltZUxhYmVsOiBudWxsXHJcbiAgICB9O1xyXG5cclxuICAgIGlmICgkc3RhdGVQYXJhbXMuZGF0YSAmJiAkc3RhdGVQYXJhbXMuZGF0YS5kYXRhKSB7XHJcbiAgICAgICAgJHNjb3BlLm1vZGVsLnNlbmRFbSA9ICRzdGF0ZVBhcmFtcy5kYXRhLmRhdGEuc2VuZEVtTmFtZTtcclxuICAgICAgICAkc2NvcGUubW9kZWwubHNFbSA9ICRzdGF0ZVBhcmFtcy5kYXRhLmRhdGEubHNFbU5hbWU7XHJcbiAgICAgICAgJHNjb3BlLm1vZGVsLmNlbnRlckVtID0gJHN0YXRlUGFyYW1zLmRhdGEuZGF0YS5jZW50ZXJFbU5hbWU7XHJcbiAgICAgICAgJHNjb3BlLm1vZGVsLnJlY2VpdmVUaW1lID0gdXRpbC5mb3JtYXRlRGF0ZSgkc3RhdGVQYXJhbXMuZGF0YS5kYXRhLnJlY2VpdmVUaW1lKTtcclxuICAgIH1cclxuICAgIGlmICgkc3RhdGVQYXJhbXMuZGF0YSAmJiAkc3RhdGVQYXJhbXMuZGF0YS5kYXRhLmxhYlNhbXBsZXMpIHtcclxuICAgICAgICAkc2NvcGUubW9kZWwuYmFyQ29kZXMgPSAkc3RhdGVQYXJhbXMuZGF0YS5kYXRhLmxhYlNhbXBsZXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpdGVtLmJhckNvZGU7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCRzdGF0ZVBhcmFtcy50eXBlID09ICdzZW5kJykge1xyXG4gICAgICAgICRzY29wZS5tb2RlbC5pc1NlbmQgPSB0cnVlO1xyXG4gICAgICAgICRzY29wZS5tb2RlbC5zdGF0dXMgPSAn54mp5rWB5bey5o6l5pS2JztcclxuICAgICAgICAkc2NvcGUubW9kZWwudGl0bGUgPSAn6YCB5qOA5Y2VJztcclxuICAgICAgICAkc2NvcGUubW9kZWwucmVjZWl2ZVRpbWVMYWJlbCA9ICfpgIHmo4Dml7bpl7Q6JztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJHNjb3BlLm1vZGVsLmlzUmVjZWl2ZSA9IHRydWU7XHJcbiAgICAgICAgJHNjb3BlLm1vZGVsLnN0YXR1cyA9ICfkuK3lv4Plt7LmjqXmlLYnO1xyXG4gICAgICAgICRzY29wZS5tb2RlbC50aXRsZSA9ICfmjqXmlLbljZUnO1xyXG4gICAgICAgICRzY29wZS5tb2RlbC5yZWNlaXZlVGltZUxhYmVsID0gJ+aOpeaUtuaXtumXtDonO1xyXG4gICAgfVxyXG5cclxuXHJcbn1dKTtcclxuIiwiYXBwLmNvbnRyb2xsZXIoJ01lZGljYWxMaXN0Q3RybCcsIFsnJHNjb3BlJywgJyRzdGF0ZScsICdkYXRhU2VydmljZScsIGZ1bmN0aW9uICgkc2NvcGUsICRzdGF0ZSwgZGF0YVNlcnZpY2UpIHtcclxuXHJcbiAgICB2YXIgbGluayA9ICdhcHAubWVkaWNhbF9kZXRhaWwnO1xyXG4gICAgdmFyIGVkaXRVcmwgPSAnPGEgY2xhc3M9XCJlZGl0LXRwbFwiIHVpLXNyZWY9XCInICsgbGluayArICcoe2lkOiByb3cuZW50aXR5LmlkfSlcIj7nvJbovpE8L2E+JztcclxuICAgIGVkaXRVcmwgKz0gJzxhIGNsYXNzPVwiZGVsZXRlLXRwbFwiIG5nLWNsaWNrPVwiZ3JpZC5hcHBTY29wZS5kZWxldGUocm93LmVudGl0eSlcIj7liKDpmaQ8L2E+JztcclxuXHJcbiAgICAkc2NvcGUuZ3JpZE9wdGlvbnMgPSB7XHJcbiAgICAgICAgZW5hYmxlRmlsdGVyaW5nOiBmYWxzZSxcclxuICAgICAgICBvblJlZ2lzdGVyQXBpOiBmdW5jdGlvbiAoZ3JpZEFwaSkge1xyXG4gICAgICAgICAgICAkc2NvcGUuZ3JpZEFwaSA9IGdyaWRBcGk7XHJcbiAgICAgICAgICAgICRzY29wZS5ncmlkQXBpLmdyaWQucmVnaXN0ZXJSb3dzUHJvY2Vzc29yKCRzY29wZS5maWx0ZXIsIDIwMCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb2x1bW5EZWZzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiAnaWQnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICdJZCcsXHJcbiAgICAgICAgICAgICAgICB2aXNpYmxlOiBmYWxzZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogJ21pQ29kZScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogJ+acuuaehOe8lueggSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQ6ICdtaU5hbWUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICfmnLrmnoTlkI3np7AnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiAnbWlDYXRlZ29yeScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogJ+acuuaehOexu+WIqydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQ6ICdwYXJlbnROYW1lJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAn5LiK57qn5py65p6EJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnZWRpdCcsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogJ+aTjeS9nCcsXHJcbiAgICAgICAgICAgICAgICBjZWxsVGVtcGxhdGU6IGVkaXRVcmxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgIH07XHJcbiAgICAkc2NvcGUubW9kZWwgPSB7XHJcbiAgICAgICAgc2VsZWN0ZWRQYXJlbnRTaXRlOiBudWxsXHJcbiAgICB9O1xyXG4gICAgJHNjb3BlLnBhcmVudFNpdGVMaXN0ID0gbnVsbDtcclxuXHJcbiAgICBkYXRhU2VydmljZS5nZXRTaXRlTGlzdCgpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICRzY29wZS5ncmlkT3B0aW9ucy5kYXRhID0gcmVzdWx0LmRhdGE7XHJcbiAgICAgICAgJHNjb3BlLnBhcmVudFNpdGVMaXN0ID0gcmVzdWx0LmRhdGEuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpdGVtLnBhcmVudElkID09IG51bGw7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkc2NvcGUuc2VhcmNoID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICRzY29wZS5ncmlkQXBpLmdyaWQucmVmcmVzaCgpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuY3JlYXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICRzdGF0ZS5nbyhsaW5rKTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmRlbGV0ZSA9IGZ1bmN0aW9uIChvYmopIHtcclxuICAgICAgICBkYXRhU2VydmljZS5kZWxldGVTaXRlKG9iaikudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgJHNjb3BlLmdyaWRPcHRpb25zLmRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmICgkc2NvcGUuZ3JpZE9wdGlvbnMuZGF0YVtpXS5pZCA9PSBvYmouaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZ3JpZE9wdGlvbnMuZGF0YS5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuZmlsdGVyID0gZnVuY3Rpb24gKHJlbmRlcmFibGVSb3dzKSB7XHJcbiAgICAgICAgdmFyIG1hdGNoZXIgPSBuZXcgUmVnRXhwKCRzY29wZS5maWx0ZXJWYWx1ZSk7XHJcbiAgICAgICAgcmVuZGVyYWJsZVJvd3MuZm9yRWFjaChmdW5jdGlvbiAocm93KSB7XHJcbiAgICAgICAgICAgIHZhciBtYXRjaCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBbJ21pQ29kZScsICdtaU5hbWUnLCAnbWlDYXRlZ29yeSddLmZvckVhY2goZnVuY3Rpb24gKGZpZWxkKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZW50aXR5ID0gcm93LmVudGl0eVtmaWVsZF0gKyAnJztcclxuICAgICAgICAgICAgICAgIGlmIChlbnRpdHkubWF0Y2gobWF0Y2hlcikpIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXRjaCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAoJHNjb3BlLm1vZGVsLnNlbGVjdGVkUGFyZW50U2l0ZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJvdy5lbnRpdHlbJ3BhcmVudE5hbWUnXSA9PSAkc2NvcGUubW9kZWwuc2VsZWN0ZWRQYXJlbnRTaXRlLm1pTmFtZSkge1xyXG5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF0Y2ggPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCFtYXRjaCkge1xyXG4gICAgICAgICAgICAgICAgcm93LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiByZW5kZXJhYmxlUm93cztcclxuICAgIH07XHJcbn1dKTtcclxuXHJcbmFwcC5jb250cm9sbGVyKCdNZWRpY2FsRGV0YWlsQ3RybCcsIFsnJHNjb3BlJywgJyRzdGF0ZScsICckc3RhdGVQYXJhbXMnLCAnZGF0YVNlcnZpY2UnLCAnJHEnLCBmdW5jdGlvbiAoJHNjb3BlLCAkc3RhdGUsICRzdGF0ZVBhcmFtcywgZGF0YVNlcnZpY2UsICRxKSB7XHJcbiAgICAkc2NvcGUubW9kZWwgPSB7XHJcbiAgICAgICAgaWQ6IG51bGwsXHJcbiAgICAgICAgbWlDb2RlOiBudWxsLFxyXG4gICAgICAgIG1pTmFtZTogbnVsbCxcclxuICAgICAgICBtaUNhdGVnb3J5OiBudWxsLFxyXG4gICAgICAgIGFyZWFDb2RlOiBudWxsLFxyXG4gICAgICAgIGFkZHJlc3M6IG51bGwsXHJcbiAgICAgICAgZGVzYzogbnVsbCxcclxuICAgICAgICBzZWxlY3RlZFBhcmVudFNpdGU6IG51bGwsXHJcbiAgICAgICAgcGFyZW50SWQ6IG51bGwsXHJcbiAgICAgICAgcGFyZW50TmFtZTogbnVsbFxyXG4gICAgfTtcclxuICAgICRzY29wZS5wYXJlbnRTaXRlTGlzdCA9IG51bGw7XHJcbiAgICAkc2NvcGUuaXNUb3BNSSA9IGZhbHNlO1xyXG5cclxuICAgIGlmICgkc3RhdGVQYXJhbXMuaWQpIHtcclxuICAgICAgICAkcS5hbGwoW1xyXG4gICAgICAgICAgICBkYXRhU2VydmljZS5nZXRTaXRlTGlzdCgpLFxyXG4gICAgICAgICAgICBkYXRhU2VydmljZS5nZXRTaXRlQnlJZCgkc3RhdGVQYXJhbXMuaWQpXHJcbiAgICAgICAgXSkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHRbMF0uZGF0YSAmJiByZXN1bHRbMF0uZGF0YS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUucGFyZW50U2l0ZUxpc3QgPSByZXN1bHRbMF0uZGF0YS5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbS5wYXJlbnRJZCA9PSBudWxsICYmIGl0ZW0uaWQgIT0gJHN0YXRlUGFyYW1zLmlkO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICByZXN1bHRbMF0uZGF0YS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0ucGFyZW50SWQgPT0gJHN0YXRlUGFyYW1zLmlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5pc1RvcE1JID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHJlc3VsdFsxXS5kYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUubW9kZWwgPSByZXN1bHRbMV0uZGF0YTtcclxuICAgICAgICAgICAgICAgIGlmICgkc2NvcGUubW9kZWwucGFyZW50SWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8ICRzY29wZS5wYXJlbnRTaXRlTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJHNjb3BlLnBhcmVudFNpdGVMaXN0W2ldLmlkID09ICRzY29wZS5tb2RlbC5wYXJlbnRJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLm1vZGVsLnNlbGVjdGVkUGFyZW50U2l0ZSA9ICRzY29wZS5wYXJlbnRTaXRlTGlzdFtpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBkYXRhU2VydmljZS5nZXRTaXRlTGlzdCgpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LmRhdGEgJiYgcmVzdWx0LmRhdGEubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLnBhcmVudFNpdGVMaXN0ID0gcmVzdWx0LmRhdGEuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0ucGFyZW50SWQgPT0gbnVsbDtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICAkc2NvcGUuc3VibWl0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coJHNjb3BlLm1vZGVsKTtcclxuICAgICAgICBpZiAoJHNjb3BlLm1vZGVsLnNlbGVjdGVkUGFyZW50U2l0ZSkge1xyXG4gICAgICAgICAgICAkc2NvcGUubW9kZWwucGFyZW50SWQgPSAkc2NvcGUubW9kZWwuc2VsZWN0ZWRQYXJlbnRTaXRlLmlkO1xyXG4gICAgICAgICAgICAkc2NvcGUubW9kZWwucGFyZW50TmFtZSA9ICRzY29wZS5tb2RlbC5zZWxlY3RlZFBhcmVudFNpdGUubWlOYW1lO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkYXRhU2VydmljZS5zYXZlU2l0ZSgkc2NvcGUubW9kZWwpLnRoZW4oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkc3RhdGUuZ28oJ2FwcC5tZWRpY2FsJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxufV0pOyIsImFwcC5jb250cm9sbGVyKCdQYXRpZW50TGlzdEN0cmwnLCBbJyRzY29wZScsICckc3RhdGUnLCAnZGF0YVNlcnZpY2UnLCBmdW5jdGlvbiAoJHNjb3BlLCAkc3RhdGUsIGRhdGFTZXJ2aWNlKSB7XHJcblxyXG4gICAgdmFyIGxpbms9J2FwcC5wYXRpZW50X2RldGFpbCc7XHJcbiAgICB2YXIgZWRpdFVybCA9ICc8YSBjbGFzcz1cImVkaXQtdHBsXCIgdWktc3JlZj1cIicrbGluaysnKHtpZDogcm93LmVudGl0eS5pZH0pXCI+57yW6L6RPC9hPic7XHJcbiAgICBlZGl0VXJsKz0nPGEgY2xhc3M9XCJkZWxldGUtdHBsXCIgbmctY2xpY2s9XCJncmlkLmFwcFNjb3BlLmRlbGV0ZShyb3cuZW50aXR5KVwiPuWIoOmZpDwvYT4nO1xyXG5cclxuICAgICRzY29wZS5ncmlkT3B0aW9ucyA9IHtcclxuICAgICAgICBlbmFibGVGaWx0ZXJpbmc6IGZhbHNlLFxyXG4gICAgICAgIG9uUmVnaXN0ZXJBcGk6IGZ1bmN0aW9uIChncmlkQXBpKSB7XHJcbiAgICAgICAgICAgICRzY29wZS5ncmlkQXBpID0gZ3JpZEFwaTtcclxuICAgICAgICAgICAgJHNjb3BlLmdyaWRBcGkuZ3JpZC5yZWdpc3RlclJvd3NQcm9jZXNzb3IoJHNjb3BlLmZpbHRlciwgMjAwKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbHVtbkRlZnM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQ6ICdpZCcsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogJ0lkJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogJ25hbWUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICdOYW1lJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnZWRpdCcsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogJ0VkaXQnLFxyXG4gICAgICAgICAgICAgICAgY2VsbFRlbXBsYXRlOiBlZGl0VXJsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICB9O1xyXG5cclxuICAgIGRhdGFTZXJ2aWNlLmdldGxhYml0ZW1MaXN0KCkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgJHNjb3BlLmdyaWRPcHRpb25zLmRhdGEgPSByZXN1bHQuZGF0YTtcclxuICAgIH0pO1xyXG5cclxuICAgICRzY29wZS5zZWFyY2ggPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJHNjb3BlLmdyaWRBcGkuZ3JpZC5yZWZyZXNoKCk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5jcmVhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJHN0YXRlLmdvKGxpbmspO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuZGVsZXRlID0gZnVuY3Rpb24gKG9iaikge1xyXG4gICAgICAgIGRhdGFTZXJ2aWNlLmRlbGV0ZVBhdGllbnQob2JqKS50aGVuKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIGZvcih2YXIgaT0wO2k8JHNjb3BlLmdyaWRPcHRpb25zLmRhdGEubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgICAgICBpZigkc2NvcGUuZ3JpZE9wdGlvbnMuZGF0YVtpXS5pZD09b2JqLmlkKXtcclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZ3JpZE9wdGlvbnMuZGF0YS5zcGxpY2UoaSwxKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5maWx0ZXI9ZnVuY3Rpb24ocmVuZGVyYWJsZVJvd3Mpe1xyXG4gICAgICAgIHZhciBtYXRjaGVyID0gbmV3IFJlZ0V4cCgkc2NvcGUuZmlsdGVyVmFsdWUpO1xyXG4gICAgICAgIHJlbmRlcmFibGVSb3dzLmZvckVhY2goIGZ1bmN0aW9uKCByb3cgKSB7XHJcbiAgICAgICAgICB2YXIgbWF0Y2ggPSBmYWxzZTtcclxuICAgICAgICAgIFsgJ25hbWUnIF0uZm9yRWFjaChmdW5jdGlvbiggZmllbGQgKXtcclxuICAgICAgICAgICAgaWYgKCByb3cuZW50aXR5W2ZpZWxkXS5tYXRjaChtYXRjaGVyKSApe1xyXG4gICAgICAgICAgICAgIG1hdGNoID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBpZiAoICFtYXRjaCApe1xyXG4gICAgICAgICAgICByb3cudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiByZW5kZXJhYmxlUm93cztcclxuICAgIH07XHJcbn1dKTtcclxuXHJcbmFwcC5jb250cm9sbGVyKCdQYXRpZW50RGV0YWlsQ3RybCcsIFsnJHNjb3BlJywgJyRzdGF0ZScsICckc3RhdGVQYXJhbXMnLCAnZGF0YVNlcnZpY2UnLCBmdW5jdGlvbiAoJHNjb3BlLCAkc3RhdGUsICRzdGF0ZVBhcmFtcywgZGF0YVNlcnZpY2UpIHtcclxuICAgIC8vY29uc29sZS5sb2coJHN0YXRlUGFyYW1zKTtcclxuICAgICRzY29wZS5tb2RlbCA9IHtcclxuICAgICAgICBzZWxlY3RlZFNleDogbnVsbCxcclxuICAgICAgICBiaXJ0aERhdGU6IG5ldyBEYXRlKClcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmRhdGVPcHRpb25zID0ge1xyXG4gICAgICAgIGZvcm1hdFllYXI6ICd5eScsXHJcbiAgICAgICAgc3RhcnRpbmdEYXk6IDEsXHJcbiAgICAgICAgY2xhc3M6ICdkYXRlcGlja2VyJ1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUub3BlbkRhdGUgPSBmdW5jdGlvbigkZXZlbnQpIHtcclxuICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgXHJcbiAgICAgICAgJHNjb3BlLm9wZW5lZCA9IHRydWU7XHJcbiAgICB9O1xyXG5cclxuICAgIGRhdGFTZXJ2aWNlLmdldFNleExpc3QoKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAkc2NvcGUuc2V4TGlzdCA9IHJlc3VsdC5kYXRhO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJHNjb3BlLnN1Ym1pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygkc2NvcGUubW9kZWwpO1xyXG4gICAgfTtcclxuXHJcbn1dKTsiLCJhcHAuY29udHJvbGxlcignUWN2YWx1ZUxpc3RDdHJsJywgWyckc2NvcGUnLCAnJHN0YXRlJywgJ2RhdGFTZXJ2aWNlJywgJ3V0aWwnLCBmdW5jdGlvbiAoJHNjb3BlLCAkc3RhdGUsIGRhdGFTZXJ2aWNlLCB1dGlsKSB7XHJcblxyXG4gICAgdmFyIGxpbmsgPSAnYXBwLnFjdmFsdWVfZGV0YWlsJztcclxuICAgIHZhciBlZGl0VXJsID0gJzxhIGNsYXNzPVwiZWRpdC10cGxcIiB1aS1zcmVmPVwiJyArIGxpbmsgKyAnKHtpZDogcm93LmVudGl0eS5pZH0pXCI+57yW6L6RPC9hPic7XHJcbiAgICBlZGl0VXJsICs9ICc8YSBjbGFzcz1cImRlbGV0ZS10cGxcIiBuZy1jbGljaz1cImdyaWQuYXBwU2NvcGUuZGVsZXRlKHJvdy5lbnRpdHkpXCI+5Yig6ZmkPC9hPic7XHJcblxyXG4gICAgJHNjb3BlLmdyaWRPcHRpb25zID0ge1xyXG4gICAgICAgIGVuYWJsZUZpbHRlcmluZzogZmFsc2UsXHJcbiAgICAgICAgb25SZWdpc3RlckFwaTogZnVuY3Rpb24gKGdyaWRBcGkpIHtcclxuICAgICAgICAgICAgJHNjb3BlLmdyaWRBcGkgPSBncmlkQXBpO1xyXG4gICAgICAgICAgICAkc2NvcGUuZ3JpZEFwaS5ncmlkLnJlZ2lzdGVyUm93c1Byb2Nlc3Nvcigkc2NvcGUuZmlsdGVyLCAyMDApO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29sdW1uRGVmczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogJ2lkJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAnSWQnLFxyXG4gICAgICAgICAgICAgICAgdmlzaWJsZTogZmFsc2VcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQ6ICdtaU5hbWUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICfljLvpmaLlkI3np7AnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiAnaW5zdHJ1bWVudE5hbWUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICfku6rlmajlkI3np7AnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiAnbGFiSXRlbU5hbWUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICfotKjmjqfpobnnm64nXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiAndmFsdWUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICfotKjmjqflgLwnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiAncWNUaW1lJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAn6LSo5o6n5pe26Ze0J1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogJ3FjZXInLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICfotKjmjqfkurrlkZgnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdlZGl0JyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAn5pON5L2cJyxcclxuICAgICAgICAgICAgICAgIGNlbGxUZW1wbGF0ZTogZWRpdFVybFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgfTtcclxuXHJcbiAgICBkYXRhU2VydmljZS5nZXRRQ1ZhbHVlTGlzdCgpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgIHJlc3VsdC5kYXRhLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgaXRlbS5xY1RpbWUgPSB1dGlsLmZvcm1hdGVEYXRlKGl0ZW0ucWNUaW1lKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJHNjb3BlLmdyaWRPcHRpb25zLmRhdGEgPSByZXN1bHQuZGF0YTtcclxuICAgIH0pO1xyXG5cclxuICAgICRzY29wZS5zZWFyY2ggPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJHNjb3BlLmdyaWRBcGkuZ3JpZC5yZWZyZXNoKCk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5jcmVhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJHN0YXRlLmdvKGxpbmspO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuZGVsZXRlID0gZnVuY3Rpb24gKG9iaikge1xyXG4gICAgICAgIGRhdGFTZXJ2aWNlLmRlbGV0ZVFDVmFsdWUob2JqKS50aGVuKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAkc2NvcGUuZ3JpZE9wdGlvbnMuZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKCRzY29wZS5ncmlkT3B0aW9ucy5kYXRhW2ldLmlkID09IG9iai5pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5ncmlkT3B0aW9ucy5kYXRhLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5maWx0ZXIgPSBmdW5jdGlvbiAocmVuZGVyYWJsZVJvd3MpIHtcclxuICAgICAgICB2YXIgbWF0Y2hlciA9IG5ldyBSZWdFeHAoJHNjb3BlLmZpbHRlclZhbHVlKTtcclxuICAgICAgICByZW5kZXJhYmxlUm93cy5mb3JFYWNoKGZ1bmN0aW9uIChyb3cpIHtcclxuICAgICAgICAgICAgdmFyIG1hdGNoID0gZmFsc2U7XHJcbiAgICAgICAgICAgIFsnbWlOYW1lJywnaW5zdHJ1bWVudE5hbWUnLCdsYWJJdGVtTmFtZSddLmZvckVhY2goZnVuY3Rpb24gKGZpZWxkKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZW50aXR5ID0gcm93LmVudGl0eVtmaWVsZF0gKyAnJztcclxuICAgICAgICAgICAgICAgIGlmIChlbnRpdHkubWF0Y2gobWF0Y2hlcikpIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXRjaCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAoIW1hdGNoKSB7XHJcbiAgICAgICAgICAgICAgICByb3cudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHJlbmRlcmFibGVSb3dzO1xyXG4gICAgfTtcclxufV0pO1xyXG5cclxuYXBwLmNvbnRyb2xsZXIoJ1FjdmFsdWVEZXRhaWxDdHJsJywgWyckc2NvcGUnLCAnJHN0YXRlJywgJyRzdGF0ZVBhcmFtcycsICdkYXRhU2VydmljZScsICckcScsIGZ1bmN0aW9uICgkc2NvcGUsICRzdGF0ZSwgJHN0YXRlUGFyYW1zLCBkYXRhU2VydmljZSwgJHEpIHtcclxuXHJcbiAgICAkc2NvcGUubW9kZWwgPSB7XHJcbiAgICAgICAgaWQ6IG51bGwsXHJcbiAgICAgICAgbG1JZDogbnVsbCxcclxuICAgICAgICBtaUlkOiBudWxsLFxyXG4gICAgICAgIGluc3RydW1lbnRJZDogJycsXHJcbiAgICAgICAgaW5zdHJ1bWVudE5hbWU6IG51bGwsXHJcbiAgICAgICAgcWNlcjogbnVsbCxcclxuICAgICAgICBxY1RpbWU6IG51bGwsXHJcbiAgICAgICAgcWNOdW06IG51bGwsXHJcbiAgICAgICAgdmFsdWU6IG51bGwsXHJcbiAgICAgICAgY29tbWVudDogbnVsbCxcclxuICAgICAgICBvdGhlcjE6IG51bGwsXHJcbiAgICAgICAgb3RoZXIyOiBudWxsLFxyXG4gICAgICAgIG90aGVyMzogbnVsbCxcclxuICAgICAgICBvdGhlcjQ6IG51bGwsXHJcbiAgICAgICAgb3RoZXI1OiBudWxsLFxyXG4gICAgICAgIG90aGVyNjogbnVsbCxcclxuICAgICAgICBzZWxlY3RlZExhYkl0ZW06IG51bGwsXHJcbiAgICAgICAgc2VsZWN0ZWRTaXRlOiBudWxsLFxyXG4gICAgICAgIHNlbGVjdGVkUWNlcjogbnVsbFxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUubGFiSXRlbUxpc3QgPSBudWxsO1xyXG4gICAgJHNjb3BlLnNpdGVMaXN0ID0gbnVsbDtcclxuICAgICRzY29wZS51c2VyTGlzdCA9IG51bGw7XHJcblxyXG4gICAgJHNjb3BlLnNpdGVMaXN0ID0gbnVsbDtcclxuICAgICRzY29wZS5kZXB0TGlzdCA9IG51bGw7XHJcbiAgICAkc2NvcGUuc2VsZWN0ZWRTZXggPSBudWxsO1xyXG5cclxuICAgICRzY29wZS5kYXRlT3B0aW9ucyA9IHtcclxuICAgICAgICBmb3JtYXRZZWFyOiAneXknLFxyXG4gICAgICAgIHN0YXJ0aW5nRGF5OiAxLFxyXG4gICAgICAgIGNsYXNzOiAnZGF0ZXBpY2tlcidcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnFjT3BlbiA9IGZ1bmN0aW9uICgkZXZlbnQpIHtcclxuICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgJHNjb3BlLnFjT3BlbmVkID0gdHJ1ZTtcclxuICAgIH07XHJcblxyXG4gICAgaWYgKCRzdGF0ZVBhcmFtcy5pZCkge1xyXG4gICAgICAgICRxLmFsbChbXHJcbiAgICAgICAgICAgIGRhdGFTZXJ2aWNlLmdldGxhYml0ZW1MaXN0KCksXHJcbiAgICAgICAgICAgIGRhdGFTZXJ2aWNlLmdldFNpdGVMaXN0KCksXHJcbiAgICAgICAgICAgIGRhdGFTZXJ2aWNlLmdldFFDVmFsdWVCeUlkKCRzdGF0ZVBhcmFtcy5pZCksXHJcbiAgICAgICAgICAgIGRhdGFTZXJ2aWNlLmdldEVtcGxveWVlTGlzdCgpXHJcbiAgICAgICAgXSkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICRzY29wZS5sYWJJdGVtTGlzdCA9IHJlc3VsdFswXS5kYXRhO1xyXG4gICAgICAgICAgICAkc2NvcGUuc2l0ZUxpc3QgPSByZXN1bHRbMV0uZGF0YTtcclxuICAgICAgICAgICAgJHNjb3BlLm1vZGVsID0gcmVzdWx0WzJdLmRhdGE7XHJcbiAgICAgICAgICAgICRzY29wZS51c2VyTGlzdCA9IHJlc3VsdFszXS5kYXRhO1xyXG4gICAgICAgICAgICBpZiAoJHNjb3BlLmxhYkl0ZW1MaXN0KSB7XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUubGFiSXRlbUxpc3QuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLmlkID09ICRzY29wZS5tb2RlbC5sbUlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5tb2RlbC5zZWxlY3RlZExhYkl0ZW0gPSBpdGVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICgkc2NvcGUuc2l0ZUxpc3QpIHtcclxuICAgICAgICAgICAgICAgICRzY29wZS5zaXRlTGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0uaWQgPT0gJHNjb3BlLm1vZGVsLm1pSWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLm1vZGVsLnNlbGVjdGVkU2l0ZSA9IGl0ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCRzY29wZS51c2VyTGlzdCkge1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLnVzZXJMaXN0LmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5pZCA9PSAkc2NvcGUubW9kZWwucWNlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUubW9kZWwuc2VsZWN0ZWRRY2VyID0gaXRlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBpZigkc2NvcGUubW9kZWwucWNUaW1lKXtcclxuICAgICAgICAgICAgLy8gICAgICRzY29wZS5tb2RlbC5xY1RpbWU9bmV3IERhdGUoJHNjb3BlLm1vZGVsLnFjVGltZSk7XHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZGF0YVNlcnZpY2UuZ2V0bGFiaXRlbUxpc3QoKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgJHNjb3BlLmxhYkl0ZW1MaXN0ID0gcmVzdWx0LmRhdGE7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZGF0YVNlcnZpY2UuZ2V0U2l0ZUxpc3QoKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgJHNjb3BlLnNpdGVMaXN0ID0gcmVzdWx0LmRhdGE7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgJHNjb3BlLnN1Ym1pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKCRzY29wZS5tb2RlbCk7XHJcbiAgICAgICAgaWYgKCRzY29wZS5tb2RlbC5zZWxlY3RlZExhYkl0ZW0pIHtcclxuICAgICAgICAgICAgJHNjb3BlLm1vZGVsLmxtSWQgPSAkc2NvcGUubW9kZWwuc2VsZWN0ZWRMYWJJdGVtLmlkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoJHNjb3BlLm1vZGVsLnNlbGVjdGVkU2l0ZSkge1xyXG4gICAgICAgICAgICAkc2NvcGUubW9kZWwubWlJZCA9ICRzY29wZS5tb2RlbC5zZWxlY3RlZFNpdGUuaWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICgkc2NvcGUubW9kZWwuc2VsZWN0ZWRRY2VyKSB7XHJcbiAgICAgICAgICAgICRzY29wZS5tb2RlbC5xY2VyID0gJHNjb3BlLm1vZGVsLnNlbGVjdGVkUWNlci5pZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGF0YVNlcnZpY2Uuc2F2ZVFDVmFsdWUoJHNjb3BlLm1vZGVsKS50aGVuKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJHN0YXRlLmdvKCdhcHAucWN2YWx1ZScpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbn1dKTsiLCJhcHAuY29udHJvbGxlcignUmVxdWVzdExpc3RDdHJsJywgWyckc2NvcGUnLCAnJG1vZGFsJywgJyRzdGF0ZScsICdkYXRhU2VydmljZScsICd1dGlsJywgZnVuY3Rpb24gKCRzY29wZSwgJG1vZGFsLCAkc3RhdGUsIGRhdGFTZXJ2aWNlLCB1dGlsKSB7XHJcbiAgICAkc2NvcGUubW9kZWwgPSB7XHJcbiAgICAgICAgZmlsdGVyVmFsdWU6IG51bGwsXHJcbiAgICAgICAgc3RhcnRUaW1lOiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgIGVuZFRpbWU6IG5ldyBEYXRlKCksXHJcbiAgICAgICAgc3RhcnRPcGVuZWQ6IGZhbHNlLFxyXG4gICAgICAgIGVuZE9wZW5lZDogZmFsc2UsXHJcbiAgICAgICAgc2VsZWN0ZWRTaXRlOiBudWxsXHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5kYXRlT3B0aW9ucyA9IHtcclxuICAgICAgICBmb3JtYXRZZWFyOiAneXknLFxyXG4gICAgICAgIHN0YXJ0aW5nRGF5OiAxLFxyXG4gICAgICAgIGNsYXNzOiAnZGF0ZXBpY2tlcidcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnN0YXJ0T3BlbiA9IGZ1bmN0aW9uICgkZXZlbnQpIHtcclxuICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgJHNjb3BlLm1vZGVsLnN0YXJ0T3BlbmVkID0gdHJ1ZTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmVuZE9wZW4gPSBmdW5jdGlvbiAoJGV2ZW50KSB7XHJcbiAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICRzY29wZS5tb2RlbC5lbmRPcGVuZWQgPSB0cnVlO1xyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgdHBsID0gJzxkaXYgbmctaGlkZT1cInJvdy5lbnRpdHkucmVTdGF0dXMhPTFcIj48YnV0dG9uIGNsYXNzPVwiYnRuIGdyaWQtYnRuIGJ0bi1zdWNjZXNzXCIgbmctY2xpY2s9XCJncmlkLmFwcFNjb3BlLmFjY2VwdChyb3cuZW50aXR5KVwiPuaOpeWPlzwvYnV0dG9uPjxidXR0b24gY2xhc3M9XCJidG4gZ3JpZC1idG4gbGVmdC1zcGFjZSBidG4tZGFuZ2VyXCIgbmctY2xpY2s9XCJncmlkLmFwcFNjb3BlLnJlamVjdChyb3cuZW50aXR5KVwiPuaLkue7nTwvYnV0dG9uPjwvZGl2Pic7XHJcbiAgICB2YXIgb3RoZXJUcGwgPSAnPGEgY2xhc3M9XCJlZGl0LXRwbFwiIHVpLXNyZWY9XCJhcHAucmVxdWVzdF9kZXRhaWwoe2lkOiByb3cuZW50aXR5LmlkfSlcIj7or6bmg4U8L2E+JztcclxuICAgICRzY29wZS5ncmlkT3B0aW9ucyA9IHtcclxuICAgICAgICBlbmFibGVGaWx0ZXJpbmc6IGZhbHNlLFxyXG4gICAgICAgIG9uUmVnaXN0ZXJBcGk6IGZ1bmN0aW9uIChncmlkQXBpKSB7XHJcbiAgICAgICAgICAgICRzY29wZS5ncmlkQXBpID0gZ3JpZEFwaTtcclxuICAgICAgICAgICAgLy8kc2NvcGUuZ3JpZEFwaS5ncmlkLnJlZ2lzdGVyUm93c1Byb2Nlc3Nvcigkc2NvcGUuZmlsdGVyLCAyMDApO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29sdW1uRGVmczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogJ2lkJyxcclxuICAgICAgICAgICAgICAgIHZpc2libGU6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiAncmVxdWVzdE5vJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAn55Sz6K+35Y2V5Y+3J1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogJ3BhdGllbnQucHROYW1lJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAn55eF5Lq65ZCN5a2XJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogJ21pTmFtZScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogJ+acuuaehOWQjeensCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQ6ICdmb3JtYXRlZFJlcVRpbWUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICfnlLPor7fml7bpl7QnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiAncmVTdGF0dXNOYW1lJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAn55Sz6K+35Y2V54q25oCBJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnZWRpdCcsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogJ+aTjeS9nCcsXHJcbiAgICAgICAgICAgICAgICBjZWxsVGVtcGxhdGU6IHRwbFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnb3RoZXInLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICflhbbku5YnLFxyXG4gICAgICAgICAgICAgICAgY2VsbFRlbXBsYXRlOiBvdGhlclRwbFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBkYXRhU2VydmljZS5nZXRSZXF1ZXN0TGlzdCgkc2NvcGUubW9kZWwuZmlsdGVyVmFsdWUsIHV0aWwuZm9ybWF0ZURhdGUoJHNjb3BlLm1vZGVsLnN0YXJ0VGltZSksIHV0aWwuZm9ybWF0ZURhdGUoJHNjb3BlLm1vZGVsLmVuZFRpbWUpKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgcmVzdWx0LmRhdGEuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgICAgICAgICAgaXRlbS5mb3JtYXRlZFJlcVRpbWUgPSB1dGlsLmZvcm1hdGVEYXRlKGl0ZW0ucmVxVGltZSk7XHJcbiAgICAgICAgICAgICAgICBpdGVtLnJlU3RhdHVzTmFtZSA9IHV0aWwuZ2V0UmVxdWVzdFN0YXR1cyhpdGVtLnJlU3RhdHVzKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuZ3JpZE9wdGlvbnMuZGF0YSA9IHJlc3VsdC5kYXRhO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuc2VhcmNoID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vJHNjb3BlLmdyaWRBcGkuZ3JpZC5yZWZyZXNoKCk7XHJcbiAgICAgICAgJHNjb3BlLmdyaWRPcHRpb25zLmRhdGEgPSBudWxsO1xyXG4gICAgICAgICRzY29wZS5sb2FkKCk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5maWx0ZXIgPSBmdW5jdGlvbiAocmVuZGVyYWJsZVJvd3MpIHtcclxuICAgICAgICB2YXIgbWF0Y2hlciA9IG5ldyBSZWdFeHAoJHNjb3BlLm1vZGVsLmZpbHRlclZhbHVlKTtcclxuICAgICAgICByZW5kZXJhYmxlUm93cy5mb3JFYWNoKGZ1bmN0aW9uIChyb3cpIHtcclxuICAgICAgICAgICAgdmFyIG1hdGNoID0gZmFsc2U7XHJcbiAgICAgICAgICAgIFsncmVxdWVzdE5vJywgJ3BhdGllbnQucHROYW1lJywgJ21pTmFtZScsICdyZVN0YXR1c05hbWUnXS5mb3JFYWNoKGZ1bmN0aW9uIChmaWVsZCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGVudGl0eSA9IHJvdy5lbnRpdHk7XHJcbiAgICAgICAgICAgICAgICBmaWVsZC5zcGxpdCgnLicpLmZvckVhY2goZnVuY3Rpb24gKGYpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZW50aXR5W2ZdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eSA9IGVudGl0eVtmXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGVudGl0eSA9IGVudGl0eSArICcnO1xyXG4gICAgICAgICAgICAgICAgaWYgKCRzY29wZS5tb2RlbC5maWx0ZXJWYWx1ZSAmJiBlbnRpdHkubWF0Y2gobWF0Y2hlcikpIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXRjaCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCRzY29wZS5tb2RlbC5maWx0ZXJWYWx1ZSA9PSBudWxsIHx8ICRzY29wZS5tb2RlbC5maWx0ZXJWYWx1ZSA9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hdGNoID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB2YXIgdGltZSA9IHJvdy5lbnRpdHlbJ2Zvcm1hdGVkUmVxVGltZSddO1xyXG4gICAgICAgICAgICB2YXIgY3VycmVudCA9IHRpbWUgPyBuZXcgRGF0ZSh0aW1lKS5nZXRUaW1lKCkgOiBudWxsO1xyXG5cclxuICAgICAgICAgICAgaWYgKCRzY29wZS5tb2RlbC5zdGFydFRpbWUgJiYgY3VycmVudCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHN0YXJ0ID0gbmV3IERhdGUoJHNjb3BlLm1vZGVsLnN0YXJ0VGltZSkuZ2V0VGltZSgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0YXJ0ID4gY3VycmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hdGNoID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCRzY29wZS5tb2RlbC5lbmRUaW1lICYmIGN1cnJlbnQpIHtcclxuICAgICAgICAgICAgICAgIHZhciBlbmQgPSBuZXcgRGF0ZSgkc2NvcGUubW9kZWwuZW5kVGltZSkuZ2V0VGltZSgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnQgPiBlbmQpIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXRjaCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoKCRzY29wZS5tb2RlbC5zdGFydFRpbWUgfHwgJHNjb3BlLm1vZGVsLmVuZFRpbWUpICYmICFjdXJyZW50KSB7XHJcbiAgICAgICAgICAgICAgICBtYXRjaCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIGlmICghbWF0Y2gpIHtcclxuICAgICAgICAgICAgICAgIHJvdy52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcmVuZGVyYWJsZVJvd3M7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5hY2NlcHQgPSBmdW5jdGlvbiAob2JqKSB7XHJcbiAgICAgICAgZGF0YVNlcnZpY2UuYWNjZXB0UmVxdWVzdChvYmopLnRoZW4oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkc2NvcGUubG9hZCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUucmVqZWN0ID0gZnVuY3Rpb24gKG9iaikge1xyXG4gICAgICAgICRzY29wZS5tb2RhbEluc3RhbmNlID0gJG1vZGFsLm9wZW4oe1xyXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy9hcHAvdHBsL2RpYWxvZy9yZWplY3RfZGlhbG9nLmh0bWwnLFxyXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnUmVqZWN0RGlhbG9nQ3RybCcsXHJcbiAgICAgICAgICAgIHNpemU6ICdsZycsXHJcbiAgICAgICAgICAgIHJlc29sdmU6IHtcclxuICAgICAgICAgICAgICAgIGRhdGE6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGdyaWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWxvYWQ6ICRzY29wZS5sb2FkXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICAkc2NvcGUuc2l0ZUxpc3QgPSBudWxsO1xyXG5cclxuICAgIGRhdGFTZXJ2aWNlLmdldFNpdGVMaXN0KCkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgJHNjb3BlLnNpdGVMaXN0ID0gcmVzdWx0LmRhdGE7XHJcbiAgICB9KTtcclxuXHJcbn1dKTtcclxuXHJcblxyXG5hcHAuY29udHJvbGxlcignUmVqZWN0RGlhbG9nQ3RybCcsIFsnJHNjb3BlJywgJyRtb2RhbEluc3RhbmNlJywgJ2RhdGFTZXJ2aWNlJywgJ2RhdGEnLCAnZ3JpZCcsIGZ1bmN0aW9uICgkc2NvcGUsICRtb2RhbEluc3RhbmNlLCBkYXRhU2VydmljZSwgZGF0YSwgZ3JpZCkge1xyXG4gICAgJHNjb3BlLnJlamVjdFJlYXNvbiA9IG51bGw7XHJcblxyXG4gICAgJHNjb3BlLmRpYWxvZ1N1Ym1pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoZGF0YSkge1xyXG4gICAgICAgICAgICBkYXRhLnJlamVjdFJlYXNvbiA9ICRzY29wZS5yZWplY3RSZWFzb247XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRhdGFTZXJ2aWNlLnJlamVjdFJlcWV1c3QoZGF0YSkudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGdyaWQucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICRtb2RhbEluc3RhbmNlLmNsb3NlKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfTtcclxufV0pO1xyXG5cclxuYXBwLmNvbnRyb2xsZXIoJ1JlcXVlc3REZXRhaWxDdHJsJywgWyckc2NvcGUnLCAnJHN0YXRlJywgJyRzdGF0ZVBhcmFtcycsICdkYXRhU2VydmljZScsICd1dGlsJywgZnVuY3Rpb24gKCRzY29wZSwgJHN0YXRlLCAkc3RhdGVQYXJhbXMsIGRhdGFTZXJ2aWNlLCB1dGlsKSB7XHJcblxyXG5cclxuICAgIGlmICgkc3RhdGVQYXJhbXMuaWQpIHtcclxuICAgICAgICBkYXRhU2VydmljZS5nZXRSZXF1ZXN0QnlJZCgkc3RhdGVQYXJhbXMuaWQpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LmRhdGEpIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5kYXRhLnJlcVRpbWUgPSB1dGlsLmZvcm1hdGVEYXRlKHJlc3VsdC5kYXRhLnJlcVRpbWUpO1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0LmRhdGEucmVTdGF0dXNOYW1lID0gdXRpbC5nZXRSZXF1ZXN0U3RhdHVzKHJlc3VsdC5kYXRhLnJlU3RhdHVzKTtcclxuICAgICAgICAgICAgICAgICRzY29wZS5tb2RlbCA9IHJlc3VsdC5kYXRhO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1dKTsiLCJhcHAuY29udHJvbGxlcignU2FtcGxlVHlwZUxpc3RDdHJsJywgWyckc2NvcGUnLCAnJHN0YXRlJywgJ2RhdGFTZXJ2aWNlJywgZnVuY3Rpb24gKCRzY29wZSwgJHN0YXRlLCBkYXRhU2VydmljZSkge1xyXG5cclxuICAgIHZhciBsaW5rID0gJ2FwcC5zYW1wbGV0eXBlX2RldGFpbCc7XHJcbiAgICB2YXIgZWRpdFVybCA9ICc8YSBjbGFzcz1cImVkaXQtdHBsXCIgdWktc3JlZj1cIicgKyBsaW5rICsgJyh7aWQ6IHJvdy5lbnRpdHkuaWR9KVwiPue8lui+kTwvYT4nO1xyXG4gICAgZWRpdFVybCArPSAnPGEgY2xhc3M9XCJkZWxldGUtdHBsXCIgbmctY2xpY2s9XCJncmlkLmFwcFNjb3BlLmRlbGV0ZShyb3cuZW50aXR5KVwiPuWIoOmZpDwvYT4nO1xyXG5cclxuICAgICRzY29wZS5ncmlkT3B0aW9ucyA9IHtcclxuICAgICAgICBlbmFibGVGaWx0ZXJpbmc6IGZhbHNlLFxyXG4gICAgICAgIG9uUmVnaXN0ZXJBcGk6IGZ1bmN0aW9uIChncmlkQXBpKSB7XHJcbiAgICAgICAgICAgICRzY29wZS5ncmlkQXBpID0gZ3JpZEFwaTtcclxuICAgICAgICAgICAgJHNjb3BlLmdyaWRBcGkuZ3JpZC5yZWdpc3RlclJvd3NQcm9jZXNzb3IoJHNjb3BlLmZpbHRlciwgMjAwKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbHVtbkRlZnM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQ6ICdpZCcsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogJ0lkJyxcclxuICAgICAgICAgICAgICAgIHZpc2libGU6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiAnY29kZScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogJ+e8lueggSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQ6ICdjaHROYW1lJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAn5Lit5paH5ZCN56ewJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogJ2VuZ05hbWUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICfoi7HmloflkI3np7AnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiAnc2VxTm8nLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICfmjpLluo/lj7cnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdlZGl0JyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAn5pON5L2cJyxcclxuICAgICAgICAgICAgICAgIGNlbGxUZW1wbGF0ZTogZWRpdFVybFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgfTtcclxuXHJcbiAgICBkYXRhU2VydmljZS5nZXRTYW1wbGVUeXBlTGlzdCgpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICRzY29wZS5ncmlkT3B0aW9ucy5kYXRhID0gcmVzdWx0LmRhdGE7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkc2NvcGUuc2VhcmNoID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICRzY29wZS5ncmlkQXBpLmdyaWQucmVmcmVzaCgpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuY3JlYXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICRzdGF0ZS5nbyhsaW5rKTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmRlbGV0ZSA9IGZ1bmN0aW9uIChvYmopIHtcclxuICAgICAgICBkYXRhU2VydmljZS5kZWxldGVTYW1wbGVUeXBlKG9iaikudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgJHNjb3BlLmdyaWRPcHRpb25zLmRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmICgkc2NvcGUuZ3JpZE9wdGlvbnMuZGF0YVtpXS5pZCA9PSBvYmouaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZ3JpZE9wdGlvbnMuZGF0YS5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuZmlsdGVyID0gZnVuY3Rpb24gKHJlbmRlcmFibGVSb3dzKSB7XHJcbiAgICAgICAgdmFyIG1hdGNoZXIgPSBuZXcgUmVnRXhwKCRzY29wZS5maWx0ZXJWYWx1ZSk7XHJcbiAgICAgICAgcmVuZGVyYWJsZVJvd3MuZm9yRWFjaChmdW5jdGlvbiAocm93KSB7XHJcbiAgICAgICAgICAgIHZhciBtYXRjaCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBbJ2NvZGUnLCAnY2h0TmFtZScsICdlbmdOYW1lJywgJ3NlcU5vJ10uZm9yRWFjaChmdW5jdGlvbiAoZmllbGQpIHtcclxuICAgICAgICAgICAgICAgIHZhciBlbnRpdHkgPSByb3cuZW50aXR5W2ZpZWxkXSArICcnO1xyXG4gICAgICAgICAgICAgICAgaWYgKGVudGl0eS5tYXRjaChtYXRjaGVyKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hdGNoID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmICghbWF0Y2gpIHtcclxuICAgICAgICAgICAgICAgIHJvdy52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcmVuZGVyYWJsZVJvd3M7XHJcbiAgICB9O1xyXG59XSk7XHJcblxyXG5hcHAuY29udHJvbGxlcignU2FtcGxlVHlwZURldGFpbEN0cmwnLCBbJyRzY29wZScsICckc3RhdGUnLCAnJHN0YXRlUGFyYW1zJywgJ2RhdGFTZXJ2aWNlJywgZnVuY3Rpb24gKCRzY29wZSwgJHN0YXRlLCAkc3RhdGVQYXJhbXMsIGRhdGFTZXJ2aWNlKSB7XHJcblxyXG4gICAgJHNjb3BlLm1vZGVsID0ge1xyXG4gICAgICAgIGlkOiBudWxsLFxyXG4gICAgICAgIHBhcmVudElkOiBudWxsLFxyXG4gICAgICAgIGNvZGU6IG51bGwsXHJcbiAgICAgICAgY2h0TmFtZTogbnVsbCxcclxuICAgICAgICBlbmdOYW1lOiBudWxsLFxyXG4gICAgICAgIHNlcU5vOiBudWxsLFxyXG4gICAgICAgIGhlbHBDb2RlOiBudWxsXHJcbiAgICB9O1xyXG5cclxuICAgIGlmICgkc3RhdGVQYXJhbXMuaWQpIHtcclxuICAgICAgICBkYXRhU2VydmljZS5nZXRTYW1wbGVUeXBlQnlJZCgkc3RhdGVQYXJhbXMuaWQpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LmRhdGEpIHtcclxuICAgICAgICAgICAgICAgICRzY29wZS5tb2RlbCA9IHJlc3VsdC5kYXRhO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgICRzY29wZS5zdWJtaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJHNjb3BlLm1vZGVsKTtcclxuICAgICAgICBkYXRhU2VydmljZS5zYXZlU2FtcGxlVHlwZSgkc2NvcGUubW9kZWwpLnRoZW4oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkc3RhdGUuZ28oJ2FwcC5zYW1wbGV0eXBlJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxufV0pOyIsImFwcC5jb250cm9sbGVyKCdVc2VyQ3RybCcsIFsnJHNjb3BlJywgJyRtb2RhbCcsICckc3RhdGUnLCAnZGF0YVNlcnZpY2UnLCAndXRpbCcsIGZ1bmN0aW9uICgkc2NvcGUsICRtb2RhbCwgJHN0YXRlLCBkYXRhU2VydmljZSwgdXRpbCkge1xyXG5cclxuXHJcbn1dKTsiLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuICAuZGlyZWN0aXZlKCdzZXROZ0FuaW1hdGUnLCBbJyRhbmltYXRlJywgZnVuY3Rpb24gKCRhbmltYXRlKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGxpbms6IGZ1bmN0aW9uICgkc2NvcGUsICRlbGVtZW50LCAkYXR0cnMpIHtcclxuICAgICAgICAgICAgJHNjb3BlLiR3YXRjaCggZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJHNjb3BlLiRldmFsKCRhdHRycy5zZXROZ0FuaW1hdGUsICRzY29wZSk7XHJcbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uKHZhbG5ldywgdmFsb2xkKXtcclxuICAgICAgICAgICAgICAgICRhbmltYXRlLmVuYWJsZWQoISF2YWxuZXcsICRlbGVtZW50KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICB9XSk7IiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbiAgLmRpcmVjdGl2ZSgndWlCdXR0ZXJiYXInLCBbJyRyb290U2NvcGUnLCAnJGFuY2hvclNjcm9sbCcsIGZ1bmN0aW9uKCRyb290U2NvcGUsICRhbmNob3JTY3JvbGwpIHtcclxuICAgICByZXR1cm4ge1xyXG4gICAgICByZXN0cmljdDogJ0FDJyxcclxuICAgICAgdGVtcGxhdGU6JzxzcGFuIGNsYXNzPVwiYmFyXCI+PC9zcGFuPicsXHJcbiAgICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbCwgYXR0cnMpIHsgICAgICAgIFxyXG4gICAgICAgIGVsLmFkZENsYXNzKCdidXR0ZXJiYXIgaGlkZScpO1xyXG4gICAgICAgIHNjb3BlLiRvbignJHN0YXRlQ2hhbmdlU3RhcnQnLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgICAgJGFuY2hvclNjcm9sbCgpO1xyXG4gICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2hpZGUnKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2NvcGUuJG9uKCckc3RhdGVDaGFuZ2VTdWNjZXNzJywgZnVuY3Rpb24oIGV2ZW50LCB0b1N0YXRlLCB0b1BhcmFtcywgZnJvbVN0YXRlICkge1xyXG4gICAgICAgICAgZXZlbnQudGFyZ2V0U2NvcGUuJHdhdGNoKCckdmlld0NvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBlbC5hZGRDbGFzcygnaGlkZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICB9O1xyXG4gIH1dKTsiLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuICAuZGlyZWN0aXZlKCd1aUZvY3VzJywgZnVuY3Rpb24oJHRpbWVvdXQsICRwYXJzZSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbGluazogZnVuY3Rpb24oc2NvcGUsIGVsZW1lbnQsIGF0dHIpIHtcclxuICAgICAgICB2YXIgbW9kZWwgPSAkcGFyc2UoYXR0ci51aUZvY3VzKTtcclxuICAgICAgICAkdGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgIGVsZW1lbnRbMF0uZm9jdXMoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBzY29wZS4kd2F0Y2gobW9kZWwsIGZ1bmN0aW9uKHZhbHVlKSB7XHJcbiAgICAgICAgICBpZih2YWx1ZSkge1xyXG4gICAgICAgICAgICAkdGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICBlbGVtZW50WzBdLmZvY3VzKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGVsZW1lbnQuYmluZCgnYmx1cicsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgIC8vc2NvcGUuJGFwcGx5KG1vZGVsLmFzc2lnbihzY29wZSwgZmFsc2UpKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9KTsiLCIgYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbiAgLmRpcmVjdGl2ZSgndWlGdWxsc2NyZWVuJywgWyd1aUxvYWQnLCAnJGRvY3VtZW50JywgJyR3aW5kb3cnLCBmdW5jdGlvbih1aUxvYWQsICRkb2N1bWVudCwgJHdpbmRvdykge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcmVzdHJpY3Q6ICdBQycsXHJcbiAgICAgIHRlbXBsYXRlOic8aSBjbGFzcz1cImZhIGZhLWV4cGFuZCBmYS1mdyB0ZXh0XCI+PC9pPjxpIGNsYXNzPVwiZmEgZmEtY29tcHJlc3MgZmEtZncgdGV4dC1hY3RpdmVcIj48L2k+JyxcclxuICAgICAgbGluazogZnVuY3Rpb24oc2NvcGUsIGVsLCBhdHRyKSB7XHJcbiAgICAgICAgZWwuYWRkQ2xhc3MoJ2hpZGUnKTtcclxuICAgICAgICB1aUxvYWQubG9hZCgndmVuZG9yL2xpYnMvc2NyZWVuZnVsbC5taW4uanMnKS50aGVuKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAvLyBkaXNhYmxlIG9uIGllMTFcclxuICAgICAgICAgIGlmIChzY3JlZW5mdWxsLmVuYWJsZWQgJiYgIW5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL1RyaWRlbnQuKnJ2OjExXFwuLykpIHtcclxuICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2hpZGUnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIHZhciB0YXJnZXQ7XHJcbiAgICAgICAgICAgIGF0dHIudGFyZ2V0ICYmICggdGFyZ2V0ID0gJChhdHRyLnRhcmdldClbMF0gKTsgICAgICAgICAgICBcclxuICAgICAgICAgICAgc2NyZWVuZnVsbC50b2dnbGUodGFyZ2V0KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgJGRvY3VtZW50Lm9uKHNjcmVlbmZ1bGwucmF3LmZ1bGxzY3JlZW5jaGFuZ2UsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYoc2NyZWVuZnVsbC5pc0Z1bGxzY3JlZW4pe1xyXG4gICAgICAgICAgICAgIGVsLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9XSk7IiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuLyoqXHJcbiAqIDAuMS4xXHJcbiAqIEdlbmVyYWwtcHVycG9zZSBqUXVlcnkgd3JhcHBlci4gU2ltcGx5IHBhc3MgdGhlIHBsdWdpbiBuYW1lIGFzIHRoZSBleHByZXNzaW9uLlxyXG4gKlxyXG4gKiBJdCBpcyBwb3NzaWJsZSB0byBzcGVjaWZ5IGEgZGVmYXVsdCBzZXQgb2YgcGFyYW1ldGVycyBmb3IgZWFjaCBqUXVlcnkgcGx1Z2luLlxyXG4gKiBVbmRlciB0aGUganEga2V5LCBuYW1lc3BhY2UgZWFjaCBwbHVnaW4gYnkgdGhhdCB3aGljaCB3aWxsIGJlIHBhc3NlZCB0byB1aS1qcS5cclxuICogVW5mb3J0dW5hdGVseSwgYXQgdGhpcyB0aW1lIHlvdSBjYW4gb25seSBwcmUtZGVmaW5lIHRoZSBmaXJzdCBwYXJhbWV0ZXIuXHJcbiAqIEBleGFtcGxlIHsganEgOiB7IGRhdGVwaWNrZXIgOiB7IHNob3dPbjonY2xpY2snIH0gfSB9XHJcbiAqXHJcbiAqIEBwYXJhbSB1aS1qcSB7c3RyaW5nfSBUaGUgJGVsbS5bcGx1Z2luTmFtZV0oKSB0byBjYWxsLlxyXG4gKiBAcGFyYW0gW3VpLW9wdGlvbnNdIHttaXhlZH0gRXhwcmVzc2lvbiB0byBiZSBldmFsdWF0ZWQgYW5kIHBhc3NlZCBhcyBvcHRpb25zIHRvIHRoZSBmdW5jdGlvblxyXG4gKiAgICAgTXVsdGlwbGUgcGFyYW1ldGVycyBjYW4gYmUgc2VwYXJhdGVkIGJ5IGNvbW1hc1xyXG4gKiBAcGFyYW0gW3VpLXJlZnJlc2hdIHtleHByZXNzaW9ufSBXYXRjaCBleHByZXNzaW9uIGFuZCByZWZpcmUgcGx1Z2luIG9uIGNoYW5nZXNcclxuICpcclxuICogQGV4YW1wbGUgPGlucHV0IHVpLWpxPVwiZGF0ZXBpY2tlclwiIHVpLW9wdGlvbnM9XCJ7c2hvd09uOidjbGljayd9LHNlY29uZFBhcmFtZXRlcix0aGlyZFBhcmFtZXRlclwiIHVpLXJlZnJlc2g9XCJpQ2hhbmdlXCI+XHJcbiAqL1xyXG5hbmd1bGFyLm1vZHVsZSgndWkuanEnLCBbJ3VpLmxvYWQnXSkuXHJcbiAgdmFsdWUoJ3VpSnFDb25maWcnLCB7fSkuXHJcbiAgZGlyZWN0aXZlKCd1aUpxJywgWyd1aUpxQ29uZmlnJywgJ0pRX0NPTkZJRycsICd1aUxvYWQnLCAnJHRpbWVvdXQnLCBmdW5jdGlvbiB1aUpxSW5qZWN0aW5nRnVuY3Rpb24odWlKcUNvbmZpZywgSlFfQ09ORklHLCB1aUxvYWQsICR0aW1lb3V0KSB7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICByZXN0cmljdDogJ0EnLFxyXG4gICAgY29tcGlsZTogZnVuY3Rpb24gdWlKcUNvbXBpbGluZ0Z1bmN0aW9uKHRFbG0sIHRBdHRycykge1xyXG5cclxuICAgICAgaWYgKCFhbmd1bGFyLmlzRnVuY3Rpb24odEVsbVt0QXR0cnMudWlKcV0pICYmICFKUV9DT05GSUdbdEF0dHJzLnVpSnFdKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd1aS1qcTogVGhlIFwiJyArIHRBdHRycy51aUpxICsgJ1wiIGZ1bmN0aW9uIGRvZXMgbm90IGV4aXN0Jyk7XHJcbiAgICAgIH1cclxuICAgICAgdmFyIG9wdGlvbnMgPSB1aUpxQ29uZmlnICYmIHVpSnFDb25maWdbdEF0dHJzLnVpSnFdO1xyXG5cclxuICAgICAgcmV0dXJuIGZ1bmN0aW9uIHVpSnFMaW5raW5nRnVuY3Rpb24oc2NvcGUsIGVsbSwgYXR0cnMpIHtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gZ2V0T3B0aW9ucygpe1xyXG4gICAgICAgICAgdmFyIGxpbmtPcHRpb25zID0gW107XHJcblxyXG4gICAgICAgICAgLy8gSWYgdWktb3B0aW9ucyBhcmUgcGFzc2VkLCBtZXJnZSAob3Igb3ZlcnJpZGUpIHRoZW0gb250byBnbG9iYWwgZGVmYXVsdHMgYW5kIHBhc3MgdG8gdGhlIGpRdWVyeSBtZXRob2RcclxuICAgICAgICAgIGlmIChhdHRycy51aU9wdGlvbnMpIHtcclxuICAgICAgICAgICAgbGlua09wdGlvbnMgPSBzY29wZS4kZXZhbCgnWycgKyBhdHRycy51aU9wdGlvbnMgKyAnXScpO1xyXG4gICAgICAgICAgICBpZiAoYW5ndWxhci5pc09iamVjdChvcHRpb25zKSAmJiBhbmd1bGFyLmlzT2JqZWN0KGxpbmtPcHRpb25zWzBdKSkge1xyXG4gICAgICAgICAgICAgIGxpbmtPcHRpb25zWzBdID0gYW5ndWxhci5leHRlbmQoe30sIG9wdGlvbnMsIGxpbmtPcHRpb25zWzBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBlbHNlIGlmIChvcHRpb25zKSB7XHJcbiAgICAgICAgICAgIGxpbmtPcHRpb25zID0gW29wdGlvbnNdO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIGxpbmtPcHRpb25zO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gSWYgY2hhbmdlIGNvbXBhdGliaWxpdHkgaXMgZW5hYmxlZCwgdGhlIGZvcm0gaW5wdXQncyBcImNoYW5nZVwiIGV2ZW50IHdpbGwgdHJpZ2dlciBhbiBcImlucHV0XCIgZXZlbnRcclxuICAgICAgICBpZiAoYXR0cnMubmdNb2RlbCAmJiBlbG0uaXMoJ3NlbGVjdCxpbnB1dCx0ZXh0YXJlYScpKSB7XHJcbiAgICAgICAgICBlbG0uYmluZCgnY2hhbmdlJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGVsbS50cmlnZ2VyKCdpbnB1dCcpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBDYWxsIGpRdWVyeSBtZXRob2QgYW5kIHBhc3MgcmVsZXZhbnQgb3B0aW9uc1xyXG4gICAgICAgIGZ1bmN0aW9uIGNhbGxQbHVnaW4oKSB7XHJcbiAgICAgICAgICAkdGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgZWxtW2F0dHJzLnVpSnFdLmFwcGx5KGVsbSwgZ2V0T3B0aW9ucygpKTtcclxuICAgICAgICAgIH0sIDAsIGZhbHNlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHJlZnJlc2goKXtcclxuICAgICAgICAgIC8vIElmIHVpLXJlZnJlc2ggaXMgdXNlZCwgcmUtZmlyZSB0aGUgdGhlIG1ldGhvZCB1cG9uIGV2ZXJ5IGNoYW5nZVxyXG4gICAgICAgICAgaWYgKGF0dHJzLnVpUmVmcmVzaCkge1xyXG4gICAgICAgICAgICBzY29wZS4kd2F0Y2goYXR0cnMudWlSZWZyZXNoLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICBjYWxsUGx1Z2luKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCBKUV9DT05GSUdbYXR0cnMudWlKcV0gKSB7XHJcbiAgICAgICAgICB1aUxvYWQubG9hZChKUV9DT05GSUdbYXR0cnMudWlKcV0pLnRoZW4oZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGNhbGxQbHVnaW4oKTtcclxuICAgICAgICAgICAgcmVmcmVzaCgpO1xyXG4gICAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNhbGxQbHVnaW4oKTtcclxuICAgICAgICAgIHJlZnJlc2goKTtcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgfTtcclxufV0pOyIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4gIC5kaXJlY3RpdmUoJ3VpTW9kdWxlJywgWydNT0RVTEVfQ09ORklHJywndWlMb2FkJywgJyRjb21waWxlJywgZnVuY3Rpb24oTU9EVUxFX0NPTkZJRywgdWlMb2FkLCAkY29tcGlsZSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcmVzdHJpY3Q6ICdBJyxcclxuICAgICAgY29tcGlsZTogZnVuY3Rpb24gKGVsLCBhdHRycykge1xyXG4gICAgICAgIHZhciBjb250ZW50cyA9IGVsLmNvbnRlbnRzKCkuY2xvbmUoKTtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24oc2NvcGUsIGVsLCBhdHRycyl7XHJcbiAgICAgICAgICBlbC5jb250ZW50cygpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgdWlMb2FkLmxvYWQoTU9EVUxFX0NPTkZJR1thdHRycy51aU1vZHVsZV0pXHJcbiAgICAgICAgICAudGhlbihmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAkY29tcGlsZShjb250ZW50cykoc2NvcGUsIGZ1bmN0aW9uKGNsb25lZEVsZW1lbnQsIHNjb3BlKSB7XHJcbiAgICAgICAgICAgICAgZWwuYXBwZW5kKGNsb25lZEVsZW1lbnQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9XSk7IiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbiAgLmRpcmVjdGl2ZSgndWlOYXYnLCBbJyR0aW1lb3V0JywgZnVuY3Rpb24oJHRpbWVvdXQpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHJlc3RyaWN0OiAnQUMnLFxyXG4gICAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWwsIGF0dHIpIHtcclxuICAgICAgICB2YXIgX3dpbmRvdyA9ICQod2luZG93KSwgXHJcbiAgICAgICAgX21iID0gNzY4LCBcclxuICAgICAgICB3cmFwID0gJCgnLmFwcC1hc2lkZScpLCBcclxuICAgICAgICBuZXh0LCBcclxuICAgICAgICBiYWNrZHJvcCA9ICcuZHJvcGRvd24tYmFja2Ryb3AnO1xyXG4gICAgICAgIC8vIHVuZm9sZGVkXHJcbiAgICAgICAgZWwub24oJ2NsaWNrJywgJ2EnLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICBuZXh0ICYmIG5leHQudHJpZ2dlcignbW91c2VsZWF2ZS5uYXYnKTtcclxuICAgICAgICAgIHZhciBfdGhpcyA9ICQodGhpcyk7XHJcbiAgICAgICAgICBfdGhpcy5wYXJlbnQoKS5zaWJsaW5ncyggXCIuYWN0aXZlXCIgKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICBfdGhpcy5uZXh0KCkuaXMoJ3VsJykgJiYgIF90aGlzLnBhcmVudCgpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKSAmJiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgLy8gbW9iaWxlXHJcbiAgICAgICAgICBfdGhpcy5uZXh0KCkuaXMoJ3VsJykgfHwgKCAoIF93aW5kb3cud2lkdGgoKSA8IF9tYiApICYmICQoJy5hcHAtYXNpZGUnKS5yZW1vdmVDbGFzcygnc2hvdyBvZmYtc2NyZWVuJykgKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gZm9sZGVkICYgZml4ZWRcclxuICAgICAgICBlbC5vbignbW91c2VlbnRlcicsICdhJywgZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgICBuZXh0ICYmIG5leHQudHJpZ2dlcignbW91c2VsZWF2ZS5uYXYnKTtcclxuICAgICAgICAgICQoJz4gLm5hdicsIHdyYXApLnJlbW92ZSgpO1xyXG4gICAgICAgICAgaWYgKCAhJCgnLmFwcC1hc2lkZS1maXhlZC5hcHAtYXNpZGUtZm9sZGVkJykubGVuZ3RoIHx8ICggX3dpbmRvdy53aWR0aCgpIDwgX21iICkgfHwgJCgnLmFwcC1hc2lkZS1kb2NrJykubGVuZ3RoKSByZXR1cm47XHJcbiAgICAgICAgICB2YXIgX3RoaXMgPSAkKGUudGFyZ2V0KVxyXG4gICAgICAgICAgLCB0b3BcclxuICAgICAgICAgICwgd19oID0gJCh3aW5kb3cpLmhlaWdodCgpXHJcbiAgICAgICAgICAsIG9mZnNldCA9IDUwXHJcbiAgICAgICAgICAsIG1pbiA9IDE1MDtcclxuXHJcbiAgICAgICAgICAhX3RoaXMuaXMoJ2EnKSAmJiAoX3RoaXMgPSBfdGhpcy5jbG9zZXN0KCdhJykpO1xyXG4gICAgICAgICAgaWYoIF90aGlzLm5leHQoKS5pcygndWwnKSApe1xyXG4gICAgICAgICAgICAgbmV4dCA9IF90aGlzLm5leHQoKTtcclxuICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgIFxyXG4gICAgICAgICAgX3RoaXMucGFyZW50KCkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgdG9wID0gX3RoaXMucGFyZW50KCkucG9zaXRpb24oKS50b3AgKyBvZmZzZXQ7XHJcbiAgICAgICAgICBuZXh0LmNzcygndG9wJywgdG9wKTtcclxuICAgICAgICAgIGlmKCB0b3AgKyBuZXh0LmhlaWdodCgpID4gd19oICl7XHJcbiAgICAgICAgICAgIG5leHQuY3NzKCdib3R0b20nLCAwKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmKHRvcCArIG1pbiA+IHdfaCl7XHJcbiAgICAgICAgICAgIG5leHQuY3NzKCdib3R0b20nLCB3X2ggLSB0b3AgLSBvZmZzZXQpLmNzcygndG9wJywgJ2F1dG8nKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIG5leHQuYXBwZW5kVG8od3JhcCk7XHJcblxyXG4gICAgICAgICAgbmV4dC5vbignbW91c2VsZWF2ZS5uYXYnLCBmdW5jdGlvbihlKXtcclxuICAgICAgICAgICAgJChiYWNrZHJvcCkucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIG5leHQuYXBwZW5kVG8oX3RoaXMucGFyZW50KCkpO1xyXG4gICAgICAgICAgICBuZXh0Lm9mZignbW91c2VsZWF2ZS5uYXYnKS5jc3MoJ3RvcCcsICdhdXRvJykuY3NzKCdib3R0b20nLCAnYXV0bycpO1xyXG4gICAgICAgICAgICBfdGhpcy5wYXJlbnQoKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAkKCcuc21hcnQnKS5sZW5ndGggJiYgJCgnPGRpdiBjbGFzcz1cImRyb3Bkb3duLWJhY2tkcm9wXCIvPicpLmluc2VydEFmdGVyKCcuYXBwLWFzaWRlJykub24oJ2NsaWNrJywgZnVuY3Rpb24obmV4dCl7XHJcbiAgICAgICAgICAgIG5leHQgJiYgbmV4dC50cmlnZ2VyKCdtb3VzZWxlYXZlLm5hdicpO1xyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB3cmFwLm9uKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgICBuZXh0ICYmIG5leHQudHJpZ2dlcignbW91c2VsZWF2ZS5uYXYnKTtcclxuICAgICAgICAgICQoJz4gLm5hdicsIHdyYXApLnJlbW92ZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH1dKTsiLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuICAuZGlyZWN0aXZlKCd1aVNjcm9sbCcsIFsnJGxvY2F0aW9uJywgJyRhbmNob3JTY3JvbGwnLCBmdW5jdGlvbigkbG9jYXRpb24sICRhbmNob3JTY3JvbGwpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHJlc3RyaWN0OiAnQUMnLFxyXG4gICAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWwsIGF0dHIpIHtcclxuICAgICAgICBlbC5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAkbG9jYXRpb24uaGFzaChhdHRyLnVpU2Nyb2xsKTtcclxuICAgICAgICAgICRhbmNob3JTY3JvbGwoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9XSk7IiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbiAgLmRpcmVjdGl2ZSgndWlTaGlmdCcsIFsnJHRpbWVvdXQnLCBmdW5jdGlvbigkdGltZW91dCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcmVzdHJpY3Q6ICdBJyxcclxuICAgICAgbGluazogZnVuY3Rpb24oc2NvcGUsIGVsLCBhdHRyKSB7XHJcbiAgICAgICAgLy8gZ2V0IHRoZSAkcHJldiBvciAkcGFyZW50IG9mIHRoaXMgZWxcclxuICAgICAgICB2YXIgX2VsID0gJChlbCksXHJcbiAgICAgICAgICAgIF93aW5kb3cgPSAkKHdpbmRvdyksXHJcbiAgICAgICAgICAgIHByZXYgPSBfZWwucHJldigpLFxyXG4gICAgICAgICAgICBwYXJlbnQsXHJcbiAgICAgICAgICAgIHdpZHRoID0gX3dpbmRvdy53aWR0aCgpXHJcbiAgICAgICAgICAgIDtcclxuXHJcbiAgICAgICAgIXByZXYubGVuZ3RoICYmIChwYXJlbnQgPSBfZWwucGFyZW50KCkpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGZ1bmN0aW9uIHNtKCl7XHJcbiAgICAgICAgICAkdGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBtZXRob2QgPSBhdHRyLnVpU2hpZnQ7XHJcbiAgICAgICAgICAgIHZhciB0YXJnZXQgPSBhdHRyLnRhcmdldDtcclxuICAgICAgICAgICAgX2VsLmhhc0NsYXNzKCdpbicpIHx8IF9lbFttZXRob2RdKHRhcmdldCkuYWRkQ2xhc3MoJ2luJyk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgZnVuY3Rpb24gbWQoKXtcclxuICAgICAgICAgIHBhcmVudCAmJiBwYXJlbnRbJ3ByZXBlbmQnXShlbCk7XHJcbiAgICAgICAgICAhcGFyZW50ICYmIF9lbFsnaW5zZXJ0QWZ0ZXInXShwcmV2KTtcclxuICAgICAgICAgIF9lbC5yZW1vdmVDbGFzcygnaW4nKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICh3aWR0aCA8IDc2OCAmJiBzbSgpKSB8fCBtZCgpO1xyXG5cclxuICAgICAgICBfd2luZG93LnJlc2l6ZShmdW5jdGlvbigpIHtcclxuICAgICAgICAgIGlmKHdpZHRoICE9PSBfd2luZG93LndpZHRoKCkpe1xyXG4gICAgICAgICAgICAkdGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgIChfd2luZG93LndpZHRoKCkgPCA3NjggJiYgc20oKSkgfHwgbWQoKTtcclxuICAgICAgICAgICAgICB3aWR0aCA9IF93aW5kb3cud2lkdGgoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfV0pOyIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4gIC5kaXJlY3RpdmUoJ3VpVG9nZ2xlQ2xhc3MnLCBbJyR0aW1lb3V0JywgJyRkb2N1bWVudCcsIGZ1bmN0aW9uKCR0aW1lb3V0LCAkZG9jdW1lbnQpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHJlc3RyaWN0OiAnQUMnLFxyXG4gICAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWwsIGF0dHIpIHtcclxuICAgICAgICBlbC5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICB2YXIgY2xhc3NlcyA9IGF0dHIudWlUb2dnbGVDbGFzcy5zcGxpdCgnLCcpLFxyXG4gICAgICAgICAgICAgIHRhcmdldHMgPSAoYXR0ci50YXJnZXQgJiYgYXR0ci50YXJnZXQuc3BsaXQoJywnKSkgfHwgQXJyYXkoZWwpLFxyXG4gICAgICAgICAgICAgIGtleSA9IDA7XHJcbiAgICAgICAgICBhbmd1bGFyLmZvckVhY2goY2xhc3NlcywgZnVuY3Rpb24oIF9jbGFzcyApIHtcclxuICAgICAgICAgICAgdmFyIHRhcmdldCA9IHRhcmdldHNbKHRhcmdldHMubGVuZ3RoICYmIGtleSldOyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAoIF9jbGFzcy5pbmRleE9mKCAnKicgKSAhPT0gLTEgKSAmJiBtYWdpYyhfY2xhc3MsIHRhcmdldCk7XHJcbiAgICAgICAgICAgICQoIHRhcmdldCApLnRvZ2dsZUNsYXNzKF9jbGFzcyk7XHJcbiAgICAgICAgICAgIGtleSArKztcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgJChlbCkudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cclxuICAgICAgICAgIGZ1bmN0aW9uIG1hZ2ljKF9jbGFzcywgdGFyZ2V0KXtcclxuICAgICAgICAgICAgdmFyIHBhdHQgPSBuZXcgUmVnRXhwKCAnXFxcXHMnICsgXHJcbiAgICAgICAgICAgICAgICBfY2xhc3MuXHJcbiAgICAgICAgICAgICAgICAgIHJlcGxhY2UoIC9cXCovZywgJ1tBLVphLXowLTktX10rJyApLlxyXG4gICAgICAgICAgICAgICAgICBzcGxpdCggJyAnICkuXHJcbiAgICAgICAgICAgICAgICAgIGpvaW4oICdcXFxcc3xcXFxccycgKSArIFxyXG4gICAgICAgICAgICAgICAgJ1xcXFxzJywgJ2cnICk7XHJcbiAgICAgICAgICAgIHZhciBjbiA9ICcgJyArICQodGFyZ2V0KVswXS5jbGFzc05hbWUgKyAnICc7XHJcbiAgICAgICAgICAgIHdoaWxlICggcGF0dC50ZXN0KCBjbiApICkge1xyXG4gICAgICAgICAgICAgIGNuID0gY24ucmVwbGFjZSggcGF0dCwgJyAnICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJCh0YXJnZXQpWzBdLmNsYXNzTmFtZSA9ICQudHJpbSggY24gKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9XSk7IiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuLyoqXHJcbiAqIEdlbmVyYWwtcHVycG9zZSB2YWxpZGF0b3IgZm9yIG5nTW9kZWwuXHJcbiAqIGFuZ3VsYXIuanMgY29tZXMgd2l0aCBzZXZlcmFsIGJ1aWx0LWluIHZhbGlkYXRpb24gbWVjaGFuaXNtIGZvciBpbnB1dCBmaWVsZHMgKG5nUmVxdWlyZWQsIG5nUGF0dGVybiBldGMuKSBidXQgdXNpbmdcclxuICogYW4gYXJiaXRyYXJ5IHZhbGlkYXRpb24gZnVuY3Rpb24gcmVxdWlyZXMgY3JlYXRpb24gb2YgYSBjdXN0b20gZm9ybWF0dGVycyBhbmQgLyBvciBwYXJzZXJzLlxyXG4gKiBUaGUgdWktdmFsaWRhdGUgZGlyZWN0aXZlIG1ha2VzIGl0IGVhc3kgdG8gdXNlIGFueSBmdW5jdGlvbihzKSBkZWZpbmVkIGluIHNjb3BlIGFzIGEgdmFsaWRhdG9yIGZ1bmN0aW9uKHMpLlxyXG4gKiBBIHZhbGlkYXRvciBmdW5jdGlvbiB3aWxsIHRyaWdnZXIgdmFsaWRhdGlvbiBvbiBib3RoIG1vZGVsIGFuZCBpbnB1dCBjaGFuZ2VzLlxyXG4gKlxyXG4gKiBAZXhhbXBsZSA8aW5wdXQgdWktdmFsaWRhdGU9XCIgJ215VmFsaWRhdG9yRnVuY3Rpb24oJHZhbHVlKScgXCI+XHJcbiAqIEBleGFtcGxlIDxpbnB1dCB1aS12YWxpZGF0ZT1cInsgZm9vIDogJyR2YWx1ZSA+IGFub3RoZXJNb2RlbCcsIGJhciA6ICd2YWxpZGF0ZUZvbygkdmFsdWUpJyB9XCI+XHJcbiAqIEBleGFtcGxlIDxpbnB1dCB1aS12YWxpZGF0ZT1cInsgZm9vIDogJyR2YWx1ZSA+IGFub3RoZXJNb2RlbCcgfVwiIHVpLXZhbGlkYXRlLXdhdGNoPVwiICdhbm90aGVyTW9kZWwnIFwiPlxyXG4gKiBAZXhhbXBsZSA8aW5wdXQgdWktdmFsaWRhdGU9XCJ7IGZvbyA6ICckdmFsdWUgPiBhbm90aGVyTW9kZWwnLCBiYXIgOiAndmFsaWRhdGVGb28oJHZhbHVlKScgfVwiIHVpLXZhbGlkYXRlLXdhdGNoPVwiIHsgZm9vIDogJ2Fub3RoZXJNb2RlbCcgfSBcIj5cclxuICpcclxuICogQHBhcmFtIHVpLXZhbGlkYXRlIHtzdHJpbmd8b2JqZWN0IGxpdGVyYWx9IElmIHN0cmluZ3MgaXMgcGFzc2VkIGl0IHNob3VsZCBiZSBhIHNjb3BlJ3MgZnVuY3Rpb24gdG8gYmUgdXNlZCBhcyBhIHZhbGlkYXRvci5cclxuICogSWYgYW4gb2JqZWN0IGxpdGVyYWwgaXMgcGFzc2VkIGEga2V5IGRlbm90ZXMgYSB2YWxpZGF0aW9uIGVycm9yIGtleSB3aGlsZSBhIHZhbHVlIHNob3VsZCBiZSBhIHZhbGlkYXRvciBmdW5jdGlvbi5cclxuICogSW4gYm90aCBjYXNlcyB2YWxpZGF0b3IgZnVuY3Rpb24gc2hvdWxkIHRha2UgYSB2YWx1ZSB0byB2YWxpZGF0ZSBhcyBpdHMgYXJndW1lbnQgYW5kIHNob3VsZCByZXR1cm4gdHJ1ZS9mYWxzZSBpbmRpY2F0aW5nIGEgdmFsaWRhdGlvbiByZXN1bHQuXHJcbiAqL1xyXG5hbmd1bGFyLm1vZHVsZSgndWkudmFsaWRhdGUnLFtdKS5kaXJlY3RpdmUoJ3VpVmFsaWRhdGUnLCBmdW5jdGlvbiAoKSB7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICByZXN0cmljdDogJ0EnLFxyXG4gICAgcmVxdWlyZTogJ25nTW9kZWwnLFxyXG4gICAgbGluazogZnVuY3Rpb24gKHNjb3BlLCBlbG0sIGF0dHJzLCBjdHJsKSB7XHJcbiAgICAgIHZhciB2YWxpZGF0ZUZuLCB2YWxpZGF0b3JzID0ge30sXHJcbiAgICAgICAgICB2YWxpZGF0ZUV4cHIgPSBzY29wZS4kZXZhbChhdHRycy51aVZhbGlkYXRlKTtcclxuXHJcbiAgICAgIGlmICghdmFsaWRhdGVFeHByKXsgcmV0dXJuO31cclxuXHJcbiAgICAgIGlmIChhbmd1bGFyLmlzU3RyaW5nKHZhbGlkYXRlRXhwcikpIHtcclxuICAgICAgICB2YWxpZGF0ZUV4cHIgPSB7IHZhbGlkYXRvcjogdmFsaWRhdGVFeHByIH07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGFuZ3VsYXIuZm9yRWFjaCh2YWxpZGF0ZUV4cHIsIGZ1bmN0aW9uIChleHByc3NuLCBrZXkpIHtcclxuICAgICAgICB2YWxpZGF0ZUZuID0gZnVuY3Rpb24gKHZhbHVlVG9WYWxpZGF0ZSkge1xyXG4gICAgICAgICAgdmFyIGV4cHJlc3Npb24gPSBzY29wZS4kZXZhbChleHByc3NuLCB7ICckdmFsdWUnIDogdmFsdWVUb1ZhbGlkYXRlIH0pO1xyXG4gICAgICAgICAgaWYgKGFuZ3VsYXIuaXNPYmplY3QoZXhwcmVzc2lvbikgJiYgYW5ndWxhci5pc0Z1bmN0aW9uKGV4cHJlc3Npb24udGhlbikpIHtcclxuICAgICAgICAgICAgLy8gZXhwcmVzc2lvbiBpcyBhIHByb21pc2VcclxuICAgICAgICAgICAgZXhwcmVzc2lvbi50aGVuKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgY3RybC4kc2V0VmFsaWRpdHkoa2V5LCB0cnVlKTtcclxuICAgICAgICAgICAgfSwgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICBjdHJsLiRzZXRWYWxpZGl0eShrZXksIGZhbHNlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZVRvVmFsaWRhdGU7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGV4cHJlc3Npb24pIHtcclxuICAgICAgICAgICAgLy8gZXhwcmVzc2lvbiBpcyB0cnVlXHJcbiAgICAgICAgICAgIGN0cmwuJHNldFZhbGlkaXR5KGtleSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZVRvVmFsaWRhdGU7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBleHByZXNzaW9uIGlzIGZhbHNlXHJcbiAgICAgICAgICAgIGN0cmwuJHNldFZhbGlkaXR5KGtleSwgZmFsc2UpO1xyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWVUb1ZhbGlkYXRlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdmFsaWRhdG9yc1trZXldID0gdmFsaWRhdGVGbjtcclxuICAgICAgICBjdHJsLiRmb3JtYXR0ZXJzLnB1c2godmFsaWRhdGVGbik7XHJcbiAgICAgICAgY3RybC4kcGFyc2Vycy5wdXNoKHZhbGlkYXRlRm4pO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGZ1bmN0aW9uIGFwcGx5X3dhdGNoKHdhdGNoKVxyXG4gICAgICB7XHJcbiAgICAgICAgICAvL3N0cmluZyAtIHVwZGF0ZSBhbGwgdmFsaWRhdG9ycyBvbiBleHByZXNzaW9uIGNoYW5nZVxyXG4gICAgICAgICAgaWYgKGFuZ3VsYXIuaXNTdHJpbmcod2F0Y2gpKVxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHNjb3BlLiR3YXRjaCh3YXRjaCwgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgYW5ndWxhci5mb3JFYWNoKHZhbGlkYXRvcnMsIGZ1bmN0aW9uKHZhbGlkYXRvckZuKXtcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvckZuKGN0cmwuJG1vZGVsVmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLy9hcnJheSAtIHVwZGF0ZSBhbGwgdmFsaWRhdG9ycyBvbiBjaGFuZ2Ugb2YgYW55IGV4cHJlc3Npb25cclxuICAgICAgICAgIGlmIChhbmd1bGFyLmlzQXJyYXkod2F0Y2gpKVxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGFuZ3VsYXIuZm9yRWFjaCh3YXRjaCwgZnVuY3Rpb24oZXhwcmVzc2lvbil7XHJcbiAgICAgICAgICAgICAgICAgIHNjb3BlLiR3YXRjaChleHByZXNzaW9uLCBmdW5jdGlvbigpXHJcbiAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGFuZ3VsYXIuZm9yRWFjaCh2YWxpZGF0b3JzLCBmdW5jdGlvbih2YWxpZGF0b3JGbil7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yRm4oY3RybC4kbW9kZWxWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC8vb2JqZWN0IC0gdXBkYXRlIGFwcHJvcHJpYXRlIHZhbGlkYXRvclxyXG4gICAgICAgICAgaWYgKGFuZ3VsYXIuaXNPYmplY3Qod2F0Y2gpKVxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGFuZ3VsYXIuZm9yRWFjaCh3YXRjaCwgZnVuY3Rpb24oZXhwcmVzc2lvbiwgdmFsaWRhdG9yS2V5KVxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgLy92YWx1ZSBpcyBzdHJpbmcgLSBsb29rIGFmdGVyIG9uZSBleHByZXNzaW9uXHJcbiAgICAgICAgICAgICAgICAgIGlmIChhbmd1bGFyLmlzU3RyaW5nKGV4cHJlc3Npb24pKVxyXG4gICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzY29wZS4kd2F0Y2goZXhwcmVzc2lvbiwgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3JzW3ZhbGlkYXRvcktleV0oY3RybC4kbW9kZWxWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgLy92YWx1ZSBpcyBhcnJheSAtIGxvb2sgYWZ0ZXIgYWxsIGV4cHJlc3Npb25zIGluIGFycmF5XHJcbiAgICAgICAgICAgICAgICAgIGlmIChhbmd1bGFyLmlzQXJyYXkoZXhwcmVzc2lvbikpXHJcbiAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGFuZ3VsYXIuZm9yRWFjaChleHByZXNzaW9uLCBmdW5jdGlvbihpbnRFeHByZXNzaW9uKVxyXG4gICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlLiR3YXRjaChpbnRFeHByZXNzaW9uLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3JzW3ZhbGlkYXRvcktleV0oY3RybC4kbW9kZWxWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC8vIFN1cHBvcnQgZm9yIHVpLXZhbGlkYXRlLXdhdGNoXHJcbiAgICAgIGlmIChhdHRycy51aVZhbGlkYXRlV2F0Y2gpe1xyXG4gICAgICAgICAgYXBwbHlfd2F0Y2goIHNjb3BlLiRldmFsKGF0dHJzLnVpVmFsaWRhdGVXYXRjaCkgKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnY29tbW9uU2VydmljZScpLlxyXG4gICAgc2VydmljZSgnZW51bVNlcnZpY2UnLCBbZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIFwicmVxdWVzdF9zdFwiOiB7XHJcbiAgICAgICAgICAgICAgICBcIjFcIjogXCLnlLPor7fljZXlt7Lmj5DkuqRcIixcclxuICAgICAgICAgICAgICAgIFwiMlwiOiBcIueUs+ivt+WNleW3suaLkue7nVwiLFxyXG4gICAgICAgICAgICAgICAgXCIzXCI6IFwi55Sz6K+35Y2V5bey5o6l5pS2XCIsXHJcbiAgICAgICAgICAgICAgICBcIjRcIjogXCLkuK3lv4PmoLfmnKzlt7LmjqXmlLZcIixcclxuICAgICAgICAgICAgICAgIFwiNVwiOiBcIuajgOmqjOS4rVwiLFxyXG4gICAgICAgICAgICAgICAgXCI2XCI6IFwi5qOA6aqM5bey5a6M5oiQXCIsXHJcbiAgICAgICAgICAgICAgICBcIjdcIjogXCLmo4DpqozmiqXlkYrlt7LlrozmiJBcIixcclxuICAgICAgICAgICAgICAgIFwiOFwiOiBcIuajgOmqjOaKpeWRiuW3suWuoeaguFwiLFxyXG4gICAgICAgICAgICAgICAgXCI5XCI6IFwi5qOA6aqM5oql5ZGK5bey5LiK5Lyg5Lit5b+DXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJsb2dpc3RpY3Nfc3RcIjoge1xyXG4gICAgICAgICAgICAgICAgXCIxXCI6IFwi54mp5rWB5bey5o6l5pS2XCIsXHJcbiAgICAgICAgICAgICAgICBcIjJcIjogXCLmo4DpqozkuK3lv4Plt7LmjqXmlLZcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH1dKTsiLCJcclxudmFyIHZpZXcgPSB7XHJcbiAgICBsb2FkaW5nX2RpYWxvZzogbnVsbCxcclxuICAgIGxvYWRpbmdfbnVtOiAwXHJcbn07XHJcblxyXG4vLyBkaWFsb2dcclxudmlldy5kaWFsb2cgPSBmdW5jdGlvbiAob3B0KSB7XHJcbiAgICB2YXIgdGl0bGUgPSBvcHQudGl0bGUgfHwgVChcImRpYWxvZy5ESUFMT0dcIiksXHJcbiAgICAgICAgY29udGVudCA9IG9wdC5jb250ZW50IHx8IFwiXCIsXHJcbiAgICAgICAgb2tfYnRuID0gb3B0Lm9rX2J0bixcclxuICAgICAgICBjYW5jZWxfYnRuID0gb3B0LmNhbmNlbF9idG4sXHJcbiAgICAgICAgY2xvc2VfYnRuID0gb3B0LmNsb3NlX2J0bixcclxuICAgICAgICBva19mbiA9IG9wdC5va19mbiB8fCBudWxsLFxyXG4gICAgICAgIGNhbmNlbF9mbiA9IG9wdC5jYW5jZWxfZm4gfHwgbnVsbCxcclxuICAgICAgICBwcmVfZm4gPSBvcHQucHJlX2ZuIHx8IG51bGwsXHJcbiAgICAgICAgZGlhbG9nID0gbnVsbCxcclxuICAgICAgICBkaWFsb2dfaHRtbCA9ICc8ZGl2IGNsYXNzPVwibW9kYWwgZmFkZVwiPlxcXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1kaWFsb2dcIj5cXFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudFwiPlxcXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIj5cXFxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIj48c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPjwvYnV0dG9uPlxcXHJcbiAgICAgICAgPGg0IGNsYXNzPVwibW9kYWwtdGl0bGVcIj4nICsgdGl0bGUgKyAnPC9oND5cXFxyXG4gICAgICAgICAgICA8L2Rpdj5cXFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtYm9keVwiPicgKyBjb250ZW50ICsgJzwvZGl2PlxcXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1mb290ZXJcIj4nO1xyXG5cclxuICAgIGlmIChjYW5jZWxfYnRuKSB7XHJcbiAgICAgICAgZGlhbG9nX2h0bWwgKz0gJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGRpYWxvZ19idG4gY2FuY2VsXCI+JyArIFQoXCJidXR0b24uQ0FOQ0VMXCIpICsgJzwvYnV0dG9uPic7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG9rX2J0bikge1xyXG4gICAgICAgIGRpYWxvZ19odG1sICs9ICc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBkaWFsb2dfYnRuIG9rXCI+JyArIFQoXCJidXR0b24uT0tcIikgKyAnPC9idXR0b24+JztcclxuICAgIH1cclxuXHJcbiAgICBpZiAoY2xvc2VfYnRuKSB7XHJcbiAgICAgICAgZGlhbG9nX2h0bWwgKz0gJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGRpYWxvZ19idG4gb2tcIj4nICsgVChcImJ1dHRvbi5DTE9TRVwiKSArICc8L2J1dHRvbj4nO1xyXG4gICAgfVxyXG5cclxuICAgIGRpYWxvZ19odG1sICs9ICc8L2Rpdj48L2Rpdj48L2Rpdj48L2Rpdj4nO1xyXG5cclxuICAgIGRpYWxvZyA9ICQoZGlhbG9nX2h0bWwpO1xyXG5cclxuICAgIGRpYWxvZ1xyXG4gICAgICAgIC5vbignc2hvdy5icy5tb2RhbCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGlmIChvcHQud2lkdGgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBjc3MgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ3dpZHRoJzogb3B0LndpZHRoICsgJ3B4J1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICQodGhpcykuY2hpbGRyZW4oXCIubW9kYWwtZGlhbG9nXCIpLmNzcyhjc3MpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHByZV9mbiAmJiBwcmVfZm4oJCh0aGlzKSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAub24oXCJzaG93bi5icy5tb2RhbFwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLm9uKFwiaGlkZS5icy5tb2RhbFwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLm9uKFwiaGlkZGVuLmJzLm1vZGFsXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGRpYWxvZy5yZW1vdmUoKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5vbihcImNsaWNrXCIsIFwiLmRpYWxvZ19idG5cIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcyhcIm9rXCIpKSB7XHJcbiAgICAgICAgICAgICAgICBva19mbiAmJiBva19mbigpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcyhcImNhbmNlbFwiKSkge1xyXG4gICAgICAgICAgICAgICAgY2FuY2VsX2ZuICYmIGNhbmNlbF9mbigpO1xyXG4gICAgICAgICAgICAgICAgZGlhbG9nLm1vZGFsKFwiaGlkZVwiKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCFvcHQucHJldmVudF9hdXRvX2hpZGUgfHwgb3B0LnByZXZlbnRfYXV0b19oaWRlID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICBkaWFsb2cubW9kYWwoXCJoaWRlXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAub24oJ3Nob3duJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBwcmVfZm4gJiYgcHJlX2ZuKCQodGhpcykpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLm1vZGFsKCdzaG93Jyk7XHJcblxyXG4gICAgZGlhbG9nLmNsb3NlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQodGhpcykubW9kYWwoJ2hpZGUnKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIGRpYWxvZztcclxufTtcclxuXHJcbi8vIGxvYWRpbmdcclxudmlldy5sb2FkaW5nID0gZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKHZpZXcubG9hZGluZ19kaWFsb2cgPT0gbnVsbCkge1xyXG4gICAgICAgIHZhciBvcHQgPSB7XHJcbiAgICAgICAgICAgIHRpdGxlOiBUKFwiZGlhbG9nLkFMRVJUXCIpLFxyXG4gICAgICAgICAgICBjb250ZW50OiBcIjxpbWcgc3JjPSdpbWcvbG9hZGluZy5naWYnLz4gPHNwYW4gc3R5bGU9J2ZvbnQtc2l6ZTogMThweDsnPlwiICsgVChcImRpYWxvZy5MT0FESU5HXCIpICsgXCI8L3NwYW4+XCIsXHJcbiAgICAgICAgICAgIG9rX2J0bjogZmFsc2UsXHJcbiAgICAgICAgICAgIGNhbmNlbF9idG46IGZhbHNlXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdmlldy5sb2FkaW5nX2RpYWxvZyA9IHZpZXcuZGlhbG9nKG9wdCk7XHJcbiAgICB9XHJcblxyXG4gICAgdmlldy5sb2FkaW5nX251bSsrO1xyXG59O1xyXG5cclxuLy8g5YWz6ZetbG9hZGluZ1xyXG52aWV3LmNsb3NlX2xvYWRpbmcgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2aWV3LmxvYWRpbmdfbnVtLS07XHJcblxyXG4gICAgaWYgKHZpZXcubG9hZGluZ19kaWFsb2cgIT0gbnVsbCAmJiB2aWV3LmxvYWRpbmdfbnVtID09IDApIHtcclxuICAgICAgICB2aWV3LmxvYWRpbmdfZGlhbG9nLmNsb3NlKCk7XHJcbiAgICAgICAgdmlldy5sb2FkaW5nX2RpYWxvZyA9IG51bGw7XHJcbiAgICB9XHJcbn07XHJcblxyXG4vLyBhbGVydFxyXG52aWV3LmFsZXJ0ID0gZnVuY3Rpb24gKG1zZywgb2spIHtcclxuICAgIHZhciBvcHQgPSB7XHJcbiAgICAgICAgdGl0bGU6IFQoXCJkaWFsb2cuQUxFUlRcIiksXHJcbiAgICAgICAgY29udGVudDogXCJcIiArIG1zZyArIFwiXCIsXHJcbiAgICAgICAgY2xvc2VfYnRuOiB0cnVlLFxyXG4gICAgICAgIG9rX2ZuOiBva1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gdmlldy5kaWFsb2cob3B0KTtcclxufTtcclxuXHJcbi8vIHNob3dcclxudmlldy5zaG93ID0gZnVuY3Rpb24gKG1zZywgdGl0bGUsIHdpZHRoLCBvaywgY2FuY2VsKSB7XHJcbiAgICB2YXIgb3B0ID0ge1xyXG4gICAgICAgIHRpdGxlOiBUKFwiZGlhbG9nLkFMRVJUXCIpLFxyXG4gICAgICAgIGNvbnRlbnQ6IFwiPHAgc3R5bGU9J3dvcmQtd3JhcDpicmVhay13b3JkJz5cIiArIG1zZyArIFwiPC9wPlwiLFxyXG4gICAgICAgIGNsb3NlX2J0bjogdHJ1ZSxcclxuICAgICAgICBva19mbjogb2ssXHJcbiAgICAgICAgY2FuY2VsX2ZuOiBjYW5jZWxcclxuICAgIH07XHJcblxyXG4gICAgaWYgKHRpdGxlICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIG9wdC50aXRsZSA9IHRpdGxlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh3aWR0aCAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICBvcHQud2lkdGggPSB3aWR0aDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdmlldy5kaWFsb2cob3B0KTtcclxufTtcclxuXHJcbi8vIGNvbmZpcm1cclxudmlldy5jb25maXJtID0gZnVuY3Rpb24gKGNvbnRlbnQsIG9rLCBjYW5jZWwpIHtcclxuXHJcbiAgICB2YXIgb3B0ID0ge1xyXG4gICAgICAgIHRpdGxlOiBUKFwiZGlhbG9nLkFMRVJUXCIpLFxyXG4gICAgICAgIGNvbnRlbnQ6ICc8c3BhbiBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tZXhjbGFtYXRpb24tc2lnblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiAnICsgY29udGVudCArICc8L3NwYW4+JyxcclxuICAgICAgICBva19idG46IHRydWUsXHJcbiAgICAgICAgY2FuY2VsX2J0bjogdHJ1ZSxcclxuICAgICAgICBva19mbjogb2ssXHJcbiAgICAgICAgY2FuY2VsX2ZuOiBjYW5jZWxcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHZpZXcuZGlhbG9nKG9wdCk7XHJcbn07XHJcblxyXG4vLyBwcm9tcHRcclxudmlldy5wcm9tcHQgPSBmdW5jdGlvbiAodGl0bGUsIGRlZmF1bHRfdmFsLCBvaywgY2FuY2VsKSB7XHJcbiAgICB2YXIgb2tfZm4gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHZhbHVlID0gJChcIiNwcm9tcHRfaW5wdXRcIikudmFsKCk7XHJcbiAgICAgICAgb2sodmFsdWUpO1xyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgY29udGVudCA9ICc8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwicHJvbXB0X2lucHV0XCI+JztcclxuICAgIGlmIChkZWZhdWx0X3ZhbCAhPSBudWxsICYmIGRlZmF1bHRfdmFsICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGNvbnRlbnQgPSAnPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cInByb21wdF9pbnB1dFwiIHZhbHVlPVwiJyArIGRlZmF1bHRfdmFsICsgJ1wiPic7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIG9wdCA9IHtcclxuICAgICAgICB0aXRsZTogdGl0bGUsXHJcbiAgICAgICAgY29udGVudDogY29udGVudCxcclxuICAgICAgICBva19idG46IHRydWUsXHJcbiAgICAgICAgY2FuY2VsX2J0bjogdHJ1ZSxcclxuICAgICAgICBva19mbjogb2tfZm4sXHJcbiAgICAgICAgY2FuY2VsX2ZuOiBjYW5jZWxcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHZpZXcuZGlhbG9nKG9wdCk7XHJcbn07XHJcblxyXG4vLyBwcm9tcHRfdGltZVxyXG52aWV3LnByb21wdF90aW1lID0gZnVuY3Rpb24gKHRpdGxlLCBvaywgY2FuY2VsKSB7XHJcbiAgICB2YXIgb2tfZm4gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHZhbHVlID0gJChcIiNwcm9tcHRfaW5wdXRcIikudmFsKCk7XHJcbiAgICAgICAgb2sodmFsdWUpO1xyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgb3B0ID0ge1xyXG4gICAgICAgIHRpdGxlOiB0aXRsZSxcclxuICAgICAgICBjb250ZW50OiAnPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBkYXRhLWRhdGUtZm9ybWF0PVwieXl5eS1tbS1kZCBoaDppaTpzc1wiIGlkPVwicHJvbXB0X2lucHV0XCI+JyxcclxuICAgICAgICBva19idG46IHRydWUsXHJcbiAgICAgICAgY2FuY2VsX2J0bjogdHJ1ZSxcclxuICAgICAgICBva19mbjogb2tfZm4sXHJcbiAgICAgICAgY2FuY2VsX2ZuOiBjYW5jZWxcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHZpZXcuZGlhbG9nKG9wdCk7XHJcbn07XHJcblxyXG4vLyBwcm9tcHRfdGV4dGFyZWFcclxudmlldy5wcm9tcHRfdGV4dGFyZWEgPSBmdW5jdGlvbiAodGl0bGUsIG9rLCBjYW5jZWwsIHZhbHVlKSB7XHJcbiAgICB2YWx1ZSA9IHZhbHVlIHx8IFwiXCI7XHJcblxyXG4gICAgdmFyIG9rX2ZuID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciB2YWx1ZSA9ICQoXCIjcHJvbXB0X2lucHV0XCIpLnZhbCgpO1xyXG4gICAgICAgIG9rKHZhbHVlKTtcclxuICAgIH07XHJcblxyXG4gICAgdmFyIG9wdCA9IHtcclxuICAgICAgICB0aXRsZTogdGl0bGUsXHJcbiAgICAgICAgY29udGVudDogJzx0ZXh0YXJlYSBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwicHJvbXB0X2lucHV0XCI+JyArIHZhbHVlICsgJzwvdGV4dGFyZWE+JyxcclxuICAgICAgICBva19idG46IHRydWUsXHJcbiAgICAgICAgY2FuY2VsX2J0bjogdHJ1ZSxcclxuICAgICAgICBva19mbjogb2tfZm4sXHJcbiAgICAgICAgY2FuY2VsX2ZuOiBjYW5jZWxcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHZpZXcuZGlhbG9nKG9wdCk7XHJcbn07XHJcblxyXG52YXIgdXRpbHMgPSB7fTtcclxuXHJcbnV0aWxzLmV4cG9ydEV4Y2VsID0gZnVuY3Rpb24gKHBhcmFtcywgdXJsLCBtZXRob2QpIHtcclxuICAgIGlmIChwYXJhbXMpIHtcclxuICAgICAgICAvLyBwYXJhbXMg5pivIHN0cmluZyDmiJbogIUgYXJyYXkvb2JqZWN0XHJcbiAgICAgICAgaWYgKHR5cGVvZiBwYXJhbXMgPT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgcGFyYW1zID0ge307XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHBhcmFtc1snZXhwb3J0J10gPSAxO1xyXG4gICAgICAgIC8vIOaKiuWPguaVsOe7hOijheaIkCBmb3Jt55qEICBpbnB1dFxyXG4gICAgICAgIHZhciBpbnB1dHMgPSBbXTtcclxuICAgICAgICAkLmVhY2gocGFyYW1zLCBmdW5jdGlvbiAoaywgdikge1xyXG4gICAgICAgICAgICBpZiAodiA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpbnB1dHMucHVzaCgnPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiJyArIGsgKyAnXCIgdmFsdWU9XCInICsgdiArICdcIiAvPicpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoZG9jdW1lbnQpLm9mZignc3VibWl0Jyk7XHJcbiAgICAgICAgJCgnPGZvcm0gaWQ9XCJkb3dubG9hZFwiIGFjdGlvbj1cIicgKyAodXJsIHx8ICdpbmRleC5waHAnKSArICdcIiBtZXRob2Q9XCInICsgKG1ldGhvZCB8fCBcInBvc3RcIikgKyAnXCIgdGFyZ2V0PVwiX2JsYW5rXCI+JyArIGlucHV0cy5qb2luKCcnKSArICc8L2Zvcm0+JylcclxuICAgICAgICAgICAgLmFwcGVuZFRvKCdib2R5Jykuc3VibWl0KCkucmVtb3ZlKCk7XHJcbiAgICAgICAgJChkb2N1bWVudCkub24oJ3N1Ym1pdCcsIGZhbHNlKTtcclxuICAgIH1cclxufTtcclxuXHJcbnV0aWxzLmJhc2U2NFRvQmxvYiA9IGZ1bmN0aW9uKGJhc2U2NERhdGEsIGNvbnRlbnRUeXBlKSB7XHJcbiAgICBjb250ZW50VHlwZSA9IGNvbnRlbnRUeXBlIHx8ICcnO1xyXG4gICAgdmFyIHNsaWNlU2l6ZSA9IDEwMjQ7XHJcbiAgICB2YXIgYnl0ZUNoYXJhY3RlcnMgPSBhdG9iKGJhc2U2NERhdGEpO1xyXG4gICAgdmFyIGJ5dGVzTGVuZ3RoID0gYnl0ZUNoYXJhY3RlcnMubGVuZ3RoO1xyXG4gICAgdmFyIHNsaWNlc0NvdW50ID0gTWF0aC5jZWlsKGJ5dGVzTGVuZ3RoIC8gc2xpY2VTaXplKTtcclxuICAgIHZhciBieXRlQXJyYXlzID0gbmV3IEFycmF5KHNsaWNlc0NvdW50KTtcclxuXHJcbiAgICBmb3IgKHZhciBzbGljZUluZGV4ID0gMDsgc2xpY2VJbmRleCA8IHNsaWNlc0NvdW50OyArK3NsaWNlSW5kZXgpIHtcclxuICAgICAgICB2YXIgYmVnaW4gPSBzbGljZUluZGV4ICogc2xpY2VTaXplO1xyXG4gICAgICAgIHZhciBlbmQgPSBNYXRoLm1pbihiZWdpbiArIHNsaWNlU2l6ZSwgYnl0ZXNMZW5ndGgpO1xyXG5cclxuICAgICAgICB2YXIgYnl0ZXMgPSBuZXcgQXJyYXkoZW5kIC0gYmVnaW4pO1xyXG4gICAgICAgIGZvciAodmFyIG9mZnNldCA9IGJlZ2luLCBpID0gMCA7IG9mZnNldCA8IGVuZDsgKytpLCArK29mZnNldCkge1xyXG4gICAgICAgICAgICBieXRlc1tpXSA9IGJ5dGVDaGFyYWN0ZXJzW29mZnNldF0uY2hhckNvZGVBdCgwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnl0ZUFycmF5c1tzbGljZUluZGV4XSA9IG5ldyBVaW50OEFycmF5KGJ5dGVzKTtcclxuICAgIH1cclxuICAgIHJldHVybiBuZXcgQmxvYihieXRlQXJyYXlzLCB7IHR5cGU6IGNvbnRlbnRUeXBlIH0pO1xyXG59O1xyXG5cclxuIiwiLy8gYW5ndWxhci5tb2R1bGUoJ2h0dHBTZXJ2aWNlJywgW10pLlxyXG4vLyAgICAgc2VydmljZSgnbW9ja1NlcnZpY2UnLCBbJyRxJywgJyR0aW1lb3V0JywgJyRodHRwJywgJyRzdGF0ZScsXHJcbi8vICAgICAgICAgZnVuY3Rpb24gKCRxLCAkdGltZW91dCwgJGh0dHAsICRzdGF0ZSkge1xyXG4vLyAgICAgICAgICAgICB0aGlzLmdldCA9IGZ1bmN0aW9uICh1cmwsIHBhcmFtcykge1xyXG4vLyAgICAgICAgICAgICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcclxuLy8gICAgICAgICAgICAgICAgIHVybCA9IFwiL21vY2tfZGF0YS9cIiArIHVybCArIFwiLmpzb25cIjtcclxuLy8gICAgICAgICAgICAgICAgIC8vdmlldy5sb2FkaW5nKCk7XHJcbi8vICAgICAgICAgICAgICAgICAkaHR0cC5nZXQodXJsKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICB2YXIgZCA9IHJlc3VsdC5kYXRhO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIGlmIChkLnN0YXR1cyA9PSAwKSB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoZC5kYXRhKTtcclxuLy8gICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGQuc3RhdHVzKSB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHZpZXcuYWxlcnQocmVzdWx0Lm1zZyk7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8kc3RhdGUuZ28oXCJsb2dpblwiKTtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoZCk7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiAoeCkge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIC8vdmlldy5jbG9zZV9sb2FkaW5nKCk7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KFQoXCJtc2cuc3lzdGVtX2Vycm9yXCIpKTtcclxuLy8gICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuLy8gICAgICAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG4vLyAgICAgICAgICAgICB9O1xyXG4vLyAgICAgICAgIH1dKTtcclxuXHJcblxyXG5hbmd1bGFyLm1vZHVsZSgnaHR0cFNlcnZpY2UnLCBbXSkuXHJcbiAgICBzZXJ2aWNlKCdkYXRhU2VydmljZScsIFsnJGh0dHAnLCAnY29uZmlnJyxcclxuICAgICAgICBmdW5jdGlvbiAoJGh0dHAsIGNvbmZpZykge1xyXG4gICAgICAgICAgICB2YXIgaG9zdCA9IGNvbmZpZy5ob3N0O1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC8vcmVxdWVzdFxyXG4gICAgICAgICAgICAgICAgZ2V0UmVxdWVzdFJlcG9ydEJ5SWQ6IGZ1bmN0aW9uIChpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB1cmwgPSBob3N0ICsgJy9hcGkvbGlzL3JlcXVlc3RzL3JlcG9ydHM/aWQ9JztcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJGh0dHAuZ2V0KHVybCArIGlkKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBnZXRSZXF1ZXN0QnlJZDogZnVuY3Rpb24gKGlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHVybCA9IGhvc3QgKyAnL2FwaS9saXMvcmVxdWVzdGRldGFpbD9pZD0nO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAkaHR0cC5nZXQodXJsICsgaWQpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGdldFJlcXVlc3RMaXN0OiBmdW5jdGlvbiAocXVlcnksIGZyb20sIHRvKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHVybCA9IGhvc3QgKyAnL2FwaS9saXMvcmVxdWVzdHMnO1xyXG4gICAgICAgICAgICAgICAgICAgIHVybCArPSAnP3NlYXJjaD0nICsgKHF1ZXJ5ID8gcXVlcnkgOiAnJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsICs9ICcmZnJvbT0nICsgKGZyb20gPyBmcm9tIDogJycpO1xyXG4gICAgICAgICAgICAgICAgICAgIHVybCArPSAnJnRvPScgKyAodG8gPyB0byA6ICcnKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJGh0dHAuZ2V0KHVybCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYWNjZXB0UmVxdWVzdDogZnVuY3Rpb24gKG9iaikge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB1cmwgPSBob3N0ICsgJy9hcGkvbGlzL3JlcXVlc3RhY2NlcHQnO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAkaHR0cC5wb3N0KHVybCwgb2JqKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICByZWplY3RSZXFldXN0OiBmdW5jdGlvbiAob2JqKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHVybCA9IGhvc3QgKyAnL2FwaS9saXMvcmVxdWVzdHJlZnVzZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICRodHRwLnBvc3QodXJsLCBvYmopO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIC8vbGFiIGl0ZW1cclxuICAgICAgICAgICAgICAgIGdldExhYkl0ZW1CeUlkOiBmdW5jdGlvbiAoaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdXJsID0gaG9zdCArICcvYXBpL3N5c3RlbS9sYWJpdGVtZGV0YWlsP2lkPSc7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICRodHRwLmdldCh1cmwgKyBpZCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZ2V0bGFiaXRlbUxpc3Q6IGZ1bmN0aW9uIChxdWVyeSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB1cmwgPSBob3N0ICsgJy9hcGkvc3lzdGVtL2xhYml0ZW1zP3NlYXJjaD0nO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAkaHR0cC5nZXQodXJsICsgKHF1ZXJ5ID8gcXVlcnkgOiAnJykpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHNhdmVMYWJpdGVtOiBmdW5jdGlvbiAobW9kZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdXJsID0gaG9zdCArICcvYXBpL3N5c3RlbS9sYWJpdGVtcyc7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICRodHRwLnBvc3QodXJsLCBtb2RlbCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZGVsZXRlTGFiSXRlbTogZnVuY3Rpb24gKG9iaikge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB1cmwgPSBob3N0ICsgJy9hcGkvc3lzdGVtL2xhYml0ZW1zJztcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJGh0dHAuZGVsZXRlKHVybCwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImhlYWRlcnNcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBvYmpcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAvL2xhYiBpdGVtIHNldFxyXG4gICAgICAgICAgICAgICAgZ2V0TGFiSXRlbVNldEJ5SWQ6IGZ1bmN0aW9uIChpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB1cmwgPSBob3N0ICsgJy9hcGkvc3lzdGVtL2xhYml0ZW1zZXRkZXRhaWw/aWQ9JztcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJGh0dHAuZ2V0KHVybCArIGlkKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBnZXRMYWJJdGVtU2V0TGlzdDogZnVuY3Rpb24gKHF1ZXJ5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHVybCA9IGhvc3QgKyAnL2FwaS9zeXN0ZW0vbGFiaXRlbXNldHM/c2VhcmNoPSc7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICRodHRwLmdldCh1cmwgKyAocXVlcnkgPyBxdWVyeSA6ICcnKSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgc2F2ZUxhYkl0ZW1TZXQ6IGZ1bmN0aW9uIChtb2RlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB1cmwgPSBob3N0ICsgJy9hcGkvc3lzdGVtL2xhYml0ZW1zZXRzJztcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJGh0dHAucG9zdCh1cmwsIG1vZGVsKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBkZWxldGVMYWJJdGVtU2V0OiBmdW5jdGlvbiAob2JqKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHVybCA9IGhvc3QgKyAnL2FwaS9zeXN0ZW0vbGFiaXRlbXNldHMnO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAkaHR0cC5kZWxldGUodXJsLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaGVhZGVyc1wiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IG9ialxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIC8vbGFiIGNhdGVnb3J5XHJcbiAgICAgICAgICAgICAgICBnZXRMYWJDYXRlZ29yeUJ5SWQ6IGZ1bmN0aW9uIChpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB1cmwgPSBob3N0ICsgJy9hcGkvc3lzdGVtL2xhYmNhdGVnb3J5ZGV0YWlsP2lkPSc7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICRodHRwLmdldCh1cmwgKyBpZCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZ2V0TGFiQ2F0ZWdvcnlMaXN0OiBmdW5jdGlvbiAocXVlcnkpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdXJsID0gaG9zdCArICcvYXBpL3N5c3RlbS9sYWJjYXRlZ29yaWVzP3NlYXJjaD0nO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAkaHR0cC5nZXQodXJsICsgKHF1ZXJ5ID8gcXVlcnkgOiAnJykpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHNhdmVMYWJDYXRlZ29yeTogZnVuY3Rpb24gKG1vZGVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHVybCA9IGhvc3QgKyAnL2FwaS9zeXN0ZW0vbGFiY2F0ZWdvcmllcyc7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICRodHRwLnBvc3QodXJsLCBtb2RlbCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZGVsZXRlTGFiQ2F0ZWdvcnk6IGZ1bmN0aW9uIChvYmopIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdXJsID0gaG9zdCArICcvYXBpL3N5c3RlbS9sYWJjYXRlZ29yaWVzJztcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJGh0dHAuZGVsZXRlKHVybCwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImhlYWRlcnNcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBvYmpcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAvL3FjIHZhbHVlXHJcbiAgICAgICAgICAgICAgICBnZXRRQ1ZhbHVlQnlJZDogZnVuY3Rpb24gKGlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHVybCA9IGhvc3QgKyAnL2FwaS9zeXN0ZW0vcWN2YWx1ZWRldGFpbD9pZD0nO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAkaHR0cC5nZXQodXJsICsgaWQpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGdldFFDVmFsdWVMaXN0OiBmdW5jdGlvbiAocXVlcnkpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdXJsID0gaG9zdCArICcvYXBpL3N5c3RlbS9xY3ZhbHVlcz9zZWFyY2g9JztcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJGh0dHAuZ2V0KHVybCArIChxdWVyeSA/IHF1ZXJ5IDogJycpKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBzYXZlUUNWYWx1ZTogZnVuY3Rpb24gKG1vZGVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHVybCA9IGhvc3QgKyAnL2FwaS9zeXN0ZW0vcWN2YWx1ZXMnO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAkaHR0cC5wb3N0KHVybCwgbW9kZWwpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGRlbGV0ZVFDVmFsdWU6IGZ1bmN0aW9uIChvYmopIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdXJsID0gaG9zdCArICcvYXBpL3N5c3RlbS9xY3ZhbHVlcyc7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICRodHRwLmRlbGV0ZSh1cmwsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJoZWFkZXJzXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogb2JqXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgLy9zYW1wbGUgdHlwZVxyXG4gICAgICAgICAgICAgICAgZ2V0U2FtcGxlVHlwZUJ5SWQ6IGZ1bmN0aW9uIChpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB1cmwgPSBob3N0ICsgJy9hcGkvc3lzdGVtL3NhbXBsZXR5cGVkZXRhaWw/aWQ9JztcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJGh0dHAuZ2V0KHVybCArIGlkKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBnZXRTYW1wbGVUeXBlTGlzdDogZnVuY3Rpb24gKHF1ZXJ5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHVybCA9IGhvc3QgKyAnL2FwaS9zeXN0ZW0vc2FtcGxldHlwZXM/c2VhcmNoPSc7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICRodHRwLmdldCh1cmwgKyAocXVlcnkgPyBxdWVyeSA6ICcnKSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgc2F2ZVNhbXBsZVR5cGU6IGZ1bmN0aW9uIChtb2RlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB1cmwgPSBob3N0ICsgJy9hcGkvc3lzdGVtL3NhbXBsZXR5cGVzJztcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJGh0dHAucG9zdCh1cmwsIG1vZGVsKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBkZWxldGVTYW1wbGVUeXBlOiBmdW5jdGlvbiAob2JqKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHVybCA9IGhvc3QgKyAnL2FwaS9zeXN0ZW0vc2FtcGxldHlwZXMnO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAkaHR0cC5kZWxldGUodXJsLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaGVhZGVyc1wiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IG9ialxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIC8vY3Jpc2lzXHJcbiAgICAgICAgICAgICAgICBnZXRDcmlzaXNCeUlkOiBmdW5jdGlvbiAoaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdXJsID0gaG9zdCArICcvYXBpL3N5c3RlbS9jcmlzaXNkZXRhaWw/aWQ9JztcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJGh0dHAuZ2V0KHVybCArIGlkKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBnZXRDcmlzaXNMaXN0OiBmdW5jdGlvbiAocXVlcnkpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdXJsID0gaG9zdCArICcvYXBpL3N5c3RlbS9jcmlzaXM/c2VhcmNoPSc7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICRodHRwLmdldCh1cmwgKyAocXVlcnkgPyBxdWVyeSA6ICcnKSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgc2F2ZUNyaXNpczogZnVuY3Rpb24gKG1vZGVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHVybCA9IGhvc3QgKyAnL2FwaS9zeXN0ZW0vY3Jpc2lzJztcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJGh0dHAucG9zdCh1cmwsIG1vZGVsKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBkZWxldGVDcmlzaXM6IGZ1bmN0aW9uIChvYmopIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdXJsID0gaG9zdCArICcvYXBpL3N5c3RlbS9jcmlzaXMnO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAkaHR0cC5kZWxldGUodXJsLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaGVhZGVyc1wiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IG9ialxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIC8vdXNlclxyXG4gICAgICAgICAgICAgICAgZ2V0RW1wbG95ZWVCeUlkOiBmdW5jdGlvbiAoaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdXJsID0gaG9zdCArICcvYXBpL3N5c3RlbS91c2VyZGV0YWlsP2lkPSc7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICRodHRwLmdldCh1cmwgKyBpZCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgc2F2ZUVtcGxveWVlOiBmdW5jdGlvbiAobW9kZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdXJsID0gaG9zdCArICcvYXBpL3N5c3RlbS91c2Vycyc7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICRodHRwLnBvc3QodXJsLCBtb2RlbCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZ2V0RW1wbG95ZWVMaXN0OiBmdW5jdGlvbiAocXVlcnkpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdXJsID0gaG9zdCArICcvYXBpL3N5c3RlbS91c2Vycz9zZWFyY2g9JztcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJGh0dHAuZ2V0KHVybCArIChxdWVyeSA/IHF1ZXJ5IDogJycpKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBkZWxldGVFbXBsb3llZTogZnVuY3Rpb24gKG9iaikge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB1cmwgPSBob3N0ICsgJy9hcGkvc3lzdGVtL3VzZXJzJztcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJGh0dHAuZGVsZXRlKHVybCwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImhlYWRlcnNcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBvYmpcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAvL21lZGljYWxcclxuICAgICAgICAgICAgICAgIGdldFNpdGVMaXN0OiBmdW5jdGlvbiAocXVlcnkpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdXJsID0gaG9zdCArICcvYXBpL3N5c3RlbS9tZWRpY2FsaW5zdGl0dXRpb25zP3NlYXJjaD0nO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAkaHR0cC5nZXQodXJsICsgKHF1ZXJ5ID8gcXVlcnkgOiAnJykpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHNhdmVTaXRlOiBmdW5jdGlvbiAobW9kZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdXJsID0gaG9zdCArICcvYXBpL3N5c3RlbS9tZWRpY2FsaW5zdGl0dXRpb25zJztcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJGh0dHAucG9zdCh1cmwsIG1vZGVsKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBnZXRTaXRlQnlJZDogZnVuY3Rpb24gKGlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHVybCA9IGhvc3QgKyAnL2FwaS9zeXN0ZW0vbWVkaWNhbGluc3RpdHV0aW9uZGV0YWlsP2lkPSc7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICRodHRwLmdldCh1cmwgKyBpZCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZGVsZXRlU2l0ZTogZnVuY3Rpb24gKGVudGl0eSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB1cmwgPSBob3N0ICsgJy9hcGkvc3lzdGVtL21lZGljYWxpbnN0aXR1dGlvbnMnO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAkaHR0cC5kZWxldGUodXJsLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaGVhZGVyc1wiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IGVudGl0eVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIC8vIGRlcGFydG1lbnRcclxuICAgICAgICAgICAgICAgIGdldERlcHRCeUlkOiBmdW5jdGlvbiAoaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdXJsID0gaG9zdCArICcvYXBpL3N5c3RlbS9kZXB0ZGV0YWlsP2lkPSc7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICRodHRwLmdldCh1cmwgKyBpZCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZ2V0RGVwdExpc3Q6IGZ1bmN0aW9uIChxdWVyeSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB1cmwgPSBob3N0ICsgJy9hcGkvc3lzdGVtL2RlcHRzP3NlYXJjaD0nO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAkaHR0cC5nZXQodXJsICsgKHF1ZXJ5ID8gcXVlcnkgOiAnJykpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGRlbGV0ZURlcHQ6IGZ1bmN0aW9uIChlbnRpdHkpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdXJsID0gaG9zdCArICcvYXBpL3N5c3RlbS9kZXB0cyc7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICRodHRwLmRlbGV0ZSh1cmwsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJoZWFkZXJzXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogZW50aXR5XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgc2F2ZURlcHQ6IGZ1bmN0aW9uIChtb2RlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB1cmwgPSBob3N0ICsgJy9hcGkvc3lzdGVtL2RlcHRzJztcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJGh0dHAucG9zdCh1cmwsIG1vZGVsKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAvL2xvZ2lzdGljc1xyXG4gICAgICAgICAgICAgICAgZ2V0TG9naUxpc3Q6IGZ1bmN0aW9uIChmcm9tLCB0bykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB1cmwgPSBob3N0ICsgJy9hcGkvbGlzL2xvZ2lzdGljcyc7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsICs9ICc/ZnJvbT0nICsgKGZyb20gPyBmcm9tIDogJycpO1xyXG4gICAgICAgICAgICAgICAgICAgIHVybCArPSAnJnRvPScgKyAodG8gPyB0byA6ICcnKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJGh0dHAuZ2V0KHVybCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgc2VuZExvZ2k6IGZ1bmN0aW9uIChtb2RlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB1cmwgPSBob3N0ICsgJy9hcGkvbGlzL3NlbmRsb2dpc3RpY3MnO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAkaHR0cC5wb3N0KHVybCwgbW9kZWwpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGFjY2VwdExvZ2k6IGZ1bmN0aW9uIChtb2RlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB1cmwgPSBob3N0ICsgJy9hcGkvbGlzL3JlY2VpdmVsb2dpc3RpY3MnO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAkaHR0cC5wb3N0KHVybCwgbW9kZWwpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIC8vbGFicmVzdWx0XHJcbiAgICAgICAgICAgICAgICBzYXZlTGFiUmVzdWx0OiBmdW5jdGlvbiAobW9kZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdXJsID0gaG9zdCArICcvYXBpL3N5c3RlbS9sYWJyZXN1bHRzJztcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJGh0dHAucG9zdCh1cmwsIG1vZGVsKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAvL290aGVyXHJcbiAgICAgICAgICAgICAgICBnZXRTZXhMaXN0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHVybCA9IGhvc3QgKyAnL2FwcC9tb2NrX2RhdGEvc2V4X2xpc3QuanNvbic7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICRodHRwLmdldCh1cmwpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGdldEVudW06IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdXJsID0gaG9zdCArICcvYXBwL2NvbmZpZy9lbnVtLmpzJztcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJGh0dHAuZ2V0KHVybCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZGVsZXRlUGF0aWVudDogZnVuY3Rpb24gKGlkKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGdldFNhbXBsZUxpc3Q6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdXJsID0gaG9zdCArICcvbW9ja19kYXRhL3NhbXBsZV9saXN0Lmpzb24nO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAkaHR0cC5nZXQodXJsKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBzYXZlUGF0aWVudDogZnVuY3Rpb24gKG1vZGVsKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGdldFBhdGllbnRMaXN0OiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XSk7IiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuLyoqXHJcbiAqIDAuMS4xXHJcbiAqIERlZmVycmVkIGxvYWQganMvY3NzIGZpbGUsIHVzZWQgZm9yIHVpLWpxLmpzIGFuZCBMYXp5IExvYWRpbmcuXHJcbiAqIFxyXG4gKiBAIGZsYXRmdWxsLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKiBBdXRob3IgdXJsOiAjdXNlci9mbGF0ZnVsbFxyXG4gKi9cclxuXHJcbmFuZ3VsYXIubW9kdWxlKCd1aS5sb2FkJywgW10pXHJcblx0LnNlcnZpY2UoJ3VpTG9hZCcsIFsnJGRvY3VtZW50JywgJyRxJywgJyR0aW1lb3V0JywgZnVuY3Rpb24gKCRkb2N1bWVudCwgJHEsICR0aW1lb3V0KSB7XHJcblxyXG5cdFx0dmFyIGxvYWRlZCA9IFtdO1xyXG5cdFx0dmFyIHByb21pc2UgPSBmYWxzZTtcclxuXHRcdHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBDaGFpbiBsb2FkcyB0aGUgZ2l2ZW4gc291cmNlc1xyXG5cdFx0ICogQHBhcmFtIHNyY3MgYXJyYXksIHNjcmlwdCBvciBjc3NcclxuXHRcdCAqIEByZXR1cm5zIHsqfSBQcm9taXNlIHRoYXQgd2lsbCBiZSByZXNvbHZlZCBvbmNlIHRoZSBzb3VyY2VzIGhhcyBiZWVuIGxvYWRlZC5cclxuXHRcdCAqL1xyXG5cdFx0dGhpcy5sb2FkID0gZnVuY3Rpb24gKHNyY3MpIHtcclxuXHRcdFx0c3JjcyA9IGFuZ3VsYXIuaXNBcnJheShzcmNzKSA/IHNyY3MgOiBzcmNzLnNwbGl0KC9cXHMrLyk7XHJcblx0XHRcdHZhciBzZWxmID0gdGhpcztcclxuXHRcdFx0aWYoIXByb21pc2Upe1xyXG5cdFx0XHRcdHByb21pc2UgPSBkZWZlcnJlZC5wcm9taXNlO1xyXG5cdFx0XHR9XHJcbiAgICAgIGFuZ3VsYXIuZm9yRWFjaChzcmNzLCBmdW5jdGlvbihzcmMpIHtcclxuICAgICAgXHRwcm9taXNlID0gcHJvbWlzZS50aGVuKCBmdW5jdGlvbigpe1xyXG4gICAgICBcdFx0cmV0dXJuIHNyYy5pbmRleE9mKCcuY3NzJykgPj0wID8gc2VsZi5sb2FkQ1NTKHNyYykgOiBzZWxmLmxvYWRTY3JpcHQoc3JjKTtcclxuICAgICAgXHR9ICk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBkZWZlcnJlZC5yZXNvbHZlKCk7XHJcbiAgICAgIHJldHVybiBwcm9taXNlO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogRHluYW1pY2FsbHkgbG9hZHMgdGhlIGdpdmVuIHNjcmlwdFxyXG5cdFx0ICogQHBhcmFtIHNyYyBUaGUgdXJsIG9mIHRoZSBzY3JpcHQgdG8gbG9hZCBkeW5hbWljYWxseVxyXG5cdFx0ICogQHJldHVybnMgeyp9IFByb21pc2UgdGhhdCB3aWxsIGJlIHJlc29sdmVkIG9uY2UgdGhlIHNjcmlwdCBoYXMgYmVlbiBsb2FkZWQuXHJcblx0XHQgKi9cclxuXHRcdHRoaXMubG9hZFNjcmlwdCA9IGZ1bmN0aW9uIChzcmMpIHtcclxuXHRcdFx0aWYobG9hZGVkW3NyY10pIHJldHVybiBsb2FkZWRbc3JjXS5wcm9taXNlO1xyXG5cclxuXHRcdFx0dmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcclxuXHRcdFx0dmFyIHNjcmlwdCA9ICRkb2N1bWVudFswXS5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcclxuXHRcdFx0c2NyaXB0LnNyYyA9IHNyYztcclxuXHRcdFx0c2NyaXB0Lm9ubG9hZCA9IGZ1bmN0aW9uIChlKSB7XHJcblx0XHRcdFx0JHRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdFx0ZGVmZXJyZWQucmVzb2x2ZShlKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fTtcclxuXHRcdFx0c2NyaXB0Lm9uZXJyb3IgPSBmdW5jdGlvbiAoZSkge1xyXG5cdFx0XHRcdCR0aW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRcdGRlZmVycmVkLnJlamVjdChlKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fTtcclxuXHRcdFx0JGRvY3VtZW50WzBdLmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcclxuXHRcdFx0bG9hZGVkW3NyY10gPSBkZWZlcnJlZDtcclxuXHJcblx0XHRcdHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG5cdFx0fTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIER5bmFtaWNhbGx5IGxvYWRzIHRoZSBnaXZlbiBDU1MgZmlsZVxyXG5cdFx0ICogQHBhcmFtIGhyZWYgVGhlIHVybCBvZiB0aGUgQ1NTIHRvIGxvYWQgZHluYW1pY2FsbHlcclxuXHRcdCAqIEByZXR1cm5zIHsqfSBQcm9taXNlIHRoYXQgd2lsbCBiZSByZXNvbHZlZCBvbmNlIHRoZSBDU1MgZmlsZSBoYXMgYmVlbiBsb2FkZWQuXHJcblx0XHQgKi9cclxuXHRcdHRoaXMubG9hZENTUyA9IGZ1bmN0aW9uIChocmVmKSB7XHJcblx0XHRcdGlmKGxvYWRlZFtocmVmXSkgcmV0dXJuIGxvYWRlZFtocmVmXS5wcm9taXNlO1xyXG5cclxuXHRcdFx0dmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcclxuXHRcdFx0dmFyIHN0eWxlID0gJGRvY3VtZW50WzBdLmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcclxuXHRcdFx0c3R5bGUucmVsID0gJ3N0eWxlc2hlZXQnO1xyXG5cdFx0XHRzdHlsZS50eXBlID0gJ3RleHQvY3NzJztcclxuXHRcdFx0c3R5bGUuaHJlZiA9IGhyZWY7XHJcblx0XHRcdHN0eWxlLm9ubG9hZCA9IGZ1bmN0aW9uIChlKSB7XHJcblx0XHRcdFx0JHRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdFx0ZGVmZXJyZWQucmVzb2x2ZShlKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fTtcclxuXHRcdFx0c3R5bGUub25lcnJvciA9IGZ1bmN0aW9uIChlKSB7XHJcblx0XHRcdFx0JHRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdFx0ZGVmZXJyZWQucmVqZWN0KGUpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9O1xyXG5cdFx0XHQkZG9jdW1lbnRbMF0uaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XHJcblx0XHRcdGxvYWRlZFtocmVmXSA9IGRlZmVycmVkO1xyXG5cclxuXHRcdFx0cmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcblx0XHR9O1xyXG59XSk7IiwiYW5ndWxhci5tb2R1bGUoJ2NvbW1vblNlcnZpY2UnKS5cclxuICAgIHNlcnZpY2UoJ3V0aWwnLCBbJ2VudW1TZXJ2aWNlJywgZnVuY3Rpb24gKGVudW1TZXJiaWNlKSB7XHJcbiAgICAgICAgdmFyIGVudW1NYXAgPSBlbnVtU2VyYmljZTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBmb3JtYXRlRGF0ZTogZnVuY3Rpb24gKGRhdGUpIHtcclxuICAgICAgICAgICAgICAgIGlmKCFkYXRlKXtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZCA9IG5ldyBEYXRlKGRhdGUpLFxyXG4gICAgICAgICAgICAgICAgICAgIG1vbnRoID0gJycgKyAoZC5nZXRNb250aCgpICsgMSksXHJcbiAgICAgICAgICAgICAgICAgICAgZGF5ID0gJycgKyBkLmdldERhdGUoKSxcclxuICAgICAgICAgICAgICAgICAgICB5ZWFyID0gZC5nZXRGdWxsWWVhcigpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChtb250aC5sZW5ndGggPCAyKSBtb250aCA9ICcwJyArIG1vbnRoO1xyXG4gICAgICAgICAgICAgICAgaWYgKGRheS5sZW5ndGggPCAyKSBkYXkgPSAnMCcgKyBkYXk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFt5ZWFyLCBtb250aCwgZGF5XS5qb2luKCctJyk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGdldFJlcXVlc3RTdGF0dXM6IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGVudW1NYXBbJ3JlcXVlc3Rfc3QnXVt2YWx1ZV07XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGdldExvZ2lzdGljc1N0YXR1czogZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZW51bU1hcFsnbG9naXN0aWNzX3N0J11bdmFsdWVdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH1dKTsiLCJhbmd1bGFyLm1vZHVsZSgndWlEaXJlY3QnKVxyXG4gICAgLmRpcmVjdGl2ZSgndWlJbnB1dCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICByZXN0cmljdDogJ0UnLFxyXG4gICAgICAgICAgICBzY29wZToge1xyXG4gICAgICAgICAgICAgICAgdmFsOiAnPSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcmVwbGFjZTogdHJ1ZSxcclxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvZGlyZWN0aXZlcy93aWRnZXQvaW5wdXQvaW5wdXQuaHRtbCcsXHJcbiAgICAgICAgICAgIGxpbms6ZnVuY3Rpb24oJHNjb3BlLCBlbGVtLCBhdHRyLCBjdHJsKXtcclxuXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6IGZ1bmN0aW9uICgkc2NvcGUsICRlbGVtZW50LCAkYXR0cnMpIHtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfSk7XHJcblxyXG4iXX0=
