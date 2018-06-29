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
    ['$controllerProvider', '$compileProvider', '$filterProvider', '$provide','$httpProvider','$cookiesProvider',
      function ($controllerProvider, $compileProvider, $filterProvider, $provide,$httpProvider,$cookiesProvider) {
          $httpProvider.defaults.withCredentials = true;
          $cookiesProvider.defaults = $cookiesProvider.defaults || {};
          $cookiesProvider.defaults.path = "/";
        // lazy controller, directive and service
        app.controller = $controllerProvider.register;
        app.directive = $compileProvider.directive;
        app.filter = $filterProvider.register;
        app.factory = $provide.factory;
        app.service = $provide.service;
        app.constant = $provide.constant;
        app.value = $provide.value;
      }
    ]).config(['$translateProvider', '$httpProvider', '$cookiesProvider', function ($translateProvider, $httpProvider, $cookiesProvider) {
      $translateProvider.useStaticFilesLoader({
        prefix: 'i18n/',
        suffix: '.js'
      });
      $translateProvider.preferredLanguage('zh_cn');
      $translateProvider.useLocalStorage();
      $httpProvider.defaults.withCredentials = true;
      $cookiesProvider.defaults = $cookiesProvider.defaults || {};
      $cookiesProvider.defaults.path = "/";
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
  host: location.origin
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

                $urlRouterProvider.otherwise('/login');

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
                        controller: 'RequestListCtrl',
                        onEnter: function(){

                        }
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
                    .state('mobi_labresult_print', {
                        url: '/mobi_labresult',
                        params: {
                            data: null,
                            type: null
                        },
                        templateUrl: 'tpl/labresult/mobi_labresult_print.html',
                        controller: 'MobiLabresultPrintCtrl'
                    })

            }
        ]
    );
'use strict';

/* Controllers */

angular.module('app')
  .controller('AppCtrl', ['$scope', '$translate', '$localStorage', '$window', '$state', 'storage',
    function ($scope, $translate, $localStorage, $window, $state, storage) {
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
        },
        user: {}
      };

      $scope.isAdmin = function () {
        var user = localStorage.curUser;
        if (user) {
          return storage.isAdmin(JSON.parse(user));
        }
        return false;
      };

      var user = storage.getUser();
      if (user) {
        $scope.app.user = user;
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

      $scope.adminList = ['app.crisis', 'app.crisis_detail', 'app.depart', 'app.depart_detail', 'app.employee', 'app.employee_detail', 'app.medical', 'app.medical_detail', 'app.labitem', 'app.labitem_detail', 'app.category', 'app.category_detail', 'app.sampletype', 'app.sampletype_detail', 'app.qcvalue', 'app.qcvalue_detail', 'app.labitemset', 'app.labitemset_detail',];
      $scope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
        if (toState.name == 'login') {
          return;
        }
        if (toState.name != 'mobi_labresult_print' && !storage.isLogin()) {
          $state.go('login');
        }
        for (var i = 0; i < $scope.adminList.length; i++) {
          if ($scope.adminList[i] == toState.name && !storage.isAdmin()) {
            event.preventDefault();
            break;
          }
        }
      });

      //top level scope
      //fix me
      //$scope.filter_tip = T('list.filter_tip');
      $scope.filter_tip = '输入搜索关键字';


      $scope.logout = function () {
        storage.logout();
        $state.go('login');
      }

      storage.callback = function (user, isAdmin) {
        if (user) {
          $scope.app.user = user;
          $scope.app.isAdmin = isAdmin;
        }
      };

    }]);
app.controller('AnalyzeCtrl', ['$scope', '$modal', '$state', 'dataService', 'util', function ($scope, $modal, $state, dataService, util) {


    $scope.search = function () {
        var id = null,typeId=null;
        if ($scope.model.selectedSite) {
            id = $scope.model.selectedSite.id;
        }
        if ($scope.model.selectedSampleType) {
            typeId = $scope.model.selectedSampleType.id;
        }
        dataService.getAnalysis(util.formateDate($scope.model.startTime), util.formateDate($scope.model.endTime), id, typeId).then(function (result) {
            $scope.model.resultList = result.data;
        });
    };

    $scope.model = {
        selectedSite: null,
        selectedSampleType: null,
        startTime: new Date(),
        endTime: new Date(),
        resultList: []
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

    $scope.siteList = null;
    $scope.sampleTypeList = null;

    dataService.getSiteList().then(function (result) {
        $scope.siteList = result.data;
    });

    dataService.getSampleTypeList().then(function (result) {
        $scope.sampleTypeList = result.data;
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
        selectedDept: null,
        visitMis: []
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

            if ($scope.siteList && $scope.model.visitMis) {
                var list = [];
                $scope.model.visitMis.forEach(function (item) {
                    $scope.siteList.forEach(function (lab) {
                        if (item.miId == lab.id) {
                            list.push(lab);
                        }
                    });
                });
                $scope.model.visitMis = list;
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
        $scope.model.visitMis = $scope.model.visitMis || [];
        angular.forEach($scope.model.visitMis, function (item) {
            item.miId = item.id;
        });
        dataService.saveEmployee($scope.model).then(function () {
            $state.go('app.employee');
        });
    };

    $scope.selectAllOrg = function () {
        $scope.model.visitMis = [];
        angular.forEach($scope.siteList, function (item) {
            $scope.model.visitMis.push(item);
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
                field: 'categoryName',
                displayName: '检验分类'
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
            ['itemCode', 'itemName', 'categoryName', 'resultType'].forEach(function (field) {
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
app.controller('LabresultListCtrl', ['$scope', '$state', 'dataService', 'util', '$location', function ($scope, $state, dataService, util, $location) {
    var editUrl = '<a class="edit-tpl" ui-sref="labresult_print({id: row.entity.id})">查看</a>'

    $scope.gridOptions = {
        enableFiltering: false,
        onRegisterApi: function (gridApi) {
            $scope.gridApi = gridApi;
            // $scope.gridApi.grid.registerRowsProcessor($scope.filter, 200);
        },
        columnDefs: [
            {
                field: 'id',
                visible: false
            },
            {
                field: 'patientName',
                displayName: '病人名字'
            },
            {
                field: 'miName',
                displayName: '送检机构'
            },
            {
                field: 'dept',
                displayName: '科室'
            },
            {
                field: 'inspector',
                displayName: '审核者'
            },
            {
                field: 'formatedCreateTime',
                displayName: '创建时间'
            },
            {
                field: 'status',
                displayName: '检验状态'
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
        patientNo: null,
        reqNo: null,
        reqTime: null,
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
        var miId = null;
        if ($scope.model.selectedSite) {
            miId = $scope.model.selectedSite.id;
        }
        dataService.getReports($scope.filterValue, miId, $scope.model.reqTime, $scope.model.patientNo, $scope.model.reqNo).then(function (result) {
            result.data.forEach(function (item) {
                item.formatedCreateTime = util.formateDate(item.createTime);
            });
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

    $scope.filter = function (renderableRows) {
        var matcher = new RegExp($scope.filterValue);
        renderableRows.forEach(function (row) {
            var match = false;
            ['requestNo', 'patient.ptName', 'miName'].forEach(function (field) {
                var entity = row.entity;
                field.split('.').forEach(function (f) {
                    if (entity[f]) {
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
                        if (!item.labResult) {
                            item.labResult = {};
                        }
                    });
                }
            });
        }
    });

    $scope.submit = function () {
        dataService.saveLabResult($scope.model.labInfos).then(function () {
            $state.go('app.labresult');
        });
    };
}]);

app.controller('LabresultPrintCtrl', ['$scope', '$state', '$stateParams', 'dataService', 'util', '$location', function ($scope, $state, $stateParams, dataService, util, $location) {
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
}]);


app.controller('MobiLabresultPrintCtrl', ['$scope', '$state', '$stateParams', 'dataService', 'util', '$location', function ($scope, $state, $stateParams, dataService, util, $location) {
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
            ['miName', 'instrumentName', 'labItemName'].forEach(function (field) {
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
    $scope.filterUserList = null;

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
                if($scope.model.selectedSite){
                    $scope.filterUserList = $scope.userList.filter(function (item) {
                        return item.miName == $scope.model.selectedSite.miName;
                    });
                }
                $scope.filterUserList.forEach(function (item) {
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
        dataService.getEmployeeList().then(function(result){
            $scope.userList = result.data;
        });
    }

    $scope.selectSite = function (model) {
        $scope.filterUserList = $scope.userList.filter(function (item) {
            return item.miName == model.miName;
        });
        $scope.model.selectedQcer = null;
    };

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
        var miId = null;
        if ($scope.model.selectedSite) {
            miId = $scope.model.selectedSite.id;
        }
        dataService.getRequestList($scope.model.filterValue, util.formateDate($scope.model.startTime), util.formateDate($scope.model.endTime), miId).then(function (result) {
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

                if ($scope.model.labInfos) {
                    $scope.model.labInfos.forEach(function (item) {
                        if (item.labSample) {
                            if (item.labSample.logistics) {
                                item.labSample.logistics.lsStatusName = util.getLogisticsStatus(item.labSample.logistics.lsStatus);
                                item.labSample.logistics.sendTimeFormate = util.formateDate(item.labSample.logistics.sendTime);
                                item.labSample.logistics.centerReceiveTimeFormate = util.formateDate(item.labSample.logistics.centerReceiveTime);
                                item.labSample.logistics.lsReceiveTimeFormate = util.formateDate(item.labSample.logistics.lsReceiveTime);
                            }
                        }
                    });
                }
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
app.controller('UserCtrl', ['$scope', '$modal', '$state', 'dataService', 'util', 'storage', function ($scope, $modal, $state, dataService, util, storage) {

    $scope.model = {
        userName: null,
        password: null,
        errMessage: null,
        old_password: null,
        new_password: null
    };

    $scope.login = function () {
        if ($scope.model.userName && $scope.model.password) {
            dataService.login($scope.model.userName, $scope.model.password).then(function (result) {
                if (result.data && result.data.token) {
                    storage.setTokenAndUser(result.data.token, result.data.user);
                    $state.go('app.request');
                } else if (result.data) {
                    $scope.model.errMessage = result.data.message;
                }
            });
        }
    };

    $scope.changepwd = function () {
        var user = storage.getUser();
        dataService.changepwd(user.id, $scope.model.old_password, $scope.model.new_password).then(function (data) {
            $state.go('app.request');
        });
    }

    if (sessionStorage.autologin) {
        $scope.autologin = true;
        $scope.model.userName = sessionStorage.getItem('userName');
        $scope.model.password = sessionStorage.getItem('password');
        sessionStorage.removeItem('userName');
        sessionStorage.removeItem('password');
        sessionStorage.removeItem('autologin');
        $scope.login();
    }
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
                getRequestList: function (query, from, to, miId) {
                    var url = host + '/api/lis/requests';
                    url += '?search=' + (query ? query : '');
                    url += '&from=' + (from ? from : '');
                    url += '&to=' + (to ? to : '');
                    url += '&miId=' + (miId ? miId : '');
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
                //report
                getReports: function (query, mi, reqDate, patientId, requestNo) {
                    var url = host + '/api/lis/reports';
                    url += '?search=' + (query ? query : '');
                    url += '&miInfo=' + (mi ? mi : '');
                    url += '&reqDate=' + (reqDate ? reqDate : '');
                    url += '&patientId=' + (patientId ? patientId : '');
                    url += '&requestNo=' + (requestNo ? requestNo : '');
                    return $http.get(url);
                },
                getReportById: function (id) {
                    var url = host + '/api/lis/reportsdetail?id=';
                    return $http.get(url + id);
                },
                //analysis
                getAnalysis: function (from, to, mi, type) {
                    var url = host + '/api/lis/samplereport';
                    url += '?from=' + (from ? from : '');
                    url += '&to=' + (to ? to : '');
                    url += '&mi=' + (mi ? mi : '');
                    url += '&sampleType=' + (type ? type : '');
                    return $http.get(url);
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
                //login
                login: function (username, password) {
                    var url = host + '/api/system/login';
                    return $http.post(url, {
                        code: username,
                        password: password
                    });
                },
                changepwd: function (id, srcpwd, newpwd) {
                    var url = host + '/api/system/changepwd';
                    url += '?userId=' + (id ? id : '');
                    url += '&srcPwd=' + (srcpwd ? srcpwd : '');
                    url += '&newPwd=' + (newpwd ? newpwd : '');
                    return $http.get(url);
                }

            };
        }]);
angular.module('commonService').
    service('storage', ['$localStorage','$cookies','$cookieStore', function ($localStorage,$cookies,$cookieStore) {

        return {
            callback: null,
            setTokenAndUser: function (token, user) {
                // $localStorage.token = token;
                // $localStorage.user = user;
                //$cookies.token =  token;
                //$cookies.user = JSON.stringify(user); 
                $.cookie('token', token, { path: '/' });
                $.cookie('user', JSON.stringify(user), { path: '/' });
                localStorage.curUser = JSON.stringify(user);
                var isAdmin = user && user.emCode && user.emCode.toLowerCase() === 'admin';
                if (this.callback) {
                    this.callback(user, isAdmin);
                }
            },
            logout: function () {
                // $localStorage.token = null;
                // $localStorage.user = null;
                delete $cookies['token'];
                delete $cookies['user'];
                localStorage.removeItem('curUser');
            },
            getUser: function () {
                //return $localStorage.user;
                if (!$cookies.user) {
                    return null;
                }
                return JSON.parse($cookies.user);
            },
            isLogin: function () {
                if ($cookies.token) {
                    return true;
                } else {
                    return false;
                }
            },
            isAdmin: function (u) {
                var user = u || JSON.parse($cookies.user || '{}');
                var isAdmin = user && user.emCode && user.emCode.toLowerCase() === 'admin';
                return isAdmin;
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


//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsImNvbmZpZy5qcyIsImNvbmZpZy5sYXp5bG9hZC5qcyIsImNvbmZpZy5yb3V0ZXIuanMiLCJtYWluLmpzIiwiY29udHJvbGxlcnMvYW5hbHl6ZUN0cmwuanMiLCJjb250cm9sbGVycy9jYXRlZ29yeUN0cmwuanMiLCJjb250cm9sbGVycy9jcmlzaXNDdHJsLmpzIiwiY29udHJvbGxlcnMvZGVwYXRDdHJsLmpzIiwiY29udHJvbGxlcnMvZW1wbG95ZWVDdHJsLmpzIiwiY29udHJvbGxlcnMvbGFiSXRlbUN0cmwuanMiLCJjb250cm9sbGVycy9sYWJJdGVtU2V0Q3RybC5qcyIsImNvbnRyb2xsZXJzL2xhYnJlc3VsdEN0cmwuanMiLCJjb250cm9sbGVycy9sb2dpc3RpY3NDdHJsLmpzIiwiY29udHJvbGxlcnMvbWVkaWNhbEN0cmwuanMiLCJjb250cm9sbGVycy9wYXRpZW50Q3RybC5qcyIsImNvbnRyb2xsZXJzL3FjdmFsdWVDdHJsLmpzIiwiY29udHJvbGxlcnMvcmVxdWVzdEN0cmwuanMiLCJjb250cm9sbGVycy9zYW1wbGVUeXBlQ3RybC5qcyIsImNvbnRyb2xsZXJzL3VzZXJDdHJsLmpzIiwiZGlyZWN0aXZlcy9zZXRuZ2FuaW1hdGUuanMiLCJkaXJlY3RpdmVzL3VpLWJ1dHRlcmJhci5qcyIsImRpcmVjdGl2ZXMvdWktZm9jdXMuanMiLCJkaXJlY3RpdmVzL3VpLWZ1bGxzY3JlZW4uanMiLCJkaXJlY3RpdmVzL3VpLWpxLmpzIiwiZGlyZWN0aXZlcy91aS1tb2R1bGUuanMiLCJkaXJlY3RpdmVzL3VpLW5hdi5qcyIsImRpcmVjdGl2ZXMvdWktc2Nyb2xsLmpzIiwiZGlyZWN0aXZlcy91aS1zaGlmdC5qcyIsImRpcmVjdGl2ZXMvdWktdG9nZ2xlY2xhc3MuanMiLCJkaXJlY3RpdmVzL3VpLXZhbGlkYXRlLmpzIiwic2VydmljZXMvZW51bVNlcnZpY2UuanMiLCJzZXJ2aWNlcy9nbG9iYWwuanMiLCJzZXJ2aWNlcy9odHRwU2VydmljZS5qcyIsInNlcnZpY2VzL3N0b3JhZ2UuanMiLCJzZXJ2aWNlcy91aS1sb2FkLmpzIiwic2VydmljZXMvdXRpbC5qcyIsImRpcmVjdGl2ZXMvd2lkZ2V0L2lucHV0L2lucHV0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDL0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNyUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2pHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDcERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbklBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3pJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdk1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNqSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzVIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMvT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQy9OQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNwS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2pHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3hOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDek5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDL0dBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDckZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNwRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDekNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdkhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDN1FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM5VUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM3Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDNUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhbGwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG5cclxuYW5ndWxhci5tb2R1bGUoJ2FwcCcsIFtcclxuICAgICduZ0FuaW1hdGUnLFxyXG4gICAgJ25nQ29va2llcycsXHJcbiAgICAnbmdSZXNvdXJjZScsXHJcbiAgICAnbmdTYW5pdGl6ZScsXHJcbiAgICAnbmdUb3VjaCcsXHJcbiAgICAnbmdTdG9yYWdlJyxcclxuICAgICd1aS5yb3V0ZXInLFxyXG4gICAgJ3VpLmJvb3RzdHJhcCcsXHJcbiAgICAndWkubG9hZCcsXHJcbiAgICAndWkuanEnLFxyXG4gICAgJ3VpLnZhbGlkYXRlJyxcclxuICAgICdvYy5sYXp5TG9hZCcsXHJcbiAgICAncGFzY2FscHJlY2h0LnRyYW5zbGF0ZScsXHJcbiAgICAndG9hc3RlcicsXHJcbiAgICAndWkuZ3JpZCcsXHJcbiAgICAndWkuZ3JpZC5lZGl0JyxcclxuICAgICd1aS5ncmlkLnNlbGVjdGlvbicsXHJcbiAgICAndWkuc2VsZWN0JyxcclxuICAgIC8vY3VzdG9tXHJcbiAgICAnaHR0cFNlcnZpY2UnLFxyXG4gICAgJ2NvbW1vblNlcnZpY2UnLFxyXG4gICAgJ3VpRGlyZWN0J1xyXG5dKTtcclxuXHJcbmFuZ3VsYXIubW9kdWxlKCd1aURpcmVjdCcsW10pO1xyXG5cclxuYW5ndWxhci5tb2R1bGUoJ2NvbW1vblNlcnZpY2UnLFtdKTtcclxuIiwiLy8gY29uZmlnXG5cbnZhciBhcHAgPVxuICBhbmd1bGFyLm1vZHVsZSgnYXBwJykuY29uZmlnKFxuICAgIFsnJGNvbnRyb2xsZXJQcm92aWRlcicsICckY29tcGlsZVByb3ZpZGVyJywgJyRmaWx0ZXJQcm92aWRlcicsICckcHJvdmlkZScsJyRodHRwUHJvdmlkZXInLCckY29va2llc1Byb3ZpZGVyJyxcbiAgICAgIGZ1bmN0aW9uICgkY29udHJvbGxlclByb3ZpZGVyLCAkY29tcGlsZVByb3ZpZGVyLCAkZmlsdGVyUHJvdmlkZXIsICRwcm92aWRlLCRodHRwUHJvdmlkZXIsJGNvb2tpZXNQcm92aWRlcikge1xuICAgICAgICAgICRodHRwUHJvdmlkZXIuZGVmYXVsdHMud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcbiAgICAgICAgICAkY29va2llc1Byb3ZpZGVyLmRlZmF1bHRzID0gJGNvb2tpZXNQcm92aWRlci5kZWZhdWx0cyB8fCB7fTtcbiAgICAgICAgICAkY29va2llc1Byb3ZpZGVyLmRlZmF1bHRzLnBhdGggPSBcIi9cIjtcbiAgICAgICAgLy8gbGF6eSBjb250cm9sbGVyLCBkaXJlY3RpdmUgYW5kIHNlcnZpY2VcbiAgICAgICAgYXBwLmNvbnRyb2xsZXIgPSAkY29udHJvbGxlclByb3ZpZGVyLnJlZ2lzdGVyO1xuICAgICAgICBhcHAuZGlyZWN0aXZlID0gJGNvbXBpbGVQcm92aWRlci5kaXJlY3RpdmU7XG4gICAgICAgIGFwcC5maWx0ZXIgPSAkZmlsdGVyUHJvdmlkZXIucmVnaXN0ZXI7XG4gICAgICAgIGFwcC5mYWN0b3J5ID0gJHByb3ZpZGUuZmFjdG9yeTtcbiAgICAgICAgYXBwLnNlcnZpY2UgPSAkcHJvdmlkZS5zZXJ2aWNlO1xuICAgICAgICBhcHAuY29uc3RhbnQgPSAkcHJvdmlkZS5jb25zdGFudDtcbiAgICAgICAgYXBwLnZhbHVlID0gJHByb3ZpZGUudmFsdWU7XG4gICAgICB9XG4gICAgXSkuY29uZmlnKFsnJHRyYW5zbGF0ZVByb3ZpZGVyJywgJyRodHRwUHJvdmlkZXInLCAnJGNvb2tpZXNQcm92aWRlcicsIGZ1bmN0aW9uICgkdHJhbnNsYXRlUHJvdmlkZXIsICRodHRwUHJvdmlkZXIsICRjb29raWVzUHJvdmlkZXIpIHtcbiAgICAgICR0cmFuc2xhdGVQcm92aWRlci51c2VTdGF0aWNGaWxlc0xvYWRlcih7XG4gICAgICAgIHByZWZpeDogJ2kxOG4vJyxcbiAgICAgICAgc3VmZml4OiAnLmpzJ1xuICAgICAgfSk7XG4gICAgICAkdHJhbnNsYXRlUHJvdmlkZXIucHJlZmVycmVkTGFuZ3VhZ2UoJ3poX2NuJyk7XG4gICAgICAkdHJhbnNsYXRlUHJvdmlkZXIudXNlTG9jYWxTdG9yYWdlKCk7XHJcbiAgICAgICRodHRwUHJvdmlkZXIuZGVmYXVsdHMud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcbiAgICAgICRjb29raWVzUHJvdmlkZXIuZGVmYXVsdHMgPSAkY29va2llc1Byb3ZpZGVyLmRlZmF1bHRzIHx8IHt9O1xuICAgICAgJGNvb2tpZXNQcm92aWRlci5kZWZhdWx0cy5wYXRoID0gXCIvXCI7XG4gICAgfV0pO1xuXG4vLyDnv7vor5Hlv6vmjbfmlrnlvI9cbnZhciBUID0ge307XG4vLyDmnKzlnLDlrZjlgqjlv6vmjbfmlrnlvI9cbnZhciBTID0ge307XG5hcHAucnVuKFsnJHRyYW5zbGF0ZScsICckbG9jYWxTdG9yYWdlJyxcbiAgZnVuY3Rpb24gKCR0cmFuc2xhdGUsICRsb2NhbFN0b3JhZ2UpIHtcbiAgICAvLyDlrprkuYnnv7vor5Hlv6vmjbfmlrnlvI9cbiAgICBUID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgcmV0dXJuICR0cmFuc2xhdGUuaW5zdGFudChrZXkpO1xuICAgIH07XG5cbiAgICBTID0gJGxvY2FsU3RvcmFnZTtcbiAgfVxuXSk7XG5cbmFwcC5jb25zdGFudCgnY29uZmlnJywge1xuICBob3N0OiBsb2NhdGlvbi5vcmlnaW5cbn0pOyIsIi8vIGxhenlsb2FkIGNvbmZpZ1xuXG5hbmd1bGFyLm1vZHVsZSgnYXBwJylcbiAgLmNvbnN0YW50KCdKUV9DT05GSUcnLCB7XG4gICAgICBmaWxlc3R5bGU6ICAgICAgWyd2ZW5kb3IyL2pxdWVyeS9maWxlL2Jvb3RzdHJhcC1maWxlc3R5bGUubWluLmpzJ10sXG4gICAgICBzbGlkZXI6ICAgICAgICAgWyd2ZW5kb3IyL2pxdWVyeS9zbGlkZXIvYm9vdHN0cmFwLXNsaWRlci5qcycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICd2ZW5kb3IyL2pxdWVyeS9zbGlkZXIvc2xpZGVyLmNzcyddLFxuICAgICAgd3lzaXd5ZzogICAgICAgIFsndmVuZG9yMi9qcXVlcnkvd3lzaXd5Zy9ib290c3RyYXAtd3lzaXd5Zy5qcycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICd2ZW5kb3IyL2pxdWVyeS93eXNpd3lnL2pxdWVyeS5ob3RrZXlzLmpzJ10sXG4gICAgICBjaG9zZW46ICAgICAgICAgWyd2ZW5kb3IyL2pxdWVyeS9jaG9zZW4vY2hvc2VuLmpxdWVyeS5taW4uanMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAndmVuZG9yMi9qcXVlcnkvY2hvc2VuL2Nob3Nlbi5jc3MnXSxcbiAgICAgIFRvdWNoU3BpbjogICAgICBbJ3ZlbmRvcjIvanF1ZXJ5L3NwaW5uZXIvanF1ZXJ5LmJvb3RzdHJhcC10b3VjaHNwaW4ubWluLmpzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ3ZlbmRvcjIvanF1ZXJ5L3NwaW5uZXIvanF1ZXJ5LmJvb3RzdHJhcC10b3VjaHNwaW4uY3NzJ10sXG4gICAgICB9XG4gICk7IiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuLyoqXHJcbiAqIENvbmZpZyBmb3IgdGhlIHJvdXRlclxyXG4gKi9cclxuYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbiAgICAucnVuKFxyXG4gICAgICAgIFsnJHJvb3RTY29wZScsICckc3RhdGUnLCAnJHN0YXRlUGFyYW1zJyxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKCRyb290U2NvcGUsICRzdGF0ZSwgJHN0YXRlUGFyYW1zKSB7XHJcbiAgICAgICAgICAgICAgICAkcm9vdFNjb3BlLiRzdGF0ZSA9ICRzdGF0ZTtcclxuICAgICAgICAgICAgICAgICRyb290U2NvcGUuJHN0YXRlUGFyYW1zID0gJHN0YXRlUGFyYW1zO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgIClcclxuICAgIC5jb25maWcoXHJcbiAgICAgICAgWyckc3RhdGVQcm92aWRlcicsICckdXJsUm91dGVyUHJvdmlkZXInLFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikge1xyXG5cclxuICAgICAgICAgICAgICAgICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy9sb2dpbicpO1xyXG5cclxuICAgICAgICAgICAgICAgICRzdGF0ZVByb3ZpZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgLnN0YXRlKCdhcHAnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFic3RyYWN0OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6ICcvYXBwJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICd0cGwvYXBwLmh0bWwnXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuc3RhdGUoJ2FwcC5jcmlzaXMnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJy9jcmlzaXMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3RwbC9jcmlzaXMvY3Jpc2lzX2xpc3QuaHRtbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdDcmlzaXNMaXN0Q3RybCdcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdGF0ZSgnYXBwLmNyaXNpc19kZXRhaWwnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJy9jcmlzaXNfZGV0YWlsJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3RwbC9jcmlzaXMvY3Jpc2lzX2RldGFpbC5odG1sJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ0NyaXNpc0RldGFpbEN0cmwnXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuc3RhdGUoJ2FwcC5kZXBhcnQnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJy9kZXBhcnQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3RwbC9kZXBhcnQvZGVwYXJ0X2xpc3QuaHRtbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdEZXBhcnRMaXN0Q3RybCdcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdGF0ZSgnYXBwLmRlcGFydF9kZXRhaWwnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJy9kZXBhcnRfZGV0YWlsJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3RwbC9kZXBhcnQvZGVwYXJ0X2RldGFpbC5odG1sJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ0RlcGFydERldGFpbEN0cmwnXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuc3RhdGUoJ2FwcC5yZXF1ZXN0Jywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6ICcvcmVxdWVzdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICd0cGwvcmVxdWVzdC9yZXF1ZXN0X2xpc3QuaHRtbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdSZXF1ZXN0TGlzdEN0cmwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkVudGVyOiBmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnN0YXRlKCdhcHAucmVxdWVzdF9kZXRhaWwnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJy9yZXF1ZXN0X2RldGFpbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICd0cGwvcmVxdWVzdC9yZXF1ZXN0X2RldGFpbC5odG1sJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ1JlcXVlc3REZXRhaWxDdHJsJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnN0YXRlKCdhcHAuZW1wbG95ZWUnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJy9lbXBsb3llZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICd0cGwvZW1wbG95ZWUvZW1wbG95ZWVfbGlzdC5odG1sJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ0VtcGxveWVlTGlzdEN0cmwnXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuc3RhdGUoJ2FwcC5lbXBsb3llZV9kZXRhaWwnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJy9lbXBsb3llZV9kZXRhaWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAndHBsL2VtcGxveWVlL2VtcGxveWVlX2RldGFpbC5odG1sJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ0VtcGxveWVlRGV0YWlsQ3RybCdcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdGF0ZSgnYXBwLnBhdGllbnQnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJy9wYXRpZW50JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3RwbC9wYXRpZW50L3BhdGllbnRfbGlzdC5odG1sJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ1BhdGllbnRMaXN0Q3RybCdcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdGF0ZSgnYXBwLnBhdGllbnRfZGV0YWlsJywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6ICcvcGF0aWVudF9kZXRhaWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAndHBsL3BhdGllbnQvcGF0aWVudF9kZXRhaWwuaHRtbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdQYXRpZW50RGV0YWlsQ3RybCdcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdGF0ZSgnYXBwLm1lZGljYWwnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJy9tZWRpY2FsJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3RwbC9tZWRpY2FsL21lZGljYWxfbGlzdC5odG1sJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ01lZGljYWxMaXN0Q3RybCdcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdGF0ZSgnYXBwLm1lZGljYWxfZGV0YWlsJywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6ICcvbWVkaWNhbF9kZXRhaWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAndHBsL21lZGljYWwvbWVkaWNhbF9kZXRhaWwuaHRtbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdNZWRpY2FsRGV0YWlsQ3RybCdcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdGF0ZSgnYXBwLmxhYml0ZW0nLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJy9sYWJpdGVtJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3RwbC9sYWJpdGVtL2xhYml0ZW1fbGlzdC5odG1sJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ0xhYml0ZW1MaXN0Q3RybCdcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdGF0ZSgnYXBwLmxhYml0ZW1fZGV0YWlsJywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6ICcvbGFiaXRlbV9kZXRhaWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAndHBsL2xhYml0ZW0vbGFiaXRlbV9kZXRhaWwuaHRtbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdMYWJpdGVtRGV0YWlsQ3RybCdcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdGF0ZSgnYXBwLmNhdGVnb3J5Jywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6ICcvY2F0ZWdvcnknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAndHBsL2NhdGVnb3J5L2NhdGVnb3J5X2xpc3QuaHRtbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdDYXRlZ29yeUxpc3RDdHJsJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnN0YXRlKCdhcHAuY2F0ZWdvcnlfZGV0YWlsJywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6ICcvY2F0ZWdvcnlfZGV0YWlsJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3RwbC9jYXRlZ29yeS9jYXRlZ29yeV9kZXRhaWwuaHRtbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdDYXRlZ29yeURldGFpbEN0cmwnXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuc3RhdGUoJ2FwcC5sb2dpc3RpY3MnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJy9sb2dpc3RpY3MnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAndHBsL2xvZ2lzdGljcy9sb2dpc3RpY3NfbGlzdC5odG1sJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ0xvZ2lzdGljc0xpc3RDdHJsJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnN0YXRlKCdhcHAubGFicmVzdWx0Jywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6ICcvbGFicmVzdWx0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3RwbC9sYWJyZXN1bHQvbGFicmVzdWx0X2xpc3QuaHRtbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdMYWJyZXN1bHRMaXN0Q3RybCdcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdGF0ZSgnYXBwLmxhYnJlc3VsdF9kZXRhaWwnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJy9sYWJyZXN1bHRfZGV0YWlsJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3RwbC9sYWJyZXN1bHQvbGFicmVzdWx0X2RldGFpbC5odG1sJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ0xhYnJlc3VsdERldGFpbEN0cmwnXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuc3RhdGUoJ2FwcC5zYW1wbGV0eXBlJywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6ICcvc2FtcGxldHlwZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICd0cGwvc2FtcGxlX3R5cGUvc2FtcGxldHlwZV9saXN0Lmh0bWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnU2FtcGxlVHlwZUxpc3RDdHJsJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnN0YXRlKCdhcHAuc2FtcGxldHlwZV9kZXRhaWwnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJy9zYW1wbGV0eXBlX2RldGFpbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICd0cGwvc2FtcGxlX3R5cGUvc2FtcGxldHlwZV9kZXRhaWwuaHRtbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdTYW1wbGVUeXBlRGV0YWlsQ3RybCdcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdGF0ZSgnYXBwLnFjdmFsdWUnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJy9xY3ZhbHVlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3RwbC9xY3ZhbHVlL3FjdmFsdWVfbGlzdC5odG1sJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ1FjdmFsdWVMaXN0Q3RybCdcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdGF0ZSgnYXBwLnFjdmFsdWVfZGV0YWlsJywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6ICcvcWN2YWx1ZV9kZXRhaWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAndHBsL3FjdmFsdWUvcWN2YWx1ZV9kZXRhaWwuaHRtbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdRY3ZhbHVlRGV0YWlsQ3RybCdcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdGF0ZSgnYXBwLmxhYml0ZW1zZXQnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJy9sYWJpdGVtc2V0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3RwbC9sYWJpdGVtc2V0L2xhYml0ZW1zZXRfbGlzdC5odG1sJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ0xhYkl0ZW1TZXRMaXN0Q3RybCdcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdGF0ZSgnYXBwLmxhYml0ZW1zZXRfZGV0YWlsJywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6ICcvbGFiaXRlbXNldF9kZXRhaWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAndHBsL2xhYml0ZW1zZXQvbGFiaXRlbXNldF9kZXRhaWwuaHRtbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdMYWJJdGVtU2V0RGV0YWlsQ3RybCdcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdGF0ZSgnYXBwLmFuYWx5emUnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJy9hbmFseXplJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAndHBsL2FuYWx5emUvYW5hbHl6ZS5odG1sJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ0FuYWx5emVDdHJsJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnN0YXRlKCdhcHAuY2hhbmdlX3B3ZCcsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiAnL2NoYW5nZV9wd2QnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICd0cGwvdXNlci9jaGFuZ2VfcHdkLmh0bWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnVXNlckN0cmwnXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuc3RhdGUoJ2xvZ2luJywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6ICcvbG9naW4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICd0cGwvdXNlci9sb2dpbi5odG1sJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ1VzZXJDdHJsJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnN0YXRlKCdsYWJyZXN1bHRfcHJpbnQnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJy9sYWJyZXN1bHRfcHJpbnQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAndHBsL2xhYnJlc3VsdC9sYWJyZXN1bHRfcHJpbnQuaHRtbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdMYWJyZXN1bHRQcmludEN0cmwnXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuc3RhdGUoJ2xvZ2lzdGljc19wcmludCcsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiAnL2xvZ2lzdGljc19wcmludCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICd0cGwvbG9naXN0aWNzL2xvZ2lzdGljc19wcmludC5odG1sJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ0xvZ2lzdGljc1ByaW50Q3RybCdcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdGF0ZSgnbW9iaV9sYWJyZXN1bHRfcHJpbnQnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJy9tb2JpX2xhYnJlc3VsdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICd0cGwvbGFicmVzdWx0L21vYmlfbGFicmVzdWx0X3ByaW50Lmh0bWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnTW9iaUxhYnJlc3VsdFByaW50Q3RybCdcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgICk7IiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuLyogQ29udHJvbGxlcnMgKi9cclxuXHJcbmFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4gIC5jb250cm9sbGVyKCdBcHBDdHJsJywgWyckc2NvcGUnLCAnJHRyYW5zbGF0ZScsICckbG9jYWxTdG9yYWdlJywgJyR3aW5kb3cnLCAnJHN0YXRlJywgJ3N0b3JhZ2UnLFxyXG4gICAgZnVuY3Rpb24gKCRzY29wZSwgJHRyYW5zbGF0ZSwgJGxvY2FsU3RvcmFnZSwgJHdpbmRvdywgJHN0YXRlLCBzdG9yYWdlKSB7XHJcbiAgICAgIC8vIGFkZCAnaWUnIGNsYXNzZXMgdG8gaHRtbFxyXG4gICAgICB2YXIgaXNJRSA9ICEhbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvTVNJRS9pKTtcclxuICAgICAgaXNJRSAmJiBhbmd1bGFyLmVsZW1lbnQoJHdpbmRvdy5kb2N1bWVudC5ib2R5KS5hZGRDbGFzcygnaWUnKTtcclxuICAgICAgaXNTbWFydERldmljZSgkd2luZG93KSAmJiBhbmd1bGFyLmVsZW1lbnQoJHdpbmRvdy5kb2N1bWVudC5ib2R5KS5hZGRDbGFzcygnc21hcnQnKTtcclxuXHJcbiAgICAgIC8vIGNvbmZpZ1xyXG4gICAgICAkc2NvcGUuYXBwID0ge1xyXG4gICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICB0aGVtZUlEOiAxLFxyXG4gICAgICAgICAgbmF2YmFySGVhZGVyQ29sb3I6ICdiZy1ibGFjaycsXHJcbiAgICAgICAgICBuYXZiYXJDb2xsYXBzZUNvbG9yOiAnaGVhZC1saWdodGJsdWUnLFxyXG4gICAgICAgICAgYXNpZGVDb2xvcjogJ2FzaWRlLWJsdWUnLFxyXG4gICAgICAgICAgaGVhZGVyRml4ZWQ6IHRydWUsXHJcbiAgICAgICAgICBhc2lkZUZpeGVkOiB0cnVlLFxyXG4gICAgICAgICAgYXNpZGVGb2xkZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgYXNpZGVEb2NrOiBmYWxzZSxcclxuICAgICAgICAgIGNvbnRhaW5lcjogZmFsc2VcclxuICAgICAgICB9LFxyXG4gICAgICAgIHVzZXI6IHt9XHJcbiAgICAgIH07XHJcblxyXG4gICAgICAkc2NvcGUuaXNBZG1pbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgdXNlciA9IGxvY2FsU3RvcmFnZS5jdXJVc2VyO1xyXG4gICAgICAgIGlmICh1c2VyKSB7XHJcbiAgICAgICAgICByZXR1cm4gc3RvcmFnZS5pc0FkbWluKEpTT04ucGFyc2UodXNlcikpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICB2YXIgdXNlciA9IHN0b3JhZ2UuZ2V0VXNlcigpO1xyXG4gICAgICBpZiAodXNlcikge1xyXG4gICAgICAgICRzY29wZS5hcHAudXNlciA9IHVzZXI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIHNhdmUgc2V0dGluZ3MgdG8gbG9jYWwgc3RvcmFnZVxyXG4gICAgICAvLyBpZiAoIGFuZ3VsYXIuaXNEZWZpbmVkKCRsb2NhbFN0b3JhZ2Uuc2V0dGluZ3MpICkge1xyXG4gICAgICAvLyAgICRzY29wZS5hcHAuc2V0dGluZ3MgPSAkbG9jYWxTdG9yYWdlLnNldHRpbmdzO1xyXG4gICAgICAvLyB9IGVsc2Uge1xyXG4gICAgICAvLyAgICRsb2NhbFN0b3JhZ2Uuc2V0dGluZ3MgPSAkc2NvcGUuYXBwLnNldHRpbmdzO1xyXG4gICAgICAvLyB9XHJcbiAgICAgICRzY29wZS4kd2F0Y2goJ2FwcC5zZXR0aW5ncycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoJHNjb3BlLmFwcC5zZXR0aW5ncy5hc2lkZURvY2sgJiYgJHNjb3BlLmFwcC5zZXR0aW5ncy5hc2lkZUZpeGVkKSB7XHJcbiAgICAgICAgICAvLyBhc2lkZSBkb2NrIGFuZCBmaXhlZCBtdXN0IHNldCB0aGUgaGVhZGVyIGZpeGVkLlxyXG4gICAgICAgICAgJHNjb3BlLmFwcC5zZXR0aW5ncy5oZWFkZXJGaXhlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHNhdmUgdG8gbG9jYWwgc3RvcmFnZVxyXG4gICAgICAgICRsb2NhbFN0b3JhZ2Uuc2V0dGluZ3MgPSAkc2NvcGUuYXBwLnNldHRpbmdzO1xyXG4gICAgICB9LCB0cnVlKTtcclxuXHJcbiAgICAgIGZ1bmN0aW9uIGlzU21hcnREZXZpY2UoJHdpbmRvdykge1xyXG4gICAgICAgIC8vIEFkYXB0ZWQgZnJvbSBodHRwOi8vd3d3LmRldGVjdG1vYmlsZWJyb3dzZXJzLmNvbVxyXG4gICAgICAgIHZhciB1YSA9ICR3aW5kb3dbJ25hdmlnYXRvciddWyd1c2VyQWdlbnQnXSB8fCAkd2luZG93WyduYXZpZ2F0b3InXVsndmVuZG9yJ10gfHwgJHdpbmRvd1snb3BlcmEnXTtcclxuICAgICAgICAvLyBDaGVja3MgZm9yIGlPcywgQW5kcm9pZCwgQmxhY2tiZXJyeSwgT3BlcmEgTWluaSwgYW5kIFdpbmRvd3MgbW9iaWxlIGRldmljZXNcclxuICAgICAgICByZXR1cm4gKC9pUGhvbmV8aVBvZHxpUGFkfFNpbGt8QW5kcm9pZHxCbGFja0JlcnJ5fE9wZXJhIE1pbml8SUVNb2JpbGUvKS50ZXN0KHVhKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJHNjb3BlLmFkbWluTGlzdCA9IFsnYXBwLmNyaXNpcycsICdhcHAuY3Jpc2lzX2RldGFpbCcsICdhcHAuZGVwYXJ0JywgJ2FwcC5kZXBhcnRfZGV0YWlsJywgJ2FwcC5lbXBsb3llZScsICdhcHAuZW1wbG95ZWVfZGV0YWlsJywgJ2FwcC5tZWRpY2FsJywgJ2FwcC5tZWRpY2FsX2RldGFpbCcsICdhcHAubGFiaXRlbScsICdhcHAubGFiaXRlbV9kZXRhaWwnLCAnYXBwLmNhdGVnb3J5JywgJ2FwcC5jYXRlZ29yeV9kZXRhaWwnLCAnYXBwLnNhbXBsZXR5cGUnLCAnYXBwLnNhbXBsZXR5cGVfZGV0YWlsJywgJ2FwcC5xY3ZhbHVlJywgJ2FwcC5xY3ZhbHVlX2RldGFpbCcsICdhcHAubGFiaXRlbXNldCcsICdhcHAubGFiaXRlbXNldF9kZXRhaWwnLF07XHJcbiAgICAgICRzY29wZS4kb24oJyRzdGF0ZUNoYW5nZVN0YXJ0JywgZnVuY3Rpb24gKGV2ZW50LCB0b1N0YXRlLCB0b1BhcmFtcywgZnJvbVN0YXRlLCBmcm9tUGFyYW1zKSB7XHJcbiAgICAgICAgaWYgKHRvU3RhdGUubmFtZSA9PSAnbG9naW4nKSB7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0b1N0YXRlLm5hbWUgIT0gJ21vYmlfbGFicmVzdWx0X3ByaW50JyAmJiAhc3RvcmFnZS5pc0xvZ2luKCkpIHtcclxuICAgICAgICAgICRzdGF0ZS5nbygnbG9naW4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAkc2NvcGUuYWRtaW5MaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICBpZiAoJHNjb3BlLmFkbWluTGlzdFtpXSA9PSB0b1N0YXRlLm5hbWUgJiYgIXN0b3JhZ2UuaXNBZG1pbigpKSB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICAvL3RvcCBsZXZlbCBzY29wZVxyXG4gICAgICAvL2ZpeCBtZVxyXG4gICAgICAvLyRzY29wZS5maWx0ZXJfdGlwID0gVCgnbGlzdC5maWx0ZXJfdGlwJyk7XHJcbiAgICAgICRzY29wZS5maWx0ZXJfdGlwID0gJ+i+k+WFpeaQnOe0ouWFs+mUruWtlyc7XHJcblxyXG5cclxuICAgICAgJHNjb3BlLmxvZ291dCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBzdG9yYWdlLmxvZ291dCgpO1xyXG4gICAgICAgICRzdGF0ZS5nbygnbG9naW4nKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgc3RvcmFnZS5jYWxsYmFjayA9IGZ1bmN0aW9uICh1c2VyLCBpc0FkbWluKSB7XHJcbiAgICAgICAgaWYgKHVzZXIpIHtcclxuICAgICAgICAgICRzY29wZS5hcHAudXNlciA9IHVzZXI7XHJcbiAgICAgICAgICAkc2NvcGUuYXBwLmlzQWRtaW4gPSBpc0FkbWluO1xyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuXHJcbiAgICB9XSk7IiwiYXBwLmNvbnRyb2xsZXIoJ0FuYWx5emVDdHJsJywgWyckc2NvcGUnLCAnJG1vZGFsJywgJyRzdGF0ZScsICdkYXRhU2VydmljZScsICd1dGlsJywgZnVuY3Rpb24gKCRzY29wZSwgJG1vZGFsLCAkc3RhdGUsIGRhdGFTZXJ2aWNlLCB1dGlsKSB7XHJcblxyXG5cclxuICAgICRzY29wZS5zZWFyY2ggPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGlkID0gbnVsbCx0eXBlSWQ9bnVsbDtcclxuICAgICAgICBpZiAoJHNjb3BlLm1vZGVsLnNlbGVjdGVkU2l0ZSkge1xyXG4gICAgICAgICAgICBpZCA9ICRzY29wZS5tb2RlbC5zZWxlY3RlZFNpdGUuaWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICgkc2NvcGUubW9kZWwuc2VsZWN0ZWRTYW1wbGVUeXBlKSB7XHJcbiAgICAgICAgICAgIHR5cGVJZCA9ICRzY29wZS5tb2RlbC5zZWxlY3RlZFNhbXBsZVR5cGUuaWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRhdGFTZXJ2aWNlLmdldEFuYWx5c2lzKHV0aWwuZm9ybWF0ZURhdGUoJHNjb3BlLm1vZGVsLnN0YXJ0VGltZSksIHV0aWwuZm9ybWF0ZURhdGUoJHNjb3BlLm1vZGVsLmVuZFRpbWUpLCBpZCwgdHlwZUlkKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgJHNjb3BlLm1vZGVsLnJlc3VsdExpc3QgPSByZXN1bHQuZGF0YTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLm1vZGVsID0ge1xyXG4gICAgICAgIHNlbGVjdGVkU2l0ZTogbnVsbCxcclxuICAgICAgICBzZWxlY3RlZFNhbXBsZVR5cGU6IG51bGwsXHJcbiAgICAgICAgc3RhcnRUaW1lOiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgIGVuZFRpbWU6IG5ldyBEYXRlKCksXHJcbiAgICAgICAgcmVzdWx0TGlzdDogW11cclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmRhdGVPcHRpb25zID0ge1xyXG4gICAgICAgIGZvcm1hdFllYXI6ICd5eScsXHJcbiAgICAgICAgc3RhcnRpbmdEYXk6IDEsXHJcbiAgICAgICAgY2xhc3M6ICdkYXRlcGlja2VyJ1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuc3RhcnRPcGVuID0gZnVuY3Rpb24gKCRldmVudCkge1xyXG4gICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAkc2NvcGUubW9kZWwuc3RhcnRPcGVuZWQgPSB0cnVlO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuZW5kT3BlbiA9IGZ1bmN0aW9uICgkZXZlbnQpIHtcclxuICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgJHNjb3BlLm1vZGVsLmVuZE9wZW5lZCA9IHRydWU7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5zaXRlTGlzdCA9IG51bGw7XHJcbiAgICAkc2NvcGUuc2FtcGxlVHlwZUxpc3QgPSBudWxsO1xyXG5cclxuICAgIGRhdGFTZXJ2aWNlLmdldFNpdGVMaXN0KCkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgJHNjb3BlLnNpdGVMaXN0ID0gcmVzdWx0LmRhdGE7XHJcbiAgICB9KTtcclxuXHJcbiAgICBkYXRhU2VydmljZS5nZXRTYW1wbGVUeXBlTGlzdCgpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICRzY29wZS5zYW1wbGVUeXBlTGlzdCA9IHJlc3VsdC5kYXRhO1xyXG4gICAgfSk7XHJcbn1dKTsiLCJhcHAuY29udHJvbGxlcignQ2F0ZWdvcnlMaXN0Q3RybCcsIFsnJHNjb3BlJywgJyRzdGF0ZScsICdkYXRhU2VydmljZScsIGZ1bmN0aW9uICgkc2NvcGUsICRzdGF0ZSwgZGF0YVNlcnZpY2UpIHtcclxuXHJcbiAgICB2YXIgbGluayA9ICdhcHAuY2F0ZWdvcnlfZGV0YWlsJztcclxuICAgIHZhciBlZGl0VXJsID0gJzxhIGNsYXNzPVwiZWRpdC10cGxcIiB1aS1zcmVmPVwiJyArIGxpbmsgKyAnKHtpZDogcm93LmVudGl0eS5pZH0pXCI+57yW6L6RPC9hPic7XHJcbiAgICBlZGl0VXJsICs9ICc8YSBjbGFzcz1cImRlbGV0ZS10cGxcIiBuZy1jbGljaz1cImdyaWQuYXBwU2NvcGUuZGVsZXRlKHJvdy5lbnRpdHkpXCI+5Yig6ZmkPC9hPic7XHJcblxyXG4gICAgJHNjb3BlLmdyaWRPcHRpb25zID0ge1xyXG4gICAgICAgIGVuYWJsZUZpbHRlcmluZzogZmFsc2UsXHJcbiAgICAgICAgb25SZWdpc3RlckFwaTogZnVuY3Rpb24gKGdyaWRBcGkpIHtcclxuICAgICAgICAgICAgJHNjb3BlLmdyaWRBcGkgPSBncmlkQXBpO1xyXG4gICAgICAgICAgICAkc2NvcGUuZ3JpZEFwaS5ncmlkLnJlZ2lzdGVyUm93c1Byb2Nlc3Nvcigkc2NvcGUuZmlsdGVyLCAyMDApO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29sdW1uRGVmczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogJ2lkJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAnSWQnLFxyXG4gICAgICAgICAgICAgICAgdmlzaWJsZTogZmFsc2VcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQ6ICdsY0NvZGUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICfmo4DpqoznsbvliKvku6PnoIEnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiAnbGNOYW1lJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAn5qOA6aqM57G75Yir5ZCN56ewJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogJ2JhcmNvZGVQcmUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICfku6PnoIHliY3nvIAnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiAnZXh0ZXJuYWxDb2RlJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAn5aSW6YOo5Luj56CBJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnZWRpdCcsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogJ+aTjeS9nCcsXHJcbiAgICAgICAgICAgICAgICBjZWxsVGVtcGxhdGU6IGVkaXRVcmxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgIH07XHJcblxyXG4gICAgZGF0YVNlcnZpY2UuZ2V0TGFiQ2F0ZWdvcnlMaXN0KCkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgJHNjb3BlLmdyaWRPcHRpb25zLmRhdGEgPSByZXN1bHQuZGF0YTtcclxuICAgIH0pO1xyXG5cclxuICAgICRzY29wZS5zZWFyY2ggPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJHNjb3BlLmdyaWRBcGkuZ3JpZC5yZWZyZXNoKCk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5jcmVhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJHN0YXRlLmdvKGxpbmspO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuZGVsZXRlID0gZnVuY3Rpb24gKG9iaikge1xyXG4gICAgICAgIGRhdGFTZXJ2aWNlLmRlbGV0ZUxhYkNhdGVnb3J5KG9iaikudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgJHNjb3BlLmdyaWRPcHRpb25zLmRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmICgkc2NvcGUuZ3JpZE9wdGlvbnMuZGF0YVtpXS5pZCA9PSBvYmouaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZ3JpZE9wdGlvbnMuZGF0YS5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pOztcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmZpbHRlciA9IGZ1bmN0aW9uIChyZW5kZXJhYmxlUm93cykge1xyXG4gICAgICAgIHZhciBtYXRjaGVyID0gbmV3IFJlZ0V4cCgkc2NvcGUuZmlsdGVyVmFsdWUpO1xyXG4gICAgICAgIHJlbmRlcmFibGVSb3dzLmZvckVhY2goZnVuY3Rpb24gKHJvdykge1xyXG4gICAgICAgICAgICB2YXIgbWF0Y2ggPSBmYWxzZTtcclxuICAgICAgICAgICAgWydsY0NvZGUnLCAnbGNOYW1lJywgJ2JhcmNvZGVQcmUnLCAnZXh0ZXJuYWxDb2RlJ10uZm9yRWFjaChmdW5jdGlvbiAoZmllbGQpIHtcclxuICAgICAgICAgICAgICAgIHZhciBlbnRpdHkgPSByb3cuZW50aXR5W2ZpZWxkXSArICcnO1xyXG4gICAgICAgICAgICAgICAgaWYgKGVudGl0eS5tYXRjaChtYXRjaGVyKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hdGNoID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmICghbWF0Y2gpIHtcclxuICAgICAgICAgICAgICAgIHJvdy52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcmVuZGVyYWJsZVJvd3M7XHJcbiAgICB9O1xyXG59XSk7XHJcblxyXG5hcHAuY29udHJvbGxlcignQ2F0ZWdvcnlEZXRhaWxDdHJsJywgWyckc2NvcGUnLCAnJHN0YXRlJywgJyRzdGF0ZVBhcmFtcycsICdkYXRhU2VydmljZScsIGZ1bmN0aW9uICgkc2NvcGUsICRzdGF0ZSwgJHN0YXRlUGFyYW1zLCBkYXRhU2VydmljZSkge1xyXG5cclxuICAgICRzY29wZS5tb2RlbCA9IHtcclxuICAgICAgICBpZDogbnVsbCxcclxuICAgICAgICBsY0NvZGU6IG51bGwsXHJcbiAgICAgICAgbGNOYW1lOiBudWxsLFxyXG4gICAgICAgIGJhcmNvZGVQcmU6IG51bGwsXHJcbiAgICAgICAgZXh0ZXJuYWxDb2RlOiBudWxsLFxyXG4gICAgICAgIGNvbG9yOiBudWxsLFxyXG4gICAgICAgIGJvb2xkQWxvbmU6IG51bGwsXHJcbiAgICAgICAgZXhhbU51bTogbnVsbFxyXG4gICAgfTtcclxuXHJcblxyXG4gICAgaWYgKCRzdGF0ZVBhcmFtcy5pZCkge1xyXG4gICAgICAgIGRhdGFTZXJ2aWNlLmdldExhYkNhdGVnb3J5QnlJZCgkc3RhdGVQYXJhbXMuaWQpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LmRhdGEpIHtcclxuICAgICAgICAgICAgICAgICRzY29wZS5tb2RlbCA9IHJlc3VsdC5kYXRhO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgJHNjb3BlLnN1Ym1pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKCRzY29wZS5tb2RlbCk7XHJcbiAgICAgICAgZGF0YVNlcnZpY2Uuc2F2ZUxhYkNhdGVnb3J5KCRzY29wZS5tb2RlbCkudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICRzdGF0ZS5nbygnYXBwLmNhdGVnb3J5Jyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxufV0pOyIsImFwcC5jb250cm9sbGVyKCdDcmlzaXNMaXN0Q3RybCcsIFsnJHNjb3BlJywgJyRzdGF0ZScsICdkYXRhU2VydmljZScsIGZ1bmN0aW9uICgkc2NvcGUsICRzdGF0ZSwgZGF0YVNlcnZpY2UpIHtcclxuICAgIC8vIHZhciB0cGwgPSAnPGJ1dHRvbiBpZD1cImVkaXRCdG5cIiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4tc21hbGxcIiBuZy1jbGljaz1cImdyaWQuYXBwU2NvcGUuZ28ocm93LmVudGl0eSlcIiA+RWRpdDwvYnV0dG9uPic7XHJcbiAgICAvLyAkc2NvcGUuZ28gPSBmdW5jdGlvbiAocm93RGF0YSkge1xyXG4gICAgLy8gICAgICRzdGF0ZS5nbygnYXBwLmNyaXNpc19kZXRhaWwnLCB7IGlkOiByb3dEYXRhLmlkIH0pO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIHZhciBlZGl0VXJsID0gJzxhIGNsYXNzPVwiZWRpdC10cGxcIiB1aS1zcmVmPVwiYXBwLmNyaXNpc19kZXRhaWwoe2lkOiByb3cuZW50aXR5LmlkfSlcIj7nvJbovpE8L2E+PGEgY2xhc3M9XCJkZWxldGUtdHBsXCIgbmctY2xpY2s9XCJncmlkLmFwcFNjb3BlLmRlbGV0ZShyb3cuZW50aXR5KVwiPuWIoOmZpDwvYT4nXHJcblxyXG4gICAgJHNjb3BlLmdyaWRPcHRpb25zID0ge1xyXG4gICAgICAgIGVuYWJsZUZpbHRlcmluZzogZmFsc2UsXHJcbiAgICAgICAgb25SZWdpc3RlckFwaTogZnVuY3Rpb24gKGdyaWRBcGkpIHtcclxuICAgICAgICAgICAgJHNjb3BlLmdyaWRBcGkgPSBncmlkQXBpO1xyXG4gICAgICAgICAgICAkc2NvcGUuZ3JpZEFwaS5ncmlkLnJlZ2lzdGVyUm93c1Byb2Nlc3Nvcigkc2NvcGUuZmlsdGVyLCAyMDApO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29sdW1uRGVmczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogJ2lkJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAnSWQnLFxyXG4gICAgICAgICAgICAgICAgdmlzaWJsZTogZmFsc2VcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQ6ICdsYWJJdGVtLml0ZW1OYW1lJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAn5qOA6aqM6aG555uuJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogJ25vcm1hbFVwcGVyJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAn5q2j5bi45LiK6ZmQJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogJ25vcm1hbExvdycsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogJ+ato+W4uOS4i+mZkCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQ6ICdjcmVhdGVUaW1lJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAn5Yib5bu65pe26Ze0J1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnZWRpdCcsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogJ+aTjeS9nCcsXHJcbiAgICAgICAgICAgICAgICBjZWxsVGVtcGxhdGU6IGVkaXRVcmxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgIH07XHJcblxyXG4gICAgZGF0YVNlcnZpY2UuZ2V0Q3Jpc2lzTGlzdCgpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICRzY29wZS5ncmlkT3B0aW9ucy5kYXRhID0gcmVzdWx0LmRhdGE7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkc2NvcGUuc2VhcmNoID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICRzY29wZS5ncmlkQXBpLmdyaWQucmVmcmVzaCgpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuY3JlYXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICRzdGF0ZS5nbygnYXBwLmNyaXNpc19kZXRhaWwnKTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmRlbGV0ZSA9IGZ1bmN0aW9uIChvYmopIHtcclxuICAgICAgICBkYXRhU2VydmljZS5kZWxldGVDcmlzaXMob2JqKS50aGVuKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAkc2NvcGUuZ3JpZE9wdGlvbnMuZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKCRzY29wZS5ncmlkT3B0aW9ucy5kYXRhW2ldLmlkID09IG9iai5pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5ncmlkT3B0aW9ucy5kYXRhLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5maWx0ZXIgPSBmdW5jdGlvbiAocmVuZGVyYWJsZVJvd3MpIHtcclxuICAgICAgICB2YXIgbWF0Y2hlciA9IG5ldyBSZWdFeHAoJHNjb3BlLmZpbHRlclZhbHVlKTtcclxuICAgICAgICByZW5kZXJhYmxlUm93cy5mb3JFYWNoKGZ1bmN0aW9uIChyb3cpIHtcclxuICAgICAgICAgICAgdmFyIG1hdGNoID0gZmFsc2U7XHJcbiAgICAgICAgICAgIFsnbGFiSXRlbS5pdGVtTmFtZScsICdub3JtYWxVcHBlcicsJ25vcm1hbExvdyddLmZvckVhY2goZnVuY3Rpb24gKGZpZWxkKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZW50aXR5ID0gcm93LmVudGl0eTtcclxuICAgICAgICAgICAgICAgIGZpZWxkLnNwbGl0KCcuJykuZm9yRWFjaChmdW5jdGlvbiAoZikge1xyXG4gICAgICAgICAgICAgICAgICAgIGVudGl0eSA9IGVudGl0eVtmXTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgZW50aXR5ID0gZW50aXR5ICsgJyc7XHJcbiAgICAgICAgICAgICAgICBpZiAoZW50aXR5Lm1hdGNoKG1hdGNoZXIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF0Y2ggPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYgKCFtYXRjaCkge1xyXG4gICAgICAgICAgICAgICAgcm93LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiByZW5kZXJhYmxlUm93cztcclxuICAgIH07XHJcbn1dKTtcclxuXHJcbmFwcC5jb250cm9sbGVyKCdDcmlzaXNEZXRhaWxDdHJsJywgWyckc2NvcGUnLCAnJHN0YXRlJywgJyRzdGF0ZVBhcmFtcycsICdkYXRhU2VydmljZScsIGZ1bmN0aW9uICgkc2NvcGUsICRzdGF0ZSwgJHN0YXRlUGFyYW1zLCBkYXRhU2VydmljZSkge1xyXG4gICAgLy9jb25zb2xlLmxvZygkc3RhdGVQYXJhbXMpO1xyXG4gICAgJHNjb3BlLm1vZGVsID0ge1xyXG4gICAgICAgIGlkOiBudWxsLFxyXG4gICAgICAgIGxtSWQ6IG51bGwsXHJcbiAgICAgICAgbm9ybWFsVXBwZXI6IG51bGwsXHJcbiAgICAgICAgbm9ybWFsTG93OiBudWxsLFxyXG4gICAgICAgIGNyaXNpc1VwcGVyOiBudWxsLFxyXG4gICAgICAgIGNyaXNpc0xvdzogbnVsbCxcclxuICAgICAgICBjcmlzaXNDbGluaWNhbDogbnVsbCxcclxuICAgICAgICBjbGluaWNhc1NpZ25pZmljYW5jZTogbnVsbCxcclxuICAgICAgICBzZWxlY3RlZGxhYkl0ZW06IG51bGxcclxuICAgIH07XHJcbiAgICAkc2NvcGUubGFiSXRlbUxpc3QgPSBudWxsO1xyXG4gICAgZGF0YVNlcnZpY2UuZ2V0bGFiaXRlbUxpc3QoKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAkc2NvcGUubGFiSXRlbUxpc3QgPSByZXN1bHQuZGF0YTtcclxuICAgICAgICBpZiAoJHN0YXRlUGFyYW1zLmlkKSB7XHJcbiAgICAgICAgICAgIGRhdGFTZXJ2aWNlLmdldENyaXNpc0J5SWQoJHN0YXRlUGFyYW1zLmlkKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5tb2RlbCA9IHJlc3VsdC5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgJHNjb3BlLmxhYkl0ZW1MaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkc2NvcGUubGFiSXRlbUxpc3RbaV0uaWQgPT0gJHNjb3BlLm1vZGVsLmxtSWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5tb2RlbC5zZWxlY3RlZGxhYkl0ZW0gPSAkc2NvcGUubGFiSXRlbUxpc3RbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgJHNjb3BlLnN1Ym1pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKCRzY29wZS5tb2RlbCk7XHJcbiAgICAgICAgaWYgKCRzY29wZS5tb2RlbC5zZWxlY3RlZGxhYkl0ZW0pIHtcclxuICAgICAgICAgICAgJHNjb3BlLm1vZGVsLmxtSWQgPSAkc2NvcGUubW9kZWwuc2VsZWN0ZWRsYWJJdGVtLmlkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkYXRhU2VydmljZS5zYXZlQ3Jpc2lzKCRzY29wZS5tb2RlbCkudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICRzdGF0ZS5nbygnYXBwLmNyaXNpcycpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbn1dKTsiLCJhcHAuY29udHJvbGxlcignRGVwYXJ0TGlzdEN0cmwnLCBbJyRzY29wZScsICckc3RhdGUnLCAnZGF0YVNlcnZpY2UnLCBmdW5jdGlvbiAoJHNjb3BlLCAkc3RhdGUsIGRhdGFTZXJ2aWNlKSB7XHJcbiAgICB2YXIgZWRpdFVybCA9ICc8YSBjbGFzcz1cImVkaXQtdHBsXCIgdWktc3JlZj1cImFwcC5kZXBhcnRfZGV0YWlsKHtpZDogcm93LmVudGl0eS5pZH0pXCI+57yW6L6RPC9hPic7XHJcbiAgICBlZGl0VXJsICs9ICc8YSBjbGFzcz1cImRlbGV0ZS10cGxcIiBuZy1jbGljaz1cImdyaWQuYXBwU2NvcGUuZGVsZXRlKHJvdy5lbnRpdHkpXCI+5Yig6ZmkPC9hPic7XHJcblxyXG4gICAgJHNjb3BlLmdyaWRPcHRpb25zID0ge1xyXG4gICAgICAgIGVuYWJsZUZpbHRlcmluZzogZmFsc2UsXHJcbiAgICAgICAgb25SZWdpc3RlckFwaTogZnVuY3Rpb24gKGdyaWRBcGkpIHtcclxuICAgICAgICAgICAgJHNjb3BlLmdyaWRBcGkgPSBncmlkQXBpO1xyXG4gICAgICAgICAgICAkc2NvcGUuZ3JpZEFwaS5ncmlkLnJlZ2lzdGVyUm93c1Byb2Nlc3Nvcigkc2NvcGUuZmlsdGVyLCAyMDApO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29sdW1uRGVmczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogJ2lkJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAnSWQnLFxyXG4gICAgICAgICAgICAgICAgdmlzaWJsZTogZmFsc2VcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQ6ICdkZXB0Q29kZScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogJ+enkeWupOe8lueggSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQ6ICdkZXB0TmFtZScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogJ+enkeWupOWQjeensCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQ6ICdtaU5hbWUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICfmnLrmnoTlkI3np7AnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdlZGl0JyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAn5pON5L2cJyxcclxuICAgICAgICAgICAgICAgIGNlbGxUZW1wbGF0ZTogZWRpdFVybFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgfTtcclxuXHJcbiAgICBkYXRhU2VydmljZS5nZXREZXB0TGlzdCgpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICRzY29wZS5ncmlkT3B0aW9ucy5kYXRhID0gcmVzdWx0LmRhdGE7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkc2NvcGUuc2VhcmNoID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICRzY29wZS5ncmlkQXBpLmdyaWQucmVmcmVzaCgpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuY3JlYXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICRzdGF0ZS5nbygnYXBwLmRlcGFydF9kZXRhaWwnKTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmRlbGV0ZSA9IGZ1bmN0aW9uIChvYmopIHtcclxuICAgICAgICBkYXRhU2VydmljZS5kZWxldGVEZXB0KG9iaikudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgJHNjb3BlLmdyaWRPcHRpb25zLmRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmICgkc2NvcGUuZ3JpZE9wdGlvbnMuZGF0YVtpXS5pZCA9PSBvYmouaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZ3JpZE9wdGlvbnMuZGF0YS5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuZmlsdGVyID0gZnVuY3Rpb24gKHJlbmRlcmFibGVSb3dzKSB7XHJcbiAgICAgICAgdmFyIG1hdGNoZXIgPSBuZXcgUmVnRXhwKCRzY29wZS5maWx0ZXJWYWx1ZSk7XHJcbiAgICAgICAgcmVuZGVyYWJsZVJvd3MuZm9yRWFjaChmdW5jdGlvbiAocm93KSB7XHJcbiAgICAgICAgICAgIHZhciBtYXRjaCA9IGZhbHNlLGRlcE1hdGNoPWZhbHNlO1xyXG4gICAgICAgICAgICBpZigkc2NvcGUubW9kZWwuc2VsZWN0ZWRTaXRlKXtcclxuICAgICAgICAgICAgICAgIGlmKHJvdy5lbnRpdHlbJ21pTmFtZSddPT0kc2NvcGUubW9kZWwuc2VsZWN0ZWRTaXRlLm1pTmFtZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVwTWF0Y2g9dHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIGRlcE1hdGNoPWZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBkZXBNYXRjaD10cnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBbJ2RlcHRDb2RlJywnbWlOYW1lJ10uZm9yRWFjaChmdW5jdGlvbiAoZmllbGQpIHtcclxuICAgICAgICAgICAgICAgIHZhciBlbnRpdHk9IHJvdy5lbnRpdHlbZmllbGRdKycnO1xyXG4gICAgICAgICAgICAgICAgaWYgKGVudGl0eS5tYXRjaChtYXRjaGVyKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hdGNoID0gdHJ1ZSAmJiBkZXBNYXRjaDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmICghbWF0Y2gpIHtcclxuICAgICAgICAgICAgICAgIHJvdy52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcmVuZGVyYWJsZVJvd3M7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5tb2RlbCA9IHtcclxuICAgICAgICBzZWxlY3RlZFNpdGU6IG51bGxcclxuICAgIH07XHJcbiAgICAkc2NvcGUuc2l0ZUxpc3QgPSBudWxsO1xyXG5cclxuICAgIGRhdGFTZXJ2aWNlLmdldFNpdGVMaXN0KCkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgJHNjb3BlLnNpdGVMaXN0ID0gcmVzdWx0LmRhdGE7XHJcbiAgICB9KTtcclxufV0pO1xyXG5cclxuYXBwLmNvbnRyb2xsZXIoJ0RlcGFydERldGFpbEN0cmwnLCBbJyRzY29wZScsICckc3RhdGUnLCAnJHN0YXRlUGFyYW1zJywgJ2RhdGFTZXJ2aWNlJywgZnVuY3Rpb24gKCRzY29wZSwgJHN0YXRlLCAkc3RhdGVQYXJhbXMsIGRhdGFTZXJ2aWNlKSB7XHJcbiAgICAvL2NvbnNvbGUubG9nKCRzdGF0ZVBhcmFtcyk7XHJcbiAgICAkc2NvcGUubW9kZWwgPSB7XHJcbiAgICAgICAgaWQ6IG51bGwsXHJcbiAgICAgICAgc2l0ZUlkOiBudWxsLFxyXG4gICAgICAgIGRlcHRDb2RlOiBudWxsLFxyXG4gICAgICAgIGRlcHROYW1lOiBudWxsLFxyXG4gICAgICAgIGRlc2M6IG51bGwsXHJcbiAgICAgICAgc2VsZWN0ZWRTaXRlOiBudWxsXHJcbiAgICB9O1xyXG4gICAgJHNjb3BlLnNpdGVMaXN0ID0gbnVsbDtcclxuXHJcbiAgICBkYXRhU2VydmljZS5nZXRTaXRlTGlzdCgpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICRzY29wZS5zaXRlTGlzdCA9IHJlc3VsdC5kYXRhO1xyXG4gICAgICAgIGlmICgkc3RhdGVQYXJhbXMuaWQpIHtcclxuICAgICAgICAgICAgZGF0YVNlcnZpY2UuZ2V0RGVwdEJ5SWQoJHN0YXRlUGFyYW1zLmlkKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5tb2RlbCA9IHJlc3VsdC5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgJHNjb3BlLnNpdGVMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkc2NvcGUuc2l0ZUxpc3RbaV0uaWQgPT0gJHNjb3BlLm1vZGVsLnNpdGVJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLm1vZGVsLnNlbGVjdGVkU2l0ZSA9ICRzY29wZS5zaXRlTGlzdFtpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG5cclxuXHJcbiAgICAkc2NvcGUuc3VibWl0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coJHNjb3BlLm1vZGVsKTtcclxuICAgICAgICBpZiAoJHNjb3BlLm1vZGVsLnNlbGVjdGVkU2l0ZSkge1xyXG4gICAgICAgICAgICAkc2NvcGUubW9kZWwuc2l0ZUlkID0gJHNjb3BlLm1vZGVsLnNlbGVjdGVkU2l0ZS5pZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGF0YVNlcnZpY2Uuc2F2ZURlcHQoJHNjb3BlLm1vZGVsKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgJHN0YXRlLmdvKCdhcHAuZGVwYXJ0Jyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxufV0pOyIsImFwcC5jb250cm9sbGVyKCdFbXBsb3llZUxpc3RDdHJsJywgWyckc2NvcGUnLCAnJHN0YXRlJywgJ2RhdGFTZXJ2aWNlJywgZnVuY3Rpb24gKCRzY29wZSwgJHN0YXRlLCBkYXRhU2VydmljZSkge1xyXG5cclxuICAgIHZhciBsaW5rID0gJ2FwcC5lbXBsb3llZV9kZXRhaWwnO1xyXG4gICAgdmFyIGVkaXRVcmwgPSAnPGEgY2xhc3M9XCJlZGl0LXRwbFwiIHVpLXNyZWY9XCInICsgbGluayArICcoe2lkOiByb3cuZW50aXR5LmlkfSlcIj7nvJbovpE8L2E+JztcclxuICAgIGVkaXRVcmwgKz0gJzxhIGNsYXNzPVwiZGVsZXRlLXRwbFwiIG5nLWNsaWNrPVwiZ3JpZC5hcHBTY29wZS5kZWxldGUocm93LmVudGl0eSlcIj7liKDpmaQ8L2E+JztcclxuXHJcbiAgICAkc2NvcGUuZ3JpZE9wdGlvbnMgPSB7XHJcbiAgICAgICAgZW5hYmxlRmlsdGVyaW5nOiBmYWxzZSxcclxuICAgICAgICBvblJlZ2lzdGVyQXBpOiBmdW5jdGlvbiAoZ3JpZEFwaSkge1xyXG4gICAgICAgICAgICAkc2NvcGUuZ3JpZEFwaSA9IGdyaWRBcGk7XHJcbiAgICAgICAgICAgICRzY29wZS5ncmlkQXBpLmdyaWQucmVnaXN0ZXJSb3dzUHJvY2Vzc29yKCRzY29wZS5maWx0ZXIsIDIwMCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb2x1bW5EZWZzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiAnaWQnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICdJZCcsXHJcbiAgICAgICAgICAgICAgICB2aXNpYmxlOiBmYWxzZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogJ2VtQ29kZScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogJ+WRmOW3pee8lueggSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQ6ICdlbU5hbWUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICflkZjlt6XlkI3np7AnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiAndGl0bGVOYW1lJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAn6IGM56ew5ZCN56ewJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogJ2lkTnVtYmVyJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAn6Lqr5Lu96K+B5Y+3J1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogJ21pTmFtZScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogJ+acuuaehOWQjeensCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQ6ICdkZXB0TmFtZScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogJ+enkeWupOWQjeensCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ2VkaXQnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICfmk43kvZwnLFxyXG4gICAgICAgICAgICAgICAgY2VsbFRlbXBsYXRlOiBlZGl0VXJsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICB9O1xyXG5cclxuICAgIGRhdGFTZXJ2aWNlLmdldEVtcGxveWVlTGlzdCgpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICRzY29wZS5ncmlkT3B0aW9ucy5kYXRhID0gcmVzdWx0LmRhdGE7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkc2NvcGUuc2VhcmNoID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICRzY29wZS5ncmlkQXBpLmdyaWQucmVmcmVzaCgpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuY3JlYXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICRzdGF0ZS5nbyhsaW5rKTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmRlbGV0ZSA9IGZ1bmN0aW9uIChvYmopIHtcclxuICAgICAgICBkYXRhU2VydmljZS5kZWxldGVFbXBsb3llZShvYmopLnRoZW4oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8ICRzY29wZS5ncmlkT3B0aW9ucy5kYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoJHNjb3BlLmdyaWRPcHRpb25zLmRhdGFbaV0uaWQgPT0gb2JqLmlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmdyaWRPcHRpb25zLmRhdGEuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmZpbHRlciA9IGZ1bmN0aW9uIChyZW5kZXJhYmxlUm93cykge1xyXG4gICAgICAgIHZhciBtYXRjaGVyID0gbmV3IFJlZ0V4cCgkc2NvcGUuZmlsdGVyVmFsdWUpO1xyXG4gICAgICAgIHJlbmRlcmFibGVSb3dzLmZvckVhY2goZnVuY3Rpb24gKHJvdykge1xyXG4gICAgICAgICAgICB2YXIgbWF0Y2ggPSBmYWxzZTtcclxuICAgICAgICAgICAgWydlbUNvZGUnLCAnZW1OYW1lJywgJ3RpdGxlTmFtZScsICdpZE51bWJlcicsICdtaU5hbWUnLCAnZGVwdE5hbWUnXS5mb3JFYWNoKGZ1bmN0aW9uIChmaWVsZCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGVudGl0eSA9IHJvdy5lbnRpdHlbZmllbGRdICsgJyc7XHJcbiAgICAgICAgICAgICAgICBpZiAoZW50aXR5Lm1hdGNoKG1hdGNoZXIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF0Y2ggPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYgKCFtYXRjaCkge1xyXG4gICAgICAgICAgICAgICAgcm93LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiByZW5kZXJhYmxlUm93cztcclxuICAgIH07XHJcbn1dKTtcclxuXHJcbmFwcC5jb250cm9sbGVyKCdFbXBsb3llZURldGFpbEN0cmwnLCBbJyRzY29wZScsICckc3RhdGUnLCAnJHN0YXRlUGFyYW1zJywgJ2RhdGFTZXJ2aWNlJywgJyRxJywgZnVuY3Rpb24gKCRzY29wZSwgJHN0YXRlLCAkc3RhdGVQYXJhbXMsIGRhdGFTZXJ2aWNlLCAkcSkge1xyXG4gICAgLy9jb25zb2xlLmxvZygkc3RhdGVQYXJhbXMpO1xyXG4gICAgJHNjb3BlLm1vZGVsID0ge1xyXG4gICAgICAgIGlkOiBudWxsLFxyXG4gICAgICAgIHNpdGVJZDogbnVsbCxcclxuICAgICAgICBkZXB0SWQ6IG51bGwsXHJcbiAgICAgICAgZW1Db2RlOiBudWxsLFxyXG4gICAgICAgIGVtTmFtZTogbnVsbCxcclxuICAgICAgICBpZE51bWJlcjogbnVsbCxcclxuICAgICAgICBwaG9uZTogbnVsbCxcclxuICAgICAgICB0aXRsZUlkOiBudWxsLFxyXG4gICAgICAgIHRpdGxlTmFtZTogbnVsbCxcclxuICAgICAgICBwYXNzd29yZDogbnVsbCxcclxuICAgICAgICBkZXNjOiBudWxsLFxyXG4gICAgICAgIGJpcnRoRGF5OiBudWxsLFxyXG4gICAgICAgIHNlbGVjdGVkU2l0ZTogbnVsbCxcclxuICAgICAgICBzZWxlY3RlZERlcHQ6IG51bGwsXHJcbiAgICAgICAgdmlzaXRNaXM6IFtdXHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5zaXRlTGlzdCA9IG51bGw7XHJcbiAgICAkc2NvcGUuZGVwdExpc3QgPSBudWxsO1xyXG4gICAgJHNjb3BlLnNlbGVjdGVkU2V4ID0gbnVsbDtcclxuXHJcbiAgICAkc2NvcGUuZGF0ZU9wdGlvbnMgPSB7XHJcbiAgICAgICAgZm9ybWF0WWVhcjogJ3l5JyxcclxuICAgICAgICBzdGFydGluZ0RheTogMSxcclxuICAgICAgICBjbGFzczogJ2RhdGVwaWNrZXInXHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5vcGVuRGF0ZSA9IGZ1bmN0aW9uICgkZXZlbnQpIHtcclxuICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgJHNjb3BlLm9wZW5lZCA9IHRydWU7XHJcbiAgICB9O1xyXG5cclxuICAgIGlmICgkc3RhdGVQYXJhbXMuaWQpIHtcclxuICAgICAgICAkcS5hbGwoW1xyXG4gICAgICAgICAgICBkYXRhU2VydmljZS5nZXRTaXRlTGlzdCgpLFxyXG4gICAgICAgICAgICBkYXRhU2VydmljZS5nZXREZXB0TGlzdCgpLFxyXG4gICAgICAgICAgICBkYXRhU2VydmljZS5nZXRFbXBsb3llZUJ5SWQoJHN0YXRlUGFyYW1zLmlkKVxyXG4gICAgICAgIF0pLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAkc2NvcGUuc2l0ZUxpc3QgPSByZXN1bHRbMF0uZGF0YTtcclxuICAgICAgICAgICAgJHNjb3BlLmRlcHRMaXN0ID0gcmVzdWx0WzFdLmRhdGE7XHJcbiAgICAgICAgICAgICRzY29wZS5tb2RlbCA9IHJlc3VsdFsyXS5kYXRhO1xyXG4gICAgICAgICAgICAkc2NvcGUubW9kZWwucGFzc3dvcmQxID0gJHNjb3BlLm1vZGVsLnBhc3N3b3JkO1xyXG4gICAgICAgICAgICBpZiAoJHNjb3BlLnNpdGVMaXN0KSB7XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuc2l0ZUxpc3QuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLmlkID09ICRzY29wZS5tb2RlbC5zaXRlSWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLm1vZGVsLnNlbGVjdGVkU2l0ZSA9IGl0ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCRzY29wZS5kZXB0TGlzdCkge1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmRlcHRMaXN0LmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5pZCA9PSAkc2NvcGUubW9kZWwuZGVwdElkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5tb2RlbC5zZWxlY3RlZERlcHQgPSBpdGVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoJHNjb3BlLnNpdGVMaXN0ICYmICRzY29wZS5tb2RlbC52aXNpdE1pcykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGxpc3QgPSBbXTtcclxuICAgICAgICAgICAgICAgICRzY29wZS5tb2RlbC52aXNpdE1pcy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnNpdGVMaXN0LmZvckVhY2goZnVuY3Rpb24gKGxhYikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5taUlkID09IGxhYi5pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC5wdXNoKGxhYik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLm1vZGVsLnZpc2l0TWlzID0gbGlzdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBkYXRhU2VydmljZS5nZXRTaXRlTGlzdCgpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAkc2NvcGUuc2l0ZUxpc3QgPSByZXN1bHQuZGF0YTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBkYXRhU2VydmljZS5nZXREZXB0TGlzdCgpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAkc2NvcGUuZGVwdExpc3QgPSByZXN1bHQuZGF0YTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgICRzY29wZS5zdWJtaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZygkc2NvcGUubW9kZWwpO1xyXG4gICAgICAgIGlmICgkc2NvcGUubW9kZWwuc2VsZWN0ZWRTaXRlKSB7XHJcbiAgICAgICAgICAgICRzY29wZS5tb2RlbC5zaXRlSWQgPSAkc2NvcGUubW9kZWwuc2VsZWN0ZWRTaXRlLmlkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoJHNjb3BlLm1vZGVsLnNlbGVjdGVkRGVwdCkge1xyXG4gICAgICAgICAgICAkc2NvcGUubW9kZWwuZGVwdElkID0gJHNjb3BlLm1vZGVsLnNlbGVjdGVkRGVwdC5pZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJHNjb3BlLm1vZGVsLnZpc2l0TWlzID0gJHNjb3BlLm1vZGVsLnZpc2l0TWlzIHx8IFtdO1xyXG4gICAgICAgIGFuZ3VsYXIuZm9yRWFjaCgkc2NvcGUubW9kZWwudmlzaXRNaXMsIGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgIGl0ZW0ubWlJZCA9IGl0ZW0uaWQ7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZGF0YVNlcnZpY2Uuc2F2ZUVtcGxveWVlKCRzY29wZS5tb2RlbCkudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICRzdGF0ZS5nbygnYXBwLmVtcGxveWVlJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5zZWxlY3RBbGxPcmcgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJHNjb3BlLm1vZGVsLnZpc2l0TWlzID0gW107XHJcbiAgICAgICAgYW5ndWxhci5mb3JFYWNoKCRzY29wZS5zaXRlTGlzdCwgZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgJHNjb3BlLm1vZGVsLnZpc2l0TWlzLnB1c2goaXRlbSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxufV0pOyIsImFwcC5jb250cm9sbGVyKCdMYWJpdGVtTGlzdEN0cmwnLCBbJyRzY29wZScsICckc3RhdGUnLCAnZGF0YVNlcnZpY2UnLCBmdW5jdGlvbiAoJHNjb3BlLCAkc3RhdGUsIGRhdGFTZXJ2aWNlKSB7XHJcblxyXG4gICAgdmFyIGxpbmsgPSAnYXBwLmxhYml0ZW1fZGV0YWlsJztcclxuICAgIHZhciBlZGl0VXJsID0gJzxhIGNsYXNzPVwiZWRpdC10cGxcIiB1aS1zcmVmPVwiJyArIGxpbmsgKyAnKHtpZDogcm93LmVudGl0eS5pZH0pXCI+57yW6L6RPC9hPic7XHJcbiAgICBlZGl0VXJsICs9ICc8YSBjbGFzcz1cImRlbGV0ZS10cGxcIiBuZy1jbGljaz1cImdyaWQuYXBwU2NvcGUuZGVsZXRlKHJvdy5lbnRpdHkpXCI+5Yig6ZmkPC9hPic7XHJcblxyXG4gICAgJHNjb3BlLmdyaWRPcHRpb25zID0ge1xyXG4gICAgICAgIGVuYWJsZUZpbHRlcmluZzogZmFsc2UsXHJcbiAgICAgICAgb25SZWdpc3RlckFwaTogZnVuY3Rpb24gKGdyaWRBcGkpIHtcclxuICAgICAgICAgICAgJHNjb3BlLmdyaWRBcGkgPSBncmlkQXBpO1xyXG4gICAgICAgICAgICAkc2NvcGUuZ3JpZEFwaS5ncmlkLnJlZ2lzdGVyUm93c1Byb2Nlc3Nvcigkc2NvcGUuZmlsdGVyLCAyMDApO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29sdW1uRGVmczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogJ2lkJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAnSWQnLFxyXG4gICAgICAgICAgICAgICAgdmlzaWJsZTogZmFsc2VcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQ6ICdpdGVtQ29kZScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogJ+S7o+eggSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQ6ICdjYXRlZ29yeU5hbWUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICfmo4DpqozliIbnsbsnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiAnaXRlbU5hbWUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICfpobnnm67lkI3np7AnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiAncmVzdWx0VHlwZScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogJ+e7k+aenOexu+WeiydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ2VkaXQnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICfmk43kvZwnLFxyXG4gICAgICAgICAgICAgICAgY2VsbFRlbXBsYXRlOiBlZGl0VXJsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICB9O1xyXG5cclxuICAgIGRhdGFTZXJ2aWNlLmdldGxhYml0ZW1MaXN0KCkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgJHNjb3BlLmdyaWRPcHRpb25zLmRhdGEgPSByZXN1bHQuZGF0YTtcclxuICAgIH0pO1xyXG5cclxuICAgICRzY29wZS5zZWFyY2ggPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJHNjb3BlLmdyaWRBcGkuZ3JpZC5yZWZyZXNoKCk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5jcmVhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJHN0YXRlLmdvKGxpbmspO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuZGVsZXRlID0gZnVuY3Rpb24gKG9iaikge1xyXG4gICAgICAgIGRhdGFTZXJ2aWNlLmRlbGV0ZUxhYkl0ZW0ob2JqKS50aGVuKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAkc2NvcGUuZ3JpZE9wdGlvbnMuZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKCRzY29wZS5ncmlkT3B0aW9ucy5kYXRhW2ldLmlkID09IG9iai5pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5ncmlkT3B0aW9ucy5kYXRhLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5maWx0ZXIgPSBmdW5jdGlvbiAocmVuZGVyYWJsZVJvd3MpIHtcclxuICAgICAgICB2YXIgbWF0Y2hlciA9IG5ldyBSZWdFeHAoJHNjb3BlLmZpbHRlclZhbHVlKTtcclxuICAgICAgICByZW5kZXJhYmxlUm93cy5mb3JFYWNoKGZ1bmN0aW9uIChyb3cpIHtcclxuICAgICAgICAgICAgdmFyIG1hdGNoID0gZmFsc2U7XHJcbiAgICAgICAgICAgIFsnaXRlbUNvZGUnLCAnaXRlbU5hbWUnLCAnY2F0ZWdvcnlOYW1lJywgJ3Jlc3VsdFR5cGUnXS5mb3JFYWNoKGZ1bmN0aW9uIChmaWVsZCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGVudGl0eSA9IHJvdy5lbnRpdHlbZmllbGRdICsgJyc7XHJcbiAgICAgICAgICAgICAgICBpZiAoZW50aXR5Lm1hdGNoKG1hdGNoZXIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF0Y2ggPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYgKCFtYXRjaCkge1xyXG4gICAgICAgICAgICAgICAgcm93LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiByZW5kZXJhYmxlUm93cztcclxuICAgIH07XHJcbn1dKTtcclxuXHJcbmFwcC5jb250cm9sbGVyKCdMYWJpdGVtRGV0YWlsQ3RybCcsIFsnJHNjb3BlJywgJyRzdGF0ZScsICckc3RhdGVQYXJhbXMnLCAnZGF0YVNlcnZpY2UnLCAnJHEnLCBmdW5jdGlvbiAoJHNjb3BlLCAkc3RhdGUsICRzdGF0ZVBhcmFtcywgZGF0YVNlcnZpY2UsICRxKSB7XHJcbiAgICAvL2NvbnNvbGUubG9nKCRzdGF0ZVBhcmFtcyk7XHJcbiAgICAkc2NvcGUubW9kZWwgPSB7XHJcbiAgICAgICAgaWQ6IG51bGwsXHJcbiAgICAgICAgbGNJZDogbnVsbCxcclxuICAgICAgICBpdGVtQ29kZTogbnVsbCxcclxuICAgICAgICBzdGFuZGFyZENvZGU6IG51bGwsXHJcbiAgICAgICAgaXRlbU5hbWU6IG51bGwsXHJcbiAgICAgICAgY2F0ZWdvcnk6IG51bGwsXHJcbiAgICAgICAgcmVzdWx0VHlwZTogbnVsbCxcclxuICAgICAgICB1bml0OiBudWxsLFxyXG4gICAgICAgIGxpZmVMaW1pdDogbnVsbCxcclxuICAgICAgICBkZWZWYWx1ZTogbnVsbCxcclxuICAgICAgICB0eXBlQ29kZTE6IG51bGwsXHJcbiAgICAgICAgdHlwZUNvZGUyOiBudWxsLFxyXG4gICAgICAgIGltcG9ydGFudDogbnVsbCxcclxuICAgICAgICBhc3NvY2lhdGVkOiBudWxsLFxyXG4gICAgICAgIGNvbmRpdGlvbkF1ZGl0OiBudWxsLFxyXG4gICAgICAgIGNvbW1lbnQ6IG51bGwsXHJcbiAgICAgICAgZGlzcGxheTogbnVsbCxcclxuICAgICAgICBwcmVjaXNpb246IG51bGwsXHJcbiAgICAgICAgcHJpY2U6IG51bGwsXHJcbiAgICAgICAgY2FuWmVybzogbnVsbCxcclxuICAgICAgICBjYW5MZXNzWmVybzogbnVsbCxcclxuICAgICAgICBtZWFuT2ZjbGluaWM6IG51bGwsXHJcbiAgICAgICAgZGVzYzogbnVsbCxcclxuICAgICAgICBzZWxlY3RlZExhYkNhdGVnb3J5OiBudWxsXHJcbiAgICB9O1xyXG4gICAgJHNjb3BlLmxhYkNhdGVnb3J5TGlzdCA9IG51bGw7XHJcblxyXG5cclxuICAgIGlmICgkc3RhdGVQYXJhbXMuaWQpIHtcclxuICAgICAgICAkcS5hbGwoW1xyXG4gICAgICAgICAgICBkYXRhU2VydmljZS5nZXRMYWJDYXRlZ29yeUxpc3QoKSxcclxuICAgICAgICAgICAgZGF0YVNlcnZpY2UuZ2V0TGFiSXRlbUJ5SWQoJHN0YXRlUGFyYW1zLmlkKVxyXG4gICAgICAgIF0pLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAkc2NvcGUubGFiQ2F0ZWdvcnlMaXN0ID0gcmVzdWx0WzBdLmRhdGE7XHJcbiAgICAgICAgICAgICRzY29wZS5tb2RlbCA9IHJlc3VsdFsxXS5kYXRhO1xyXG4gICAgICAgICAgICBpZiAoJHNjb3BlLmxhYkNhdGVnb3J5TGlzdCkge1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmxhYkNhdGVnb3J5TGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0uaWQgPT0gJHNjb3BlLm1vZGVsLmxjSWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLm1vZGVsLnNlbGVjdGVkTGFiQ2F0ZWdvcnkgPSBpdGVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRhdGFTZXJ2aWNlLmdldExhYkNhdGVnb3J5TGlzdCgpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAkc2NvcGUubGFiQ2F0ZWdvcnlMaXN0ID0gcmVzdWx0LmRhdGE7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgJHNjb3BlLnN1Ym1pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKCRzY29wZS5tb2RlbCk7XHJcbiAgICAgICAgaWYgKCRzY29wZS5tb2RlbC5zZWxlY3RlZExhYkNhdGVnb3J5KSB7XHJcbiAgICAgICAgICAgICRzY29wZS5tb2RlbC5sY0lkID0gJHNjb3BlLm1vZGVsLnNlbGVjdGVkTGFiQ2F0ZWdvcnkuaWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRhdGFTZXJ2aWNlLnNhdmVMYWJpdGVtKCRzY29wZS5tb2RlbCkudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICRzdGF0ZS5nbygnYXBwLmxhYml0ZW0nKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG59XSk7IiwiYXBwLmNvbnRyb2xsZXIoJ0xhYkl0ZW1TZXRMaXN0Q3RybCcsIFsnJHNjb3BlJywgJyRzdGF0ZScsICdkYXRhU2VydmljZScsIGZ1bmN0aW9uICgkc2NvcGUsICRzdGF0ZSwgZGF0YVNlcnZpY2UpIHtcclxuXHJcbiAgICB2YXIgbGluayA9ICdhcHAubGFiaXRlbXNldF9kZXRhaWwnO1xyXG4gICAgdmFyIGVkaXRVcmwgPSAnPGEgY2xhc3M9XCJlZGl0LXRwbFwiIHVpLXNyZWY9XCInICsgbGluayArICcoe2lkOiByb3cuZW50aXR5LmlkfSlcIj7nvJbovpE8L2E+JztcclxuICAgIGVkaXRVcmwgKz0gJzxhIGNsYXNzPVwiZGVsZXRlLXRwbFwiIG5nLWNsaWNrPVwiZ3JpZC5hcHBTY29wZS5kZWxldGUocm93LmVudGl0eSlcIj7liKDpmaQ8L2E+JztcclxuXHJcbiAgICAkc2NvcGUuZ3JpZE9wdGlvbnMgPSB7XHJcbiAgICAgICAgZW5hYmxlRmlsdGVyaW5nOiBmYWxzZSxcclxuICAgICAgICBvblJlZ2lzdGVyQXBpOiBmdW5jdGlvbiAoZ3JpZEFwaSkge1xyXG4gICAgICAgICAgICAkc2NvcGUuZ3JpZEFwaSA9IGdyaWRBcGk7XHJcbiAgICAgICAgICAgICRzY29wZS5ncmlkQXBpLmdyaWQucmVnaXN0ZXJSb3dzUHJvY2Vzc29yKCRzY29wZS5maWx0ZXIsIDIwMCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb2x1bW5EZWZzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiAnaWQnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICdJZCcsXHJcbiAgICAgICAgICAgICAgICB2aXNpYmxlOiBmYWxzZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogJ2xpc0NvZGUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICfnu4TlkIjpobnnm67ku6PnoIEnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiAnbGlzTmFtZScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogJ+e7hOWQiOmhueebruWQjeensCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQ6ICdsYWJJdGVtU3RyaW5nJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAn5YyF5ZCr6aG555uuJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogJ2NvbW1lbnQnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICflpIfms6gnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdlZGl0JyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAn5pON5L2cJyxcclxuICAgICAgICAgICAgICAgIGNlbGxUZW1wbGF0ZTogZWRpdFVybFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgfTtcclxuXHJcbiAgICBkYXRhU2VydmljZS5nZXRMYWJJdGVtU2V0TGlzdCgpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICRzY29wZS5ncmlkT3B0aW9ucy5kYXRhID0gcmVzdWx0LmRhdGE7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkc2NvcGUuc2VhcmNoID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICRzY29wZS5ncmlkQXBpLmdyaWQucmVmcmVzaCgpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuY3JlYXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICRzdGF0ZS5nbyhsaW5rKTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmRlbGV0ZSA9IGZ1bmN0aW9uIChvYmopIHtcclxuICAgICAgICBkYXRhU2VydmljZS5kZWxldGVMYWJJdGVtU2V0KG9iaikudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgJHNjb3BlLmdyaWRPcHRpb25zLmRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmICgkc2NvcGUuZ3JpZE9wdGlvbnMuZGF0YVtpXS5pZCA9PSBvYmouaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZ3JpZE9wdGlvbnMuZGF0YS5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuZmlsdGVyID0gZnVuY3Rpb24gKHJlbmRlcmFibGVSb3dzKSB7XHJcbiAgICAgICAgdmFyIG1hdGNoZXIgPSBuZXcgUmVnRXhwKCRzY29wZS5maWx0ZXJWYWx1ZSk7XHJcbiAgICAgICAgcmVuZGVyYWJsZVJvd3MuZm9yRWFjaChmdW5jdGlvbiAocm93KSB7XHJcbiAgICAgICAgICAgIHZhciBtYXRjaCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBbJ2xpc05hbWUnLCAnbGlzQ29kZScsJ2xhYkl0ZW1TdHJpbmcnXS5mb3JFYWNoKGZ1bmN0aW9uIChmaWVsZCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGVudGl0eSA9IHJvdy5lbnRpdHlbZmllbGRdICsgJyc7XHJcbiAgICAgICAgICAgICAgICBpZiAoZW50aXR5Lm1hdGNoKG1hdGNoZXIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF0Y2ggPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYgKCFtYXRjaCkge1xyXG4gICAgICAgICAgICAgICAgcm93LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiByZW5kZXJhYmxlUm93cztcclxuICAgIH07XHJcbn1dKTtcclxuXHJcbmFwcC5jb250cm9sbGVyKCdMYWJJdGVtU2V0RGV0YWlsQ3RybCcsIFsnJHNjb3BlJywgJyRzdGF0ZScsICckc3RhdGVQYXJhbXMnLCAnZGF0YVNlcnZpY2UnLCBmdW5jdGlvbiAoJHNjb3BlLCAkc3RhdGUsICRzdGF0ZVBhcmFtcywgZGF0YVNlcnZpY2UpIHtcclxuXHJcbiAgICAkc2NvcGUubW9kZWwgPSB7XHJcbiAgICAgICAgbGFiSXRlbXM6IFtdLFxyXG4gICAgICAgIGxpc0NvZGU6IG51bGwsXHJcbiAgICAgICAgbGlzTmFtZTogbnVsbCxcclxuICAgICAgICBjb21tZW50OiBudWxsLFxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuc2VsZWN0ZWRsYWJJdGVtID0gbnVsbDtcclxuICAgICRzY29wZS5sYWJJdGVtTGlzdCA9IG51bGw7XHJcblxyXG4gICAgZGF0YVNlcnZpY2UuZ2V0bGFiaXRlbUxpc3QoKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAkc2NvcGUubGFiSXRlbUxpc3QgPSByZXN1bHQuZGF0YTtcclxuICAgICAgICBpZiAoJHN0YXRlUGFyYW1zLmlkKSB7XHJcbiAgICAgICAgICAgIGRhdGFTZXJ2aWNlLmdldExhYkl0ZW1TZXRCeUlkKCRzdGF0ZVBhcmFtcy5pZCkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUubW9kZWwgPSByZXN1bHQuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoJHNjb3BlLm1vZGVsLmxhYkl0ZW1zICYmICRzY29wZS5tb2RlbC5sYWJJdGVtcy5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5sYWJJdGVtTGlzdCAmJiAkc2NvcGUubGFiSXRlbUxpc3QubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbGlzdCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUubW9kZWwubGFiSXRlbXMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmxhYkl0ZW1MaXN0LmZvckVhY2goZnVuY3Rpb24gKGxhYikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLmlkID09IGxhYi5pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0LnB1c2gobGFiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5tb2RlbC5sYWJJdGVtcyA9IGxpc3Q7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAkc2NvcGUuc3VibWl0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGRhdGFTZXJ2aWNlLnNhdmVMYWJJdGVtU2V0KCRzY29wZS5tb2RlbCkudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICRzdGF0ZS5nbygnYXBwLmxhYml0ZW1zZXQnKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG59XSk7IiwiYXBwLmNvbnRyb2xsZXIoJ0xhYnJlc3VsdExpc3RDdHJsJywgWyckc2NvcGUnLCAnJHN0YXRlJywgJ2RhdGFTZXJ2aWNlJywgJ3V0aWwnLCAnJGxvY2F0aW9uJywgZnVuY3Rpb24gKCRzY29wZSwgJHN0YXRlLCBkYXRhU2VydmljZSwgdXRpbCwgJGxvY2F0aW9uKSB7XHJcbiAgICB2YXIgZWRpdFVybCA9ICc8YSBjbGFzcz1cImVkaXQtdHBsXCIgdWktc3JlZj1cImxhYnJlc3VsdF9wcmludCh7aWQ6IHJvdy5lbnRpdHkuaWR9KVwiPuafpeecizwvYT4nXHJcblxyXG4gICAgJHNjb3BlLmdyaWRPcHRpb25zID0ge1xyXG4gICAgICAgIGVuYWJsZUZpbHRlcmluZzogZmFsc2UsXHJcbiAgICAgICAgb25SZWdpc3RlckFwaTogZnVuY3Rpb24gKGdyaWRBcGkpIHtcclxuICAgICAgICAgICAgJHNjb3BlLmdyaWRBcGkgPSBncmlkQXBpO1xyXG4gICAgICAgICAgICAvLyAkc2NvcGUuZ3JpZEFwaS5ncmlkLnJlZ2lzdGVyUm93c1Byb2Nlc3Nvcigkc2NvcGUuZmlsdGVyLCAyMDApO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29sdW1uRGVmczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogJ2lkJyxcclxuICAgICAgICAgICAgICAgIHZpc2libGU6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiAncGF0aWVudE5hbWUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICfnl4XkurrlkI3lrZcnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiAnbWlOYW1lJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAn6YCB5qOA5py65p6EJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogJ2RlcHQnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICfnp5HlrqQnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiAnaW5zcGVjdG9yJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAn5a6h5qC46ICFJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogJ2Zvcm1hdGVkQ3JlYXRlVGltZScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogJ+WIm+W7uuaXtumXtCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQ6ICdzdGF0dXMnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICfmo4DpqoznirbmgIEnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdlZGl0JyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAn5pON5L2cJyxcclxuICAgICAgICAgICAgICAgIGNlbGxUZW1wbGF0ZTogZWRpdFVybFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUubW9kZWwgPSB7XHJcbiAgICAgICAgc2VsZWN0ZWRTaXRlOiBudWxsLFxyXG4gICAgICAgIHBhdGllbnRObzogbnVsbCxcclxuICAgICAgICByZXFObzogbnVsbCxcclxuICAgICAgICByZXFUaW1lOiBudWxsLFxyXG4gICAgICAgIHN0YXJ0T3BlbmVkOiBmYWxzZSxcclxuICAgICAgICBlbmRPcGVuZWQ6IGZhbHNlLFxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuZGF0ZU9wdGlvbnMgPSB7XHJcbiAgICAgICAgZm9ybWF0WWVhcjogJ3l5JyxcclxuICAgICAgICBzdGFydGluZ0RheTogMSxcclxuICAgICAgICBjbGFzczogJ2RhdGVwaWNrZXInXHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5zdGFydE9wZW4gPSBmdW5jdGlvbiAoJGV2ZW50KSB7XHJcbiAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICRzY29wZS5tb2RlbC5zdGFydE9wZW5lZCA9IHRydWU7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5lbmRPcGVuID0gZnVuY3Rpb24gKCRldmVudCkge1xyXG4gICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAkc2NvcGUubW9kZWwuZW5kT3BlbmVkID0gdHJ1ZTtcclxuICAgIH07XHJcblxyXG5cclxuXHJcbiAgICAkc2NvcGUubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgbWlJZCA9IG51bGw7XHJcbiAgICAgICAgaWYgKCRzY29wZS5tb2RlbC5zZWxlY3RlZFNpdGUpIHtcclxuICAgICAgICAgICAgbWlJZCA9ICRzY29wZS5tb2RlbC5zZWxlY3RlZFNpdGUuaWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRhdGFTZXJ2aWNlLmdldFJlcG9ydHMoJHNjb3BlLmZpbHRlclZhbHVlLCBtaUlkLCAkc2NvcGUubW9kZWwucmVxVGltZSwgJHNjb3BlLm1vZGVsLnBhdGllbnRObywgJHNjb3BlLm1vZGVsLnJlcU5vKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgcmVzdWx0LmRhdGEuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgICAgICAgICAgaXRlbS5mb3JtYXRlZENyZWF0ZVRpbWUgPSB1dGlsLmZvcm1hdGVEYXRlKGl0ZW0uY3JlYXRlVGltZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAkc2NvcGUuZ3JpZE9wdGlvbnMuZGF0YSA9IHJlc3VsdC5kYXRhO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgcGFyYW1zID0gJGxvY2F0aW9uLnNlYXJjaCgpO1xyXG4gICAgaWYgKHBhcmFtcy5yZXF1ZXN0SWQpIHtcclxuICAgICAgICBkYXRhU2VydmljZS5nZXRSZXF1ZXN0QnlJZChwYXJhbXMucmVxdWVzdElkKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5kYXRhKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQuZGF0YS5yZXBvcnRzLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLmZvcm1hdGVkQ3JlYXRlVGltZSA9IHV0aWwuZm9ybWF0ZURhdGUoaXRlbS5jcmVhdGVUaW1lKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmdyaWRPcHRpb25zLmRhdGEgPSByZXN1bHQuZGF0YS5yZXBvcnRzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgICRzY29wZS5sb2FkKCk7XHJcbiAgICB9O1xyXG5cclxuXHJcblxyXG5cclxuICAgICRzY29wZS5zZWFyY2ggPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8kc2NvcGUuZ3JpZEFwaS5ncmlkLnJlZnJlc2goKTtcclxuICAgICAgICAkc2NvcGUubG9hZCgpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuY3JlYXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICRzdGF0ZS5nbygnYXBwLmxhYnJlc3VsdF9kZXRhaWwnKTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmZpbHRlciA9IGZ1bmN0aW9uIChyZW5kZXJhYmxlUm93cykge1xyXG4gICAgICAgIHZhciBtYXRjaGVyID0gbmV3IFJlZ0V4cCgkc2NvcGUuZmlsdGVyVmFsdWUpO1xyXG4gICAgICAgIHJlbmRlcmFibGVSb3dzLmZvckVhY2goZnVuY3Rpb24gKHJvdykge1xyXG4gICAgICAgICAgICB2YXIgbWF0Y2ggPSBmYWxzZTtcclxuICAgICAgICAgICAgWydyZXF1ZXN0Tm8nLCAncGF0aWVudC5wdE5hbWUnLCAnbWlOYW1lJ10uZm9yRWFjaChmdW5jdGlvbiAoZmllbGQpIHtcclxuICAgICAgICAgICAgICAgIHZhciBlbnRpdHkgPSByb3cuZW50aXR5O1xyXG4gICAgICAgICAgICAgICAgZmllbGQuc3BsaXQoJy4nKS5mb3JFYWNoKGZ1bmN0aW9uIChmKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVudGl0eVtmXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHkgPSBlbnRpdHlbZl07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBlbnRpdHkgPSBlbnRpdHkgKyAnJztcclxuICAgICAgICAgICAgICAgIGlmIChlbnRpdHkubWF0Y2gobWF0Y2hlcikpIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXRjaCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAoIW1hdGNoKSB7XHJcbiAgICAgICAgICAgICAgICByb3cudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHJlbmRlcmFibGVSb3dzO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUubW9kZWwgPSB7XHJcbiAgICAgICAgc2VsZWN0ZWRTaXRlOiBudWxsXHJcbiAgICB9O1xyXG4gICAgJHNjb3BlLnNpdGVMaXN0ID0gbnVsbDtcclxuXHJcbiAgICBkYXRhU2VydmljZS5nZXRTaXRlTGlzdCgpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICRzY29wZS5zaXRlTGlzdCA9IHJlc3VsdC5kYXRhO1xyXG4gICAgfSk7XHJcblxyXG59XSk7XHJcblxyXG5hcHAuY29udHJvbGxlcignTGFicmVzdWx0RGV0YWlsQ3RybCcsIFsnJHNjb3BlJywgJyRzdGF0ZScsICckc3RhdGVQYXJhbXMnLCAnZGF0YVNlcnZpY2UnLCBmdW5jdGlvbiAoJHNjb3BlLCAkc3RhdGUsICRzdGF0ZVBhcmFtcywgZGF0YVNlcnZpY2UpIHtcclxuXHJcbiAgICAkc2NvcGUuZGF0YSA9IHtcclxuICAgICAgICBzZWxlY3RlZGxhYkl0ZW06IG51bGxcclxuICAgIH07XHJcbiAgICBkYXRhU2VydmljZS5nZXRSZXF1ZXN0TGlzdCgpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICRzY29wZS5pdGVtTGlzdCA9IHJlc3VsdC5kYXRhO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJHNjb3BlLiR3YXRjaCgnZGF0YS5zZWxlY3RlZGxhYkl0ZW0nLCBmdW5jdGlvbiAobmV3Viwgb2xkVikge1xyXG4gICAgICAgIGlmIChuZXdWKSB7XHJcbiAgICAgICAgICAgIGRhdGFTZXJ2aWNlLmdldFJlcXVlc3RCeUlkKG5ld1YuaWQpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLm1vZGVsID0gcmVzdWx0LmRhdGE7XHJcbiAgICAgICAgICAgICAgICBpZiAoJHNjb3BlLm1vZGVsLmxhYkluZm9zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLm1vZGVsLmxhYkluZm9zLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9pbml0IGxpc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFpdGVtLmxhYlJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5sYWJSZXN1bHQgPSB7fTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAkc2NvcGUuc3VibWl0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGRhdGFTZXJ2aWNlLnNhdmVMYWJSZXN1bHQoJHNjb3BlLm1vZGVsLmxhYkluZm9zKS50aGVuKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJHN0YXRlLmdvKCdhcHAubGFicmVzdWx0Jyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG59XSk7XHJcblxyXG5hcHAuY29udHJvbGxlcignTGFicmVzdWx0UHJpbnRDdHJsJywgWyckc2NvcGUnLCAnJHN0YXRlJywgJyRzdGF0ZVBhcmFtcycsICdkYXRhU2VydmljZScsICd1dGlsJywgJyRsb2NhdGlvbicsIGZ1bmN0aW9uICgkc2NvcGUsICRzdGF0ZSwgJHN0YXRlUGFyYW1zLCBkYXRhU2VydmljZSwgdXRpbCwgJGxvY2F0aW9uKSB7XHJcbiAgICB2YXIgcGFyYW1zID0gJGxvY2F0aW9uLnNlYXJjaCgpO1xyXG4gICAgdmFyIGlkID0gJHN0YXRlUGFyYW1zLmlkIHx8IChwYXJhbXMgPyBwYXJhbXMucmVwb3J0SWQgOiBudWxsKTtcclxuICAgIGlmIChpZCkge1xyXG4gICAgICAgIGRhdGFTZXJ2aWNlLmdldFJlcG9ydEJ5SWQoaWQpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICByZXN1bHQuZGF0YS5mb3JtYXRlZEFwcGxpY2F0aW9uVGltZSA9IHV0aWwuZm9ybWF0ZURhdGUocmVzdWx0LmRhdGEuYXBwbGljYXRpb25UaW1lKTtcclxuICAgICAgICAgICAgcmVzdWx0LmRhdGEuZm9ybWF0ZWRTZW5kVGltZSA9IHV0aWwuZm9ybWF0ZURhdGUocmVzdWx0LmRhdGEuc2VuZFRpbWUpO1xyXG4gICAgICAgICAgICByZXN1bHQuZGF0YS5mb3JtYXRlZFJlcG9ydFRpbWUgPSB1dGlsLmZvcm1hdGVEYXRlKHJlc3VsdC5kYXRhLnJlcG9ydFRpbWUpO1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LmRhdGEuZGV0YWlscykge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0LmRhdGEuZGV0YWlscy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3VsdFZhbHVlID0gbmV3IE51bWJlcihpdGVtLmxhYlJlc3VsdC5yZXN1bHRWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlZkxvID0gbmV3IE51bWJlcihpdGVtLmxhYlJlc3VsdC5yZWZMbyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlZkhpID0gbmV3IE51bWJlcihpdGVtLmxhYlJlc3VsdC5yZWZIaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpc05hTihyZXN1bHRWYWx1ZSkgJiYgIWlzTmFOKHJlZkxvKSAmJiAhaXNOYU4ocmVmSGkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHRWYWx1ZSA8IHJlZkxvIHx8IHJlc3VsdFZhbHVlID4gcmVmSGkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uaXNSZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5pc1JhbmdlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0ubGFiUmVzdWx0LnJlc3VsdFZhbHVlICE9IGl0ZW0ubGFiUmVzdWx0LnJlZlJhbmdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmlzUmVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICRzY29wZS5tb2RlbCA9IHJlc3VsdC5kYXRhO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XSk7XHJcblxyXG5cclxuYXBwLmNvbnRyb2xsZXIoJ01vYmlMYWJyZXN1bHRQcmludEN0cmwnLCBbJyRzY29wZScsICckc3RhdGUnLCAnJHN0YXRlUGFyYW1zJywgJ2RhdGFTZXJ2aWNlJywgJ3V0aWwnLCAnJGxvY2F0aW9uJywgZnVuY3Rpb24gKCRzY29wZSwgJHN0YXRlLCAkc3RhdGVQYXJhbXMsIGRhdGFTZXJ2aWNlLCB1dGlsLCAkbG9jYXRpb24pIHtcclxuICAgIHZhciBwYXJhbXMgPSAkbG9jYXRpb24uc2VhcmNoKCk7XHJcbiAgICB2YXIgaWQgPSAkc3RhdGVQYXJhbXMuaWQgfHwgKHBhcmFtcyA/IHBhcmFtcy5yZXBvcnRJZCA6IG51bGwpO1xyXG4gICAgaWYgKGlkKSB7XHJcbiAgICAgICAgZGF0YVNlcnZpY2UuZ2V0UmVwb3J0QnlJZChpZCkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIHJlc3VsdC5kYXRhLmZvcm1hdGVkQXBwbGljYXRpb25UaW1lID0gdXRpbC5mb3JtYXRlRGF0ZShyZXN1bHQuZGF0YS5hcHBsaWNhdGlvblRpbWUpO1xyXG4gICAgICAgICAgICByZXN1bHQuZGF0YS5mb3JtYXRlZFNlbmRUaW1lID0gdXRpbC5mb3JtYXRlRGF0ZShyZXN1bHQuZGF0YS5zZW5kVGltZSk7XHJcbiAgICAgICAgICAgIHJlc3VsdC5kYXRhLmZvcm1hdGVkUmVwb3J0VGltZSA9IHV0aWwuZm9ybWF0ZURhdGUocmVzdWx0LmRhdGEucmVwb3J0VGltZSk7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQuZGF0YS5kZXRhaWxzKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQuZGF0YS5kZXRhaWxzLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0VmFsdWUgPSBuZXcgTnVtYmVyKGl0ZW0ubGFiUmVzdWx0LnJlc3VsdFZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcmVmTG8gPSBuZXcgTnVtYmVyKGl0ZW0ubGFiUmVzdWx0LnJlZkxvKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcmVmSGkgPSBuZXcgTnVtYmVyKGl0ZW0ubGFiUmVzdWx0LnJlZkhpKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWlzTmFOKHJlc3VsdFZhbHVlKSAmJiAhaXNOYU4ocmVmTG8pICYmICFpc05hTihyZWZIaSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdFZhbHVlIDwgcmVmTG8gfHwgcmVzdWx0VmFsdWUgPiByZWZIaSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5pc1JlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmlzUmFuZ2UgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5sYWJSZXN1bHQucmVzdWx0VmFsdWUgIT0gaXRlbS5sYWJSZXN1bHQucmVmUmFuZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uaXNSZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJHNjb3BlLm1vZGVsID0gcmVzdWx0LmRhdGE7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1dKTsiLCJhcHAuY29udHJvbGxlcignTG9naXN0aWNzTGlzdEN0cmwnLCBbJyRzY29wZScsICckbW9kYWwnLCAnJHN0YXRlJywgJ2RhdGFTZXJ2aWNlJywgJ3V0aWwnLCBmdW5jdGlvbiAoJHNjb3BlLCAkbW9kYWwsICRzdGF0ZSwgZGF0YVNlcnZpY2UsIHV0aWwpIHtcclxuXHJcbiAgICAkc2NvcGUuZ3JpZE9wdGlvbnMgPSB7XHJcbiAgICAgICAgZW5hYmxlRmlsdGVyaW5nOiBmYWxzZSxcclxuICAgICAgICBvblJlZ2lzdGVyQXBpOiBmdW5jdGlvbiAoZ3JpZEFwaSkge1xyXG4gICAgICAgICAgICAkc2NvcGUuZ3JpZEFwaSA9IGdyaWRBcGk7XHJcbiAgICAgICAgICAgICRzY29wZS5ncmlkQXBpLmdyaWQucmVnaXN0ZXJSb3dzUHJvY2Vzc29yKCRzY29wZS5maWx0ZXIsIDIwMCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb2x1bW5EZWZzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiAnaWQnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICdJZCcsXHJcbiAgICAgICAgICAgICAgICB2aXNpYmxlOiBmYWxzZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogJ3NlbmRFbU5hbWUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICfpgIHmo4DkuronXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiAnbHNFbU5hbWUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICfnianmtYHmjqXmlLbkuronXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiAnY2VudGVyRW1OYW1lJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAn5qOA6aqM5Lit5b+D5o6l5pS25Lq6J1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogJ2Zvcm1hdGVkU2VuZFRpbWUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICfpgIHmo4Dml7bpl7QnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiAnbHNTdGF0dXNOYW1lJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAn54mp5rWB54q25oCBJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUucmVsb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGRhdGFTZXJ2aWNlLmdldExvZ2lMaXN0KCkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIHJlc3VsdC5kYXRhLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0uZm9ybWF0ZWRTZW5kVGltZSA9IHV0aWwuZm9ybWF0ZURhdGUoaXRlbS5zZW5kVGltZSk7XHJcbiAgICAgICAgICAgICAgICBpdGVtLmxzU3RhdHVzTmFtZSA9IHV0aWwuZ2V0TG9naXN0aWNzU3RhdHVzKGl0ZW0ubHNTdGF0dXMpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICRzY29wZS5ncmlkT3B0aW9ucy5kYXRhID0gcmVzdWx0LmRhdGE7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5yZWxvYWQoKTtcclxuXHJcbiAgICAkc2NvcGUuc2VhcmNoID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICRzY29wZS5ncmlkQXBpLmdyaWQucmVmcmVzaCgpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuZmlsdGVyID0gZnVuY3Rpb24gKHJlbmRlcmFibGVSb3dzKSB7XHJcbiAgICAgICAgdmFyIG1hdGNoZXIgPSBuZXcgUmVnRXhwKCRzY29wZS5maWx0ZXJWYWx1ZSk7XHJcbiAgICAgICAgcmVuZGVyYWJsZVJvd3MuZm9yRWFjaChmdW5jdGlvbiAocm93KSB7XHJcbiAgICAgICAgICAgIHZhciBtYXRjaCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBbJ3NlbmRFbU5hbWUnLCAnbHNFbU5hbWUnLCAnY2VudGVyRW1OYW1lJywgJ2xzU3RhdHVzTmFtZSddLmZvckVhY2goZnVuY3Rpb24gKGZpZWxkKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZW50aXR5ID0gcm93LmVudGl0eVtmaWVsZF0gKyAnJztcclxuICAgICAgICAgICAgICAgIGlmIChlbnRpdHkubWF0Y2gobWF0Y2hlcikpIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXRjaCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAoIW1hdGNoKSB7XHJcbiAgICAgICAgICAgICAgICByb3cudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHJlbmRlcmFibGVSb3dzO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuYWNjZXB0ID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnJlamVjdCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5vcGVuQWNjZXB0RGlhbG9nID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICRtb2RhbC5vcGVuKHtcclxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICcvYXBwL3RwbC9kaWFsb2cvYWNjZXB0X3NhbXBsZV9kaWFsb2cuaHRtbCcsXHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdTYW1wbGVEaWFsb2dDdHJsJyxcclxuICAgICAgICAgICAgc2l6ZTogJ2xnJyxcclxuICAgICAgICAgICAgcmVzb2x2ZToge1xyXG4gICAgICAgICAgICAgICAgZ3JpZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbG9hZDogJHNjb3BlLnJlbG9hZFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUub3BlblNlbmREaWFsb2cgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJG1vZGFsLm9wZW4oe1xyXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy9hcHAvdHBsL2RpYWxvZy9zZW5kX3NhbXBsZV9kaWFsb2cuaHRtbCcsXHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdTYW1wbGVEaWFsb2dDdHJsJyxcclxuICAgICAgICAgICAgc2l6ZTogJ2xnJyxcclxuICAgICAgICAgICAgcmVzb2x2ZToge1xyXG4gICAgICAgICAgICAgICAgZ3JpZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbG9hZDogJHNjb3BlLnJlbG9hZFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUubW9kZWwgPSB7XHJcbiAgICAgICAgc2VsZWN0ZWRTaXRlOiBudWxsXHJcbiAgICB9O1xyXG4gICAgJHNjb3BlLnNpdGVMaXN0ID0gbnVsbDtcclxuXHJcbiAgICBkYXRhU2VydmljZS5nZXRTaXRlTGlzdCgpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICRzY29wZS5zaXRlTGlzdCA9IHJlc3VsdC5kYXRhO1xyXG4gICAgfSk7XHJcbn1dKTtcclxuXHJcbmFwcC5jb250cm9sbGVyKCdTYW1wbGVEaWFsb2dDdHJsJywgWyckc2NvcGUnLCAnJHN0YXRlJywgJyRtb2RhbEluc3RhbmNlJywgJ2RhdGFTZXJ2aWNlJywgJ2dyaWQnLCBmdW5jdGlvbiAoJHNjb3BlLCAkc3RhdGUsICRtb2RhbEluc3RhbmNlLCBkYXRhU2VydmljZSwgZ3JpZCkge1xyXG4gICAgJHNjb3BlLnNhbXBsZU5vID0gbnVsbDtcclxuICAgICRzY29wZS5mb2N1c0ZsYWcgPSAxO1xyXG4gICAgJHNjb3BlLm1vZGVsID0ge1xyXG4gICAgICAgIHNlbGVjdGVkU2VuZFVzZXI6IG51bGwsXHJcbiAgICAgICAgc2VsZWN0ZWRBY2NlcHRVc2VyOiBudWxsLFxyXG4gICAgICAgIHNlbGVjdGVkQ2VudGVyQWNjZXB0VXNlcjogbnVsbCxcclxuICAgICAgICBzZW5kRW1JZDogbnVsbCxcclxuICAgICAgICBsc0VtSWQ6IG51bGwsXHJcbiAgICAgICAgY2VudGVyRW1JZDogbnVsbCxcclxuICAgICAgICBiYXJDb2RlczogW11cclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmtleXByZXNzID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgaWYgKGV2ZW50LmNoYXJDb2RlID09IDEzKSB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICBpZiAoJHNjb3BlLnNhbXBsZU5vKSB7XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUubW9kZWwuYmFyQ29kZXMucHVzaCgkc2NvcGUuc2FtcGxlTm8pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICRzY29wZS5zYW1wbGVObyA9ICcnO1xyXG4gICAgICAgICAgICAkc2NvcGUuZm9jdXNGbGFnKys7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBkYXRhU2VydmljZS5nZXRFbXBsb3llZUxpc3QoKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAkc2NvcGUudXNlckxpc3QgPSByZXN1bHQuZGF0YTtcclxuICAgIH0pO1xyXG4gICAgJHNjb3BlLnNlbmRTYW1wbGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJHNjb3BlLnNldE1vZGVsKCk7XHJcbiAgICAgICAgZGF0YVNlcnZpY2Uuc2VuZExvZ2koJHNjb3BlLm1vZGVsKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgZ3JpZC5yZWxvYWQoKTtcclxuICAgICAgICAgICAgLy8gdmFyIHVybCA9ICRzdGF0ZS5ocmVmKCdsb2dpc3RpY3NfcHJpbnQnLCB7IGRhdGE6ICRzY29wZS5tb2RlbCB9KTtcclxuICAgICAgICAgICAgLy8gd2luZG93Lm9wZW4od2luZG93LmxvY2F0aW9uLmhyZWYuc3BsaXQoJyMnKVswXSArIHVybCwgJ19ibGFuaycpO1xyXG4gICAgICAgICAgICAkc3RhdGUuZ28oJ2xvZ2lzdGljc19wcmludCcsIHsgZGF0YTogcmVzdWx0LCB0eXBlOiAnc2VuZCcgfSk7XHJcbiAgICAgICAgICAgICRtb2RhbEluc3RhbmNlLmNsb3NlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgJHNjb3BlLmFjY2VwdFNhbXBsZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkc2NvcGUuc2V0TW9kZWwoKTtcclxuICAgICAgICBkYXRhU2VydmljZS5hY2NlcHRMb2dpKCRzY29wZS5tb2RlbCkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGdyaWQucmVsb2FkKCk7XHJcbiAgICAgICAgICAgIC8vIHZhciB1cmwgPSAkc3RhdGUuaHJlZignbG9naXN0aWNzX3ByaW50JywgeyBkYXRhOiAkc2NvcGUubW9kZWwgfSk7XHJcbiAgICAgICAgICAgIC8vIHdpbmRvdy5vcGVuKHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNwbGl0KCcjJylbMF0gKyB1cmwsICdfYmxhbmsnKTtcclxuICAgICAgICAgICAgJHN0YXRlLmdvKCdsb2dpc3RpY3NfcHJpbnQnLCB7IGRhdGE6IHJlc3VsdCwgdHlwZTogJ3JlY2VpdmUnIH0pO1xyXG4gICAgICAgICAgICAkbW9kYWxJbnN0YW5jZS5jbG9zZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgJHNjb3BlLnNldE1vZGVsID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICgkc2NvcGUubW9kZWwuc2VsZWN0ZWRTZW5kVXNlcikge1xyXG4gICAgICAgICAgICAkc2NvcGUubW9kZWwuc2VuZEVtSWQgPSAkc2NvcGUubW9kZWwuc2VsZWN0ZWRTZW5kVXNlci5pZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCRzY29wZS5tb2RlbC5zZWxlY3RlZEFjY2VwdFVzZXIpIHtcclxuICAgICAgICAgICAgJHNjb3BlLm1vZGVsLmxzRW1JZCA9ICRzY29wZS5tb2RlbC5zZWxlY3RlZEFjY2VwdFVzZXIuaWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICgkc2NvcGUubW9kZWwuc2VsZWN0ZWRDZW50ZXJBY2NlcHRVc2VyKSB7XHJcbiAgICAgICAgICAgICRzY29wZS5tb2RlbC5jZW50ZXJFbUlkID0gJHNjb3BlLm1vZGVsLnNlbGVjdGVkQ2VudGVyQWNjZXB0VXNlci5pZDtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XSk7XHJcblxyXG5cclxuYXBwLmNvbnRyb2xsZXIoJ0xvZ2lzdGljc1ByaW50Q3RybCcsIFsnJHNjb3BlJywgJyRzdGF0ZVBhcmFtcycsICd1dGlsJywgZnVuY3Rpb24gKCRzY29wZSwgJHN0YXRlUGFyYW1zLCB1dGlsKSB7XHJcbiAgICAkc2NvcGUuZGF0YSA9ICRzdGF0ZVBhcmFtcy5kYXRhO1xyXG5cclxuICAgICRzY29wZS5tb2RlbCA9IHtcclxuICAgICAgICBzZW5kRW06ICcnLFxyXG4gICAgICAgIGxzRW06ICcnLFxyXG4gICAgICAgIGNlbnRlckVtOiAnJyxcclxuICAgICAgICBiYXJDb2RlczogW10sXHJcbiAgICAgICAgaXNTZW5kOiBmYWxzZSxcclxuICAgICAgICBpc1JlY2VpdmU6IGZhbHNlLFxyXG4gICAgICAgIHJlY2VpdmVUaW1lOiBudWxsLFxyXG4gICAgICAgIHN0YXR1czogbnVsbCxcclxuICAgICAgICB0aXRsZTogbnVsbCxcclxuICAgICAgICByZWNlaXZlVGltZUxhYmVsOiBudWxsXHJcbiAgICB9O1xyXG5cclxuICAgIGlmICgkc3RhdGVQYXJhbXMuZGF0YSAmJiAkc3RhdGVQYXJhbXMuZGF0YS5kYXRhKSB7XHJcbiAgICAgICAgJHNjb3BlLm1vZGVsLnNlbmRFbSA9ICRzdGF0ZVBhcmFtcy5kYXRhLmRhdGEuc2VuZEVtTmFtZTtcclxuICAgICAgICAkc2NvcGUubW9kZWwubHNFbSA9ICRzdGF0ZVBhcmFtcy5kYXRhLmRhdGEubHNFbU5hbWU7XHJcbiAgICAgICAgJHNjb3BlLm1vZGVsLmNlbnRlckVtID0gJHN0YXRlUGFyYW1zLmRhdGEuZGF0YS5jZW50ZXJFbU5hbWU7XHJcbiAgICAgICAgJHNjb3BlLm1vZGVsLnJlY2VpdmVUaW1lID0gdXRpbC5mb3JtYXRlRGF0ZSgkc3RhdGVQYXJhbXMuZGF0YS5kYXRhLnJlY2VpdmVUaW1lKTtcclxuICAgIH1cclxuICAgIGlmICgkc3RhdGVQYXJhbXMuZGF0YSAmJiAkc3RhdGVQYXJhbXMuZGF0YS5kYXRhLmxhYlNhbXBsZXMpIHtcclxuICAgICAgICAkc2NvcGUubW9kZWwuYmFyQ29kZXMgPSAkc3RhdGVQYXJhbXMuZGF0YS5kYXRhLmxhYlNhbXBsZXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpdGVtLmJhckNvZGU7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCRzdGF0ZVBhcmFtcy50eXBlID09ICdzZW5kJykge1xyXG4gICAgICAgICRzY29wZS5tb2RlbC5pc1NlbmQgPSB0cnVlO1xyXG4gICAgICAgICRzY29wZS5tb2RlbC5zdGF0dXMgPSAn54mp5rWB5bey5o6l5pS2JztcclxuICAgICAgICAkc2NvcGUubW9kZWwudGl0bGUgPSAn6YCB5qOA5Y2VJztcclxuICAgICAgICAkc2NvcGUubW9kZWwucmVjZWl2ZVRpbWVMYWJlbCA9ICfpgIHmo4Dml7bpl7Q6JztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJHNjb3BlLm1vZGVsLmlzUmVjZWl2ZSA9IHRydWU7XHJcbiAgICAgICAgJHNjb3BlLm1vZGVsLnN0YXR1cyA9ICfkuK3lv4Plt7LmjqXmlLYnO1xyXG4gICAgICAgICRzY29wZS5tb2RlbC50aXRsZSA9ICfmjqXmlLbljZUnO1xyXG4gICAgICAgICRzY29wZS5tb2RlbC5yZWNlaXZlVGltZUxhYmVsID0gJ+aOpeaUtuaXtumXtDonO1xyXG4gICAgfVxyXG5cclxuXHJcbn1dKTtcclxuIiwiYXBwLmNvbnRyb2xsZXIoJ01lZGljYWxMaXN0Q3RybCcsIFsnJHNjb3BlJywgJyRzdGF0ZScsICdkYXRhU2VydmljZScsIGZ1bmN0aW9uICgkc2NvcGUsICRzdGF0ZSwgZGF0YVNlcnZpY2UpIHtcclxuXHJcbiAgICB2YXIgbGluayA9ICdhcHAubWVkaWNhbF9kZXRhaWwnO1xyXG4gICAgdmFyIGVkaXRVcmwgPSAnPGEgY2xhc3M9XCJlZGl0LXRwbFwiIHVpLXNyZWY9XCInICsgbGluayArICcoe2lkOiByb3cuZW50aXR5LmlkfSlcIj7nvJbovpE8L2E+JztcclxuICAgIGVkaXRVcmwgKz0gJzxhIGNsYXNzPVwiZGVsZXRlLXRwbFwiIG5nLWNsaWNrPVwiZ3JpZC5hcHBTY29wZS5kZWxldGUocm93LmVudGl0eSlcIj7liKDpmaQ8L2E+JztcclxuXHJcbiAgICAkc2NvcGUuZ3JpZE9wdGlvbnMgPSB7XHJcbiAgICAgICAgZW5hYmxlRmlsdGVyaW5nOiBmYWxzZSxcclxuICAgICAgICBvblJlZ2lzdGVyQXBpOiBmdW5jdGlvbiAoZ3JpZEFwaSkge1xyXG4gICAgICAgICAgICAkc2NvcGUuZ3JpZEFwaSA9IGdyaWRBcGk7XHJcbiAgICAgICAgICAgICRzY29wZS5ncmlkQXBpLmdyaWQucmVnaXN0ZXJSb3dzUHJvY2Vzc29yKCRzY29wZS5maWx0ZXIsIDIwMCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb2x1bW5EZWZzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiAnaWQnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICdJZCcsXHJcbiAgICAgICAgICAgICAgICB2aXNpYmxlOiBmYWxzZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogJ21pQ29kZScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogJ+acuuaehOe8lueggSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQ6ICdtaU5hbWUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICfmnLrmnoTlkI3np7AnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiAnbWlDYXRlZ29yeScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogJ+acuuaehOexu+WIqydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQ6ICdwYXJlbnROYW1lJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAn5LiK57qn5py65p6EJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnZWRpdCcsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogJ+aTjeS9nCcsXHJcbiAgICAgICAgICAgICAgICBjZWxsVGVtcGxhdGU6IGVkaXRVcmxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgIH07XHJcbiAgICAkc2NvcGUubW9kZWwgPSB7XHJcbiAgICAgICAgc2VsZWN0ZWRQYXJlbnRTaXRlOiBudWxsXHJcbiAgICB9O1xyXG4gICAgJHNjb3BlLnBhcmVudFNpdGVMaXN0ID0gbnVsbDtcclxuXHJcbiAgICBkYXRhU2VydmljZS5nZXRTaXRlTGlzdCgpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICRzY29wZS5ncmlkT3B0aW9ucy5kYXRhID0gcmVzdWx0LmRhdGE7XHJcbiAgICAgICAgJHNjb3BlLnBhcmVudFNpdGVMaXN0ID0gcmVzdWx0LmRhdGEuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpdGVtLnBhcmVudElkID09IG51bGw7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkc2NvcGUuc2VhcmNoID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICRzY29wZS5ncmlkQXBpLmdyaWQucmVmcmVzaCgpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuY3JlYXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICRzdGF0ZS5nbyhsaW5rKTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmRlbGV0ZSA9IGZ1bmN0aW9uIChvYmopIHtcclxuICAgICAgICBkYXRhU2VydmljZS5kZWxldGVTaXRlKG9iaikudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgJHNjb3BlLmdyaWRPcHRpb25zLmRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmICgkc2NvcGUuZ3JpZE9wdGlvbnMuZGF0YVtpXS5pZCA9PSBvYmouaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZ3JpZE9wdGlvbnMuZGF0YS5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuZmlsdGVyID0gZnVuY3Rpb24gKHJlbmRlcmFibGVSb3dzKSB7XHJcbiAgICAgICAgdmFyIG1hdGNoZXIgPSBuZXcgUmVnRXhwKCRzY29wZS5maWx0ZXJWYWx1ZSk7XHJcbiAgICAgICAgcmVuZGVyYWJsZVJvd3MuZm9yRWFjaChmdW5jdGlvbiAocm93KSB7XHJcbiAgICAgICAgICAgIHZhciBtYXRjaCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBbJ21pQ29kZScsICdtaU5hbWUnLCAnbWlDYXRlZ29yeSddLmZvckVhY2goZnVuY3Rpb24gKGZpZWxkKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZW50aXR5ID0gcm93LmVudGl0eVtmaWVsZF0gKyAnJztcclxuICAgICAgICAgICAgICAgIGlmIChlbnRpdHkubWF0Y2gobWF0Y2hlcikpIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXRjaCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAoJHNjb3BlLm1vZGVsLnNlbGVjdGVkUGFyZW50U2l0ZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJvdy5lbnRpdHlbJ3BhcmVudE5hbWUnXSA9PSAkc2NvcGUubW9kZWwuc2VsZWN0ZWRQYXJlbnRTaXRlLm1pTmFtZSkge1xyXG5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF0Y2ggPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCFtYXRjaCkge1xyXG4gICAgICAgICAgICAgICAgcm93LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiByZW5kZXJhYmxlUm93cztcclxuICAgIH07XHJcbn1dKTtcclxuXHJcbmFwcC5jb250cm9sbGVyKCdNZWRpY2FsRGV0YWlsQ3RybCcsIFsnJHNjb3BlJywgJyRzdGF0ZScsICckc3RhdGVQYXJhbXMnLCAnZGF0YVNlcnZpY2UnLCAnJHEnLCBmdW5jdGlvbiAoJHNjb3BlLCAkc3RhdGUsICRzdGF0ZVBhcmFtcywgZGF0YVNlcnZpY2UsICRxKSB7XHJcbiAgICAkc2NvcGUubW9kZWwgPSB7XHJcbiAgICAgICAgaWQ6IG51bGwsXHJcbiAgICAgICAgbWlDb2RlOiBudWxsLFxyXG4gICAgICAgIG1pTmFtZTogbnVsbCxcclxuICAgICAgICBtaUNhdGVnb3J5OiBudWxsLFxyXG4gICAgICAgIGFyZWFDb2RlOiBudWxsLFxyXG4gICAgICAgIGFkZHJlc3M6IG51bGwsXHJcbiAgICAgICAgZGVzYzogbnVsbCxcclxuICAgICAgICBzZWxlY3RlZFBhcmVudFNpdGU6IG51bGwsXHJcbiAgICAgICAgcGFyZW50SWQ6IG51bGwsXHJcbiAgICAgICAgcGFyZW50TmFtZTogbnVsbFxyXG4gICAgfTtcclxuICAgICRzY29wZS5wYXJlbnRTaXRlTGlzdCA9IG51bGw7XHJcbiAgICAkc2NvcGUuaXNUb3BNSSA9IGZhbHNlO1xyXG5cclxuICAgIGlmICgkc3RhdGVQYXJhbXMuaWQpIHtcclxuICAgICAgICAkcS5hbGwoW1xyXG4gICAgICAgICAgICBkYXRhU2VydmljZS5nZXRTaXRlTGlzdCgpLFxyXG4gICAgICAgICAgICBkYXRhU2VydmljZS5nZXRTaXRlQnlJZCgkc3RhdGVQYXJhbXMuaWQpXHJcbiAgICAgICAgXSkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHRbMF0uZGF0YSAmJiByZXN1bHRbMF0uZGF0YS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUucGFyZW50U2l0ZUxpc3QgPSByZXN1bHRbMF0uZGF0YS5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbS5wYXJlbnRJZCA9PSBudWxsICYmIGl0ZW0uaWQgIT0gJHN0YXRlUGFyYW1zLmlkO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICByZXN1bHRbMF0uZGF0YS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0ucGFyZW50SWQgPT0gJHN0YXRlUGFyYW1zLmlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5pc1RvcE1JID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHJlc3VsdFsxXS5kYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUubW9kZWwgPSByZXN1bHRbMV0uZGF0YTtcclxuICAgICAgICAgICAgICAgIGlmICgkc2NvcGUubW9kZWwucGFyZW50SWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8ICRzY29wZS5wYXJlbnRTaXRlTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJHNjb3BlLnBhcmVudFNpdGVMaXN0W2ldLmlkID09ICRzY29wZS5tb2RlbC5wYXJlbnRJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLm1vZGVsLnNlbGVjdGVkUGFyZW50U2l0ZSA9ICRzY29wZS5wYXJlbnRTaXRlTGlzdFtpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBkYXRhU2VydmljZS5nZXRTaXRlTGlzdCgpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LmRhdGEgJiYgcmVzdWx0LmRhdGEubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLnBhcmVudFNpdGVMaXN0ID0gcmVzdWx0LmRhdGEuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0ucGFyZW50SWQgPT0gbnVsbDtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICAkc2NvcGUuc3VibWl0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coJHNjb3BlLm1vZGVsKTtcclxuICAgICAgICBpZiAoJHNjb3BlLm1vZGVsLnNlbGVjdGVkUGFyZW50U2l0ZSkge1xyXG4gICAgICAgICAgICAkc2NvcGUubW9kZWwucGFyZW50SWQgPSAkc2NvcGUubW9kZWwuc2VsZWN0ZWRQYXJlbnRTaXRlLmlkO1xyXG4gICAgICAgICAgICAkc2NvcGUubW9kZWwucGFyZW50TmFtZSA9ICRzY29wZS5tb2RlbC5zZWxlY3RlZFBhcmVudFNpdGUubWlOYW1lO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkYXRhU2VydmljZS5zYXZlU2l0ZSgkc2NvcGUubW9kZWwpLnRoZW4oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkc3RhdGUuZ28oJ2FwcC5tZWRpY2FsJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxufV0pOyIsImFwcC5jb250cm9sbGVyKCdQYXRpZW50TGlzdEN0cmwnLCBbJyRzY29wZScsICckc3RhdGUnLCAnZGF0YVNlcnZpY2UnLCBmdW5jdGlvbiAoJHNjb3BlLCAkc3RhdGUsIGRhdGFTZXJ2aWNlKSB7XHJcblxyXG4gICAgdmFyIGxpbms9J2FwcC5wYXRpZW50X2RldGFpbCc7XHJcbiAgICB2YXIgZWRpdFVybCA9ICc8YSBjbGFzcz1cImVkaXQtdHBsXCIgdWktc3JlZj1cIicrbGluaysnKHtpZDogcm93LmVudGl0eS5pZH0pXCI+57yW6L6RPC9hPic7XHJcbiAgICBlZGl0VXJsKz0nPGEgY2xhc3M9XCJkZWxldGUtdHBsXCIgbmctY2xpY2s9XCJncmlkLmFwcFNjb3BlLmRlbGV0ZShyb3cuZW50aXR5KVwiPuWIoOmZpDwvYT4nO1xyXG5cclxuICAgICRzY29wZS5ncmlkT3B0aW9ucyA9IHtcclxuICAgICAgICBlbmFibGVGaWx0ZXJpbmc6IGZhbHNlLFxyXG4gICAgICAgIG9uUmVnaXN0ZXJBcGk6IGZ1bmN0aW9uIChncmlkQXBpKSB7XHJcbiAgICAgICAgICAgICRzY29wZS5ncmlkQXBpID0gZ3JpZEFwaTtcclxuICAgICAgICAgICAgJHNjb3BlLmdyaWRBcGkuZ3JpZC5yZWdpc3RlclJvd3NQcm9jZXNzb3IoJHNjb3BlLmZpbHRlciwgMjAwKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbHVtbkRlZnM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQ6ICdpZCcsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogJ0lkJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogJ25hbWUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICdOYW1lJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnZWRpdCcsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogJ0VkaXQnLFxyXG4gICAgICAgICAgICAgICAgY2VsbFRlbXBsYXRlOiBlZGl0VXJsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICB9O1xyXG5cclxuICAgIGRhdGFTZXJ2aWNlLmdldGxhYml0ZW1MaXN0KCkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgJHNjb3BlLmdyaWRPcHRpb25zLmRhdGEgPSByZXN1bHQuZGF0YTtcclxuICAgIH0pO1xyXG5cclxuICAgICRzY29wZS5zZWFyY2ggPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJHNjb3BlLmdyaWRBcGkuZ3JpZC5yZWZyZXNoKCk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5jcmVhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJHN0YXRlLmdvKGxpbmspO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuZGVsZXRlID0gZnVuY3Rpb24gKG9iaikge1xyXG4gICAgICAgIGRhdGFTZXJ2aWNlLmRlbGV0ZVBhdGllbnQob2JqKS50aGVuKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIGZvcih2YXIgaT0wO2k8JHNjb3BlLmdyaWRPcHRpb25zLmRhdGEubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgICAgICBpZigkc2NvcGUuZ3JpZE9wdGlvbnMuZGF0YVtpXS5pZD09b2JqLmlkKXtcclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZ3JpZE9wdGlvbnMuZGF0YS5zcGxpY2UoaSwxKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5maWx0ZXI9ZnVuY3Rpb24ocmVuZGVyYWJsZVJvd3Mpe1xyXG4gICAgICAgIHZhciBtYXRjaGVyID0gbmV3IFJlZ0V4cCgkc2NvcGUuZmlsdGVyVmFsdWUpO1xyXG4gICAgICAgIHJlbmRlcmFibGVSb3dzLmZvckVhY2goIGZ1bmN0aW9uKCByb3cgKSB7XHJcbiAgICAgICAgICB2YXIgbWF0Y2ggPSBmYWxzZTtcclxuICAgICAgICAgIFsgJ25hbWUnIF0uZm9yRWFjaChmdW5jdGlvbiggZmllbGQgKXtcclxuICAgICAgICAgICAgaWYgKCByb3cuZW50aXR5W2ZpZWxkXS5tYXRjaChtYXRjaGVyKSApe1xyXG4gICAgICAgICAgICAgIG1hdGNoID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBpZiAoICFtYXRjaCApe1xyXG4gICAgICAgICAgICByb3cudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiByZW5kZXJhYmxlUm93cztcclxuICAgIH07XHJcbn1dKTtcclxuXHJcbmFwcC5jb250cm9sbGVyKCdQYXRpZW50RGV0YWlsQ3RybCcsIFsnJHNjb3BlJywgJyRzdGF0ZScsICckc3RhdGVQYXJhbXMnLCAnZGF0YVNlcnZpY2UnLCBmdW5jdGlvbiAoJHNjb3BlLCAkc3RhdGUsICRzdGF0ZVBhcmFtcywgZGF0YVNlcnZpY2UpIHtcclxuICAgIC8vY29uc29sZS5sb2coJHN0YXRlUGFyYW1zKTtcclxuICAgICRzY29wZS5tb2RlbCA9IHtcclxuICAgICAgICBzZWxlY3RlZFNleDogbnVsbCxcclxuICAgICAgICBiaXJ0aERhdGU6IG5ldyBEYXRlKClcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmRhdGVPcHRpb25zID0ge1xyXG4gICAgICAgIGZvcm1hdFllYXI6ICd5eScsXHJcbiAgICAgICAgc3RhcnRpbmdEYXk6IDEsXHJcbiAgICAgICAgY2xhc3M6ICdkYXRlcGlja2VyJ1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUub3BlbkRhdGUgPSBmdW5jdGlvbigkZXZlbnQpIHtcclxuICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgXHJcbiAgICAgICAgJHNjb3BlLm9wZW5lZCA9IHRydWU7XHJcbiAgICB9O1xyXG5cclxuICAgIGRhdGFTZXJ2aWNlLmdldFNleExpc3QoKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAkc2NvcGUuc2V4TGlzdCA9IHJlc3VsdC5kYXRhO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJHNjb3BlLnN1Ym1pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygkc2NvcGUubW9kZWwpO1xyXG4gICAgfTtcclxuXHJcbn1dKTsiLCJhcHAuY29udHJvbGxlcignUWN2YWx1ZUxpc3RDdHJsJywgWyckc2NvcGUnLCAnJHN0YXRlJywgJ2RhdGFTZXJ2aWNlJywgJ3V0aWwnLCBmdW5jdGlvbiAoJHNjb3BlLCAkc3RhdGUsIGRhdGFTZXJ2aWNlLCB1dGlsKSB7XHJcblxyXG4gICAgdmFyIGxpbmsgPSAnYXBwLnFjdmFsdWVfZGV0YWlsJztcclxuICAgIHZhciBlZGl0VXJsID0gJzxhIGNsYXNzPVwiZWRpdC10cGxcIiB1aS1zcmVmPVwiJyArIGxpbmsgKyAnKHtpZDogcm93LmVudGl0eS5pZH0pXCI+57yW6L6RPC9hPic7XHJcbiAgICBlZGl0VXJsICs9ICc8YSBjbGFzcz1cImRlbGV0ZS10cGxcIiBuZy1jbGljaz1cImdyaWQuYXBwU2NvcGUuZGVsZXRlKHJvdy5lbnRpdHkpXCI+5Yig6ZmkPC9hPic7XHJcblxyXG4gICAgJHNjb3BlLmdyaWRPcHRpb25zID0ge1xyXG4gICAgICAgIGVuYWJsZUZpbHRlcmluZzogZmFsc2UsXHJcbiAgICAgICAgb25SZWdpc3RlckFwaTogZnVuY3Rpb24gKGdyaWRBcGkpIHtcclxuICAgICAgICAgICAgJHNjb3BlLmdyaWRBcGkgPSBncmlkQXBpO1xyXG4gICAgICAgICAgICAkc2NvcGUuZ3JpZEFwaS5ncmlkLnJlZ2lzdGVyUm93c1Byb2Nlc3Nvcigkc2NvcGUuZmlsdGVyLCAyMDApO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29sdW1uRGVmczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogJ2lkJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAnSWQnLFxyXG4gICAgICAgICAgICAgICAgdmlzaWJsZTogZmFsc2VcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQ6ICdtaU5hbWUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICfljLvpmaLlkI3np7AnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiAnaW5zdHJ1bWVudE5hbWUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICfku6rlmajlkI3np7AnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiAnbGFiSXRlbU5hbWUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICfotKjmjqfpobnnm64nXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiAndmFsdWUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICfotKjmjqflgLwnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiAncWNUaW1lJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAn6LSo5o6n5pe26Ze0J1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogJ3FjZXInLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICfotKjmjqfkurrlkZgnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdlZGl0JyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAn5pON5L2cJyxcclxuICAgICAgICAgICAgICAgIGNlbGxUZW1wbGF0ZTogZWRpdFVybFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgfTtcclxuXHJcbiAgICBkYXRhU2VydmljZS5nZXRRQ1ZhbHVlTGlzdCgpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgIHJlc3VsdC5kYXRhLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgaXRlbS5xY1RpbWUgPSB1dGlsLmZvcm1hdGVEYXRlKGl0ZW0ucWNUaW1lKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJHNjb3BlLmdyaWRPcHRpb25zLmRhdGEgPSByZXN1bHQuZGF0YTtcclxuICAgIH0pO1xyXG5cclxuICAgICRzY29wZS5zZWFyY2ggPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJHNjb3BlLmdyaWRBcGkuZ3JpZC5yZWZyZXNoKCk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5jcmVhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJHN0YXRlLmdvKGxpbmspO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuZGVsZXRlID0gZnVuY3Rpb24gKG9iaikge1xyXG4gICAgICAgIGRhdGFTZXJ2aWNlLmRlbGV0ZVFDVmFsdWUob2JqKS50aGVuKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAkc2NvcGUuZ3JpZE9wdGlvbnMuZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKCRzY29wZS5ncmlkT3B0aW9ucy5kYXRhW2ldLmlkID09IG9iai5pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5ncmlkT3B0aW9ucy5kYXRhLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5maWx0ZXIgPSBmdW5jdGlvbiAocmVuZGVyYWJsZVJvd3MpIHtcclxuICAgICAgICB2YXIgbWF0Y2hlciA9IG5ldyBSZWdFeHAoJHNjb3BlLmZpbHRlclZhbHVlKTtcclxuICAgICAgICByZW5kZXJhYmxlUm93cy5mb3JFYWNoKGZ1bmN0aW9uIChyb3cpIHtcclxuICAgICAgICAgICAgdmFyIG1hdGNoID0gZmFsc2U7XHJcbiAgICAgICAgICAgIFsnbWlOYW1lJywgJ2luc3RydW1lbnROYW1lJywgJ2xhYkl0ZW1OYW1lJ10uZm9yRWFjaChmdW5jdGlvbiAoZmllbGQpIHtcclxuICAgICAgICAgICAgICAgIHZhciBlbnRpdHkgPSByb3cuZW50aXR5W2ZpZWxkXSArICcnO1xyXG4gICAgICAgICAgICAgICAgaWYgKGVudGl0eS5tYXRjaChtYXRjaGVyKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hdGNoID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmICghbWF0Y2gpIHtcclxuICAgICAgICAgICAgICAgIHJvdy52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcmVuZGVyYWJsZVJvd3M7XHJcbiAgICB9O1xyXG59XSk7XHJcblxyXG5hcHAuY29udHJvbGxlcignUWN2YWx1ZURldGFpbEN0cmwnLCBbJyRzY29wZScsICckc3RhdGUnLCAnJHN0YXRlUGFyYW1zJywgJ2RhdGFTZXJ2aWNlJywgJyRxJywgZnVuY3Rpb24gKCRzY29wZSwgJHN0YXRlLCAkc3RhdGVQYXJhbXMsIGRhdGFTZXJ2aWNlLCAkcSkge1xyXG5cclxuICAgICRzY29wZS5tb2RlbCA9IHtcclxuICAgICAgICBpZDogbnVsbCxcclxuICAgICAgICBsbUlkOiBudWxsLFxyXG4gICAgICAgIG1pSWQ6IG51bGwsXHJcbiAgICAgICAgaW5zdHJ1bWVudElkOiAnJyxcclxuICAgICAgICBpbnN0cnVtZW50TmFtZTogbnVsbCxcclxuICAgICAgICBxY2VyOiBudWxsLFxyXG4gICAgICAgIHFjVGltZTogbnVsbCxcclxuICAgICAgICBxY051bTogbnVsbCxcclxuICAgICAgICB2YWx1ZTogbnVsbCxcclxuICAgICAgICBjb21tZW50OiBudWxsLFxyXG4gICAgICAgIG90aGVyMTogbnVsbCxcclxuICAgICAgICBvdGhlcjI6IG51bGwsXHJcbiAgICAgICAgb3RoZXIzOiBudWxsLFxyXG4gICAgICAgIG90aGVyNDogbnVsbCxcclxuICAgICAgICBvdGhlcjU6IG51bGwsXHJcbiAgICAgICAgb3RoZXI2OiBudWxsLFxyXG4gICAgICAgIHNlbGVjdGVkTGFiSXRlbTogbnVsbCxcclxuICAgICAgICBzZWxlY3RlZFNpdGU6IG51bGwsXHJcbiAgICAgICAgc2VsZWN0ZWRRY2VyOiBudWxsXHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5sYWJJdGVtTGlzdCA9IG51bGw7XHJcbiAgICAkc2NvcGUuc2l0ZUxpc3QgPSBudWxsO1xyXG4gICAgJHNjb3BlLnVzZXJMaXN0ID0gbnVsbDtcclxuICAgICRzY29wZS5maWx0ZXJVc2VyTGlzdCA9IG51bGw7XHJcblxyXG4gICAgJHNjb3BlLnNpdGVMaXN0ID0gbnVsbDtcclxuICAgICRzY29wZS5kZXB0TGlzdCA9IG51bGw7XHJcbiAgICAkc2NvcGUuc2VsZWN0ZWRTZXggPSBudWxsO1xyXG5cclxuICAgICRzY29wZS5kYXRlT3B0aW9ucyA9IHtcclxuICAgICAgICBmb3JtYXRZZWFyOiAneXknLFxyXG4gICAgICAgIHN0YXJ0aW5nRGF5OiAxLFxyXG4gICAgICAgIGNsYXNzOiAnZGF0ZXBpY2tlcidcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnFjT3BlbiA9IGZ1bmN0aW9uICgkZXZlbnQpIHtcclxuICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgJHNjb3BlLnFjT3BlbmVkID0gdHJ1ZTtcclxuICAgIH07XHJcblxyXG4gICAgaWYgKCRzdGF0ZVBhcmFtcy5pZCkge1xyXG4gICAgICAgICRxLmFsbChbXHJcbiAgICAgICAgICAgIGRhdGFTZXJ2aWNlLmdldGxhYml0ZW1MaXN0KCksXHJcbiAgICAgICAgICAgIGRhdGFTZXJ2aWNlLmdldFNpdGVMaXN0KCksXHJcbiAgICAgICAgICAgIGRhdGFTZXJ2aWNlLmdldFFDVmFsdWVCeUlkKCRzdGF0ZVBhcmFtcy5pZCksXHJcbiAgICAgICAgICAgIGRhdGFTZXJ2aWNlLmdldEVtcGxveWVlTGlzdCgpXHJcbiAgICAgICAgXSkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICRzY29wZS5sYWJJdGVtTGlzdCA9IHJlc3VsdFswXS5kYXRhO1xyXG4gICAgICAgICAgICAkc2NvcGUuc2l0ZUxpc3QgPSByZXN1bHRbMV0uZGF0YTtcclxuICAgICAgICAgICAgJHNjb3BlLm1vZGVsID0gcmVzdWx0WzJdLmRhdGE7XHJcbiAgICAgICAgICAgICRzY29wZS51c2VyTGlzdCA9IHJlc3VsdFszXS5kYXRhO1xyXG4gICAgICAgICAgICBpZiAoJHNjb3BlLmxhYkl0ZW1MaXN0KSB7XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUubGFiSXRlbUxpc3QuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLmlkID09ICRzY29wZS5tb2RlbC5sbUlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5tb2RlbC5zZWxlY3RlZExhYkl0ZW0gPSBpdGVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICgkc2NvcGUuc2l0ZUxpc3QpIHtcclxuICAgICAgICAgICAgICAgICRzY29wZS5zaXRlTGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0uaWQgPT0gJHNjb3BlLm1vZGVsLm1pSWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLm1vZGVsLnNlbGVjdGVkU2l0ZSA9IGl0ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCRzY29wZS51c2VyTGlzdCkge1xyXG4gICAgICAgICAgICAgICAgaWYoJHNjb3BlLm1vZGVsLnNlbGVjdGVkU2l0ZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmZpbHRlclVzZXJMaXN0ID0gJHNjb3BlLnVzZXJMaXN0LmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbS5taU5hbWUgPT0gJHNjb3BlLm1vZGVsLnNlbGVjdGVkU2l0ZS5taU5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuZmlsdGVyVXNlckxpc3QuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLmlkID09ICRzY29wZS5tb2RlbC5xY2VyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5tb2RlbC5zZWxlY3RlZFFjZXIgPSBpdGVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGlmKCRzY29wZS5tb2RlbC5xY1RpbWUpe1xyXG4gICAgICAgICAgICAvLyAgICAgJHNjb3BlLm1vZGVsLnFjVGltZT1uZXcgRGF0ZSgkc2NvcGUubW9kZWwucWNUaW1lKTtcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBkYXRhU2VydmljZS5nZXRsYWJpdGVtTGlzdCgpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAkc2NvcGUubGFiSXRlbUxpc3QgPSByZXN1bHQuZGF0YTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBkYXRhU2VydmljZS5nZXRTaXRlTGlzdCgpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAkc2NvcGUuc2l0ZUxpc3QgPSByZXN1bHQuZGF0YTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBkYXRhU2VydmljZS5nZXRFbXBsb3llZUxpc3QoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCl7XHJcbiAgICAgICAgICAgICRzY29wZS51c2VyTGlzdCA9IHJlc3VsdC5kYXRhO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgICRzY29wZS5zZWxlY3RTaXRlID0gZnVuY3Rpb24gKG1vZGVsKSB7XHJcbiAgICAgICAgJHNjb3BlLmZpbHRlclVzZXJMaXN0ID0gJHNjb3BlLnVzZXJMaXN0LmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgICAgICByZXR1cm4gaXRlbS5taU5hbWUgPT0gbW9kZWwubWlOYW1lO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICRzY29wZS5tb2RlbC5zZWxlY3RlZFFjZXIgPSBudWxsO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuc3VibWl0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coJHNjb3BlLm1vZGVsKTtcclxuICAgICAgICBpZiAoJHNjb3BlLm1vZGVsLnNlbGVjdGVkTGFiSXRlbSkge1xyXG4gICAgICAgICAgICAkc2NvcGUubW9kZWwubG1JZCA9ICRzY29wZS5tb2RlbC5zZWxlY3RlZExhYkl0ZW0uaWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICgkc2NvcGUubW9kZWwuc2VsZWN0ZWRTaXRlKSB7XHJcbiAgICAgICAgICAgICRzY29wZS5tb2RlbC5taUlkID0gJHNjb3BlLm1vZGVsLnNlbGVjdGVkU2l0ZS5pZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCRzY29wZS5tb2RlbC5zZWxlY3RlZFFjZXIpIHtcclxuICAgICAgICAgICAgJHNjb3BlLm1vZGVsLnFjZXIgPSAkc2NvcGUubW9kZWwuc2VsZWN0ZWRRY2VyLmlkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkYXRhU2VydmljZS5zYXZlUUNWYWx1ZSgkc2NvcGUubW9kZWwpLnRoZW4oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkc3RhdGUuZ28oJ2FwcC5xY3ZhbHVlJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxufV0pOyIsImFwcC5jb250cm9sbGVyKCdSZXF1ZXN0TGlzdEN0cmwnLCBbJyRzY29wZScsICckbW9kYWwnLCAnJHN0YXRlJywgJ2RhdGFTZXJ2aWNlJywgJ3V0aWwnLCBmdW5jdGlvbiAoJHNjb3BlLCAkbW9kYWwsICRzdGF0ZSwgZGF0YVNlcnZpY2UsIHV0aWwpIHtcclxuICAgICRzY29wZS5tb2RlbCA9IHtcclxuICAgICAgICBmaWx0ZXJWYWx1ZTogbnVsbCxcclxuICAgICAgICBzdGFydFRpbWU6IG5ldyBEYXRlKCksXHJcbiAgICAgICAgZW5kVGltZTogbmV3IERhdGUoKSxcclxuICAgICAgICBzdGFydE9wZW5lZDogZmFsc2UsXHJcbiAgICAgICAgZW5kT3BlbmVkOiBmYWxzZSxcclxuICAgICAgICBzZWxlY3RlZFNpdGU6IG51bGxcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmRhdGVPcHRpb25zID0ge1xyXG4gICAgICAgIGZvcm1hdFllYXI6ICd5eScsXHJcbiAgICAgICAgc3RhcnRpbmdEYXk6IDEsXHJcbiAgICAgICAgY2xhc3M6ICdkYXRlcGlja2VyJ1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuc3RhcnRPcGVuID0gZnVuY3Rpb24gKCRldmVudCkge1xyXG4gICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAkc2NvcGUubW9kZWwuc3RhcnRPcGVuZWQgPSB0cnVlO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuZW5kT3BlbiA9IGZ1bmN0aW9uICgkZXZlbnQpIHtcclxuICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgJHNjb3BlLm1vZGVsLmVuZE9wZW5lZCA9IHRydWU7XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciB0cGwgPSAnPGRpdiBuZy1oaWRlPVwicm93LmVudGl0eS5yZVN0YXR1cyE9MVwiPjxidXR0b24gY2xhc3M9XCJidG4gZ3JpZC1idG4gYnRuLXN1Y2Nlc3NcIiBuZy1jbGljaz1cImdyaWQuYXBwU2NvcGUuYWNjZXB0KHJvdy5lbnRpdHkpXCI+5o6l5Y+XPC9idXR0b24+PGJ1dHRvbiBjbGFzcz1cImJ0biBncmlkLWJ0biBsZWZ0LXNwYWNlIGJ0bi1kYW5nZXJcIiBuZy1jbGljaz1cImdyaWQuYXBwU2NvcGUucmVqZWN0KHJvdy5lbnRpdHkpXCI+5ouS57udPC9idXR0b24+PC9kaXY+JztcclxuICAgIHZhciBvdGhlclRwbCA9ICc8YSBjbGFzcz1cImVkaXQtdHBsXCIgdWktc3JlZj1cImFwcC5yZXF1ZXN0X2RldGFpbCh7aWQ6IHJvdy5lbnRpdHkuaWR9KVwiPuivpuaDhTwvYT4nO1xyXG4gICAgJHNjb3BlLmdyaWRPcHRpb25zID0ge1xyXG4gICAgICAgIGVuYWJsZUZpbHRlcmluZzogZmFsc2UsXHJcbiAgICAgICAgb25SZWdpc3RlckFwaTogZnVuY3Rpb24gKGdyaWRBcGkpIHtcclxuICAgICAgICAgICAgJHNjb3BlLmdyaWRBcGkgPSBncmlkQXBpO1xyXG4gICAgICAgICAgICAvLyRzY29wZS5ncmlkQXBpLmdyaWQucmVnaXN0ZXJSb3dzUHJvY2Vzc29yKCRzY29wZS5maWx0ZXIsIDIwMCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb2x1bW5EZWZzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiAnaWQnLFxyXG4gICAgICAgICAgICAgICAgdmlzaWJsZTogZmFsc2VcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQ6ICdyZXF1ZXN0Tm8nLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICfnlLPor7fljZXlj7cnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiAncGF0aWVudC5wdE5hbWUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICfnl4XkurrlkI3lrZcnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiAnbWlOYW1lJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAn5py65p6E5ZCN56ewJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogJ2Zvcm1hdGVkUmVxVGltZScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogJ+eUs+ivt+aXtumXtCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQ6ICdyZVN0YXR1c05hbWUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICfnlLPor7fljZXnirbmgIEnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdlZGl0JyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAn5pON5L2cJyxcclxuICAgICAgICAgICAgICAgIGNlbGxUZW1wbGF0ZTogdHBsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdvdGhlcicsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogJ+WFtuS7licsXHJcbiAgICAgICAgICAgICAgICBjZWxsVGVtcGxhdGU6IG90aGVyVHBsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBtaUlkID0gbnVsbDtcclxuICAgICAgICBpZiAoJHNjb3BlLm1vZGVsLnNlbGVjdGVkU2l0ZSkge1xyXG4gICAgICAgICAgICBtaUlkID0gJHNjb3BlLm1vZGVsLnNlbGVjdGVkU2l0ZS5pZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGF0YVNlcnZpY2UuZ2V0UmVxdWVzdExpc3QoJHNjb3BlLm1vZGVsLmZpbHRlclZhbHVlLCB1dGlsLmZvcm1hdGVEYXRlKCRzY29wZS5tb2RlbC5zdGFydFRpbWUpLCB1dGlsLmZvcm1hdGVEYXRlKCRzY29wZS5tb2RlbC5lbmRUaW1lKSwgbWlJZCkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIHJlc3VsdC5kYXRhLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0uZm9ybWF0ZWRSZXFUaW1lID0gdXRpbC5mb3JtYXRlRGF0ZShpdGVtLnJlcVRpbWUpO1xyXG4gICAgICAgICAgICAgICAgaXRlbS5yZVN0YXR1c05hbWUgPSB1dGlsLmdldFJlcXVlc3RTdGF0dXMoaXRlbS5yZVN0YXR1cyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgJHNjb3BlLmdyaWRPcHRpb25zLmRhdGEgPSByZXN1bHQuZGF0YTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnNlYXJjaCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyRzY29wZS5ncmlkQXBpLmdyaWQucmVmcmVzaCgpO1xyXG4gICAgICAgICRzY29wZS5ncmlkT3B0aW9ucy5kYXRhID0gbnVsbDtcclxuICAgICAgICAkc2NvcGUubG9hZCgpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuZmlsdGVyID0gZnVuY3Rpb24gKHJlbmRlcmFibGVSb3dzKSB7XHJcbiAgICAgICAgdmFyIG1hdGNoZXIgPSBuZXcgUmVnRXhwKCRzY29wZS5tb2RlbC5maWx0ZXJWYWx1ZSk7XHJcbiAgICAgICAgcmVuZGVyYWJsZVJvd3MuZm9yRWFjaChmdW5jdGlvbiAocm93KSB7XHJcbiAgICAgICAgICAgIHZhciBtYXRjaCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBbJ3JlcXVlc3RObycsICdwYXRpZW50LnB0TmFtZScsICdtaU5hbWUnLCAncmVTdGF0dXNOYW1lJ10uZm9yRWFjaChmdW5jdGlvbiAoZmllbGQpIHtcclxuICAgICAgICAgICAgICAgIHZhciBlbnRpdHkgPSByb3cuZW50aXR5O1xyXG4gICAgICAgICAgICAgICAgZmllbGQuc3BsaXQoJy4nKS5mb3JFYWNoKGZ1bmN0aW9uIChmKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVudGl0eVtmXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHkgPSBlbnRpdHlbZl07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBlbnRpdHkgPSBlbnRpdHkgKyAnJztcclxuICAgICAgICAgICAgICAgIGlmICgkc2NvcGUubW9kZWwuZmlsdGVyVmFsdWUgJiYgZW50aXR5Lm1hdGNoKG1hdGNoZXIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF0Y2ggPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICgkc2NvcGUubW9kZWwuZmlsdGVyVmFsdWUgPT0gbnVsbCB8fCAkc2NvcGUubW9kZWwuZmlsdGVyVmFsdWUgPT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXRjaCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdmFyIHRpbWUgPSByb3cuZW50aXR5Wydmb3JtYXRlZFJlcVRpbWUnXTtcclxuICAgICAgICAgICAgdmFyIGN1cnJlbnQgPSB0aW1lID8gbmV3IERhdGUodGltZSkuZ2V0VGltZSgpIDogbnVsbDtcclxuXHJcbiAgICAgICAgICAgIGlmICgkc2NvcGUubW9kZWwuc3RhcnRUaW1lICYmIGN1cnJlbnQpIHtcclxuICAgICAgICAgICAgICAgIHZhciBzdGFydCA9IG5ldyBEYXRlKCRzY29wZS5tb2RlbC5zdGFydFRpbWUpLmdldFRpbWUoKTtcclxuICAgICAgICAgICAgICAgIGlmIChzdGFydCA+IGN1cnJlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXRjaCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICgkc2NvcGUubW9kZWwuZW5kVGltZSAmJiBjdXJyZW50KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZW5kID0gbmV3IERhdGUoJHNjb3BlLm1vZGVsLmVuZFRpbWUpLmdldFRpbWUoKTtcclxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50ID4gZW5kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF0Y2ggPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCgkc2NvcGUubW9kZWwuc3RhcnRUaW1lIHx8ICRzY29wZS5tb2RlbC5lbmRUaW1lKSAmJiAhY3VycmVudCkge1xyXG4gICAgICAgICAgICAgICAgbWF0Y2ggPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICBpZiAoIW1hdGNoKSB7XHJcbiAgICAgICAgICAgICAgICByb3cudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHJlbmRlcmFibGVSb3dzO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuYWNjZXB0ID0gZnVuY3Rpb24gKG9iaikge1xyXG4gICAgICAgIGRhdGFTZXJ2aWNlLmFjY2VwdFJlcXVlc3Qob2JqKS50aGVuKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJHNjb3BlLmxvYWQoKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnJlamVjdCA9IGZ1bmN0aW9uIChvYmopIHtcclxuICAgICAgICAkc2NvcGUubW9kYWxJbnN0YW5jZSA9ICRtb2RhbC5vcGVuKHtcclxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICcvYXBwL3RwbC9kaWFsb2cvcmVqZWN0X2RpYWxvZy5odG1sJyxcclxuICAgICAgICAgICAgY29udHJvbGxlcjogJ1JlamVjdERpYWxvZ0N0cmwnLFxyXG4gICAgICAgICAgICBzaXplOiAnbGcnLFxyXG4gICAgICAgICAgICByZXNvbHZlOiB7XHJcbiAgICAgICAgICAgICAgICBkYXRhOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9iajtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBncmlkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVsb2FkOiAkc2NvcGUubG9hZFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcblxyXG4gICAgJHNjb3BlLnNpdGVMaXN0ID0gbnVsbDtcclxuXHJcbiAgICBkYXRhU2VydmljZS5nZXRTaXRlTGlzdCgpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICRzY29wZS5zaXRlTGlzdCA9IHJlc3VsdC5kYXRhO1xyXG4gICAgfSk7XHJcblxyXG59XSk7XHJcblxyXG5cclxuYXBwLmNvbnRyb2xsZXIoJ1JlamVjdERpYWxvZ0N0cmwnLCBbJyRzY29wZScsICckbW9kYWxJbnN0YW5jZScsICdkYXRhU2VydmljZScsICdkYXRhJywgJ2dyaWQnLCBmdW5jdGlvbiAoJHNjb3BlLCAkbW9kYWxJbnN0YW5jZSwgZGF0YVNlcnZpY2UsIGRhdGEsIGdyaWQpIHtcclxuICAgICRzY29wZS5yZWplY3RSZWFzb24gPSBudWxsO1xyXG5cclxuICAgICRzY29wZS5kaWFsb2dTdWJtaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKGRhdGEpIHtcclxuICAgICAgICAgICAgZGF0YS5yZWplY3RSZWFzb24gPSAkc2NvcGUucmVqZWN0UmVhc29uO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkYXRhU2VydmljZS5yZWplY3RSZXFldXN0KGRhdGEpLnRoZW4oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBncmlkLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAkbW9kYWxJbnN0YW5jZS5jbG9zZSgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH07XHJcbn1dKTtcclxuXHJcbmFwcC5jb250cm9sbGVyKCdSZXF1ZXN0RGV0YWlsQ3RybCcsIFsnJHNjb3BlJywgJyRzdGF0ZScsICckc3RhdGVQYXJhbXMnLCAnZGF0YVNlcnZpY2UnLCAndXRpbCcsIGZ1bmN0aW9uICgkc2NvcGUsICRzdGF0ZSwgJHN0YXRlUGFyYW1zLCBkYXRhU2VydmljZSwgdXRpbCkge1xyXG5cclxuXHJcbiAgICBpZiAoJHN0YXRlUGFyYW1zLmlkKSB7XHJcbiAgICAgICAgZGF0YVNlcnZpY2UuZ2V0UmVxdWVzdEJ5SWQoJHN0YXRlUGFyYW1zLmlkKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5kYXRhKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQuZGF0YS5yZXFUaW1lID0gdXRpbC5mb3JtYXRlRGF0ZShyZXN1bHQuZGF0YS5yZXFUaW1lKTtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5kYXRhLnJlU3RhdHVzTmFtZSA9IHV0aWwuZ2V0UmVxdWVzdFN0YXR1cyhyZXN1bHQuZGF0YS5yZVN0YXR1cyk7XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUubW9kZWwgPSByZXN1bHQuZGF0YTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoJHNjb3BlLm1vZGVsLmxhYkluZm9zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLm1vZGVsLmxhYkluZm9zLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0ubGFiU2FtcGxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5sYWJTYW1wbGUubG9naXN0aWNzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5sYWJTYW1wbGUubG9naXN0aWNzLmxzU3RhdHVzTmFtZSA9IHV0aWwuZ2V0TG9naXN0aWNzU3RhdHVzKGl0ZW0ubGFiU2FtcGxlLmxvZ2lzdGljcy5sc1N0YXR1cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5sYWJTYW1wbGUubG9naXN0aWNzLnNlbmRUaW1lRm9ybWF0ZSA9IHV0aWwuZm9ybWF0ZURhdGUoaXRlbS5sYWJTYW1wbGUubG9naXN0aWNzLnNlbmRUaW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmxhYlNhbXBsZS5sb2dpc3RpY3MuY2VudGVyUmVjZWl2ZVRpbWVGb3JtYXRlID0gdXRpbC5mb3JtYXRlRGF0ZShpdGVtLmxhYlNhbXBsZS5sb2dpc3RpY3MuY2VudGVyUmVjZWl2ZVRpbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ubGFiU2FtcGxlLmxvZ2lzdGljcy5sc1JlY2VpdmVUaW1lRm9ybWF0ZSA9IHV0aWwuZm9ybWF0ZURhdGUoaXRlbS5sYWJTYW1wbGUubG9naXN0aWNzLmxzUmVjZWl2ZVRpbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufV0pOyIsImFwcC5jb250cm9sbGVyKCdTYW1wbGVUeXBlTGlzdEN0cmwnLCBbJyRzY29wZScsICckc3RhdGUnLCAnZGF0YVNlcnZpY2UnLCBmdW5jdGlvbiAoJHNjb3BlLCAkc3RhdGUsIGRhdGFTZXJ2aWNlKSB7XHJcblxyXG4gICAgdmFyIGxpbmsgPSAnYXBwLnNhbXBsZXR5cGVfZGV0YWlsJztcclxuICAgIHZhciBlZGl0VXJsID0gJzxhIGNsYXNzPVwiZWRpdC10cGxcIiB1aS1zcmVmPVwiJyArIGxpbmsgKyAnKHtpZDogcm93LmVudGl0eS5pZH0pXCI+57yW6L6RPC9hPic7XHJcbiAgICBlZGl0VXJsICs9ICc8YSBjbGFzcz1cImRlbGV0ZS10cGxcIiBuZy1jbGljaz1cImdyaWQuYXBwU2NvcGUuZGVsZXRlKHJvdy5lbnRpdHkpXCI+5Yig6ZmkPC9hPic7XHJcblxyXG4gICAgJHNjb3BlLmdyaWRPcHRpb25zID0ge1xyXG4gICAgICAgIGVuYWJsZUZpbHRlcmluZzogZmFsc2UsXHJcbiAgICAgICAgb25SZWdpc3RlckFwaTogZnVuY3Rpb24gKGdyaWRBcGkpIHtcclxuICAgICAgICAgICAgJHNjb3BlLmdyaWRBcGkgPSBncmlkQXBpO1xyXG4gICAgICAgICAgICAkc2NvcGUuZ3JpZEFwaS5ncmlkLnJlZ2lzdGVyUm93c1Byb2Nlc3Nvcigkc2NvcGUuZmlsdGVyLCAyMDApO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29sdW1uRGVmczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogJ2lkJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAnSWQnLFxyXG4gICAgICAgICAgICAgICAgdmlzaWJsZTogZmFsc2VcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQ6ICdjb2RlJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAn57yW56CBJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogJ2NodE5hbWUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICfkuK3mloflkI3np7AnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiAnZW5nTmFtZScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogJ+iLseaWh+WQjeensCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQ6ICdzZXFObycsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogJ+aOkuW6j+WPtydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ2VkaXQnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICfmk43kvZwnLFxyXG4gICAgICAgICAgICAgICAgY2VsbFRlbXBsYXRlOiBlZGl0VXJsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICB9O1xyXG5cclxuICAgIGRhdGFTZXJ2aWNlLmdldFNhbXBsZVR5cGVMaXN0KCkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgJHNjb3BlLmdyaWRPcHRpb25zLmRhdGEgPSByZXN1bHQuZGF0YTtcclxuICAgIH0pO1xyXG5cclxuICAgICRzY29wZS5zZWFyY2ggPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJHNjb3BlLmdyaWRBcGkuZ3JpZC5yZWZyZXNoKCk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5jcmVhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJHN0YXRlLmdvKGxpbmspO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuZGVsZXRlID0gZnVuY3Rpb24gKG9iaikge1xyXG4gICAgICAgIGRhdGFTZXJ2aWNlLmRlbGV0ZVNhbXBsZVR5cGUob2JqKS50aGVuKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAkc2NvcGUuZ3JpZE9wdGlvbnMuZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKCRzY29wZS5ncmlkT3B0aW9ucy5kYXRhW2ldLmlkID09IG9iai5pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5ncmlkT3B0aW9ucy5kYXRhLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5maWx0ZXIgPSBmdW5jdGlvbiAocmVuZGVyYWJsZVJvd3MpIHtcclxuICAgICAgICB2YXIgbWF0Y2hlciA9IG5ldyBSZWdFeHAoJHNjb3BlLmZpbHRlclZhbHVlKTtcclxuICAgICAgICByZW5kZXJhYmxlUm93cy5mb3JFYWNoKGZ1bmN0aW9uIChyb3cpIHtcclxuICAgICAgICAgICAgdmFyIG1hdGNoID0gZmFsc2U7XHJcbiAgICAgICAgICAgIFsnY29kZScsICdjaHROYW1lJywgJ2VuZ05hbWUnLCAnc2VxTm8nXS5mb3JFYWNoKGZ1bmN0aW9uIChmaWVsZCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGVudGl0eSA9IHJvdy5lbnRpdHlbZmllbGRdICsgJyc7XHJcbiAgICAgICAgICAgICAgICBpZiAoZW50aXR5Lm1hdGNoKG1hdGNoZXIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF0Y2ggPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYgKCFtYXRjaCkge1xyXG4gICAgICAgICAgICAgICAgcm93LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiByZW5kZXJhYmxlUm93cztcclxuICAgIH07XHJcbn1dKTtcclxuXHJcbmFwcC5jb250cm9sbGVyKCdTYW1wbGVUeXBlRGV0YWlsQ3RybCcsIFsnJHNjb3BlJywgJyRzdGF0ZScsICckc3RhdGVQYXJhbXMnLCAnZGF0YVNlcnZpY2UnLCBmdW5jdGlvbiAoJHNjb3BlLCAkc3RhdGUsICRzdGF0ZVBhcmFtcywgZGF0YVNlcnZpY2UpIHtcclxuXHJcbiAgICAkc2NvcGUubW9kZWwgPSB7XHJcbiAgICAgICAgaWQ6IG51bGwsXHJcbiAgICAgICAgcGFyZW50SWQ6IG51bGwsXHJcbiAgICAgICAgY29kZTogbnVsbCxcclxuICAgICAgICBjaHROYW1lOiBudWxsLFxyXG4gICAgICAgIGVuZ05hbWU6IG51bGwsXHJcbiAgICAgICAgc2VxTm86IG51bGwsXHJcbiAgICAgICAgaGVscENvZGU6IG51bGxcclxuICAgIH07XHJcblxyXG4gICAgaWYgKCRzdGF0ZVBhcmFtcy5pZCkge1xyXG4gICAgICAgIGRhdGFTZXJ2aWNlLmdldFNhbXBsZVR5cGVCeUlkKCRzdGF0ZVBhcmFtcy5pZCkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQuZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLm1vZGVsID0gcmVzdWx0LmRhdGE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgJHNjb3BlLnN1Ym1pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygkc2NvcGUubW9kZWwpO1xyXG4gICAgICAgIGRhdGFTZXJ2aWNlLnNhdmVTYW1wbGVUeXBlKCRzY29wZS5tb2RlbCkudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICRzdGF0ZS5nbygnYXBwLnNhbXBsZXR5cGUnKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG59XSk7IiwiYXBwLmNvbnRyb2xsZXIoJ1VzZXJDdHJsJywgWyckc2NvcGUnLCAnJG1vZGFsJywgJyRzdGF0ZScsICdkYXRhU2VydmljZScsICd1dGlsJywgJ3N0b3JhZ2UnLCBmdW5jdGlvbiAoJHNjb3BlLCAkbW9kYWwsICRzdGF0ZSwgZGF0YVNlcnZpY2UsIHV0aWwsIHN0b3JhZ2UpIHtcclxuXHJcbiAgICAkc2NvcGUubW9kZWwgPSB7XHJcbiAgICAgICAgdXNlck5hbWU6IG51bGwsXHJcbiAgICAgICAgcGFzc3dvcmQ6IG51bGwsXHJcbiAgICAgICAgZXJyTWVzc2FnZTogbnVsbCxcclxuICAgICAgICBvbGRfcGFzc3dvcmQ6IG51bGwsXHJcbiAgICAgICAgbmV3X3Bhc3N3b3JkOiBudWxsXHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5sb2dpbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoJHNjb3BlLm1vZGVsLnVzZXJOYW1lICYmICRzY29wZS5tb2RlbC5wYXNzd29yZCkge1xyXG4gICAgICAgICAgICBkYXRhU2VydmljZS5sb2dpbigkc2NvcGUubW9kZWwudXNlck5hbWUsICRzY29wZS5tb2RlbC5wYXNzd29yZCkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmRhdGEgJiYgcmVzdWx0LmRhdGEudG9rZW4pIHtcclxuICAgICAgICAgICAgICAgICAgICBzdG9yYWdlLnNldFRva2VuQW5kVXNlcihyZXN1bHQuZGF0YS50b2tlbiwgcmVzdWx0LmRhdGEudXNlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgJHN0YXRlLmdvKCdhcHAucmVxdWVzdCcpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5tb2RlbC5lcnJNZXNzYWdlID0gcmVzdWx0LmRhdGEubWVzc2FnZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuY2hhbmdlcHdkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciB1c2VyID0gc3RvcmFnZS5nZXRVc2VyKCk7XHJcbiAgICAgICAgZGF0YVNlcnZpY2UuY2hhbmdlcHdkKHVzZXIuaWQsICRzY29wZS5tb2RlbC5vbGRfcGFzc3dvcmQsICRzY29wZS5tb2RlbC5uZXdfcGFzc3dvcmQpLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgJHN0YXRlLmdvKCdhcHAucmVxdWVzdCcpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChzZXNzaW9uU3RvcmFnZS5hdXRvbG9naW4pIHtcclxuICAgICAgICAkc2NvcGUuYXV0b2xvZ2luID0gdHJ1ZTtcclxuICAgICAgICAkc2NvcGUubW9kZWwudXNlck5hbWUgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd1c2VyTmFtZScpO1xyXG4gICAgICAgICRzY29wZS5tb2RlbC5wYXNzd29yZCA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3Bhc3N3b3JkJyk7XHJcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSgndXNlck5hbWUnKTtcclxuICAgICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKCdwYXNzd29yZCcpO1xyXG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oJ2F1dG9sb2dpbicpO1xyXG4gICAgICAgICRzY29wZS5sb2dpbigpO1xyXG4gICAgfVxyXG59XSk7IiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbiAgLmRpcmVjdGl2ZSgnc2V0TmdBbmltYXRlJywgWyckYW5pbWF0ZScsIGZ1bmN0aW9uICgkYW5pbWF0ZSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBsaW5rOiBmdW5jdGlvbiAoJHNjb3BlLCAkZWxlbWVudCwgJGF0dHJzKSB7XHJcbiAgICAgICAgICAgICRzY29wZS4kd2F0Y2goIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICRzY29wZS4kZXZhbCgkYXR0cnMuc2V0TmdBbmltYXRlLCAkc2NvcGUpO1xyXG4gICAgICAgICAgICB9LCBmdW5jdGlvbih2YWxuZXcsIHZhbG9sZCl7XHJcbiAgICAgICAgICAgICAgICAkYW5pbWF0ZS5lbmFibGVkKCEhdmFsbmV3LCAkZWxlbWVudCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgfV0pOyIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4gIC5kaXJlY3RpdmUoJ3VpQnV0dGVyYmFyJywgWyckcm9vdFNjb3BlJywgJyRhbmNob3JTY3JvbGwnLCBmdW5jdGlvbigkcm9vdFNjb3BlLCAkYW5jaG9yU2Nyb2xsKSB7XHJcbiAgICAgcmV0dXJuIHtcclxuICAgICAgcmVzdHJpY3Q6ICdBQycsXHJcbiAgICAgIHRlbXBsYXRlOic8c3BhbiBjbGFzcz1cImJhclwiPjwvc3Bhbj4nLFxyXG4gICAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWwsIGF0dHJzKSB7ICAgICAgICBcclxuICAgICAgICBlbC5hZGRDbGFzcygnYnV0dGVyYmFyIGhpZGUnKTtcclxuICAgICAgICBzY29wZS4kb24oJyRzdGF0ZUNoYW5nZVN0YXJ0JywgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICAgICRhbmNob3JTY3JvbGwoKTtcclxuICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdoaWRlJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNjb3BlLiRvbignJHN0YXRlQ2hhbmdlU3VjY2VzcycsIGZ1bmN0aW9uKCBldmVudCwgdG9TdGF0ZSwgdG9QYXJhbXMsIGZyb21TdGF0ZSApIHtcclxuICAgICAgICAgIGV2ZW50LnRhcmdldFNjb3BlLiR3YXRjaCgnJHZpZXdDb250ZW50TG9hZGVkJywgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgZWwuYWRkQ2xhc3MoJ2hpZGUnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgfTtcclxuICB9XSk7IiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbiAgLmRpcmVjdGl2ZSgndWlGb2N1cycsIGZ1bmN0aW9uKCR0aW1lb3V0LCAkcGFyc2UpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbGVtZW50LCBhdHRyKSB7XHJcbiAgICAgICAgdmFyIG1vZGVsID0gJHBhcnNlKGF0dHIudWlGb2N1cyk7XHJcbiAgICAgICAgJHRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICBlbGVtZW50WzBdLmZvY3VzKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2NvcGUuJHdhdGNoKG1vZGVsLCBmdW5jdGlvbih2YWx1ZSkge1xyXG4gICAgICAgICAgaWYodmFsdWUpIHtcclxuICAgICAgICAgICAgJHRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgZWxlbWVudFswXS5mb2N1cygpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBlbGVtZW50LmJpbmQoJ2JsdXInLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAvL3Njb3BlLiRhcHBseShtb2RlbC5hc3NpZ24oc2NvcGUsIGZhbHNlKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfSk7IiwiIGFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4gIC5kaXJlY3RpdmUoJ3VpRnVsbHNjcmVlbicsIFsndWlMb2FkJywgJyRkb2N1bWVudCcsICckd2luZG93JywgZnVuY3Rpb24odWlMb2FkLCAkZG9jdW1lbnQsICR3aW5kb3cpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHJlc3RyaWN0OiAnQUMnLFxyXG4gICAgICB0ZW1wbGF0ZTonPGkgY2xhc3M9XCJmYSBmYS1leHBhbmQgZmEtZncgdGV4dFwiPjwvaT48aSBjbGFzcz1cImZhIGZhLWNvbXByZXNzIGZhLWZ3IHRleHQtYWN0aXZlXCI+PC9pPicsXHJcbiAgICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbCwgYXR0cikge1xyXG4gICAgICAgIGVsLmFkZENsYXNzKCdoaWRlJyk7XHJcbiAgICAgICAgdWlMb2FkLmxvYWQoJ3ZlbmRvci9saWJzL3NjcmVlbmZ1bGwubWluLmpzJykudGhlbihmdW5jdGlvbigpe1xyXG4gICAgICAgICAgLy8gZGlzYWJsZSBvbiBpZTExXHJcbiAgICAgICAgICBpZiAoc2NyZWVuZnVsbC5lbmFibGVkICYmICFuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9UcmlkZW50LipydjoxMVxcLi8pKSB7XHJcbiAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdoaWRlJyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlbC5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICB2YXIgdGFyZ2V0O1xyXG4gICAgICAgICAgICBhdHRyLnRhcmdldCAmJiAoIHRhcmdldCA9ICQoYXR0ci50YXJnZXQpWzBdICk7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHNjcmVlbmZ1bGwudG9nZ2xlKHRhcmdldCk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgICRkb2N1bWVudC5vbihzY3JlZW5mdWxsLnJhdy5mdWxsc2NyZWVuY2hhbmdlLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmKHNjcmVlbmZ1bGwuaXNGdWxsc2NyZWVuKXtcclxuICAgICAgICAgICAgICBlbC5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfV0pOyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbi8qKlxyXG4gKiAwLjEuMVxyXG4gKiBHZW5lcmFsLXB1cnBvc2UgalF1ZXJ5IHdyYXBwZXIuIFNpbXBseSBwYXNzIHRoZSBwbHVnaW4gbmFtZSBhcyB0aGUgZXhwcmVzc2lvbi5cclxuICpcclxuICogSXQgaXMgcG9zc2libGUgdG8gc3BlY2lmeSBhIGRlZmF1bHQgc2V0IG9mIHBhcmFtZXRlcnMgZm9yIGVhY2ggalF1ZXJ5IHBsdWdpbi5cclxuICogVW5kZXIgdGhlIGpxIGtleSwgbmFtZXNwYWNlIGVhY2ggcGx1Z2luIGJ5IHRoYXQgd2hpY2ggd2lsbCBiZSBwYXNzZWQgdG8gdWktanEuXHJcbiAqIFVuZm9ydHVuYXRlbHksIGF0IHRoaXMgdGltZSB5b3UgY2FuIG9ubHkgcHJlLWRlZmluZSB0aGUgZmlyc3QgcGFyYW1ldGVyLlxyXG4gKiBAZXhhbXBsZSB7IGpxIDogeyBkYXRlcGlja2VyIDogeyBzaG93T246J2NsaWNrJyB9IH0gfVxyXG4gKlxyXG4gKiBAcGFyYW0gdWktanEge3N0cmluZ30gVGhlICRlbG0uW3BsdWdpbk5hbWVdKCkgdG8gY2FsbC5cclxuICogQHBhcmFtIFt1aS1vcHRpb25zXSB7bWl4ZWR9IEV4cHJlc3Npb24gdG8gYmUgZXZhbHVhdGVkIGFuZCBwYXNzZWQgYXMgb3B0aW9ucyB0byB0aGUgZnVuY3Rpb25cclxuICogICAgIE11bHRpcGxlIHBhcmFtZXRlcnMgY2FuIGJlIHNlcGFyYXRlZCBieSBjb21tYXNcclxuICogQHBhcmFtIFt1aS1yZWZyZXNoXSB7ZXhwcmVzc2lvbn0gV2F0Y2ggZXhwcmVzc2lvbiBhbmQgcmVmaXJlIHBsdWdpbiBvbiBjaGFuZ2VzXHJcbiAqXHJcbiAqIEBleGFtcGxlIDxpbnB1dCB1aS1qcT1cImRhdGVwaWNrZXJcIiB1aS1vcHRpb25zPVwie3Nob3dPbjonY2xpY2snfSxzZWNvbmRQYXJhbWV0ZXIsdGhpcmRQYXJhbWV0ZXJcIiB1aS1yZWZyZXNoPVwiaUNoYW5nZVwiPlxyXG4gKi9cclxuYW5ndWxhci5tb2R1bGUoJ3VpLmpxJywgWyd1aS5sb2FkJ10pLlxyXG4gIHZhbHVlKCd1aUpxQ29uZmlnJywge30pLlxyXG4gIGRpcmVjdGl2ZSgndWlKcScsIFsndWlKcUNvbmZpZycsICdKUV9DT05GSUcnLCAndWlMb2FkJywgJyR0aW1lb3V0JywgZnVuY3Rpb24gdWlKcUluamVjdGluZ0Z1bmN0aW9uKHVpSnFDb25maWcsIEpRX0NPTkZJRywgdWlMb2FkLCAkdGltZW91dCkge1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcmVzdHJpY3Q6ICdBJyxcclxuICAgIGNvbXBpbGU6IGZ1bmN0aW9uIHVpSnFDb21waWxpbmdGdW5jdGlvbih0RWxtLCB0QXR0cnMpIHtcclxuXHJcbiAgICAgIGlmICghYW5ndWxhci5pc0Z1bmN0aW9uKHRFbG1bdEF0dHJzLnVpSnFdKSAmJiAhSlFfQ09ORklHW3RBdHRycy51aUpxXSkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcigndWktanE6IFRoZSBcIicgKyB0QXR0cnMudWlKcSArICdcIiBmdW5jdGlvbiBkb2VzIG5vdCBleGlzdCcpO1xyXG4gICAgICB9XHJcbiAgICAgIHZhciBvcHRpb25zID0gdWlKcUNvbmZpZyAmJiB1aUpxQ29uZmlnW3RBdHRycy51aUpxXTtcclxuXHJcbiAgICAgIHJldHVybiBmdW5jdGlvbiB1aUpxTGlua2luZ0Z1bmN0aW9uKHNjb3BlLCBlbG0sIGF0dHJzKSB7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGdldE9wdGlvbnMoKXtcclxuICAgICAgICAgIHZhciBsaW5rT3B0aW9ucyA9IFtdO1xyXG5cclxuICAgICAgICAgIC8vIElmIHVpLW9wdGlvbnMgYXJlIHBhc3NlZCwgbWVyZ2UgKG9yIG92ZXJyaWRlKSB0aGVtIG9udG8gZ2xvYmFsIGRlZmF1bHRzIGFuZCBwYXNzIHRvIHRoZSBqUXVlcnkgbWV0aG9kXHJcbiAgICAgICAgICBpZiAoYXR0cnMudWlPcHRpb25zKSB7XHJcbiAgICAgICAgICAgIGxpbmtPcHRpb25zID0gc2NvcGUuJGV2YWwoJ1snICsgYXR0cnMudWlPcHRpb25zICsgJ10nKTtcclxuICAgICAgICAgICAgaWYgKGFuZ3VsYXIuaXNPYmplY3Qob3B0aW9ucykgJiYgYW5ndWxhci5pc09iamVjdChsaW5rT3B0aW9uc1swXSkpIHtcclxuICAgICAgICAgICAgICBsaW5rT3B0aW9uc1swXSA9IGFuZ3VsYXIuZXh0ZW5kKHt9LCBvcHRpb25zLCBsaW5rT3B0aW9uc1swXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gZWxzZSBpZiAob3B0aW9ucykge1xyXG4gICAgICAgICAgICBsaW5rT3B0aW9ucyA9IFtvcHRpb25zXTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiBsaW5rT3B0aW9ucztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIElmIGNoYW5nZSBjb21wYXRpYmlsaXR5IGlzIGVuYWJsZWQsIHRoZSBmb3JtIGlucHV0J3MgXCJjaGFuZ2VcIiBldmVudCB3aWxsIHRyaWdnZXIgYW4gXCJpbnB1dFwiIGV2ZW50XHJcbiAgICAgICAgaWYgKGF0dHJzLm5nTW9kZWwgJiYgZWxtLmlzKCdzZWxlY3QsaW5wdXQsdGV4dGFyZWEnKSkge1xyXG4gICAgICAgICAgZWxtLmJpbmQoJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBlbG0udHJpZ2dlcignaW5wdXQnKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQ2FsbCBqUXVlcnkgbWV0aG9kIGFuZCBwYXNzIHJlbGV2YW50IG9wdGlvbnNcclxuICAgICAgICBmdW5jdGlvbiBjYWxsUGx1Z2luKCkge1xyXG4gICAgICAgICAgJHRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGVsbVthdHRycy51aUpxXS5hcHBseShlbG0sIGdldE9wdGlvbnMoKSk7XHJcbiAgICAgICAgICB9LCAwLCBmYWxzZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiByZWZyZXNoKCl7XHJcbiAgICAgICAgICAvLyBJZiB1aS1yZWZyZXNoIGlzIHVzZWQsIHJlLWZpcmUgdGhlIHRoZSBtZXRob2QgdXBvbiBldmVyeSBjaGFuZ2VcclxuICAgICAgICAgIGlmIChhdHRycy51aVJlZnJlc2gpIHtcclxuICAgICAgICAgICAgc2NvcGUuJHdhdGNoKGF0dHJzLnVpUmVmcmVzaCwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgY2FsbFBsdWdpbigpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICggSlFfQ09ORklHW2F0dHJzLnVpSnFdICkge1xyXG4gICAgICAgICAgdWlMb2FkLmxvYWQoSlFfQ09ORklHW2F0dHJzLnVpSnFdKS50aGVuKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBjYWxsUGx1Z2luKCk7XHJcbiAgICAgICAgICAgIHJlZnJlc2goKTtcclxuICAgICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjYWxsUGx1Z2luKCk7XHJcbiAgICAgICAgICByZWZyZXNoKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gIH07XHJcbn1dKTsiLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuICAuZGlyZWN0aXZlKCd1aU1vZHVsZScsIFsnTU9EVUxFX0NPTkZJRycsJ3VpTG9hZCcsICckY29tcGlsZScsIGZ1bmN0aW9uKE1PRFVMRV9DT05GSUcsIHVpTG9hZCwgJGNvbXBpbGUpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHJlc3RyaWN0OiAnQScsXHJcbiAgICAgIGNvbXBpbGU6IGZ1bmN0aW9uIChlbCwgYXR0cnMpIHtcclxuICAgICAgICB2YXIgY29udGVudHMgPSBlbC5jb250ZW50cygpLmNsb25lKCk7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKHNjb3BlLCBlbCwgYXR0cnMpe1xyXG4gICAgICAgICAgZWwuY29udGVudHMoKS5yZW1vdmUoKTtcclxuICAgICAgICAgIHVpTG9hZC5sb2FkKE1PRFVMRV9DT05GSUdbYXR0cnMudWlNb2R1bGVdKVxyXG4gICAgICAgICAgLnRoZW4oZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgJGNvbXBpbGUoY29udGVudHMpKHNjb3BlLCBmdW5jdGlvbihjbG9uZWRFbGVtZW50LCBzY29wZSkge1xyXG4gICAgICAgICAgICAgIGVsLmFwcGVuZChjbG9uZWRFbGVtZW50KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfV0pOyIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4gIC5kaXJlY3RpdmUoJ3VpTmF2JywgWyckdGltZW91dCcsIGZ1bmN0aW9uKCR0aW1lb3V0KSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICByZXN0cmljdDogJ0FDJyxcclxuICAgICAgbGluazogZnVuY3Rpb24oc2NvcGUsIGVsLCBhdHRyKSB7XHJcbiAgICAgICAgdmFyIF93aW5kb3cgPSAkKHdpbmRvdyksIFxyXG4gICAgICAgIF9tYiA9IDc2OCwgXHJcbiAgICAgICAgd3JhcCA9ICQoJy5hcHAtYXNpZGUnKSwgXHJcbiAgICAgICAgbmV4dCwgXHJcbiAgICAgICAgYmFja2Ryb3AgPSAnLmRyb3Bkb3duLWJhY2tkcm9wJztcclxuICAgICAgICAvLyB1bmZvbGRlZFxyXG4gICAgICAgIGVsLm9uKCdjbGljaycsICdhJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgbmV4dCAmJiBuZXh0LnRyaWdnZXIoJ21vdXNlbGVhdmUubmF2Jyk7XHJcbiAgICAgICAgICB2YXIgX3RoaXMgPSAkKHRoaXMpO1xyXG4gICAgICAgICAgX3RoaXMucGFyZW50KCkuc2libGluZ3MoIFwiLmFjdGl2ZVwiICkudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgX3RoaXMubmV4dCgpLmlzKCd1bCcpICYmICBfdGhpcy5wYXJlbnQoKS50b2dnbGVDbGFzcygnYWN0aXZlJykgJiYgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgIC8vIG1vYmlsZVxyXG4gICAgICAgICAgX3RoaXMubmV4dCgpLmlzKCd1bCcpIHx8ICggKCBfd2luZG93LndpZHRoKCkgPCBfbWIgKSAmJiAkKCcuYXBwLWFzaWRlJykucmVtb3ZlQ2xhc3MoJ3Nob3cgb2ZmLXNjcmVlbicpICk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIGZvbGRlZCAmIGZpeGVkXHJcbiAgICAgICAgZWwub24oJ21vdXNlZW50ZXInLCAnYScsIGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgbmV4dCAmJiBuZXh0LnRyaWdnZXIoJ21vdXNlbGVhdmUubmF2Jyk7XHJcbiAgICAgICAgICAkKCc+IC5uYXYnLCB3cmFwKS5yZW1vdmUoKTtcclxuICAgICAgICAgIGlmICggISQoJy5hcHAtYXNpZGUtZml4ZWQuYXBwLWFzaWRlLWZvbGRlZCcpLmxlbmd0aCB8fCAoIF93aW5kb3cud2lkdGgoKSA8IF9tYiApIHx8ICQoJy5hcHAtYXNpZGUtZG9jaycpLmxlbmd0aCkgcmV0dXJuO1xyXG4gICAgICAgICAgdmFyIF90aGlzID0gJChlLnRhcmdldClcclxuICAgICAgICAgICwgdG9wXHJcbiAgICAgICAgICAsIHdfaCA9ICQod2luZG93KS5oZWlnaHQoKVxyXG4gICAgICAgICAgLCBvZmZzZXQgPSA1MFxyXG4gICAgICAgICAgLCBtaW4gPSAxNTA7XHJcblxyXG4gICAgICAgICAgIV90aGlzLmlzKCdhJykgJiYgKF90aGlzID0gX3RoaXMuY2xvc2VzdCgnYScpKTtcclxuICAgICAgICAgIGlmKCBfdGhpcy5uZXh0KCkuaXMoJ3VsJykgKXtcclxuICAgICAgICAgICAgIG5leHQgPSBfdGhpcy5uZXh0KCk7XHJcbiAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICBcclxuICAgICAgICAgIF90aGlzLnBhcmVudCgpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgIHRvcCA9IF90aGlzLnBhcmVudCgpLnBvc2l0aW9uKCkudG9wICsgb2Zmc2V0O1xyXG4gICAgICAgICAgbmV4dC5jc3MoJ3RvcCcsIHRvcCk7XHJcbiAgICAgICAgICBpZiggdG9wICsgbmV4dC5oZWlnaHQoKSA+IHdfaCApe1xyXG4gICAgICAgICAgICBuZXh0LmNzcygnYm90dG9tJywgMCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZih0b3AgKyBtaW4gPiB3X2gpe1xyXG4gICAgICAgICAgICBuZXh0LmNzcygnYm90dG9tJywgd19oIC0gdG9wIC0gb2Zmc2V0KS5jc3MoJ3RvcCcsICdhdXRvJyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBuZXh0LmFwcGVuZFRvKHdyYXApO1xyXG5cclxuICAgICAgICAgIG5leHQub24oJ21vdXNlbGVhdmUubmF2JywgZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgICAgICQoYmFja2Ryb3ApLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICBuZXh0LmFwcGVuZFRvKF90aGlzLnBhcmVudCgpKTtcclxuICAgICAgICAgICAgbmV4dC5vZmYoJ21vdXNlbGVhdmUubmF2JykuY3NzKCd0b3AnLCAnYXV0bycpLmNzcygnYm90dG9tJywgJ2F1dG8nKTtcclxuICAgICAgICAgICAgX3RoaXMucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgJCgnLnNtYXJ0JykubGVuZ3RoICYmICQoJzxkaXYgY2xhc3M9XCJkcm9wZG93bi1iYWNrZHJvcFwiLz4nKS5pbnNlcnRBZnRlcignLmFwcC1hc2lkZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKG5leHQpe1xyXG4gICAgICAgICAgICBuZXh0ICYmIG5leHQudHJpZ2dlcignbW91c2VsZWF2ZS5uYXYnKTtcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgd3JhcC5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgbmV4dCAmJiBuZXh0LnRyaWdnZXIoJ21vdXNlbGVhdmUubmF2Jyk7XHJcbiAgICAgICAgICAkKCc+IC5uYXYnLCB3cmFwKS5yZW1vdmUoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9XSk7IiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbiAgLmRpcmVjdGl2ZSgndWlTY3JvbGwnLCBbJyRsb2NhdGlvbicsICckYW5jaG9yU2Nyb2xsJywgZnVuY3Rpb24oJGxvY2F0aW9uLCAkYW5jaG9yU2Nyb2xsKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICByZXN0cmljdDogJ0FDJyxcclxuICAgICAgbGluazogZnVuY3Rpb24oc2NvcGUsIGVsLCBhdHRyKSB7XHJcbiAgICAgICAgZWwub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgJGxvY2F0aW9uLmhhc2goYXR0ci51aVNjcm9sbCk7XHJcbiAgICAgICAgICAkYW5jaG9yU2Nyb2xsKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfV0pOyIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4gIC5kaXJlY3RpdmUoJ3VpU2hpZnQnLCBbJyR0aW1lb3V0JywgZnVuY3Rpb24oJHRpbWVvdXQpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHJlc3RyaWN0OiAnQScsXHJcbiAgICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbCwgYXR0cikge1xyXG4gICAgICAgIC8vIGdldCB0aGUgJHByZXYgb3IgJHBhcmVudCBvZiB0aGlzIGVsXHJcbiAgICAgICAgdmFyIF9lbCA9ICQoZWwpLFxyXG4gICAgICAgICAgICBfd2luZG93ID0gJCh3aW5kb3cpLFxyXG4gICAgICAgICAgICBwcmV2ID0gX2VsLnByZXYoKSxcclxuICAgICAgICAgICAgcGFyZW50LFxyXG4gICAgICAgICAgICB3aWR0aCA9IF93aW5kb3cud2lkdGgoKVxyXG4gICAgICAgICAgICA7XHJcblxyXG4gICAgICAgICFwcmV2Lmxlbmd0aCAmJiAocGFyZW50ID0gX2VsLnBhcmVudCgpKTtcclxuICAgICAgICBcclxuICAgICAgICBmdW5jdGlvbiBzbSgpe1xyXG4gICAgICAgICAgJHRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgbWV0aG9kID0gYXR0ci51aVNoaWZ0O1xyXG4gICAgICAgICAgICB2YXIgdGFyZ2V0ID0gYXR0ci50YXJnZXQ7XHJcbiAgICAgICAgICAgIF9lbC5oYXNDbGFzcygnaW4nKSB8fCBfZWxbbWV0aG9kXSh0YXJnZXQpLmFkZENsYXNzKCdpbicpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGZ1bmN0aW9uIG1kKCl7XHJcbiAgICAgICAgICBwYXJlbnQgJiYgcGFyZW50WydwcmVwZW5kJ10oZWwpO1xyXG4gICAgICAgICAgIXBhcmVudCAmJiBfZWxbJ2luc2VydEFmdGVyJ10ocHJldik7XHJcbiAgICAgICAgICBfZWwucmVtb3ZlQ2xhc3MoJ2luJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAod2lkdGggPCA3NjggJiYgc20oKSkgfHwgbWQoKTtcclxuXHJcbiAgICAgICAgX3dpbmRvdy5yZXNpemUoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICBpZih3aWR0aCAhPT0gX3dpbmRvdy53aWR0aCgpKXtcclxuICAgICAgICAgICAgJHRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAoX3dpbmRvdy53aWR0aCgpIDwgNzY4ICYmIHNtKCkpIHx8IG1kKCk7XHJcbiAgICAgICAgICAgICAgd2lkdGggPSBfd2luZG93LndpZHRoKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH1dKTsiLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuICAuZGlyZWN0aXZlKCd1aVRvZ2dsZUNsYXNzJywgWyckdGltZW91dCcsICckZG9jdW1lbnQnLCBmdW5jdGlvbigkdGltZW91dCwgJGRvY3VtZW50KSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICByZXN0cmljdDogJ0FDJyxcclxuICAgICAgbGluazogZnVuY3Rpb24oc2NvcGUsIGVsLCBhdHRyKSB7XHJcbiAgICAgICAgZWwub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgdmFyIGNsYXNzZXMgPSBhdHRyLnVpVG9nZ2xlQ2xhc3Muc3BsaXQoJywnKSxcclxuICAgICAgICAgICAgICB0YXJnZXRzID0gKGF0dHIudGFyZ2V0ICYmIGF0dHIudGFyZ2V0LnNwbGl0KCcsJykpIHx8IEFycmF5KGVsKSxcclxuICAgICAgICAgICAgICBrZXkgPSAwO1xyXG4gICAgICAgICAgYW5ndWxhci5mb3JFYWNoKGNsYXNzZXMsIGZ1bmN0aW9uKCBfY2xhc3MgKSB7XHJcbiAgICAgICAgICAgIHZhciB0YXJnZXQgPSB0YXJnZXRzWyh0YXJnZXRzLmxlbmd0aCAmJiBrZXkpXTsgICAgICAgICAgICBcclxuICAgICAgICAgICAgKCBfY2xhc3MuaW5kZXhPZiggJyonICkgIT09IC0xICkgJiYgbWFnaWMoX2NsYXNzLCB0YXJnZXQpO1xyXG4gICAgICAgICAgICAkKCB0YXJnZXQgKS50b2dnbGVDbGFzcyhfY2xhc3MpO1xyXG4gICAgICAgICAgICBrZXkgKys7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgICQoZWwpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxuXHJcbiAgICAgICAgICBmdW5jdGlvbiBtYWdpYyhfY2xhc3MsIHRhcmdldCl7XHJcbiAgICAgICAgICAgIHZhciBwYXR0ID0gbmV3IFJlZ0V4cCggJ1xcXFxzJyArIFxyXG4gICAgICAgICAgICAgICAgX2NsYXNzLlxyXG4gICAgICAgICAgICAgICAgICByZXBsYWNlKCAvXFwqL2csICdbQS1aYS16MC05LV9dKycgKS5cclxuICAgICAgICAgICAgICAgICAgc3BsaXQoICcgJyApLlxyXG4gICAgICAgICAgICAgICAgICBqb2luKCAnXFxcXHN8XFxcXHMnICkgKyBcclxuICAgICAgICAgICAgICAgICdcXFxccycsICdnJyApO1xyXG4gICAgICAgICAgICB2YXIgY24gPSAnICcgKyAkKHRhcmdldClbMF0uY2xhc3NOYW1lICsgJyAnO1xyXG4gICAgICAgICAgICB3aGlsZSAoIHBhdHQudGVzdCggY24gKSApIHtcclxuICAgICAgICAgICAgICBjbiA9IGNuLnJlcGxhY2UoIHBhdHQsICcgJyApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICQodGFyZ2V0KVswXS5jbGFzc05hbWUgPSAkLnRyaW0oIGNuICk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfV0pOyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbi8qKlxyXG4gKiBHZW5lcmFsLXB1cnBvc2UgdmFsaWRhdG9yIGZvciBuZ01vZGVsLlxyXG4gKiBhbmd1bGFyLmpzIGNvbWVzIHdpdGggc2V2ZXJhbCBidWlsdC1pbiB2YWxpZGF0aW9uIG1lY2hhbmlzbSBmb3IgaW5wdXQgZmllbGRzIChuZ1JlcXVpcmVkLCBuZ1BhdHRlcm4gZXRjLikgYnV0IHVzaW5nXHJcbiAqIGFuIGFyYml0cmFyeSB2YWxpZGF0aW9uIGZ1bmN0aW9uIHJlcXVpcmVzIGNyZWF0aW9uIG9mIGEgY3VzdG9tIGZvcm1hdHRlcnMgYW5kIC8gb3IgcGFyc2Vycy5cclxuICogVGhlIHVpLXZhbGlkYXRlIGRpcmVjdGl2ZSBtYWtlcyBpdCBlYXN5IHRvIHVzZSBhbnkgZnVuY3Rpb24ocykgZGVmaW5lZCBpbiBzY29wZSBhcyBhIHZhbGlkYXRvciBmdW5jdGlvbihzKS5cclxuICogQSB2YWxpZGF0b3IgZnVuY3Rpb24gd2lsbCB0cmlnZ2VyIHZhbGlkYXRpb24gb24gYm90aCBtb2RlbCBhbmQgaW5wdXQgY2hhbmdlcy5cclxuICpcclxuICogQGV4YW1wbGUgPGlucHV0IHVpLXZhbGlkYXRlPVwiICdteVZhbGlkYXRvckZ1bmN0aW9uKCR2YWx1ZSknIFwiPlxyXG4gKiBAZXhhbXBsZSA8aW5wdXQgdWktdmFsaWRhdGU9XCJ7IGZvbyA6ICckdmFsdWUgPiBhbm90aGVyTW9kZWwnLCBiYXIgOiAndmFsaWRhdGVGb28oJHZhbHVlKScgfVwiPlxyXG4gKiBAZXhhbXBsZSA8aW5wdXQgdWktdmFsaWRhdGU9XCJ7IGZvbyA6ICckdmFsdWUgPiBhbm90aGVyTW9kZWwnIH1cIiB1aS12YWxpZGF0ZS13YXRjaD1cIiAnYW5vdGhlck1vZGVsJyBcIj5cclxuICogQGV4YW1wbGUgPGlucHV0IHVpLXZhbGlkYXRlPVwieyBmb28gOiAnJHZhbHVlID4gYW5vdGhlck1vZGVsJywgYmFyIDogJ3ZhbGlkYXRlRm9vKCR2YWx1ZSknIH1cIiB1aS12YWxpZGF0ZS13YXRjaD1cIiB7IGZvbyA6ICdhbm90aGVyTW9kZWwnIH0gXCI+XHJcbiAqXHJcbiAqIEBwYXJhbSB1aS12YWxpZGF0ZSB7c3RyaW5nfG9iamVjdCBsaXRlcmFsfSBJZiBzdHJpbmdzIGlzIHBhc3NlZCBpdCBzaG91bGQgYmUgYSBzY29wZSdzIGZ1bmN0aW9uIHRvIGJlIHVzZWQgYXMgYSB2YWxpZGF0b3IuXHJcbiAqIElmIGFuIG9iamVjdCBsaXRlcmFsIGlzIHBhc3NlZCBhIGtleSBkZW5vdGVzIGEgdmFsaWRhdGlvbiBlcnJvciBrZXkgd2hpbGUgYSB2YWx1ZSBzaG91bGQgYmUgYSB2YWxpZGF0b3IgZnVuY3Rpb24uXHJcbiAqIEluIGJvdGggY2FzZXMgdmFsaWRhdG9yIGZ1bmN0aW9uIHNob3VsZCB0YWtlIGEgdmFsdWUgdG8gdmFsaWRhdGUgYXMgaXRzIGFyZ3VtZW50IGFuZCBzaG91bGQgcmV0dXJuIHRydWUvZmFsc2UgaW5kaWNhdGluZyBhIHZhbGlkYXRpb24gcmVzdWx0LlxyXG4gKi9cclxuYW5ndWxhci5tb2R1bGUoJ3VpLnZhbGlkYXRlJyxbXSkuZGlyZWN0aXZlKCd1aVZhbGlkYXRlJywgZnVuY3Rpb24gKCkge1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcmVzdHJpY3Q6ICdBJyxcclxuICAgIHJlcXVpcmU6ICduZ01vZGVsJyxcclxuICAgIGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWxtLCBhdHRycywgY3RybCkge1xyXG4gICAgICB2YXIgdmFsaWRhdGVGbiwgdmFsaWRhdG9ycyA9IHt9LFxyXG4gICAgICAgICAgdmFsaWRhdGVFeHByID0gc2NvcGUuJGV2YWwoYXR0cnMudWlWYWxpZGF0ZSk7XHJcblxyXG4gICAgICBpZiAoIXZhbGlkYXRlRXhwcil7IHJldHVybjt9XHJcblxyXG4gICAgICBpZiAoYW5ndWxhci5pc1N0cmluZyh2YWxpZGF0ZUV4cHIpKSB7XHJcbiAgICAgICAgdmFsaWRhdGVFeHByID0geyB2YWxpZGF0b3I6IHZhbGlkYXRlRXhwciB9O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBhbmd1bGFyLmZvckVhY2godmFsaWRhdGVFeHByLCBmdW5jdGlvbiAoZXhwcnNzbiwga2V5KSB7XHJcbiAgICAgICAgdmFsaWRhdGVGbiA9IGZ1bmN0aW9uICh2YWx1ZVRvVmFsaWRhdGUpIHtcclxuICAgICAgICAgIHZhciBleHByZXNzaW9uID0gc2NvcGUuJGV2YWwoZXhwcnNzbiwgeyAnJHZhbHVlJyA6IHZhbHVlVG9WYWxpZGF0ZSB9KTtcclxuICAgICAgICAgIGlmIChhbmd1bGFyLmlzT2JqZWN0KGV4cHJlc3Npb24pICYmIGFuZ3VsYXIuaXNGdW5jdGlvbihleHByZXNzaW9uLnRoZW4pKSB7XHJcbiAgICAgICAgICAgIC8vIGV4cHJlc3Npb24gaXMgYSBwcm9taXNlXHJcbiAgICAgICAgICAgIGV4cHJlc3Npb24udGhlbihmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgIGN0cmwuJHNldFZhbGlkaXR5KGtleSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgY3RybC4kc2V0VmFsaWRpdHkoa2V5LCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWVUb1ZhbGlkYXRlO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChleHByZXNzaW9uKSB7XHJcbiAgICAgICAgICAgIC8vIGV4cHJlc3Npb24gaXMgdHJ1ZVxyXG4gICAgICAgICAgICBjdHJsLiRzZXRWYWxpZGl0eShrZXksIHRydWUpO1xyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWVUb1ZhbGlkYXRlO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gZXhwcmVzc2lvbiBpcyBmYWxzZVxyXG4gICAgICAgICAgICBjdHJsLiRzZXRWYWxpZGl0eShrZXksIGZhbHNlKTtcclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlVG9WYWxpZGF0ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHZhbGlkYXRvcnNba2V5XSA9IHZhbGlkYXRlRm47XHJcbiAgICAgICAgY3RybC4kZm9ybWF0dGVycy5wdXNoKHZhbGlkYXRlRm4pO1xyXG4gICAgICAgIGN0cmwuJHBhcnNlcnMucHVzaCh2YWxpZGF0ZUZuKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBmdW5jdGlvbiBhcHBseV93YXRjaCh3YXRjaClcclxuICAgICAge1xyXG4gICAgICAgICAgLy9zdHJpbmcgLSB1cGRhdGUgYWxsIHZhbGlkYXRvcnMgb24gZXhwcmVzc2lvbiBjaGFuZ2VcclxuICAgICAgICAgIGlmIChhbmd1bGFyLmlzU3RyaW5nKHdhdGNoKSlcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBzY29wZS4kd2F0Y2god2F0Y2gsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgIGFuZ3VsYXIuZm9yRWFjaCh2YWxpZGF0b3JzLCBmdW5jdGlvbih2YWxpZGF0b3JGbil7XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3JGbihjdHJsLiRtb2RlbFZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC8vYXJyYXkgLSB1cGRhdGUgYWxsIHZhbGlkYXRvcnMgb24gY2hhbmdlIG9mIGFueSBleHByZXNzaW9uXHJcbiAgICAgICAgICBpZiAoYW5ndWxhci5pc0FycmF5KHdhdGNoKSlcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBhbmd1bGFyLmZvckVhY2god2F0Y2gsIGZ1bmN0aW9uKGV4cHJlc3Npb24pe1xyXG4gICAgICAgICAgICAgICAgICBzY29wZS4kd2F0Y2goZXhwcmVzc2lvbiwgZnVuY3Rpb24oKVxyXG4gICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBhbmd1bGFyLmZvckVhY2godmFsaWRhdG9ycywgZnVuY3Rpb24odmFsaWRhdG9yRm4pe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvckZuKGN0cmwuJG1vZGVsVmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvL29iamVjdCAtIHVwZGF0ZSBhcHByb3ByaWF0ZSB2YWxpZGF0b3JcclxuICAgICAgICAgIGlmIChhbmd1bGFyLmlzT2JqZWN0KHdhdGNoKSlcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBhbmd1bGFyLmZvckVhY2god2F0Y2gsIGZ1bmN0aW9uKGV4cHJlc3Npb24sIHZhbGlkYXRvcktleSlcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIC8vdmFsdWUgaXMgc3RyaW5nIC0gbG9vayBhZnRlciBvbmUgZXhwcmVzc2lvblxyXG4gICAgICAgICAgICAgICAgICBpZiAoYW5ndWxhci5pc1N0cmluZyhleHByZXNzaW9uKSlcclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgc2NvcGUuJHdhdGNoKGV4cHJlc3Npb24sIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yc1t2YWxpZGF0b3JLZXldKGN0cmwuJG1vZGVsVmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIC8vdmFsdWUgaXMgYXJyYXkgLSBsb29rIGFmdGVyIGFsbCBleHByZXNzaW9ucyBpbiBhcnJheVxyXG4gICAgICAgICAgICAgICAgICBpZiAoYW5ndWxhci5pc0FycmF5KGV4cHJlc3Npb24pKVxyXG4gICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBhbmd1bGFyLmZvckVhY2goZXhwcmVzc2lvbiwgZnVuY3Rpb24oaW50RXhwcmVzc2lvbilcclxuICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzY29wZS4kd2F0Y2goaW50RXhwcmVzc2lvbiwgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yc1t2YWxpZGF0b3JLZXldKGN0cmwuJG1vZGVsVmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAvLyBTdXBwb3J0IGZvciB1aS12YWxpZGF0ZS13YXRjaFxyXG4gICAgICBpZiAoYXR0cnMudWlWYWxpZGF0ZVdhdGNoKXtcclxuICAgICAgICAgIGFwcGx5X3dhdGNoKCBzY29wZS4kZXZhbChhdHRycy51aVZhbGlkYXRlV2F0Y2gpICk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2NvbW1vblNlcnZpY2UnKS5cclxuICAgIHNlcnZpY2UoJ2VudW1TZXJ2aWNlJywgW2Z1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBcInJlcXVlc3Rfc3RcIjoge1xyXG4gICAgICAgICAgICAgICAgXCIxXCI6IFwi55Sz6K+35Y2V5bey5o+Q5LqkXCIsXHJcbiAgICAgICAgICAgICAgICBcIjJcIjogXCLnlLPor7fljZXlt7Lmi5Lnu51cIixcclxuICAgICAgICAgICAgICAgIFwiM1wiOiBcIueUs+ivt+WNleW3suaOpeaUtlwiLFxyXG4gICAgICAgICAgICAgICAgXCI0XCI6IFwi5Lit5b+D5qC35pys5bey5o6l5pS2XCIsXHJcbiAgICAgICAgICAgICAgICBcIjVcIjogXCLmo4DpqozkuK1cIixcclxuICAgICAgICAgICAgICAgIFwiNlwiOiBcIuajgOmqjOW3suWujOaIkFwiLFxyXG4gICAgICAgICAgICAgICAgXCI3XCI6IFwi5qOA6aqM5oql5ZGK5bey5a6M5oiQXCIsXHJcbiAgICAgICAgICAgICAgICBcIjhcIjogXCLmo4DpqozmiqXlkYrlt7LlrqHmoLhcIixcclxuICAgICAgICAgICAgICAgIFwiOVwiOiBcIuajgOmqjOaKpeWRiuW3suS4iuS8oOS4reW/g1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwibG9naXN0aWNzX3N0XCI6IHtcclxuICAgICAgICAgICAgICAgIFwiMVwiOiBcIueJqea1geW3suaOpeaUtlwiLFxyXG4gICAgICAgICAgICAgICAgXCIyXCI6IFwi5qOA6aqM5Lit5b+D5bey5o6l5pS2XCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9XSk7IiwiXHJcbnZhciB2aWV3ID0ge1xyXG4gICAgbG9hZGluZ19kaWFsb2c6IG51bGwsXHJcbiAgICBsb2FkaW5nX251bTogMFxyXG59O1xyXG5cclxuLy8gZGlhbG9nXHJcbnZpZXcuZGlhbG9nID0gZnVuY3Rpb24gKG9wdCkge1xyXG4gICAgdmFyIHRpdGxlID0gb3B0LnRpdGxlIHx8IFQoXCJkaWFsb2cuRElBTE9HXCIpLFxyXG4gICAgICAgIGNvbnRlbnQgPSBvcHQuY29udGVudCB8fCBcIlwiLFxyXG4gICAgICAgIG9rX2J0biA9IG9wdC5va19idG4sXHJcbiAgICAgICAgY2FuY2VsX2J0biA9IG9wdC5jYW5jZWxfYnRuLFxyXG4gICAgICAgIGNsb3NlX2J0biA9IG9wdC5jbG9zZV9idG4sXHJcbiAgICAgICAgb2tfZm4gPSBvcHQub2tfZm4gfHwgbnVsbCxcclxuICAgICAgICBjYW5jZWxfZm4gPSBvcHQuY2FuY2VsX2ZuIHx8IG51bGwsXHJcbiAgICAgICAgcHJlX2ZuID0gb3B0LnByZV9mbiB8fCBudWxsLFxyXG4gICAgICAgIGRpYWxvZyA9IG51bGwsXHJcbiAgICAgICAgZGlhbG9nX2h0bWwgPSAnPGRpdiBjbGFzcz1cIm1vZGFsIGZhZGVcIj5cXFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtZGlhbG9nXCI+XFxcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj5cXFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+XFxcclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgYXJpYS1sYWJlbD1cIkNsb3NlXCI+PHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj48L2J1dHRvbj5cXFxyXG4gICAgICAgIDxoNCBjbGFzcz1cIm1vZGFsLXRpdGxlXCI+JyArIHRpdGxlICsgJzwvaDQ+XFxcclxuICAgICAgICAgICAgPC9kaXY+XFxcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWJvZHlcIj4nICsgY29udGVudCArICc8L2Rpdj5cXFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtZm9vdGVyXCI+JztcclxuXHJcbiAgICBpZiAoY2FuY2VsX2J0bikge1xyXG4gICAgICAgIGRpYWxvZ19odG1sICs9ICc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBkaWFsb2dfYnRuIGNhbmNlbFwiPicgKyBUKFwiYnV0dG9uLkNBTkNFTFwiKSArICc8L2J1dHRvbj4nO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChva19idG4pIHtcclxuICAgICAgICBkaWFsb2dfaHRtbCArPSAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgZGlhbG9nX2J0biBva1wiPicgKyBUKFwiYnV0dG9uLk9LXCIpICsgJzwvYnV0dG9uPic7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNsb3NlX2J0bikge1xyXG4gICAgICAgIGRpYWxvZ19odG1sICs9ICc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBkaWFsb2dfYnRuIG9rXCI+JyArIFQoXCJidXR0b24uQ0xPU0VcIikgKyAnPC9idXR0b24+JztcclxuICAgIH1cclxuXHJcbiAgICBkaWFsb2dfaHRtbCArPSAnPC9kaXY+PC9kaXY+PC9kaXY+PC9kaXY+JztcclxuXHJcbiAgICBkaWFsb2cgPSAkKGRpYWxvZ19odG1sKTtcclxuXHJcbiAgICBkaWFsb2dcclxuICAgICAgICAub24oJ3Nob3cuYnMubW9kYWwnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBpZiAob3B0LndpZHRoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY3NzID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICd3aWR0aCc6IG9wdC53aWR0aCArICdweCdcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmNoaWxkcmVuKFwiLm1vZGFsLWRpYWxvZ1wiKS5jc3MoY3NzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwcmVfZm4gJiYgcHJlX2ZuKCQodGhpcykpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLm9uKFwic2hvd24uYnMubW9kYWxcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5vbihcImhpZGUuYnMubW9kYWxcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5vbihcImhpZGRlbi5icy5tb2RhbFwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBkaWFsb2cucmVtb3ZlKCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAub24oXCJjbGlja1wiLCBcIi5kaWFsb2dfYnRuXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoXCJva1wiKSkge1xyXG4gICAgICAgICAgICAgICAgb2tfZm4gJiYgb2tfZm4oKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoXCJjYW5jZWxcIikpIHtcclxuICAgICAgICAgICAgICAgIGNhbmNlbF9mbiAmJiBjYW5jZWxfZm4oKTtcclxuICAgICAgICAgICAgICAgIGRpYWxvZy5tb2RhbChcImhpZGVcIik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghb3B0LnByZXZlbnRfYXV0b19oaWRlIHx8IG9wdC5wcmV2ZW50X2F1dG9faGlkZSA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgZGlhbG9nLm1vZGFsKFwiaGlkZVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLm9uKCdzaG93bicsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcHJlX2ZuICYmIHByZV9mbigkKHRoaXMpKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5tb2RhbCgnc2hvdycpO1xyXG5cclxuICAgIGRpYWxvZy5jbG9zZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKHRoaXMpLm1vZGFsKCdoaWRlJyk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiBkaWFsb2c7XHJcbn07XHJcblxyXG4vLyBsb2FkaW5nXHJcbnZpZXcubG9hZGluZyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICh2aWV3LmxvYWRpbmdfZGlhbG9nID09IG51bGwpIHtcclxuICAgICAgICB2YXIgb3B0ID0ge1xyXG4gICAgICAgICAgICB0aXRsZTogVChcImRpYWxvZy5BTEVSVFwiKSxcclxuICAgICAgICAgICAgY29udGVudDogXCI8aW1nIHNyYz0naW1nL2xvYWRpbmcuZ2lmJy8+IDxzcGFuIHN0eWxlPSdmb250LXNpemU6IDE4cHg7Jz5cIiArIFQoXCJkaWFsb2cuTE9BRElOR1wiKSArIFwiPC9zcGFuPlwiLFxyXG4gICAgICAgICAgICBva19idG46IGZhbHNlLFxyXG4gICAgICAgICAgICBjYW5jZWxfYnRuOiBmYWxzZVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHZpZXcubG9hZGluZ19kaWFsb2cgPSB2aWV3LmRpYWxvZyhvcHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHZpZXcubG9hZGluZ19udW0rKztcclxufTtcclxuXHJcbi8vIOWFs+mXrWxvYWRpbmdcclxudmlldy5jbG9zZV9sb2FkaW5nID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmlldy5sb2FkaW5nX251bS0tO1xyXG5cclxuICAgIGlmICh2aWV3LmxvYWRpbmdfZGlhbG9nICE9IG51bGwgJiYgdmlldy5sb2FkaW5nX251bSA9PSAwKSB7XHJcbiAgICAgICAgdmlldy5sb2FkaW5nX2RpYWxvZy5jbG9zZSgpO1xyXG4gICAgICAgIHZpZXcubG9hZGluZ19kaWFsb2cgPSBudWxsO1xyXG4gICAgfVxyXG59O1xyXG5cclxuLy8gYWxlcnRcclxudmlldy5hbGVydCA9IGZ1bmN0aW9uIChtc2csIG9rKSB7XHJcbiAgICB2YXIgb3B0ID0ge1xyXG4gICAgICAgIHRpdGxlOiBUKFwiZGlhbG9nLkFMRVJUXCIpLFxyXG4gICAgICAgIGNvbnRlbnQ6IFwiXCIgKyBtc2cgKyBcIlwiLFxyXG4gICAgICAgIGNsb3NlX2J0bjogdHJ1ZSxcclxuICAgICAgICBva19mbjogb2tcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHZpZXcuZGlhbG9nKG9wdCk7XHJcbn07XHJcblxyXG4vLyBzaG93XHJcbnZpZXcuc2hvdyA9IGZ1bmN0aW9uIChtc2csIHRpdGxlLCB3aWR0aCwgb2ssIGNhbmNlbCkge1xyXG4gICAgdmFyIG9wdCA9IHtcclxuICAgICAgICB0aXRsZTogVChcImRpYWxvZy5BTEVSVFwiKSxcclxuICAgICAgICBjb250ZW50OiBcIjxwIHN0eWxlPSd3b3JkLXdyYXA6YnJlYWstd29yZCc+XCIgKyBtc2cgKyBcIjwvcD5cIixcclxuICAgICAgICBjbG9zZV9idG46IHRydWUsXHJcbiAgICAgICAgb2tfZm46IG9rLFxyXG4gICAgICAgIGNhbmNlbF9mbjogY2FuY2VsXHJcbiAgICB9O1xyXG5cclxuICAgIGlmICh0aXRsZSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICBvcHQudGl0bGUgPSB0aXRsZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAod2lkdGggIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgb3B0LndpZHRoID0gd2lkdGg7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHZpZXcuZGlhbG9nKG9wdCk7XHJcbn07XHJcblxyXG4vLyBjb25maXJtXHJcbnZpZXcuY29uZmlybSA9IGZ1bmN0aW9uIChjb250ZW50LCBvaywgY2FuY2VsKSB7XHJcblxyXG4gICAgdmFyIG9wdCA9IHtcclxuICAgICAgICB0aXRsZTogVChcImRpYWxvZy5BTEVSVFwiKSxcclxuICAgICAgICBjb250ZW50OiAnPHNwYW4gY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLWV4Y2xhbWF0aW9uLXNpZ25cIiBhcmlhLWhpZGRlbj1cInRydWVcIj4gJyArIGNvbnRlbnQgKyAnPC9zcGFuPicsXHJcbiAgICAgICAgb2tfYnRuOiB0cnVlLFxyXG4gICAgICAgIGNhbmNlbF9idG46IHRydWUsXHJcbiAgICAgICAgb2tfZm46IG9rLFxyXG4gICAgICAgIGNhbmNlbF9mbjogY2FuY2VsXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB2aWV3LmRpYWxvZyhvcHQpO1xyXG59O1xyXG5cclxuLy8gcHJvbXB0XHJcbnZpZXcucHJvbXB0ID0gZnVuY3Rpb24gKHRpdGxlLCBkZWZhdWx0X3ZhbCwgb2ssIGNhbmNlbCkge1xyXG4gICAgdmFyIG9rX2ZuID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciB2YWx1ZSA9ICQoXCIjcHJvbXB0X2lucHV0XCIpLnZhbCgpO1xyXG4gICAgICAgIG9rKHZhbHVlKTtcclxuICAgIH07XHJcblxyXG4gICAgdmFyIGNvbnRlbnQgPSAnPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cInByb21wdF9pbnB1dFwiPic7XHJcbiAgICBpZiAoZGVmYXVsdF92YWwgIT0gbnVsbCAmJiBkZWZhdWx0X3ZhbCAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICBjb250ZW50ID0gJzxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJwcm9tcHRfaW5wdXRcIiB2YWx1ZT1cIicgKyBkZWZhdWx0X3ZhbCArICdcIj4nO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBvcHQgPSB7XHJcbiAgICAgICAgdGl0bGU6IHRpdGxlLFxyXG4gICAgICAgIGNvbnRlbnQ6IGNvbnRlbnQsXHJcbiAgICAgICAgb2tfYnRuOiB0cnVlLFxyXG4gICAgICAgIGNhbmNlbF9idG46IHRydWUsXHJcbiAgICAgICAgb2tfZm46IG9rX2ZuLFxyXG4gICAgICAgIGNhbmNlbF9mbjogY2FuY2VsXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB2aWV3LmRpYWxvZyhvcHQpO1xyXG59O1xyXG5cclxuLy8gcHJvbXB0X3RpbWVcclxudmlldy5wcm9tcHRfdGltZSA9IGZ1bmN0aW9uICh0aXRsZSwgb2ssIGNhbmNlbCkge1xyXG4gICAgdmFyIG9rX2ZuID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciB2YWx1ZSA9ICQoXCIjcHJvbXB0X2lucHV0XCIpLnZhbCgpO1xyXG4gICAgICAgIG9rKHZhbHVlKTtcclxuICAgIH07XHJcblxyXG4gICAgdmFyIG9wdCA9IHtcclxuICAgICAgICB0aXRsZTogdGl0bGUsXHJcbiAgICAgICAgY29udGVudDogJzxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgZGF0YS1kYXRlLWZvcm1hdD1cInl5eXktbW0tZGQgaGg6aWk6c3NcIiBpZD1cInByb21wdF9pbnB1dFwiPicsXHJcbiAgICAgICAgb2tfYnRuOiB0cnVlLFxyXG4gICAgICAgIGNhbmNlbF9idG46IHRydWUsXHJcbiAgICAgICAgb2tfZm46IG9rX2ZuLFxyXG4gICAgICAgIGNhbmNlbF9mbjogY2FuY2VsXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB2aWV3LmRpYWxvZyhvcHQpO1xyXG59O1xyXG5cclxuLy8gcHJvbXB0X3RleHRhcmVhXHJcbnZpZXcucHJvbXB0X3RleHRhcmVhID0gZnVuY3Rpb24gKHRpdGxlLCBvaywgY2FuY2VsLCB2YWx1ZSkge1xyXG4gICAgdmFsdWUgPSB2YWx1ZSB8fCBcIlwiO1xyXG5cclxuICAgIHZhciBva19mbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgdmFsdWUgPSAkKFwiI3Byb21wdF9pbnB1dFwiKS52YWwoKTtcclxuICAgICAgICBvayh2YWx1ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBvcHQgPSB7XHJcbiAgICAgICAgdGl0bGU6IHRpdGxlLFxyXG4gICAgICAgIGNvbnRlbnQ6ICc8dGV4dGFyZWEgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cInByb21wdF9pbnB1dFwiPicgKyB2YWx1ZSArICc8L3RleHRhcmVhPicsXHJcbiAgICAgICAgb2tfYnRuOiB0cnVlLFxyXG4gICAgICAgIGNhbmNlbF9idG46IHRydWUsXHJcbiAgICAgICAgb2tfZm46IG9rX2ZuLFxyXG4gICAgICAgIGNhbmNlbF9mbjogY2FuY2VsXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB2aWV3LmRpYWxvZyhvcHQpO1xyXG59O1xyXG5cclxudmFyIHV0aWxzID0ge307XHJcblxyXG51dGlscy5leHBvcnRFeGNlbCA9IGZ1bmN0aW9uIChwYXJhbXMsIHVybCwgbWV0aG9kKSB7XHJcbiAgICBpZiAocGFyYW1zKSB7XHJcbiAgICAgICAgLy8gcGFyYW1zIOaYryBzdHJpbmcg5oiW6ICFIGFycmF5L29iamVjdFxyXG4gICAgICAgIGlmICh0eXBlb2YgcGFyYW1zID09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgIHBhcmFtcyA9IHt9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBwYXJhbXNbJ2V4cG9ydCddID0gMTtcclxuICAgICAgICAvLyDmiorlj4LmlbDnu4Too4XmiJAgZm9ybeeahCAgaW5wdXRcclxuICAgICAgICB2YXIgaW5wdXRzID0gW107XHJcbiAgICAgICAgJC5lYWNoKHBhcmFtcywgZnVuY3Rpb24gKGssIHYpIHtcclxuICAgICAgICAgICAgaWYgKHYgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW5wdXRzLnB1c2goJzxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIicgKyBrICsgJ1wiIHZhbHVlPVwiJyArIHYgKyAnXCIgLz4nKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKGRvY3VtZW50KS5vZmYoJ3N1Ym1pdCcpO1xyXG4gICAgICAgICQoJzxmb3JtIGlkPVwiZG93bmxvYWRcIiBhY3Rpb249XCInICsgKHVybCB8fCAnaW5kZXgucGhwJykgKyAnXCIgbWV0aG9kPVwiJyArIChtZXRob2QgfHwgXCJwb3N0XCIpICsgJ1wiIHRhcmdldD1cIl9ibGFua1wiPicgKyBpbnB1dHMuam9pbignJykgKyAnPC9mb3JtPicpXHJcbiAgICAgICAgICAgIC5hcHBlbmRUbygnYm9keScpLnN1Ym1pdCgpLnJlbW92ZSgpO1xyXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdzdWJtaXQnLCBmYWxzZSk7XHJcbiAgICB9XHJcbn07XHJcblxyXG51dGlscy5iYXNlNjRUb0Jsb2IgPSBmdW5jdGlvbihiYXNlNjREYXRhLCBjb250ZW50VHlwZSkge1xyXG4gICAgY29udGVudFR5cGUgPSBjb250ZW50VHlwZSB8fCAnJztcclxuICAgIHZhciBzbGljZVNpemUgPSAxMDI0O1xyXG4gICAgdmFyIGJ5dGVDaGFyYWN0ZXJzID0gYXRvYihiYXNlNjREYXRhKTtcclxuICAgIHZhciBieXRlc0xlbmd0aCA9IGJ5dGVDaGFyYWN0ZXJzLmxlbmd0aDtcclxuICAgIHZhciBzbGljZXNDb3VudCA9IE1hdGguY2VpbChieXRlc0xlbmd0aCAvIHNsaWNlU2l6ZSk7XHJcbiAgICB2YXIgYnl0ZUFycmF5cyA9IG5ldyBBcnJheShzbGljZXNDb3VudCk7XHJcblxyXG4gICAgZm9yICh2YXIgc2xpY2VJbmRleCA9IDA7IHNsaWNlSW5kZXggPCBzbGljZXNDb3VudDsgKytzbGljZUluZGV4KSB7XHJcbiAgICAgICAgdmFyIGJlZ2luID0gc2xpY2VJbmRleCAqIHNsaWNlU2l6ZTtcclxuICAgICAgICB2YXIgZW5kID0gTWF0aC5taW4oYmVnaW4gKyBzbGljZVNpemUsIGJ5dGVzTGVuZ3RoKTtcclxuXHJcbiAgICAgICAgdmFyIGJ5dGVzID0gbmV3IEFycmF5KGVuZCAtIGJlZ2luKTtcclxuICAgICAgICBmb3IgKHZhciBvZmZzZXQgPSBiZWdpbiwgaSA9IDAgOyBvZmZzZXQgPCBlbmQ7ICsraSwgKytvZmZzZXQpIHtcclxuICAgICAgICAgICAgYnl0ZXNbaV0gPSBieXRlQ2hhcmFjdGVyc1tvZmZzZXRdLmNoYXJDb2RlQXQoMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJ5dGVBcnJheXNbc2xpY2VJbmRleF0gPSBuZXcgVWludDhBcnJheShieXRlcyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbmV3IEJsb2IoYnl0ZUFycmF5cywgeyB0eXBlOiBjb250ZW50VHlwZSB9KTtcclxufTtcclxuXHJcbiIsIi8vIGFuZ3VsYXIubW9kdWxlKCdodHRwU2VydmljZScsIFtdKS5cclxuLy8gICAgIHNlcnZpY2UoJ21vY2tTZXJ2aWNlJywgWyckcScsICckdGltZW91dCcsICckaHR0cCcsICckc3RhdGUnLFxyXG4vLyAgICAgICAgIGZ1bmN0aW9uICgkcSwgJHRpbWVvdXQsICRodHRwLCAkc3RhdGUpIHtcclxuLy8gICAgICAgICAgICAgdGhpcy5nZXQgPSBmdW5jdGlvbiAodXJsLCBwYXJhbXMpIHtcclxuLy8gICAgICAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcbi8vICAgICAgICAgICAgICAgICB1cmwgPSBcIi9tb2NrX2RhdGEvXCIgKyB1cmwgKyBcIi5qc29uXCI7XHJcbi8vICAgICAgICAgICAgICAgICAvL3ZpZXcubG9hZGluZygpO1xyXG4vLyAgICAgICAgICAgICAgICAgJGh0dHAuZ2V0KHVybCkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgdmFyIGQgPSByZXN1bHQuZGF0YTtcclxuLy8gICAgICAgICAgICAgICAgICAgICBpZiAoZC5zdGF0dXMgPT0gMCkge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKGQuZGF0YSk7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChkLnN0YXR1cykge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB2aWV3LmFsZXJ0KHJlc3VsdC5tc2cpO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vJHN0YXRlLmdvKFwibG9naW5cIik7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KGQpO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gKHgpIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICAvL3ZpZXcuY2xvc2VfbG9hZGluZygpO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdChUKFwibXNnLnN5c3RlbV9lcnJvclwiKSk7XHJcbi8vICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbi8vICAgICAgICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuLy8gICAgICAgICAgICAgfTtcclxuLy8gICAgICAgICB9XSk7XHJcblxyXG5cclxuYW5ndWxhci5tb2R1bGUoJ2h0dHBTZXJ2aWNlJywgW10pLlxyXG4gICAgc2VydmljZSgnZGF0YVNlcnZpY2UnLCBbJyRodHRwJywgJ2NvbmZpZycsXHJcbiAgICAgICAgZnVuY3Rpb24gKCRodHRwLCBjb25maWcpIHtcclxuICAgICAgICAgICAgdmFyIGhvc3QgPSBjb25maWcuaG9zdDtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAvL3JlcXVlc3RcclxuICAgICAgICAgICAgICAgIGdldFJlcXVlc3RSZXBvcnRCeUlkOiBmdW5jdGlvbiAoaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdXJsID0gaG9zdCArICcvYXBpL2xpcy9yZXF1ZXN0cy9yZXBvcnRzP2lkPSc7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICRodHRwLmdldCh1cmwgKyBpZCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZ2V0UmVxdWVzdEJ5SWQ6IGZ1bmN0aW9uIChpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB1cmwgPSBob3N0ICsgJy9hcGkvbGlzL3JlcXVlc3RkZXRhaWw/aWQ9JztcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJGh0dHAuZ2V0KHVybCArIGlkKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBnZXRSZXF1ZXN0TGlzdDogZnVuY3Rpb24gKHF1ZXJ5LCBmcm9tLCB0bywgbWlJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB1cmwgPSBob3N0ICsgJy9hcGkvbGlzL3JlcXVlc3RzJztcclxuICAgICAgICAgICAgICAgICAgICB1cmwgKz0gJz9zZWFyY2g9JyArIChxdWVyeSA/IHF1ZXJ5IDogJycpO1xyXG4gICAgICAgICAgICAgICAgICAgIHVybCArPSAnJmZyb209JyArIChmcm9tID8gZnJvbSA6ICcnKTtcclxuICAgICAgICAgICAgICAgICAgICB1cmwgKz0gJyZ0bz0nICsgKHRvID8gdG8gOiAnJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsICs9ICcmbWlJZD0nICsgKG1pSWQgPyBtaUlkIDogJycpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAkaHR0cC5nZXQodXJsKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBhY2NlcHRSZXF1ZXN0OiBmdW5jdGlvbiAob2JqKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHVybCA9IGhvc3QgKyAnL2FwaS9saXMvcmVxdWVzdGFjY2VwdCc7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICRodHRwLnBvc3QodXJsLCBvYmopO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHJlamVjdFJlcWV1c3Q6IGZ1bmN0aW9uIChvYmopIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdXJsID0gaG9zdCArICcvYXBpL2xpcy9yZXF1ZXN0cmVmdXNlJztcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJGh0dHAucG9zdCh1cmwsIG9iaik7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgLy9sYWIgaXRlbVxyXG4gICAgICAgICAgICAgICAgZ2V0TGFiSXRlbUJ5SWQ6IGZ1bmN0aW9uIChpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB1cmwgPSBob3N0ICsgJy9hcGkvc3lzdGVtL2xhYml0ZW1kZXRhaWw/aWQ9JztcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJGh0dHAuZ2V0KHVybCArIGlkKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBnZXRsYWJpdGVtTGlzdDogZnVuY3Rpb24gKHF1ZXJ5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHVybCA9IGhvc3QgKyAnL2FwaS9zeXN0ZW0vbGFiaXRlbXM/c2VhcmNoPSc7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICRodHRwLmdldCh1cmwgKyAocXVlcnkgPyBxdWVyeSA6ICcnKSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgc2F2ZUxhYml0ZW06IGZ1bmN0aW9uIChtb2RlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB1cmwgPSBob3N0ICsgJy9hcGkvc3lzdGVtL2xhYml0ZW1zJztcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJGh0dHAucG9zdCh1cmwsIG1vZGVsKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBkZWxldGVMYWJJdGVtOiBmdW5jdGlvbiAob2JqKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHVybCA9IGhvc3QgKyAnL2FwaS9zeXN0ZW0vbGFiaXRlbXMnO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAkaHR0cC5kZWxldGUodXJsLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaGVhZGVyc1wiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IG9ialxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIC8vbGFiIGl0ZW0gc2V0XHJcbiAgICAgICAgICAgICAgICBnZXRMYWJJdGVtU2V0QnlJZDogZnVuY3Rpb24gKGlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHVybCA9IGhvc3QgKyAnL2FwaS9zeXN0ZW0vbGFiaXRlbXNldGRldGFpbD9pZD0nO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAkaHR0cC5nZXQodXJsICsgaWQpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGdldExhYkl0ZW1TZXRMaXN0OiBmdW5jdGlvbiAocXVlcnkpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdXJsID0gaG9zdCArICcvYXBpL3N5c3RlbS9sYWJpdGVtc2V0cz9zZWFyY2g9JztcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJGh0dHAuZ2V0KHVybCArIChxdWVyeSA/IHF1ZXJ5IDogJycpKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBzYXZlTGFiSXRlbVNldDogZnVuY3Rpb24gKG1vZGVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHVybCA9IGhvc3QgKyAnL2FwaS9zeXN0ZW0vbGFiaXRlbXNldHMnO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAkaHR0cC5wb3N0KHVybCwgbW9kZWwpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGRlbGV0ZUxhYkl0ZW1TZXQ6IGZ1bmN0aW9uIChvYmopIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdXJsID0gaG9zdCArICcvYXBpL3N5c3RlbS9sYWJpdGVtc2V0cyc7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICRodHRwLmRlbGV0ZSh1cmwsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJoZWFkZXJzXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogb2JqXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgLy9sYWIgY2F0ZWdvcnlcclxuICAgICAgICAgICAgICAgIGdldExhYkNhdGVnb3J5QnlJZDogZnVuY3Rpb24gKGlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHVybCA9IGhvc3QgKyAnL2FwaS9zeXN0ZW0vbGFiY2F0ZWdvcnlkZXRhaWw/aWQ9JztcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJGh0dHAuZ2V0KHVybCArIGlkKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBnZXRMYWJDYXRlZ29yeUxpc3Q6IGZ1bmN0aW9uIChxdWVyeSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB1cmwgPSBob3N0ICsgJy9hcGkvc3lzdGVtL2xhYmNhdGVnb3JpZXM/c2VhcmNoPSc7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICRodHRwLmdldCh1cmwgKyAocXVlcnkgPyBxdWVyeSA6ICcnKSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgc2F2ZUxhYkNhdGVnb3J5OiBmdW5jdGlvbiAobW9kZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdXJsID0gaG9zdCArICcvYXBpL3N5c3RlbS9sYWJjYXRlZ29yaWVzJztcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJGh0dHAucG9zdCh1cmwsIG1vZGVsKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBkZWxldGVMYWJDYXRlZ29yeTogZnVuY3Rpb24gKG9iaikge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB1cmwgPSBob3N0ICsgJy9hcGkvc3lzdGVtL2xhYmNhdGVnb3JpZXMnO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAkaHR0cC5kZWxldGUodXJsLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaGVhZGVyc1wiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IG9ialxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIC8vcWMgdmFsdWVcclxuICAgICAgICAgICAgICAgIGdldFFDVmFsdWVCeUlkOiBmdW5jdGlvbiAoaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdXJsID0gaG9zdCArICcvYXBpL3N5c3RlbS9xY3ZhbHVlZGV0YWlsP2lkPSc7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICRodHRwLmdldCh1cmwgKyBpZCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZ2V0UUNWYWx1ZUxpc3Q6IGZ1bmN0aW9uIChxdWVyeSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB1cmwgPSBob3N0ICsgJy9hcGkvc3lzdGVtL3FjdmFsdWVzP3NlYXJjaD0nO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAkaHR0cC5nZXQodXJsICsgKHF1ZXJ5ID8gcXVlcnkgOiAnJykpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHNhdmVRQ1ZhbHVlOiBmdW5jdGlvbiAobW9kZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdXJsID0gaG9zdCArICcvYXBpL3N5c3RlbS9xY3ZhbHVlcyc7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICRodHRwLnBvc3QodXJsLCBtb2RlbCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZGVsZXRlUUNWYWx1ZTogZnVuY3Rpb24gKG9iaikge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB1cmwgPSBob3N0ICsgJy9hcGkvc3lzdGVtL3FjdmFsdWVzJztcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJGh0dHAuZGVsZXRlKHVybCwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImhlYWRlcnNcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBvYmpcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAvL3NhbXBsZSB0eXBlXHJcbiAgICAgICAgICAgICAgICBnZXRTYW1wbGVUeXBlQnlJZDogZnVuY3Rpb24gKGlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHVybCA9IGhvc3QgKyAnL2FwaS9zeXN0ZW0vc2FtcGxldHlwZWRldGFpbD9pZD0nO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAkaHR0cC5nZXQodXJsICsgaWQpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGdldFNhbXBsZVR5cGVMaXN0OiBmdW5jdGlvbiAocXVlcnkpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdXJsID0gaG9zdCArICcvYXBpL3N5c3RlbS9zYW1wbGV0eXBlcz9zZWFyY2g9JztcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJGh0dHAuZ2V0KHVybCArIChxdWVyeSA/IHF1ZXJ5IDogJycpKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBzYXZlU2FtcGxlVHlwZTogZnVuY3Rpb24gKG1vZGVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHVybCA9IGhvc3QgKyAnL2FwaS9zeXN0ZW0vc2FtcGxldHlwZXMnO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAkaHR0cC5wb3N0KHVybCwgbW9kZWwpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGRlbGV0ZVNhbXBsZVR5cGU6IGZ1bmN0aW9uIChvYmopIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdXJsID0gaG9zdCArICcvYXBpL3N5c3RlbS9zYW1wbGV0eXBlcyc7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICRodHRwLmRlbGV0ZSh1cmwsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJoZWFkZXJzXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogb2JqXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgLy9jcmlzaXNcclxuICAgICAgICAgICAgICAgIGdldENyaXNpc0J5SWQ6IGZ1bmN0aW9uIChpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB1cmwgPSBob3N0ICsgJy9hcGkvc3lzdGVtL2NyaXNpc2RldGFpbD9pZD0nO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAkaHR0cC5nZXQodXJsICsgaWQpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGdldENyaXNpc0xpc3Q6IGZ1bmN0aW9uIChxdWVyeSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB1cmwgPSBob3N0ICsgJy9hcGkvc3lzdGVtL2NyaXNpcz9zZWFyY2g9JztcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJGh0dHAuZ2V0KHVybCArIChxdWVyeSA/IHF1ZXJ5IDogJycpKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBzYXZlQ3Jpc2lzOiBmdW5jdGlvbiAobW9kZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdXJsID0gaG9zdCArICcvYXBpL3N5c3RlbS9jcmlzaXMnO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAkaHR0cC5wb3N0KHVybCwgbW9kZWwpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGRlbGV0ZUNyaXNpczogZnVuY3Rpb24gKG9iaikge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB1cmwgPSBob3N0ICsgJy9hcGkvc3lzdGVtL2NyaXNpcyc7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICRodHRwLmRlbGV0ZSh1cmwsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJoZWFkZXJzXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogb2JqXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgLy91c2VyXHJcbiAgICAgICAgICAgICAgICBnZXRFbXBsb3llZUJ5SWQ6IGZ1bmN0aW9uIChpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB1cmwgPSBob3N0ICsgJy9hcGkvc3lzdGVtL3VzZXJkZXRhaWw/aWQ9JztcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJGh0dHAuZ2V0KHVybCArIGlkKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBzYXZlRW1wbG95ZWU6IGZ1bmN0aW9uIChtb2RlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB1cmwgPSBob3N0ICsgJy9hcGkvc3lzdGVtL3VzZXJzJztcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJGh0dHAucG9zdCh1cmwsIG1vZGVsKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBnZXRFbXBsb3llZUxpc3Q6IGZ1bmN0aW9uIChxdWVyeSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB1cmwgPSBob3N0ICsgJy9hcGkvc3lzdGVtL3VzZXJzP3NlYXJjaD0nO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAkaHR0cC5nZXQodXJsICsgKHF1ZXJ5ID8gcXVlcnkgOiAnJykpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGRlbGV0ZUVtcGxveWVlOiBmdW5jdGlvbiAob2JqKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHVybCA9IGhvc3QgKyAnL2FwaS9zeXN0ZW0vdXNlcnMnO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAkaHR0cC5kZWxldGUodXJsLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaGVhZGVyc1wiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IG9ialxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIC8vbWVkaWNhbFxyXG4gICAgICAgICAgICAgICAgZ2V0U2l0ZUxpc3Q6IGZ1bmN0aW9uIChxdWVyeSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB1cmwgPSBob3N0ICsgJy9hcGkvc3lzdGVtL21lZGljYWxpbnN0aXR1dGlvbnM/c2VhcmNoPSc7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICRodHRwLmdldCh1cmwgKyAocXVlcnkgPyBxdWVyeSA6ICcnKSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgc2F2ZVNpdGU6IGZ1bmN0aW9uIChtb2RlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB1cmwgPSBob3N0ICsgJy9hcGkvc3lzdGVtL21lZGljYWxpbnN0aXR1dGlvbnMnO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAkaHR0cC5wb3N0KHVybCwgbW9kZWwpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGdldFNpdGVCeUlkOiBmdW5jdGlvbiAoaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdXJsID0gaG9zdCArICcvYXBpL3N5c3RlbS9tZWRpY2FsaW5zdGl0dXRpb25kZXRhaWw/aWQ9JztcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJGh0dHAuZ2V0KHVybCArIGlkKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBkZWxldGVTaXRlOiBmdW5jdGlvbiAoZW50aXR5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHVybCA9IGhvc3QgKyAnL2FwaS9zeXN0ZW0vbWVkaWNhbGluc3RpdHV0aW9ucyc7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICRodHRwLmRlbGV0ZSh1cmwsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJoZWFkZXJzXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogZW50aXR5XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgLy8gZGVwYXJ0bWVudFxyXG4gICAgICAgICAgICAgICAgZ2V0RGVwdEJ5SWQ6IGZ1bmN0aW9uIChpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB1cmwgPSBob3N0ICsgJy9hcGkvc3lzdGVtL2RlcHRkZXRhaWw/aWQ9JztcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJGh0dHAuZ2V0KHVybCArIGlkKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBnZXREZXB0TGlzdDogZnVuY3Rpb24gKHF1ZXJ5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHVybCA9IGhvc3QgKyAnL2FwaS9zeXN0ZW0vZGVwdHM/c2VhcmNoPSc7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICRodHRwLmdldCh1cmwgKyAocXVlcnkgPyBxdWVyeSA6ICcnKSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZGVsZXRlRGVwdDogZnVuY3Rpb24gKGVudGl0eSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB1cmwgPSBob3N0ICsgJy9hcGkvc3lzdGVtL2RlcHRzJztcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJGh0dHAuZGVsZXRlKHVybCwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImhlYWRlcnNcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBlbnRpdHlcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBzYXZlRGVwdDogZnVuY3Rpb24gKG1vZGVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHVybCA9IGhvc3QgKyAnL2FwaS9zeXN0ZW0vZGVwdHMnO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAkaHR0cC5wb3N0KHVybCwgbW9kZWwpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIC8vbG9naXN0aWNzXHJcbiAgICAgICAgICAgICAgICBnZXRMb2dpTGlzdDogZnVuY3Rpb24gKGZyb20sIHRvKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHVybCA9IGhvc3QgKyAnL2FwaS9saXMvbG9naXN0aWNzJztcclxuICAgICAgICAgICAgICAgICAgICB1cmwgKz0gJz9mcm9tPScgKyAoZnJvbSA/IGZyb20gOiAnJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsICs9ICcmdG89JyArICh0byA/IHRvIDogJycpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAkaHR0cC5nZXQodXJsKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBzZW5kTG9naTogZnVuY3Rpb24gKG1vZGVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHVybCA9IGhvc3QgKyAnL2FwaS9saXMvc2VuZGxvZ2lzdGljcyc7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICRodHRwLnBvc3QodXJsLCBtb2RlbCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYWNjZXB0TG9naTogZnVuY3Rpb24gKG1vZGVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHVybCA9IGhvc3QgKyAnL2FwaS9saXMvcmVjZWl2ZWxvZ2lzdGljcyc7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICRodHRwLnBvc3QodXJsLCBtb2RlbCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgLy9sYWJyZXN1bHRcclxuICAgICAgICAgICAgICAgIHNhdmVMYWJSZXN1bHQ6IGZ1bmN0aW9uIChtb2RlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB1cmwgPSBob3N0ICsgJy9hcGkvc3lzdGVtL2xhYnJlc3VsdHMnO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAkaHR0cC5wb3N0KHVybCwgbW9kZWwpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIC8vcmVwb3J0XHJcbiAgICAgICAgICAgICAgICBnZXRSZXBvcnRzOiBmdW5jdGlvbiAocXVlcnksIG1pLCByZXFEYXRlLCBwYXRpZW50SWQsIHJlcXVlc3RObykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB1cmwgPSBob3N0ICsgJy9hcGkvbGlzL3JlcG9ydHMnO1xyXG4gICAgICAgICAgICAgICAgICAgIHVybCArPSAnP3NlYXJjaD0nICsgKHF1ZXJ5ID8gcXVlcnkgOiAnJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsICs9ICcmbWlJbmZvPScgKyAobWkgPyBtaSA6ICcnKTtcclxuICAgICAgICAgICAgICAgICAgICB1cmwgKz0gJyZyZXFEYXRlPScgKyAocmVxRGF0ZSA/IHJlcURhdGUgOiAnJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsICs9ICcmcGF0aWVudElkPScgKyAocGF0aWVudElkID8gcGF0aWVudElkIDogJycpO1xyXG4gICAgICAgICAgICAgICAgICAgIHVybCArPSAnJnJlcXVlc3RObz0nICsgKHJlcXVlc3RObyA/IHJlcXVlc3RObyA6ICcnKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJGh0dHAuZ2V0KHVybCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZ2V0UmVwb3J0QnlJZDogZnVuY3Rpb24gKGlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHVybCA9IGhvc3QgKyAnL2FwaS9saXMvcmVwb3J0c2RldGFpbD9pZD0nO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAkaHR0cC5nZXQodXJsICsgaWQpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIC8vYW5hbHlzaXNcclxuICAgICAgICAgICAgICAgIGdldEFuYWx5c2lzOiBmdW5jdGlvbiAoZnJvbSwgdG8sIG1pLCB0eXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHVybCA9IGhvc3QgKyAnL2FwaS9saXMvc2FtcGxlcmVwb3J0JztcclxuICAgICAgICAgICAgICAgICAgICB1cmwgKz0gJz9mcm9tPScgKyAoZnJvbSA/IGZyb20gOiAnJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsICs9ICcmdG89JyArICh0byA/IHRvIDogJycpO1xyXG4gICAgICAgICAgICAgICAgICAgIHVybCArPSAnJm1pPScgKyAobWkgPyBtaSA6ICcnKTtcclxuICAgICAgICAgICAgICAgICAgICB1cmwgKz0gJyZzYW1wbGVUeXBlPScgKyAodHlwZSA/IHR5cGUgOiAnJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICRodHRwLmdldCh1cmwpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIC8vb3RoZXJcclxuICAgICAgICAgICAgICAgIGdldFNleExpc3Q6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdXJsID0gaG9zdCArICcvYXBwL21vY2tfZGF0YS9zZXhfbGlzdC5qc29uJztcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJGh0dHAuZ2V0KHVybCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZ2V0RW51bTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB1cmwgPSBob3N0ICsgJy9hcHAvY29uZmlnL2VudW0uanMnO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAkaHR0cC5nZXQodXJsKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBkZWxldGVQYXRpZW50OiBmdW5jdGlvbiAoaWQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZ2V0U2FtcGxlTGlzdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB1cmwgPSBob3N0ICsgJy9tb2NrX2RhdGEvc2FtcGxlX2xpc3QuanNvbic7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICRodHRwLmdldCh1cmwpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIC8vbG9naW5cclxuICAgICAgICAgICAgICAgIGxvZ2luOiBmdW5jdGlvbiAodXNlcm5hbWUsIHBhc3N3b3JkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHVybCA9IGhvc3QgKyAnL2FwaS9zeXN0ZW0vbG9naW4nO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAkaHR0cC5wb3N0KHVybCwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiB1c2VybmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgY2hhbmdlcHdkOiBmdW5jdGlvbiAoaWQsIHNyY3B3ZCwgbmV3cHdkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHVybCA9IGhvc3QgKyAnL2FwaS9zeXN0ZW0vY2hhbmdlcHdkJztcclxuICAgICAgICAgICAgICAgICAgICB1cmwgKz0gJz91c2VySWQ9JyArIChpZCA/IGlkIDogJycpO1xyXG4gICAgICAgICAgICAgICAgICAgIHVybCArPSAnJnNyY1B3ZD0nICsgKHNyY3B3ZCA/IHNyY3B3ZCA6ICcnKTtcclxuICAgICAgICAgICAgICAgICAgICB1cmwgKz0gJyZuZXdQd2Q9JyArIChuZXdwd2QgPyBuZXdwd2QgOiAnJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICRodHRwLmdldCh1cmwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XSk7IiwiYW5ndWxhci5tb2R1bGUoJ2NvbW1vblNlcnZpY2UnKS5cclxuICAgIHNlcnZpY2UoJ3N0b3JhZ2UnLCBbJyRsb2NhbFN0b3JhZ2UnLCckY29va2llcycsJyRjb29raWVTdG9yZScsIGZ1bmN0aW9uICgkbG9jYWxTdG9yYWdlLCRjb29raWVzLCRjb29raWVTdG9yZSkge1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBjYWxsYmFjazogbnVsbCxcclxuICAgICAgICAgICAgc2V0VG9rZW5BbmRVc2VyOiBmdW5jdGlvbiAodG9rZW4sIHVzZXIpIHtcclxuICAgICAgICAgICAgICAgIC8vICRsb2NhbFN0b3JhZ2UudG9rZW4gPSB0b2tlbjtcclxuICAgICAgICAgICAgICAgIC8vICRsb2NhbFN0b3JhZ2UudXNlciA9IHVzZXI7XHJcbiAgICAgICAgICAgICAgICAvLyRjb29raWVzLnRva2VuID0gIHRva2VuO1xyXG4gICAgICAgICAgICAgICAgLy8kY29va2llcy51c2VyID0gSlNPTi5zdHJpbmdpZnkodXNlcik7IFxyXG4gICAgICAgICAgICAgICAgJC5jb29raWUoJ3Rva2VuJywgdG9rZW4sIHsgcGF0aDogJy8nIH0pO1xyXG4gICAgICAgICAgICAgICAgJC5jb29raWUoJ3VzZXInLCBKU09OLnN0cmluZ2lmeSh1c2VyKSwgeyBwYXRoOiAnLycgfSk7XHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UuY3VyVXNlciA9IEpTT04uc3RyaW5naWZ5KHVzZXIpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGlzQWRtaW4gPSB1c2VyICYmIHVzZXIuZW1Db2RlICYmIHVzZXIuZW1Db2RlLnRvTG93ZXJDYXNlKCkgPT09ICdhZG1pbic7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FsbGJhY2sodXNlciwgaXNBZG1pbik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGxvZ291dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgLy8gJGxvY2FsU3RvcmFnZS50b2tlbiA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAvLyAkbG9jYWxTdG9yYWdlLnVzZXIgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlICRjb29raWVzWyd0b2tlbiddO1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlICRjb29raWVzWyd1c2VyJ107XHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnY3VyVXNlcicpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBnZXRVc2VyOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAvL3JldHVybiAkbG9jYWxTdG9yYWdlLnVzZXI7XHJcbiAgICAgICAgICAgICAgICBpZiAoISRjb29raWVzLnVzZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKCRjb29raWVzLnVzZXIpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBpc0xvZ2luOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoJGNvb2tpZXMudG9rZW4pIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBpc0FkbWluOiBmdW5jdGlvbiAodSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHVzZXIgPSB1IHx8IEpTT04ucGFyc2UoJGNvb2tpZXMudXNlciB8fCAne30nKTtcclxuICAgICAgICAgICAgICAgIHZhciBpc0FkbWluID0gdXNlciAmJiB1c2VyLmVtQ29kZSAmJiB1c2VyLmVtQ29kZS50b0xvd2VyQ2FzZSgpID09PSAnYWRtaW4nO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGlzQWRtaW47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfV0pOyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbi8qKlxyXG4gKiAwLjEuMVxyXG4gKiBEZWZlcnJlZCBsb2FkIGpzL2NzcyBmaWxlLCB1c2VkIGZvciB1aS1qcS5qcyBhbmQgTGF6eSBMb2FkaW5nLlxyXG4gKiBcclxuICogQCBmbGF0ZnVsbC5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICogQXV0aG9yIHVybDogI3VzZXIvZmxhdGZ1bGxcclxuICovXHJcblxyXG5hbmd1bGFyLm1vZHVsZSgndWkubG9hZCcsIFtdKVxyXG5cdC5zZXJ2aWNlKCd1aUxvYWQnLCBbJyRkb2N1bWVudCcsICckcScsICckdGltZW91dCcsIGZ1bmN0aW9uICgkZG9jdW1lbnQsICRxLCAkdGltZW91dCkge1xyXG5cclxuXHRcdHZhciBsb2FkZWQgPSBbXTtcclxuXHRcdHZhciBwcm9taXNlID0gZmFsc2U7XHJcblx0XHR2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogQ2hhaW4gbG9hZHMgdGhlIGdpdmVuIHNvdXJjZXNcclxuXHRcdCAqIEBwYXJhbSBzcmNzIGFycmF5LCBzY3JpcHQgb3IgY3NzXHJcblx0XHQgKiBAcmV0dXJucyB7Kn0gUHJvbWlzZSB0aGF0IHdpbGwgYmUgcmVzb2x2ZWQgb25jZSB0aGUgc291cmNlcyBoYXMgYmVlbiBsb2FkZWQuXHJcblx0XHQgKi9cclxuXHRcdHRoaXMubG9hZCA9IGZ1bmN0aW9uIChzcmNzKSB7XHJcblx0XHRcdHNyY3MgPSBhbmd1bGFyLmlzQXJyYXkoc3JjcykgPyBzcmNzIDogc3Jjcy5zcGxpdCgvXFxzKy8pO1xyXG5cdFx0XHR2YXIgc2VsZiA9IHRoaXM7XHJcblx0XHRcdGlmKCFwcm9taXNlKXtcclxuXHRcdFx0XHRwcm9taXNlID0gZGVmZXJyZWQucHJvbWlzZTtcclxuXHRcdFx0fVxyXG4gICAgICBhbmd1bGFyLmZvckVhY2goc3JjcywgZnVuY3Rpb24oc3JjKSB7XHJcbiAgICAgIFx0cHJvbWlzZSA9IHByb21pc2UudGhlbiggZnVuY3Rpb24oKXtcclxuICAgICAgXHRcdHJldHVybiBzcmMuaW5kZXhPZignLmNzcycpID49MCA/IHNlbGYubG9hZENTUyhzcmMpIDogc2VsZi5sb2FkU2NyaXB0KHNyYyk7XHJcbiAgICAgIFx0fSApO1xyXG4gICAgICB9KTtcclxuICAgICAgZGVmZXJyZWQucmVzb2x2ZSgpO1xyXG4gICAgICByZXR1cm4gcHJvbWlzZTtcclxuXHRcdH1cclxuXHJcblx0XHQvKipcclxuXHRcdCAqIER5bmFtaWNhbGx5IGxvYWRzIHRoZSBnaXZlbiBzY3JpcHRcclxuXHRcdCAqIEBwYXJhbSBzcmMgVGhlIHVybCBvZiB0aGUgc2NyaXB0IHRvIGxvYWQgZHluYW1pY2FsbHlcclxuXHRcdCAqIEByZXR1cm5zIHsqfSBQcm9taXNlIHRoYXQgd2lsbCBiZSByZXNvbHZlZCBvbmNlIHRoZSBzY3JpcHQgaGFzIGJlZW4gbG9hZGVkLlxyXG5cdFx0ICovXHJcblx0XHR0aGlzLmxvYWRTY3JpcHQgPSBmdW5jdGlvbiAoc3JjKSB7XHJcblx0XHRcdGlmKGxvYWRlZFtzcmNdKSByZXR1cm4gbG9hZGVkW3NyY10ucHJvbWlzZTtcclxuXHJcblx0XHRcdHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcblx0XHRcdHZhciBzY3JpcHQgPSAkZG9jdW1lbnRbMF0uY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcblx0XHRcdHNjcmlwdC5zcmMgPSBzcmM7XHJcblx0XHRcdHNjcmlwdC5vbmxvYWQgPSBmdW5jdGlvbiAoZSkge1xyXG5cdFx0XHRcdCR0aW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRcdGRlZmVycmVkLnJlc29sdmUoZSk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH07XHJcblx0XHRcdHNjcmlwdC5vbmVycm9yID0gZnVuY3Rpb24gKGUpIHtcclxuXHRcdFx0XHQkdGltZW91dChmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0XHRkZWZlcnJlZC5yZWplY3QoZSk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH07XHJcblx0XHRcdCRkb2N1bWVudFswXS5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdCk7XHJcblx0XHRcdGxvYWRlZFtzcmNdID0gZGVmZXJyZWQ7XHJcblxyXG5cdFx0XHRyZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuXHRcdH07XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBEeW5hbWljYWxseSBsb2FkcyB0aGUgZ2l2ZW4gQ1NTIGZpbGVcclxuXHRcdCAqIEBwYXJhbSBocmVmIFRoZSB1cmwgb2YgdGhlIENTUyB0byBsb2FkIGR5bmFtaWNhbGx5XHJcblx0XHQgKiBAcmV0dXJucyB7Kn0gUHJvbWlzZSB0aGF0IHdpbGwgYmUgcmVzb2x2ZWQgb25jZSB0aGUgQ1NTIGZpbGUgaGFzIGJlZW4gbG9hZGVkLlxyXG5cdFx0ICovXHJcblx0XHR0aGlzLmxvYWRDU1MgPSBmdW5jdGlvbiAoaHJlZikge1xyXG5cdFx0XHRpZihsb2FkZWRbaHJlZl0pIHJldHVybiBsb2FkZWRbaHJlZl0ucHJvbWlzZTtcclxuXHJcblx0XHRcdHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcblx0XHRcdHZhciBzdHlsZSA9ICRkb2N1bWVudFswXS5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XHJcblx0XHRcdHN0eWxlLnJlbCA9ICdzdHlsZXNoZWV0JztcclxuXHRcdFx0c3R5bGUudHlwZSA9ICd0ZXh0L2Nzcyc7XHJcblx0XHRcdHN0eWxlLmhyZWYgPSBocmVmO1xyXG5cdFx0XHRzdHlsZS5vbmxvYWQgPSBmdW5jdGlvbiAoZSkge1xyXG5cdFx0XHRcdCR0aW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRcdGRlZmVycmVkLnJlc29sdmUoZSk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH07XHJcblx0XHRcdHN0eWxlLm9uZXJyb3IgPSBmdW5jdGlvbiAoZSkge1xyXG5cdFx0XHRcdCR0aW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRcdGRlZmVycmVkLnJlamVjdChlKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fTtcclxuXHRcdFx0JGRvY3VtZW50WzBdLmhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xyXG5cdFx0XHRsb2FkZWRbaHJlZl0gPSBkZWZlcnJlZDtcclxuXHJcblx0XHRcdHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG5cdFx0fTtcclxufV0pOyIsImFuZ3VsYXIubW9kdWxlKCdjb21tb25TZXJ2aWNlJykuXHJcbiAgICBzZXJ2aWNlKCd1dGlsJywgWydlbnVtU2VydmljZScsIGZ1bmN0aW9uIChlbnVtU2VyYmljZSkge1xyXG4gICAgICAgIHZhciBlbnVtTWFwID0gZW51bVNlcmJpY2U7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgZm9ybWF0ZURhdGU6IGZ1bmN0aW9uIChkYXRlKSB7XHJcbiAgICAgICAgICAgICAgICBpZighZGF0ZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGQgPSBuZXcgRGF0ZShkYXRlKSxcclxuICAgICAgICAgICAgICAgICAgICBtb250aCA9ICcnICsgKGQuZ2V0TW9udGgoKSArIDEpLFxyXG4gICAgICAgICAgICAgICAgICAgIGRheSA9ICcnICsgZC5nZXREYXRlKCksXHJcbiAgICAgICAgICAgICAgICAgICAgeWVhciA9IGQuZ2V0RnVsbFllYXIoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAobW9udGgubGVuZ3RoIDwgMikgbW9udGggPSAnMCcgKyBtb250aDtcclxuICAgICAgICAgICAgICAgIGlmIChkYXkubGVuZ3RoIDwgMikgZGF5ID0gJzAnICsgZGF5O1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBbeWVhciwgbW9udGgsIGRheV0uam9pbignLScpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBnZXRSZXF1ZXN0U3RhdHVzOiBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBlbnVtTWFwWydyZXF1ZXN0X3N0J11bdmFsdWVdO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBnZXRMb2dpc3RpY3NTdGF0dXM6IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGVudW1NYXBbJ2xvZ2lzdGljc19zdCddW3ZhbHVlXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9XSk7IiwiYW5ndWxhci5tb2R1bGUoJ3VpRGlyZWN0JylcclxuICAgIC5kaXJlY3RpdmUoJ3VpSW5wdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcmVzdHJpY3Q6ICdFJyxcclxuICAgICAgICAgICAgc2NvcGU6IHtcclxuICAgICAgICAgICAgICAgIHZhbDogJz0nXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHJlcGxhY2U6IHRydWUsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL2RpcmVjdGl2ZXMvd2lkZ2V0L2lucHV0L2lucHV0Lmh0bWwnLFxyXG4gICAgICAgICAgICBsaW5rOmZ1bmN0aW9uKCRzY29wZSwgZWxlbSwgYXR0ciwgY3RybCl7XHJcblxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjb250cm9sbGVyOiBmdW5jdGlvbiAoJHNjb3BlLCAkZWxlbWVudCwgJGF0dHJzKSB7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH0pO1xyXG5cclxuIl19
