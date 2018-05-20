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
                            data: null
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
            ['emCode', 'emName', 'titleName', 'idNumber'].forEach(function (field) {
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
            if ($scope.siteList) {
                $scope.siteList.forEach(function (item) {
                    if (item.id == $scope.model.siteId){
                        $scope.model.selectedSite = item;
                    }
                });
            }
            if ($scope.deptList) {
                $scope.deptList.forEach(function (item) {
                    if (item.id == $scope.model.deptId){
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
            ['lisName', 'lisCode'].forEach(function (field) {
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
        selectedlabItem: null,
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
        if ($scope.model.selectedlabItem) {
            $scope.model.lmId = $scope.model.selectedlabItem.id;
        }

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
            ['sendEmName', 'lsEmName', 'centerEmName','lsStatusName'].forEach(function (field) {
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

    $scope.dialogSubmit = function () {
        if ($scope.model.selectedSendUser) {
            $scope.model.sendEmId = $scope.model.selectedSendUser.id;
        }
        if ($scope.model.selectedAcceptUser) {
            $scope.model.lsEmId = $scope.model.selectedAcceptUser.id;
        }
        if ($scope.model.selectedCenterAcceptUser) {
            $scope.model.centerEmId = $scope.model.selectedCenterAcceptUser.id;
        }
        dataService.acceptLogi($scope.model).then(function () {
            grid.reload();
            // var url = $state.href('logistics_print', { data: $scope.model });
            // window.open(window.location.href.split('#')[0] + url, '_blank');
            $state.go('logistics_print', { data: $scope.model });
            $modalInstance.close();
        });
    };
}]);


app.controller('LogisticsPrintCtrl', ['$scope', '$stateParams', function ($scope, $stateParams) {
    $scope.data = $stateParams.data;

    $scope.model = {
        sendEm: '',
        lsEm: '',
        centerEm: '',
        barCodes: []
    };

    if ($stateParams.data && $stateParams.data.selectedSendUser) {
        $scope.model.sendEm = $stateParams.data.selectedSendUser.emName;
    }
    if ($stateParams.data && $stateParams.data.selectedAcceptUser) {
        $scope.model.lsEm = $stateParams.data.selectedAcceptUser.emName;
    }
    if ($stateParams.data && $stateParams.data.selectedCenterAcceptUser) {
        $scope.model.centerEm = $stateParams.data.selectedCenterAcceptUser.emName;
    }
    if ($stateParams.data && $stateParams.data.barCodes) {
        $scope.model.barCodes = $stateParams.data.barCodes;
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
                var entity = row.entity[field]+'';
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


    if ($stateParams.id) {
        dataService.getSiteById($stateParams.id).then(function (result) {
            if (result.data) {
                $scope.model = result.data;
            }
        });
    }



    $scope.submit = function () {
        //console.log($scope.model);
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
        dataService.getRequestList($scope.model.filterValue, $scope.model.startTime, $scope.model.endTime).then(function (result) {
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
                acceptLogi: function (model) {
                    var url = host + '/api/lis/logistics';
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


//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsImNvbmZpZy5qcyIsImNvbmZpZy5sYXp5bG9hZC5qcyIsImNvbmZpZy5yb3V0ZXIuanMiLCJtYWluLmpzIiwiY29udHJvbGxlcnMvY2F0ZWdvcnlDdHJsLmpzIiwiY29udHJvbGxlcnMvY3Jpc2lzQ3RybC5qcyIsImNvbnRyb2xsZXJzL2RlcGF0Q3RybC5qcyIsImNvbnRyb2xsZXJzL2VtcGxveWVlQ3RybC5qcyIsImNvbnRyb2xsZXJzL2xhYkl0ZW1DdHJsLmpzIiwiY29udHJvbGxlcnMvbGFiSXRlbVNldEN0cmwuanMiLCJjb250cm9sbGVycy9sYWJyZXN1bHRDdHJsLmpzIiwiY29udHJvbGxlcnMvbG9naXN0aWNzQ3RybC5qcyIsImNvbnRyb2xsZXJzL21lZGljYWxDdHJsLmpzIiwiY29udHJvbGxlcnMvcGF0aWVudEN0cmwuanMiLCJjb250cm9sbGVycy9xY3ZhbHVlQ3RybC5qcyIsImNvbnRyb2xsZXJzL3JlcXVlc3RDdHJsLmpzIiwiY29udHJvbGxlcnMvc2FtcGxlVHlwZUN0cmwuanMiLCJkaXJlY3RpdmVzL3NldG5nYW5pbWF0ZS5qcyIsImRpcmVjdGl2ZXMvdWktYnV0dGVyYmFyLmpzIiwiZGlyZWN0aXZlcy91aS1mb2N1cy5qcyIsImRpcmVjdGl2ZXMvdWktZnVsbHNjcmVlbi5qcyIsImRpcmVjdGl2ZXMvdWktanEuanMiLCJkaXJlY3RpdmVzL3VpLW1vZHVsZS5qcyIsImRpcmVjdGl2ZXMvdWktbmF2LmpzIiwiZGlyZWN0aXZlcy91aS1zY3JvbGwuanMiLCJkaXJlY3RpdmVzL3VpLXNoaWZ0LmpzIiwiZGlyZWN0aXZlcy91aS10b2dnbGVjbGFzcy5qcyIsImRpcmVjdGl2ZXMvdWktdmFsaWRhdGUuanMiLCJzZXJ2aWNlcy9lbnVtU2VydmljZS5qcyIsInNlcnZpY2VzL2dsb2JhbC5qcyIsInNlcnZpY2VzL2h0dHBTZXJ2aWNlLmpzIiwic2VydmljZXMvdWktbG9hZC5qcyIsInNlcnZpY2VzL3V0aWwuanMiLCJkaXJlY3RpdmVzL3dpZGdldC9pbnB1dC9pbnB1dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDMUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM5T0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN6REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2hIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNuSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDeklBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDeEtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNqSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNySEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNwSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3BNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzVHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDakdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3hNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN4TUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMvR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNyRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3BFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN6Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN2SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM3UUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDeFNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzVGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFsbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcblxyXG5hbmd1bGFyLm1vZHVsZSgnYXBwJywgW1xyXG4gICAgJ25nQW5pbWF0ZScsXHJcbiAgICAnbmdDb29raWVzJyxcclxuICAgICduZ1Jlc291cmNlJyxcclxuICAgICduZ1Nhbml0aXplJyxcclxuICAgICduZ1RvdWNoJyxcclxuICAgICduZ1N0b3JhZ2UnLFxyXG4gICAgJ3VpLnJvdXRlcicsXHJcbiAgICAndWkuYm9vdHN0cmFwJyxcclxuICAgICd1aS5sb2FkJyxcclxuICAgICd1aS5qcScsXHJcbiAgICAndWkudmFsaWRhdGUnLFxyXG4gICAgJ29jLmxhenlMb2FkJyxcclxuICAgICdwYXNjYWxwcmVjaHQudHJhbnNsYXRlJyxcclxuICAgICd0b2FzdGVyJyxcclxuICAgICd1aS5ncmlkJyxcclxuICAgICd1aS5ncmlkLmVkaXQnLFxyXG4gICAgJ3VpLmdyaWQuc2VsZWN0aW9uJyxcclxuICAgICd1aS5zZWxlY3QnLFxyXG4gICAgLy9jdXN0b21cclxuICAgICdodHRwU2VydmljZScsXHJcbiAgICAnY29tbW9uU2VydmljZScsXHJcbiAgICAndWlEaXJlY3QnXHJcbl0pO1xyXG5cclxuYW5ndWxhci5tb2R1bGUoJ3VpRGlyZWN0JyxbXSk7XHJcblxyXG5hbmd1bGFyLm1vZHVsZSgnY29tbW9uU2VydmljZScsW10pO1xyXG4iLCIvLyBjb25maWdcblxudmFyIGFwcCA9XG4gIGFuZ3VsYXIubW9kdWxlKCdhcHAnKS5jb25maWcoXG4gICAgWyckY29udHJvbGxlclByb3ZpZGVyJywgJyRjb21waWxlUHJvdmlkZXInLCAnJGZpbHRlclByb3ZpZGVyJywgJyRwcm92aWRlJyxcbiAgICAgIGZ1bmN0aW9uICgkY29udHJvbGxlclByb3ZpZGVyLCAkY29tcGlsZVByb3ZpZGVyLCAkZmlsdGVyUHJvdmlkZXIsICRwcm92aWRlKSB7XG5cbiAgICAgICAgLy8gbGF6eSBjb250cm9sbGVyLCBkaXJlY3RpdmUgYW5kIHNlcnZpY2VcbiAgICAgICAgYXBwLmNvbnRyb2xsZXIgPSAkY29udHJvbGxlclByb3ZpZGVyLnJlZ2lzdGVyO1xuICAgICAgICBhcHAuZGlyZWN0aXZlID0gJGNvbXBpbGVQcm92aWRlci5kaXJlY3RpdmU7XG4gICAgICAgIGFwcC5maWx0ZXIgPSAkZmlsdGVyUHJvdmlkZXIucmVnaXN0ZXI7XG4gICAgICAgIGFwcC5mYWN0b3J5ID0gJHByb3ZpZGUuZmFjdG9yeTtcbiAgICAgICAgYXBwLnNlcnZpY2UgPSAkcHJvdmlkZS5zZXJ2aWNlO1xuICAgICAgICBhcHAuY29uc3RhbnQgPSAkcHJvdmlkZS5jb25zdGFudDtcbiAgICAgICAgYXBwLnZhbHVlID0gJHByb3ZpZGUudmFsdWU7XG4gICAgICB9XG4gICAgXSkuY29uZmlnKFsnJHRyYW5zbGF0ZVByb3ZpZGVyJywgZnVuY3Rpb24gKCR0cmFuc2xhdGVQcm92aWRlcikge1xuICAgICAgJHRyYW5zbGF0ZVByb3ZpZGVyLnVzZVN0YXRpY0ZpbGVzTG9hZGVyKHtcbiAgICAgICAgcHJlZml4OiAnaTE4bi8nLFxuICAgICAgICBzdWZmaXg6ICcuanMnXG4gICAgICB9KTtcbiAgICAgICR0cmFuc2xhdGVQcm92aWRlci5wcmVmZXJyZWRMYW5ndWFnZSgnemhfY24nKTtcbiAgICAgICR0cmFuc2xhdGVQcm92aWRlci51c2VMb2NhbFN0b3JhZ2UoKTtcbiAgICB9XSk7XG5cbi8vIOe/u+ivkeW/q+aNt+aWueW8j1xudmFyIFQgPSB7fTtcbi8vIOacrOWcsOWtmOWCqOW/q+aNt+aWueW8j1xudmFyIFMgPSB7fTtcbmFwcC5ydW4oWyckdHJhbnNsYXRlJywgJyRsb2NhbFN0b3JhZ2UnLFxuICBmdW5jdGlvbiAoJHRyYW5zbGF0ZSwgJGxvY2FsU3RvcmFnZSkge1xuICAgIC8vIOWumuS5iee/u+ivkeW/q+aNt+aWueW8j1xuICAgIFQgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICByZXR1cm4gJHRyYW5zbGF0ZS5pbnN0YW50KGtleSk7XG4gICAgfTtcblxuICAgIFMgPSAkbG9jYWxTdG9yYWdlO1xuICB9XG5dKTtcblxuYXBwLmNvbnN0YW50KCdjb25maWcnLCB7XG4gIGhvc3Q6ICdodHRwOi8vbG9jYWxob3N0OjgxMjMnXG59KTsiLCIvLyBsYXp5bG9hZCBjb25maWdcblxuYW5ndWxhci5tb2R1bGUoJ2FwcCcpXG4gIC5jb25zdGFudCgnSlFfQ09ORklHJywge1xuICAgICAgZmlsZXN0eWxlOiAgICAgIFsndmVuZG9yMi9qcXVlcnkvZmlsZS9ib290c3RyYXAtZmlsZXN0eWxlLm1pbi5qcyddLFxuICAgICAgc2xpZGVyOiAgICAgICAgIFsndmVuZG9yMi9qcXVlcnkvc2xpZGVyL2Jvb3RzdHJhcC1zbGlkZXIuanMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAndmVuZG9yMi9qcXVlcnkvc2xpZGVyL3NsaWRlci5jc3MnXSxcbiAgICAgIHd5c2l3eWc6ICAgICAgICBbJ3ZlbmRvcjIvanF1ZXJ5L3d5c2l3eWcvYm9vdHN0cmFwLXd5c2l3eWcuanMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAndmVuZG9yMi9qcXVlcnkvd3lzaXd5Zy9qcXVlcnkuaG90a2V5cy5qcyddLFxuICAgICAgY2hvc2VuOiAgICAgICAgIFsndmVuZG9yMi9qcXVlcnkvY2hvc2VuL2Nob3Nlbi5qcXVlcnkubWluLmpzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ3ZlbmRvcjIvanF1ZXJ5L2Nob3Nlbi9jaG9zZW4uY3NzJ10sXG4gICAgICBUb3VjaFNwaW46ICAgICAgWyd2ZW5kb3IyL2pxdWVyeS9zcGlubmVyL2pxdWVyeS5ib290c3RyYXAtdG91Y2hzcGluLm1pbi5qcycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICd2ZW5kb3IyL2pxdWVyeS9zcGlubmVyL2pxdWVyeS5ib290c3RyYXAtdG91Y2hzcGluLmNzcyddLFxuICAgICAgfVxuICApOyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbi8qKlxyXG4gKiBDb25maWcgZm9yIHRoZSByb3V0ZXJcclxuICovXHJcbmFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4gICAgLnJ1bihcclxuICAgICAgICBbJyRyb290U2NvcGUnLCAnJHN0YXRlJywgJyRzdGF0ZVBhcmFtcycsXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uICgkcm9vdFNjb3BlLCAkc3RhdGUsICRzdGF0ZVBhcmFtcykge1xyXG4gICAgICAgICAgICAgICAgJHJvb3RTY29wZS4kc3RhdGUgPSAkc3RhdGU7XHJcbiAgICAgICAgICAgICAgICAkcm9vdFNjb3BlLiRzdGF0ZVBhcmFtcyA9ICRzdGF0ZVBhcmFtcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgIClcclxuICAgIC5jb25maWcoXHJcbiAgICAgICAgWyckc3RhdGVQcm92aWRlcicsICckdXJsUm91dGVyUHJvdmlkZXInLFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikge1xyXG5cclxuICAgICAgICAgICAgICAgICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy9hcHAvcmVxdWVzdCcpO1xyXG5cclxuICAgICAgICAgICAgICAgICRzdGF0ZVByb3ZpZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgLnN0YXRlKCdhcHAnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFic3RyYWN0OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6ICcvYXBwJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICd0cGwvYXBwLmh0bWwnXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuc3RhdGUoJ2FwcC5jcmlzaXMnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJy9jcmlzaXMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3RwbC9jcmlzaXMvY3Jpc2lzX2xpc3QuaHRtbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdDcmlzaXNMaXN0Q3RybCdcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdGF0ZSgnYXBwLmNyaXNpc19kZXRhaWwnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJy9jcmlzaXNfZGV0YWlsJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3RwbC9jcmlzaXMvY3Jpc2lzX2RldGFpbC5odG1sJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ0NyaXNpc0RldGFpbEN0cmwnXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuc3RhdGUoJ2FwcC5kZXBhcnQnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJy9kZXBhcnQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3RwbC9kZXBhcnQvZGVwYXJ0X2xpc3QuaHRtbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdEZXBhcnRMaXN0Q3RybCdcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdGF0ZSgnYXBwLmRlcGFydF9kZXRhaWwnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJy9kZXBhcnRfZGV0YWlsJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3RwbC9kZXBhcnQvZGVwYXJ0X2RldGFpbC5odG1sJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ0RlcGFydERldGFpbEN0cmwnXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuc3RhdGUoJ2FwcC5yZXF1ZXN0Jywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6ICcvcmVxdWVzdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICd0cGwvcmVxdWVzdC9yZXF1ZXN0X2xpc3QuaHRtbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdSZXF1ZXN0TGlzdEN0cmwnXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuc3RhdGUoJ2FwcC5yZXF1ZXN0X2RldGFpbCcsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiAnL3JlcXVlc3RfZGV0YWlsJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3RwbC9yZXF1ZXN0L3JlcXVlc3RfZGV0YWlsLmh0bWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnUmVxdWVzdERldGFpbEN0cmwnXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuc3RhdGUoJ2FwcC5lbXBsb3llZScsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiAnL2VtcGxveWVlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3RwbC9lbXBsb3llZS9lbXBsb3llZV9saXN0Lmh0bWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnRW1wbG95ZWVMaXN0Q3RybCdcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdGF0ZSgnYXBwLmVtcGxveWVlX2RldGFpbCcsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiAnL2VtcGxveWVlX2RldGFpbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICd0cGwvZW1wbG95ZWUvZW1wbG95ZWVfZGV0YWlsLmh0bWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnRW1wbG95ZWVEZXRhaWxDdHJsJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnN0YXRlKCdhcHAucGF0aWVudCcsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiAnL3BhdGllbnQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAndHBsL3BhdGllbnQvcGF0aWVudF9saXN0Lmh0bWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnUGF0aWVudExpc3RDdHJsJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnN0YXRlKCdhcHAucGF0aWVudF9kZXRhaWwnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJy9wYXRpZW50X2RldGFpbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICd0cGwvcGF0aWVudC9wYXRpZW50X2RldGFpbC5odG1sJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ1BhdGllbnREZXRhaWxDdHJsJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnN0YXRlKCdhcHAubWVkaWNhbCcsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiAnL21lZGljYWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAndHBsL21lZGljYWwvbWVkaWNhbF9saXN0Lmh0bWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnTWVkaWNhbExpc3RDdHJsJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnN0YXRlKCdhcHAubWVkaWNhbF9kZXRhaWwnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJy9tZWRpY2FsX2RldGFpbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICd0cGwvbWVkaWNhbC9tZWRpY2FsX2RldGFpbC5odG1sJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ01lZGljYWxEZXRhaWxDdHJsJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnN0YXRlKCdhcHAubGFiaXRlbScsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiAnL2xhYml0ZW0nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAndHBsL2xhYml0ZW0vbGFiaXRlbV9saXN0Lmh0bWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnTGFiaXRlbUxpc3RDdHJsJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnN0YXRlKCdhcHAubGFiaXRlbV9kZXRhaWwnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJy9sYWJpdGVtX2RldGFpbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICd0cGwvbGFiaXRlbS9sYWJpdGVtX2RldGFpbC5odG1sJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ0xhYml0ZW1EZXRhaWxDdHJsJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnN0YXRlKCdhcHAuY2F0ZWdvcnknLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJy9jYXRlZ29yeScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICd0cGwvY2F0ZWdvcnkvY2F0ZWdvcnlfbGlzdC5odG1sJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ0NhdGVnb3J5TGlzdEN0cmwnXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuc3RhdGUoJ2FwcC5jYXRlZ29yeV9kZXRhaWwnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJy9jYXRlZ29yeV9kZXRhaWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAndHBsL2NhdGVnb3J5L2NhdGVnb3J5X2RldGFpbC5odG1sJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ0NhdGVnb3J5RGV0YWlsQ3RybCdcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdGF0ZSgnYXBwLmxvZ2lzdGljcycsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiAnL2xvZ2lzdGljcycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICd0cGwvbG9naXN0aWNzL2xvZ2lzdGljc19saXN0Lmh0bWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnTG9naXN0aWNzTGlzdEN0cmwnXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuc3RhdGUoJ2FwcC5sYWJyZXN1bHQnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJy9sYWJyZXN1bHQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAndHBsL2xhYnJlc3VsdC9sYWJyZXN1bHRfbGlzdC5odG1sJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ0xhYnJlc3VsdExpc3RDdHJsJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnN0YXRlKCdhcHAubGFicmVzdWx0X2RldGFpbCcsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiAnL2xhYnJlc3VsdF9kZXRhaWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAndHBsL2xhYnJlc3VsdC9sYWJyZXN1bHRfZGV0YWlsLmh0bWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnTGFicmVzdWx0RGV0YWlsQ3RybCdcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdGF0ZSgnYXBwLnNhbXBsZXR5cGUnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJy9zYW1wbGV0eXBlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3RwbC9zYW1wbGVfdHlwZS9zYW1wbGV0eXBlX2xpc3QuaHRtbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdTYW1wbGVUeXBlTGlzdEN0cmwnXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuc3RhdGUoJ2FwcC5zYW1wbGV0eXBlX2RldGFpbCcsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiAnL3NhbXBsZXR5cGVfZGV0YWlsJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3RwbC9zYW1wbGVfdHlwZS9zYW1wbGV0eXBlX2RldGFpbC5odG1sJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ1NhbXBsZVR5cGVEZXRhaWxDdHJsJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnN0YXRlKCdhcHAucWN2YWx1ZScsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiAnL3FjdmFsdWUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAndHBsL3FjdmFsdWUvcWN2YWx1ZV9saXN0Lmh0bWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnUWN2YWx1ZUxpc3RDdHJsJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnN0YXRlKCdhcHAucWN2YWx1ZV9kZXRhaWwnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJy9xY3ZhbHVlX2RldGFpbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICd0cGwvcWN2YWx1ZS9xY3ZhbHVlX2RldGFpbC5odG1sJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ1FjdmFsdWVEZXRhaWxDdHJsJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnN0YXRlKCdhcHAubGFiaXRlbXNldCcsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiAnL2xhYml0ZW1zZXQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAndHBsL2xhYml0ZW1zZXQvbGFiaXRlbXNldF9saXN0Lmh0bWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnTGFiSXRlbVNldExpc3RDdHJsJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnN0YXRlKCdhcHAubGFiaXRlbXNldF9kZXRhaWwnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJy9sYWJpdGVtc2V0X2RldGFpbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICd0cGwvbGFiaXRlbXNldC9sYWJpdGVtc2V0X2RldGFpbC5odG1sJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ0xhYkl0ZW1TZXREZXRhaWxDdHJsJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnN0YXRlKCdsYWJyZXN1bHRfcHJpbnQnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJy9sYWJyZXN1bHRfcHJpbnQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAndHBsL2xhYnJlc3VsdC9sYWJyZXN1bHRfcHJpbnQuaHRtbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdMYWJyZXN1bHRQcmludEN0cmwnXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuc3RhdGUoJ2xvZ2lzdGljc19wcmludCcsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiAnL2xvZ2lzdGljc19wcmludCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3RwbC9sb2dpc3RpY3MvbG9naXN0aWNzX3ByaW50Lmh0bWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnTG9naXN0aWNzUHJpbnRDdHJsJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICApOyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbi8qIENvbnRyb2xsZXJzICovXHJcblxyXG5hbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuICAuY29udHJvbGxlcignQXBwQ3RybCcsIFsnJHNjb3BlJywgJyR0cmFuc2xhdGUnLCAnJGxvY2FsU3RvcmFnZScsICckd2luZG93JyxcclxuICAgIGZ1bmN0aW9uICgkc2NvcGUsICR0cmFuc2xhdGUsICRsb2NhbFN0b3JhZ2UsICR3aW5kb3cpIHtcclxuICAgICAgLy8gYWRkICdpZScgY2xhc3NlcyB0byBodG1sXHJcbiAgICAgIHZhciBpc0lFID0gISFuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9NU0lFL2kpO1xyXG4gICAgICBpc0lFICYmIGFuZ3VsYXIuZWxlbWVudCgkd2luZG93LmRvY3VtZW50LmJvZHkpLmFkZENsYXNzKCdpZScpO1xyXG4gICAgICBpc1NtYXJ0RGV2aWNlKCR3aW5kb3cpICYmIGFuZ3VsYXIuZWxlbWVudCgkd2luZG93LmRvY3VtZW50LmJvZHkpLmFkZENsYXNzKCdzbWFydCcpO1xyXG5cclxuICAgICAgLy8gY29uZmlnXHJcbiAgICAgICRzY29wZS5hcHAgPSB7XHJcbiAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgIHRoZW1lSUQ6IDEsXHJcbiAgICAgICAgICBuYXZiYXJIZWFkZXJDb2xvcjogJ2JnLWJsYWNrJyxcclxuICAgICAgICAgIG5hdmJhckNvbGxhcHNlQ29sb3I6ICdoZWFkLWxpZ2h0Ymx1ZScsXHJcbiAgICAgICAgICBhc2lkZUNvbG9yOiAnYXNpZGUtYmx1ZScsXHJcbiAgICAgICAgICBoZWFkZXJGaXhlZDogdHJ1ZSxcclxuICAgICAgICAgIGFzaWRlRml4ZWQ6IHRydWUsXHJcbiAgICAgICAgICBhc2lkZUZvbGRlZDogZmFsc2UsXHJcbiAgICAgICAgICBhc2lkZURvY2s6IGZhbHNlLFxyXG4gICAgICAgICAgY29udGFpbmVyOiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gc2F2ZSBzZXR0aW5ncyB0byBsb2NhbCBzdG9yYWdlXHJcbiAgICAgIC8vIGlmICggYW5ndWxhci5pc0RlZmluZWQoJGxvY2FsU3RvcmFnZS5zZXR0aW5ncykgKSB7XHJcbiAgICAgIC8vICAgJHNjb3BlLmFwcC5zZXR0aW5ncyA9ICRsb2NhbFN0b3JhZ2Uuc2V0dGluZ3M7XHJcbiAgICAgIC8vIH0gZWxzZSB7XHJcbiAgICAgIC8vICAgJGxvY2FsU3RvcmFnZS5zZXR0aW5ncyA9ICRzY29wZS5hcHAuc2V0dGluZ3M7XHJcbiAgICAgIC8vIH1cclxuICAgICAgJHNjb3BlLiR3YXRjaCgnYXBwLnNldHRpbmdzJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICgkc2NvcGUuYXBwLnNldHRpbmdzLmFzaWRlRG9jayAmJiAkc2NvcGUuYXBwLnNldHRpbmdzLmFzaWRlRml4ZWQpIHtcclxuICAgICAgICAgIC8vIGFzaWRlIGRvY2sgYW5kIGZpeGVkIG11c3Qgc2V0IHRoZSBoZWFkZXIgZml4ZWQuXHJcbiAgICAgICAgICAkc2NvcGUuYXBwLnNldHRpbmdzLmhlYWRlckZpeGVkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gc2F2ZSB0byBsb2NhbCBzdG9yYWdlXHJcbiAgICAgICAgJGxvY2FsU3RvcmFnZS5zZXR0aW5ncyA9ICRzY29wZS5hcHAuc2V0dGluZ3M7XHJcbiAgICAgIH0sIHRydWUpO1xyXG5cclxuICAgICAgZnVuY3Rpb24gaXNTbWFydERldmljZSgkd2luZG93KSB7XHJcbiAgICAgICAgLy8gQWRhcHRlZCBmcm9tIGh0dHA6Ly93d3cuZGV0ZWN0bW9iaWxlYnJvd3NlcnMuY29tXHJcbiAgICAgICAgdmFyIHVhID0gJHdpbmRvd1snbmF2aWdhdG9yJ11bJ3VzZXJBZ2VudCddIHx8ICR3aW5kb3dbJ25hdmlnYXRvciddWyd2ZW5kb3InXSB8fCAkd2luZG93WydvcGVyYSddO1xyXG4gICAgICAgIC8vIENoZWNrcyBmb3IgaU9zLCBBbmRyb2lkLCBCbGFja2JlcnJ5LCBPcGVyYSBNaW5pLCBhbmQgV2luZG93cyBtb2JpbGUgZGV2aWNlc1xyXG4gICAgICAgIHJldHVybiAoL2lQaG9uZXxpUG9kfGlQYWR8U2lsa3xBbmRyb2lkfEJsYWNrQmVycnl8T3BlcmEgTWluaXxJRU1vYmlsZS8pLnRlc3QodWEpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAkc2NvcGUuJG9uKCckc3RhdGVDaGFuZ2VTdGFydCcsIGZ1bmN0aW9uIChldmVudCwgdG9TdGF0ZSwgdG9QYXJhbXMsIGZyb21TdGF0ZSwgZnJvbVBhcmFtcykge1xyXG5cclxuICAgICAgfSk7XHJcblxyXG4gICAgICAvL3RvcCBsZXZlbCBzY29wZVxyXG4gICAgICAvL2ZpeCBtZVxyXG4gICAgICAvLyRzY29wZS5maWx0ZXJfdGlwID0gVCgnbGlzdC5maWx0ZXJfdGlwJyk7XHJcbiAgICAgICRzY29wZS5maWx0ZXJfdGlwID0gJ+i+k+WFpeaQnOe0ouWFs+mUruWtlyc7XHJcbiAgICB9XSk7IiwiYXBwLmNvbnRyb2xsZXIoJ0NhdGVnb3J5TGlzdEN0cmwnLCBbJyRzY29wZScsICckc3RhdGUnLCAnZGF0YVNlcnZpY2UnLCBmdW5jdGlvbiAoJHNjb3BlLCAkc3RhdGUsIGRhdGFTZXJ2aWNlKSB7XHJcblxyXG4gICAgdmFyIGxpbmsgPSAnYXBwLmNhdGVnb3J5X2RldGFpbCc7XHJcbiAgICB2YXIgZWRpdFVybCA9ICc8YSBjbGFzcz1cImVkaXQtdHBsXCIgdWktc3JlZj1cIicgKyBsaW5rICsgJyh7aWQ6IHJvdy5lbnRpdHkuaWR9KVwiPue8lui+kTwvYT4nO1xyXG4gICAgZWRpdFVybCArPSAnPGEgY2xhc3M9XCJkZWxldGUtdHBsXCIgbmctY2xpY2s9XCJncmlkLmFwcFNjb3BlLmRlbGV0ZShyb3cuZW50aXR5KVwiPuWIoOmZpDwvYT4nO1xyXG5cclxuICAgICRzY29wZS5ncmlkT3B0aW9ucyA9IHtcclxuICAgICAgICBlbmFibGVGaWx0ZXJpbmc6IGZhbHNlLFxyXG4gICAgICAgIG9uUmVnaXN0ZXJBcGk6IGZ1bmN0aW9uIChncmlkQXBpKSB7XHJcbiAgICAgICAgICAgICRzY29wZS5ncmlkQXBpID0gZ3JpZEFwaTtcclxuICAgICAgICAgICAgJHNjb3BlLmdyaWRBcGkuZ3JpZC5yZWdpc3RlclJvd3NQcm9jZXNzb3IoJHNjb3BlLmZpbHRlciwgMjAwKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbHVtbkRlZnM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQ6ICdpZCcsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogJ0lkJyxcclxuICAgICAgICAgICAgICAgIHZpc2libGU6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiAnbGNDb2RlJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAn5qOA6aqM57G75Yir5Luj56CBJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogJ2xjTmFtZScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogJ+ajgOmqjOexu+WIq+WQjeensCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQ6ICdiYXJjb2RlUHJlJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAn5Luj56CB5YmN57yAJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogJ2V4dGVybmFsQ29kZScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogJ+WklumDqOS7o+eggSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ2VkaXQnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICfmk43kvZwnLFxyXG4gICAgICAgICAgICAgICAgY2VsbFRlbXBsYXRlOiBlZGl0VXJsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICB9O1xyXG5cclxuICAgIGRhdGFTZXJ2aWNlLmdldExhYkNhdGVnb3J5TGlzdCgpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICRzY29wZS5ncmlkT3B0aW9ucy5kYXRhID0gcmVzdWx0LmRhdGE7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkc2NvcGUuc2VhcmNoID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICRzY29wZS5ncmlkQXBpLmdyaWQucmVmcmVzaCgpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuY3JlYXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICRzdGF0ZS5nbyhsaW5rKTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmRlbGV0ZSA9IGZ1bmN0aW9uIChvYmopIHtcclxuICAgICAgICBkYXRhU2VydmljZS5kZWxldGVMYWJDYXRlZ29yeShvYmopLnRoZW4oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8ICRzY29wZS5ncmlkT3B0aW9ucy5kYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoJHNjb3BlLmdyaWRPcHRpb25zLmRhdGFbaV0uaWQgPT0gb2JqLmlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmdyaWRPcHRpb25zLmRhdGEuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTs7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5maWx0ZXIgPSBmdW5jdGlvbiAocmVuZGVyYWJsZVJvd3MpIHtcclxuICAgICAgICB2YXIgbWF0Y2hlciA9IG5ldyBSZWdFeHAoJHNjb3BlLmZpbHRlclZhbHVlKTtcclxuICAgICAgICByZW5kZXJhYmxlUm93cy5mb3JFYWNoKGZ1bmN0aW9uIChyb3cpIHtcclxuICAgICAgICAgICAgdmFyIG1hdGNoID0gZmFsc2U7XHJcbiAgICAgICAgICAgIFsnbGNDb2RlJywgJ2xjTmFtZScsICdiYXJjb2RlUHJlJywgJ2V4dGVybmFsQ29kZSddLmZvckVhY2goZnVuY3Rpb24gKGZpZWxkKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZW50aXR5ID0gcm93LmVudGl0eVtmaWVsZF0gKyAnJztcclxuICAgICAgICAgICAgICAgIGlmIChlbnRpdHkubWF0Y2gobWF0Y2hlcikpIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXRjaCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAoIW1hdGNoKSB7XHJcbiAgICAgICAgICAgICAgICByb3cudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHJlbmRlcmFibGVSb3dzO1xyXG4gICAgfTtcclxufV0pO1xyXG5cclxuYXBwLmNvbnRyb2xsZXIoJ0NhdGVnb3J5RGV0YWlsQ3RybCcsIFsnJHNjb3BlJywgJyRzdGF0ZScsICckc3RhdGVQYXJhbXMnLCAnZGF0YVNlcnZpY2UnLCBmdW5jdGlvbiAoJHNjb3BlLCAkc3RhdGUsICRzdGF0ZVBhcmFtcywgZGF0YVNlcnZpY2UpIHtcclxuXHJcbiAgICAkc2NvcGUubW9kZWwgPSB7XHJcbiAgICAgICAgaWQ6IG51bGwsXHJcbiAgICAgICAgbGNDb2RlOiBudWxsLFxyXG4gICAgICAgIGxjTmFtZTogbnVsbCxcclxuICAgICAgICBiYXJjb2RlUHJlOiBudWxsLFxyXG4gICAgICAgIGV4dGVybmFsQ29kZTogbnVsbCxcclxuICAgICAgICBjb2xvcjogbnVsbCxcclxuICAgICAgICBib29sZEFsb25lOiBudWxsLFxyXG4gICAgICAgIGV4YW1OdW06IG51bGxcclxuICAgIH07XHJcblxyXG5cclxuICAgIGlmICgkc3RhdGVQYXJhbXMuaWQpIHtcclxuICAgICAgICBkYXRhU2VydmljZS5nZXRMYWJDYXRlZ29yeUJ5SWQoJHN0YXRlUGFyYW1zLmlkKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5kYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUubW9kZWwgPSByZXN1bHQuZGF0YTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgICRzY29wZS5zdWJtaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZygkc2NvcGUubW9kZWwpO1xyXG4gICAgICAgIGRhdGFTZXJ2aWNlLnNhdmVMYWJDYXRlZ29yeSgkc2NvcGUubW9kZWwpLnRoZW4oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkc3RhdGUuZ28oJ2FwcC5jYXRlZ29yeScpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbn1dKTsiLCJhcHAuY29udHJvbGxlcignQ3Jpc2lzTGlzdEN0cmwnLCBbJyRzY29wZScsICckc3RhdGUnLCAnZGF0YVNlcnZpY2UnLCBmdW5jdGlvbiAoJHNjb3BlLCAkc3RhdGUsIGRhdGFTZXJ2aWNlKSB7XHJcbiAgICAvLyB2YXIgdHBsID0gJzxidXR0b24gaWQ9XCJlZGl0QnRuXCIgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuLXNtYWxsXCIgbmctY2xpY2s9XCJncmlkLmFwcFNjb3BlLmdvKHJvdy5lbnRpdHkpXCIgPkVkaXQ8L2J1dHRvbj4nO1xyXG4gICAgLy8gJHNjb3BlLmdvID0gZnVuY3Rpb24gKHJvd0RhdGEpIHtcclxuICAgIC8vICAgICAkc3RhdGUuZ28oJ2FwcC5jcmlzaXNfZGV0YWlsJywgeyBpZDogcm93RGF0YS5pZCB9KTtcclxuICAgIC8vIH1cclxuXHJcbiAgICB2YXIgZWRpdFVybCA9ICc8YSBjbGFzcz1cImVkaXQtdHBsXCIgdWktc3JlZj1cImFwcC5jcmlzaXNfZGV0YWlsKHtpZDogcm93LmVudGl0eS5pZH0pXCI+57yW6L6RPC9hPjxhIGNsYXNzPVwiZGVsZXRlLXRwbFwiIG5nLWNsaWNrPVwiZ3JpZC5hcHBTY29wZS5kZWxldGUocm93LmVudGl0eSlcIj7liKDpmaQ8L2E+J1xyXG5cclxuICAgICRzY29wZS5ncmlkT3B0aW9ucyA9IHtcclxuICAgICAgICBlbmFibGVGaWx0ZXJpbmc6IGZhbHNlLFxyXG4gICAgICAgIG9uUmVnaXN0ZXJBcGk6IGZ1bmN0aW9uIChncmlkQXBpKSB7XHJcbiAgICAgICAgICAgICRzY29wZS5ncmlkQXBpID0gZ3JpZEFwaTtcclxuICAgICAgICAgICAgJHNjb3BlLmdyaWRBcGkuZ3JpZC5yZWdpc3RlclJvd3NQcm9jZXNzb3IoJHNjb3BlLmZpbHRlciwgMjAwKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbHVtbkRlZnM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQ6ICdpZCcsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogJ0lkJyxcclxuICAgICAgICAgICAgICAgIHZpc2libGU6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiAnbGFiSXRlbS5pdGVtTmFtZScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogJ+ajgOmqjOmhueebridcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQ6ICdub3JtYWxVcHBlcicsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogJ+ato+W4uOS4iumZkCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQ6ICdub3JtYWxMb3cnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICfmraPluLjkuIvpmZAnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiAnY3JlYXRlVGltZScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogJ+WIm+W7uuaXtumXtCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ2VkaXQnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICfmk43kvZwnLFxyXG4gICAgICAgICAgICAgICAgY2VsbFRlbXBsYXRlOiBlZGl0VXJsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICB9O1xyXG5cclxuICAgIGRhdGFTZXJ2aWNlLmdldENyaXNpc0xpc3QoKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAkc2NvcGUuZ3JpZE9wdGlvbnMuZGF0YSA9IHJlc3VsdC5kYXRhO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJHNjb3BlLnNlYXJjaCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkc2NvcGUuZ3JpZEFwaS5ncmlkLnJlZnJlc2goKTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmNyZWF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkc3RhdGUuZ28oJ2FwcC5jcmlzaXNfZGV0YWlsJyk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5kZWxldGUgPSBmdW5jdGlvbiAob2JqKSB7XHJcbiAgICAgICAgZGF0YVNlcnZpY2UuZGVsZXRlQ3Jpc2lzKG9iaikudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgJHNjb3BlLmdyaWRPcHRpb25zLmRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmICgkc2NvcGUuZ3JpZE9wdGlvbnMuZGF0YVtpXS5pZCA9PSBvYmouaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZ3JpZE9wdGlvbnMuZGF0YS5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuZmlsdGVyID0gZnVuY3Rpb24gKHJlbmRlcmFibGVSb3dzKSB7XHJcbiAgICAgICAgdmFyIG1hdGNoZXIgPSBuZXcgUmVnRXhwKCRzY29wZS5maWx0ZXJWYWx1ZSk7XHJcbiAgICAgICAgcmVuZGVyYWJsZVJvd3MuZm9yRWFjaChmdW5jdGlvbiAocm93KSB7XHJcbiAgICAgICAgICAgIHZhciBtYXRjaCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBbJ2xhYkl0ZW0uaXRlbU5hbWUnLCAnbm9ybWFsVXBwZXInLCdub3JtYWxMb3cnXS5mb3JFYWNoKGZ1bmN0aW9uIChmaWVsZCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGVudGl0eSA9IHJvdy5lbnRpdHk7XHJcbiAgICAgICAgICAgICAgICBmaWVsZC5zcGxpdCgnLicpLmZvckVhY2goZnVuY3Rpb24gKGYpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbnRpdHkgPSBlbnRpdHlbZl07XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGVudGl0eSA9IGVudGl0eSArICcnO1xyXG4gICAgICAgICAgICAgICAgaWYgKGVudGl0eS5tYXRjaChtYXRjaGVyKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hdGNoID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmICghbWF0Y2gpIHtcclxuICAgICAgICAgICAgICAgIHJvdy52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcmVuZGVyYWJsZVJvd3M7XHJcbiAgICB9O1xyXG59XSk7XHJcblxyXG5hcHAuY29udHJvbGxlcignQ3Jpc2lzRGV0YWlsQ3RybCcsIFsnJHNjb3BlJywgJyRzdGF0ZScsICckc3RhdGVQYXJhbXMnLCAnZGF0YVNlcnZpY2UnLCBmdW5jdGlvbiAoJHNjb3BlLCAkc3RhdGUsICRzdGF0ZVBhcmFtcywgZGF0YVNlcnZpY2UpIHtcclxuICAgIC8vY29uc29sZS5sb2coJHN0YXRlUGFyYW1zKTtcclxuICAgICRzY29wZS5tb2RlbCA9IHtcclxuICAgICAgICBpZDogbnVsbCxcclxuICAgICAgICBsbUlkOiBudWxsLFxyXG4gICAgICAgIG5vcm1hbFVwcGVyOiBudWxsLFxyXG4gICAgICAgIG5vcm1hbExvdzogbnVsbCxcclxuICAgICAgICBjcmlzaXNVcHBlcjogbnVsbCxcclxuICAgICAgICBjcmlzaXNMb3c6IG51bGwsXHJcbiAgICAgICAgY3Jpc2lzQ2xpbmljYWw6IG51bGwsXHJcbiAgICAgICAgY2xpbmljYXNTaWduaWZpY2FuY2U6IG51bGwsXHJcbiAgICAgICAgc2VsZWN0ZWRsYWJJdGVtOiBudWxsXHJcbiAgICB9O1xyXG4gICAgJHNjb3BlLmxhYkl0ZW1MaXN0ID0gbnVsbDtcclxuICAgIGRhdGFTZXJ2aWNlLmdldGxhYml0ZW1MaXN0KCkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgJHNjb3BlLmxhYkl0ZW1MaXN0ID0gcmVzdWx0LmRhdGE7XHJcbiAgICAgICAgaWYgKCRzdGF0ZVBhcmFtcy5pZCkge1xyXG4gICAgICAgICAgICBkYXRhU2VydmljZS5nZXRDcmlzaXNCeUlkKCRzdGF0ZVBhcmFtcy5pZCkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUubW9kZWwgPSByZXN1bHQuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8ICRzY29wZS5sYWJJdGVtTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJHNjb3BlLmxhYkl0ZW1MaXN0W2ldLmlkID09ICRzY29wZS5tb2RlbC5sbUlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUubW9kZWwuc2VsZWN0ZWRsYWJJdGVtID0gJHNjb3BlLmxhYkl0ZW1MaXN0W2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcblxyXG5cclxuICAgICRzY29wZS5zdWJtaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZygkc2NvcGUubW9kZWwpO1xyXG4gICAgICAgIGlmICgkc2NvcGUubW9kZWwuc2VsZWN0ZWRsYWJJdGVtKSB7XHJcbiAgICAgICAgICAgICRzY29wZS5tb2RlbC5sbUlkID0gJHNjb3BlLm1vZGVsLnNlbGVjdGVkbGFiSXRlbS5pZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGF0YVNlcnZpY2Uuc2F2ZUNyaXNpcygkc2NvcGUubW9kZWwpLnRoZW4oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkc3RhdGUuZ28oJ2FwcC5jcmlzaXMnKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG59XSk7IiwiYXBwLmNvbnRyb2xsZXIoJ0RlcGFydExpc3RDdHJsJywgWyckc2NvcGUnLCAnJHN0YXRlJywgJ2RhdGFTZXJ2aWNlJywgZnVuY3Rpb24gKCRzY29wZSwgJHN0YXRlLCBkYXRhU2VydmljZSkge1xyXG4gICAgdmFyIGVkaXRVcmwgPSAnPGEgY2xhc3M9XCJlZGl0LXRwbFwiIHVpLXNyZWY9XCJhcHAuZGVwYXJ0X2RldGFpbCh7aWQ6IHJvdy5lbnRpdHkuaWR9KVwiPue8lui+kTwvYT4nO1xyXG4gICAgZWRpdFVybCArPSAnPGEgY2xhc3M9XCJkZWxldGUtdHBsXCIgbmctY2xpY2s9XCJncmlkLmFwcFNjb3BlLmRlbGV0ZShyb3cuZW50aXR5KVwiPuWIoOmZpDwvYT4nO1xyXG5cclxuICAgICRzY29wZS5ncmlkT3B0aW9ucyA9IHtcclxuICAgICAgICBlbmFibGVGaWx0ZXJpbmc6IGZhbHNlLFxyXG4gICAgICAgIG9uUmVnaXN0ZXJBcGk6IGZ1bmN0aW9uIChncmlkQXBpKSB7XHJcbiAgICAgICAgICAgICRzY29wZS5ncmlkQXBpID0gZ3JpZEFwaTtcclxuICAgICAgICAgICAgJHNjb3BlLmdyaWRBcGkuZ3JpZC5yZWdpc3RlclJvd3NQcm9jZXNzb3IoJHNjb3BlLmZpbHRlciwgMjAwKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbHVtbkRlZnM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQ6ICdpZCcsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogJ0lkJyxcclxuICAgICAgICAgICAgICAgIHZpc2libGU6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiAnZGVwdENvZGUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICfnp5HlrqTnvJbnoIEnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiAnZGVwdE5hbWUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICfnp5HlrqTlkI3np7AnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiAnbWlOYW1lJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAn5py65p6E5ZCN56ewJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnZWRpdCcsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogJ+aTjeS9nCcsXHJcbiAgICAgICAgICAgICAgICBjZWxsVGVtcGxhdGU6IGVkaXRVcmxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgIH07XHJcblxyXG4gICAgZGF0YVNlcnZpY2UuZ2V0RGVwdExpc3QoKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAkc2NvcGUuZ3JpZE9wdGlvbnMuZGF0YSA9IHJlc3VsdC5kYXRhO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJHNjb3BlLnNlYXJjaCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkc2NvcGUuZ3JpZEFwaS5ncmlkLnJlZnJlc2goKTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmNyZWF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkc3RhdGUuZ28oJ2FwcC5kZXBhcnRfZGV0YWlsJyk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5kZWxldGUgPSBmdW5jdGlvbiAob2JqKSB7XHJcbiAgICAgICAgZGF0YVNlcnZpY2UuZGVsZXRlRGVwdChvYmopLnRoZW4oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8ICRzY29wZS5ncmlkT3B0aW9ucy5kYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoJHNjb3BlLmdyaWRPcHRpb25zLmRhdGFbaV0uaWQgPT0gb2JqLmlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmdyaWRPcHRpb25zLmRhdGEuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmZpbHRlciA9IGZ1bmN0aW9uIChyZW5kZXJhYmxlUm93cykge1xyXG4gICAgICAgIHZhciBtYXRjaGVyID0gbmV3IFJlZ0V4cCgkc2NvcGUuZmlsdGVyVmFsdWUpO1xyXG4gICAgICAgIHJlbmRlcmFibGVSb3dzLmZvckVhY2goZnVuY3Rpb24gKHJvdykge1xyXG4gICAgICAgICAgICB2YXIgbWF0Y2ggPSBmYWxzZSxkZXBNYXRjaD1mYWxzZTtcclxuICAgICAgICAgICAgaWYoJHNjb3BlLm1vZGVsLnNlbGVjdGVkU2l0ZSl7XHJcbiAgICAgICAgICAgICAgICBpZihyb3cuZW50aXR5WydtaU5hbWUnXT09JHNjb3BlLm1vZGVsLnNlbGVjdGVkU2l0ZS5taU5hbWUpe1xyXG4gICAgICAgICAgICAgICAgICAgIGRlcE1hdGNoPXRydWU7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBkZXBNYXRjaD1mYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgZGVwTWF0Y2g9dHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgWydkZXB0Q29kZScsJ21pTmFtZSddLmZvckVhY2goZnVuY3Rpb24gKGZpZWxkKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZW50aXR5PSByb3cuZW50aXR5W2ZpZWxkXSsnJztcclxuICAgICAgICAgICAgICAgIGlmIChlbnRpdHkubWF0Y2gobWF0Y2hlcikpIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXRjaCA9IHRydWUgJiYgZGVwTWF0Y2g7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAoIW1hdGNoKSB7XHJcbiAgICAgICAgICAgICAgICByb3cudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHJlbmRlcmFibGVSb3dzO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUubW9kZWwgPSB7XHJcbiAgICAgICAgc2VsZWN0ZWRTaXRlOiBudWxsXHJcbiAgICB9O1xyXG4gICAgJHNjb3BlLnNpdGVMaXN0ID0gbnVsbDtcclxuXHJcbiAgICBkYXRhU2VydmljZS5nZXRTaXRlTGlzdCgpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICRzY29wZS5zaXRlTGlzdCA9IHJlc3VsdC5kYXRhO1xyXG4gICAgfSk7XHJcbn1dKTtcclxuXHJcbmFwcC5jb250cm9sbGVyKCdEZXBhcnREZXRhaWxDdHJsJywgWyckc2NvcGUnLCAnJHN0YXRlJywgJyRzdGF0ZVBhcmFtcycsICdkYXRhU2VydmljZScsIGZ1bmN0aW9uICgkc2NvcGUsICRzdGF0ZSwgJHN0YXRlUGFyYW1zLCBkYXRhU2VydmljZSkge1xyXG4gICAgLy9jb25zb2xlLmxvZygkc3RhdGVQYXJhbXMpO1xyXG4gICAgJHNjb3BlLm1vZGVsID0ge1xyXG4gICAgICAgIGlkOiBudWxsLFxyXG4gICAgICAgIHNpdGVJZDogbnVsbCxcclxuICAgICAgICBkZXB0Q29kZTogbnVsbCxcclxuICAgICAgICBkZXB0TmFtZTogbnVsbCxcclxuICAgICAgICBkZXNjOiBudWxsLFxyXG4gICAgICAgIHNlbGVjdGVkU2l0ZTogbnVsbFxyXG4gICAgfTtcclxuICAgICRzY29wZS5zaXRlTGlzdCA9IG51bGw7XHJcblxyXG4gICAgZGF0YVNlcnZpY2UuZ2V0U2l0ZUxpc3QoKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAkc2NvcGUuc2l0ZUxpc3QgPSByZXN1bHQuZGF0YTtcclxuICAgICAgICBpZiAoJHN0YXRlUGFyYW1zLmlkKSB7XHJcbiAgICAgICAgICAgIGRhdGFTZXJ2aWNlLmdldERlcHRCeUlkKCRzdGF0ZVBhcmFtcy5pZCkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUubW9kZWwgPSByZXN1bHQuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8ICRzY29wZS5zaXRlTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJHNjb3BlLnNpdGVMaXN0W2ldLmlkID09ICRzY29wZS5tb2RlbC5zaXRlSWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5tb2RlbC5zZWxlY3RlZFNpdGUgPSAkc2NvcGUuc2l0ZUxpc3RbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgJHNjb3BlLnN1Ym1pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKCRzY29wZS5tb2RlbCk7XHJcbiAgICAgICAgaWYgKCRzY29wZS5tb2RlbC5zZWxlY3RlZFNpdGUpIHtcclxuICAgICAgICAgICAgJHNjb3BlLm1vZGVsLnNpdGVJZCA9ICRzY29wZS5tb2RlbC5zZWxlY3RlZFNpdGUuaWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRhdGFTZXJ2aWNlLnNhdmVEZXB0KCRzY29wZS5tb2RlbCkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICRzdGF0ZS5nbygnYXBwLmRlcGFydCcpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbn1dKTsiLCJhcHAuY29udHJvbGxlcignRW1wbG95ZWVMaXN0Q3RybCcsIFsnJHNjb3BlJywgJyRzdGF0ZScsICdkYXRhU2VydmljZScsIGZ1bmN0aW9uICgkc2NvcGUsICRzdGF0ZSwgZGF0YVNlcnZpY2UpIHtcclxuXHJcbiAgICB2YXIgbGluayA9ICdhcHAuZW1wbG95ZWVfZGV0YWlsJztcclxuICAgIHZhciBlZGl0VXJsID0gJzxhIGNsYXNzPVwiZWRpdC10cGxcIiB1aS1zcmVmPVwiJyArIGxpbmsgKyAnKHtpZDogcm93LmVudGl0eS5pZH0pXCI+57yW6L6RPC9hPic7XHJcbiAgICBlZGl0VXJsICs9ICc8YSBjbGFzcz1cImRlbGV0ZS10cGxcIiBuZy1jbGljaz1cImdyaWQuYXBwU2NvcGUuZGVsZXRlKHJvdy5lbnRpdHkpXCI+5Yig6ZmkPC9hPic7XHJcblxyXG4gICAgJHNjb3BlLmdyaWRPcHRpb25zID0ge1xyXG4gICAgICAgIGVuYWJsZUZpbHRlcmluZzogZmFsc2UsXHJcbiAgICAgICAgb25SZWdpc3RlckFwaTogZnVuY3Rpb24gKGdyaWRBcGkpIHtcclxuICAgICAgICAgICAgJHNjb3BlLmdyaWRBcGkgPSBncmlkQXBpO1xyXG4gICAgICAgICAgICAkc2NvcGUuZ3JpZEFwaS5ncmlkLnJlZ2lzdGVyUm93c1Byb2Nlc3Nvcigkc2NvcGUuZmlsdGVyLCAyMDApO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29sdW1uRGVmczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogJ2lkJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAnSWQnLFxyXG4gICAgICAgICAgICAgICAgdmlzaWJsZTogZmFsc2VcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQ6ICdlbUNvZGUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICflkZjlt6XnvJbnoIEnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiAnZW1OYW1lJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAn5ZGY5bel5ZCN56ewJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogJ3RpdGxlTmFtZScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogJ+iBjOensOWQjeensCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQ6ICdpZE51bWJlcicsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogJ+i6q+S7veivgeWPtydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ2VkaXQnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICfmk43kvZwnLFxyXG4gICAgICAgICAgICAgICAgY2VsbFRlbXBsYXRlOiBlZGl0VXJsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICB9O1xyXG5cclxuICAgIGRhdGFTZXJ2aWNlLmdldEVtcGxveWVlTGlzdCgpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICRzY29wZS5ncmlkT3B0aW9ucy5kYXRhID0gcmVzdWx0LmRhdGE7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkc2NvcGUuc2VhcmNoID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICRzY29wZS5ncmlkQXBpLmdyaWQucmVmcmVzaCgpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuY3JlYXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICRzdGF0ZS5nbyhsaW5rKTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmRlbGV0ZSA9IGZ1bmN0aW9uIChvYmopIHtcclxuICAgICAgICBkYXRhU2VydmljZS5kZWxldGVFbXBsb3llZShvYmopLnRoZW4oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8ICRzY29wZS5ncmlkT3B0aW9ucy5kYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoJHNjb3BlLmdyaWRPcHRpb25zLmRhdGFbaV0uaWQgPT0gb2JqLmlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmdyaWRPcHRpb25zLmRhdGEuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmZpbHRlciA9IGZ1bmN0aW9uIChyZW5kZXJhYmxlUm93cykge1xyXG4gICAgICAgIHZhciBtYXRjaGVyID0gbmV3IFJlZ0V4cCgkc2NvcGUuZmlsdGVyVmFsdWUpO1xyXG4gICAgICAgIHJlbmRlcmFibGVSb3dzLmZvckVhY2goZnVuY3Rpb24gKHJvdykge1xyXG4gICAgICAgICAgICB2YXIgbWF0Y2ggPSBmYWxzZTtcclxuICAgICAgICAgICAgWydlbUNvZGUnLCAnZW1OYW1lJywgJ3RpdGxlTmFtZScsICdpZE51bWJlciddLmZvckVhY2goZnVuY3Rpb24gKGZpZWxkKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZW50aXR5ID0gcm93LmVudGl0eVtmaWVsZF0gKyAnJztcclxuICAgICAgICAgICAgICAgIGlmIChlbnRpdHkubWF0Y2gobWF0Y2hlcikpIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXRjaCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAoIW1hdGNoKSB7XHJcbiAgICAgICAgICAgICAgICByb3cudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHJlbmRlcmFibGVSb3dzO1xyXG4gICAgfTtcclxufV0pO1xyXG5cclxuYXBwLmNvbnRyb2xsZXIoJ0VtcGxveWVlRGV0YWlsQ3RybCcsIFsnJHNjb3BlJywgJyRzdGF0ZScsICckc3RhdGVQYXJhbXMnLCAnZGF0YVNlcnZpY2UnLCAnJHEnLCBmdW5jdGlvbiAoJHNjb3BlLCAkc3RhdGUsICRzdGF0ZVBhcmFtcywgZGF0YVNlcnZpY2UsICRxKSB7XHJcbiAgICAvL2NvbnNvbGUubG9nKCRzdGF0ZVBhcmFtcyk7XHJcbiAgICAkc2NvcGUubW9kZWwgPSB7XHJcblxyXG4gICAgICAgIGlkOiBudWxsLFxyXG4gICAgICAgIHNpdGVJZDogbnVsbCxcclxuICAgICAgICBkZXB0SWQ6IG51bGwsXHJcbiAgICAgICAgZW1Db2RlOiBudWxsLFxyXG4gICAgICAgIGVtTmFtZTogbnVsbCxcclxuICAgICAgICBpZE51bWJlcjogbnVsbCxcclxuICAgICAgICBwaG9uZTogbnVsbCxcclxuICAgICAgICB0aXRsZUlkOiBudWxsLFxyXG4gICAgICAgIHRpdGxlTmFtZTogbnVsbCxcclxuICAgICAgICBwYXNzd29yZDogbnVsbCxcclxuICAgICAgICBkZXNjOiBudWxsLFxyXG4gICAgICAgIGJpcnRoRGF5OiBudWxsLFxyXG4gICAgICAgIHNlbGVjdGVkU2l0ZTogbnVsbCxcclxuICAgICAgICBzZWxlY3RlZERlcHQ6IG51bGxcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnNpdGVMaXN0ID0gbnVsbDtcclxuICAgICRzY29wZS5kZXB0TGlzdCA9IG51bGw7XHJcbiAgICAkc2NvcGUuc2VsZWN0ZWRTZXggPSBudWxsO1xyXG5cclxuICAgICRzY29wZS5kYXRlT3B0aW9ucyA9IHtcclxuICAgICAgICBmb3JtYXRZZWFyOiAneXknLFxyXG4gICAgICAgIHN0YXJ0aW5nRGF5OiAxLFxyXG4gICAgICAgIGNsYXNzOiAnZGF0ZXBpY2tlcidcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLm9wZW5EYXRlID0gZnVuY3Rpb24gKCRldmVudCkge1xyXG4gICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAkc2NvcGUub3BlbmVkID0gdHJ1ZTtcclxuICAgIH07XHJcblxyXG4gICAgaWYgKCRzdGF0ZVBhcmFtcy5pZCkge1xyXG4gICAgICAgICRxLmFsbChbXHJcbiAgICAgICAgICAgIGRhdGFTZXJ2aWNlLmdldFNpdGVMaXN0KCksXHJcbiAgICAgICAgICAgIGRhdGFTZXJ2aWNlLmdldERlcHRMaXN0KCksXHJcbiAgICAgICAgICAgIGRhdGFTZXJ2aWNlLmdldEVtcGxveWVlQnlJZCgkc3RhdGVQYXJhbXMuaWQpXHJcbiAgICAgICAgXSkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICRzY29wZS5zaXRlTGlzdCA9IHJlc3VsdFswXS5kYXRhO1xyXG4gICAgICAgICAgICAkc2NvcGUuZGVwdExpc3QgPSByZXN1bHRbMV0uZGF0YTtcclxuICAgICAgICAgICAgJHNjb3BlLm1vZGVsID0gcmVzdWx0WzJdLmRhdGE7XHJcbiAgICAgICAgICAgIGlmICgkc2NvcGUuc2l0ZUxpc3QpIHtcclxuICAgICAgICAgICAgICAgICRzY29wZS5zaXRlTGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0uaWQgPT0gJHNjb3BlLm1vZGVsLnNpdGVJZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5tb2RlbC5zZWxlY3RlZFNpdGUgPSBpdGVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICgkc2NvcGUuZGVwdExpc3QpIHtcclxuICAgICAgICAgICAgICAgICRzY29wZS5kZXB0TGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0uaWQgPT0gJHNjb3BlLm1vZGVsLmRlcHRJZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5tb2RlbC5zZWxlY3RlZERlcHQgPSBpdGVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRhdGFTZXJ2aWNlLmdldFNpdGVMaXN0KCkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICRzY29wZS5zaXRlTGlzdCA9IHJlc3VsdC5kYXRhO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGRhdGFTZXJ2aWNlLmdldERlcHRMaXN0KCkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICRzY29wZS5kZXB0TGlzdCA9IHJlc3VsdC5kYXRhO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgJHNjb3BlLnN1Ym1pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKCRzY29wZS5tb2RlbCk7XHJcbiAgICAgICAgaWYgKCRzY29wZS5tb2RlbC5zZWxlY3RlZFNpdGUpIHtcclxuICAgICAgICAgICAgJHNjb3BlLm1vZGVsLnNpdGVJZCA9ICRzY29wZS5tb2RlbC5zZWxlY3RlZFNpdGUuaWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICgkc2NvcGUubW9kZWwuc2VsZWN0ZWREZXB0KSB7XHJcbiAgICAgICAgICAgICRzY29wZS5tb2RlbC5kZXB0SWQgPSAkc2NvcGUubW9kZWwuc2VsZWN0ZWREZXB0LmlkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZGF0YVNlcnZpY2Uuc2F2ZUVtcGxveWVlKCRzY29wZS5tb2RlbCkudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICRzdGF0ZS5nbygnYXBwLmVtcGxveWVlJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxufV0pOyIsImFwcC5jb250cm9sbGVyKCdMYWJpdGVtTGlzdEN0cmwnLCBbJyRzY29wZScsICckc3RhdGUnLCAnZGF0YVNlcnZpY2UnLCBmdW5jdGlvbiAoJHNjb3BlLCAkc3RhdGUsIGRhdGFTZXJ2aWNlKSB7XHJcblxyXG4gICAgdmFyIGxpbmsgPSAnYXBwLmxhYml0ZW1fZGV0YWlsJztcclxuICAgIHZhciBlZGl0VXJsID0gJzxhIGNsYXNzPVwiZWRpdC10cGxcIiB1aS1zcmVmPVwiJyArIGxpbmsgKyAnKHtpZDogcm93LmVudGl0eS5pZH0pXCI+57yW6L6RPC9hPic7XHJcbiAgICBlZGl0VXJsICs9ICc8YSBjbGFzcz1cImRlbGV0ZS10cGxcIiBuZy1jbGljaz1cImdyaWQuYXBwU2NvcGUuZGVsZXRlKHJvdy5lbnRpdHkpXCI+5Yig6ZmkPC9hPic7XHJcblxyXG4gICAgJHNjb3BlLmdyaWRPcHRpb25zID0ge1xyXG4gICAgICAgIGVuYWJsZUZpbHRlcmluZzogZmFsc2UsXHJcbiAgICAgICAgb25SZWdpc3RlckFwaTogZnVuY3Rpb24gKGdyaWRBcGkpIHtcclxuICAgICAgICAgICAgJHNjb3BlLmdyaWRBcGkgPSBncmlkQXBpO1xyXG4gICAgICAgICAgICAkc2NvcGUuZ3JpZEFwaS5ncmlkLnJlZ2lzdGVyUm93c1Byb2Nlc3Nvcigkc2NvcGUuZmlsdGVyLCAyMDApO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29sdW1uRGVmczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogJ2lkJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAnSWQnLFxyXG4gICAgICAgICAgICAgICAgdmlzaWJsZTogZmFsc2VcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQ6ICdpdGVtQ29kZScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogJ+S7o+eggSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQ6ICdzdGFuZGFyZENvZGUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICfmo4DpqozliIbnsbsnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiAnaXRlbU5hbWUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICfpobnnm67lkI3np7AnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiAnY2F0ZWdvcnknLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICfnu5PmnpznsbvlnosnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdlZGl0JyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAn5pON5L2cJyxcclxuICAgICAgICAgICAgICAgIGNlbGxUZW1wbGF0ZTogZWRpdFVybFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgfTtcclxuXHJcbiAgICBkYXRhU2VydmljZS5nZXRsYWJpdGVtTGlzdCgpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICRzY29wZS5ncmlkT3B0aW9ucy5kYXRhID0gcmVzdWx0LmRhdGE7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkc2NvcGUuc2VhcmNoID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICRzY29wZS5ncmlkQXBpLmdyaWQucmVmcmVzaCgpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuY3JlYXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICRzdGF0ZS5nbyhsaW5rKTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmRlbGV0ZSA9IGZ1bmN0aW9uIChvYmopIHtcclxuICAgICAgICBkYXRhU2VydmljZS5kZWxldGVMYWJJdGVtKG9iaikudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgJHNjb3BlLmdyaWRPcHRpb25zLmRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmICgkc2NvcGUuZ3JpZE9wdGlvbnMuZGF0YVtpXS5pZCA9PSBvYmouaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZ3JpZE9wdGlvbnMuZGF0YS5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuZmlsdGVyID0gZnVuY3Rpb24gKHJlbmRlcmFibGVSb3dzKSB7XHJcbiAgICAgICAgdmFyIG1hdGNoZXIgPSBuZXcgUmVnRXhwKCRzY29wZS5maWx0ZXJWYWx1ZSk7XHJcbiAgICAgICAgcmVuZGVyYWJsZVJvd3MuZm9yRWFjaChmdW5jdGlvbiAocm93KSB7XHJcbiAgICAgICAgICAgIHZhciBtYXRjaCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBbJ2l0ZW1Db2RlJywgJ2l0ZW1OYW1lJywgJ3N0YW5kYXJkQ29kZSddLmZvckVhY2goZnVuY3Rpb24gKGZpZWxkKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZW50aXR5ID0gcm93LmVudGl0eVtmaWVsZF0gKyAnJztcclxuICAgICAgICAgICAgICAgIGlmIChlbnRpdHkubWF0Y2gobWF0Y2hlcikpIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXRjaCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAoIW1hdGNoKSB7XHJcbiAgICAgICAgICAgICAgICByb3cudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHJlbmRlcmFibGVSb3dzO1xyXG4gICAgfTtcclxufV0pO1xyXG5cclxuYXBwLmNvbnRyb2xsZXIoJ0xhYml0ZW1EZXRhaWxDdHJsJywgWyckc2NvcGUnLCAnJHN0YXRlJywgJyRzdGF0ZVBhcmFtcycsICdkYXRhU2VydmljZScsICckcScsIGZ1bmN0aW9uICgkc2NvcGUsICRzdGF0ZSwgJHN0YXRlUGFyYW1zLCBkYXRhU2VydmljZSwgJHEpIHtcclxuICAgIC8vY29uc29sZS5sb2coJHN0YXRlUGFyYW1zKTtcclxuICAgICRzY29wZS5tb2RlbCA9IHtcclxuICAgICAgICBpZDogbnVsbCxcclxuICAgICAgICBsY0lkOiBudWxsLFxyXG4gICAgICAgIGl0ZW1Db2RlOiBudWxsLFxyXG4gICAgICAgIHN0YW5kYXJkQ29kZTogbnVsbCxcclxuICAgICAgICBpdGVtTmFtZTogbnVsbCxcclxuICAgICAgICBjYXRlZ29yeTogbnVsbCxcclxuICAgICAgICByZXN1bHRUeXBlOiBudWxsLFxyXG4gICAgICAgIHVuaXQ6IG51bGwsXHJcbiAgICAgICAgbGlmZUxpbWl0OiBudWxsLFxyXG4gICAgICAgIGRlZlZhbHVlOiBudWxsLFxyXG4gICAgICAgIHR5cGVDb2RlMTogbnVsbCxcclxuICAgICAgICB0eXBlQ29kZTI6IG51bGwsXHJcbiAgICAgICAgaW1wb3J0YW50OiBudWxsLFxyXG4gICAgICAgIGFzc29jaWF0ZWQ6IG51bGwsXHJcbiAgICAgICAgY29uZGl0aW9uQXVkaXQ6IG51bGwsXHJcbiAgICAgICAgY29tbWVudDogbnVsbCxcclxuICAgICAgICBkaXNwbGF5OiBudWxsLFxyXG4gICAgICAgIHByZWNpc2lvbjogbnVsbCxcclxuICAgICAgICBwcmljZTogbnVsbCxcclxuICAgICAgICBjYW5aZXJvOiBudWxsLFxyXG4gICAgICAgIGNhbkxlc3NaZXJvOiBudWxsLFxyXG4gICAgICAgIG1lYW5PZmNsaW5pYzogbnVsbCxcclxuICAgICAgICBkZXNjOiBudWxsLFxyXG4gICAgICAgIHNlbGVjdGVkTGFiQ2F0ZWdvcnk6IG51bGxcclxuICAgIH07XHJcbiAgICAkc2NvcGUubGFiQ2F0ZWdvcnlMaXN0ID0gbnVsbDtcclxuXHJcblxyXG4gICAgaWYgKCRzdGF0ZVBhcmFtcy5pZCkge1xyXG4gICAgICAgICRxLmFsbChbXHJcbiAgICAgICAgICAgIGRhdGFTZXJ2aWNlLmdldExhYkNhdGVnb3J5TGlzdCgpLFxyXG4gICAgICAgICAgICBkYXRhU2VydmljZS5nZXRMYWJJdGVtQnlJZCgkc3RhdGVQYXJhbXMuaWQpXHJcbiAgICAgICAgXSkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICRzY29wZS5sYWJDYXRlZ29yeUxpc3QgPSByZXN1bHRbMF0uZGF0YTtcclxuICAgICAgICAgICAgJHNjb3BlLm1vZGVsID0gcmVzdWx0WzFdLmRhdGE7XHJcbiAgICAgICAgICAgIGlmICgkc2NvcGUubGFiQ2F0ZWdvcnlMaXN0KSB7XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUubGFiQ2F0ZWdvcnlMaXN0LmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5pZCA9PSAkc2NvcGUubW9kZWwubGNJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUubW9kZWwuc2VsZWN0ZWRMYWJDYXRlZ29yeSA9IGl0ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZGF0YVNlcnZpY2UuZ2V0TGFiQ2F0ZWdvcnlMaXN0KCkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICRzY29wZS5sYWJDYXRlZ29yeUxpc3QgPSByZXN1bHQuZGF0YTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAkc2NvcGUuc3VibWl0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coJHNjb3BlLm1vZGVsKTtcclxuICAgICAgICBpZiAoJHNjb3BlLm1vZGVsLnNlbGVjdGVkTGFiQ2F0ZWdvcnkpIHtcclxuICAgICAgICAgICAgJHNjb3BlLm1vZGVsLmxjSWQgPSAkc2NvcGUubW9kZWwuc2VsZWN0ZWRMYWJDYXRlZ29yeS5pZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGF0YVNlcnZpY2Uuc2F2ZUxhYml0ZW0oJHNjb3BlLm1vZGVsKS50aGVuKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJHN0YXRlLmdvKCdhcHAubGFiaXRlbScpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbn1dKTsiLCJhcHAuY29udHJvbGxlcignTGFiSXRlbVNldExpc3RDdHJsJywgWyckc2NvcGUnLCAnJHN0YXRlJywgJ2RhdGFTZXJ2aWNlJywgZnVuY3Rpb24gKCRzY29wZSwgJHN0YXRlLCBkYXRhU2VydmljZSkge1xyXG5cclxuICAgIHZhciBsaW5rID0gJ2FwcC5sYWJpdGVtc2V0X2RldGFpbCc7XHJcbiAgICB2YXIgZWRpdFVybCA9ICc8YSBjbGFzcz1cImVkaXQtdHBsXCIgdWktc3JlZj1cIicgKyBsaW5rICsgJyh7aWQ6IHJvdy5lbnRpdHkuaWR9KVwiPue8lui+kTwvYT4nO1xyXG4gICAgZWRpdFVybCArPSAnPGEgY2xhc3M9XCJkZWxldGUtdHBsXCIgbmctY2xpY2s9XCJncmlkLmFwcFNjb3BlLmRlbGV0ZShyb3cuZW50aXR5KVwiPuWIoOmZpDwvYT4nO1xyXG5cclxuICAgICRzY29wZS5ncmlkT3B0aW9ucyA9IHtcclxuICAgICAgICBlbmFibGVGaWx0ZXJpbmc6IGZhbHNlLFxyXG4gICAgICAgIG9uUmVnaXN0ZXJBcGk6IGZ1bmN0aW9uIChncmlkQXBpKSB7XHJcbiAgICAgICAgICAgICRzY29wZS5ncmlkQXBpID0gZ3JpZEFwaTtcclxuICAgICAgICAgICAgJHNjb3BlLmdyaWRBcGkuZ3JpZC5yZWdpc3RlclJvd3NQcm9jZXNzb3IoJHNjb3BlLmZpbHRlciwgMjAwKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbHVtbkRlZnM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQ6ICdpZCcsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogJ0lkJyxcclxuICAgICAgICAgICAgICAgIHZpc2libGU6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiAnbGlzQ29kZScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogJ+e7hOWQiOmhueebruS7o+eggSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQ6ICdsaXNOYW1lJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAn57uE5ZCI6aG555uu5ZCN56ewJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogJ2NvbW1lbnQnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICflpIfms6gnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdlZGl0JyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAn5pON5L2cJyxcclxuICAgICAgICAgICAgICAgIGNlbGxUZW1wbGF0ZTogZWRpdFVybFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgfTtcclxuXHJcbiAgICBkYXRhU2VydmljZS5nZXRMYWJJdGVtU2V0TGlzdCgpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICRzY29wZS5ncmlkT3B0aW9ucy5kYXRhID0gcmVzdWx0LmRhdGE7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkc2NvcGUuc2VhcmNoID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICRzY29wZS5ncmlkQXBpLmdyaWQucmVmcmVzaCgpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuY3JlYXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICRzdGF0ZS5nbyhsaW5rKTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmRlbGV0ZSA9IGZ1bmN0aW9uIChvYmopIHtcclxuICAgICAgICBkYXRhU2VydmljZS5kZWxldGVMYWJJdGVtU2V0KG9iaikudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgJHNjb3BlLmdyaWRPcHRpb25zLmRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmICgkc2NvcGUuZ3JpZE9wdGlvbnMuZGF0YVtpXS5pZCA9PSBvYmouaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZ3JpZE9wdGlvbnMuZGF0YS5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuZmlsdGVyID0gZnVuY3Rpb24gKHJlbmRlcmFibGVSb3dzKSB7XHJcbiAgICAgICAgdmFyIG1hdGNoZXIgPSBuZXcgUmVnRXhwKCRzY29wZS5maWx0ZXJWYWx1ZSk7XHJcbiAgICAgICAgcmVuZGVyYWJsZVJvd3MuZm9yRWFjaChmdW5jdGlvbiAocm93KSB7XHJcbiAgICAgICAgICAgIHZhciBtYXRjaCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBbJ2xpc05hbWUnLCAnbGlzQ29kZSddLmZvckVhY2goZnVuY3Rpb24gKGZpZWxkKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZW50aXR5ID0gcm93LmVudGl0eVtmaWVsZF0gKyAnJztcclxuICAgICAgICAgICAgICAgIGlmIChlbnRpdHkubWF0Y2gobWF0Y2hlcikpIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXRjaCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAoIW1hdGNoKSB7XHJcbiAgICAgICAgICAgICAgICByb3cudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHJlbmRlcmFibGVSb3dzO1xyXG4gICAgfTtcclxufV0pO1xyXG5cclxuYXBwLmNvbnRyb2xsZXIoJ0xhYkl0ZW1TZXREZXRhaWxDdHJsJywgWyckc2NvcGUnLCAnJHN0YXRlJywgJyRzdGF0ZVBhcmFtcycsICdkYXRhU2VydmljZScsIGZ1bmN0aW9uICgkc2NvcGUsICRzdGF0ZSwgJHN0YXRlUGFyYW1zLCBkYXRhU2VydmljZSkge1xyXG5cclxuICAgICRzY29wZS5tb2RlbCA9IHtcclxuICAgICAgICBzZWxlY3RlZGxhYkl0ZW06IG51bGwsXHJcbiAgICAgICAgbGlzQ29kZTogbnVsbCxcclxuICAgICAgICBsaXNOYW1lOiBudWxsLFxyXG4gICAgICAgIGNvbW1lbnQ6IG51bGwsXHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5zZWxlY3RlZGxhYkl0ZW0gPSBudWxsO1xyXG4gICAgJHNjb3BlLmxhYkl0ZW1MaXN0ID0gbnVsbDtcclxuXHJcbiAgICBkYXRhU2VydmljZS5nZXRsYWJpdGVtTGlzdCgpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICRzY29wZS5sYWJJdGVtTGlzdCA9IHJlc3VsdC5kYXRhO1xyXG4gICAgICAgIGlmICgkc3RhdGVQYXJhbXMuaWQpIHtcclxuICAgICAgICAgICAgZGF0YVNlcnZpY2UuZ2V0TGFiSXRlbVNldEJ5SWQoJHN0YXRlUGFyYW1zLmlkKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5tb2RlbCA9IHJlc3VsdC5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgJHNjb3BlLmxhYkl0ZW1MaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkc2NvcGUubGFiSXRlbUxpc3RbaV0uaWQgPT0gJHNjb3BlLm1vZGVsLmxtSWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5tb2RlbC5zZWxlY3RlZGxhYkl0ZW0gPSAkc2NvcGUubGFiSXRlbUxpc3RbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgICRzY29wZS5zdWJtaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKCRzY29wZS5tb2RlbC5zZWxlY3RlZGxhYkl0ZW0pIHtcclxuICAgICAgICAgICAgJHNjb3BlLm1vZGVsLmxtSWQgPSAkc2NvcGUubW9kZWwuc2VsZWN0ZWRsYWJJdGVtLmlkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZGF0YVNlcnZpY2Uuc2F2ZUxhYkl0ZW1TZXQoJHNjb3BlLm1vZGVsKS50aGVuKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJHN0YXRlLmdvKCdhcHAubGFiaXRlbXNldCcpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbn1dKTsiLCJhcHAuY29udHJvbGxlcignTGFicmVzdWx0TGlzdEN0cmwnLCBbJyRzY29wZScsICckc3RhdGUnLCAnZGF0YVNlcnZpY2UnLCAndXRpbCcsICckbG9jYXRpb24nLCBmdW5jdGlvbiAoJHNjb3BlLCAkc3RhdGUsIGRhdGFTZXJ2aWNlLCB1dGlsLCRsb2NhdGlvbikge1xyXG4gICAgdmFyIGVkaXRVcmwgPSAnPGEgY2xhc3M9XCJlZGl0LXRwbFwiIHVpLXNyZWY9XCJsYWJyZXN1bHRfcHJpbnQoe2lkOiByb3cuZW50aXR5LmlkfSlcIj7mn6XnnIs8L2E+J1xyXG5cclxuICAgICRzY29wZS5ncmlkT3B0aW9ucyA9IHtcclxuICAgICAgICBlbmFibGVGaWx0ZXJpbmc6IGZhbHNlLFxyXG4gICAgICAgIG9uUmVnaXN0ZXJBcGk6IGZ1bmN0aW9uIChncmlkQXBpKSB7XHJcbiAgICAgICAgICAgICRzY29wZS5ncmlkQXBpID0gZ3JpZEFwaTtcclxuICAgICAgICAgICAgJHNjb3BlLmdyaWRBcGkuZ3JpZC5yZWdpc3RlclJvd3NQcm9jZXNzb3IoJHNjb3BlLmZpbHRlciwgMjAwKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbHVtbkRlZnM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQ6ICdpZCcsXHJcbiAgICAgICAgICAgICAgICB2aXNpYmxlOiBmYWxzZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogJ3JlcXVlc3RObycsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogJ+eUs+ivt+WNleWPtydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQ6ICdwYXRpZW50LnB0TmFtZScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogJ+eXheS6uuWQjeWtlydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQ6ICdtaU5hbWUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICfmnLrmnoTlkI3np7AnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiAnZm9ybWF0ZWRSZXFUaW1lJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAn55Sz6K+35pe26Ze0J1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnZWRpdCcsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogJ+aTjeS9nCcsXHJcbiAgICAgICAgICAgICAgICBjZWxsVGVtcGxhdGU6IGVkaXRVcmxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgIH07XHJcbiAgICB2YXIgcGFyYW1zPSRsb2NhdGlvbi5zZWFyY2goKTtcclxuICAgIGlmKHBhcmFtcy5yZWlkKXtcclxuICAgICAgICBkZWJ1Z2dlclxyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgZGF0YVNlcnZpY2UuZ2V0UmVxdWVzdExpc3QoKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgcmVzdWx0LmRhdGEuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgICAgICAgICAgaXRlbS5mb3JtYXRlZFJlcVRpbWUgPSB1dGlsLmZvcm1hdGVEYXRlKGl0ZW0ucmVxVGltZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAkc2NvcGUuZ3JpZE9wdGlvbnMuZGF0YSA9IHJlc3VsdC5kYXRhO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgJHNjb3BlLnNlYXJjaCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkc2NvcGUuZ3JpZEFwaS5ncmlkLnJlZnJlc2goKTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmNyZWF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkc3RhdGUuZ28oJ2FwcC5sYWJyZXN1bHRfZGV0YWlsJyk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5maWx0ZXIgPSBmdW5jdGlvbiAocmVuZGVyYWJsZVJvd3MpIHtcclxuICAgICAgICB2YXIgbWF0Y2hlciA9IG5ldyBSZWdFeHAoJHNjb3BlLmZpbHRlclZhbHVlKTtcclxuICAgICAgICByZW5kZXJhYmxlUm93cy5mb3JFYWNoKGZ1bmN0aW9uIChyb3cpIHtcclxuICAgICAgICAgICAgdmFyIG1hdGNoID0gZmFsc2U7XHJcbiAgICAgICAgICAgIFsncmVxdWVzdE5vJywgJ3BhdGllbnQucHROYW1lJywnbWlOYW1lJ10uZm9yRWFjaChmdW5jdGlvbiAoZmllbGQpIHtcclxuICAgICAgICAgICAgICAgIHZhciBlbnRpdHkgPSByb3cuZW50aXR5O1xyXG4gICAgICAgICAgICAgICAgZmllbGQuc3BsaXQoJy4nKS5mb3JFYWNoKGZ1bmN0aW9uIChmKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoZW50aXR5W2ZdKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW50aXR5ID0gZW50aXR5W2ZdO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgZW50aXR5ID0gZW50aXR5ICsgJyc7XHJcbiAgICAgICAgICAgICAgICBpZiAoZW50aXR5Lm1hdGNoKG1hdGNoZXIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF0Y2ggPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYgKCFtYXRjaCkge1xyXG4gICAgICAgICAgICAgICAgcm93LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiByZW5kZXJhYmxlUm93cztcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLm1vZGVsID0ge1xyXG4gICAgICAgIHNlbGVjdGVkU2l0ZTogbnVsbFxyXG4gICAgfTtcclxuICAgICRzY29wZS5zaXRlTGlzdCA9IG51bGw7XHJcblxyXG4gICAgZGF0YVNlcnZpY2UuZ2V0U2l0ZUxpc3QoKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAkc2NvcGUuc2l0ZUxpc3QgPSByZXN1bHQuZGF0YTtcclxuICAgIH0pO1xyXG5cclxufV0pO1xyXG5cclxuYXBwLmNvbnRyb2xsZXIoJ0xhYnJlc3VsdERldGFpbEN0cmwnLCBbJyRzY29wZScsICckc3RhdGUnLCAnJHN0YXRlUGFyYW1zJywgJ2RhdGFTZXJ2aWNlJywgZnVuY3Rpb24gKCRzY29wZSwgJHN0YXRlLCAkc3RhdGVQYXJhbXMsIGRhdGFTZXJ2aWNlKSB7XHJcblxyXG4gICAgJHNjb3BlLmRhdGEgPSB7XHJcbiAgICAgICAgc2VsZWN0ZWRsYWJJdGVtOiBudWxsXHJcbiAgICB9O1xyXG4gICAgZGF0YVNlcnZpY2UuZ2V0UmVxdWVzdExpc3QoKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAkc2NvcGUuaXRlbUxpc3QgPSByZXN1bHQuZGF0YTtcclxuICAgIH0pO1xyXG5cclxuICAgICRzY29wZS4kd2F0Y2goJ2RhdGEuc2VsZWN0ZWRsYWJJdGVtJywgZnVuY3Rpb24gKG5ld1YsIG9sZFYpIHtcclxuICAgICAgICBpZiAobmV3Vikge1xyXG4gICAgICAgICAgICBkYXRhU2VydmljZS5nZXRSZXF1ZXN0QnlJZChuZXdWLmlkKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICRzY29wZS5tb2RlbCA9IHJlc3VsdC5kYXRhO1xyXG4gICAgICAgICAgICAgICAgaWYgKCRzY29wZS5tb2RlbC5sYWJJbmZvcykge1xyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5tb2RlbC5sYWJJbmZvcy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vaW5pdCBsaXN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCFpdGVtLmxhYlJlc3VsdCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmxhYlJlc3VsdD17fTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAkc2NvcGUuc3VibWl0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGRhdGFTZXJ2aWNlLnNhdmVMYWJSZXN1bHQoJHNjb3BlLm1vZGVsLmxhYkluZm9zKS50aGVuKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICRzdGF0ZS5nbygnYXBwLmxhYnJlc3VsdCcpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxufV0pO1xyXG5cclxuYXBwLmNvbnRyb2xsZXIoJ0xhYnJlc3VsdFByaW50Q3RybCcsIFsnJHNjb3BlJywgJyRzdGF0ZScsICckc3RhdGVQYXJhbXMnLCAnZGF0YVNlcnZpY2UnLCBmdW5jdGlvbiAoJHNjb3BlLCAkc3RhdGUsICRzdGF0ZVBhcmFtcywgZGF0YVNlcnZpY2UpIHtcclxuICAgIFxyXG4gICAgaWYgKCRzdGF0ZVBhcmFtcy5pZCkge1xyXG4gICAgICAgIGRhdGFTZXJ2aWNlLmdldFJlcXVlc3RCeUlkKCRzdGF0ZVBhcmFtcy5pZCkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICRzY29wZS5tb2RlbCA9IHJlc3VsdC5kYXRhO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XSk7IiwiYXBwLmNvbnRyb2xsZXIoJ0xvZ2lzdGljc0xpc3RDdHJsJywgWyckc2NvcGUnLCAnJG1vZGFsJywgJyRzdGF0ZScsICdkYXRhU2VydmljZScsICd1dGlsJywgZnVuY3Rpb24gKCRzY29wZSwgJG1vZGFsLCAkc3RhdGUsIGRhdGFTZXJ2aWNlLCB1dGlsKSB7XHJcblxyXG4gICAgJHNjb3BlLmdyaWRPcHRpb25zID0ge1xyXG4gICAgICAgIGVuYWJsZUZpbHRlcmluZzogZmFsc2UsXHJcbiAgICAgICAgb25SZWdpc3RlckFwaTogZnVuY3Rpb24gKGdyaWRBcGkpIHtcclxuICAgICAgICAgICAgJHNjb3BlLmdyaWRBcGkgPSBncmlkQXBpO1xyXG4gICAgICAgICAgICAkc2NvcGUuZ3JpZEFwaS5ncmlkLnJlZ2lzdGVyUm93c1Byb2Nlc3Nvcigkc2NvcGUuZmlsdGVyLCAyMDApO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29sdW1uRGVmczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogJ2lkJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAnSWQnLFxyXG4gICAgICAgICAgICAgICAgdmlzaWJsZTogZmFsc2VcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQ6ICdzZW5kRW1OYW1lJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAn6YCB5qOA5Lq6J1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogJ2xzRW1OYW1lJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAn54mp5rWB5o6l5pS25Lq6J1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogJ2NlbnRlckVtTmFtZScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogJ+ajgOmqjOS4reW/g+aOpeaUtuS6uidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQ6ICdtaU5hbWUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICfmnLrmnoTlkI3np7AnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiAnZm9ybWF0ZWRTZW5kVGltZScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogJ+mAgeajgOaXtumXtCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQ6ICdsc1N0YXR1c05hbWUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICfnianmtYHnirbmgIEnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5yZWxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgZGF0YVNlcnZpY2UuZ2V0TG9naUxpc3QoKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgcmVzdWx0LmRhdGEuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgICAgICAgICAgaXRlbS5mb3JtYXRlZFNlbmRUaW1lID0gdXRpbC5mb3JtYXRlRGF0ZShpdGVtLnNlbmRUaW1lKTtcclxuICAgICAgICAgICAgICAgIGl0ZW0ubHNTdGF0dXNOYW1lID0gdXRpbC5nZXRMb2dpc3RpY3NTdGF0dXMoaXRlbS5sc1N0YXR1cyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgJHNjb3BlLmdyaWRPcHRpb25zLmRhdGEgPSByZXN1bHQuZGF0YTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnJlbG9hZCgpO1xyXG5cclxuICAgICRzY29wZS5zZWFyY2ggPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJHNjb3BlLmdyaWRBcGkuZ3JpZC5yZWZyZXNoKCk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5maWx0ZXIgPSBmdW5jdGlvbiAocmVuZGVyYWJsZVJvd3MpIHtcclxuICAgICAgICB2YXIgbWF0Y2hlciA9IG5ldyBSZWdFeHAoJHNjb3BlLmZpbHRlclZhbHVlKTtcclxuICAgICAgICByZW5kZXJhYmxlUm93cy5mb3JFYWNoKGZ1bmN0aW9uIChyb3cpIHtcclxuICAgICAgICAgICAgdmFyIG1hdGNoID0gZmFsc2U7XHJcbiAgICAgICAgICAgIFsnc2VuZEVtTmFtZScsICdsc0VtTmFtZScsICdjZW50ZXJFbU5hbWUnLCdsc1N0YXR1c05hbWUnXS5mb3JFYWNoKGZ1bmN0aW9uIChmaWVsZCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGVudGl0eSA9IHJvdy5lbnRpdHlbZmllbGRdICsgJyc7XHJcbiAgICAgICAgICAgICAgICBpZiAoZW50aXR5Lm1hdGNoKG1hdGNoZXIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF0Y2ggPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYgKCFtYXRjaCkge1xyXG4gICAgICAgICAgICAgICAgcm93LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiByZW5kZXJhYmxlUm93cztcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmFjY2VwdCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5yZWplY3QgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUub3BlbkFjY2VwdERpYWxvZyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkbW9kYWwub3Blbih7XHJcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnL2FwcC90cGwvZGlhbG9nL2FjY2VwdF9zYW1wbGVfZGlhbG9nLmh0bWwnLFxyXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnU2FtcGxlRGlhbG9nQ3RybCcsXHJcbiAgICAgICAgICAgIHNpemU6ICdsZycsXHJcbiAgICAgICAgICAgIHJlc29sdmU6IHtcclxuICAgICAgICAgICAgICAgIGdyaWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWxvYWQ6ICRzY29wZS5yZWxvYWRcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLm9wZW5TZW5kRGlhbG9nID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICRtb2RhbC5vcGVuKHtcclxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICcvYXBwL3RwbC9kaWFsb2cvc2VuZF9zYW1wbGVfZGlhbG9nLmh0bWwnLFxyXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnU2FtcGxlRGlhbG9nQ3RybCcsXHJcbiAgICAgICAgICAgIHNpemU6ICdsZycsXHJcbiAgICAgICAgICAgIHJlc29sdmU6IHtcclxuICAgICAgICAgICAgICAgIGdyaWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWxvYWQ6ICRzY29wZS5yZWxvYWRcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLm1vZGVsID0ge1xyXG4gICAgICAgIHNlbGVjdGVkU2l0ZTogbnVsbFxyXG4gICAgfTtcclxuICAgICRzY29wZS5zaXRlTGlzdCA9IG51bGw7XHJcblxyXG4gICAgZGF0YVNlcnZpY2UuZ2V0U2l0ZUxpc3QoKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAkc2NvcGUuc2l0ZUxpc3QgPSByZXN1bHQuZGF0YTtcclxuICAgIH0pO1xyXG59XSk7XHJcblxyXG5hcHAuY29udHJvbGxlcignU2FtcGxlRGlhbG9nQ3RybCcsIFsnJHNjb3BlJywgJyRzdGF0ZScsICckbW9kYWxJbnN0YW5jZScsICdkYXRhU2VydmljZScsICdncmlkJywgZnVuY3Rpb24gKCRzY29wZSwgJHN0YXRlLCAkbW9kYWxJbnN0YW5jZSwgZGF0YVNlcnZpY2UsIGdyaWQpIHtcclxuICAgICRzY29wZS5zYW1wbGVObyA9IG51bGw7XHJcbiAgICAkc2NvcGUuZm9jdXNGbGFnID0gMTtcclxuICAgICRzY29wZS5tb2RlbCA9IHtcclxuICAgICAgICBzZWxlY3RlZFNlbmRVc2VyOiBudWxsLFxyXG4gICAgICAgIHNlbGVjdGVkQWNjZXB0VXNlcjogbnVsbCxcclxuICAgICAgICBzZWxlY3RlZENlbnRlckFjY2VwdFVzZXI6IG51bGwsXHJcbiAgICAgICAgc2VuZEVtSWQ6IG51bGwsXHJcbiAgICAgICAgbHNFbUlkOiBudWxsLFxyXG4gICAgICAgIGNlbnRlckVtSWQ6IG51bGwsXHJcbiAgICAgICAgYmFyQ29kZXM6IFtdXHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5rZXlwcmVzcyA9IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIGlmIChldmVudC5jaGFyQ29kZSA9PSAxMykge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgaWYgKCRzY29wZS5zYW1wbGVObykge1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLm1vZGVsLmJhckNvZGVzLnB1c2goJHNjb3BlLnNhbXBsZU5vKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAkc2NvcGUuc2FtcGxlTm8gPSAnJztcclxuICAgICAgICAgICAgJHNjb3BlLmZvY3VzRmxhZysrO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZGF0YVNlcnZpY2UuZ2V0RW1wbG95ZWVMaXN0KCkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgJHNjb3BlLnVzZXJMaXN0ID0gcmVzdWx0LmRhdGE7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkc2NvcGUuZGlhbG9nU3VibWl0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICgkc2NvcGUubW9kZWwuc2VsZWN0ZWRTZW5kVXNlcikge1xyXG4gICAgICAgICAgICAkc2NvcGUubW9kZWwuc2VuZEVtSWQgPSAkc2NvcGUubW9kZWwuc2VsZWN0ZWRTZW5kVXNlci5pZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCRzY29wZS5tb2RlbC5zZWxlY3RlZEFjY2VwdFVzZXIpIHtcclxuICAgICAgICAgICAgJHNjb3BlLm1vZGVsLmxzRW1JZCA9ICRzY29wZS5tb2RlbC5zZWxlY3RlZEFjY2VwdFVzZXIuaWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICgkc2NvcGUubW9kZWwuc2VsZWN0ZWRDZW50ZXJBY2NlcHRVc2VyKSB7XHJcbiAgICAgICAgICAgICRzY29wZS5tb2RlbC5jZW50ZXJFbUlkID0gJHNjb3BlLm1vZGVsLnNlbGVjdGVkQ2VudGVyQWNjZXB0VXNlci5pZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGF0YVNlcnZpY2UuYWNjZXB0TG9naSgkc2NvcGUubW9kZWwpLnRoZW4oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBncmlkLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAvLyB2YXIgdXJsID0gJHN0YXRlLmhyZWYoJ2xvZ2lzdGljc19wcmludCcsIHsgZGF0YTogJHNjb3BlLm1vZGVsIH0pO1xyXG4gICAgICAgICAgICAvLyB3aW5kb3cub3Blbih3aW5kb3cubG9jYXRpb24uaHJlZi5zcGxpdCgnIycpWzBdICsgdXJsLCAnX2JsYW5rJyk7XHJcbiAgICAgICAgICAgICRzdGF0ZS5nbygnbG9naXN0aWNzX3ByaW50JywgeyBkYXRhOiAkc2NvcGUubW9kZWwgfSk7XHJcbiAgICAgICAgICAgICRtb2RhbEluc3RhbmNlLmNsb3NlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG59XSk7XHJcblxyXG5cclxuYXBwLmNvbnRyb2xsZXIoJ0xvZ2lzdGljc1ByaW50Q3RybCcsIFsnJHNjb3BlJywgJyRzdGF0ZVBhcmFtcycsIGZ1bmN0aW9uICgkc2NvcGUsICRzdGF0ZVBhcmFtcykge1xyXG4gICAgJHNjb3BlLmRhdGEgPSAkc3RhdGVQYXJhbXMuZGF0YTtcclxuXHJcbiAgICAkc2NvcGUubW9kZWwgPSB7XHJcbiAgICAgICAgc2VuZEVtOiAnJyxcclxuICAgICAgICBsc0VtOiAnJyxcclxuICAgICAgICBjZW50ZXJFbTogJycsXHJcbiAgICAgICAgYmFyQ29kZXM6IFtdXHJcbiAgICB9O1xyXG5cclxuICAgIGlmICgkc3RhdGVQYXJhbXMuZGF0YSAmJiAkc3RhdGVQYXJhbXMuZGF0YS5zZWxlY3RlZFNlbmRVc2VyKSB7XHJcbiAgICAgICAgJHNjb3BlLm1vZGVsLnNlbmRFbSA9ICRzdGF0ZVBhcmFtcy5kYXRhLnNlbGVjdGVkU2VuZFVzZXIuZW1OYW1lO1xyXG4gICAgfVxyXG4gICAgaWYgKCRzdGF0ZVBhcmFtcy5kYXRhICYmICRzdGF0ZVBhcmFtcy5kYXRhLnNlbGVjdGVkQWNjZXB0VXNlcikge1xyXG4gICAgICAgICRzY29wZS5tb2RlbC5sc0VtID0gJHN0YXRlUGFyYW1zLmRhdGEuc2VsZWN0ZWRBY2NlcHRVc2VyLmVtTmFtZTtcclxuICAgIH1cclxuICAgIGlmICgkc3RhdGVQYXJhbXMuZGF0YSAmJiAkc3RhdGVQYXJhbXMuZGF0YS5zZWxlY3RlZENlbnRlckFjY2VwdFVzZXIpIHtcclxuICAgICAgICAkc2NvcGUubW9kZWwuY2VudGVyRW0gPSAkc3RhdGVQYXJhbXMuZGF0YS5zZWxlY3RlZENlbnRlckFjY2VwdFVzZXIuZW1OYW1lO1xyXG4gICAgfVxyXG4gICAgaWYgKCRzdGF0ZVBhcmFtcy5kYXRhICYmICRzdGF0ZVBhcmFtcy5kYXRhLmJhckNvZGVzKSB7XHJcbiAgICAgICAgJHNjb3BlLm1vZGVsLmJhckNvZGVzID0gJHN0YXRlUGFyYW1zLmRhdGEuYmFyQ29kZXM7XHJcbiAgICB9XHJcbn1dKTtcclxuIiwiYXBwLmNvbnRyb2xsZXIoJ01lZGljYWxMaXN0Q3RybCcsIFsnJHNjb3BlJywgJyRzdGF0ZScsICdkYXRhU2VydmljZScsIGZ1bmN0aW9uICgkc2NvcGUsICRzdGF0ZSwgZGF0YVNlcnZpY2UpIHtcclxuXHJcbiAgICB2YXIgbGluayA9ICdhcHAubWVkaWNhbF9kZXRhaWwnO1xyXG4gICAgdmFyIGVkaXRVcmwgPSAnPGEgY2xhc3M9XCJlZGl0LXRwbFwiIHVpLXNyZWY9XCInICsgbGluayArICcoe2lkOiByb3cuZW50aXR5LmlkfSlcIj7nvJbovpE8L2E+JztcclxuICAgIGVkaXRVcmwgKz0gJzxhIGNsYXNzPVwiZGVsZXRlLXRwbFwiIG5nLWNsaWNrPVwiZ3JpZC5hcHBTY29wZS5kZWxldGUocm93LmVudGl0eSlcIj7liKDpmaQ8L2E+JztcclxuXHJcbiAgICAkc2NvcGUuZ3JpZE9wdGlvbnMgPSB7XHJcbiAgICAgICAgZW5hYmxlRmlsdGVyaW5nOiBmYWxzZSxcclxuICAgICAgICBvblJlZ2lzdGVyQXBpOiBmdW5jdGlvbiAoZ3JpZEFwaSkge1xyXG4gICAgICAgICAgICAkc2NvcGUuZ3JpZEFwaSA9IGdyaWRBcGk7XHJcbiAgICAgICAgICAgICRzY29wZS5ncmlkQXBpLmdyaWQucmVnaXN0ZXJSb3dzUHJvY2Vzc29yKCRzY29wZS5maWx0ZXIsIDIwMCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb2x1bW5EZWZzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiAnaWQnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICdJZCcsXHJcbiAgICAgICAgICAgICAgICB2aXNpYmxlOiBmYWxzZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogJ21pQ29kZScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogJ+acuuaehOe8lueggSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQ6ICdtaU5hbWUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICfmnLrmnoTlkI3np7AnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiAnbWlDYXRlZ29yeScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogJ+acuuaehOexu+WIqydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ2VkaXQnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICfmk43kvZwnLFxyXG4gICAgICAgICAgICAgICAgY2VsbFRlbXBsYXRlOiBlZGl0VXJsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICB9O1xyXG5cclxuICAgIGRhdGFTZXJ2aWNlLmdldFNpdGVMaXN0KCkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgJHNjb3BlLmdyaWRPcHRpb25zLmRhdGEgPSByZXN1bHQuZGF0YTtcclxuICAgIH0pO1xyXG5cclxuICAgICRzY29wZS5zZWFyY2ggPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJHNjb3BlLmdyaWRBcGkuZ3JpZC5yZWZyZXNoKCk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5jcmVhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJHN0YXRlLmdvKGxpbmspO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuZGVsZXRlID0gZnVuY3Rpb24gKG9iaikge1xyXG4gICAgICAgIGRhdGFTZXJ2aWNlLmRlbGV0ZVNpdGUob2JqKS50aGVuKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAkc2NvcGUuZ3JpZE9wdGlvbnMuZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKCRzY29wZS5ncmlkT3B0aW9ucy5kYXRhW2ldLmlkID09IG9iai5pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5ncmlkT3B0aW9ucy5kYXRhLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5maWx0ZXIgPSBmdW5jdGlvbiAocmVuZGVyYWJsZVJvd3MpIHtcclxuICAgICAgICB2YXIgbWF0Y2hlciA9IG5ldyBSZWdFeHAoJHNjb3BlLmZpbHRlclZhbHVlKTtcclxuICAgICAgICByZW5kZXJhYmxlUm93cy5mb3JFYWNoKGZ1bmN0aW9uIChyb3cpIHtcclxuICAgICAgICAgICAgdmFyIG1hdGNoID0gZmFsc2U7XHJcbiAgICAgICAgICAgIFsnbWlDb2RlJywgJ21pTmFtZScsICdtaUNhdGVnb3J5J10uZm9yRWFjaChmdW5jdGlvbiAoZmllbGQpIHtcclxuICAgICAgICAgICAgICAgIHZhciBlbnRpdHkgPSByb3cuZW50aXR5W2ZpZWxkXSsnJztcclxuICAgICAgICAgICAgICAgIGlmIChlbnRpdHkubWF0Y2gobWF0Y2hlcikpIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXRjaCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAoIW1hdGNoKSB7XHJcbiAgICAgICAgICAgICAgICByb3cudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHJlbmRlcmFibGVSb3dzO1xyXG4gICAgfTtcclxufV0pO1xyXG5cclxuYXBwLmNvbnRyb2xsZXIoJ01lZGljYWxEZXRhaWxDdHJsJywgWyckc2NvcGUnLCAnJHN0YXRlJywgJyRzdGF0ZVBhcmFtcycsICdkYXRhU2VydmljZScsIGZ1bmN0aW9uICgkc2NvcGUsICRzdGF0ZSwgJHN0YXRlUGFyYW1zLCBkYXRhU2VydmljZSkge1xyXG4gICAgJHNjb3BlLm1vZGVsID0ge1xyXG4gICAgICAgIGlkOiBudWxsLFxyXG4gICAgICAgIG1pQ29kZTogbnVsbCxcclxuICAgICAgICBtaU5hbWU6IG51bGwsXHJcbiAgICAgICAgbWlDYXRlZ29yeTogbnVsbCxcclxuICAgICAgICBhcmVhQ29kZTogbnVsbCxcclxuICAgICAgICBhZGRyZXNzOiBudWxsLFxyXG4gICAgICAgIGRlc2M6IG51bGxcclxuICAgIH07XHJcblxyXG5cclxuICAgIGlmICgkc3RhdGVQYXJhbXMuaWQpIHtcclxuICAgICAgICBkYXRhU2VydmljZS5nZXRTaXRlQnlJZCgkc3RhdGVQYXJhbXMuaWQpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LmRhdGEpIHtcclxuICAgICAgICAgICAgICAgICRzY29wZS5tb2RlbCA9IHJlc3VsdC5kYXRhO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICAkc2NvcGUuc3VibWl0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coJHNjb3BlLm1vZGVsKTtcclxuICAgICAgICBkYXRhU2VydmljZS5zYXZlU2l0ZSgkc2NvcGUubW9kZWwpLnRoZW4oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkc3RhdGUuZ28oJ2FwcC5tZWRpY2FsJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxufV0pOyIsImFwcC5jb250cm9sbGVyKCdQYXRpZW50TGlzdEN0cmwnLCBbJyRzY29wZScsICckc3RhdGUnLCAnZGF0YVNlcnZpY2UnLCBmdW5jdGlvbiAoJHNjb3BlLCAkc3RhdGUsIGRhdGFTZXJ2aWNlKSB7XHJcblxyXG4gICAgdmFyIGxpbms9J2FwcC5wYXRpZW50X2RldGFpbCc7XHJcbiAgICB2YXIgZWRpdFVybCA9ICc8YSBjbGFzcz1cImVkaXQtdHBsXCIgdWktc3JlZj1cIicrbGluaysnKHtpZDogcm93LmVudGl0eS5pZH0pXCI+57yW6L6RPC9hPic7XHJcbiAgICBlZGl0VXJsKz0nPGEgY2xhc3M9XCJkZWxldGUtdHBsXCIgbmctY2xpY2s9XCJncmlkLmFwcFNjb3BlLmRlbGV0ZShyb3cuZW50aXR5KVwiPuWIoOmZpDwvYT4nO1xyXG5cclxuICAgICRzY29wZS5ncmlkT3B0aW9ucyA9IHtcclxuICAgICAgICBlbmFibGVGaWx0ZXJpbmc6IGZhbHNlLFxyXG4gICAgICAgIG9uUmVnaXN0ZXJBcGk6IGZ1bmN0aW9uIChncmlkQXBpKSB7XHJcbiAgICAgICAgICAgICRzY29wZS5ncmlkQXBpID0gZ3JpZEFwaTtcclxuICAgICAgICAgICAgJHNjb3BlLmdyaWRBcGkuZ3JpZC5yZWdpc3RlclJvd3NQcm9jZXNzb3IoJHNjb3BlLmZpbHRlciwgMjAwKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbHVtbkRlZnM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQ6ICdpZCcsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogJ0lkJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogJ25hbWUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICdOYW1lJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnZWRpdCcsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogJ0VkaXQnLFxyXG4gICAgICAgICAgICAgICAgY2VsbFRlbXBsYXRlOiBlZGl0VXJsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICB9O1xyXG5cclxuICAgIGRhdGFTZXJ2aWNlLmdldGxhYml0ZW1MaXN0KCkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgJHNjb3BlLmdyaWRPcHRpb25zLmRhdGEgPSByZXN1bHQuZGF0YTtcclxuICAgIH0pO1xyXG5cclxuICAgICRzY29wZS5zZWFyY2ggPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJHNjb3BlLmdyaWRBcGkuZ3JpZC5yZWZyZXNoKCk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5jcmVhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJHN0YXRlLmdvKGxpbmspO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuZGVsZXRlID0gZnVuY3Rpb24gKG9iaikge1xyXG4gICAgICAgIGRhdGFTZXJ2aWNlLmRlbGV0ZVBhdGllbnQob2JqKS50aGVuKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIGZvcih2YXIgaT0wO2k8JHNjb3BlLmdyaWRPcHRpb25zLmRhdGEubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgICAgICBpZigkc2NvcGUuZ3JpZE9wdGlvbnMuZGF0YVtpXS5pZD09b2JqLmlkKXtcclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZ3JpZE9wdGlvbnMuZGF0YS5zcGxpY2UoaSwxKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5maWx0ZXI9ZnVuY3Rpb24ocmVuZGVyYWJsZVJvd3Mpe1xyXG4gICAgICAgIHZhciBtYXRjaGVyID0gbmV3IFJlZ0V4cCgkc2NvcGUuZmlsdGVyVmFsdWUpO1xyXG4gICAgICAgIHJlbmRlcmFibGVSb3dzLmZvckVhY2goIGZ1bmN0aW9uKCByb3cgKSB7XHJcbiAgICAgICAgICB2YXIgbWF0Y2ggPSBmYWxzZTtcclxuICAgICAgICAgIFsgJ25hbWUnIF0uZm9yRWFjaChmdW5jdGlvbiggZmllbGQgKXtcclxuICAgICAgICAgICAgaWYgKCByb3cuZW50aXR5W2ZpZWxkXS5tYXRjaChtYXRjaGVyKSApe1xyXG4gICAgICAgICAgICAgIG1hdGNoID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBpZiAoICFtYXRjaCApe1xyXG4gICAgICAgICAgICByb3cudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiByZW5kZXJhYmxlUm93cztcclxuICAgIH07XHJcbn1dKTtcclxuXHJcbmFwcC5jb250cm9sbGVyKCdQYXRpZW50RGV0YWlsQ3RybCcsIFsnJHNjb3BlJywgJyRzdGF0ZScsICckc3RhdGVQYXJhbXMnLCAnZGF0YVNlcnZpY2UnLCBmdW5jdGlvbiAoJHNjb3BlLCAkc3RhdGUsICRzdGF0ZVBhcmFtcywgZGF0YVNlcnZpY2UpIHtcclxuICAgIC8vY29uc29sZS5sb2coJHN0YXRlUGFyYW1zKTtcclxuICAgICRzY29wZS5tb2RlbCA9IHtcclxuICAgICAgICBzZWxlY3RlZFNleDogbnVsbCxcclxuICAgICAgICBiaXJ0aERhdGU6IG5ldyBEYXRlKClcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmRhdGVPcHRpb25zID0ge1xyXG4gICAgICAgIGZvcm1hdFllYXI6ICd5eScsXHJcbiAgICAgICAgc3RhcnRpbmdEYXk6IDEsXHJcbiAgICAgICAgY2xhc3M6ICdkYXRlcGlja2VyJ1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUub3BlbkRhdGUgPSBmdW5jdGlvbigkZXZlbnQpIHtcclxuICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgXHJcbiAgICAgICAgJHNjb3BlLm9wZW5lZCA9IHRydWU7XHJcbiAgICB9O1xyXG5cclxuICAgIGRhdGFTZXJ2aWNlLmdldFNleExpc3QoKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAkc2NvcGUuc2V4TGlzdCA9IHJlc3VsdC5kYXRhO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJHNjb3BlLnN1Ym1pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygkc2NvcGUubW9kZWwpO1xyXG4gICAgfTtcclxuXHJcbn1dKTsiLCJhcHAuY29udHJvbGxlcignUWN2YWx1ZUxpc3RDdHJsJywgWyckc2NvcGUnLCAnJHN0YXRlJywgJ2RhdGFTZXJ2aWNlJywgJ3V0aWwnLCBmdW5jdGlvbiAoJHNjb3BlLCAkc3RhdGUsIGRhdGFTZXJ2aWNlLCB1dGlsKSB7XHJcblxyXG4gICAgdmFyIGxpbmsgPSAnYXBwLnFjdmFsdWVfZGV0YWlsJztcclxuICAgIHZhciBlZGl0VXJsID0gJzxhIGNsYXNzPVwiZWRpdC10cGxcIiB1aS1zcmVmPVwiJyArIGxpbmsgKyAnKHtpZDogcm93LmVudGl0eS5pZH0pXCI+57yW6L6RPC9hPic7XHJcbiAgICBlZGl0VXJsICs9ICc8YSBjbGFzcz1cImRlbGV0ZS10cGxcIiBuZy1jbGljaz1cImdyaWQuYXBwU2NvcGUuZGVsZXRlKHJvdy5lbnRpdHkpXCI+5Yig6ZmkPC9hPic7XHJcblxyXG4gICAgJHNjb3BlLmdyaWRPcHRpb25zID0ge1xyXG4gICAgICAgIGVuYWJsZUZpbHRlcmluZzogZmFsc2UsXHJcbiAgICAgICAgb25SZWdpc3RlckFwaTogZnVuY3Rpb24gKGdyaWRBcGkpIHtcclxuICAgICAgICAgICAgJHNjb3BlLmdyaWRBcGkgPSBncmlkQXBpO1xyXG4gICAgICAgICAgICAkc2NvcGUuZ3JpZEFwaS5ncmlkLnJlZ2lzdGVyUm93c1Byb2Nlc3Nvcigkc2NvcGUuZmlsdGVyLCAyMDApO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29sdW1uRGVmczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogJ2lkJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAnSWQnLFxyXG4gICAgICAgICAgICAgICAgdmlzaWJsZTogZmFsc2VcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQ6ICdtaU5hbWUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICfljLvpmaLlkI3np7AnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiAnaW5zdHJ1bWVudE5hbWUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICfku6rlmajlkI3np7AnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiAnbGFiSXRlbU5hbWUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICfotKjmjqfpobnnm64nXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiAndmFsdWUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICfotKjmjqflgLwnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiAncWNUaW1lJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAn6LSo5o6n5pe26Ze0J1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogJ3FjZXInLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICfotKjmjqfkurrlkZgnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdlZGl0JyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAn5pON5L2cJyxcclxuICAgICAgICAgICAgICAgIGNlbGxUZW1wbGF0ZTogZWRpdFVybFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgfTtcclxuXHJcbiAgICBkYXRhU2VydmljZS5nZXRRQ1ZhbHVlTGlzdCgpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgIHJlc3VsdC5kYXRhLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgaXRlbS5xY1RpbWUgPSB1dGlsLmZvcm1hdGVEYXRlKGl0ZW0ucWNUaW1lKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJHNjb3BlLmdyaWRPcHRpb25zLmRhdGEgPSByZXN1bHQuZGF0YTtcclxuICAgIH0pO1xyXG5cclxuICAgICRzY29wZS5zZWFyY2ggPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJHNjb3BlLmdyaWRBcGkuZ3JpZC5yZWZyZXNoKCk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5jcmVhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJHN0YXRlLmdvKGxpbmspO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuZGVsZXRlID0gZnVuY3Rpb24gKG9iaikge1xyXG4gICAgICAgIGRhdGFTZXJ2aWNlLmRlbGV0ZVFDVmFsdWUob2JqKS50aGVuKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAkc2NvcGUuZ3JpZE9wdGlvbnMuZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKCRzY29wZS5ncmlkT3B0aW9ucy5kYXRhW2ldLmlkID09IG9iai5pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5ncmlkT3B0aW9ucy5kYXRhLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5maWx0ZXIgPSBmdW5jdGlvbiAocmVuZGVyYWJsZVJvd3MpIHtcclxuICAgICAgICB2YXIgbWF0Y2hlciA9IG5ldyBSZWdFeHAoJHNjb3BlLmZpbHRlclZhbHVlKTtcclxuICAgICAgICByZW5kZXJhYmxlUm93cy5mb3JFYWNoKGZ1bmN0aW9uIChyb3cpIHtcclxuICAgICAgICAgICAgdmFyIG1hdGNoID0gZmFsc2U7XHJcbiAgICAgICAgICAgIFsnbWlOYW1lJywnaW5zdHJ1bWVudE5hbWUnLCdsYWJJdGVtTmFtZSddLmZvckVhY2goZnVuY3Rpb24gKGZpZWxkKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZW50aXR5ID0gcm93LmVudGl0eVtmaWVsZF0gKyAnJztcclxuICAgICAgICAgICAgICAgIGlmIChlbnRpdHkubWF0Y2gobWF0Y2hlcikpIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXRjaCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAoIW1hdGNoKSB7XHJcbiAgICAgICAgICAgICAgICByb3cudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHJlbmRlcmFibGVSb3dzO1xyXG4gICAgfTtcclxufV0pO1xyXG5cclxuYXBwLmNvbnRyb2xsZXIoJ1FjdmFsdWVEZXRhaWxDdHJsJywgWyckc2NvcGUnLCAnJHN0YXRlJywgJyRzdGF0ZVBhcmFtcycsICdkYXRhU2VydmljZScsICckcScsIGZ1bmN0aW9uICgkc2NvcGUsICRzdGF0ZSwgJHN0YXRlUGFyYW1zLCBkYXRhU2VydmljZSwgJHEpIHtcclxuXHJcbiAgICAkc2NvcGUubW9kZWwgPSB7XHJcbiAgICAgICAgaWQ6IG51bGwsXHJcbiAgICAgICAgbG1JZDogbnVsbCxcclxuICAgICAgICBtaUlkOiBudWxsLFxyXG4gICAgICAgIGluc3RydW1lbnRJZDogJycsXHJcbiAgICAgICAgaW5zdHJ1bWVudE5hbWU6IG51bGwsXHJcbiAgICAgICAgcWNlcjogbnVsbCxcclxuICAgICAgICBxY1RpbWU6IG51bGwsXHJcbiAgICAgICAgcWNOdW06IG51bGwsXHJcbiAgICAgICAgdmFsdWU6IG51bGwsXHJcbiAgICAgICAgY29tbWVudDogbnVsbCxcclxuICAgICAgICBvdGhlcjE6IG51bGwsXHJcbiAgICAgICAgb3RoZXIyOiBudWxsLFxyXG4gICAgICAgIG90aGVyMzogbnVsbCxcclxuICAgICAgICBvdGhlcjQ6IG51bGwsXHJcbiAgICAgICAgb3RoZXI1OiBudWxsLFxyXG4gICAgICAgIG90aGVyNjogbnVsbCxcclxuICAgICAgICBzZWxlY3RlZExhYkl0ZW06IG51bGwsXHJcbiAgICAgICAgc2VsZWN0ZWRTaXRlOiBudWxsLFxyXG4gICAgICAgIHNlbGVjdGVkUWNlcjogbnVsbFxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUubGFiSXRlbUxpc3QgPSBudWxsO1xyXG4gICAgJHNjb3BlLnNpdGVMaXN0ID0gbnVsbDtcclxuICAgICRzY29wZS51c2VyTGlzdCA9IG51bGw7XHJcblxyXG4gICAgJHNjb3BlLnNpdGVMaXN0ID0gbnVsbDtcclxuICAgICRzY29wZS5kZXB0TGlzdCA9IG51bGw7XHJcbiAgICAkc2NvcGUuc2VsZWN0ZWRTZXggPSBudWxsO1xyXG5cclxuICAgICRzY29wZS5kYXRlT3B0aW9ucyA9IHtcclxuICAgICAgICBmb3JtYXRZZWFyOiAneXknLFxyXG4gICAgICAgIHN0YXJ0aW5nRGF5OiAxLFxyXG4gICAgICAgIGNsYXNzOiAnZGF0ZXBpY2tlcidcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnFjT3BlbiA9IGZ1bmN0aW9uICgkZXZlbnQpIHtcclxuICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgJHNjb3BlLnFjT3BlbmVkID0gdHJ1ZTtcclxuICAgIH07XHJcblxyXG4gICAgaWYgKCRzdGF0ZVBhcmFtcy5pZCkge1xyXG4gICAgICAgICRxLmFsbChbXHJcbiAgICAgICAgICAgIGRhdGFTZXJ2aWNlLmdldGxhYml0ZW1MaXN0KCksXHJcbiAgICAgICAgICAgIGRhdGFTZXJ2aWNlLmdldFNpdGVMaXN0KCksXHJcbiAgICAgICAgICAgIGRhdGFTZXJ2aWNlLmdldFFDVmFsdWVCeUlkKCRzdGF0ZVBhcmFtcy5pZCksXHJcbiAgICAgICAgICAgIGRhdGFTZXJ2aWNlLmdldEVtcGxveWVlTGlzdCgpXHJcbiAgICAgICAgXSkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICRzY29wZS5sYWJJdGVtTGlzdCA9IHJlc3VsdFswXS5kYXRhO1xyXG4gICAgICAgICAgICAkc2NvcGUuc2l0ZUxpc3QgPSByZXN1bHRbMV0uZGF0YTtcclxuICAgICAgICAgICAgJHNjb3BlLm1vZGVsID0gcmVzdWx0WzJdLmRhdGE7XHJcbiAgICAgICAgICAgICRzY29wZS51c2VyTGlzdCA9IHJlc3VsdFszXS5kYXRhO1xyXG4gICAgICAgICAgICBpZiAoJHNjb3BlLmxhYkl0ZW1MaXN0KSB7XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUubGFiSXRlbUxpc3QuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLmlkID09ICRzY29wZS5tb2RlbC5sbUlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5tb2RlbC5zZWxlY3RlZExhYkl0ZW0gPSBpdGVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICgkc2NvcGUuc2l0ZUxpc3QpIHtcclxuICAgICAgICAgICAgICAgICRzY29wZS5zaXRlTGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0uaWQgPT0gJHNjb3BlLm1vZGVsLm1pSWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLm1vZGVsLnNlbGVjdGVkU2l0ZSA9IGl0ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCRzY29wZS51c2VyTGlzdCkge1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLnVzZXJMaXN0LmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5pZCA9PSAkc2NvcGUubW9kZWwucWNlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUubW9kZWwuc2VsZWN0ZWRRY2VyID0gaXRlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBpZigkc2NvcGUubW9kZWwucWNUaW1lKXtcclxuICAgICAgICAgICAgLy8gICAgICRzY29wZS5tb2RlbC5xY1RpbWU9bmV3IERhdGUoJHNjb3BlLm1vZGVsLnFjVGltZSk7XHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZGF0YVNlcnZpY2UuZ2V0bGFiaXRlbUxpc3QoKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgJHNjb3BlLmxhYkl0ZW1MaXN0ID0gcmVzdWx0LmRhdGE7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZGF0YVNlcnZpY2UuZ2V0U2l0ZUxpc3QoKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgJHNjb3BlLnNpdGVMaXN0ID0gcmVzdWx0LmRhdGE7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgJHNjb3BlLnN1Ym1pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKCRzY29wZS5tb2RlbCk7XHJcbiAgICAgICAgaWYgKCRzY29wZS5tb2RlbC5zZWxlY3RlZExhYkl0ZW0pIHtcclxuICAgICAgICAgICAgJHNjb3BlLm1vZGVsLmxtSWQgPSAkc2NvcGUubW9kZWwuc2VsZWN0ZWRMYWJJdGVtLmlkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoJHNjb3BlLm1vZGVsLnNlbGVjdGVkU2l0ZSkge1xyXG4gICAgICAgICAgICAkc2NvcGUubW9kZWwubWlJZCA9ICRzY29wZS5tb2RlbC5zZWxlY3RlZFNpdGUuaWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICgkc2NvcGUubW9kZWwuc2VsZWN0ZWRRY2VyKSB7XHJcbiAgICAgICAgICAgICRzY29wZS5tb2RlbC5xY2VyID0gJHNjb3BlLm1vZGVsLnNlbGVjdGVkUWNlci5pZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGF0YVNlcnZpY2Uuc2F2ZVFDVmFsdWUoJHNjb3BlLm1vZGVsKS50aGVuKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJHN0YXRlLmdvKCdhcHAucWN2YWx1ZScpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbn1dKTsiLCJhcHAuY29udHJvbGxlcignUmVxdWVzdExpc3RDdHJsJywgWyckc2NvcGUnLCAnJG1vZGFsJywgJyRzdGF0ZScsICdkYXRhU2VydmljZScsICd1dGlsJywgZnVuY3Rpb24gKCRzY29wZSwgJG1vZGFsLCAkc3RhdGUsIGRhdGFTZXJ2aWNlLCB1dGlsKSB7XHJcbiAgICAkc2NvcGUubW9kZWwgPSB7XHJcbiAgICAgICAgZmlsdGVyVmFsdWU6IG51bGwsXHJcbiAgICAgICAgc3RhcnRUaW1lOiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgIGVuZFRpbWU6IG5ldyBEYXRlKCksXHJcbiAgICAgICAgc3RhcnRPcGVuZWQ6IGZhbHNlLFxyXG4gICAgICAgIGVuZE9wZW5lZDogZmFsc2UsXHJcbiAgICAgICAgc2VsZWN0ZWRTaXRlOiBudWxsXHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5kYXRlT3B0aW9ucyA9IHtcclxuICAgICAgICBmb3JtYXRZZWFyOiAneXknLFxyXG4gICAgICAgIHN0YXJ0aW5nRGF5OiAxLFxyXG4gICAgICAgIGNsYXNzOiAnZGF0ZXBpY2tlcidcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnN0YXJ0T3BlbiA9IGZ1bmN0aW9uICgkZXZlbnQpIHtcclxuICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgJHNjb3BlLm1vZGVsLnN0YXJ0T3BlbmVkID0gdHJ1ZTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmVuZE9wZW4gPSBmdW5jdGlvbiAoJGV2ZW50KSB7XHJcbiAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICRzY29wZS5tb2RlbC5lbmRPcGVuZWQgPSB0cnVlO1xyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgdHBsID0gJzxkaXYgbmctaGlkZT1cInJvdy5lbnRpdHkucmVTdGF0dXMhPTFcIj48YnV0dG9uIGNsYXNzPVwiYnRuIGdyaWQtYnRuIGJ0bi1zdWNjZXNzXCIgbmctY2xpY2s9XCJncmlkLmFwcFNjb3BlLmFjY2VwdChyb3cuZW50aXR5KVwiPuaOpeWPlzwvYnV0dG9uPjxidXR0b24gY2xhc3M9XCJidG4gZ3JpZC1idG4gbGVmdC1zcGFjZSBidG4tZGFuZ2VyXCIgbmctY2xpY2s9XCJncmlkLmFwcFNjb3BlLnJlamVjdChyb3cuZW50aXR5KVwiPuaLkue7nTwvYnV0dG9uPjwvZGl2Pic7XHJcbiAgICB2YXIgb3RoZXJUcGwgPSAnPGEgY2xhc3M9XCJlZGl0LXRwbFwiIHVpLXNyZWY9XCJhcHAucmVxdWVzdF9kZXRhaWwoe2lkOiByb3cuZW50aXR5LmlkfSlcIj7or6bmg4U8L2E+JztcclxuICAgICRzY29wZS5ncmlkT3B0aW9ucyA9IHtcclxuICAgICAgICBlbmFibGVGaWx0ZXJpbmc6IGZhbHNlLFxyXG4gICAgICAgIG9uUmVnaXN0ZXJBcGk6IGZ1bmN0aW9uIChncmlkQXBpKSB7XHJcbiAgICAgICAgICAgICRzY29wZS5ncmlkQXBpID0gZ3JpZEFwaTtcclxuICAgICAgICAgICAgLy8kc2NvcGUuZ3JpZEFwaS5ncmlkLnJlZ2lzdGVyUm93c1Byb2Nlc3Nvcigkc2NvcGUuZmlsdGVyLCAyMDApO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29sdW1uRGVmczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogJ2lkJyxcclxuICAgICAgICAgICAgICAgIHZpc2libGU6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiAncmVxdWVzdE5vJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAn55Sz6K+35Y2V5Y+3J1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogJ3BhdGllbnQucHROYW1lJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAn55eF5Lq65ZCN5a2XJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogJ21pTmFtZScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogJ+acuuaehOWQjeensCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQ6ICdmb3JtYXRlZFJlcVRpbWUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICfnlLPor7fml7bpl7QnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiAncmVTdGF0dXNOYW1lJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAn55Sz6K+35Y2V54q25oCBJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnZWRpdCcsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogJ+aTjeS9nCcsXHJcbiAgICAgICAgICAgICAgICBjZWxsVGVtcGxhdGU6IHRwbFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnb3RoZXInLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICflhbbku5YnLFxyXG4gICAgICAgICAgICAgICAgY2VsbFRlbXBsYXRlOiBvdGhlclRwbFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBkYXRhU2VydmljZS5nZXRSZXF1ZXN0TGlzdCgkc2NvcGUubW9kZWwuZmlsdGVyVmFsdWUsICRzY29wZS5tb2RlbC5zdGFydFRpbWUsICRzY29wZS5tb2RlbC5lbmRUaW1lKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgcmVzdWx0LmRhdGEuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgICAgICAgICAgaXRlbS5mb3JtYXRlZFJlcVRpbWUgPSB1dGlsLmZvcm1hdGVEYXRlKGl0ZW0ucmVxVGltZSk7XHJcbiAgICAgICAgICAgICAgICBpdGVtLnJlU3RhdHVzTmFtZSA9IHV0aWwuZ2V0UmVxdWVzdFN0YXR1cyhpdGVtLnJlU3RhdHVzKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuZ3JpZE9wdGlvbnMuZGF0YSA9IHJlc3VsdC5kYXRhO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuc2VhcmNoID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vJHNjb3BlLmdyaWRBcGkuZ3JpZC5yZWZyZXNoKCk7XHJcbiAgICAgICAgJHNjb3BlLmdyaWRPcHRpb25zLmRhdGEgPSBudWxsO1xyXG4gICAgICAgICRzY29wZS5sb2FkKCk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5maWx0ZXIgPSBmdW5jdGlvbiAocmVuZGVyYWJsZVJvd3MpIHtcclxuICAgICAgICB2YXIgbWF0Y2hlciA9IG5ldyBSZWdFeHAoJHNjb3BlLm1vZGVsLmZpbHRlclZhbHVlKTtcclxuICAgICAgICByZW5kZXJhYmxlUm93cy5mb3JFYWNoKGZ1bmN0aW9uIChyb3cpIHtcclxuICAgICAgICAgICAgdmFyIG1hdGNoID0gZmFsc2U7XHJcbiAgICAgICAgICAgIFsncmVxdWVzdE5vJywgJ3BhdGllbnQucHROYW1lJywgJ21pTmFtZScsICdyZVN0YXR1c05hbWUnXS5mb3JFYWNoKGZ1bmN0aW9uIChmaWVsZCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGVudGl0eSA9IHJvdy5lbnRpdHk7XHJcbiAgICAgICAgICAgICAgICBmaWVsZC5zcGxpdCgnLicpLmZvckVhY2goZnVuY3Rpb24gKGYpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZW50aXR5W2ZdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eSA9IGVudGl0eVtmXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGVudGl0eSA9IGVudGl0eSArICcnO1xyXG4gICAgICAgICAgICAgICAgaWYgKCRzY29wZS5tb2RlbC5maWx0ZXJWYWx1ZSAmJiBlbnRpdHkubWF0Y2gobWF0Y2hlcikpIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXRjaCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCRzY29wZS5tb2RlbC5maWx0ZXJWYWx1ZSA9PSBudWxsIHx8ICRzY29wZS5tb2RlbC5maWx0ZXJWYWx1ZSA9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hdGNoID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB2YXIgdGltZSA9IHJvdy5lbnRpdHlbJ2Zvcm1hdGVkUmVxVGltZSddO1xyXG4gICAgICAgICAgICB2YXIgY3VycmVudCA9IHRpbWUgPyBuZXcgRGF0ZSh0aW1lKS5nZXRUaW1lKCkgOiBudWxsO1xyXG5cclxuICAgICAgICAgICAgaWYgKCRzY29wZS5tb2RlbC5zdGFydFRpbWUgJiYgY3VycmVudCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHN0YXJ0ID0gbmV3IERhdGUoJHNjb3BlLm1vZGVsLnN0YXJ0VGltZSkuZ2V0VGltZSgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0YXJ0ID4gY3VycmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hdGNoID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCRzY29wZS5tb2RlbC5lbmRUaW1lICYmIGN1cnJlbnQpIHtcclxuICAgICAgICAgICAgICAgIHZhciBlbmQgPSBuZXcgRGF0ZSgkc2NvcGUubW9kZWwuZW5kVGltZSkuZ2V0VGltZSgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnQgPiBlbmQpIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXRjaCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoKCRzY29wZS5tb2RlbC5zdGFydFRpbWUgfHwgJHNjb3BlLm1vZGVsLmVuZFRpbWUpICYmICFjdXJyZW50KSB7XHJcbiAgICAgICAgICAgICAgICBtYXRjaCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIGlmICghbWF0Y2gpIHtcclxuICAgICAgICAgICAgICAgIHJvdy52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcmVuZGVyYWJsZVJvd3M7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5hY2NlcHQgPSBmdW5jdGlvbiAob2JqKSB7XHJcbiAgICAgICAgZGF0YVNlcnZpY2UuYWNjZXB0UmVxdWVzdChvYmopLnRoZW4oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkc2NvcGUubG9hZCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUucmVqZWN0ID0gZnVuY3Rpb24gKG9iaikge1xyXG4gICAgICAgICRzY29wZS5tb2RhbEluc3RhbmNlID0gJG1vZGFsLm9wZW4oe1xyXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy9hcHAvdHBsL2RpYWxvZy9yZWplY3RfZGlhbG9nLmh0bWwnLFxyXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnUmVqZWN0RGlhbG9nQ3RybCcsXHJcbiAgICAgICAgICAgIHNpemU6ICdsZycsXHJcbiAgICAgICAgICAgIHJlc29sdmU6IHtcclxuICAgICAgICAgICAgICAgIGRhdGE6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGdyaWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWxvYWQ6ICRzY29wZS5sb2FkXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICAkc2NvcGUuc2l0ZUxpc3QgPSBudWxsO1xyXG5cclxuICAgIGRhdGFTZXJ2aWNlLmdldFNpdGVMaXN0KCkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgJHNjb3BlLnNpdGVMaXN0ID0gcmVzdWx0LmRhdGE7XHJcbiAgICB9KTtcclxuXHJcbn1dKTtcclxuXHJcblxyXG5hcHAuY29udHJvbGxlcignUmVqZWN0RGlhbG9nQ3RybCcsIFsnJHNjb3BlJywgJyRtb2RhbEluc3RhbmNlJywgJ2RhdGFTZXJ2aWNlJywgJ2RhdGEnLCAnZ3JpZCcsIGZ1bmN0aW9uICgkc2NvcGUsICRtb2RhbEluc3RhbmNlLCBkYXRhU2VydmljZSwgZGF0YSwgZ3JpZCkge1xyXG4gICAgJHNjb3BlLnJlamVjdFJlYXNvbiA9IG51bGw7XHJcblxyXG4gICAgJHNjb3BlLmRpYWxvZ1N1Ym1pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoZGF0YSkge1xyXG4gICAgICAgICAgICBkYXRhLnJlamVjdFJlYXNvbiA9ICRzY29wZS5yZWplY3RSZWFzb247XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRhdGFTZXJ2aWNlLnJlamVjdFJlcWV1c3QoZGF0YSkudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGdyaWQucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICRtb2RhbEluc3RhbmNlLmNsb3NlKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfTtcclxufV0pO1xyXG5cclxuYXBwLmNvbnRyb2xsZXIoJ1JlcXVlc3REZXRhaWxDdHJsJywgWyckc2NvcGUnLCAnJHN0YXRlJywgJyRzdGF0ZVBhcmFtcycsICdkYXRhU2VydmljZScsICd1dGlsJywgZnVuY3Rpb24gKCRzY29wZSwgJHN0YXRlLCAkc3RhdGVQYXJhbXMsIGRhdGFTZXJ2aWNlLCB1dGlsKSB7XHJcblxyXG5cclxuICAgIGlmICgkc3RhdGVQYXJhbXMuaWQpIHtcclxuICAgICAgICBkYXRhU2VydmljZS5nZXRSZXF1ZXN0QnlJZCgkc3RhdGVQYXJhbXMuaWQpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LmRhdGEpIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5kYXRhLnJlcVRpbWUgPSB1dGlsLmZvcm1hdGVEYXRlKHJlc3VsdC5kYXRhLnJlcVRpbWUpO1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0LmRhdGEucmVTdGF0dXNOYW1lID0gdXRpbC5nZXRSZXF1ZXN0U3RhdHVzKHJlc3VsdC5kYXRhLnJlU3RhdHVzKTtcclxuICAgICAgICAgICAgICAgICRzY29wZS5tb2RlbCA9IHJlc3VsdC5kYXRhO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1dKTsiLCJhcHAuY29udHJvbGxlcignU2FtcGxlVHlwZUxpc3RDdHJsJywgWyckc2NvcGUnLCAnJHN0YXRlJywgJ2RhdGFTZXJ2aWNlJywgZnVuY3Rpb24gKCRzY29wZSwgJHN0YXRlLCBkYXRhU2VydmljZSkge1xyXG5cclxuICAgIHZhciBsaW5rID0gJ2FwcC5zYW1wbGV0eXBlX2RldGFpbCc7XHJcbiAgICB2YXIgZWRpdFVybCA9ICc8YSBjbGFzcz1cImVkaXQtdHBsXCIgdWktc3JlZj1cIicgKyBsaW5rICsgJyh7aWQ6IHJvdy5lbnRpdHkuaWR9KVwiPue8lui+kTwvYT4nO1xyXG4gICAgZWRpdFVybCArPSAnPGEgY2xhc3M9XCJkZWxldGUtdHBsXCIgbmctY2xpY2s9XCJncmlkLmFwcFNjb3BlLmRlbGV0ZShyb3cuZW50aXR5KVwiPuWIoOmZpDwvYT4nO1xyXG5cclxuICAgICRzY29wZS5ncmlkT3B0aW9ucyA9IHtcclxuICAgICAgICBlbmFibGVGaWx0ZXJpbmc6IGZhbHNlLFxyXG4gICAgICAgIG9uUmVnaXN0ZXJBcGk6IGZ1bmN0aW9uIChncmlkQXBpKSB7XHJcbiAgICAgICAgICAgICRzY29wZS5ncmlkQXBpID0gZ3JpZEFwaTtcclxuICAgICAgICAgICAgJHNjb3BlLmdyaWRBcGkuZ3JpZC5yZWdpc3RlclJvd3NQcm9jZXNzb3IoJHNjb3BlLmZpbHRlciwgMjAwKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbHVtbkRlZnM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQ6ICdpZCcsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogJ0lkJyxcclxuICAgICAgICAgICAgICAgIHZpc2libGU6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiAnY29kZScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogJ+e8lueggSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQ6ICdjaHROYW1lJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAn5Lit5paH5ZCN56ewJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogJ2VuZ05hbWUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICfoi7HmloflkI3np7AnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiAnc2VxTm8nLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICfmjpLluo/lj7cnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdlZGl0JyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAn5pON5L2cJyxcclxuICAgICAgICAgICAgICAgIGNlbGxUZW1wbGF0ZTogZWRpdFVybFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgfTtcclxuXHJcbiAgICBkYXRhU2VydmljZS5nZXRTYW1wbGVUeXBlTGlzdCgpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICRzY29wZS5ncmlkT3B0aW9ucy5kYXRhID0gcmVzdWx0LmRhdGE7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkc2NvcGUuc2VhcmNoID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICRzY29wZS5ncmlkQXBpLmdyaWQucmVmcmVzaCgpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuY3JlYXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICRzdGF0ZS5nbyhsaW5rKTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmRlbGV0ZSA9IGZ1bmN0aW9uIChvYmopIHtcclxuICAgICAgICBkYXRhU2VydmljZS5kZWxldGVTYW1wbGVUeXBlKG9iaikudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgJHNjb3BlLmdyaWRPcHRpb25zLmRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmICgkc2NvcGUuZ3JpZE9wdGlvbnMuZGF0YVtpXS5pZCA9PSBvYmouaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZ3JpZE9wdGlvbnMuZGF0YS5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuZmlsdGVyID0gZnVuY3Rpb24gKHJlbmRlcmFibGVSb3dzKSB7XHJcbiAgICAgICAgdmFyIG1hdGNoZXIgPSBuZXcgUmVnRXhwKCRzY29wZS5maWx0ZXJWYWx1ZSk7XHJcbiAgICAgICAgcmVuZGVyYWJsZVJvd3MuZm9yRWFjaChmdW5jdGlvbiAocm93KSB7XHJcbiAgICAgICAgICAgIHZhciBtYXRjaCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBbJ2NvZGUnLCAnY2h0TmFtZScsICdlbmdOYW1lJywgJ3NlcU5vJ10uZm9yRWFjaChmdW5jdGlvbiAoZmllbGQpIHtcclxuICAgICAgICAgICAgICAgIHZhciBlbnRpdHkgPSByb3cuZW50aXR5W2ZpZWxkXSArICcnO1xyXG4gICAgICAgICAgICAgICAgaWYgKGVudGl0eS5tYXRjaChtYXRjaGVyKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hdGNoID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmICghbWF0Y2gpIHtcclxuICAgICAgICAgICAgICAgIHJvdy52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcmVuZGVyYWJsZVJvd3M7XHJcbiAgICB9O1xyXG59XSk7XHJcblxyXG5hcHAuY29udHJvbGxlcignU2FtcGxlVHlwZURldGFpbEN0cmwnLCBbJyRzY29wZScsICckc3RhdGUnLCAnJHN0YXRlUGFyYW1zJywgJ2RhdGFTZXJ2aWNlJywgZnVuY3Rpb24gKCRzY29wZSwgJHN0YXRlLCAkc3RhdGVQYXJhbXMsIGRhdGFTZXJ2aWNlKSB7XHJcblxyXG4gICAgJHNjb3BlLm1vZGVsID0ge1xyXG4gICAgICAgIGlkOiBudWxsLFxyXG4gICAgICAgIHBhcmVudElkOiBudWxsLFxyXG4gICAgICAgIGNvZGU6IG51bGwsXHJcbiAgICAgICAgY2h0TmFtZTogbnVsbCxcclxuICAgICAgICBlbmdOYW1lOiBudWxsLFxyXG4gICAgICAgIHNlcU5vOiBudWxsLFxyXG4gICAgICAgIGhlbHBDb2RlOiBudWxsXHJcbiAgICB9O1xyXG5cclxuICAgIGlmICgkc3RhdGVQYXJhbXMuaWQpIHtcclxuICAgICAgICBkYXRhU2VydmljZS5nZXRTYW1wbGVUeXBlQnlJZCgkc3RhdGVQYXJhbXMuaWQpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LmRhdGEpIHtcclxuICAgICAgICAgICAgICAgICRzY29wZS5tb2RlbCA9IHJlc3VsdC5kYXRhO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgICRzY29wZS5zdWJtaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJHNjb3BlLm1vZGVsKTtcclxuICAgICAgICBkYXRhU2VydmljZS5zYXZlU2FtcGxlVHlwZSgkc2NvcGUubW9kZWwpLnRoZW4oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkc3RhdGUuZ28oJ2FwcC5zYW1wbGV0eXBlJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxufV0pOyIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4gIC5kaXJlY3RpdmUoJ3NldE5nQW5pbWF0ZScsIFsnJGFuaW1hdGUnLCBmdW5jdGlvbiAoJGFuaW1hdGUpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbGluazogZnVuY3Rpb24gKCRzY29wZSwgJGVsZW1lbnQsICRhdHRycykge1xyXG4gICAgICAgICAgICAkc2NvcGUuJHdhdGNoKCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAkc2NvcGUuJGV2YWwoJGF0dHJzLnNldE5nQW5pbWF0ZSwgJHNjb3BlKTtcclxuICAgICAgICAgICAgfSwgZnVuY3Rpb24odmFsbmV3LCB2YWxvbGQpe1xyXG4gICAgICAgICAgICAgICAgJGFuaW1hdGUuZW5hYmxlZCghIXZhbG5ldywgJGVsZW1lbnQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gIH1dKTsiLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuICAuZGlyZWN0aXZlKCd1aUJ1dHRlcmJhcicsIFsnJHJvb3RTY29wZScsICckYW5jaG9yU2Nyb2xsJywgZnVuY3Rpb24oJHJvb3RTY29wZSwgJGFuY2hvclNjcm9sbCkge1xyXG4gICAgIHJldHVybiB7XHJcbiAgICAgIHJlc3RyaWN0OiAnQUMnLFxyXG4gICAgICB0ZW1wbGF0ZTonPHNwYW4gY2xhc3M9XCJiYXJcIj48L3NwYW4+JyxcclxuICAgICAgbGluazogZnVuY3Rpb24oc2NvcGUsIGVsLCBhdHRycykgeyAgICAgICAgXHJcbiAgICAgICAgZWwuYWRkQ2xhc3MoJ2J1dHRlcmJhciBoaWRlJyk7XHJcbiAgICAgICAgc2NvcGUuJG9uKCckc3RhdGVDaGFuZ2VTdGFydCcsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgICAkYW5jaG9yU2Nyb2xsKCk7XHJcbiAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnaGlkZScpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBzY29wZS4kb24oJyRzdGF0ZUNoYW5nZVN1Y2Nlc3MnLCBmdW5jdGlvbiggZXZlbnQsIHRvU3RhdGUsIHRvUGFyYW1zLCBmcm9tU3RhdGUgKSB7XHJcbiAgICAgICAgICBldmVudC50YXJnZXRTY29wZS4kd2F0Y2goJyR2aWV3Q29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIGVsLmFkZENsYXNzKCdoaWRlJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgIH07XHJcbiAgfV0pOyIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4gIC5kaXJlY3RpdmUoJ3VpRm9jdXMnLCBmdW5jdGlvbigkdGltZW91dCwgJHBhcnNlKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWxlbWVudCwgYXR0cikge1xyXG4gICAgICAgIHZhciBtb2RlbCA9ICRwYXJzZShhdHRyLnVpRm9jdXMpO1xyXG4gICAgICAgICR0aW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgZWxlbWVudFswXS5mb2N1cygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNjb3BlLiR3YXRjaChtb2RlbCwgZnVuY3Rpb24odmFsdWUpIHtcclxuICAgICAgICAgIGlmKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICR0aW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgIGVsZW1lbnRbMF0uZm9jdXMoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZWxlbWVudC5iaW5kKCdibHVyJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgLy9zY29wZS4kYXBwbHkobW9kZWwuYXNzaWduKHNjb3BlLCBmYWxzZSkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH0pOyIsIiBhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuICAuZGlyZWN0aXZlKCd1aUZ1bGxzY3JlZW4nLCBbJ3VpTG9hZCcsICckZG9jdW1lbnQnLCAnJHdpbmRvdycsIGZ1bmN0aW9uKHVpTG9hZCwgJGRvY3VtZW50LCAkd2luZG93KSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICByZXN0cmljdDogJ0FDJyxcclxuICAgICAgdGVtcGxhdGU6JzxpIGNsYXNzPVwiZmEgZmEtZXhwYW5kIGZhLWZ3IHRleHRcIj48L2k+PGkgY2xhc3M9XCJmYSBmYS1jb21wcmVzcyBmYS1mdyB0ZXh0LWFjdGl2ZVwiPjwvaT4nLFxyXG4gICAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWwsIGF0dHIpIHtcclxuICAgICAgICBlbC5hZGRDbGFzcygnaGlkZScpO1xyXG4gICAgICAgIHVpTG9hZC5sb2FkKCd2ZW5kb3IvbGlicy9zY3JlZW5mdWxsLm1pbi5qcycpLnRoZW4oZnVuY3Rpb24oKXtcclxuICAgICAgICAgIC8vIGRpc2FibGUgb24gaWUxMVxyXG4gICAgICAgICAgaWYgKHNjcmVlbmZ1bGwuZW5hYmxlZCAmJiAhbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvVHJpZGVudC4qcnY6MTFcXC4vKSkge1xyXG4gICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnaGlkZScpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZWwub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgdmFyIHRhcmdldDtcclxuICAgICAgICAgICAgYXR0ci50YXJnZXQgJiYgKCB0YXJnZXQgPSAkKGF0dHIudGFyZ2V0KVswXSApOyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBzY3JlZW5mdWxsLnRvZ2dsZSh0YXJnZXQpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICAkZG9jdW1lbnQub24oc2NyZWVuZnVsbC5yYXcuZnVsbHNjcmVlbmNoYW5nZSwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZihzY3JlZW5mdWxsLmlzRnVsbHNjcmVlbil7XHJcbiAgICAgICAgICAgICAgZWwuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH1dKTsiLCIndXNlIHN0cmljdCc7XHJcblxyXG4vKipcclxuICogMC4xLjFcclxuICogR2VuZXJhbC1wdXJwb3NlIGpRdWVyeSB3cmFwcGVyLiBTaW1wbHkgcGFzcyB0aGUgcGx1Z2luIG5hbWUgYXMgdGhlIGV4cHJlc3Npb24uXHJcbiAqXHJcbiAqIEl0IGlzIHBvc3NpYmxlIHRvIHNwZWNpZnkgYSBkZWZhdWx0IHNldCBvZiBwYXJhbWV0ZXJzIGZvciBlYWNoIGpRdWVyeSBwbHVnaW4uXHJcbiAqIFVuZGVyIHRoZSBqcSBrZXksIG5hbWVzcGFjZSBlYWNoIHBsdWdpbiBieSB0aGF0IHdoaWNoIHdpbGwgYmUgcGFzc2VkIHRvIHVpLWpxLlxyXG4gKiBVbmZvcnR1bmF0ZWx5LCBhdCB0aGlzIHRpbWUgeW91IGNhbiBvbmx5IHByZS1kZWZpbmUgdGhlIGZpcnN0IHBhcmFtZXRlci5cclxuICogQGV4YW1wbGUgeyBqcSA6IHsgZGF0ZXBpY2tlciA6IHsgc2hvd09uOidjbGljaycgfSB9IH1cclxuICpcclxuICogQHBhcmFtIHVpLWpxIHtzdHJpbmd9IFRoZSAkZWxtLltwbHVnaW5OYW1lXSgpIHRvIGNhbGwuXHJcbiAqIEBwYXJhbSBbdWktb3B0aW9uc10ge21peGVkfSBFeHByZXNzaW9uIHRvIGJlIGV2YWx1YXRlZCBhbmQgcGFzc2VkIGFzIG9wdGlvbnMgdG8gdGhlIGZ1bmN0aW9uXHJcbiAqICAgICBNdWx0aXBsZSBwYXJhbWV0ZXJzIGNhbiBiZSBzZXBhcmF0ZWQgYnkgY29tbWFzXHJcbiAqIEBwYXJhbSBbdWktcmVmcmVzaF0ge2V4cHJlc3Npb259IFdhdGNoIGV4cHJlc3Npb24gYW5kIHJlZmlyZSBwbHVnaW4gb24gY2hhbmdlc1xyXG4gKlxyXG4gKiBAZXhhbXBsZSA8aW5wdXQgdWktanE9XCJkYXRlcGlja2VyXCIgdWktb3B0aW9ucz1cIntzaG93T246J2NsaWNrJ30sc2Vjb25kUGFyYW1ldGVyLHRoaXJkUGFyYW1ldGVyXCIgdWktcmVmcmVzaD1cImlDaGFuZ2VcIj5cclxuICovXHJcbmFuZ3VsYXIubW9kdWxlKCd1aS5qcScsIFsndWkubG9hZCddKS5cclxuICB2YWx1ZSgndWlKcUNvbmZpZycsIHt9KS5cclxuICBkaXJlY3RpdmUoJ3VpSnEnLCBbJ3VpSnFDb25maWcnLCAnSlFfQ09ORklHJywgJ3VpTG9hZCcsICckdGltZW91dCcsIGZ1bmN0aW9uIHVpSnFJbmplY3RpbmdGdW5jdGlvbih1aUpxQ29uZmlnLCBKUV9DT05GSUcsIHVpTG9hZCwgJHRpbWVvdXQpIHtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHJlc3RyaWN0OiAnQScsXHJcbiAgICBjb21waWxlOiBmdW5jdGlvbiB1aUpxQ29tcGlsaW5nRnVuY3Rpb24odEVsbSwgdEF0dHJzKSB7XHJcblxyXG4gICAgICBpZiAoIWFuZ3VsYXIuaXNGdW5jdGlvbih0RWxtW3RBdHRycy51aUpxXSkgJiYgIUpRX0NPTkZJR1t0QXR0cnMudWlKcV0pIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3VpLWpxOiBUaGUgXCInICsgdEF0dHJzLnVpSnEgKyAnXCIgZnVuY3Rpb24gZG9lcyBub3QgZXhpc3QnKTtcclxuICAgICAgfVxyXG4gICAgICB2YXIgb3B0aW9ucyA9IHVpSnFDb25maWcgJiYgdWlKcUNvbmZpZ1t0QXR0cnMudWlKcV07XHJcblxyXG4gICAgICByZXR1cm4gZnVuY3Rpb24gdWlKcUxpbmtpbmdGdW5jdGlvbihzY29wZSwgZWxtLCBhdHRycykge1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBnZXRPcHRpb25zKCl7XHJcbiAgICAgICAgICB2YXIgbGlua09wdGlvbnMgPSBbXTtcclxuXHJcbiAgICAgICAgICAvLyBJZiB1aS1vcHRpb25zIGFyZSBwYXNzZWQsIG1lcmdlIChvciBvdmVycmlkZSkgdGhlbSBvbnRvIGdsb2JhbCBkZWZhdWx0cyBhbmQgcGFzcyB0byB0aGUgalF1ZXJ5IG1ldGhvZFxyXG4gICAgICAgICAgaWYgKGF0dHJzLnVpT3B0aW9ucykge1xyXG4gICAgICAgICAgICBsaW5rT3B0aW9ucyA9IHNjb3BlLiRldmFsKCdbJyArIGF0dHJzLnVpT3B0aW9ucyArICddJyk7XHJcbiAgICAgICAgICAgIGlmIChhbmd1bGFyLmlzT2JqZWN0KG9wdGlvbnMpICYmIGFuZ3VsYXIuaXNPYmplY3QobGlua09wdGlvbnNbMF0pKSB7XHJcbiAgICAgICAgICAgICAgbGlua09wdGlvbnNbMF0gPSBhbmd1bGFyLmV4dGVuZCh7fSwgb3B0aW9ucywgbGlua09wdGlvbnNbMF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKG9wdGlvbnMpIHtcclxuICAgICAgICAgICAgbGlua09wdGlvbnMgPSBbb3B0aW9uc107XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gbGlua09wdGlvbnM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBJZiBjaGFuZ2UgY29tcGF0aWJpbGl0eSBpcyBlbmFibGVkLCB0aGUgZm9ybSBpbnB1dCdzIFwiY2hhbmdlXCIgZXZlbnQgd2lsbCB0cmlnZ2VyIGFuIFwiaW5wdXRcIiBldmVudFxyXG4gICAgICAgIGlmIChhdHRycy5uZ01vZGVsICYmIGVsbS5pcygnc2VsZWN0LGlucHV0LHRleHRhcmVhJykpIHtcclxuICAgICAgICAgIGVsbS5iaW5kKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgZWxtLnRyaWdnZXIoJ2lucHV0Jyk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIENhbGwgalF1ZXJ5IG1ldGhvZCBhbmQgcGFzcyByZWxldmFudCBvcHRpb25zXHJcbiAgICAgICAgZnVuY3Rpb24gY2FsbFBsdWdpbigpIHtcclxuICAgICAgICAgICR0aW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBlbG1bYXR0cnMudWlKcV0uYXBwbHkoZWxtLCBnZXRPcHRpb25zKCkpO1xyXG4gICAgICAgICAgfSwgMCwgZmFsc2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gcmVmcmVzaCgpe1xyXG4gICAgICAgICAgLy8gSWYgdWktcmVmcmVzaCBpcyB1c2VkLCByZS1maXJlIHRoZSB0aGUgbWV0aG9kIHVwb24gZXZlcnkgY2hhbmdlXHJcbiAgICAgICAgICBpZiAoYXR0cnMudWlSZWZyZXNoKSB7XHJcbiAgICAgICAgICAgIHNjb3BlLiR3YXRjaChhdHRycy51aVJlZnJlc2gsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgIGNhbGxQbHVnaW4oKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIEpRX0NPTkZJR1thdHRycy51aUpxXSApIHtcclxuICAgICAgICAgIHVpTG9hZC5sb2FkKEpRX0NPTkZJR1thdHRycy51aUpxXSkudGhlbihmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgY2FsbFBsdWdpbigpO1xyXG4gICAgICAgICAgICByZWZyZXNoKCk7XHJcbiAgICAgICAgICB9KS5jYXRjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY2FsbFBsdWdpbigpO1xyXG4gICAgICAgICAgcmVmcmVzaCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuICAgIH1cclxuICB9O1xyXG59XSk7IiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbiAgLmRpcmVjdGl2ZSgndWlNb2R1bGUnLCBbJ01PRFVMRV9DT05GSUcnLCd1aUxvYWQnLCAnJGNvbXBpbGUnLCBmdW5jdGlvbihNT0RVTEVfQ09ORklHLCB1aUxvYWQsICRjb21waWxlKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICByZXN0cmljdDogJ0EnLFxyXG4gICAgICBjb21waWxlOiBmdW5jdGlvbiAoZWwsIGF0dHJzKSB7XHJcbiAgICAgICAgdmFyIGNvbnRlbnRzID0gZWwuY29udGVudHMoKS5jbG9uZSgpO1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbihzY29wZSwgZWwsIGF0dHJzKXtcclxuICAgICAgICAgIGVsLmNvbnRlbnRzKCkucmVtb3ZlKCk7XHJcbiAgICAgICAgICB1aUxvYWQubG9hZChNT0RVTEVfQ09ORklHW2F0dHJzLnVpTW9kdWxlXSlcclxuICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICRjb21waWxlKGNvbnRlbnRzKShzY29wZSwgZnVuY3Rpb24oY2xvbmVkRWxlbWVudCwgc2NvcGUpIHtcclxuICAgICAgICAgICAgICBlbC5hcHBlbmQoY2xvbmVkRWxlbWVudCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH1dKTsiLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuICAuZGlyZWN0aXZlKCd1aU5hdicsIFsnJHRpbWVvdXQnLCBmdW5jdGlvbigkdGltZW91dCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcmVzdHJpY3Q6ICdBQycsXHJcbiAgICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbCwgYXR0cikge1xyXG4gICAgICAgIHZhciBfd2luZG93ID0gJCh3aW5kb3cpLCBcclxuICAgICAgICBfbWIgPSA3NjgsIFxyXG4gICAgICAgIHdyYXAgPSAkKCcuYXBwLWFzaWRlJyksIFxyXG4gICAgICAgIG5leHQsIFxyXG4gICAgICAgIGJhY2tkcm9wID0gJy5kcm9wZG93bi1iYWNrZHJvcCc7XHJcbiAgICAgICAgLy8gdW5mb2xkZWRcclxuICAgICAgICBlbC5vbignY2xpY2snLCAnYScsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgIG5leHQgJiYgbmV4dC50cmlnZ2VyKCdtb3VzZWxlYXZlLm5hdicpO1xyXG4gICAgICAgICAgdmFyIF90aGlzID0gJCh0aGlzKTtcclxuICAgICAgICAgIF90aGlzLnBhcmVudCgpLnNpYmxpbmdzKCBcIi5hY3RpdmVcIiApLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgIF90aGlzLm5leHQoKS5pcygndWwnKSAmJiAgX3RoaXMucGFyZW50KCkudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpICYmICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAvLyBtb2JpbGVcclxuICAgICAgICAgIF90aGlzLm5leHQoKS5pcygndWwnKSB8fCAoICggX3dpbmRvdy53aWR0aCgpIDwgX21iICkgJiYgJCgnLmFwcC1hc2lkZScpLnJlbW92ZUNsYXNzKCdzaG93IG9mZi1zY3JlZW4nKSApO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBmb2xkZWQgJiBmaXhlZFxyXG4gICAgICAgIGVsLm9uKCdtb3VzZWVudGVyJywgJ2EnLCBmdW5jdGlvbihlKXtcclxuICAgICAgICAgIG5leHQgJiYgbmV4dC50cmlnZ2VyKCdtb3VzZWxlYXZlLm5hdicpO1xyXG4gICAgICAgICAgJCgnPiAubmF2Jywgd3JhcCkucmVtb3ZlKCk7XHJcbiAgICAgICAgICBpZiAoICEkKCcuYXBwLWFzaWRlLWZpeGVkLmFwcC1hc2lkZS1mb2xkZWQnKS5sZW5ndGggfHwgKCBfd2luZG93LndpZHRoKCkgPCBfbWIgKSB8fCAkKCcuYXBwLWFzaWRlLWRvY2snKS5sZW5ndGgpIHJldHVybjtcclxuICAgICAgICAgIHZhciBfdGhpcyA9ICQoZS50YXJnZXQpXHJcbiAgICAgICAgICAsIHRvcFxyXG4gICAgICAgICAgLCB3X2ggPSAkKHdpbmRvdykuaGVpZ2h0KClcclxuICAgICAgICAgICwgb2Zmc2V0ID0gNTBcclxuICAgICAgICAgICwgbWluID0gMTUwO1xyXG5cclxuICAgICAgICAgICFfdGhpcy5pcygnYScpICYmIChfdGhpcyA9IF90aGlzLmNsb3Nlc3QoJ2EnKSk7XHJcbiAgICAgICAgICBpZiggX3RoaXMubmV4dCgpLmlzKCd1bCcpICl7XHJcbiAgICAgICAgICAgICBuZXh0ID0gX3RoaXMubmV4dCgpO1xyXG4gICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgXHJcbiAgICAgICAgICBfdGhpcy5wYXJlbnQoKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICB0b3AgPSBfdGhpcy5wYXJlbnQoKS5wb3NpdGlvbigpLnRvcCArIG9mZnNldDtcclxuICAgICAgICAgIG5leHQuY3NzKCd0b3AnLCB0b3ApO1xyXG4gICAgICAgICAgaWYoIHRvcCArIG5leHQuaGVpZ2h0KCkgPiB3X2ggKXtcclxuICAgICAgICAgICAgbmV4dC5jc3MoJ2JvdHRvbScsIDApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYodG9wICsgbWluID4gd19oKXtcclxuICAgICAgICAgICAgbmV4dC5jc3MoJ2JvdHRvbScsIHdfaCAtIHRvcCAtIG9mZnNldCkuY3NzKCd0b3AnLCAnYXV0bycpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgbmV4dC5hcHBlbmRUbyh3cmFwKTtcclxuXHJcbiAgICAgICAgICBuZXh0Lm9uKCdtb3VzZWxlYXZlLm5hdicsIGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgICAkKGJhY2tkcm9wKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgbmV4dC5hcHBlbmRUbyhfdGhpcy5wYXJlbnQoKSk7XHJcbiAgICAgICAgICAgIG5leHQub2ZmKCdtb3VzZWxlYXZlLm5hdicpLmNzcygndG9wJywgJ2F1dG8nKS5jc3MoJ2JvdHRvbScsICdhdXRvJyk7XHJcbiAgICAgICAgICAgIF90aGlzLnBhcmVudCgpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICQoJy5zbWFydCcpLmxlbmd0aCAmJiAkKCc8ZGl2IGNsYXNzPVwiZHJvcGRvd24tYmFja2Ryb3BcIi8+JykuaW5zZXJ0QWZ0ZXIoJy5hcHAtYXNpZGUnKS5vbignY2xpY2snLCBmdW5jdGlvbihuZXh0KXtcclxuICAgICAgICAgICAgbmV4dCAmJiBuZXh0LnRyaWdnZXIoJ21vdXNlbGVhdmUubmF2Jyk7XHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHdyYXAub24oJ21vdXNlbGVhdmUnLCBmdW5jdGlvbihlKXtcclxuICAgICAgICAgIG5leHQgJiYgbmV4dC50cmlnZ2VyKCdtb3VzZWxlYXZlLm5hdicpO1xyXG4gICAgICAgICAgJCgnPiAubmF2Jywgd3JhcCkucmVtb3ZlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfV0pOyIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4gIC5kaXJlY3RpdmUoJ3VpU2Nyb2xsJywgWyckbG9jYXRpb24nLCAnJGFuY2hvclNjcm9sbCcsIGZ1bmN0aW9uKCRsb2NhdGlvbiwgJGFuY2hvclNjcm9sbCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcmVzdHJpY3Q6ICdBQycsXHJcbiAgICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbCwgYXR0cikge1xyXG4gICAgICAgIGVsLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICRsb2NhdGlvbi5oYXNoKGF0dHIudWlTY3JvbGwpO1xyXG4gICAgICAgICAgJGFuY2hvclNjcm9sbCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH1dKTsiLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuICAuZGlyZWN0aXZlKCd1aVNoaWZ0JywgWyckdGltZW91dCcsIGZ1bmN0aW9uKCR0aW1lb3V0KSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICByZXN0cmljdDogJ0EnLFxyXG4gICAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWwsIGF0dHIpIHtcclxuICAgICAgICAvLyBnZXQgdGhlICRwcmV2IG9yICRwYXJlbnQgb2YgdGhpcyBlbFxyXG4gICAgICAgIHZhciBfZWwgPSAkKGVsKSxcclxuICAgICAgICAgICAgX3dpbmRvdyA9ICQod2luZG93KSxcclxuICAgICAgICAgICAgcHJldiA9IF9lbC5wcmV2KCksXHJcbiAgICAgICAgICAgIHBhcmVudCxcclxuICAgICAgICAgICAgd2lkdGggPSBfd2luZG93LndpZHRoKClcclxuICAgICAgICAgICAgO1xyXG5cclxuICAgICAgICAhcHJldi5sZW5ndGggJiYgKHBhcmVudCA9IF9lbC5wYXJlbnQoKSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZnVuY3Rpb24gc20oKXtcclxuICAgICAgICAgICR0aW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIG1ldGhvZCA9IGF0dHIudWlTaGlmdDtcclxuICAgICAgICAgICAgdmFyIHRhcmdldCA9IGF0dHIudGFyZ2V0O1xyXG4gICAgICAgICAgICBfZWwuaGFzQ2xhc3MoJ2luJykgfHwgX2VsW21ldGhvZF0odGFyZ2V0KS5hZGRDbGFzcygnaW4nKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBmdW5jdGlvbiBtZCgpe1xyXG4gICAgICAgICAgcGFyZW50ICYmIHBhcmVudFsncHJlcGVuZCddKGVsKTtcclxuICAgICAgICAgICFwYXJlbnQgJiYgX2VsWydpbnNlcnRBZnRlciddKHByZXYpO1xyXG4gICAgICAgICAgX2VsLnJlbW92ZUNsYXNzKCdpbicpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgKHdpZHRoIDwgNzY4ICYmIHNtKCkpIHx8IG1kKCk7XHJcblxyXG4gICAgICAgIF93aW5kb3cucmVzaXplKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgaWYod2lkdGggIT09IF93aW5kb3cud2lkdGgoKSl7XHJcbiAgICAgICAgICAgICR0aW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgKF93aW5kb3cud2lkdGgoKSA8IDc2OCAmJiBzbSgpKSB8fCBtZCgpO1xyXG4gICAgICAgICAgICAgIHdpZHRoID0gX3dpbmRvdy53aWR0aCgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9XSk7IiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbiAgLmRpcmVjdGl2ZSgndWlUb2dnbGVDbGFzcycsIFsnJHRpbWVvdXQnLCAnJGRvY3VtZW50JywgZnVuY3Rpb24oJHRpbWVvdXQsICRkb2N1bWVudCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcmVzdHJpY3Q6ICdBQycsXHJcbiAgICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbCwgYXR0cikge1xyXG4gICAgICAgIGVsLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgIHZhciBjbGFzc2VzID0gYXR0ci51aVRvZ2dsZUNsYXNzLnNwbGl0KCcsJyksXHJcbiAgICAgICAgICAgICAgdGFyZ2V0cyA9IChhdHRyLnRhcmdldCAmJiBhdHRyLnRhcmdldC5zcGxpdCgnLCcpKSB8fCBBcnJheShlbCksXHJcbiAgICAgICAgICAgICAga2V5ID0gMDtcclxuICAgICAgICAgIGFuZ3VsYXIuZm9yRWFjaChjbGFzc2VzLCBmdW5jdGlvbiggX2NsYXNzICkge1xyXG4gICAgICAgICAgICB2YXIgdGFyZ2V0ID0gdGFyZ2V0c1sodGFyZ2V0cy5sZW5ndGggJiYga2V5KV07ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICggX2NsYXNzLmluZGV4T2YoICcqJyApICE9PSAtMSApICYmIG1hZ2ljKF9jbGFzcywgdGFyZ2V0KTtcclxuICAgICAgICAgICAgJCggdGFyZ2V0ICkudG9nZ2xlQ2xhc3MoX2NsYXNzKTtcclxuICAgICAgICAgICAga2V5ICsrO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICAkKGVsKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcblxyXG4gICAgICAgICAgZnVuY3Rpb24gbWFnaWMoX2NsYXNzLCB0YXJnZXQpe1xyXG4gICAgICAgICAgICB2YXIgcGF0dCA9IG5ldyBSZWdFeHAoICdcXFxccycgKyBcclxuICAgICAgICAgICAgICAgIF9jbGFzcy5cclxuICAgICAgICAgICAgICAgICAgcmVwbGFjZSggL1xcKi9nLCAnW0EtWmEtejAtOS1fXSsnICkuXHJcbiAgICAgICAgICAgICAgICAgIHNwbGl0KCAnICcgKS5cclxuICAgICAgICAgICAgICAgICAgam9pbiggJ1xcXFxzfFxcXFxzJyApICsgXHJcbiAgICAgICAgICAgICAgICAnXFxcXHMnLCAnZycgKTtcclxuICAgICAgICAgICAgdmFyIGNuID0gJyAnICsgJCh0YXJnZXQpWzBdLmNsYXNzTmFtZSArICcgJztcclxuICAgICAgICAgICAgd2hpbGUgKCBwYXR0LnRlc3QoIGNuICkgKSB7XHJcbiAgICAgICAgICAgICAgY24gPSBjbi5yZXBsYWNlKCBwYXR0LCAnICcgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAkKHRhcmdldClbMF0uY2xhc3NOYW1lID0gJC50cmltKCBjbiApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH1dKTsiLCIndXNlIHN0cmljdCc7XHJcblxyXG4vKipcclxuICogR2VuZXJhbC1wdXJwb3NlIHZhbGlkYXRvciBmb3IgbmdNb2RlbC5cclxuICogYW5ndWxhci5qcyBjb21lcyB3aXRoIHNldmVyYWwgYnVpbHQtaW4gdmFsaWRhdGlvbiBtZWNoYW5pc20gZm9yIGlucHV0IGZpZWxkcyAobmdSZXF1aXJlZCwgbmdQYXR0ZXJuIGV0Yy4pIGJ1dCB1c2luZ1xyXG4gKiBhbiBhcmJpdHJhcnkgdmFsaWRhdGlvbiBmdW5jdGlvbiByZXF1aXJlcyBjcmVhdGlvbiBvZiBhIGN1c3RvbSBmb3JtYXR0ZXJzIGFuZCAvIG9yIHBhcnNlcnMuXHJcbiAqIFRoZSB1aS12YWxpZGF0ZSBkaXJlY3RpdmUgbWFrZXMgaXQgZWFzeSB0byB1c2UgYW55IGZ1bmN0aW9uKHMpIGRlZmluZWQgaW4gc2NvcGUgYXMgYSB2YWxpZGF0b3IgZnVuY3Rpb24ocykuXHJcbiAqIEEgdmFsaWRhdG9yIGZ1bmN0aW9uIHdpbGwgdHJpZ2dlciB2YWxpZGF0aW9uIG9uIGJvdGggbW9kZWwgYW5kIGlucHV0IGNoYW5nZXMuXHJcbiAqXHJcbiAqIEBleGFtcGxlIDxpbnB1dCB1aS12YWxpZGF0ZT1cIiAnbXlWYWxpZGF0b3JGdW5jdGlvbigkdmFsdWUpJyBcIj5cclxuICogQGV4YW1wbGUgPGlucHV0IHVpLXZhbGlkYXRlPVwieyBmb28gOiAnJHZhbHVlID4gYW5vdGhlck1vZGVsJywgYmFyIDogJ3ZhbGlkYXRlRm9vKCR2YWx1ZSknIH1cIj5cclxuICogQGV4YW1wbGUgPGlucHV0IHVpLXZhbGlkYXRlPVwieyBmb28gOiAnJHZhbHVlID4gYW5vdGhlck1vZGVsJyB9XCIgdWktdmFsaWRhdGUtd2F0Y2g9XCIgJ2Fub3RoZXJNb2RlbCcgXCI+XHJcbiAqIEBleGFtcGxlIDxpbnB1dCB1aS12YWxpZGF0ZT1cInsgZm9vIDogJyR2YWx1ZSA+IGFub3RoZXJNb2RlbCcsIGJhciA6ICd2YWxpZGF0ZUZvbygkdmFsdWUpJyB9XCIgdWktdmFsaWRhdGUtd2F0Y2g9XCIgeyBmb28gOiAnYW5vdGhlck1vZGVsJyB9IFwiPlxyXG4gKlxyXG4gKiBAcGFyYW0gdWktdmFsaWRhdGUge3N0cmluZ3xvYmplY3QgbGl0ZXJhbH0gSWYgc3RyaW5ncyBpcyBwYXNzZWQgaXQgc2hvdWxkIGJlIGEgc2NvcGUncyBmdW5jdGlvbiB0byBiZSB1c2VkIGFzIGEgdmFsaWRhdG9yLlxyXG4gKiBJZiBhbiBvYmplY3QgbGl0ZXJhbCBpcyBwYXNzZWQgYSBrZXkgZGVub3RlcyBhIHZhbGlkYXRpb24gZXJyb3Iga2V5IHdoaWxlIGEgdmFsdWUgc2hvdWxkIGJlIGEgdmFsaWRhdG9yIGZ1bmN0aW9uLlxyXG4gKiBJbiBib3RoIGNhc2VzIHZhbGlkYXRvciBmdW5jdGlvbiBzaG91bGQgdGFrZSBhIHZhbHVlIHRvIHZhbGlkYXRlIGFzIGl0cyBhcmd1bWVudCBhbmQgc2hvdWxkIHJldHVybiB0cnVlL2ZhbHNlIGluZGljYXRpbmcgYSB2YWxpZGF0aW9uIHJlc3VsdC5cclxuICovXHJcbmFuZ3VsYXIubW9kdWxlKCd1aS52YWxpZGF0ZScsW10pLmRpcmVjdGl2ZSgndWlWYWxpZGF0ZScsIGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHJlc3RyaWN0OiAnQScsXHJcbiAgICByZXF1aXJlOiAnbmdNb2RlbCcsXHJcbiAgICBsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsbSwgYXR0cnMsIGN0cmwpIHtcclxuICAgICAgdmFyIHZhbGlkYXRlRm4sIHZhbGlkYXRvcnMgPSB7fSxcclxuICAgICAgICAgIHZhbGlkYXRlRXhwciA9IHNjb3BlLiRldmFsKGF0dHJzLnVpVmFsaWRhdGUpO1xyXG5cclxuICAgICAgaWYgKCF2YWxpZGF0ZUV4cHIpeyByZXR1cm47fVxyXG5cclxuICAgICAgaWYgKGFuZ3VsYXIuaXNTdHJpbmcodmFsaWRhdGVFeHByKSkge1xyXG4gICAgICAgIHZhbGlkYXRlRXhwciA9IHsgdmFsaWRhdG9yOiB2YWxpZGF0ZUV4cHIgfTtcclxuICAgICAgfVxyXG5cclxuICAgICAgYW5ndWxhci5mb3JFYWNoKHZhbGlkYXRlRXhwciwgZnVuY3Rpb24gKGV4cHJzc24sIGtleSkge1xyXG4gICAgICAgIHZhbGlkYXRlRm4gPSBmdW5jdGlvbiAodmFsdWVUb1ZhbGlkYXRlKSB7XHJcbiAgICAgICAgICB2YXIgZXhwcmVzc2lvbiA9IHNjb3BlLiRldmFsKGV4cHJzc24sIHsgJyR2YWx1ZScgOiB2YWx1ZVRvVmFsaWRhdGUgfSk7XHJcbiAgICAgICAgICBpZiAoYW5ndWxhci5pc09iamVjdChleHByZXNzaW9uKSAmJiBhbmd1bGFyLmlzRnVuY3Rpb24oZXhwcmVzc2lvbi50aGVuKSkge1xyXG4gICAgICAgICAgICAvLyBleHByZXNzaW9uIGlzIGEgcHJvbWlzZVxyXG4gICAgICAgICAgICBleHByZXNzaW9uLnRoZW4oZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICBjdHJsLiRzZXRWYWxpZGl0eShrZXksIHRydWUpO1xyXG4gICAgICAgICAgICB9LCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgIGN0cmwuJHNldFZhbGlkaXR5KGtleSwgZmFsc2UpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlVG9WYWxpZGF0ZTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoZXhwcmVzc2lvbikge1xyXG4gICAgICAgICAgICAvLyBleHByZXNzaW9uIGlzIHRydWVcclxuICAgICAgICAgICAgY3RybC4kc2V0VmFsaWRpdHkoa2V5LCB0cnVlKTtcclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlVG9WYWxpZGF0ZTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIGV4cHJlc3Npb24gaXMgZmFsc2VcclxuICAgICAgICAgICAgY3RybC4kc2V0VmFsaWRpdHkoa2V5LCBmYWxzZSk7XHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZVRvVmFsaWRhdGU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB2YWxpZGF0b3JzW2tleV0gPSB2YWxpZGF0ZUZuO1xyXG4gICAgICAgIGN0cmwuJGZvcm1hdHRlcnMucHVzaCh2YWxpZGF0ZUZuKTtcclxuICAgICAgICBjdHJsLiRwYXJzZXJzLnB1c2godmFsaWRhdGVGbik7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgZnVuY3Rpb24gYXBwbHlfd2F0Y2god2F0Y2gpXHJcbiAgICAgIHtcclxuICAgICAgICAgIC8vc3RyaW5nIC0gdXBkYXRlIGFsbCB2YWxpZGF0b3JzIG9uIGV4cHJlc3Npb24gY2hhbmdlXHJcbiAgICAgICAgICBpZiAoYW5ndWxhci5pc1N0cmluZyh3YXRjaCkpXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgc2NvcGUuJHdhdGNoKHdhdGNoLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICBhbmd1bGFyLmZvckVhY2godmFsaWRhdG9ycywgZnVuY3Rpb24odmFsaWRhdG9yRm4pe1xyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yRm4oY3RybC4kbW9kZWxWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvL2FycmF5IC0gdXBkYXRlIGFsbCB2YWxpZGF0b3JzIG9uIGNoYW5nZSBvZiBhbnkgZXhwcmVzc2lvblxyXG4gICAgICAgICAgaWYgKGFuZ3VsYXIuaXNBcnJheSh3YXRjaCkpXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgYW5ndWxhci5mb3JFYWNoKHdhdGNoLCBmdW5jdGlvbihleHByZXNzaW9uKXtcclxuICAgICAgICAgICAgICAgICAgc2NvcGUuJHdhdGNoKGV4cHJlc3Npb24sIGZ1bmN0aW9uKClcclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgYW5ndWxhci5mb3JFYWNoKHZhbGlkYXRvcnMsIGZ1bmN0aW9uKHZhbGlkYXRvckZuKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3JGbihjdHJsLiRtb2RlbFZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLy9vYmplY3QgLSB1cGRhdGUgYXBwcm9wcmlhdGUgdmFsaWRhdG9yXHJcbiAgICAgICAgICBpZiAoYW5ndWxhci5pc09iamVjdCh3YXRjaCkpXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgYW5ndWxhci5mb3JFYWNoKHdhdGNoLCBmdW5jdGlvbihleHByZXNzaW9uLCB2YWxpZGF0b3JLZXkpXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAvL3ZhbHVlIGlzIHN0cmluZyAtIGxvb2sgYWZ0ZXIgb25lIGV4cHJlc3Npb25cclxuICAgICAgICAgICAgICAgICAgaWYgKGFuZ3VsYXIuaXNTdHJpbmcoZXhwcmVzc2lvbikpXHJcbiAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHNjb3BlLiR3YXRjaChleHByZXNzaW9uLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcnNbdmFsaWRhdG9yS2V5XShjdHJsLiRtb2RlbFZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAvL3ZhbHVlIGlzIGFycmF5IC0gbG9vayBhZnRlciBhbGwgZXhwcmVzc2lvbnMgaW4gYXJyYXlcclxuICAgICAgICAgICAgICAgICAgaWYgKGFuZ3VsYXIuaXNBcnJheShleHByZXNzaW9uKSlcclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgYW5ndWxhci5mb3JFYWNoKGV4cHJlc3Npb24sIGZ1bmN0aW9uKGludEV4cHJlc3Npb24pXHJcbiAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGUuJHdhdGNoKGludEV4cHJlc3Npb24sIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcnNbdmFsaWRhdG9yS2V5XShjdHJsLiRtb2RlbFZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLy8gU3VwcG9ydCBmb3IgdWktdmFsaWRhdGUtd2F0Y2hcclxuICAgICAgaWYgKGF0dHJzLnVpVmFsaWRhdGVXYXRjaCl7XHJcbiAgICAgICAgICBhcHBseV93YXRjaCggc2NvcGUuJGV2YWwoYXR0cnMudWlWYWxpZGF0ZVdhdGNoKSApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdjb21tb25TZXJ2aWNlJykuXHJcbiAgICBzZXJ2aWNlKCdlbnVtU2VydmljZScsIFtmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgXCJyZXF1ZXN0X3N0XCI6IHtcclxuICAgICAgICAgICAgICAgIFwiMVwiOiBcIueUs+ivt+WNleW3suaPkOS6pFwiLFxyXG4gICAgICAgICAgICAgICAgXCIyXCI6IFwi55Sz6K+35Y2V5bey5ouS57udXCIsXHJcbiAgICAgICAgICAgICAgICBcIjNcIjogXCLnlLPor7fljZXlt7LmjqXmlLZcIixcclxuICAgICAgICAgICAgICAgIFwiNFwiOiBcIuS4reW/g+agt+acrOW3suaOpeaUtlwiLFxyXG4gICAgICAgICAgICAgICAgXCI1XCI6IFwi5qOA6aqM5LitXCIsXHJcbiAgICAgICAgICAgICAgICBcIjZcIjogXCLmo4Dpqozlt7LlrozmiJBcIixcclxuICAgICAgICAgICAgICAgIFwiN1wiOiBcIuajgOmqjOaKpeWRiuW3suWujOaIkFwiLFxyXG4gICAgICAgICAgICAgICAgXCI4XCI6IFwi5qOA6aqM5oql5ZGK5bey5a6h5qC4XCIsXHJcbiAgICAgICAgICAgICAgICBcIjlcIjogXCLmo4DpqozmiqXlkYrlt7LkuIrkvKDkuK3lv4NcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcImxvZ2lzdGljc19zdFwiOiB7XHJcbiAgICAgICAgICAgICAgICBcIjFcIjogXCLnianmtYHlt7LmjqXmlLZcIixcclxuICAgICAgICAgICAgICAgIFwiMlwiOiBcIuajgOmqjOS4reW/g+W3suaOpeaUtlwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfV0pOyIsIlxyXG52YXIgdmlldyA9IHtcclxuICAgIGxvYWRpbmdfZGlhbG9nOiBudWxsLFxyXG4gICAgbG9hZGluZ19udW06IDBcclxufTtcclxuXHJcbi8vIGRpYWxvZ1xyXG52aWV3LmRpYWxvZyA9IGZ1bmN0aW9uIChvcHQpIHtcclxuICAgIHZhciB0aXRsZSA9IG9wdC50aXRsZSB8fCBUKFwiZGlhbG9nLkRJQUxPR1wiKSxcclxuICAgICAgICBjb250ZW50ID0gb3B0LmNvbnRlbnQgfHwgXCJcIixcclxuICAgICAgICBva19idG4gPSBvcHQub2tfYnRuLFxyXG4gICAgICAgIGNhbmNlbF9idG4gPSBvcHQuY2FuY2VsX2J0bixcclxuICAgICAgICBjbG9zZV9idG4gPSBvcHQuY2xvc2VfYnRuLFxyXG4gICAgICAgIG9rX2ZuID0gb3B0Lm9rX2ZuIHx8IG51bGwsXHJcbiAgICAgICAgY2FuY2VsX2ZuID0gb3B0LmNhbmNlbF9mbiB8fCBudWxsLFxyXG4gICAgICAgIHByZV9mbiA9IG9wdC5wcmVfZm4gfHwgbnVsbCxcclxuICAgICAgICBkaWFsb2cgPSBudWxsLFxyXG4gICAgICAgIGRpYWxvZ19odG1sID0gJzxkaXYgY2xhc3M9XCJtb2RhbCBmYWRlXCI+XFxcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWRpYWxvZ1wiPlxcXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+XFxcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlclwiPlxcXHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2xvc2VcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiPjxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+PC9idXR0b24+XFxcclxuICAgICAgICA8aDQgY2xhc3M9XCJtb2RhbC10aXRsZVwiPicgKyB0aXRsZSArICc8L2g0PlxcXHJcbiAgICAgICAgICAgIDwvZGl2PlxcXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1ib2R5XCI+JyArIGNvbnRlbnQgKyAnPC9kaXY+XFxcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWZvb3RlclwiPic7XHJcblxyXG4gICAgaWYgKGNhbmNlbF9idG4pIHtcclxuICAgICAgICBkaWFsb2dfaHRtbCArPSAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgZGlhbG9nX2J0biBjYW5jZWxcIj4nICsgVChcImJ1dHRvbi5DQU5DRUxcIikgKyAnPC9idXR0b24+JztcclxuICAgIH1cclxuXHJcbiAgICBpZiAob2tfYnRuKSB7XHJcbiAgICAgICAgZGlhbG9nX2h0bWwgKz0gJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGRpYWxvZ19idG4gb2tcIj4nICsgVChcImJ1dHRvbi5PS1wiKSArICc8L2J1dHRvbj4nO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjbG9zZV9idG4pIHtcclxuICAgICAgICBkaWFsb2dfaHRtbCArPSAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgZGlhbG9nX2J0biBva1wiPicgKyBUKFwiYnV0dG9uLkNMT1NFXCIpICsgJzwvYnV0dG9uPic7XHJcbiAgICB9XHJcblxyXG4gICAgZGlhbG9nX2h0bWwgKz0gJzwvZGl2PjwvZGl2PjwvZGl2PjwvZGl2Pic7XHJcblxyXG4gICAgZGlhbG9nID0gJChkaWFsb2dfaHRtbCk7XHJcblxyXG4gICAgZGlhbG9nXHJcbiAgICAgICAgLm9uKCdzaG93LmJzLm1vZGFsJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgaWYgKG9wdC53aWR0aCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGNzcyA9IHtcclxuICAgICAgICAgICAgICAgICAgICAnd2lkdGgnOiBvcHQud2lkdGggKyAncHgnXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5jaGlsZHJlbihcIi5tb2RhbC1kaWFsb2dcIikuY3NzKGNzcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcHJlX2ZuICYmIHByZV9mbigkKHRoaXMpKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5vbihcInNob3duLmJzLm1vZGFsXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAub24oXCJoaWRlLmJzLm1vZGFsXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAub24oXCJoaWRkZW4uYnMubW9kYWxcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgZGlhbG9nLnJlbW92ZSgpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLm9uKFwiY2xpY2tcIiwgXCIuZGlhbG9nX2J0blwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKFwib2tcIikpIHtcclxuICAgICAgICAgICAgICAgIG9rX2ZuICYmIG9rX2ZuKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKFwiY2FuY2VsXCIpKSB7XHJcbiAgICAgICAgICAgICAgICBjYW5jZWxfZm4gJiYgY2FuY2VsX2ZuKCk7XHJcbiAgICAgICAgICAgICAgICBkaWFsb2cubW9kYWwoXCJoaWRlXCIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIW9wdC5wcmV2ZW50X2F1dG9faGlkZSB8fCBvcHQucHJldmVudF9hdXRvX2hpZGUgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgIGRpYWxvZy5tb2RhbChcImhpZGVcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC5vbignc2hvd24nLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHByZV9mbiAmJiBwcmVfZm4oJCh0aGlzKSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAubW9kYWwoJ3Nob3cnKTtcclxuXHJcbiAgICBkaWFsb2cuY2xvc2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCh0aGlzKS5tb2RhbCgnaGlkZScpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gZGlhbG9nO1xyXG59O1xyXG5cclxuLy8gbG9hZGluZ1xyXG52aWV3LmxvYWRpbmcgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAodmlldy5sb2FkaW5nX2RpYWxvZyA9PSBudWxsKSB7XHJcbiAgICAgICAgdmFyIG9wdCA9IHtcclxuICAgICAgICAgICAgdGl0bGU6IFQoXCJkaWFsb2cuQUxFUlRcIiksXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiPGltZyBzcmM9J2ltZy9sb2FkaW5nLmdpZicvPiA8c3BhbiBzdHlsZT0nZm9udC1zaXplOiAxOHB4Oyc+XCIgKyBUKFwiZGlhbG9nLkxPQURJTkdcIikgKyBcIjwvc3Bhbj5cIixcclxuICAgICAgICAgICAgb2tfYnRuOiBmYWxzZSxcclxuICAgICAgICAgICAgY2FuY2VsX2J0bjogZmFsc2VcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB2aWV3LmxvYWRpbmdfZGlhbG9nID0gdmlldy5kaWFsb2cob3B0KTtcclxuICAgIH1cclxuXHJcbiAgICB2aWV3LmxvYWRpbmdfbnVtKys7XHJcbn07XHJcblxyXG4vLyDlhbPpl61sb2FkaW5nXHJcbnZpZXcuY2xvc2VfbG9hZGluZyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZpZXcubG9hZGluZ19udW0tLTtcclxuXHJcbiAgICBpZiAodmlldy5sb2FkaW5nX2RpYWxvZyAhPSBudWxsICYmIHZpZXcubG9hZGluZ19udW0gPT0gMCkge1xyXG4gICAgICAgIHZpZXcubG9hZGluZ19kaWFsb2cuY2xvc2UoKTtcclxuICAgICAgICB2aWV3LmxvYWRpbmdfZGlhbG9nID0gbnVsbDtcclxuICAgIH1cclxufTtcclxuXHJcbi8vIGFsZXJ0XHJcbnZpZXcuYWxlcnQgPSBmdW5jdGlvbiAobXNnLCBvaykge1xyXG4gICAgdmFyIG9wdCA9IHtcclxuICAgICAgICB0aXRsZTogVChcImRpYWxvZy5BTEVSVFwiKSxcclxuICAgICAgICBjb250ZW50OiBcIlwiICsgbXNnICsgXCJcIixcclxuICAgICAgICBjbG9zZV9idG46IHRydWUsXHJcbiAgICAgICAgb2tfZm46IG9rXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB2aWV3LmRpYWxvZyhvcHQpO1xyXG59O1xyXG5cclxuLy8gc2hvd1xyXG52aWV3LnNob3cgPSBmdW5jdGlvbiAobXNnLCB0aXRsZSwgd2lkdGgsIG9rLCBjYW5jZWwpIHtcclxuICAgIHZhciBvcHQgPSB7XHJcbiAgICAgICAgdGl0bGU6IFQoXCJkaWFsb2cuQUxFUlRcIiksXHJcbiAgICAgICAgY29udGVudDogXCI8cCBzdHlsZT0nd29yZC13cmFwOmJyZWFrLXdvcmQnPlwiICsgbXNnICsgXCI8L3A+XCIsXHJcbiAgICAgICAgY2xvc2VfYnRuOiB0cnVlLFxyXG4gICAgICAgIG9rX2ZuOiBvayxcclxuICAgICAgICBjYW5jZWxfZm46IGNhbmNlbFxyXG4gICAgfTtcclxuXHJcbiAgICBpZiAodGl0bGUgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgb3B0LnRpdGxlID0gdGl0bGU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHdpZHRoICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIG9wdC53aWR0aCA9IHdpZHRoO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB2aWV3LmRpYWxvZyhvcHQpO1xyXG59O1xyXG5cclxuLy8gY29uZmlybVxyXG52aWV3LmNvbmZpcm0gPSBmdW5jdGlvbiAoY29udGVudCwgb2ssIGNhbmNlbCkge1xyXG5cclxuICAgIHZhciBvcHQgPSB7XHJcbiAgICAgICAgdGl0bGU6IFQoXCJkaWFsb2cuQUxFUlRcIiksXHJcbiAgICAgICAgY29udGVudDogJzxzcGFuIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1leGNsYW1hdGlvbi1zaWduXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+ICcgKyBjb250ZW50ICsgJzwvc3Bhbj4nLFxyXG4gICAgICAgIG9rX2J0bjogdHJ1ZSxcclxuICAgICAgICBjYW5jZWxfYnRuOiB0cnVlLFxyXG4gICAgICAgIG9rX2ZuOiBvayxcclxuICAgICAgICBjYW5jZWxfZm46IGNhbmNlbFxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gdmlldy5kaWFsb2cob3B0KTtcclxufTtcclxuXHJcbi8vIHByb21wdFxyXG52aWV3LnByb21wdCA9IGZ1bmN0aW9uICh0aXRsZSwgZGVmYXVsdF92YWwsIG9rLCBjYW5jZWwpIHtcclxuICAgIHZhciBva19mbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgdmFsdWUgPSAkKFwiI3Byb21wdF9pbnB1dFwiKS52YWwoKTtcclxuICAgICAgICBvayh2YWx1ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBjb250ZW50ID0gJzxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJwcm9tcHRfaW5wdXRcIj4nO1xyXG4gICAgaWYgKGRlZmF1bHRfdmFsICE9IG51bGwgJiYgZGVmYXVsdF92YWwgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgY29udGVudCA9ICc8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwicHJvbXB0X2lucHV0XCIgdmFsdWU9XCInICsgZGVmYXVsdF92YWwgKyAnXCI+JztcclxuICAgIH1cclxuXHJcbiAgICB2YXIgb3B0ID0ge1xyXG4gICAgICAgIHRpdGxlOiB0aXRsZSxcclxuICAgICAgICBjb250ZW50OiBjb250ZW50LFxyXG4gICAgICAgIG9rX2J0bjogdHJ1ZSxcclxuICAgICAgICBjYW5jZWxfYnRuOiB0cnVlLFxyXG4gICAgICAgIG9rX2ZuOiBva19mbixcclxuICAgICAgICBjYW5jZWxfZm46IGNhbmNlbFxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gdmlldy5kaWFsb2cob3B0KTtcclxufTtcclxuXHJcbi8vIHByb21wdF90aW1lXHJcbnZpZXcucHJvbXB0X3RpbWUgPSBmdW5jdGlvbiAodGl0bGUsIG9rLCBjYW5jZWwpIHtcclxuICAgIHZhciBva19mbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgdmFsdWUgPSAkKFwiI3Byb21wdF9pbnB1dFwiKS52YWwoKTtcclxuICAgICAgICBvayh2YWx1ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBvcHQgPSB7XHJcbiAgICAgICAgdGl0bGU6IHRpdGxlLFxyXG4gICAgICAgIGNvbnRlbnQ6ICc8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGRhdGEtZGF0ZS1mb3JtYXQ9XCJ5eXl5LW1tLWRkIGhoOmlpOnNzXCIgaWQ9XCJwcm9tcHRfaW5wdXRcIj4nLFxyXG4gICAgICAgIG9rX2J0bjogdHJ1ZSxcclxuICAgICAgICBjYW5jZWxfYnRuOiB0cnVlLFxyXG4gICAgICAgIG9rX2ZuOiBva19mbixcclxuICAgICAgICBjYW5jZWxfZm46IGNhbmNlbFxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gdmlldy5kaWFsb2cob3B0KTtcclxufTtcclxuXHJcbi8vIHByb21wdF90ZXh0YXJlYVxyXG52aWV3LnByb21wdF90ZXh0YXJlYSA9IGZ1bmN0aW9uICh0aXRsZSwgb2ssIGNhbmNlbCwgdmFsdWUpIHtcclxuICAgIHZhbHVlID0gdmFsdWUgfHwgXCJcIjtcclxuXHJcbiAgICB2YXIgb2tfZm4gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHZhbHVlID0gJChcIiNwcm9tcHRfaW5wdXRcIikudmFsKCk7XHJcbiAgICAgICAgb2sodmFsdWUpO1xyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgb3B0ID0ge1xyXG4gICAgICAgIHRpdGxlOiB0aXRsZSxcclxuICAgICAgICBjb250ZW50OiAnPHRleHRhcmVhIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJwcm9tcHRfaW5wdXRcIj4nICsgdmFsdWUgKyAnPC90ZXh0YXJlYT4nLFxyXG4gICAgICAgIG9rX2J0bjogdHJ1ZSxcclxuICAgICAgICBjYW5jZWxfYnRuOiB0cnVlLFxyXG4gICAgICAgIG9rX2ZuOiBva19mbixcclxuICAgICAgICBjYW5jZWxfZm46IGNhbmNlbFxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gdmlldy5kaWFsb2cob3B0KTtcclxufTtcclxuXHJcbnZhciB1dGlscyA9IHt9O1xyXG5cclxudXRpbHMuZXhwb3J0RXhjZWwgPSBmdW5jdGlvbiAocGFyYW1zLCB1cmwsIG1ldGhvZCkge1xyXG4gICAgaWYgKHBhcmFtcykge1xyXG4gICAgICAgIC8vIHBhcmFtcyDmmK8gc3RyaW5nIOaIluiAhSBhcnJheS9vYmplY3RcclxuICAgICAgICBpZiAodHlwZW9mIHBhcmFtcyA9PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICBwYXJhbXMgPSB7fTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcGFyYW1zWydleHBvcnQnXSA9IDE7XHJcbiAgICAgICAgLy8g5oqK5Y+C5pWw57uE6KOF5oiQIGZvcm3nmoQgIGlucHV0XHJcbiAgICAgICAgdmFyIGlucHV0cyA9IFtdO1xyXG4gICAgICAgICQuZWFjaChwYXJhbXMsIGZ1bmN0aW9uIChrLCB2KSB7XHJcbiAgICAgICAgICAgIGlmICh2ID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlucHV0cy5wdXNoKCc8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCInICsgayArICdcIiB2YWx1ZT1cIicgKyB2ICsgJ1wiIC8+Jyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJChkb2N1bWVudCkub2ZmKCdzdWJtaXQnKTtcclxuICAgICAgICAkKCc8Zm9ybSBpZD1cImRvd25sb2FkXCIgYWN0aW9uPVwiJyArICh1cmwgfHwgJ2luZGV4LnBocCcpICsgJ1wiIG1ldGhvZD1cIicgKyAobWV0aG9kIHx8IFwicG9zdFwiKSArICdcIiB0YXJnZXQ9XCJfYmxhbmtcIj4nICsgaW5wdXRzLmpvaW4oJycpICsgJzwvZm9ybT4nKVxyXG4gICAgICAgICAgICAuYXBwZW5kVG8oJ2JvZHknKS5zdWJtaXQoKS5yZW1vdmUoKTtcclxuICAgICAgICAkKGRvY3VtZW50KS5vbignc3VibWl0JywgZmFsc2UpO1xyXG4gICAgfVxyXG59O1xyXG5cclxudXRpbHMuYmFzZTY0VG9CbG9iID0gZnVuY3Rpb24oYmFzZTY0RGF0YSwgY29udGVudFR5cGUpIHtcclxuICAgIGNvbnRlbnRUeXBlID0gY29udGVudFR5cGUgfHwgJyc7XHJcbiAgICB2YXIgc2xpY2VTaXplID0gMTAyNDtcclxuICAgIHZhciBieXRlQ2hhcmFjdGVycyA9IGF0b2IoYmFzZTY0RGF0YSk7XHJcbiAgICB2YXIgYnl0ZXNMZW5ndGggPSBieXRlQ2hhcmFjdGVycy5sZW5ndGg7XHJcbiAgICB2YXIgc2xpY2VzQ291bnQgPSBNYXRoLmNlaWwoYnl0ZXNMZW5ndGggLyBzbGljZVNpemUpO1xyXG4gICAgdmFyIGJ5dGVBcnJheXMgPSBuZXcgQXJyYXkoc2xpY2VzQ291bnQpO1xyXG5cclxuICAgIGZvciAodmFyIHNsaWNlSW5kZXggPSAwOyBzbGljZUluZGV4IDwgc2xpY2VzQ291bnQ7ICsrc2xpY2VJbmRleCkge1xyXG4gICAgICAgIHZhciBiZWdpbiA9IHNsaWNlSW5kZXggKiBzbGljZVNpemU7XHJcbiAgICAgICAgdmFyIGVuZCA9IE1hdGgubWluKGJlZ2luICsgc2xpY2VTaXplLCBieXRlc0xlbmd0aCk7XHJcblxyXG4gICAgICAgIHZhciBieXRlcyA9IG5ldyBBcnJheShlbmQgLSBiZWdpbik7XHJcbiAgICAgICAgZm9yICh2YXIgb2Zmc2V0ID0gYmVnaW4sIGkgPSAwIDsgb2Zmc2V0IDwgZW5kOyArK2ksICsrb2Zmc2V0KSB7XHJcbiAgICAgICAgICAgIGJ5dGVzW2ldID0gYnl0ZUNoYXJhY3RlcnNbb2Zmc2V0XS5jaGFyQ29kZUF0KDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBieXRlQXJyYXlzW3NsaWNlSW5kZXhdID0gbmV3IFVpbnQ4QXJyYXkoYnl0ZXMpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5ldyBCbG9iKGJ5dGVBcnJheXMsIHsgdHlwZTogY29udGVudFR5cGUgfSk7XHJcbn07XHJcblxyXG4iLCIvLyBhbmd1bGFyLm1vZHVsZSgnaHR0cFNlcnZpY2UnLCBbXSkuXHJcbi8vICAgICBzZXJ2aWNlKCdtb2NrU2VydmljZScsIFsnJHEnLCAnJHRpbWVvdXQnLCAnJGh0dHAnLCAnJHN0YXRlJyxcclxuLy8gICAgICAgICBmdW5jdGlvbiAoJHEsICR0aW1lb3V0LCAkaHR0cCwgJHN0YXRlKSB7XHJcbi8vICAgICAgICAgICAgIHRoaXMuZ2V0ID0gZnVuY3Rpb24gKHVybCwgcGFyYW1zKSB7XHJcbi8vICAgICAgICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xyXG4vLyAgICAgICAgICAgICAgICAgdXJsID0gXCIvbW9ja19kYXRhL1wiICsgdXJsICsgXCIuanNvblwiO1xyXG4vLyAgICAgICAgICAgICAgICAgLy92aWV3LmxvYWRpbmcoKTtcclxuLy8gICAgICAgICAgICAgICAgICRodHRwLmdldCh1cmwpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIHZhciBkID0gcmVzdWx0LmRhdGE7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgaWYgKGQuc3RhdHVzID09IDApIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShkLmRhdGEpO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoZC5zdGF0dXMpIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdmlldy5hbGVydChyZXN1bHQubXNnKTtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyRzdGF0ZS5nbyhcImxvZ2luXCIpO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdChkKTtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uICh4KSB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgLy92aWV3LmNsb3NlX2xvYWRpbmcoKTtcclxuLy8gICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoVChcIm1zZy5zeXN0ZW1fZXJyb3JcIikpO1xyXG4vLyAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4vLyAgICAgICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcbi8vICAgICAgICAgICAgIH07XHJcbi8vICAgICAgICAgfV0pO1xyXG5cclxuXHJcbmFuZ3VsYXIubW9kdWxlKCdodHRwU2VydmljZScsIFtdKS5cclxuICAgIHNlcnZpY2UoJ2RhdGFTZXJ2aWNlJywgWyckaHR0cCcsICdjb25maWcnLFxyXG4gICAgICAgIGZ1bmN0aW9uICgkaHR0cCwgY29uZmlnKSB7XHJcbiAgICAgICAgICAgIHZhciBob3N0ID0gY29uZmlnLmhvc3Q7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLy9yZXF1ZXN0XHJcbiAgICAgICAgICAgICAgICBnZXRSZXF1ZXN0UmVwb3J0QnlJZDogZnVuY3Rpb24gKGlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHVybCA9IGhvc3QgKyAnL2FwaS9saXMvcmVxdWVzdHMvcmVwb3J0cz9pZD0nO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAkaHR0cC5nZXQodXJsICsgaWQpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGdldFJlcXVlc3RCeUlkOiBmdW5jdGlvbiAoaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdXJsID0gaG9zdCArICcvYXBpL2xpcy9yZXF1ZXN0ZGV0YWlsP2lkPSc7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICRodHRwLmdldCh1cmwgKyBpZCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZ2V0UmVxdWVzdExpc3Q6IGZ1bmN0aW9uIChxdWVyeSwgZnJvbSwgdG8pIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdXJsID0gaG9zdCArICcvYXBpL2xpcy9yZXF1ZXN0cyc7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsICs9ICc/c2VhcmNoPScgKyAocXVlcnkgPyBxdWVyeSA6ICcnKTtcclxuICAgICAgICAgICAgICAgICAgICB1cmwgKz0gJyZmcm9tPScgKyAoZnJvbSA/IGZyb20gOiAnJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsICs9ICcmdG89JyArICh0byA/IHRvIDogJycpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAkaHR0cC5nZXQodXJsKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBhY2NlcHRSZXF1ZXN0OiBmdW5jdGlvbiAob2JqKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHVybCA9IGhvc3QgKyAnL2FwaS9saXMvcmVxdWVzdGFjY2VwdCc7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICRodHRwLnBvc3QodXJsLCBvYmopO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHJlamVjdFJlcWV1c3Q6IGZ1bmN0aW9uIChvYmopIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdXJsID0gaG9zdCArICcvYXBpL2xpcy9yZXF1ZXN0cmVmdXNlJztcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJGh0dHAucG9zdCh1cmwsIG9iaik7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgLy9sYWIgaXRlbVxyXG4gICAgICAgICAgICAgICAgZ2V0TGFiSXRlbUJ5SWQ6IGZ1bmN0aW9uIChpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB1cmwgPSBob3N0ICsgJy9hcGkvc3lzdGVtL2xhYml0ZW1kZXRhaWw/aWQ9JztcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJGh0dHAuZ2V0KHVybCArIGlkKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBnZXRsYWJpdGVtTGlzdDogZnVuY3Rpb24gKHF1ZXJ5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHVybCA9IGhvc3QgKyAnL2FwaS9zeXN0ZW0vbGFiaXRlbXM/c2VhcmNoPSc7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICRodHRwLmdldCh1cmwgKyAocXVlcnkgPyBxdWVyeSA6ICcnKSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgc2F2ZUxhYml0ZW06IGZ1bmN0aW9uIChtb2RlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB1cmwgPSBob3N0ICsgJy9hcGkvc3lzdGVtL2xhYml0ZW1zJztcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJGh0dHAucG9zdCh1cmwsIG1vZGVsKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBkZWxldGVMYWJJdGVtOiBmdW5jdGlvbiAob2JqKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHVybCA9IGhvc3QgKyAnL2FwaS9zeXN0ZW0vbGFiaXRlbXMnO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAkaHR0cC5kZWxldGUodXJsLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaGVhZGVyc1wiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IG9ialxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIC8vbGFiIGl0ZW0gc2V0XHJcbiAgICAgICAgICAgICAgICBnZXRMYWJJdGVtU2V0QnlJZDogZnVuY3Rpb24gKGlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHVybCA9IGhvc3QgKyAnL2FwaS9zeXN0ZW0vbGFiaXRlbXNldGRldGFpbD9pZD0nO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAkaHR0cC5nZXQodXJsICsgaWQpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGdldExhYkl0ZW1TZXRMaXN0OiBmdW5jdGlvbiAocXVlcnkpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdXJsID0gaG9zdCArICcvYXBpL3N5c3RlbS9sYWJpdGVtc2V0cz9zZWFyY2g9JztcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJGh0dHAuZ2V0KHVybCArIChxdWVyeSA/IHF1ZXJ5IDogJycpKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBzYXZlTGFiSXRlbVNldDogZnVuY3Rpb24gKG1vZGVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHVybCA9IGhvc3QgKyAnL2FwaS9zeXN0ZW0vbGFiaXRlbXNldHMnO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAkaHR0cC5wb3N0KHVybCwgbW9kZWwpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGRlbGV0ZUxhYkl0ZW1TZXQ6IGZ1bmN0aW9uIChvYmopIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdXJsID0gaG9zdCArICcvYXBpL3N5c3RlbS9sYWJpdGVtc2V0cyc7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICRodHRwLmRlbGV0ZSh1cmwsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJoZWFkZXJzXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogb2JqXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgLy9sYWIgY2F0ZWdvcnlcclxuICAgICAgICAgICAgICAgIGdldExhYkNhdGVnb3J5QnlJZDogZnVuY3Rpb24gKGlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHVybCA9IGhvc3QgKyAnL2FwaS9zeXN0ZW0vbGFiY2F0ZWdvcnlkZXRhaWw/aWQ9JztcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJGh0dHAuZ2V0KHVybCArIGlkKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBnZXRMYWJDYXRlZ29yeUxpc3Q6IGZ1bmN0aW9uIChxdWVyeSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB1cmwgPSBob3N0ICsgJy9hcGkvc3lzdGVtL2xhYmNhdGVnb3JpZXM/c2VhcmNoPSc7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICRodHRwLmdldCh1cmwgKyAocXVlcnkgPyBxdWVyeSA6ICcnKSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgc2F2ZUxhYkNhdGVnb3J5OiBmdW5jdGlvbiAobW9kZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdXJsID0gaG9zdCArICcvYXBpL3N5c3RlbS9sYWJjYXRlZ29yaWVzJztcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJGh0dHAucG9zdCh1cmwsIG1vZGVsKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBkZWxldGVMYWJDYXRlZ29yeTogZnVuY3Rpb24gKG9iaikge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB1cmwgPSBob3N0ICsgJy9hcGkvc3lzdGVtL2xhYmNhdGVnb3JpZXMnO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAkaHR0cC5kZWxldGUodXJsLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaGVhZGVyc1wiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IG9ialxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIC8vcWMgdmFsdWVcclxuICAgICAgICAgICAgICAgIGdldFFDVmFsdWVCeUlkOiBmdW5jdGlvbiAoaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdXJsID0gaG9zdCArICcvYXBpL3N5c3RlbS9xY3ZhbHVlZGV0YWlsP2lkPSc7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICRodHRwLmdldCh1cmwgKyBpZCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZ2V0UUNWYWx1ZUxpc3Q6IGZ1bmN0aW9uIChxdWVyeSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB1cmwgPSBob3N0ICsgJy9hcGkvc3lzdGVtL3FjdmFsdWVzP3NlYXJjaD0nO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAkaHR0cC5nZXQodXJsICsgKHF1ZXJ5ID8gcXVlcnkgOiAnJykpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHNhdmVRQ1ZhbHVlOiBmdW5jdGlvbiAobW9kZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdXJsID0gaG9zdCArICcvYXBpL3N5c3RlbS9xY3ZhbHVlcyc7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICRodHRwLnBvc3QodXJsLCBtb2RlbCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZGVsZXRlUUNWYWx1ZTogZnVuY3Rpb24gKG9iaikge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB1cmwgPSBob3N0ICsgJy9hcGkvc3lzdGVtL3FjdmFsdWVzJztcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJGh0dHAuZGVsZXRlKHVybCwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImhlYWRlcnNcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBvYmpcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAvL3NhbXBsZSB0eXBlXHJcbiAgICAgICAgICAgICAgICBnZXRTYW1wbGVUeXBlQnlJZDogZnVuY3Rpb24gKGlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHVybCA9IGhvc3QgKyAnL2FwaS9zeXN0ZW0vc2FtcGxldHlwZWRldGFpbD9pZD0nO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAkaHR0cC5nZXQodXJsICsgaWQpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGdldFNhbXBsZVR5cGVMaXN0OiBmdW5jdGlvbiAocXVlcnkpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdXJsID0gaG9zdCArICcvYXBpL3N5c3RlbS9zYW1wbGV0eXBlcz9zZWFyY2g9JztcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJGh0dHAuZ2V0KHVybCArIChxdWVyeSA/IHF1ZXJ5IDogJycpKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBzYXZlU2FtcGxlVHlwZTogZnVuY3Rpb24gKG1vZGVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHVybCA9IGhvc3QgKyAnL2FwaS9zeXN0ZW0vc2FtcGxldHlwZXMnO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAkaHR0cC5wb3N0KHVybCwgbW9kZWwpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGRlbGV0ZVNhbXBsZVR5cGU6IGZ1bmN0aW9uIChvYmopIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdXJsID0gaG9zdCArICcvYXBpL3N5c3RlbS9zYW1wbGV0eXBlcyc7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICRodHRwLmRlbGV0ZSh1cmwsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJoZWFkZXJzXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogb2JqXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgLy9jcmlzaXNcclxuICAgICAgICAgICAgICAgIGdldENyaXNpc0J5SWQ6IGZ1bmN0aW9uIChpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB1cmwgPSBob3N0ICsgJy9hcGkvc3lzdGVtL2NyaXNpc2RldGFpbD9pZD0nO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAkaHR0cC5nZXQodXJsICsgaWQpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGdldENyaXNpc0xpc3Q6IGZ1bmN0aW9uIChxdWVyeSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB1cmwgPSBob3N0ICsgJy9hcGkvc3lzdGVtL2NyaXNpcz9zZWFyY2g9JztcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJGh0dHAuZ2V0KHVybCArIChxdWVyeSA/IHF1ZXJ5IDogJycpKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBzYXZlQ3Jpc2lzOiBmdW5jdGlvbiAobW9kZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdXJsID0gaG9zdCArICcvYXBpL3N5c3RlbS9jcmlzaXMnO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAkaHR0cC5wb3N0KHVybCwgbW9kZWwpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGRlbGV0ZUNyaXNpczogZnVuY3Rpb24gKG9iaikge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB1cmwgPSBob3N0ICsgJy9hcGkvc3lzdGVtL2NyaXNpcyc7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICRodHRwLmRlbGV0ZSh1cmwsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJoZWFkZXJzXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogb2JqXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgLy91c2VyXHJcbiAgICAgICAgICAgICAgICBnZXRFbXBsb3llZUJ5SWQ6IGZ1bmN0aW9uIChpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB1cmwgPSBob3N0ICsgJy9hcGkvc3lzdGVtL3VzZXJkZXRhaWw/aWQ9JztcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJGh0dHAuZ2V0KHVybCArIGlkKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBzYXZlRW1wbG95ZWU6IGZ1bmN0aW9uIChtb2RlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB1cmwgPSBob3N0ICsgJy9hcGkvc3lzdGVtL3VzZXJzJztcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJGh0dHAucG9zdCh1cmwsIG1vZGVsKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBnZXRFbXBsb3llZUxpc3Q6IGZ1bmN0aW9uIChxdWVyeSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB1cmwgPSBob3N0ICsgJy9hcGkvc3lzdGVtL3VzZXJzP3NlYXJjaD0nO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAkaHR0cC5nZXQodXJsICsgKHF1ZXJ5ID8gcXVlcnkgOiAnJykpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGRlbGV0ZUVtcGxveWVlOiBmdW5jdGlvbiAob2JqKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHVybCA9IGhvc3QgKyAnL2FwaS9zeXN0ZW0vdXNlcnMnO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAkaHR0cC5kZWxldGUodXJsLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaGVhZGVyc1wiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IG9ialxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIC8vbWVkaWNhbFxyXG4gICAgICAgICAgICAgICAgZ2V0U2l0ZUxpc3Q6IGZ1bmN0aW9uIChxdWVyeSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB1cmwgPSBob3N0ICsgJy9hcGkvc3lzdGVtL21lZGljYWxpbnN0aXR1dGlvbnM/c2VhcmNoPSc7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICRodHRwLmdldCh1cmwgKyAocXVlcnkgPyBxdWVyeSA6ICcnKSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgc2F2ZVNpdGU6IGZ1bmN0aW9uIChtb2RlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB1cmwgPSBob3N0ICsgJy9hcGkvc3lzdGVtL21lZGljYWxpbnN0aXR1dGlvbnMnO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAkaHR0cC5wb3N0KHVybCwgbW9kZWwpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGdldFNpdGVCeUlkOiBmdW5jdGlvbiAoaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdXJsID0gaG9zdCArICcvYXBpL3N5c3RlbS9tZWRpY2FsaW5zdGl0dXRpb25kZXRhaWw/aWQ9JztcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJGh0dHAuZ2V0KHVybCArIGlkKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBkZWxldGVTaXRlOiBmdW5jdGlvbiAoZW50aXR5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHVybCA9IGhvc3QgKyAnL2FwaS9zeXN0ZW0vbWVkaWNhbGluc3RpdHV0aW9ucyc7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICRodHRwLmRlbGV0ZSh1cmwsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJoZWFkZXJzXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogZW50aXR5XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgLy8gZGVwYXJ0bWVudFxyXG4gICAgICAgICAgICAgICAgZ2V0RGVwdEJ5SWQ6IGZ1bmN0aW9uIChpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB1cmwgPSBob3N0ICsgJy9hcGkvc3lzdGVtL2RlcHRkZXRhaWw/aWQ9JztcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJGh0dHAuZ2V0KHVybCArIGlkKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBnZXREZXB0TGlzdDogZnVuY3Rpb24gKHF1ZXJ5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHVybCA9IGhvc3QgKyAnL2FwaS9zeXN0ZW0vZGVwdHM/c2VhcmNoPSc7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICRodHRwLmdldCh1cmwgKyAocXVlcnkgPyBxdWVyeSA6ICcnKSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZGVsZXRlRGVwdDogZnVuY3Rpb24gKGVudGl0eSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB1cmwgPSBob3N0ICsgJy9hcGkvc3lzdGVtL2RlcHRzJztcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJGh0dHAuZGVsZXRlKHVybCwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImhlYWRlcnNcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBlbnRpdHlcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBzYXZlRGVwdDogZnVuY3Rpb24gKG1vZGVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHVybCA9IGhvc3QgKyAnL2FwaS9zeXN0ZW0vZGVwdHMnO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAkaHR0cC5wb3N0KHVybCwgbW9kZWwpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIC8vbG9naXN0aWNzXHJcbiAgICAgICAgICAgICAgICBnZXRMb2dpTGlzdDogZnVuY3Rpb24gKGZyb20sIHRvKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHVybCA9IGhvc3QgKyAnL2FwaS9saXMvbG9naXN0aWNzJztcclxuICAgICAgICAgICAgICAgICAgICB1cmwgKz0gJz9mcm9tPScgKyAoZnJvbSA/IGZyb20gOiAnJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsICs9ICcmdG89JyArICh0byA/IHRvIDogJycpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAkaHR0cC5nZXQodXJsKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBhY2NlcHRMb2dpOiBmdW5jdGlvbiAobW9kZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdXJsID0gaG9zdCArICcvYXBpL2xpcy9sb2dpc3RpY3MnO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAkaHR0cC5wb3N0KHVybCwgbW9kZWwpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIC8vbGFicmVzdWx0XHJcbiAgICAgICAgICAgICAgICBzYXZlTGFiUmVzdWx0OiBmdW5jdGlvbiAobW9kZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdXJsID0gaG9zdCArICcvYXBpL3N5c3RlbS9sYWJyZXN1bHRzJztcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJGh0dHAucG9zdCh1cmwsIG1vZGVsKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAvL290aGVyXHJcbiAgICAgICAgICAgICAgICBnZXRTZXhMaXN0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHVybCA9IGhvc3QgKyAnL2FwcC9tb2NrX2RhdGEvc2V4X2xpc3QuanNvbic7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICRodHRwLmdldCh1cmwpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGdldEVudW06IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdXJsID0gaG9zdCArICcvYXBwL2NvbmZpZy9lbnVtLmpzJztcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJGh0dHAuZ2V0KHVybCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZGVsZXRlUGF0aWVudDogZnVuY3Rpb24gKGlkKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGdldFNhbXBsZUxpc3Q6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdXJsID0gaG9zdCArICcvbW9ja19kYXRhL3NhbXBsZV9saXN0Lmpzb24nO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAkaHR0cC5nZXQodXJsKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBzYXZlUGF0aWVudDogZnVuY3Rpb24gKG1vZGVsKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGdldFBhdGllbnRMaXN0OiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XSk7IiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuLyoqXHJcbiAqIDAuMS4xXHJcbiAqIERlZmVycmVkIGxvYWQganMvY3NzIGZpbGUsIHVzZWQgZm9yIHVpLWpxLmpzIGFuZCBMYXp5IExvYWRpbmcuXHJcbiAqIFxyXG4gKiBAIGZsYXRmdWxsLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKiBBdXRob3IgdXJsOiAjdXNlci9mbGF0ZnVsbFxyXG4gKi9cclxuXHJcbmFuZ3VsYXIubW9kdWxlKCd1aS5sb2FkJywgW10pXHJcblx0LnNlcnZpY2UoJ3VpTG9hZCcsIFsnJGRvY3VtZW50JywgJyRxJywgJyR0aW1lb3V0JywgZnVuY3Rpb24gKCRkb2N1bWVudCwgJHEsICR0aW1lb3V0KSB7XHJcblxyXG5cdFx0dmFyIGxvYWRlZCA9IFtdO1xyXG5cdFx0dmFyIHByb21pc2UgPSBmYWxzZTtcclxuXHRcdHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBDaGFpbiBsb2FkcyB0aGUgZ2l2ZW4gc291cmNlc1xyXG5cdFx0ICogQHBhcmFtIHNyY3MgYXJyYXksIHNjcmlwdCBvciBjc3NcclxuXHRcdCAqIEByZXR1cm5zIHsqfSBQcm9taXNlIHRoYXQgd2lsbCBiZSByZXNvbHZlZCBvbmNlIHRoZSBzb3VyY2VzIGhhcyBiZWVuIGxvYWRlZC5cclxuXHRcdCAqL1xyXG5cdFx0dGhpcy5sb2FkID0gZnVuY3Rpb24gKHNyY3MpIHtcclxuXHRcdFx0c3JjcyA9IGFuZ3VsYXIuaXNBcnJheShzcmNzKSA/IHNyY3MgOiBzcmNzLnNwbGl0KC9cXHMrLyk7XHJcblx0XHRcdHZhciBzZWxmID0gdGhpcztcclxuXHRcdFx0aWYoIXByb21pc2Upe1xyXG5cdFx0XHRcdHByb21pc2UgPSBkZWZlcnJlZC5wcm9taXNlO1xyXG5cdFx0XHR9XHJcbiAgICAgIGFuZ3VsYXIuZm9yRWFjaChzcmNzLCBmdW5jdGlvbihzcmMpIHtcclxuICAgICAgXHRwcm9taXNlID0gcHJvbWlzZS50aGVuKCBmdW5jdGlvbigpe1xyXG4gICAgICBcdFx0cmV0dXJuIHNyYy5pbmRleE9mKCcuY3NzJykgPj0wID8gc2VsZi5sb2FkQ1NTKHNyYykgOiBzZWxmLmxvYWRTY3JpcHQoc3JjKTtcclxuICAgICAgXHR9ICk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBkZWZlcnJlZC5yZXNvbHZlKCk7XHJcbiAgICAgIHJldHVybiBwcm9taXNlO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogRHluYW1pY2FsbHkgbG9hZHMgdGhlIGdpdmVuIHNjcmlwdFxyXG5cdFx0ICogQHBhcmFtIHNyYyBUaGUgdXJsIG9mIHRoZSBzY3JpcHQgdG8gbG9hZCBkeW5hbWljYWxseVxyXG5cdFx0ICogQHJldHVybnMgeyp9IFByb21pc2UgdGhhdCB3aWxsIGJlIHJlc29sdmVkIG9uY2UgdGhlIHNjcmlwdCBoYXMgYmVlbiBsb2FkZWQuXHJcblx0XHQgKi9cclxuXHRcdHRoaXMubG9hZFNjcmlwdCA9IGZ1bmN0aW9uIChzcmMpIHtcclxuXHRcdFx0aWYobG9hZGVkW3NyY10pIHJldHVybiBsb2FkZWRbc3JjXS5wcm9taXNlO1xyXG5cclxuXHRcdFx0dmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcclxuXHRcdFx0dmFyIHNjcmlwdCA9ICRkb2N1bWVudFswXS5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcclxuXHRcdFx0c2NyaXB0LnNyYyA9IHNyYztcclxuXHRcdFx0c2NyaXB0Lm9ubG9hZCA9IGZ1bmN0aW9uIChlKSB7XHJcblx0XHRcdFx0JHRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdFx0ZGVmZXJyZWQucmVzb2x2ZShlKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fTtcclxuXHRcdFx0c2NyaXB0Lm9uZXJyb3IgPSBmdW5jdGlvbiAoZSkge1xyXG5cdFx0XHRcdCR0aW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRcdGRlZmVycmVkLnJlamVjdChlKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fTtcclxuXHRcdFx0JGRvY3VtZW50WzBdLmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcclxuXHRcdFx0bG9hZGVkW3NyY10gPSBkZWZlcnJlZDtcclxuXHJcblx0XHRcdHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG5cdFx0fTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIER5bmFtaWNhbGx5IGxvYWRzIHRoZSBnaXZlbiBDU1MgZmlsZVxyXG5cdFx0ICogQHBhcmFtIGhyZWYgVGhlIHVybCBvZiB0aGUgQ1NTIHRvIGxvYWQgZHluYW1pY2FsbHlcclxuXHRcdCAqIEByZXR1cm5zIHsqfSBQcm9taXNlIHRoYXQgd2lsbCBiZSByZXNvbHZlZCBvbmNlIHRoZSBDU1MgZmlsZSBoYXMgYmVlbiBsb2FkZWQuXHJcblx0XHQgKi9cclxuXHRcdHRoaXMubG9hZENTUyA9IGZ1bmN0aW9uIChocmVmKSB7XHJcblx0XHRcdGlmKGxvYWRlZFtocmVmXSkgcmV0dXJuIGxvYWRlZFtocmVmXS5wcm9taXNlO1xyXG5cclxuXHRcdFx0dmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcclxuXHRcdFx0dmFyIHN0eWxlID0gJGRvY3VtZW50WzBdLmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcclxuXHRcdFx0c3R5bGUucmVsID0gJ3N0eWxlc2hlZXQnO1xyXG5cdFx0XHRzdHlsZS50eXBlID0gJ3RleHQvY3NzJztcclxuXHRcdFx0c3R5bGUuaHJlZiA9IGhyZWY7XHJcblx0XHRcdHN0eWxlLm9ubG9hZCA9IGZ1bmN0aW9uIChlKSB7XHJcblx0XHRcdFx0JHRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdFx0ZGVmZXJyZWQucmVzb2x2ZShlKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fTtcclxuXHRcdFx0c3R5bGUub25lcnJvciA9IGZ1bmN0aW9uIChlKSB7XHJcblx0XHRcdFx0JHRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdFx0ZGVmZXJyZWQucmVqZWN0KGUpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9O1xyXG5cdFx0XHQkZG9jdW1lbnRbMF0uaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XHJcblx0XHRcdGxvYWRlZFtocmVmXSA9IGRlZmVycmVkO1xyXG5cclxuXHRcdFx0cmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcblx0XHR9O1xyXG59XSk7IiwiYW5ndWxhci5tb2R1bGUoJ2NvbW1vblNlcnZpY2UnKS5cclxuICAgIHNlcnZpY2UoJ3V0aWwnLCBbJ2VudW1TZXJ2aWNlJywgZnVuY3Rpb24gKGVudW1TZXJiaWNlKSB7XHJcbiAgICAgICAgdmFyIGVudW1NYXAgPSBlbnVtU2VyYmljZTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBmb3JtYXRlRGF0ZTogZnVuY3Rpb24gKGRhdGUpIHtcclxuICAgICAgICAgICAgICAgIHZhciBkID0gbmV3IERhdGUoZGF0ZSksXHJcbiAgICAgICAgICAgICAgICAgICAgbW9udGggPSAnJyArIChkLmdldE1vbnRoKCkgKyAxKSxcclxuICAgICAgICAgICAgICAgICAgICBkYXkgPSAnJyArIGQuZ2V0RGF0ZSgpLFxyXG4gICAgICAgICAgICAgICAgICAgIHllYXIgPSBkLmdldEZ1bGxZZWFyKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKG1vbnRoLmxlbmd0aCA8IDIpIG1vbnRoID0gJzAnICsgbW9udGg7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF5Lmxlbmd0aCA8IDIpIGRheSA9ICcwJyArIGRheTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gW3llYXIsIG1vbnRoLCBkYXldLmpvaW4oJy0nKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZ2V0UmVxdWVzdFN0YXR1czogZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZW51bU1hcFsncmVxdWVzdF9zdCddW3ZhbHVlXTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZ2V0TG9naXN0aWNzU3RhdHVzOiBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBlbnVtTWFwWydsb2dpc3RpY3Nfc3QnXVt2YWx1ZV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfV0pOyIsImFuZ3VsYXIubW9kdWxlKCd1aURpcmVjdCcpXHJcbiAgICAuZGlyZWN0aXZlKCd1aUlucHV0JywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHJlc3RyaWN0OiAnRScsXHJcbiAgICAgICAgICAgIHNjb3BlOiB7XHJcbiAgICAgICAgICAgICAgICB2YWw6ICc9J1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICByZXBsYWNlOiB0cnVlLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9kaXJlY3RpdmVzL3dpZGdldC9pbnB1dC9pbnB1dC5odG1sJyxcclxuICAgICAgICAgICAgbGluazpmdW5jdGlvbigkc2NvcGUsIGVsZW0sIGF0dHIsIGN0cmwpe1xyXG5cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29udHJvbGxlcjogZnVuY3Rpb24gKCRzY29wZSwgJGVsZW1lbnQsICRhdHRycykge1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9KTtcclxuXHJcbiJdfQ==
