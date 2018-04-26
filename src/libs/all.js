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

                $urlRouterProvider.otherwise('/app/crisis');

                $stateProvider
                    .state('app', {
                        abstract: true,
                        url: '/app',
                        templateUrl: 'tpl/app.html'
                    })
                    .state('app.home', {
                        url: '/home',
                        templateUrl: 'tpl/home.html'
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
            }
        ]
    );
'use strict';

/* Controllers */

angular.module('app')
  .controller('AppCtrl', ['$scope', '$translate', '$localStorage', '$window', 
    function(              $scope,   $translate,   $localStorage,   $window ) {
      // add 'ie' classes to html
      var isIE = !!navigator.userAgent.match(/MSIE/i);
      isIE && angular.element($window.document.body).addClass('ie');
      isSmartDevice( $window ) && angular.element($window.document.body).addClass('smart');

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
      $scope.$watch('app.settings', function(){
        if( $scope.app.settings.asideDock  &&  $scope.app.settings.asideFixed ){
          // aside dock and fixed must set the header fixed.
          $scope.app.settings.headerFixed = true;
        }
        // save to local storage
        $localStorage.settings = $scope.app.settings;
      }, true);

      function isSmartDevice( $window )
      {
          // Adapted from http://www.detectmobilebrowsers.com
          var ua = $window['navigator']['userAgent'] || $window['navigator']['vendor'] || $window['opera'];
          // Checks for iOs, Android, Blackberry, Opera Mini, and Windows mobile devices
          return (/iPhone|iPod|iPad|Silk|Android|BlackBerry|Opera Mini|IEMobile/).test(ua);
      }

      $scope.$on('$stateChangeStart',function(event, toState, toParams, fromState, fromParams){

      });
  }]);
app.controller('CrisisListCtrl', ['$scope', '$state', 'dataService', function ($scope, $state, dataService) {
    // var editTpl = '<button id="editBtn" type="button" class="btn-small" ng-click="grid.appScope.go(row.entity)" >Edit</button>';
    // $scope.go = function (rowData) {
    //     $state.go('app.crisis_detail', { id: rowData.id });
    // }

    var editUrl = '<a class="editTpl" ui-sref="app.crisis_detail({id: row.entity.id})">编辑</a>'

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
        $state.go('app.crisis_detail');
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

app.controller('CrisisDetailCtrl', ['$scope', '$state', '$stateParams', 'dataService', function ($scope, $state, $stateParams, dataService) {
    //console.log($stateParams);
    $scope.model = {
        selectedlabItem: null,
        normalUp: null
    };
    dataService.getlabitemList().then(function (result) {
        $scope.itemList = result.data;
    });

    $scope.submit = function () {
        console.log($scope.model);
    };

}]);
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

    dataService.getMildList().then(function (result) {
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

app.controller('DepartDetailCtrl', ['$scope', '$state', '$stateParams', 'dataService', function ($scope, $state, $stateParams, dataService) {
    //console.log($stateParams);
    $scope.model = {
        selectedlabItem: null,
        normalUp: null
    };
    dataService.getlabitemList().then(function (result) {
        $scope.itemList = result.data;
    });

    $scope.submit = function () {
        console.log($scope.model);
    };

}]);
app.controller('RequestListCtrl', ['$scope', '$state', 'dataService', function ($scope, $state, dataService) {


   var editTpl = '<div><button class="btn grid-btn btn-success" ng-click="grid.appScope.accept(row.entity)">接受</button><button class="btn grid-btn left-space btn-danger" ng-click="grid.appScope.reject(row.entity)">拒绝</button></div>';
   
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
                field: 'requestNo',
                displayName: 'requestNo'
            },
            {
                field: 'reStatus',
                displayName: 'reStatus'
            },
            {
                name: 'edit',
                displayName: '操作',
                cellTemplate: editTpl
            }
        ]
    };

    dataService.getRequestList().then(function (result) {
        $scope.gridOptions.data = result.data;
    });

    $scope.search = function () {
        $scope.gridApi.grid.refresh();
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
        scope.$watch(model, function(value) {
          if(value === true) {
            $timeout(function() {
              element[0].focus();
            });
          }
        });
        element.bind('blur', function() {
           scope.$apply(model.assign(scope, false));
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
            return {
                getlabitemList: function () {
                    var url='/mock_data/list.json';
                    return $http.get(url);
                },
                getCrisisList: function () {
                    var url='/mock_data/list.json';
                    return $http.get(url);
                },
                getCrisisDetailById: function () {

                },
                getMildList: function () {
                    var url='/mock_data/list.json';
                    return $http.get(url);
                },
                getRequestList:function(){
                    var url='/mock_data/request_list.json';
                    return $http.get(url);
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


//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsImNvbmZpZy5qcyIsImNvbmZpZy5sYXp5bG9hZC5qcyIsImNvbmZpZy5yb3V0ZXIuanMiLCJtYWluLmpzIiwiY29udHJvbGxlcnMvY3Jpc2lzQ3RybC5qcyIsImNvbnRyb2xsZXJzL2RlcGF0Q3RybC5qcyIsImNvbnRyb2xsZXJzL3JlcXVlc3RDdHJsLmpzIiwiZGlyZWN0aXZlcy9zZXRuZ2FuaW1hdGUuanMiLCJkaXJlY3RpdmVzL3VpLWJ1dHRlcmJhci5qcyIsImRpcmVjdGl2ZXMvdWktZm9jdXMuanMiLCJkaXJlY3RpdmVzL3VpLWZ1bGxzY3JlZW4uanMiLCJkaXJlY3RpdmVzL3VpLWpxLmpzIiwiZGlyZWN0aXZlcy91aS1tb2R1bGUuanMiLCJkaXJlY3RpdmVzL3VpLW5hdi5qcyIsImRpcmVjdGl2ZXMvdWktc2Nyb2xsLmpzIiwiZGlyZWN0aXZlcy91aS1zaGlmdC5qcyIsImRpcmVjdGl2ZXMvdWktdG9nZ2xlY2xhc3MuanMiLCJkaXJlY3RpdmVzL3VpLXZhbGlkYXRlLmpzIiwic2VydmljZXMvZ2xvYmFsLmpzIiwic2VydmljZXMvaHR0cFNlcnZpY2UuanMiLCJzZXJ2aWNlcy91aS1sb2FkLmpzIiwiZGlyZWN0aXZlcy93aWRnZXQvaW5wdXQvaW5wdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNsRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDckRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3JFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDaEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDckZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNwRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDekNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdkhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzVSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNyREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDNUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFsbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcblxyXG5hbmd1bGFyLm1vZHVsZSgnYXBwJywgW1xyXG4gICAgJ25nQW5pbWF0ZScsXHJcbiAgICAnbmdDb29raWVzJyxcclxuICAgICduZ1Jlc291cmNlJyxcclxuICAgICduZ1Nhbml0aXplJyxcclxuICAgICduZ1RvdWNoJyxcclxuICAgICduZ1N0b3JhZ2UnLFxyXG4gICAgJ3VpLnJvdXRlcicsXHJcbiAgICAndWkuYm9vdHN0cmFwJyxcclxuICAgICd1aS5sb2FkJyxcclxuICAgICd1aS5qcScsXHJcbiAgICAndWkudmFsaWRhdGUnLFxyXG4gICAgJ29jLmxhenlMb2FkJyxcclxuICAgICdwYXNjYWxwcmVjaHQudHJhbnNsYXRlJyxcclxuICAgICd0b2FzdGVyJyxcclxuICAgICd1aS5ncmlkJyxcclxuICAgICd1aS5ncmlkLmVkaXQnLFxyXG4gICAgJ3VpLmdyaWQuc2VsZWN0aW9uJyxcclxuICAgICd1aS5zZWxlY3QnLFxyXG4gICAgLy9jdXN0b21cclxuICAgICdodHRwU2VydmljZScsXHJcbiAgICAndWlEaXJlY3QnXHJcbl0pO1xyXG5cclxuYW5ndWxhci5tb2R1bGUoJ3VpRGlyZWN0JyxbXSk7XHJcbiIsIi8vIGNvbmZpZ1xuXG52YXIgYXBwID1cbiAgYW5ndWxhci5tb2R1bGUoJ2FwcCcpLmNvbmZpZyhcbiAgICBbJyRjb250cm9sbGVyUHJvdmlkZXInLCAnJGNvbXBpbGVQcm92aWRlcicsICckZmlsdGVyUHJvdmlkZXInLCAnJHByb3ZpZGUnLFxuICAgICAgZnVuY3Rpb24gKCRjb250cm9sbGVyUHJvdmlkZXIsICRjb21waWxlUHJvdmlkZXIsICRmaWx0ZXJQcm92aWRlciwgJHByb3ZpZGUpIHtcblxuICAgICAgICAvLyBsYXp5IGNvbnRyb2xsZXIsIGRpcmVjdGl2ZSBhbmQgc2VydmljZVxuICAgICAgICBhcHAuY29udHJvbGxlciA9ICRjb250cm9sbGVyUHJvdmlkZXIucmVnaXN0ZXI7XG4gICAgICAgIGFwcC5kaXJlY3RpdmUgPSAkY29tcGlsZVByb3ZpZGVyLmRpcmVjdGl2ZTtcbiAgICAgICAgYXBwLmZpbHRlciA9ICRmaWx0ZXJQcm92aWRlci5yZWdpc3RlcjtcbiAgICAgICAgYXBwLmZhY3RvcnkgPSAkcHJvdmlkZS5mYWN0b3J5O1xuICAgICAgICBhcHAuc2VydmljZSA9ICRwcm92aWRlLnNlcnZpY2U7XG4gICAgICAgIGFwcC5jb25zdGFudCA9ICRwcm92aWRlLmNvbnN0YW50O1xuICAgICAgICBhcHAudmFsdWUgPSAkcHJvdmlkZS52YWx1ZTtcbiAgICAgIH1cbiAgICBdKS5jb25maWcoWyckdHJhbnNsYXRlUHJvdmlkZXInLCBmdW5jdGlvbiAoJHRyYW5zbGF0ZVByb3ZpZGVyKSB7XG4gICAgICAkdHJhbnNsYXRlUHJvdmlkZXIudXNlU3RhdGljRmlsZXNMb2FkZXIoe1xuICAgICAgICBwcmVmaXg6ICdpMThuLycsXG4gICAgICAgIHN1ZmZpeDogJy5qc29uJ1xuICAgICAgfSk7XG4gICAgICAkdHJhbnNsYXRlUHJvdmlkZXIucHJlZmVycmVkTGFuZ3VhZ2UoJ3poX2NuJyk7XG4gICAgICAkdHJhbnNsYXRlUHJvdmlkZXIudXNlTG9jYWxTdG9yYWdlKCk7XG4gICAgfV0pO1xuXG4vLyDnv7vor5Hlv6vmjbfmlrnlvI9cbnZhciBUID0ge307XG4vLyDmnKzlnLDlrZjlgqjlv6vmjbfmlrnlvI9cbnZhciBTID0ge307XG5hcHAucnVuKFsnJHRyYW5zbGF0ZScsICckbG9jYWxTdG9yYWdlJyxcbiAgICAgICAgZnVuY3Rpb24gKCR0cmFuc2xhdGUsICRsb2NhbFN0b3JhZ2UpIHtcbiAgICAgICAgICAgIC8vIOWumuS5iee/u+ivkeW/q+aNt+aWueW8j1xuICAgICAgICAgICAgVCA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJHRyYW5zbGF0ZS5pbnN0YW50KGtleSk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBTID0gJGxvY2FsU3RvcmFnZTtcbiAgICAgICAgfVxuICAgIF0pOyIsIi8vIGxhenlsb2FkIGNvbmZpZ1xuXG5hbmd1bGFyLm1vZHVsZSgnYXBwJylcbiAgLmNvbnN0YW50KCdKUV9DT05GSUcnLCB7XG4gICAgICBmaWxlc3R5bGU6ICAgICAgWyd2ZW5kb3IyL2pxdWVyeS9maWxlL2Jvb3RzdHJhcC1maWxlc3R5bGUubWluLmpzJ10sXG4gICAgICBzbGlkZXI6ICAgICAgICAgWyd2ZW5kb3IyL2pxdWVyeS9zbGlkZXIvYm9vdHN0cmFwLXNsaWRlci5qcycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICd2ZW5kb3IyL2pxdWVyeS9zbGlkZXIvc2xpZGVyLmNzcyddLFxuICAgICAgd3lzaXd5ZzogICAgICAgIFsndmVuZG9yMi9qcXVlcnkvd3lzaXd5Zy9ib290c3RyYXAtd3lzaXd5Zy5qcycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICd2ZW5kb3IyL2pxdWVyeS93eXNpd3lnL2pxdWVyeS5ob3RrZXlzLmpzJ10sXG4gICAgICBjaG9zZW46ICAgICAgICAgWyd2ZW5kb3IyL2pxdWVyeS9jaG9zZW4vY2hvc2VuLmpxdWVyeS5taW4uanMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAndmVuZG9yMi9qcXVlcnkvY2hvc2VuL2Nob3Nlbi5jc3MnXSxcbiAgICAgIFRvdWNoU3BpbjogICAgICBbJ3ZlbmRvcjIvanF1ZXJ5L3NwaW5uZXIvanF1ZXJ5LmJvb3RzdHJhcC10b3VjaHNwaW4ubWluLmpzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ3ZlbmRvcjIvanF1ZXJ5L3NwaW5uZXIvanF1ZXJ5LmJvb3RzdHJhcC10b3VjaHNwaW4uY3NzJ10sXG4gICAgICB9XG4gICk7IiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuLyoqXHJcbiAqIENvbmZpZyBmb3IgdGhlIHJvdXRlclxyXG4gKi9cclxuYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbiAgICAucnVuKFxyXG4gICAgICAgIFsnJHJvb3RTY29wZScsICckc3RhdGUnLCAnJHN0YXRlUGFyYW1zJyxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKCRyb290U2NvcGUsICRzdGF0ZSwgJHN0YXRlUGFyYW1zKSB7XHJcbiAgICAgICAgICAgICAgICAkcm9vdFNjb3BlLiRzdGF0ZSA9ICRzdGF0ZTtcclxuICAgICAgICAgICAgICAgICRyb290U2NvcGUuJHN0YXRlUGFyYW1zID0gJHN0YXRlUGFyYW1zO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgKVxyXG4gICAgLmNvbmZpZyhcclxuICAgICAgICBbJyRzdGF0ZVByb3ZpZGVyJywgJyR1cmxSb3V0ZXJQcm92aWRlcicsXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uICgkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnL2FwcC9jcmlzaXMnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkc3RhdGVQcm92aWRlclxyXG4gICAgICAgICAgICAgICAgICAgIC5zdGF0ZSgnYXBwJywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhYnN0cmFjdDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiAnL2FwcCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAndHBsL2FwcC5odG1sJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnN0YXRlKCdhcHAuaG9tZScsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiAnL2hvbWUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3RwbC9ob21lLmh0bWwnXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuc3RhdGUoJ2FwcC5jcmlzaXMnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJy9jcmlzaXMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3RwbC9jcmlzaXMvY3Jpc2lzX2xpc3QuaHRtbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdDcmlzaXNMaXN0Q3RybCdcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdGF0ZSgnYXBwLmNyaXNpc19kZXRhaWwnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJy9jcmlzaXNfZGV0YWlsJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3RwbC9jcmlzaXMvY3Jpc2lzX2RldGFpbC5odG1sJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ0NyaXNpc0RldGFpbEN0cmwnXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuc3RhdGUoJ2FwcC5kZXBhcnQnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJy9kZXBhcnQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3RwbC9kZXBhcnQvZGVwYXJ0X2xpc3QuaHRtbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdEZXBhcnRMaXN0Q3RybCdcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdGF0ZSgnYXBwLmRlcGFydF9kZXRhaWwnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJy9kZXBhcnRfZGV0YWlsJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3RwbC9kZXBhcnQvZGVwYXJ0X2RldGFpbC5odG1sJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ0RlcGFydERldGFpbEN0cmwnXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuc3RhdGUoJ2FwcC5yZXF1ZXN0Jywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6ICcvcmVxdWVzdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICd0cGwvcmVxdWVzdC9yZXF1ZXN0X2xpc3QuaHRtbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdSZXF1ZXN0TGlzdEN0cmwnXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgICk7IiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuLyogQ29udHJvbGxlcnMgKi9cclxuXHJcbmFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4gIC5jb250cm9sbGVyKCdBcHBDdHJsJywgWyckc2NvcGUnLCAnJHRyYW5zbGF0ZScsICckbG9jYWxTdG9yYWdlJywgJyR3aW5kb3cnLCBcclxuICAgIGZ1bmN0aW9uKCAgICAgICAgICAgICAgJHNjb3BlLCAgICR0cmFuc2xhdGUsICAgJGxvY2FsU3RvcmFnZSwgICAkd2luZG93ICkge1xyXG4gICAgICAvLyBhZGQgJ2llJyBjbGFzc2VzIHRvIGh0bWxcclxuICAgICAgdmFyIGlzSUUgPSAhIW5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL01TSUUvaSk7XHJcbiAgICAgIGlzSUUgJiYgYW5ndWxhci5lbGVtZW50KCR3aW5kb3cuZG9jdW1lbnQuYm9keSkuYWRkQ2xhc3MoJ2llJyk7XHJcbiAgICAgIGlzU21hcnREZXZpY2UoICR3aW5kb3cgKSAmJiBhbmd1bGFyLmVsZW1lbnQoJHdpbmRvdy5kb2N1bWVudC5ib2R5KS5hZGRDbGFzcygnc21hcnQnKTtcclxuXHJcbiAgICAgIC8vIGNvbmZpZ1xyXG4gICAgICAkc2NvcGUuYXBwID0ge1xyXG4gICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICB0aGVtZUlEOiAxLFxyXG4gICAgICAgICAgbmF2YmFySGVhZGVyQ29sb3I6ICdiZy1ibGFjaycsXHJcbiAgICAgICAgICBuYXZiYXJDb2xsYXBzZUNvbG9yOiAnaGVhZC1saWdodGJsdWUnLFxyXG4gICAgICAgICAgYXNpZGVDb2xvcjogJ2FzaWRlLWJsdWUnLFxyXG4gICAgICAgICAgaGVhZGVyRml4ZWQ6IHRydWUsXHJcbiAgICAgICAgICBhc2lkZUZpeGVkOiB0cnVlLFxyXG4gICAgICAgICAgYXNpZGVGb2xkZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgYXNpZGVEb2NrOiBmYWxzZSxcclxuICAgICAgICAgIGNvbnRhaW5lcjogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIHNhdmUgc2V0dGluZ3MgdG8gbG9jYWwgc3RvcmFnZVxyXG4gICAgICAvLyBpZiAoIGFuZ3VsYXIuaXNEZWZpbmVkKCRsb2NhbFN0b3JhZ2Uuc2V0dGluZ3MpICkge1xyXG4gICAgICAvLyAgICRzY29wZS5hcHAuc2V0dGluZ3MgPSAkbG9jYWxTdG9yYWdlLnNldHRpbmdzO1xyXG4gICAgICAvLyB9IGVsc2Uge1xyXG4gICAgICAvLyAgICRsb2NhbFN0b3JhZ2Uuc2V0dGluZ3MgPSAkc2NvcGUuYXBwLnNldHRpbmdzO1xyXG4gICAgICAvLyB9XHJcbiAgICAgICRzY29wZS4kd2F0Y2goJ2FwcC5zZXR0aW5ncycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaWYoICRzY29wZS5hcHAuc2V0dGluZ3MuYXNpZGVEb2NrICAmJiAgJHNjb3BlLmFwcC5zZXR0aW5ncy5hc2lkZUZpeGVkICl7XHJcbiAgICAgICAgICAvLyBhc2lkZSBkb2NrIGFuZCBmaXhlZCBtdXN0IHNldCB0aGUgaGVhZGVyIGZpeGVkLlxyXG4gICAgICAgICAgJHNjb3BlLmFwcC5zZXR0aW5ncy5oZWFkZXJGaXhlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHNhdmUgdG8gbG9jYWwgc3RvcmFnZVxyXG4gICAgICAgICRsb2NhbFN0b3JhZ2Uuc2V0dGluZ3MgPSAkc2NvcGUuYXBwLnNldHRpbmdzO1xyXG4gICAgICB9LCB0cnVlKTtcclxuXHJcbiAgICAgIGZ1bmN0aW9uIGlzU21hcnREZXZpY2UoICR3aW5kb3cgKVxyXG4gICAgICB7XHJcbiAgICAgICAgICAvLyBBZGFwdGVkIGZyb20gaHR0cDovL3d3dy5kZXRlY3Rtb2JpbGVicm93c2Vycy5jb21cclxuICAgICAgICAgIHZhciB1YSA9ICR3aW5kb3dbJ25hdmlnYXRvciddWyd1c2VyQWdlbnQnXSB8fCAkd2luZG93WyduYXZpZ2F0b3InXVsndmVuZG9yJ10gfHwgJHdpbmRvd1snb3BlcmEnXTtcclxuICAgICAgICAgIC8vIENoZWNrcyBmb3IgaU9zLCBBbmRyb2lkLCBCbGFja2JlcnJ5LCBPcGVyYSBNaW5pLCBhbmQgV2luZG93cyBtb2JpbGUgZGV2aWNlc1xyXG4gICAgICAgICAgcmV0dXJuICgvaVBob25lfGlQb2R8aVBhZHxTaWxrfEFuZHJvaWR8QmxhY2tCZXJyeXxPcGVyYSBNaW5pfElFTW9iaWxlLykudGVzdCh1YSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICRzY29wZS4kb24oJyRzdGF0ZUNoYW5nZVN0YXJ0JyxmdW5jdGlvbihldmVudCwgdG9TdGF0ZSwgdG9QYXJhbXMsIGZyb21TdGF0ZSwgZnJvbVBhcmFtcyl7XHJcblxyXG4gICAgICB9KTtcclxuICB9XSk7IiwiYXBwLmNvbnRyb2xsZXIoJ0NyaXNpc0xpc3RDdHJsJywgWyckc2NvcGUnLCAnJHN0YXRlJywgJ2RhdGFTZXJ2aWNlJywgZnVuY3Rpb24gKCRzY29wZSwgJHN0YXRlLCBkYXRhU2VydmljZSkge1xyXG4gICAgLy8gdmFyIGVkaXRUcGwgPSAnPGJ1dHRvbiBpZD1cImVkaXRCdG5cIiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4tc21hbGxcIiBuZy1jbGljaz1cImdyaWQuYXBwU2NvcGUuZ28ocm93LmVudGl0eSlcIiA+RWRpdDwvYnV0dG9uPic7XHJcbiAgICAvLyAkc2NvcGUuZ28gPSBmdW5jdGlvbiAocm93RGF0YSkge1xyXG4gICAgLy8gICAgICRzdGF0ZS5nbygnYXBwLmNyaXNpc19kZXRhaWwnLCB7IGlkOiByb3dEYXRhLmlkIH0pO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIHZhciBlZGl0VXJsID0gJzxhIGNsYXNzPVwiZWRpdFRwbFwiIHVpLXNyZWY9XCJhcHAuY3Jpc2lzX2RldGFpbCh7aWQ6IHJvdy5lbnRpdHkuaWR9KVwiPue8lui+kTwvYT4nXHJcblxyXG4gICAgJHNjb3BlLmdyaWRPcHRpb25zID0ge1xyXG4gICAgICAgIGVuYWJsZUZpbHRlcmluZzogZmFsc2UsXHJcbiAgICAgICAgb25SZWdpc3RlckFwaTogZnVuY3Rpb24gKGdyaWRBcGkpIHtcclxuICAgICAgICAgICAgJHNjb3BlLmdyaWRBcGkgPSBncmlkQXBpO1xyXG4gICAgICAgICAgICAkc2NvcGUuZ3JpZEFwaS5ncmlkLnJlZ2lzdGVyUm93c1Byb2Nlc3Nvcigkc2NvcGUuZmlsdGVyLCAyMDApO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29sdW1uRGVmczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogJ2lkJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAnSWQnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiAnbmFtZScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogJ05hbWUnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdlZGl0JyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAnRWRpdCcsXHJcbiAgICAgICAgICAgICAgICBjZWxsVGVtcGxhdGU6IGVkaXRVcmxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgIH07XHJcblxyXG4gICAgZGF0YVNlcnZpY2UuZ2V0bGFiaXRlbUxpc3QoKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAkc2NvcGUuZ3JpZE9wdGlvbnMuZGF0YSA9IHJlc3VsdC5kYXRhO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJHNjb3BlLnNlYXJjaCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkc2NvcGUuZ3JpZEFwaS5ncmlkLnJlZnJlc2goKTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmNyZWF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkc3RhdGUuZ28oJ2FwcC5jcmlzaXNfZGV0YWlsJyk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5maWx0ZXI9ZnVuY3Rpb24ocmVuZGVyYWJsZVJvd3Mpe1xyXG4gICAgICAgIHZhciBtYXRjaGVyID0gbmV3IFJlZ0V4cCgkc2NvcGUuZmlsdGVyVmFsdWUpO1xyXG4gICAgICAgIHJlbmRlcmFibGVSb3dzLmZvckVhY2goIGZ1bmN0aW9uKCByb3cgKSB7XHJcbiAgICAgICAgICB2YXIgbWF0Y2ggPSBmYWxzZTtcclxuICAgICAgICAgIFsgJ25hbWUnIF0uZm9yRWFjaChmdW5jdGlvbiggZmllbGQgKXtcclxuICAgICAgICAgICAgaWYgKCByb3cuZW50aXR5W2ZpZWxkXS5tYXRjaChtYXRjaGVyKSApe1xyXG4gICAgICAgICAgICAgIG1hdGNoID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBpZiAoICFtYXRjaCApe1xyXG4gICAgICAgICAgICByb3cudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiByZW5kZXJhYmxlUm93cztcclxuICAgIH07XHJcbn1dKTtcclxuXHJcbmFwcC5jb250cm9sbGVyKCdDcmlzaXNEZXRhaWxDdHJsJywgWyckc2NvcGUnLCAnJHN0YXRlJywgJyRzdGF0ZVBhcmFtcycsICdkYXRhU2VydmljZScsIGZ1bmN0aW9uICgkc2NvcGUsICRzdGF0ZSwgJHN0YXRlUGFyYW1zLCBkYXRhU2VydmljZSkge1xyXG4gICAgLy9jb25zb2xlLmxvZygkc3RhdGVQYXJhbXMpO1xyXG4gICAgJHNjb3BlLm1vZGVsID0ge1xyXG4gICAgICAgIHNlbGVjdGVkbGFiSXRlbTogbnVsbCxcclxuICAgICAgICBub3JtYWxVcDogbnVsbFxyXG4gICAgfTtcclxuICAgIGRhdGFTZXJ2aWNlLmdldGxhYml0ZW1MaXN0KCkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgJHNjb3BlLml0ZW1MaXN0ID0gcmVzdWx0LmRhdGE7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkc2NvcGUuc3VibWl0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCRzY29wZS5tb2RlbCk7XHJcbiAgICB9O1xyXG5cclxufV0pOyIsImFwcC5jb250cm9sbGVyKCdEZXBhcnRMaXN0Q3RybCcsIFsnJHNjb3BlJywgJyRzdGF0ZScsICdkYXRhU2VydmljZScsIGZ1bmN0aW9uICgkc2NvcGUsICRzdGF0ZSwgZGF0YVNlcnZpY2UpIHtcclxuICAgIHZhciBlZGl0VXJsID0gJzxhIGNsYXNzPVwiZWRpdFRwbFwiIHVpLXNyZWY9XCJhcHAuZGVwYXJ0X2RldGFpbCh7aWQ6IHJvdy5lbnRpdHkuaWR9KVwiPue8lui+kTwvYT4nXHJcblxyXG4gICAgJHNjb3BlLmdyaWRPcHRpb25zID0ge1xyXG4gICAgICAgIGVuYWJsZUZpbHRlcmluZzogZmFsc2UsXHJcbiAgICAgICAgb25SZWdpc3RlckFwaTogZnVuY3Rpb24gKGdyaWRBcGkpIHtcclxuICAgICAgICAgICAgJHNjb3BlLmdyaWRBcGkgPSBncmlkQXBpO1xyXG4gICAgICAgICAgICAkc2NvcGUuZ3JpZEFwaS5ncmlkLnJlZ2lzdGVyUm93c1Byb2Nlc3Nvcigkc2NvcGUuZmlsdGVyLCAyMDApO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29sdW1uRGVmczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogJ2lkJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAnSWQnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiAnbmFtZScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogJ05hbWUnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdlZGl0JyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAnRWRpdCcsXHJcbiAgICAgICAgICAgICAgICBjZWxsVGVtcGxhdGU6IGVkaXRVcmxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgIH07XHJcblxyXG4gICAgZGF0YVNlcnZpY2UuZ2V0TWlsZExpc3QoKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAkc2NvcGUuZ3JpZE9wdGlvbnMuZGF0YSA9IHJlc3VsdC5kYXRhO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJHNjb3BlLnNlYXJjaCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkc2NvcGUuZ3JpZEFwaS5ncmlkLnJlZnJlc2goKTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmNyZWF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkc3RhdGUuZ28oJ2FwcC5kZXBhcnRfZGV0YWlsJyk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5maWx0ZXI9ZnVuY3Rpb24ocmVuZGVyYWJsZVJvd3Mpe1xyXG4gICAgICAgIHZhciBtYXRjaGVyID0gbmV3IFJlZ0V4cCgkc2NvcGUuZmlsdGVyVmFsdWUpO1xyXG4gICAgICAgIHJlbmRlcmFibGVSb3dzLmZvckVhY2goIGZ1bmN0aW9uKCByb3cgKSB7XHJcbiAgICAgICAgICB2YXIgbWF0Y2ggPSBmYWxzZTtcclxuICAgICAgICAgIFsgJ25hbWUnIF0uZm9yRWFjaChmdW5jdGlvbiggZmllbGQgKXtcclxuICAgICAgICAgICAgaWYgKCByb3cuZW50aXR5W2ZpZWxkXS5tYXRjaChtYXRjaGVyKSApe1xyXG4gICAgICAgICAgICAgIG1hdGNoID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBpZiAoICFtYXRjaCApe1xyXG4gICAgICAgICAgICByb3cudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiByZW5kZXJhYmxlUm93cztcclxuICAgIH07XHJcbn1dKTtcclxuXHJcbmFwcC5jb250cm9sbGVyKCdEZXBhcnREZXRhaWxDdHJsJywgWyckc2NvcGUnLCAnJHN0YXRlJywgJyRzdGF0ZVBhcmFtcycsICdkYXRhU2VydmljZScsIGZ1bmN0aW9uICgkc2NvcGUsICRzdGF0ZSwgJHN0YXRlUGFyYW1zLCBkYXRhU2VydmljZSkge1xyXG4gICAgLy9jb25zb2xlLmxvZygkc3RhdGVQYXJhbXMpO1xyXG4gICAgJHNjb3BlLm1vZGVsID0ge1xyXG4gICAgICAgIHNlbGVjdGVkbGFiSXRlbTogbnVsbCxcclxuICAgICAgICBub3JtYWxVcDogbnVsbFxyXG4gICAgfTtcclxuICAgIGRhdGFTZXJ2aWNlLmdldGxhYml0ZW1MaXN0KCkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgJHNjb3BlLml0ZW1MaXN0ID0gcmVzdWx0LmRhdGE7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkc2NvcGUuc3VibWl0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCRzY29wZS5tb2RlbCk7XHJcbiAgICB9O1xyXG5cclxufV0pOyIsImFwcC5jb250cm9sbGVyKCdSZXF1ZXN0TGlzdEN0cmwnLCBbJyRzY29wZScsICckc3RhdGUnLCAnZGF0YVNlcnZpY2UnLCBmdW5jdGlvbiAoJHNjb3BlLCAkc3RhdGUsIGRhdGFTZXJ2aWNlKSB7XHJcblxyXG5cclxuICAgdmFyIGVkaXRUcGwgPSAnPGRpdj48YnV0dG9uIGNsYXNzPVwiYnRuIGdyaWQtYnRuIGJ0bi1zdWNjZXNzXCIgbmctY2xpY2s9XCJncmlkLmFwcFNjb3BlLmFjY2VwdChyb3cuZW50aXR5KVwiPuaOpeWPlzwvYnV0dG9uPjxidXR0b24gY2xhc3M9XCJidG4gZ3JpZC1idG4gbGVmdC1zcGFjZSBidG4tZGFuZ2VyXCIgbmctY2xpY2s9XCJncmlkLmFwcFNjb3BlLnJlamVjdChyb3cuZW50aXR5KVwiPuaLkue7nTwvYnV0dG9uPjwvZGl2Pic7XHJcbiAgIFxyXG4gICAkc2NvcGUuZ3JpZE9wdGlvbnMgPSB7XHJcbiAgICAgICAgZW5hYmxlRmlsdGVyaW5nOiBmYWxzZSxcclxuICAgICAgICBvblJlZ2lzdGVyQXBpOiBmdW5jdGlvbiAoZ3JpZEFwaSkge1xyXG4gICAgICAgICAgICAkc2NvcGUuZ3JpZEFwaSA9IGdyaWRBcGk7XHJcbiAgICAgICAgICAgICRzY29wZS5ncmlkQXBpLmdyaWQucmVnaXN0ZXJSb3dzUHJvY2Vzc29yKCRzY29wZS5maWx0ZXIsIDIwMCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb2x1bW5EZWZzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiAnaWQnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICdJZCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQ6ICdyZXF1ZXN0Tm8nLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICdyZXF1ZXN0Tm8nXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiAncmVTdGF0dXMnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICdyZVN0YXR1cydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ2VkaXQnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICfmk43kvZwnLFxyXG4gICAgICAgICAgICAgICAgY2VsbFRlbXBsYXRlOiBlZGl0VHBsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICB9O1xyXG5cclxuICAgIGRhdGFTZXJ2aWNlLmdldFJlcXVlc3RMaXN0KCkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgJHNjb3BlLmdyaWRPcHRpb25zLmRhdGEgPSByZXN1bHQuZGF0YTtcclxuICAgIH0pO1xyXG5cclxuICAgICRzY29wZS5zZWFyY2ggPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJHNjb3BlLmdyaWRBcGkuZ3JpZC5yZWZyZXNoKCk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5maWx0ZXI9ZnVuY3Rpb24ocmVuZGVyYWJsZVJvd3Mpe1xyXG4gICAgICAgIC8vIHZhciBtYXRjaGVyID0gbmV3IFJlZ0V4cCgkc2NvcGUuZmlsdGVyVmFsdWUpO1xyXG4gICAgICAgIC8vIHJlbmRlcmFibGVSb3dzLmZvckVhY2goIGZ1bmN0aW9uKCByb3cgKSB7XHJcbiAgICAgICAgLy8gICB2YXIgbWF0Y2ggPSBmYWxzZTtcclxuICAgICAgICAvLyAgIFsgJ25hbWUnIF0uZm9yRWFjaChmdW5jdGlvbiggZmllbGQgKXtcclxuICAgICAgICAvLyAgICAgaWYgKCByb3cuZW50aXR5W2ZpZWxkXS5tYXRjaChtYXRjaGVyKSApe1xyXG4gICAgICAgIC8vICAgICAgIG1hdGNoID0gdHJ1ZTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vICAgfSk7XHJcbiAgICAgICAgLy8gICBpZiAoICFtYXRjaCApe1xyXG4gICAgICAgIC8vICAgICByb3cudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIC8vICAgfVxyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgICAgIHJldHVybiByZW5kZXJhYmxlUm93cztcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmFjY2VwdD1mdW5jdGlvbigpe1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnJlamVjdD1mdW5jdGlvbigpe1xyXG5cclxuICAgIH07XHJcbn1dKTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbiAgLmRpcmVjdGl2ZSgnc2V0TmdBbmltYXRlJywgWyckYW5pbWF0ZScsIGZ1bmN0aW9uICgkYW5pbWF0ZSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBsaW5rOiBmdW5jdGlvbiAoJHNjb3BlLCAkZWxlbWVudCwgJGF0dHJzKSB7XHJcbiAgICAgICAgICAgICRzY29wZS4kd2F0Y2goIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICRzY29wZS4kZXZhbCgkYXR0cnMuc2V0TmdBbmltYXRlLCAkc2NvcGUpO1xyXG4gICAgICAgICAgICB9LCBmdW5jdGlvbih2YWxuZXcsIHZhbG9sZCl7XHJcbiAgICAgICAgICAgICAgICAkYW5pbWF0ZS5lbmFibGVkKCEhdmFsbmV3LCAkZWxlbWVudCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgfV0pOyIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4gIC5kaXJlY3RpdmUoJ3VpQnV0dGVyYmFyJywgWyckcm9vdFNjb3BlJywgJyRhbmNob3JTY3JvbGwnLCBmdW5jdGlvbigkcm9vdFNjb3BlLCAkYW5jaG9yU2Nyb2xsKSB7XHJcbiAgICAgcmV0dXJuIHtcclxuICAgICAgcmVzdHJpY3Q6ICdBQycsXHJcbiAgICAgIHRlbXBsYXRlOic8c3BhbiBjbGFzcz1cImJhclwiPjwvc3Bhbj4nLFxyXG4gICAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWwsIGF0dHJzKSB7ICAgICAgICBcclxuICAgICAgICBlbC5hZGRDbGFzcygnYnV0dGVyYmFyIGhpZGUnKTtcclxuICAgICAgICBzY29wZS4kb24oJyRzdGF0ZUNoYW5nZVN0YXJ0JywgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICAgICRhbmNob3JTY3JvbGwoKTtcclxuICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdoaWRlJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNjb3BlLiRvbignJHN0YXRlQ2hhbmdlU3VjY2VzcycsIGZ1bmN0aW9uKCBldmVudCwgdG9TdGF0ZSwgdG9QYXJhbXMsIGZyb21TdGF0ZSApIHtcclxuICAgICAgICAgIGV2ZW50LnRhcmdldFNjb3BlLiR3YXRjaCgnJHZpZXdDb250ZW50TG9hZGVkJywgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgZWwuYWRkQ2xhc3MoJ2hpZGUnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgfTtcclxuICB9XSk7IiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbiAgLmRpcmVjdGl2ZSgndWlGb2N1cycsIGZ1bmN0aW9uKCR0aW1lb3V0LCAkcGFyc2UpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbGVtZW50LCBhdHRyKSB7XHJcbiAgICAgICAgdmFyIG1vZGVsID0gJHBhcnNlKGF0dHIudWlGb2N1cyk7XHJcbiAgICAgICAgc2NvcGUuJHdhdGNoKG1vZGVsLCBmdW5jdGlvbih2YWx1ZSkge1xyXG4gICAgICAgICAgaWYodmFsdWUgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgJHRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgZWxlbWVudFswXS5mb2N1cygpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBlbGVtZW50LmJpbmQoJ2JsdXInLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICBzY29wZS4kYXBwbHkobW9kZWwuYXNzaWduKHNjb3BlLCBmYWxzZSkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH0pOyIsIiBhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuICAuZGlyZWN0aXZlKCd1aUZ1bGxzY3JlZW4nLCBbJ3VpTG9hZCcsICckZG9jdW1lbnQnLCAnJHdpbmRvdycsIGZ1bmN0aW9uKHVpTG9hZCwgJGRvY3VtZW50LCAkd2luZG93KSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICByZXN0cmljdDogJ0FDJyxcclxuICAgICAgdGVtcGxhdGU6JzxpIGNsYXNzPVwiZmEgZmEtZXhwYW5kIGZhLWZ3IHRleHRcIj48L2k+PGkgY2xhc3M9XCJmYSBmYS1jb21wcmVzcyBmYS1mdyB0ZXh0LWFjdGl2ZVwiPjwvaT4nLFxyXG4gICAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWwsIGF0dHIpIHtcclxuICAgICAgICBlbC5hZGRDbGFzcygnaGlkZScpO1xyXG4gICAgICAgIHVpTG9hZC5sb2FkKCd2ZW5kb3IvbGlicy9zY3JlZW5mdWxsLm1pbi5qcycpLnRoZW4oZnVuY3Rpb24oKXtcclxuICAgICAgICAgIC8vIGRpc2FibGUgb24gaWUxMVxyXG4gICAgICAgICAgaWYgKHNjcmVlbmZ1bGwuZW5hYmxlZCAmJiAhbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvVHJpZGVudC4qcnY6MTFcXC4vKSkge1xyXG4gICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnaGlkZScpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZWwub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgdmFyIHRhcmdldDtcclxuICAgICAgICAgICAgYXR0ci50YXJnZXQgJiYgKCB0YXJnZXQgPSAkKGF0dHIudGFyZ2V0KVswXSApOyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBzY3JlZW5mdWxsLnRvZ2dsZSh0YXJnZXQpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICAkZG9jdW1lbnQub24oc2NyZWVuZnVsbC5yYXcuZnVsbHNjcmVlbmNoYW5nZSwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZihzY3JlZW5mdWxsLmlzRnVsbHNjcmVlbil7XHJcbiAgICAgICAgICAgICAgZWwuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH1dKTsiLCIndXNlIHN0cmljdCc7XHJcblxyXG4vKipcclxuICogMC4xLjFcclxuICogR2VuZXJhbC1wdXJwb3NlIGpRdWVyeSB3cmFwcGVyLiBTaW1wbHkgcGFzcyB0aGUgcGx1Z2luIG5hbWUgYXMgdGhlIGV4cHJlc3Npb24uXHJcbiAqXHJcbiAqIEl0IGlzIHBvc3NpYmxlIHRvIHNwZWNpZnkgYSBkZWZhdWx0IHNldCBvZiBwYXJhbWV0ZXJzIGZvciBlYWNoIGpRdWVyeSBwbHVnaW4uXHJcbiAqIFVuZGVyIHRoZSBqcSBrZXksIG5hbWVzcGFjZSBlYWNoIHBsdWdpbiBieSB0aGF0IHdoaWNoIHdpbGwgYmUgcGFzc2VkIHRvIHVpLWpxLlxyXG4gKiBVbmZvcnR1bmF0ZWx5LCBhdCB0aGlzIHRpbWUgeW91IGNhbiBvbmx5IHByZS1kZWZpbmUgdGhlIGZpcnN0IHBhcmFtZXRlci5cclxuICogQGV4YW1wbGUgeyBqcSA6IHsgZGF0ZXBpY2tlciA6IHsgc2hvd09uOidjbGljaycgfSB9IH1cclxuICpcclxuICogQHBhcmFtIHVpLWpxIHtzdHJpbmd9IFRoZSAkZWxtLltwbHVnaW5OYW1lXSgpIHRvIGNhbGwuXHJcbiAqIEBwYXJhbSBbdWktb3B0aW9uc10ge21peGVkfSBFeHByZXNzaW9uIHRvIGJlIGV2YWx1YXRlZCBhbmQgcGFzc2VkIGFzIG9wdGlvbnMgdG8gdGhlIGZ1bmN0aW9uXHJcbiAqICAgICBNdWx0aXBsZSBwYXJhbWV0ZXJzIGNhbiBiZSBzZXBhcmF0ZWQgYnkgY29tbWFzXHJcbiAqIEBwYXJhbSBbdWktcmVmcmVzaF0ge2V4cHJlc3Npb259IFdhdGNoIGV4cHJlc3Npb24gYW5kIHJlZmlyZSBwbHVnaW4gb24gY2hhbmdlc1xyXG4gKlxyXG4gKiBAZXhhbXBsZSA8aW5wdXQgdWktanE9XCJkYXRlcGlja2VyXCIgdWktb3B0aW9ucz1cIntzaG93T246J2NsaWNrJ30sc2Vjb25kUGFyYW1ldGVyLHRoaXJkUGFyYW1ldGVyXCIgdWktcmVmcmVzaD1cImlDaGFuZ2VcIj5cclxuICovXHJcbmFuZ3VsYXIubW9kdWxlKCd1aS5qcScsIFsndWkubG9hZCddKS5cclxuICB2YWx1ZSgndWlKcUNvbmZpZycsIHt9KS5cclxuICBkaXJlY3RpdmUoJ3VpSnEnLCBbJ3VpSnFDb25maWcnLCAnSlFfQ09ORklHJywgJ3VpTG9hZCcsICckdGltZW91dCcsIGZ1bmN0aW9uIHVpSnFJbmplY3RpbmdGdW5jdGlvbih1aUpxQ29uZmlnLCBKUV9DT05GSUcsIHVpTG9hZCwgJHRpbWVvdXQpIHtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHJlc3RyaWN0OiAnQScsXHJcbiAgICBjb21waWxlOiBmdW5jdGlvbiB1aUpxQ29tcGlsaW5nRnVuY3Rpb24odEVsbSwgdEF0dHJzKSB7XHJcblxyXG4gICAgICBpZiAoIWFuZ3VsYXIuaXNGdW5jdGlvbih0RWxtW3RBdHRycy51aUpxXSkgJiYgIUpRX0NPTkZJR1t0QXR0cnMudWlKcV0pIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3VpLWpxOiBUaGUgXCInICsgdEF0dHJzLnVpSnEgKyAnXCIgZnVuY3Rpb24gZG9lcyBub3QgZXhpc3QnKTtcclxuICAgICAgfVxyXG4gICAgICB2YXIgb3B0aW9ucyA9IHVpSnFDb25maWcgJiYgdWlKcUNvbmZpZ1t0QXR0cnMudWlKcV07XHJcblxyXG4gICAgICByZXR1cm4gZnVuY3Rpb24gdWlKcUxpbmtpbmdGdW5jdGlvbihzY29wZSwgZWxtLCBhdHRycykge1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBnZXRPcHRpb25zKCl7XHJcbiAgICAgICAgICB2YXIgbGlua09wdGlvbnMgPSBbXTtcclxuXHJcbiAgICAgICAgICAvLyBJZiB1aS1vcHRpb25zIGFyZSBwYXNzZWQsIG1lcmdlIChvciBvdmVycmlkZSkgdGhlbSBvbnRvIGdsb2JhbCBkZWZhdWx0cyBhbmQgcGFzcyB0byB0aGUgalF1ZXJ5IG1ldGhvZFxyXG4gICAgICAgICAgaWYgKGF0dHJzLnVpT3B0aW9ucykge1xyXG4gICAgICAgICAgICBsaW5rT3B0aW9ucyA9IHNjb3BlLiRldmFsKCdbJyArIGF0dHJzLnVpT3B0aW9ucyArICddJyk7XHJcbiAgICAgICAgICAgIGlmIChhbmd1bGFyLmlzT2JqZWN0KG9wdGlvbnMpICYmIGFuZ3VsYXIuaXNPYmplY3QobGlua09wdGlvbnNbMF0pKSB7XHJcbiAgICAgICAgICAgICAgbGlua09wdGlvbnNbMF0gPSBhbmd1bGFyLmV4dGVuZCh7fSwgb3B0aW9ucywgbGlua09wdGlvbnNbMF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKG9wdGlvbnMpIHtcclxuICAgICAgICAgICAgbGlua09wdGlvbnMgPSBbb3B0aW9uc107XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gbGlua09wdGlvbnM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBJZiBjaGFuZ2UgY29tcGF0aWJpbGl0eSBpcyBlbmFibGVkLCB0aGUgZm9ybSBpbnB1dCdzIFwiY2hhbmdlXCIgZXZlbnQgd2lsbCB0cmlnZ2VyIGFuIFwiaW5wdXRcIiBldmVudFxyXG4gICAgICAgIGlmIChhdHRycy5uZ01vZGVsICYmIGVsbS5pcygnc2VsZWN0LGlucHV0LHRleHRhcmVhJykpIHtcclxuICAgICAgICAgIGVsbS5iaW5kKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgZWxtLnRyaWdnZXIoJ2lucHV0Jyk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIENhbGwgalF1ZXJ5IG1ldGhvZCBhbmQgcGFzcyByZWxldmFudCBvcHRpb25zXHJcbiAgICAgICAgZnVuY3Rpb24gY2FsbFBsdWdpbigpIHtcclxuICAgICAgICAgICR0aW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBlbG1bYXR0cnMudWlKcV0uYXBwbHkoZWxtLCBnZXRPcHRpb25zKCkpO1xyXG4gICAgICAgICAgfSwgMCwgZmFsc2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gcmVmcmVzaCgpe1xyXG4gICAgICAgICAgLy8gSWYgdWktcmVmcmVzaCBpcyB1c2VkLCByZS1maXJlIHRoZSB0aGUgbWV0aG9kIHVwb24gZXZlcnkgY2hhbmdlXHJcbiAgICAgICAgICBpZiAoYXR0cnMudWlSZWZyZXNoKSB7XHJcbiAgICAgICAgICAgIHNjb3BlLiR3YXRjaChhdHRycy51aVJlZnJlc2gsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgIGNhbGxQbHVnaW4oKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIEpRX0NPTkZJR1thdHRycy51aUpxXSApIHtcclxuICAgICAgICAgIHVpTG9hZC5sb2FkKEpRX0NPTkZJR1thdHRycy51aUpxXSkudGhlbihmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgY2FsbFBsdWdpbigpO1xyXG4gICAgICAgICAgICByZWZyZXNoKCk7XHJcbiAgICAgICAgICB9KS5jYXRjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY2FsbFBsdWdpbigpO1xyXG4gICAgICAgICAgcmVmcmVzaCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuICAgIH1cclxuICB9O1xyXG59XSk7IiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbiAgLmRpcmVjdGl2ZSgndWlNb2R1bGUnLCBbJ01PRFVMRV9DT05GSUcnLCd1aUxvYWQnLCAnJGNvbXBpbGUnLCBmdW5jdGlvbihNT0RVTEVfQ09ORklHLCB1aUxvYWQsICRjb21waWxlKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICByZXN0cmljdDogJ0EnLFxyXG4gICAgICBjb21waWxlOiBmdW5jdGlvbiAoZWwsIGF0dHJzKSB7XHJcbiAgICAgICAgdmFyIGNvbnRlbnRzID0gZWwuY29udGVudHMoKS5jbG9uZSgpO1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbihzY29wZSwgZWwsIGF0dHJzKXtcclxuICAgICAgICAgIGVsLmNvbnRlbnRzKCkucmVtb3ZlKCk7XHJcbiAgICAgICAgICB1aUxvYWQubG9hZChNT0RVTEVfQ09ORklHW2F0dHJzLnVpTW9kdWxlXSlcclxuICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICRjb21waWxlKGNvbnRlbnRzKShzY29wZSwgZnVuY3Rpb24oY2xvbmVkRWxlbWVudCwgc2NvcGUpIHtcclxuICAgICAgICAgICAgICBlbC5hcHBlbmQoY2xvbmVkRWxlbWVudCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH1dKTsiLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuICAuZGlyZWN0aXZlKCd1aU5hdicsIFsnJHRpbWVvdXQnLCBmdW5jdGlvbigkdGltZW91dCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcmVzdHJpY3Q6ICdBQycsXHJcbiAgICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbCwgYXR0cikge1xyXG4gICAgICAgIHZhciBfd2luZG93ID0gJCh3aW5kb3cpLCBcclxuICAgICAgICBfbWIgPSA3NjgsIFxyXG4gICAgICAgIHdyYXAgPSAkKCcuYXBwLWFzaWRlJyksIFxyXG4gICAgICAgIG5leHQsIFxyXG4gICAgICAgIGJhY2tkcm9wID0gJy5kcm9wZG93bi1iYWNrZHJvcCc7XHJcbiAgICAgICAgLy8gdW5mb2xkZWRcclxuICAgICAgICBlbC5vbignY2xpY2snLCAnYScsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgIG5leHQgJiYgbmV4dC50cmlnZ2VyKCdtb3VzZWxlYXZlLm5hdicpO1xyXG4gICAgICAgICAgdmFyIF90aGlzID0gJCh0aGlzKTtcclxuICAgICAgICAgIF90aGlzLnBhcmVudCgpLnNpYmxpbmdzKCBcIi5hY3RpdmVcIiApLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgIF90aGlzLm5leHQoKS5pcygndWwnKSAmJiAgX3RoaXMucGFyZW50KCkudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpICYmICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAvLyBtb2JpbGVcclxuICAgICAgICAgIF90aGlzLm5leHQoKS5pcygndWwnKSB8fCAoICggX3dpbmRvdy53aWR0aCgpIDwgX21iICkgJiYgJCgnLmFwcC1hc2lkZScpLnJlbW92ZUNsYXNzKCdzaG93IG9mZi1zY3JlZW4nKSApO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBmb2xkZWQgJiBmaXhlZFxyXG4gICAgICAgIGVsLm9uKCdtb3VzZWVudGVyJywgJ2EnLCBmdW5jdGlvbihlKXtcclxuICAgICAgICAgIG5leHQgJiYgbmV4dC50cmlnZ2VyKCdtb3VzZWxlYXZlLm5hdicpO1xyXG4gICAgICAgICAgJCgnPiAubmF2Jywgd3JhcCkucmVtb3ZlKCk7XHJcbiAgICAgICAgICBpZiAoICEkKCcuYXBwLWFzaWRlLWZpeGVkLmFwcC1hc2lkZS1mb2xkZWQnKS5sZW5ndGggfHwgKCBfd2luZG93LndpZHRoKCkgPCBfbWIgKSB8fCAkKCcuYXBwLWFzaWRlLWRvY2snKS5sZW5ndGgpIHJldHVybjtcclxuICAgICAgICAgIHZhciBfdGhpcyA9ICQoZS50YXJnZXQpXHJcbiAgICAgICAgICAsIHRvcFxyXG4gICAgICAgICAgLCB3X2ggPSAkKHdpbmRvdykuaGVpZ2h0KClcclxuICAgICAgICAgICwgb2Zmc2V0ID0gNTBcclxuICAgICAgICAgICwgbWluID0gMTUwO1xyXG5cclxuICAgICAgICAgICFfdGhpcy5pcygnYScpICYmIChfdGhpcyA9IF90aGlzLmNsb3Nlc3QoJ2EnKSk7XHJcbiAgICAgICAgICBpZiggX3RoaXMubmV4dCgpLmlzKCd1bCcpICl7XHJcbiAgICAgICAgICAgICBuZXh0ID0gX3RoaXMubmV4dCgpO1xyXG4gICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgXHJcbiAgICAgICAgICBfdGhpcy5wYXJlbnQoKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICB0b3AgPSBfdGhpcy5wYXJlbnQoKS5wb3NpdGlvbigpLnRvcCArIG9mZnNldDtcclxuICAgICAgICAgIG5leHQuY3NzKCd0b3AnLCB0b3ApO1xyXG4gICAgICAgICAgaWYoIHRvcCArIG5leHQuaGVpZ2h0KCkgPiB3X2ggKXtcclxuICAgICAgICAgICAgbmV4dC5jc3MoJ2JvdHRvbScsIDApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYodG9wICsgbWluID4gd19oKXtcclxuICAgICAgICAgICAgbmV4dC5jc3MoJ2JvdHRvbScsIHdfaCAtIHRvcCAtIG9mZnNldCkuY3NzKCd0b3AnLCAnYXV0bycpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgbmV4dC5hcHBlbmRUbyh3cmFwKTtcclxuXHJcbiAgICAgICAgICBuZXh0Lm9uKCdtb3VzZWxlYXZlLm5hdicsIGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgICAkKGJhY2tkcm9wKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgbmV4dC5hcHBlbmRUbyhfdGhpcy5wYXJlbnQoKSk7XHJcbiAgICAgICAgICAgIG5leHQub2ZmKCdtb3VzZWxlYXZlLm5hdicpLmNzcygndG9wJywgJ2F1dG8nKS5jc3MoJ2JvdHRvbScsICdhdXRvJyk7XHJcbiAgICAgICAgICAgIF90aGlzLnBhcmVudCgpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICQoJy5zbWFydCcpLmxlbmd0aCAmJiAkKCc8ZGl2IGNsYXNzPVwiZHJvcGRvd24tYmFja2Ryb3BcIi8+JykuaW5zZXJ0QWZ0ZXIoJy5hcHAtYXNpZGUnKS5vbignY2xpY2snLCBmdW5jdGlvbihuZXh0KXtcclxuICAgICAgICAgICAgbmV4dCAmJiBuZXh0LnRyaWdnZXIoJ21vdXNlbGVhdmUubmF2Jyk7XHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHdyYXAub24oJ21vdXNlbGVhdmUnLCBmdW5jdGlvbihlKXtcclxuICAgICAgICAgIG5leHQgJiYgbmV4dC50cmlnZ2VyKCdtb3VzZWxlYXZlLm5hdicpO1xyXG4gICAgICAgICAgJCgnPiAubmF2Jywgd3JhcCkucmVtb3ZlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfV0pOyIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4gIC5kaXJlY3RpdmUoJ3VpU2Nyb2xsJywgWyckbG9jYXRpb24nLCAnJGFuY2hvclNjcm9sbCcsIGZ1bmN0aW9uKCRsb2NhdGlvbiwgJGFuY2hvclNjcm9sbCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcmVzdHJpY3Q6ICdBQycsXHJcbiAgICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbCwgYXR0cikge1xyXG4gICAgICAgIGVsLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICRsb2NhdGlvbi5oYXNoKGF0dHIudWlTY3JvbGwpO1xyXG4gICAgICAgICAgJGFuY2hvclNjcm9sbCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH1dKTsiLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuICAuZGlyZWN0aXZlKCd1aVNoaWZ0JywgWyckdGltZW91dCcsIGZ1bmN0aW9uKCR0aW1lb3V0KSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICByZXN0cmljdDogJ0EnLFxyXG4gICAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWwsIGF0dHIpIHtcclxuICAgICAgICAvLyBnZXQgdGhlICRwcmV2IG9yICRwYXJlbnQgb2YgdGhpcyBlbFxyXG4gICAgICAgIHZhciBfZWwgPSAkKGVsKSxcclxuICAgICAgICAgICAgX3dpbmRvdyA9ICQod2luZG93KSxcclxuICAgICAgICAgICAgcHJldiA9IF9lbC5wcmV2KCksXHJcbiAgICAgICAgICAgIHBhcmVudCxcclxuICAgICAgICAgICAgd2lkdGggPSBfd2luZG93LndpZHRoKClcclxuICAgICAgICAgICAgO1xyXG5cclxuICAgICAgICAhcHJldi5sZW5ndGggJiYgKHBhcmVudCA9IF9lbC5wYXJlbnQoKSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZnVuY3Rpb24gc20oKXtcclxuICAgICAgICAgICR0aW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIG1ldGhvZCA9IGF0dHIudWlTaGlmdDtcclxuICAgICAgICAgICAgdmFyIHRhcmdldCA9IGF0dHIudGFyZ2V0O1xyXG4gICAgICAgICAgICBfZWwuaGFzQ2xhc3MoJ2luJykgfHwgX2VsW21ldGhvZF0odGFyZ2V0KS5hZGRDbGFzcygnaW4nKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBmdW5jdGlvbiBtZCgpe1xyXG4gICAgICAgICAgcGFyZW50ICYmIHBhcmVudFsncHJlcGVuZCddKGVsKTtcclxuICAgICAgICAgICFwYXJlbnQgJiYgX2VsWydpbnNlcnRBZnRlciddKHByZXYpO1xyXG4gICAgICAgICAgX2VsLnJlbW92ZUNsYXNzKCdpbicpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgKHdpZHRoIDwgNzY4ICYmIHNtKCkpIHx8IG1kKCk7XHJcblxyXG4gICAgICAgIF93aW5kb3cucmVzaXplKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgaWYod2lkdGggIT09IF93aW5kb3cud2lkdGgoKSl7XHJcbiAgICAgICAgICAgICR0aW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgKF93aW5kb3cud2lkdGgoKSA8IDc2OCAmJiBzbSgpKSB8fCBtZCgpO1xyXG4gICAgICAgICAgICAgIHdpZHRoID0gX3dpbmRvdy53aWR0aCgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9XSk7IiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbiAgLmRpcmVjdGl2ZSgndWlUb2dnbGVDbGFzcycsIFsnJHRpbWVvdXQnLCAnJGRvY3VtZW50JywgZnVuY3Rpb24oJHRpbWVvdXQsICRkb2N1bWVudCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcmVzdHJpY3Q6ICdBQycsXHJcbiAgICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbCwgYXR0cikge1xyXG4gICAgICAgIGVsLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgIHZhciBjbGFzc2VzID0gYXR0ci51aVRvZ2dsZUNsYXNzLnNwbGl0KCcsJyksXHJcbiAgICAgICAgICAgICAgdGFyZ2V0cyA9IChhdHRyLnRhcmdldCAmJiBhdHRyLnRhcmdldC5zcGxpdCgnLCcpKSB8fCBBcnJheShlbCksXHJcbiAgICAgICAgICAgICAga2V5ID0gMDtcclxuICAgICAgICAgIGFuZ3VsYXIuZm9yRWFjaChjbGFzc2VzLCBmdW5jdGlvbiggX2NsYXNzICkge1xyXG4gICAgICAgICAgICB2YXIgdGFyZ2V0ID0gdGFyZ2V0c1sodGFyZ2V0cy5sZW5ndGggJiYga2V5KV07ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICggX2NsYXNzLmluZGV4T2YoICcqJyApICE9PSAtMSApICYmIG1hZ2ljKF9jbGFzcywgdGFyZ2V0KTtcclxuICAgICAgICAgICAgJCggdGFyZ2V0ICkudG9nZ2xlQ2xhc3MoX2NsYXNzKTtcclxuICAgICAgICAgICAga2V5ICsrO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICAkKGVsKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcblxyXG4gICAgICAgICAgZnVuY3Rpb24gbWFnaWMoX2NsYXNzLCB0YXJnZXQpe1xyXG4gICAgICAgICAgICB2YXIgcGF0dCA9IG5ldyBSZWdFeHAoICdcXFxccycgKyBcclxuICAgICAgICAgICAgICAgIF9jbGFzcy5cclxuICAgICAgICAgICAgICAgICAgcmVwbGFjZSggL1xcKi9nLCAnW0EtWmEtejAtOS1fXSsnICkuXHJcbiAgICAgICAgICAgICAgICAgIHNwbGl0KCAnICcgKS5cclxuICAgICAgICAgICAgICAgICAgam9pbiggJ1xcXFxzfFxcXFxzJyApICsgXHJcbiAgICAgICAgICAgICAgICAnXFxcXHMnLCAnZycgKTtcclxuICAgICAgICAgICAgdmFyIGNuID0gJyAnICsgJCh0YXJnZXQpWzBdLmNsYXNzTmFtZSArICcgJztcclxuICAgICAgICAgICAgd2hpbGUgKCBwYXR0LnRlc3QoIGNuICkgKSB7XHJcbiAgICAgICAgICAgICAgY24gPSBjbi5yZXBsYWNlKCBwYXR0LCAnICcgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAkKHRhcmdldClbMF0uY2xhc3NOYW1lID0gJC50cmltKCBjbiApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH1dKTsiLCIndXNlIHN0cmljdCc7XHJcblxyXG4vKipcclxuICogR2VuZXJhbC1wdXJwb3NlIHZhbGlkYXRvciBmb3IgbmdNb2RlbC5cclxuICogYW5ndWxhci5qcyBjb21lcyB3aXRoIHNldmVyYWwgYnVpbHQtaW4gdmFsaWRhdGlvbiBtZWNoYW5pc20gZm9yIGlucHV0IGZpZWxkcyAobmdSZXF1aXJlZCwgbmdQYXR0ZXJuIGV0Yy4pIGJ1dCB1c2luZ1xyXG4gKiBhbiBhcmJpdHJhcnkgdmFsaWRhdGlvbiBmdW5jdGlvbiByZXF1aXJlcyBjcmVhdGlvbiBvZiBhIGN1c3RvbSBmb3JtYXR0ZXJzIGFuZCAvIG9yIHBhcnNlcnMuXHJcbiAqIFRoZSB1aS12YWxpZGF0ZSBkaXJlY3RpdmUgbWFrZXMgaXQgZWFzeSB0byB1c2UgYW55IGZ1bmN0aW9uKHMpIGRlZmluZWQgaW4gc2NvcGUgYXMgYSB2YWxpZGF0b3IgZnVuY3Rpb24ocykuXHJcbiAqIEEgdmFsaWRhdG9yIGZ1bmN0aW9uIHdpbGwgdHJpZ2dlciB2YWxpZGF0aW9uIG9uIGJvdGggbW9kZWwgYW5kIGlucHV0IGNoYW5nZXMuXHJcbiAqXHJcbiAqIEBleGFtcGxlIDxpbnB1dCB1aS12YWxpZGF0ZT1cIiAnbXlWYWxpZGF0b3JGdW5jdGlvbigkdmFsdWUpJyBcIj5cclxuICogQGV4YW1wbGUgPGlucHV0IHVpLXZhbGlkYXRlPVwieyBmb28gOiAnJHZhbHVlID4gYW5vdGhlck1vZGVsJywgYmFyIDogJ3ZhbGlkYXRlRm9vKCR2YWx1ZSknIH1cIj5cclxuICogQGV4YW1wbGUgPGlucHV0IHVpLXZhbGlkYXRlPVwieyBmb28gOiAnJHZhbHVlID4gYW5vdGhlck1vZGVsJyB9XCIgdWktdmFsaWRhdGUtd2F0Y2g9XCIgJ2Fub3RoZXJNb2RlbCcgXCI+XHJcbiAqIEBleGFtcGxlIDxpbnB1dCB1aS12YWxpZGF0ZT1cInsgZm9vIDogJyR2YWx1ZSA+IGFub3RoZXJNb2RlbCcsIGJhciA6ICd2YWxpZGF0ZUZvbygkdmFsdWUpJyB9XCIgdWktdmFsaWRhdGUtd2F0Y2g9XCIgeyBmb28gOiAnYW5vdGhlck1vZGVsJyB9IFwiPlxyXG4gKlxyXG4gKiBAcGFyYW0gdWktdmFsaWRhdGUge3N0cmluZ3xvYmplY3QgbGl0ZXJhbH0gSWYgc3RyaW5ncyBpcyBwYXNzZWQgaXQgc2hvdWxkIGJlIGEgc2NvcGUncyBmdW5jdGlvbiB0byBiZSB1c2VkIGFzIGEgdmFsaWRhdG9yLlxyXG4gKiBJZiBhbiBvYmplY3QgbGl0ZXJhbCBpcyBwYXNzZWQgYSBrZXkgZGVub3RlcyBhIHZhbGlkYXRpb24gZXJyb3Iga2V5IHdoaWxlIGEgdmFsdWUgc2hvdWxkIGJlIGEgdmFsaWRhdG9yIGZ1bmN0aW9uLlxyXG4gKiBJbiBib3RoIGNhc2VzIHZhbGlkYXRvciBmdW5jdGlvbiBzaG91bGQgdGFrZSBhIHZhbHVlIHRvIHZhbGlkYXRlIGFzIGl0cyBhcmd1bWVudCBhbmQgc2hvdWxkIHJldHVybiB0cnVlL2ZhbHNlIGluZGljYXRpbmcgYSB2YWxpZGF0aW9uIHJlc3VsdC5cclxuICovXHJcbmFuZ3VsYXIubW9kdWxlKCd1aS52YWxpZGF0ZScsW10pLmRpcmVjdGl2ZSgndWlWYWxpZGF0ZScsIGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHJlc3RyaWN0OiAnQScsXHJcbiAgICByZXF1aXJlOiAnbmdNb2RlbCcsXHJcbiAgICBsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsbSwgYXR0cnMsIGN0cmwpIHtcclxuICAgICAgdmFyIHZhbGlkYXRlRm4sIHZhbGlkYXRvcnMgPSB7fSxcclxuICAgICAgICAgIHZhbGlkYXRlRXhwciA9IHNjb3BlLiRldmFsKGF0dHJzLnVpVmFsaWRhdGUpO1xyXG5cclxuICAgICAgaWYgKCF2YWxpZGF0ZUV4cHIpeyByZXR1cm47fVxyXG5cclxuICAgICAgaWYgKGFuZ3VsYXIuaXNTdHJpbmcodmFsaWRhdGVFeHByKSkge1xyXG4gICAgICAgIHZhbGlkYXRlRXhwciA9IHsgdmFsaWRhdG9yOiB2YWxpZGF0ZUV4cHIgfTtcclxuICAgICAgfVxyXG5cclxuICAgICAgYW5ndWxhci5mb3JFYWNoKHZhbGlkYXRlRXhwciwgZnVuY3Rpb24gKGV4cHJzc24sIGtleSkge1xyXG4gICAgICAgIHZhbGlkYXRlRm4gPSBmdW5jdGlvbiAodmFsdWVUb1ZhbGlkYXRlKSB7XHJcbiAgICAgICAgICB2YXIgZXhwcmVzc2lvbiA9IHNjb3BlLiRldmFsKGV4cHJzc24sIHsgJyR2YWx1ZScgOiB2YWx1ZVRvVmFsaWRhdGUgfSk7XHJcbiAgICAgICAgICBpZiAoYW5ndWxhci5pc09iamVjdChleHByZXNzaW9uKSAmJiBhbmd1bGFyLmlzRnVuY3Rpb24oZXhwcmVzc2lvbi50aGVuKSkge1xyXG4gICAgICAgICAgICAvLyBleHByZXNzaW9uIGlzIGEgcHJvbWlzZVxyXG4gICAgICAgICAgICBleHByZXNzaW9uLnRoZW4oZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICBjdHJsLiRzZXRWYWxpZGl0eShrZXksIHRydWUpO1xyXG4gICAgICAgICAgICB9LCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgIGN0cmwuJHNldFZhbGlkaXR5KGtleSwgZmFsc2UpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlVG9WYWxpZGF0ZTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoZXhwcmVzc2lvbikge1xyXG4gICAgICAgICAgICAvLyBleHByZXNzaW9uIGlzIHRydWVcclxuICAgICAgICAgICAgY3RybC4kc2V0VmFsaWRpdHkoa2V5LCB0cnVlKTtcclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlVG9WYWxpZGF0ZTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIGV4cHJlc3Npb24gaXMgZmFsc2VcclxuICAgICAgICAgICAgY3RybC4kc2V0VmFsaWRpdHkoa2V5LCBmYWxzZSk7XHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZVRvVmFsaWRhdGU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB2YWxpZGF0b3JzW2tleV0gPSB2YWxpZGF0ZUZuO1xyXG4gICAgICAgIGN0cmwuJGZvcm1hdHRlcnMucHVzaCh2YWxpZGF0ZUZuKTtcclxuICAgICAgICBjdHJsLiRwYXJzZXJzLnB1c2godmFsaWRhdGVGbik7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgZnVuY3Rpb24gYXBwbHlfd2F0Y2god2F0Y2gpXHJcbiAgICAgIHtcclxuICAgICAgICAgIC8vc3RyaW5nIC0gdXBkYXRlIGFsbCB2YWxpZGF0b3JzIG9uIGV4cHJlc3Npb24gY2hhbmdlXHJcbiAgICAgICAgICBpZiAoYW5ndWxhci5pc1N0cmluZyh3YXRjaCkpXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgc2NvcGUuJHdhdGNoKHdhdGNoLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICBhbmd1bGFyLmZvckVhY2godmFsaWRhdG9ycywgZnVuY3Rpb24odmFsaWRhdG9yRm4pe1xyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yRm4oY3RybC4kbW9kZWxWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvL2FycmF5IC0gdXBkYXRlIGFsbCB2YWxpZGF0b3JzIG9uIGNoYW5nZSBvZiBhbnkgZXhwcmVzc2lvblxyXG4gICAgICAgICAgaWYgKGFuZ3VsYXIuaXNBcnJheSh3YXRjaCkpXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgYW5ndWxhci5mb3JFYWNoKHdhdGNoLCBmdW5jdGlvbihleHByZXNzaW9uKXtcclxuICAgICAgICAgICAgICAgICAgc2NvcGUuJHdhdGNoKGV4cHJlc3Npb24sIGZ1bmN0aW9uKClcclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgYW5ndWxhci5mb3JFYWNoKHZhbGlkYXRvcnMsIGZ1bmN0aW9uKHZhbGlkYXRvckZuKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3JGbihjdHJsLiRtb2RlbFZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLy9vYmplY3QgLSB1cGRhdGUgYXBwcm9wcmlhdGUgdmFsaWRhdG9yXHJcbiAgICAgICAgICBpZiAoYW5ndWxhci5pc09iamVjdCh3YXRjaCkpXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgYW5ndWxhci5mb3JFYWNoKHdhdGNoLCBmdW5jdGlvbihleHByZXNzaW9uLCB2YWxpZGF0b3JLZXkpXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAvL3ZhbHVlIGlzIHN0cmluZyAtIGxvb2sgYWZ0ZXIgb25lIGV4cHJlc3Npb25cclxuICAgICAgICAgICAgICAgICAgaWYgKGFuZ3VsYXIuaXNTdHJpbmcoZXhwcmVzc2lvbikpXHJcbiAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHNjb3BlLiR3YXRjaChleHByZXNzaW9uLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcnNbdmFsaWRhdG9yS2V5XShjdHJsLiRtb2RlbFZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAvL3ZhbHVlIGlzIGFycmF5IC0gbG9vayBhZnRlciBhbGwgZXhwcmVzc2lvbnMgaW4gYXJyYXlcclxuICAgICAgICAgICAgICAgICAgaWYgKGFuZ3VsYXIuaXNBcnJheShleHByZXNzaW9uKSlcclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgYW5ndWxhci5mb3JFYWNoKGV4cHJlc3Npb24sIGZ1bmN0aW9uKGludEV4cHJlc3Npb24pXHJcbiAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGUuJHdhdGNoKGludEV4cHJlc3Npb24sIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcnNbdmFsaWRhdG9yS2V5XShjdHJsLiRtb2RlbFZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLy8gU3VwcG9ydCBmb3IgdWktdmFsaWRhdGUtd2F0Y2hcclxuICAgICAgaWYgKGF0dHJzLnVpVmFsaWRhdGVXYXRjaCl7XHJcbiAgICAgICAgICBhcHBseV93YXRjaCggc2NvcGUuJGV2YWwoYXR0cnMudWlWYWxpZGF0ZVdhdGNoKSApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxufSk7XHJcbiIsIi8vIOe/u+ivkeW/q+aNt+aWueW8j1xyXG52YXIgVCA9IHt9O1xyXG4vLyDmnKzlnLDlrZjlgqjlv6vmjbfmlrnlvI9cclxudmFyIFMgPSB7fTtcclxuYXBwLnJ1bihbJyR0cmFuc2xhdGUnLCAnJGxvY2FsU3RvcmFnZScsXHJcbiAgICAgICAgZnVuY3Rpb24gKCR0cmFuc2xhdGUsICRsb2NhbFN0b3JhZ2UpIHtcclxuICAgICAgICAgICAgLy8g5a6a5LmJ57+76K+R5b+r5o235pa55byPXHJcbiAgICAgICAgICAgIFQgPSBmdW5jdGlvbiAoa2V5KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJHRyYW5zbGF0ZS5pbnN0YW50KGtleSk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBTID0gJGxvY2FsU3RvcmFnZTtcclxuICAgICAgICB9XHJcbiAgICBdKTtcclxuXHJcblxyXG52YXIgdmlldyA9IHtcclxuICAgIGxvYWRpbmdfZGlhbG9nOiBudWxsLFxyXG4gICAgbG9hZGluZ19udW06IDBcclxufTtcclxuXHJcbi8vIGRpYWxvZ1xyXG52aWV3LmRpYWxvZyA9IGZ1bmN0aW9uIChvcHQpIHtcclxuICAgIHZhciB0aXRsZSA9IG9wdC50aXRsZSB8fCBUKFwiZGlhbG9nLkRJQUxPR1wiKSxcclxuICAgICAgICBjb250ZW50ID0gb3B0LmNvbnRlbnQgfHwgXCJcIixcclxuICAgICAgICBva19idG4gPSBvcHQub2tfYnRuLFxyXG4gICAgICAgIGNhbmNlbF9idG4gPSBvcHQuY2FuY2VsX2J0bixcclxuICAgICAgICBjbG9zZV9idG4gPSBvcHQuY2xvc2VfYnRuLFxyXG4gICAgICAgIG9rX2ZuID0gb3B0Lm9rX2ZuIHx8IG51bGwsXHJcbiAgICAgICAgY2FuY2VsX2ZuID0gb3B0LmNhbmNlbF9mbiB8fCBudWxsLFxyXG4gICAgICAgIHByZV9mbiA9IG9wdC5wcmVfZm4gfHwgbnVsbCxcclxuICAgICAgICBkaWFsb2cgPSBudWxsLFxyXG4gICAgICAgIGRpYWxvZ19odG1sID0gJzxkaXYgY2xhc3M9XCJtb2RhbCBmYWRlXCI+XFxcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWRpYWxvZ1wiPlxcXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+XFxcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlclwiPlxcXHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2xvc2VcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiPjxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+PC9idXR0b24+XFxcclxuICAgICAgICA8aDQgY2xhc3M9XCJtb2RhbC10aXRsZVwiPicgKyB0aXRsZSArICc8L2g0PlxcXHJcbiAgICAgICAgICAgIDwvZGl2PlxcXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1ib2R5XCI+JyArIGNvbnRlbnQgKyAnPC9kaXY+XFxcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWZvb3RlclwiPic7XHJcblxyXG4gICAgaWYgKGNhbmNlbF9idG4pIHtcclxuICAgICAgICBkaWFsb2dfaHRtbCArPSAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgZGlhbG9nX2J0biBjYW5jZWxcIj4nICsgVChcImJ1dHRvbi5DQU5DRUxcIikgKyAnPC9idXR0b24+JztcclxuICAgIH1cclxuXHJcbiAgICBpZiAob2tfYnRuKSB7XHJcbiAgICAgICAgZGlhbG9nX2h0bWwgKz0gJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGRpYWxvZ19idG4gb2tcIj4nICsgVChcImJ1dHRvbi5PS1wiKSArICc8L2J1dHRvbj4nO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjbG9zZV9idG4pIHtcclxuICAgICAgICBkaWFsb2dfaHRtbCArPSAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgZGlhbG9nX2J0biBva1wiPicgKyBUKFwiYnV0dG9uLkNMT1NFXCIpICsgJzwvYnV0dG9uPic7XHJcbiAgICB9XHJcblxyXG4gICAgZGlhbG9nX2h0bWwgKz0gJzwvZGl2PjwvZGl2PjwvZGl2PjwvZGl2Pic7XHJcblxyXG4gICAgZGlhbG9nID0gJChkaWFsb2dfaHRtbCk7XHJcblxyXG4gICAgZGlhbG9nXHJcbiAgICAgICAgLm9uKCdzaG93LmJzLm1vZGFsJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgaWYgKG9wdC53aWR0aCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGNzcyA9IHtcclxuICAgICAgICAgICAgICAgICAgICAnd2lkdGgnOiBvcHQud2lkdGggKyAncHgnXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5jaGlsZHJlbihcIi5tb2RhbC1kaWFsb2dcIikuY3NzKGNzcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcHJlX2ZuICYmIHByZV9mbigkKHRoaXMpKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5vbihcInNob3duLmJzLm1vZGFsXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAub24oXCJoaWRlLmJzLm1vZGFsXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAub24oXCJoaWRkZW4uYnMubW9kYWxcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgZGlhbG9nLnJlbW92ZSgpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLm9uKFwiY2xpY2tcIiwgXCIuZGlhbG9nX2J0blwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKFwib2tcIikpIHtcclxuICAgICAgICAgICAgICAgIG9rX2ZuICYmIG9rX2ZuKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKFwiY2FuY2VsXCIpKSB7XHJcbiAgICAgICAgICAgICAgICBjYW5jZWxfZm4gJiYgY2FuY2VsX2ZuKCk7XHJcbiAgICAgICAgICAgICAgICBkaWFsb2cubW9kYWwoXCJoaWRlXCIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIW9wdC5wcmV2ZW50X2F1dG9faGlkZSB8fCBvcHQucHJldmVudF9hdXRvX2hpZGUgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgIGRpYWxvZy5tb2RhbChcImhpZGVcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC5vbignc2hvd24nLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHByZV9mbiAmJiBwcmVfZm4oJCh0aGlzKSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAubW9kYWwoJ3Nob3cnKTtcclxuXHJcbiAgICBkaWFsb2cuY2xvc2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCh0aGlzKS5tb2RhbCgnaGlkZScpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gZGlhbG9nO1xyXG59O1xyXG5cclxuLy8gbG9hZGluZ1xyXG52aWV3LmxvYWRpbmcgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAodmlldy5sb2FkaW5nX2RpYWxvZyA9PSBudWxsKSB7XHJcbiAgICAgICAgdmFyIG9wdCA9IHtcclxuICAgICAgICAgICAgdGl0bGU6IFQoXCJkaWFsb2cuQUxFUlRcIiksXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiPGltZyBzcmM9J2ltZy9sb2FkaW5nLmdpZicvPiA8c3BhbiBzdHlsZT0nZm9udC1zaXplOiAxOHB4Oyc+XCIgKyBUKFwiZGlhbG9nLkxPQURJTkdcIikgKyBcIjwvc3Bhbj5cIixcclxuICAgICAgICAgICAgb2tfYnRuOiBmYWxzZSxcclxuICAgICAgICAgICAgY2FuY2VsX2J0bjogZmFsc2VcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB2aWV3LmxvYWRpbmdfZGlhbG9nID0gdmlldy5kaWFsb2cob3B0KTtcclxuICAgIH1cclxuXHJcbiAgICB2aWV3LmxvYWRpbmdfbnVtKys7XHJcbn07XHJcblxyXG4vLyDlhbPpl61sb2FkaW5nXHJcbnZpZXcuY2xvc2VfbG9hZGluZyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZpZXcubG9hZGluZ19udW0tLTtcclxuXHJcbiAgICBpZiAodmlldy5sb2FkaW5nX2RpYWxvZyAhPSBudWxsICYmIHZpZXcubG9hZGluZ19udW0gPT0gMCkge1xyXG4gICAgICAgIHZpZXcubG9hZGluZ19kaWFsb2cuY2xvc2UoKTtcclxuICAgICAgICB2aWV3LmxvYWRpbmdfZGlhbG9nID0gbnVsbDtcclxuICAgIH1cclxufTtcclxuXHJcbi8vIGFsZXJ0XHJcbnZpZXcuYWxlcnQgPSBmdW5jdGlvbiAobXNnLCBvaykge1xyXG4gICAgdmFyIG9wdCA9IHtcclxuICAgICAgICB0aXRsZTogVChcImRpYWxvZy5BTEVSVFwiKSxcclxuICAgICAgICBjb250ZW50OiBcIlwiICsgbXNnICsgXCJcIixcclxuICAgICAgICBjbG9zZV9idG46IHRydWUsXHJcbiAgICAgICAgb2tfZm46IG9rXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB2aWV3LmRpYWxvZyhvcHQpO1xyXG59O1xyXG5cclxuLy8gc2hvd1xyXG52aWV3LnNob3cgPSBmdW5jdGlvbiAobXNnLCB0aXRsZSwgd2lkdGgsIG9rLCBjYW5jZWwpIHtcclxuICAgIHZhciBvcHQgPSB7XHJcbiAgICAgICAgdGl0bGU6IFQoXCJkaWFsb2cuQUxFUlRcIiksXHJcbiAgICAgICAgY29udGVudDogXCI8cCBzdHlsZT0nd29yZC13cmFwOmJyZWFrLXdvcmQnPlwiICsgbXNnICsgXCI8L3A+XCIsXHJcbiAgICAgICAgY2xvc2VfYnRuOiB0cnVlLFxyXG4gICAgICAgIG9rX2ZuOiBvayxcclxuICAgICAgICBjYW5jZWxfZm46IGNhbmNlbFxyXG4gICAgfTtcclxuXHJcbiAgICBpZiAodGl0bGUgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgb3B0LnRpdGxlID0gdGl0bGU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHdpZHRoICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIG9wdC53aWR0aCA9IHdpZHRoO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB2aWV3LmRpYWxvZyhvcHQpO1xyXG59O1xyXG5cclxuLy8gY29uZmlybVxyXG52aWV3LmNvbmZpcm0gPSBmdW5jdGlvbiAoY29udGVudCwgb2ssIGNhbmNlbCkge1xyXG5cclxuICAgIHZhciBvcHQgPSB7XHJcbiAgICAgICAgdGl0bGU6IFQoXCJkaWFsb2cuQUxFUlRcIiksXHJcbiAgICAgICAgY29udGVudDogJzxzcGFuIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1leGNsYW1hdGlvbi1zaWduXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+ICcgKyBjb250ZW50ICsgJzwvc3Bhbj4nLFxyXG4gICAgICAgIG9rX2J0bjogdHJ1ZSxcclxuICAgICAgICBjYW5jZWxfYnRuOiB0cnVlLFxyXG4gICAgICAgIG9rX2ZuOiBvayxcclxuICAgICAgICBjYW5jZWxfZm46IGNhbmNlbFxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gdmlldy5kaWFsb2cob3B0KTtcclxufTtcclxuXHJcbi8vIHByb21wdFxyXG52aWV3LnByb21wdCA9IGZ1bmN0aW9uICh0aXRsZSwgZGVmYXVsdF92YWwsIG9rLCBjYW5jZWwpIHtcclxuICAgIHZhciBva19mbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgdmFsdWUgPSAkKFwiI3Byb21wdF9pbnB1dFwiKS52YWwoKTtcclxuICAgICAgICBvayh2YWx1ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBjb250ZW50ID0gJzxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJwcm9tcHRfaW5wdXRcIj4nO1xyXG4gICAgaWYgKGRlZmF1bHRfdmFsICE9IG51bGwgJiYgZGVmYXVsdF92YWwgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgY29udGVudCA9ICc8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwicHJvbXB0X2lucHV0XCIgdmFsdWU9XCInICsgZGVmYXVsdF92YWwgKyAnXCI+JztcclxuICAgIH1cclxuXHJcbiAgICB2YXIgb3B0ID0ge1xyXG4gICAgICAgIHRpdGxlOiB0aXRsZSxcclxuICAgICAgICBjb250ZW50OiBjb250ZW50LFxyXG4gICAgICAgIG9rX2J0bjogdHJ1ZSxcclxuICAgICAgICBjYW5jZWxfYnRuOiB0cnVlLFxyXG4gICAgICAgIG9rX2ZuOiBva19mbixcclxuICAgICAgICBjYW5jZWxfZm46IGNhbmNlbFxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gdmlldy5kaWFsb2cob3B0KTtcclxufTtcclxuXHJcbi8vIHByb21wdF90aW1lXHJcbnZpZXcucHJvbXB0X3RpbWUgPSBmdW5jdGlvbiAodGl0bGUsIG9rLCBjYW5jZWwpIHtcclxuICAgIHZhciBva19mbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgdmFsdWUgPSAkKFwiI3Byb21wdF9pbnB1dFwiKS52YWwoKTtcclxuICAgICAgICBvayh2YWx1ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBvcHQgPSB7XHJcbiAgICAgICAgdGl0bGU6IHRpdGxlLFxyXG4gICAgICAgIGNvbnRlbnQ6ICc8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGRhdGEtZGF0ZS1mb3JtYXQ9XCJ5eXl5LW1tLWRkIGhoOmlpOnNzXCIgaWQ9XCJwcm9tcHRfaW5wdXRcIj4nLFxyXG4gICAgICAgIG9rX2J0bjogdHJ1ZSxcclxuICAgICAgICBjYW5jZWxfYnRuOiB0cnVlLFxyXG4gICAgICAgIG9rX2ZuOiBva19mbixcclxuICAgICAgICBjYW5jZWxfZm46IGNhbmNlbFxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gdmlldy5kaWFsb2cob3B0KTtcclxufTtcclxuXHJcbi8vIHByb21wdF90ZXh0YXJlYVxyXG52aWV3LnByb21wdF90ZXh0YXJlYSA9IGZ1bmN0aW9uICh0aXRsZSwgb2ssIGNhbmNlbCwgdmFsdWUpIHtcclxuICAgIHZhbHVlID0gdmFsdWUgfHwgXCJcIjtcclxuXHJcbiAgICB2YXIgb2tfZm4gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHZhbHVlID0gJChcIiNwcm9tcHRfaW5wdXRcIikudmFsKCk7XHJcbiAgICAgICAgb2sodmFsdWUpO1xyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgb3B0ID0ge1xyXG4gICAgICAgIHRpdGxlOiB0aXRsZSxcclxuICAgICAgICBjb250ZW50OiAnPHRleHRhcmVhIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJwcm9tcHRfaW5wdXRcIj4nICsgdmFsdWUgKyAnPC90ZXh0YXJlYT4nLFxyXG4gICAgICAgIG9rX2J0bjogdHJ1ZSxcclxuICAgICAgICBjYW5jZWxfYnRuOiB0cnVlLFxyXG4gICAgICAgIG9rX2ZuOiBva19mbixcclxuICAgICAgICBjYW5jZWxfZm46IGNhbmNlbFxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gdmlldy5kaWFsb2cob3B0KTtcclxufTtcclxuXHJcbnZhciB1dGlscyA9IHt9O1xyXG5cclxudXRpbHMuZXhwb3J0RXhjZWwgPSBmdW5jdGlvbiAocGFyYW1zLCB1cmwsIG1ldGhvZCkge1xyXG4gICAgaWYgKHBhcmFtcykge1xyXG4gICAgICAgIC8vIHBhcmFtcyDmmK8gc3RyaW5nIOaIluiAhSBhcnJheS9vYmplY3RcclxuICAgICAgICBpZiAodHlwZW9mIHBhcmFtcyA9PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICBwYXJhbXMgPSB7fTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcGFyYW1zWydleHBvcnQnXSA9IDE7XHJcbiAgICAgICAgLy8g5oqK5Y+C5pWw57uE6KOF5oiQIGZvcm3nmoQgIGlucHV0XHJcbiAgICAgICAgdmFyIGlucHV0cyA9IFtdO1xyXG4gICAgICAgICQuZWFjaChwYXJhbXMsIGZ1bmN0aW9uIChrLCB2KSB7XHJcbiAgICAgICAgICAgIGlmICh2ID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlucHV0cy5wdXNoKCc8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCInICsgayArICdcIiB2YWx1ZT1cIicgKyB2ICsgJ1wiIC8+Jyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJChkb2N1bWVudCkub2ZmKCdzdWJtaXQnKTtcclxuICAgICAgICAkKCc8Zm9ybSBpZD1cImRvd25sb2FkXCIgYWN0aW9uPVwiJyArICh1cmwgfHwgJ2luZGV4LnBocCcpICsgJ1wiIG1ldGhvZD1cIicgKyAobWV0aG9kIHx8IFwicG9zdFwiKSArICdcIiB0YXJnZXQ9XCJfYmxhbmtcIj4nICsgaW5wdXRzLmpvaW4oJycpICsgJzwvZm9ybT4nKVxyXG4gICAgICAgICAgICAuYXBwZW5kVG8oJ2JvZHknKS5zdWJtaXQoKS5yZW1vdmUoKTtcclxuICAgICAgICAkKGRvY3VtZW50KS5vbignc3VibWl0JywgZmFsc2UpO1xyXG4gICAgfVxyXG59O1xyXG5cclxudXRpbHMuYmFzZTY0VG9CbG9iID0gZnVuY3Rpb24oYmFzZTY0RGF0YSwgY29udGVudFR5cGUpIHtcclxuICAgIGNvbnRlbnRUeXBlID0gY29udGVudFR5cGUgfHwgJyc7XHJcbiAgICB2YXIgc2xpY2VTaXplID0gMTAyNDtcclxuICAgIHZhciBieXRlQ2hhcmFjdGVycyA9IGF0b2IoYmFzZTY0RGF0YSk7XHJcbiAgICB2YXIgYnl0ZXNMZW5ndGggPSBieXRlQ2hhcmFjdGVycy5sZW5ndGg7XHJcbiAgICB2YXIgc2xpY2VzQ291bnQgPSBNYXRoLmNlaWwoYnl0ZXNMZW5ndGggLyBzbGljZVNpemUpO1xyXG4gICAgdmFyIGJ5dGVBcnJheXMgPSBuZXcgQXJyYXkoc2xpY2VzQ291bnQpO1xyXG5cclxuICAgIGZvciAodmFyIHNsaWNlSW5kZXggPSAwOyBzbGljZUluZGV4IDwgc2xpY2VzQ291bnQ7ICsrc2xpY2VJbmRleCkge1xyXG4gICAgICAgIHZhciBiZWdpbiA9IHNsaWNlSW5kZXggKiBzbGljZVNpemU7XHJcbiAgICAgICAgdmFyIGVuZCA9IE1hdGgubWluKGJlZ2luICsgc2xpY2VTaXplLCBieXRlc0xlbmd0aCk7XHJcblxyXG4gICAgICAgIHZhciBieXRlcyA9IG5ldyBBcnJheShlbmQgLSBiZWdpbik7XHJcbiAgICAgICAgZm9yICh2YXIgb2Zmc2V0ID0gYmVnaW4sIGkgPSAwIDsgb2Zmc2V0IDwgZW5kOyArK2ksICsrb2Zmc2V0KSB7XHJcbiAgICAgICAgICAgIGJ5dGVzW2ldID0gYnl0ZUNoYXJhY3RlcnNbb2Zmc2V0XS5jaGFyQ29kZUF0KDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBieXRlQXJyYXlzW3NsaWNlSW5kZXhdID0gbmV3IFVpbnQ4QXJyYXkoYnl0ZXMpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5ldyBCbG9iKGJ5dGVBcnJheXMsIHsgdHlwZTogY29udGVudFR5cGUgfSk7XHJcbn07XHJcblxyXG4iLCJhbmd1bGFyLm1vZHVsZSgnaHR0cFNlcnZpY2UnLCBbXSkuXHJcbiAgICBzZXJ2aWNlKCdtb2NrU2VydmljZScsIFsnJHEnLCAnJHRpbWVvdXQnLCAnJGh0dHAnLCAnJHN0YXRlJyxcclxuICAgICAgICBmdW5jdGlvbiAoJHEsICR0aW1lb3V0LCAkaHR0cCwgJHN0YXRlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0ID0gZnVuY3Rpb24gKHVybCwgcGFyYW1zKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xyXG4gICAgICAgICAgICAgICAgdXJsID0gXCIvbW9ja19kYXRhL1wiICsgdXJsICsgXCIuanNvblwiO1xyXG4gICAgICAgICAgICAgICAgLy92aWV3LmxvYWRpbmcoKTtcclxuICAgICAgICAgICAgICAgICRodHRwLmdldCh1cmwpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkID0gcmVzdWx0LmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGQuc3RhdHVzID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShkLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoZC5zdGF0dXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdmlldy5hbGVydChyZXN1bHQubXNnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyRzdGF0ZS5nbyhcImxvZ2luXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdChkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uICh4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy92aWV3LmNsb3NlX2xvYWRpbmcoKTtcclxuICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoVChcIm1zZy5zeXN0ZW1fZXJyb3JcIikpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfV0pO1xyXG5cclxuXHJcbmFuZ3VsYXIubW9kdWxlKCdodHRwU2VydmljZScsIFtdKS5cclxuICAgIHNlcnZpY2UoJ2RhdGFTZXJ2aWNlJywgWyckaHR0cCcsXHJcbiAgICAgICAgZnVuY3Rpb24gKCRodHRwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBnZXRsYWJpdGVtTGlzdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB1cmw9Jy9tb2NrX2RhdGEvbGlzdC5qc29uJztcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJGh0dHAuZ2V0KHVybCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZ2V0Q3Jpc2lzTGlzdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB1cmw9Jy9tb2NrX2RhdGEvbGlzdC5qc29uJztcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJGh0dHAuZ2V0KHVybCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZ2V0Q3Jpc2lzRGV0YWlsQnlJZDogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBnZXRNaWxkTGlzdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB1cmw9Jy9tb2NrX2RhdGEvbGlzdC5qc29uJztcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJGh0dHAuZ2V0KHVybCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZ2V0UmVxdWVzdExpc3Q6ZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdXJsPScvbW9ja19kYXRhL3JlcXVlc3RfbGlzdC5qc29uJztcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJGh0dHAuZ2V0KHVybCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfV0pOyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbi8qKlxyXG4gKiAwLjEuMVxyXG4gKiBEZWZlcnJlZCBsb2FkIGpzL2NzcyBmaWxlLCB1c2VkIGZvciB1aS1qcS5qcyBhbmQgTGF6eSBMb2FkaW5nLlxyXG4gKiBcclxuICogQCBmbGF0ZnVsbC5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICogQXV0aG9yIHVybDogI3VzZXIvZmxhdGZ1bGxcclxuICovXHJcblxyXG5hbmd1bGFyLm1vZHVsZSgndWkubG9hZCcsIFtdKVxyXG5cdC5zZXJ2aWNlKCd1aUxvYWQnLCBbJyRkb2N1bWVudCcsICckcScsICckdGltZW91dCcsIGZ1bmN0aW9uICgkZG9jdW1lbnQsICRxLCAkdGltZW91dCkge1xyXG5cclxuXHRcdHZhciBsb2FkZWQgPSBbXTtcclxuXHRcdHZhciBwcm9taXNlID0gZmFsc2U7XHJcblx0XHR2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogQ2hhaW4gbG9hZHMgdGhlIGdpdmVuIHNvdXJjZXNcclxuXHRcdCAqIEBwYXJhbSBzcmNzIGFycmF5LCBzY3JpcHQgb3IgY3NzXHJcblx0XHQgKiBAcmV0dXJucyB7Kn0gUHJvbWlzZSB0aGF0IHdpbGwgYmUgcmVzb2x2ZWQgb25jZSB0aGUgc291cmNlcyBoYXMgYmVlbiBsb2FkZWQuXHJcblx0XHQgKi9cclxuXHRcdHRoaXMubG9hZCA9IGZ1bmN0aW9uIChzcmNzKSB7XHJcblx0XHRcdHNyY3MgPSBhbmd1bGFyLmlzQXJyYXkoc3JjcykgPyBzcmNzIDogc3Jjcy5zcGxpdCgvXFxzKy8pO1xyXG5cdFx0XHR2YXIgc2VsZiA9IHRoaXM7XHJcblx0XHRcdGlmKCFwcm9taXNlKXtcclxuXHRcdFx0XHRwcm9taXNlID0gZGVmZXJyZWQucHJvbWlzZTtcclxuXHRcdFx0fVxyXG4gICAgICBhbmd1bGFyLmZvckVhY2goc3JjcywgZnVuY3Rpb24oc3JjKSB7XHJcbiAgICAgIFx0cHJvbWlzZSA9IHByb21pc2UudGhlbiggZnVuY3Rpb24oKXtcclxuICAgICAgXHRcdHJldHVybiBzcmMuaW5kZXhPZignLmNzcycpID49MCA/IHNlbGYubG9hZENTUyhzcmMpIDogc2VsZi5sb2FkU2NyaXB0KHNyYyk7XHJcbiAgICAgIFx0fSApO1xyXG4gICAgICB9KTtcclxuICAgICAgZGVmZXJyZWQucmVzb2x2ZSgpO1xyXG4gICAgICByZXR1cm4gcHJvbWlzZTtcclxuXHRcdH1cclxuXHJcblx0XHQvKipcclxuXHRcdCAqIER5bmFtaWNhbGx5IGxvYWRzIHRoZSBnaXZlbiBzY3JpcHRcclxuXHRcdCAqIEBwYXJhbSBzcmMgVGhlIHVybCBvZiB0aGUgc2NyaXB0IHRvIGxvYWQgZHluYW1pY2FsbHlcclxuXHRcdCAqIEByZXR1cm5zIHsqfSBQcm9taXNlIHRoYXQgd2lsbCBiZSByZXNvbHZlZCBvbmNlIHRoZSBzY3JpcHQgaGFzIGJlZW4gbG9hZGVkLlxyXG5cdFx0ICovXHJcblx0XHR0aGlzLmxvYWRTY3JpcHQgPSBmdW5jdGlvbiAoc3JjKSB7XHJcblx0XHRcdGlmKGxvYWRlZFtzcmNdKSByZXR1cm4gbG9hZGVkW3NyY10ucHJvbWlzZTtcclxuXHJcblx0XHRcdHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcblx0XHRcdHZhciBzY3JpcHQgPSAkZG9jdW1lbnRbMF0uY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcblx0XHRcdHNjcmlwdC5zcmMgPSBzcmM7XHJcblx0XHRcdHNjcmlwdC5vbmxvYWQgPSBmdW5jdGlvbiAoZSkge1xyXG5cdFx0XHRcdCR0aW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRcdGRlZmVycmVkLnJlc29sdmUoZSk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH07XHJcblx0XHRcdHNjcmlwdC5vbmVycm9yID0gZnVuY3Rpb24gKGUpIHtcclxuXHRcdFx0XHQkdGltZW91dChmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0XHRkZWZlcnJlZC5yZWplY3QoZSk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH07XHJcblx0XHRcdCRkb2N1bWVudFswXS5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdCk7XHJcblx0XHRcdGxvYWRlZFtzcmNdID0gZGVmZXJyZWQ7XHJcblxyXG5cdFx0XHRyZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuXHRcdH07XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBEeW5hbWljYWxseSBsb2FkcyB0aGUgZ2l2ZW4gQ1NTIGZpbGVcclxuXHRcdCAqIEBwYXJhbSBocmVmIFRoZSB1cmwgb2YgdGhlIENTUyB0byBsb2FkIGR5bmFtaWNhbGx5XHJcblx0XHQgKiBAcmV0dXJucyB7Kn0gUHJvbWlzZSB0aGF0IHdpbGwgYmUgcmVzb2x2ZWQgb25jZSB0aGUgQ1NTIGZpbGUgaGFzIGJlZW4gbG9hZGVkLlxyXG5cdFx0ICovXHJcblx0XHR0aGlzLmxvYWRDU1MgPSBmdW5jdGlvbiAoaHJlZikge1xyXG5cdFx0XHRpZihsb2FkZWRbaHJlZl0pIHJldHVybiBsb2FkZWRbaHJlZl0ucHJvbWlzZTtcclxuXHJcblx0XHRcdHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcblx0XHRcdHZhciBzdHlsZSA9ICRkb2N1bWVudFswXS5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XHJcblx0XHRcdHN0eWxlLnJlbCA9ICdzdHlsZXNoZWV0JztcclxuXHRcdFx0c3R5bGUudHlwZSA9ICd0ZXh0L2Nzcyc7XHJcblx0XHRcdHN0eWxlLmhyZWYgPSBocmVmO1xyXG5cdFx0XHRzdHlsZS5vbmxvYWQgPSBmdW5jdGlvbiAoZSkge1xyXG5cdFx0XHRcdCR0aW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRcdGRlZmVycmVkLnJlc29sdmUoZSk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH07XHJcblx0XHRcdHN0eWxlLm9uZXJyb3IgPSBmdW5jdGlvbiAoZSkge1xyXG5cdFx0XHRcdCR0aW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRcdGRlZmVycmVkLnJlamVjdChlKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fTtcclxuXHRcdFx0JGRvY3VtZW50WzBdLmhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xyXG5cdFx0XHRsb2FkZWRbaHJlZl0gPSBkZWZlcnJlZDtcclxuXHJcblx0XHRcdHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG5cdFx0fTtcclxufV0pOyIsImFuZ3VsYXIubW9kdWxlKCd1aURpcmVjdCcpXHJcbiAgICAuZGlyZWN0aXZlKCd1aUlucHV0JywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHJlc3RyaWN0OiAnRScsXHJcbiAgICAgICAgICAgIHNjb3BlOiB7XHJcbiAgICAgICAgICAgICAgICB2YWw6ICc9J1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICByZXBsYWNlOiB0cnVlLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9kaXJlY3RpdmVzL3dpZGdldC9pbnB1dC9pbnB1dC5odG1sJyxcclxuICAgICAgICAgICAgbGluazpmdW5jdGlvbigkc2NvcGUsIGVsZW0sIGF0dHIsIGN0cmwpe1xyXG5cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29udHJvbGxlcjogZnVuY3Rpb24gKCRzY29wZSwgJGVsZW1lbnQsICRhdHRycykge1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9KTtcclxuXHJcbiJdfQ==
