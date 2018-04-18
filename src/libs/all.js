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
    'httpService'
]);

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
        prefix: 'l10n/',
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
                        templateUrl: 'tpl/crisis/crisis_detail.html',
                        controller: 'CrisisDetailCtrl'
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
app.controller('CrisisListCtrl', ['$scope', '$state', function ($scope, $state) {
    var editTpl = '<button id="editBtn" type="button" class="btn-small" ng-click="grid.appScope.go(row.entity)" >Edit</button>';
    $scope.go = function (rowData) {
        $state.go('app.crisis_detail');
    }
    $scope.gridOptions = {
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
                cellTemplate: editTpl
            }
        ],
        data: [
            {
                'id': 1,
                'name': 'test001'
            },
            {
                'id': 2,
                'name': 'test002'
            },
            {
                'id': 3,
                'name': 'test003'
            },
            {
                'id': 4,
                'name': 'test004'
            }
        ]
    };

}]);

app.controller('CrisisDetailCtrl', ['$scope', function ($scope) {
    $scope.list = [{
        name: 'test01'
    }, {
        name: 'test02'
    }];

    $scope.selectedItem = {};
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsImNvbmZpZy5qcyIsImNvbmZpZy5sYXp5bG9hZC5qcyIsImNvbmZpZy5yb3V0ZXIuanMiLCJtYWluLmpzIiwiY29udHJvbGxlcnMvY3Jpc2lzQ3RybC5qcyIsInNlcnZpY2VzL2dsb2JhbC5qcyIsInNlcnZpY2VzL2h0dHBTZXJ2aWNlLmpzIiwic2VydmljZXMvdWktbG9hZC5qcyIsImRpcmVjdGl2ZXMvc2V0bmdhbmltYXRlLmpzIiwiZGlyZWN0aXZlcy91aS1idXR0ZXJiYXIuanMiLCJkaXJlY3RpdmVzL3VpLWZvY3VzLmpzIiwiZGlyZWN0aXZlcy91aS1mdWxsc2NyZWVuLmpzIiwiZGlyZWN0aXZlcy91aS1qcS5qcyIsImRpcmVjdGl2ZXMvdWktbW9kdWxlLmpzIiwiZGlyZWN0aXZlcy91aS1uYXYuanMiLCJkaXJlY3RpdmVzL3VpLXNjcm9sbC5qcyIsImRpcmVjdGl2ZXMvdWktc2hpZnQuanMiLCJkaXJlY3RpdmVzL3VpLXRvZ2dsZWNsYXNzLmpzIiwiZGlyZWN0aXZlcy91aS12YWxpZGF0ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNyREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNuREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDNVJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM1RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNyRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3BFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN6Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYWxsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxuXHJcbmFuZ3VsYXIubW9kdWxlKCdhcHAnLCBbXHJcbiAgICAnbmdBbmltYXRlJyxcclxuICAgICduZ0Nvb2tpZXMnLFxyXG4gICAgJ25nUmVzb3VyY2UnLFxyXG4gICAgJ25nU2FuaXRpemUnLFxyXG4gICAgJ25nVG91Y2gnLFxyXG4gICAgJ25nU3RvcmFnZScsXHJcbiAgICAndWkucm91dGVyJyxcclxuICAgICd1aS5ib290c3RyYXAnLFxyXG4gICAgJ3VpLmxvYWQnLFxyXG4gICAgJ3VpLmpxJyxcclxuICAgICd1aS52YWxpZGF0ZScsXHJcbiAgICAnb2MubGF6eUxvYWQnLFxyXG4gICAgJ3Bhc2NhbHByZWNodC50cmFuc2xhdGUnLFxyXG4gICAgJ3RvYXN0ZXInLFxyXG4gICAgJ3VpLmdyaWQnLFxyXG4gICAgJ3VpLmdyaWQuZWRpdCcsXHJcbiAgICAndWkuZ3JpZC5zZWxlY3Rpb24nLFxyXG4gICAgJ3VpLnNlbGVjdCcsXHJcbiAgICAvL2N1c3RvbVxyXG4gICAgJ2h0dHBTZXJ2aWNlJ1xyXG5dKTtcclxuIiwiLy8gY29uZmlnXG5cbnZhciBhcHAgPVxuICBhbmd1bGFyLm1vZHVsZSgnYXBwJykuY29uZmlnKFxuICAgIFsnJGNvbnRyb2xsZXJQcm92aWRlcicsICckY29tcGlsZVByb3ZpZGVyJywgJyRmaWx0ZXJQcm92aWRlcicsICckcHJvdmlkZScsXG4gICAgICBmdW5jdGlvbiAoJGNvbnRyb2xsZXJQcm92aWRlciwgJGNvbXBpbGVQcm92aWRlciwgJGZpbHRlclByb3ZpZGVyLCAkcHJvdmlkZSkge1xuXG4gICAgICAgIC8vIGxhenkgY29udHJvbGxlciwgZGlyZWN0aXZlIGFuZCBzZXJ2aWNlXG4gICAgICAgIGFwcC5jb250cm9sbGVyID0gJGNvbnRyb2xsZXJQcm92aWRlci5yZWdpc3RlcjtcbiAgICAgICAgYXBwLmRpcmVjdGl2ZSA9ICRjb21waWxlUHJvdmlkZXIuZGlyZWN0aXZlO1xuICAgICAgICBhcHAuZmlsdGVyID0gJGZpbHRlclByb3ZpZGVyLnJlZ2lzdGVyO1xuICAgICAgICBhcHAuZmFjdG9yeSA9ICRwcm92aWRlLmZhY3Rvcnk7XG4gICAgICAgIGFwcC5zZXJ2aWNlID0gJHByb3ZpZGUuc2VydmljZTtcbiAgICAgICAgYXBwLmNvbnN0YW50ID0gJHByb3ZpZGUuY29uc3RhbnQ7XG4gICAgICAgIGFwcC52YWx1ZSA9ICRwcm92aWRlLnZhbHVlO1xuICAgICAgfVxuICAgIF0pLmNvbmZpZyhbJyR0cmFuc2xhdGVQcm92aWRlcicsIGZ1bmN0aW9uICgkdHJhbnNsYXRlUHJvdmlkZXIpIHtcbiAgICAgICR0cmFuc2xhdGVQcm92aWRlci51c2VTdGF0aWNGaWxlc0xvYWRlcih7XG4gICAgICAgIHByZWZpeDogJ2wxMG4vJyxcbiAgICAgICAgc3VmZml4OiAnLmpzb24nXG4gICAgICB9KTtcbiAgICAgICR0cmFuc2xhdGVQcm92aWRlci5wcmVmZXJyZWRMYW5ndWFnZSgnemhfY24nKTtcbiAgICAgICR0cmFuc2xhdGVQcm92aWRlci51c2VMb2NhbFN0b3JhZ2UoKTtcbiAgICB9XSk7XG5cbi8vIOe/u+ivkeW/q+aNt+aWueW8j1xudmFyIFQgPSB7fTtcbi8vIOacrOWcsOWtmOWCqOW/q+aNt+aWueW8j1xudmFyIFMgPSB7fTtcbmFwcC5ydW4oWyckdHJhbnNsYXRlJywgJyRsb2NhbFN0b3JhZ2UnLFxuICAgICAgICBmdW5jdGlvbiAoJHRyYW5zbGF0ZSwgJGxvY2FsU3RvcmFnZSkge1xuICAgICAgICAgICAgLy8g5a6a5LmJ57+76K+R5b+r5o235pa55byPXG4gICAgICAgICAgICBUID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAkdHJhbnNsYXRlLmluc3RhbnQoa2V5KTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIFMgPSAkbG9jYWxTdG9yYWdlO1xuICAgICAgICB9XG4gICAgXSk7IiwiLy8gbGF6eWxvYWQgY29uZmlnXG5cbmFuZ3VsYXIubW9kdWxlKCdhcHAnKVxuICAuY29uc3RhbnQoJ0pRX0NPTkZJRycsIHtcbiAgICAgIGZpbGVzdHlsZTogICAgICBbJ3ZlbmRvcjIvanF1ZXJ5L2ZpbGUvYm9vdHN0cmFwLWZpbGVzdHlsZS5taW4uanMnXSxcbiAgICAgIHNsaWRlcjogICAgICAgICBbJ3ZlbmRvcjIvanF1ZXJ5L3NsaWRlci9ib290c3RyYXAtc2xpZGVyLmpzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ3ZlbmRvcjIvanF1ZXJ5L3NsaWRlci9zbGlkZXIuY3NzJ10sXG4gICAgICB3eXNpd3lnOiAgICAgICAgWyd2ZW5kb3IyL2pxdWVyeS93eXNpd3lnL2Jvb3RzdHJhcC13eXNpd3lnLmpzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ3ZlbmRvcjIvanF1ZXJ5L3d5c2l3eWcvanF1ZXJ5LmhvdGtleXMuanMnXSxcbiAgICAgIGNob3NlbjogICAgICAgICBbJ3ZlbmRvcjIvanF1ZXJ5L2Nob3Nlbi9jaG9zZW4uanF1ZXJ5Lm1pbi5qcycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICd2ZW5kb3IyL2pxdWVyeS9jaG9zZW4vY2hvc2VuLmNzcyddLFxuICAgICAgVG91Y2hTcGluOiAgICAgIFsndmVuZG9yMi9qcXVlcnkvc3Bpbm5lci9qcXVlcnkuYm9vdHN0cmFwLXRvdWNoc3Bpbi5taW4uanMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAndmVuZG9yMi9qcXVlcnkvc3Bpbm5lci9qcXVlcnkuYm9vdHN0cmFwLXRvdWNoc3Bpbi5jc3MnXSxcbiAgICAgIH1cbiAgKTsiLCIndXNlIHN0cmljdCc7XHJcblxyXG4vKipcclxuICogQ29uZmlnIGZvciB0aGUgcm91dGVyXHJcbiAqL1xyXG5hbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuICAgIC5ydW4oXHJcbiAgICAgICAgWyckcm9vdFNjb3BlJywgJyRzdGF0ZScsICckc3RhdGVQYXJhbXMnLFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoJHJvb3RTY29wZSwgJHN0YXRlLCAkc3RhdGVQYXJhbXMpIHtcclxuICAgICAgICAgICAgICAgICRyb290U2NvcGUuJHN0YXRlID0gJHN0YXRlO1xyXG4gICAgICAgICAgICAgICAgJHJvb3RTY29wZS4kc3RhdGVQYXJhbXMgPSAkc3RhdGVQYXJhbXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICApXHJcbiAgICAuY29uZmlnKFxyXG4gICAgICAgIFsnJHN0YXRlUHJvdmlkZXInLCAnJHVybFJvdXRlclByb3ZpZGVyJyxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvYXBwL2NyaXNpcycpO1xyXG5cclxuICAgICAgICAgICAgICAgICRzdGF0ZVByb3ZpZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgLnN0YXRlKCdhcHAnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFic3RyYWN0OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6ICcvYXBwJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICd0cGwvYXBwLmh0bWwnXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuc3RhdGUoJ2FwcC5ob21lJywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6ICcvaG9tZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAndHBsL2hvbWUuaHRtbCdcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdGF0ZSgnYXBwLmNyaXNpcycsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiAnL2NyaXNpcycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAndHBsL2NyaXNpcy9jcmlzaXNfbGlzdC5odG1sJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ0NyaXNpc0xpc3RDdHJsJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnN0YXRlKCdhcHAuY3Jpc2lzX2RldGFpbCcsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiAnL2NyaXNpc19kZXRhaWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3RwbC9jcmlzaXMvY3Jpc2lzX2RldGFpbC5odG1sJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ0NyaXNpc0RldGFpbEN0cmwnXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgICk7IiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuLyogQ29udHJvbGxlcnMgKi9cclxuXHJcbmFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4gIC5jb250cm9sbGVyKCdBcHBDdHJsJywgWyckc2NvcGUnLCAnJHRyYW5zbGF0ZScsICckbG9jYWxTdG9yYWdlJywgJyR3aW5kb3cnLCBcclxuICAgIGZ1bmN0aW9uKCAgICAgICAgICAgICAgJHNjb3BlLCAgICR0cmFuc2xhdGUsICAgJGxvY2FsU3RvcmFnZSwgICAkd2luZG93ICkge1xyXG4gICAgICAvLyBhZGQgJ2llJyBjbGFzc2VzIHRvIGh0bWxcclxuICAgICAgdmFyIGlzSUUgPSAhIW5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL01TSUUvaSk7XHJcbiAgICAgIGlzSUUgJiYgYW5ndWxhci5lbGVtZW50KCR3aW5kb3cuZG9jdW1lbnQuYm9keSkuYWRkQ2xhc3MoJ2llJyk7XHJcbiAgICAgIGlzU21hcnREZXZpY2UoICR3aW5kb3cgKSAmJiBhbmd1bGFyLmVsZW1lbnQoJHdpbmRvdy5kb2N1bWVudC5ib2R5KS5hZGRDbGFzcygnc21hcnQnKTtcclxuXHJcbiAgICAgIC8vIGNvbmZpZ1xyXG4gICAgICAkc2NvcGUuYXBwID0ge1xyXG4gICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICB0aGVtZUlEOiAxLFxyXG4gICAgICAgICAgbmF2YmFySGVhZGVyQ29sb3I6ICdiZy1ibGFjaycsXHJcbiAgICAgICAgICBuYXZiYXJDb2xsYXBzZUNvbG9yOiAnaGVhZC1saWdodGJsdWUnLFxyXG4gICAgICAgICAgYXNpZGVDb2xvcjogJ2FzaWRlLWJsdWUnLFxyXG4gICAgICAgICAgaGVhZGVyRml4ZWQ6IHRydWUsXHJcbiAgICAgICAgICBhc2lkZUZpeGVkOiB0cnVlLFxyXG4gICAgICAgICAgYXNpZGVGb2xkZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgYXNpZGVEb2NrOiBmYWxzZSxcclxuICAgICAgICAgIGNvbnRhaW5lcjogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIHNhdmUgc2V0dGluZ3MgdG8gbG9jYWwgc3RvcmFnZVxyXG4gICAgICAvLyBpZiAoIGFuZ3VsYXIuaXNEZWZpbmVkKCRsb2NhbFN0b3JhZ2Uuc2V0dGluZ3MpICkge1xyXG4gICAgICAvLyAgICRzY29wZS5hcHAuc2V0dGluZ3MgPSAkbG9jYWxTdG9yYWdlLnNldHRpbmdzO1xyXG4gICAgICAvLyB9IGVsc2Uge1xyXG4gICAgICAvLyAgICRsb2NhbFN0b3JhZ2Uuc2V0dGluZ3MgPSAkc2NvcGUuYXBwLnNldHRpbmdzO1xyXG4gICAgICAvLyB9XHJcbiAgICAgICRzY29wZS4kd2F0Y2goJ2FwcC5zZXR0aW5ncycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaWYoICRzY29wZS5hcHAuc2V0dGluZ3MuYXNpZGVEb2NrICAmJiAgJHNjb3BlLmFwcC5zZXR0aW5ncy5hc2lkZUZpeGVkICl7XHJcbiAgICAgICAgICAvLyBhc2lkZSBkb2NrIGFuZCBmaXhlZCBtdXN0IHNldCB0aGUgaGVhZGVyIGZpeGVkLlxyXG4gICAgICAgICAgJHNjb3BlLmFwcC5zZXR0aW5ncy5oZWFkZXJGaXhlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHNhdmUgdG8gbG9jYWwgc3RvcmFnZVxyXG4gICAgICAgICRsb2NhbFN0b3JhZ2Uuc2V0dGluZ3MgPSAkc2NvcGUuYXBwLnNldHRpbmdzO1xyXG4gICAgICB9LCB0cnVlKTtcclxuXHJcbiAgICAgIGZ1bmN0aW9uIGlzU21hcnREZXZpY2UoICR3aW5kb3cgKVxyXG4gICAgICB7XHJcbiAgICAgICAgICAvLyBBZGFwdGVkIGZyb20gaHR0cDovL3d3dy5kZXRlY3Rtb2JpbGVicm93c2Vycy5jb21cclxuICAgICAgICAgIHZhciB1YSA9ICR3aW5kb3dbJ25hdmlnYXRvciddWyd1c2VyQWdlbnQnXSB8fCAkd2luZG93WyduYXZpZ2F0b3InXVsndmVuZG9yJ10gfHwgJHdpbmRvd1snb3BlcmEnXTtcclxuICAgICAgICAgIC8vIENoZWNrcyBmb3IgaU9zLCBBbmRyb2lkLCBCbGFja2JlcnJ5LCBPcGVyYSBNaW5pLCBhbmQgV2luZG93cyBtb2JpbGUgZGV2aWNlc1xyXG4gICAgICAgICAgcmV0dXJuICgvaVBob25lfGlQb2R8aVBhZHxTaWxrfEFuZHJvaWR8QmxhY2tCZXJyeXxPcGVyYSBNaW5pfElFTW9iaWxlLykudGVzdCh1YSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICRzY29wZS4kb24oJyRzdGF0ZUNoYW5nZVN0YXJ0JyxmdW5jdGlvbihldmVudCwgdG9TdGF0ZSwgdG9QYXJhbXMsIGZyb21TdGF0ZSwgZnJvbVBhcmFtcyl7XHJcblxyXG4gICAgICB9KTtcclxuICB9XSk7IiwiYXBwLmNvbnRyb2xsZXIoJ0NyaXNpc0xpc3RDdHJsJywgWyckc2NvcGUnLCAnJHN0YXRlJywgZnVuY3Rpb24gKCRzY29wZSwgJHN0YXRlKSB7XHJcbiAgICB2YXIgZWRpdFRwbCA9ICc8YnV0dG9uIGlkPVwiZWRpdEJ0blwiIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0bi1zbWFsbFwiIG5nLWNsaWNrPVwiZ3JpZC5hcHBTY29wZS5nbyhyb3cuZW50aXR5KVwiID5FZGl0PC9idXR0b24+JztcclxuICAgICRzY29wZS5nbyA9IGZ1bmN0aW9uIChyb3dEYXRhKSB7XHJcbiAgICAgICAgJHN0YXRlLmdvKCdhcHAuY3Jpc2lzX2RldGFpbCcpO1xyXG4gICAgfVxyXG4gICAgJHNjb3BlLmdyaWRPcHRpb25zID0ge1xyXG4gICAgICAgIGNvbHVtbkRlZnM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQ6ICdpZCcsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogJ0lkJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogJ25hbWUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICdOYW1lJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnZWRpdCcsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogJ0VkaXQnLFxyXG4gICAgICAgICAgICAgICAgY2VsbFRlbXBsYXRlOiBlZGl0VHBsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIGRhdGE6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgJ2lkJzogMSxcclxuICAgICAgICAgICAgICAgICduYW1lJzogJ3Rlc3QwMDEnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICdpZCc6IDIsXHJcbiAgICAgICAgICAgICAgICAnbmFtZSc6ICd0ZXN0MDAyJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAnaWQnOiAzLFxyXG4gICAgICAgICAgICAgICAgJ25hbWUnOiAndGVzdDAwMydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgJ2lkJzogNCxcclxuICAgICAgICAgICAgICAgICduYW1lJzogJ3Rlc3QwMDQnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICB9O1xyXG5cclxufV0pO1xyXG5cclxuYXBwLmNvbnRyb2xsZXIoJ0NyaXNpc0RldGFpbEN0cmwnLCBbJyRzY29wZScsIGZ1bmN0aW9uICgkc2NvcGUpIHtcclxuICAgICRzY29wZS5saXN0ID0gW3tcclxuICAgICAgICBuYW1lOiAndGVzdDAxJ1xyXG4gICAgfSwge1xyXG4gICAgICAgIG5hbWU6ICd0ZXN0MDInXHJcbiAgICB9XTtcclxuXHJcbiAgICAkc2NvcGUuc2VsZWN0ZWRJdGVtID0ge307XHJcbn1dKTsiLCIvLyDnv7vor5Hlv6vmjbfmlrnlvI9cclxudmFyIFQgPSB7fTtcclxuLy8g5pys5Zyw5a2Y5YKo5b+r5o235pa55byPXHJcbnZhciBTID0ge307XHJcbmFwcC5ydW4oWyckdHJhbnNsYXRlJywgJyRsb2NhbFN0b3JhZ2UnLFxyXG4gICAgICAgIGZ1bmN0aW9uICgkdHJhbnNsYXRlLCAkbG9jYWxTdG9yYWdlKSB7XHJcbiAgICAgICAgICAgIC8vIOWumuS5iee/u+ivkeW/q+aNt+aWueW8j1xyXG4gICAgICAgICAgICBUID0gZnVuY3Rpb24gKGtleSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICR0cmFuc2xhdGUuaW5zdGFudChrZXkpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgUyA9ICRsb2NhbFN0b3JhZ2U7XHJcbiAgICAgICAgfVxyXG4gICAgXSk7XHJcblxyXG5cclxudmFyIHZpZXcgPSB7XHJcbiAgICBsb2FkaW5nX2RpYWxvZzogbnVsbCxcclxuICAgIGxvYWRpbmdfbnVtOiAwXHJcbn07XHJcblxyXG4vLyBkaWFsb2dcclxudmlldy5kaWFsb2cgPSBmdW5jdGlvbiAob3B0KSB7XHJcbiAgICB2YXIgdGl0bGUgPSBvcHQudGl0bGUgfHwgVChcImRpYWxvZy5ESUFMT0dcIiksXHJcbiAgICAgICAgY29udGVudCA9IG9wdC5jb250ZW50IHx8IFwiXCIsXHJcbiAgICAgICAgb2tfYnRuID0gb3B0Lm9rX2J0bixcclxuICAgICAgICBjYW5jZWxfYnRuID0gb3B0LmNhbmNlbF9idG4sXHJcbiAgICAgICAgY2xvc2VfYnRuID0gb3B0LmNsb3NlX2J0bixcclxuICAgICAgICBva19mbiA9IG9wdC5va19mbiB8fCBudWxsLFxyXG4gICAgICAgIGNhbmNlbF9mbiA9IG9wdC5jYW5jZWxfZm4gfHwgbnVsbCxcclxuICAgICAgICBwcmVfZm4gPSBvcHQucHJlX2ZuIHx8IG51bGwsXHJcbiAgICAgICAgZGlhbG9nID0gbnVsbCxcclxuICAgICAgICBkaWFsb2dfaHRtbCA9ICc8ZGl2IGNsYXNzPVwibW9kYWwgZmFkZVwiPlxcXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1kaWFsb2dcIj5cXFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudFwiPlxcXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIj5cXFxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIj48c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPjwvYnV0dG9uPlxcXHJcbiAgICAgICAgPGg0IGNsYXNzPVwibW9kYWwtdGl0bGVcIj4nICsgdGl0bGUgKyAnPC9oND5cXFxyXG4gICAgICAgICAgICA8L2Rpdj5cXFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtYm9keVwiPicgKyBjb250ZW50ICsgJzwvZGl2PlxcXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1mb290ZXJcIj4nO1xyXG5cclxuICAgIGlmIChjYW5jZWxfYnRuKSB7XHJcbiAgICAgICAgZGlhbG9nX2h0bWwgKz0gJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGRpYWxvZ19idG4gY2FuY2VsXCI+JyArIFQoXCJidXR0b24uQ0FOQ0VMXCIpICsgJzwvYnV0dG9uPic7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG9rX2J0bikge1xyXG4gICAgICAgIGRpYWxvZ19odG1sICs9ICc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBkaWFsb2dfYnRuIG9rXCI+JyArIFQoXCJidXR0b24uT0tcIikgKyAnPC9idXR0b24+JztcclxuICAgIH1cclxuXHJcbiAgICBpZiAoY2xvc2VfYnRuKSB7XHJcbiAgICAgICAgZGlhbG9nX2h0bWwgKz0gJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGRpYWxvZ19idG4gb2tcIj4nICsgVChcImJ1dHRvbi5DTE9TRVwiKSArICc8L2J1dHRvbj4nO1xyXG4gICAgfVxyXG5cclxuICAgIGRpYWxvZ19odG1sICs9ICc8L2Rpdj48L2Rpdj48L2Rpdj48L2Rpdj4nO1xyXG5cclxuICAgIGRpYWxvZyA9ICQoZGlhbG9nX2h0bWwpO1xyXG5cclxuICAgIGRpYWxvZ1xyXG4gICAgICAgIC5vbignc2hvdy5icy5tb2RhbCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGlmIChvcHQud2lkdGgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBjc3MgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ3dpZHRoJzogb3B0LndpZHRoICsgJ3B4J1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICQodGhpcykuY2hpbGRyZW4oXCIubW9kYWwtZGlhbG9nXCIpLmNzcyhjc3MpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHByZV9mbiAmJiBwcmVfZm4oJCh0aGlzKSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAub24oXCJzaG93bi5icy5tb2RhbFwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLm9uKFwiaGlkZS5icy5tb2RhbFwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLm9uKFwiaGlkZGVuLmJzLm1vZGFsXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGRpYWxvZy5yZW1vdmUoKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5vbihcImNsaWNrXCIsIFwiLmRpYWxvZ19idG5cIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcyhcIm9rXCIpKSB7XHJcbiAgICAgICAgICAgICAgICBva19mbiAmJiBva19mbigpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcyhcImNhbmNlbFwiKSkge1xyXG4gICAgICAgICAgICAgICAgY2FuY2VsX2ZuICYmIGNhbmNlbF9mbigpO1xyXG4gICAgICAgICAgICAgICAgZGlhbG9nLm1vZGFsKFwiaGlkZVwiKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCFvcHQucHJldmVudF9hdXRvX2hpZGUgfHwgb3B0LnByZXZlbnRfYXV0b19oaWRlID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICBkaWFsb2cubW9kYWwoXCJoaWRlXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAub24oJ3Nob3duJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBwcmVfZm4gJiYgcHJlX2ZuKCQodGhpcykpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLm1vZGFsKCdzaG93Jyk7XHJcblxyXG4gICAgZGlhbG9nLmNsb3NlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQodGhpcykubW9kYWwoJ2hpZGUnKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIGRpYWxvZztcclxufTtcclxuXHJcbi8vIGxvYWRpbmdcclxudmlldy5sb2FkaW5nID0gZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKHZpZXcubG9hZGluZ19kaWFsb2cgPT0gbnVsbCkge1xyXG4gICAgICAgIHZhciBvcHQgPSB7XHJcbiAgICAgICAgICAgIHRpdGxlOiBUKFwiZGlhbG9nLkFMRVJUXCIpLFxyXG4gICAgICAgICAgICBjb250ZW50OiBcIjxpbWcgc3JjPSdpbWcvbG9hZGluZy5naWYnLz4gPHNwYW4gc3R5bGU9J2ZvbnQtc2l6ZTogMThweDsnPlwiICsgVChcImRpYWxvZy5MT0FESU5HXCIpICsgXCI8L3NwYW4+XCIsXHJcbiAgICAgICAgICAgIG9rX2J0bjogZmFsc2UsXHJcbiAgICAgICAgICAgIGNhbmNlbF9idG46IGZhbHNlXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdmlldy5sb2FkaW5nX2RpYWxvZyA9IHZpZXcuZGlhbG9nKG9wdCk7XHJcbiAgICB9XHJcblxyXG4gICAgdmlldy5sb2FkaW5nX251bSsrO1xyXG59O1xyXG5cclxuLy8g5YWz6ZetbG9hZGluZ1xyXG52aWV3LmNsb3NlX2xvYWRpbmcgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2aWV3LmxvYWRpbmdfbnVtLS07XHJcblxyXG4gICAgaWYgKHZpZXcubG9hZGluZ19kaWFsb2cgIT0gbnVsbCAmJiB2aWV3LmxvYWRpbmdfbnVtID09IDApIHtcclxuICAgICAgICB2aWV3LmxvYWRpbmdfZGlhbG9nLmNsb3NlKCk7XHJcbiAgICAgICAgdmlldy5sb2FkaW5nX2RpYWxvZyA9IG51bGw7XHJcbiAgICB9XHJcbn07XHJcblxyXG4vLyBhbGVydFxyXG52aWV3LmFsZXJ0ID0gZnVuY3Rpb24gKG1zZywgb2spIHtcclxuICAgIHZhciBvcHQgPSB7XHJcbiAgICAgICAgdGl0bGU6IFQoXCJkaWFsb2cuQUxFUlRcIiksXHJcbiAgICAgICAgY29udGVudDogXCJcIiArIG1zZyArIFwiXCIsXHJcbiAgICAgICAgY2xvc2VfYnRuOiB0cnVlLFxyXG4gICAgICAgIG9rX2ZuOiBva1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gdmlldy5kaWFsb2cob3B0KTtcclxufTtcclxuXHJcbi8vIHNob3dcclxudmlldy5zaG93ID0gZnVuY3Rpb24gKG1zZywgdGl0bGUsIHdpZHRoLCBvaywgY2FuY2VsKSB7XHJcbiAgICB2YXIgb3B0ID0ge1xyXG4gICAgICAgIHRpdGxlOiBUKFwiZGlhbG9nLkFMRVJUXCIpLFxyXG4gICAgICAgIGNvbnRlbnQ6IFwiPHAgc3R5bGU9J3dvcmQtd3JhcDpicmVhay13b3JkJz5cIiArIG1zZyArIFwiPC9wPlwiLFxyXG4gICAgICAgIGNsb3NlX2J0bjogdHJ1ZSxcclxuICAgICAgICBva19mbjogb2ssXHJcbiAgICAgICAgY2FuY2VsX2ZuOiBjYW5jZWxcclxuICAgIH07XHJcblxyXG4gICAgaWYgKHRpdGxlICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIG9wdC50aXRsZSA9IHRpdGxlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh3aWR0aCAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICBvcHQud2lkdGggPSB3aWR0aDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdmlldy5kaWFsb2cob3B0KTtcclxufTtcclxuXHJcbi8vIGNvbmZpcm1cclxudmlldy5jb25maXJtID0gZnVuY3Rpb24gKGNvbnRlbnQsIG9rLCBjYW5jZWwpIHtcclxuXHJcbiAgICB2YXIgb3B0ID0ge1xyXG4gICAgICAgIHRpdGxlOiBUKFwiZGlhbG9nLkFMRVJUXCIpLFxyXG4gICAgICAgIGNvbnRlbnQ6ICc8c3BhbiBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tZXhjbGFtYXRpb24tc2lnblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiAnICsgY29udGVudCArICc8L3NwYW4+JyxcclxuICAgICAgICBva19idG46IHRydWUsXHJcbiAgICAgICAgY2FuY2VsX2J0bjogdHJ1ZSxcclxuICAgICAgICBva19mbjogb2ssXHJcbiAgICAgICAgY2FuY2VsX2ZuOiBjYW5jZWxcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHZpZXcuZGlhbG9nKG9wdCk7XHJcbn07XHJcblxyXG4vLyBwcm9tcHRcclxudmlldy5wcm9tcHQgPSBmdW5jdGlvbiAodGl0bGUsIGRlZmF1bHRfdmFsLCBvaywgY2FuY2VsKSB7XHJcbiAgICB2YXIgb2tfZm4gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHZhbHVlID0gJChcIiNwcm9tcHRfaW5wdXRcIikudmFsKCk7XHJcbiAgICAgICAgb2sodmFsdWUpO1xyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgY29udGVudCA9ICc8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwicHJvbXB0X2lucHV0XCI+JztcclxuICAgIGlmIChkZWZhdWx0X3ZhbCAhPSBudWxsICYmIGRlZmF1bHRfdmFsICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGNvbnRlbnQgPSAnPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cInByb21wdF9pbnB1dFwiIHZhbHVlPVwiJyArIGRlZmF1bHRfdmFsICsgJ1wiPic7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIG9wdCA9IHtcclxuICAgICAgICB0aXRsZTogdGl0bGUsXHJcbiAgICAgICAgY29udGVudDogY29udGVudCxcclxuICAgICAgICBva19idG46IHRydWUsXHJcbiAgICAgICAgY2FuY2VsX2J0bjogdHJ1ZSxcclxuICAgICAgICBva19mbjogb2tfZm4sXHJcbiAgICAgICAgY2FuY2VsX2ZuOiBjYW5jZWxcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHZpZXcuZGlhbG9nKG9wdCk7XHJcbn07XHJcblxyXG4vLyBwcm9tcHRfdGltZVxyXG52aWV3LnByb21wdF90aW1lID0gZnVuY3Rpb24gKHRpdGxlLCBvaywgY2FuY2VsKSB7XHJcbiAgICB2YXIgb2tfZm4gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHZhbHVlID0gJChcIiNwcm9tcHRfaW5wdXRcIikudmFsKCk7XHJcbiAgICAgICAgb2sodmFsdWUpO1xyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgb3B0ID0ge1xyXG4gICAgICAgIHRpdGxlOiB0aXRsZSxcclxuICAgICAgICBjb250ZW50OiAnPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBkYXRhLWRhdGUtZm9ybWF0PVwieXl5eS1tbS1kZCBoaDppaTpzc1wiIGlkPVwicHJvbXB0X2lucHV0XCI+JyxcclxuICAgICAgICBva19idG46IHRydWUsXHJcbiAgICAgICAgY2FuY2VsX2J0bjogdHJ1ZSxcclxuICAgICAgICBva19mbjogb2tfZm4sXHJcbiAgICAgICAgY2FuY2VsX2ZuOiBjYW5jZWxcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHZpZXcuZGlhbG9nKG9wdCk7XHJcbn07XHJcblxyXG4vLyBwcm9tcHRfdGV4dGFyZWFcclxudmlldy5wcm9tcHRfdGV4dGFyZWEgPSBmdW5jdGlvbiAodGl0bGUsIG9rLCBjYW5jZWwsIHZhbHVlKSB7XHJcbiAgICB2YWx1ZSA9IHZhbHVlIHx8IFwiXCI7XHJcblxyXG4gICAgdmFyIG9rX2ZuID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciB2YWx1ZSA9ICQoXCIjcHJvbXB0X2lucHV0XCIpLnZhbCgpO1xyXG4gICAgICAgIG9rKHZhbHVlKTtcclxuICAgIH07XHJcblxyXG4gICAgdmFyIG9wdCA9IHtcclxuICAgICAgICB0aXRsZTogdGl0bGUsXHJcbiAgICAgICAgY29udGVudDogJzx0ZXh0YXJlYSBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwicHJvbXB0X2lucHV0XCI+JyArIHZhbHVlICsgJzwvdGV4dGFyZWE+JyxcclxuICAgICAgICBva19idG46IHRydWUsXHJcbiAgICAgICAgY2FuY2VsX2J0bjogdHJ1ZSxcclxuICAgICAgICBva19mbjogb2tfZm4sXHJcbiAgICAgICAgY2FuY2VsX2ZuOiBjYW5jZWxcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHZpZXcuZGlhbG9nKG9wdCk7XHJcbn07XHJcblxyXG52YXIgdXRpbHMgPSB7fTtcclxuXHJcbnV0aWxzLmV4cG9ydEV4Y2VsID0gZnVuY3Rpb24gKHBhcmFtcywgdXJsLCBtZXRob2QpIHtcclxuICAgIGlmIChwYXJhbXMpIHtcclxuICAgICAgICAvLyBwYXJhbXMg5pivIHN0cmluZyDmiJbogIUgYXJyYXkvb2JqZWN0XHJcbiAgICAgICAgaWYgKHR5cGVvZiBwYXJhbXMgPT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgcGFyYW1zID0ge307XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHBhcmFtc1snZXhwb3J0J10gPSAxO1xyXG4gICAgICAgIC8vIOaKiuWPguaVsOe7hOijheaIkCBmb3Jt55qEICBpbnB1dFxyXG4gICAgICAgIHZhciBpbnB1dHMgPSBbXTtcclxuICAgICAgICAkLmVhY2gocGFyYW1zLCBmdW5jdGlvbiAoaywgdikge1xyXG4gICAgICAgICAgICBpZiAodiA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpbnB1dHMucHVzaCgnPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiJyArIGsgKyAnXCIgdmFsdWU9XCInICsgdiArICdcIiAvPicpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoZG9jdW1lbnQpLm9mZignc3VibWl0Jyk7XHJcbiAgICAgICAgJCgnPGZvcm0gaWQ9XCJkb3dubG9hZFwiIGFjdGlvbj1cIicgKyAodXJsIHx8ICdpbmRleC5waHAnKSArICdcIiBtZXRob2Q9XCInICsgKG1ldGhvZCB8fCBcInBvc3RcIikgKyAnXCIgdGFyZ2V0PVwiX2JsYW5rXCI+JyArIGlucHV0cy5qb2luKCcnKSArICc8L2Zvcm0+JylcclxuICAgICAgICAgICAgLmFwcGVuZFRvKCdib2R5Jykuc3VibWl0KCkucmVtb3ZlKCk7XHJcbiAgICAgICAgJChkb2N1bWVudCkub24oJ3N1Ym1pdCcsIGZhbHNlKTtcclxuICAgIH1cclxufTtcclxuXHJcbnV0aWxzLmJhc2U2NFRvQmxvYiA9IGZ1bmN0aW9uKGJhc2U2NERhdGEsIGNvbnRlbnRUeXBlKSB7XHJcbiAgICBjb250ZW50VHlwZSA9IGNvbnRlbnRUeXBlIHx8ICcnO1xyXG4gICAgdmFyIHNsaWNlU2l6ZSA9IDEwMjQ7XHJcbiAgICB2YXIgYnl0ZUNoYXJhY3RlcnMgPSBhdG9iKGJhc2U2NERhdGEpO1xyXG4gICAgdmFyIGJ5dGVzTGVuZ3RoID0gYnl0ZUNoYXJhY3RlcnMubGVuZ3RoO1xyXG4gICAgdmFyIHNsaWNlc0NvdW50ID0gTWF0aC5jZWlsKGJ5dGVzTGVuZ3RoIC8gc2xpY2VTaXplKTtcclxuICAgIHZhciBieXRlQXJyYXlzID0gbmV3IEFycmF5KHNsaWNlc0NvdW50KTtcclxuXHJcbiAgICBmb3IgKHZhciBzbGljZUluZGV4ID0gMDsgc2xpY2VJbmRleCA8IHNsaWNlc0NvdW50OyArK3NsaWNlSW5kZXgpIHtcclxuICAgICAgICB2YXIgYmVnaW4gPSBzbGljZUluZGV4ICogc2xpY2VTaXplO1xyXG4gICAgICAgIHZhciBlbmQgPSBNYXRoLm1pbihiZWdpbiArIHNsaWNlU2l6ZSwgYnl0ZXNMZW5ndGgpO1xyXG5cclxuICAgICAgICB2YXIgYnl0ZXMgPSBuZXcgQXJyYXkoZW5kIC0gYmVnaW4pO1xyXG4gICAgICAgIGZvciAodmFyIG9mZnNldCA9IGJlZ2luLCBpID0gMCA7IG9mZnNldCA8IGVuZDsgKytpLCArK29mZnNldCkge1xyXG4gICAgICAgICAgICBieXRlc1tpXSA9IGJ5dGVDaGFyYWN0ZXJzW29mZnNldF0uY2hhckNvZGVBdCgwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnl0ZUFycmF5c1tzbGljZUluZGV4XSA9IG5ldyBVaW50OEFycmF5KGJ5dGVzKTtcclxuICAgIH1cclxuICAgIHJldHVybiBuZXcgQmxvYihieXRlQXJyYXlzLCB7IHR5cGU6IGNvbnRlbnRUeXBlIH0pO1xyXG59O1xyXG5cclxuIiwiYW5ndWxhci5tb2R1bGUoJ2h0dHBTZXJ2aWNlJywgW10pLlxyXG4gICAgc2VydmljZSgnbW9ja1NlcnZpY2UnLCBbJyRxJywgJyR0aW1lb3V0JywgJyRodHRwJywgJyRzdGF0ZScsIFxyXG4gICAgZnVuY3Rpb24gKCRxLCAkdGltZW91dCwgJGh0dHAsICRzdGF0ZSkge1xyXG4gICAgICAgIHRoaXMuZ2V0ID0gZnVuY3Rpb24gKHVybCwgcGFyYW1zKSB7XHJcbiAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcbiAgICAgICAgICAgIHVybCA9IFwiL21vY2tfZGF0YS9cIiArIHVybCArIFwiLmpzb25cIjtcclxuICAgICAgICAgICAgLy92aWV3LmxvYWRpbmcoKTtcclxuICAgICAgICAgICAgJGh0dHAuZ2V0KHVybCkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZCA9IHJlc3VsdC5kYXRhO1xyXG4gICAgICAgICAgICAgICAgaWYgKGQuc3RhdHVzID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKGQuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoZC5zdGF0dXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHZpZXcuYWxlcnQocmVzdWx0Lm1zZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyRzdGF0ZS5nbyhcImxvZ2luXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KGQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgZnVuY3Rpb24gKHgpIHtcclxuICAgICAgICAgICAgICAgIC8vdmlldy5jbG9zZV9sb2FkaW5nKCk7XHJcbiAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoVChcIm1zZy5zeXN0ZW1fZXJyb3JcIikpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG4gICAgICAgIH07XHJcbiAgICB9XSk7IiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuLyoqXHJcbiAqIDAuMS4xXHJcbiAqIERlZmVycmVkIGxvYWQganMvY3NzIGZpbGUsIHVzZWQgZm9yIHVpLWpxLmpzIGFuZCBMYXp5IExvYWRpbmcuXHJcbiAqIFxyXG4gKiBAIGZsYXRmdWxsLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKiBBdXRob3IgdXJsOiAjdXNlci9mbGF0ZnVsbFxyXG4gKi9cclxuXHJcbmFuZ3VsYXIubW9kdWxlKCd1aS5sb2FkJywgW10pXHJcblx0LnNlcnZpY2UoJ3VpTG9hZCcsIFsnJGRvY3VtZW50JywgJyRxJywgJyR0aW1lb3V0JywgZnVuY3Rpb24gKCRkb2N1bWVudCwgJHEsICR0aW1lb3V0KSB7XHJcblxyXG5cdFx0dmFyIGxvYWRlZCA9IFtdO1xyXG5cdFx0dmFyIHByb21pc2UgPSBmYWxzZTtcclxuXHRcdHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBDaGFpbiBsb2FkcyB0aGUgZ2l2ZW4gc291cmNlc1xyXG5cdFx0ICogQHBhcmFtIHNyY3MgYXJyYXksIHNjcmlwdCBvciBjc3NcclxuXHRcdCAqIEByZXR1cm5zIHsqfSBQcm9taXNlIHRoYXQgd2lsbCBiZSByZXNvbHZlZCBvbmNlIHRoZSBzb3VyY2VzIGhhcyBiZWVuIGxvYWRlZC5cclxuXHRcdCAqL1xyXG5cdFx0dGhpcy5sb2FkID0gZnVuY3Rpb24gKHNyY3MpIHtcclxuXHRcdFx0c3JjcyA9IGFuZ3VsYXIuaXNBcnJheShzcmNzKSA/IHNyY3MgOiBzcmNzLnNwbGl0KC9cXHMrLyk7XHJcblx0XHRcdHZhciBzZWxmID0gdGhpcztcclxuXHRcdFx0aWYoIXByb21pc2Upe1xyXG5cdFx0XHRcdHByb21pc2UgPSBkZWZlcnJlZC5wcm9taXNlO1xyXG5cdFx0XHR9XHJcbiAgICAgIGFuZ3VsYXIuZm9yRWFjaChzcmNzLCBmdW5jdGlvbihzcmMpIHtcclxuICAgICAgXHRwcm9taXNlID0gcHJvbWlzZS50aGVuKCBmdW5jdGlvbigpe1xyXG4gICAgICBcdFx0cmV0dXJuIHNyYy5pbmRleE9mKCcuY3NzJykgPj0wID8gc2VsZi5sb2FkQ1NTKHNyYykgOiBzZWxmLmxvYWRTY3JpcHQoc3JjKTtcclxuICAgICAgXHR9ICk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBkZWZlcnJlZC5yZXNvbHZlKCk7XHJcbiAgICAgIHJldHVybiBwcm9taXNlO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogRHluYW1pY2FsbHkgbG9hZHMgdGhlIGdpdmVuIHNjcmlwdFxyXG5cdFx0ICogQHBhcmFtIHNyYyBUaGUgdXJsIG9mIHRoZSBzY3JpcHQgdG8gbG9hZCBkeW5hbWljYWxseVxyXG5cdFx0ICogQHJldHVybnMgeyp9IFByb21pc2UgdGhhdCB3aWxsIGJlIHJlc29sdmVkIG9uY2UgdGhlIHNjcmlwdCBoYXMgYmVlbiBsb2FkZWQuXHJcblx0XHQgKi9cclxuXHRcdHRoaXMubG9hZFNjcmlwdCA9IGZ1bmN0aW9uIChzcmMpIHtcclxuXHRcdFx0aWYobG9hZGVkW3NyY10pIHJldHVybiBsb2FkZWRbc3JjXS5wcm9taXNlO1xyXG5cclxuXHRcdFx0dmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcclxuXHRcdFx0dmFyIHNjcmlwdCA9ICRkb2N1bWVudFswXS5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcclxuXHRcdFx0c2NyaXB0LnNyYyA9IHNyYztcclxuXHRcdFx0c2NyaXB0Lm9ubG9hZCA9IGZ1bmN0aW9uIChlKSB7XHJcblx0XHRcdFx0JHRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdFx0ZGVmZXJyZWQucmVzb2x2ZShlKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fTtcclxuXHRcdFx0c2NyaXB0Lm9uZXJyb3IgPSBmdW5jdGlvbiAoZSkge1xyXG5cdFx0XHRcdCR0aW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRcdGRlZmVycmVkLnJlamVjdChlKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fTtcclxuXHRcdFx0JGRvY3VtZW50WzBdLmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcclxuXHRcdFx0bG9hZGVkW3NyY10gPSBkZWZlcnJlZDtcclxuXHJcblx0XHRcdHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG5cdFx0fTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIER5bmFtaWNhbGx5IGxvYWRzIHRoZSBnaXZlbiBDU1MgZmlsZVxyXG5cdFx0ICogQHBhcmFtIGhyZWYgVGhlIHVybCBvZiB0aGUgQ1NTIHRvIGxvYWQgZHluYW1pY2FsbHlcclxuXHRcdCAqIEByZXR1cm5zIHsqfSBQcm9taXNlIHRoYXQgd2lsbCBiZSByZXNvbHZlZCBvbmNlIHRoZSBDU1MgZmlsZSBoYXMgYmVlbiBsb2FkZWQuXHJcblx0XHQgKi9cclxuXHRcdHRoaXMubG9hZENTUyA9IGZ1bmN0aW9uIChocmVmKSB7XHJcblx0XHRcdGlmKGxvYWRlZFtocmVmXSkgcmV0dXJuIGxvYWRlZFtocmVmXS5wcm9taXNlO1xyXG5cclxuXHRcdFx0dmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcclxuXHRcdFx0dmFyIHN0eWxlID0gJGRvY3VtZW50WzBdLmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcclxuXHRcdFx0c3R5bGUucmVsID0gJ3N0eWxlc2hlZXQnO1xyXG5cdFx0XHRzdHlsZS50eXBlID0gJ3RleHQvY3NzJztcclxuXHRcdFx0c3R5bGUuaHJlZiA9IGhyZWY7XHJcblx0XHRcdHN0eWxlLm9ubG9hZCA9IGZ1bmN0aW9uIChlKSB7XHJcblx0XHRcdFx0JHRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdFx0ZGVmZXJyZWQucmVzb2x2ZShlKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fTtcclxuXHRcdFx0c3R5bGUub25lcnJvciA9IGZ1bmN0aW9uIChlKSB7XHJcblx0XHRcdFx0JHRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdFx0ZGVmZXJyZWQucmVqZWN0KGUpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9O1xyXG5cdFx0XHQkZG9jdW1lbnRbMF0uaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XHJcblx0XHRcdGxvYWRlZFtocmVmXSA9IGRlZmVycmVkO1xyXG5cclxuXHRcdFx0cmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcblx0XHR9O1xyXG59XSk7IiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbiAgLmRpcmVjdGl2ZSgnc2V0TmdBbmltYXRlJywgWyckYW5pbWF0ZScsIGZ1bmN0aW9uICgkYW5pbWF0ZSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBsaW5rOiBmdW5jdGlvbiAoJHNjb3BlLCAkZWxlbWVudCwgJGF0dHJzKSB7XHJcbiAgICAgICAgICAgICRzY29wZS4kd2F0Y2goIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICRzY29wZS4kZXZhbCgkYXR0cnMuc2V0TmdBbmltYXRlLCAkc2NvcGUpO1xyXG4gICAgICAgICAgICB9LCBmdW5jdGlvbih2YWxuZXcsIHZhbG9sZCl7XHJcbiAgICAgICAgICAgICAgICAkYW5pbWF0ZS5lbmFibGVkKCEhdmFsbmV3LCAkZWxlbWVudCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgfV0pOyIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4gIC5kaXJlY3RpdmUoJ3VpQnV0dGVyYmFyJywgWyckcm9vdFNjb3BlJywgJyRhbmNob3JTY3JvbGwnLCBmdW5jdGlvbigkcm9vdFNjb3BlLCAkYW5jaG9yU2Nyb2xsKSB7XHJcbiAgICAgcmV0dXJuIHtcclxuICAgICAgcmVzdHJpY3Q6ICdBQycsXHJcbiAgICAgIHRlbXBsYXRlOic8c3BhbiBjbGFzcz1cImJhclwiPjwvc3Bhbj4nLFxyXG4gICAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWwsIGF0dHJzKSB7ICAgICAgICBcclxuICAgICAgICBlbC5hZGRDbGFzcygnYnV0dGVyYmFyIGhpZGUnKTtcclxuICAgICAgICBzY29wZS4kb24oJyRzdGF0ZUNoYW5nZVN0YXJ0JywgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICAgICRhbmNob3JTY3JvbGwoKTtcclxuICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdoaWRlJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNjb3BlLiRvbignJHN0YXRlQ2hhbmdlU3VjY2VzcycsIGZ1bmN0aW9uKCBldmVudCwgdG9TdGF0ZSwgdG9QYXJhbXMsIGZyb21TdGF0ZSApIHtcclxuICAgICAgICAgIGV2ZW50LnRhcmdldFNjb3BlLiR3YXRjaCgnJHZpZXdDb250ZW50TG9hZGVkJywgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgZWwuYWRkQ2xhc3MoJ2hpZGUnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgfTtcclxuICB9XSk7IiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbiAgLmRpcmVjdGl2ZSgndWlGb2N1cycsIGZ1bmN0aW9uKCR0aW1lb3V0LCAkcGFyc2UpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbGVtZW50LCBhdHRyKSB7XHJcbiAgICAgICAgdmFyIG1vZGVsID0gJHBhcnNlKGF0dHIudWlGb2N1cyk7XHJcbiAgICAgICAgc2NvcGUuJHdhdGNoKG1vZGVsLCBmdW5jdGlvbih2YWx1ZSkge1xyXG4gICAgICAgICAgaWYodmFsdWUgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgJHRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgZWxlbWVudFswXS5mb2N1cygpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBlbGVtZW50LmJpbmQoJ2JsdXInLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICBzY29wZS4kYXBwbHkobW9kZWwuYXNzaWduKHNjb3BlLCBmYWxzZSkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH0pOyIsIiBhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuICAuZGlyZWN0aXZlKCd1aUZ1bGxzY3JlZW4nLCBbJ3VpTG9hZCcsICckZG9jdW1lbnQnLCAnJHdpbmRvdycsIGZ1bmN0aW9uKHVpTG9hZCwgJGRvY3VtZW50LCAkd2luZG93KSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICByZXN0cmljdDogJ0FDJyxcclxuICAgICAgdGVtcGxhdGU6JzxpIGNsYXNzPVwiZmEgZmEtZXhwYW5kIGZhLWZ3IHRleHRcIj48L2k+PGkgY2xhc3M9XCJmYSBmYS1jb21wcmVzcyBmYS1mdyB0ZXh0LWFjdGl2ZVwiPjwvaT4nLFxyXG4gICAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWwsIGF0dHIpIHtcclxuICAgICAgICBlbC5hZGRDbGFzcygnaGlkZScpO1xyXG4gICAgICAgIHVpTG9hZC5sb2FkKCd2ZW5kb3IvbGlicy9zY3JlZW5mdWxsLm1pbi5qcycpLnRoZW4oZnVuY3Rpb24oKXtcclxuICAgICAgICAgIC8vIGRpc2FibGUgb24gaWUxMVxyXG4gICAgICAgICAgaWYgKHNjcmVlbmZ1bGwuZW5hYmxlZCAmJiAhbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvVHJpZGVudC4qcnY6MTFcXC4vKSkge1xyXG4gICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnaGlkZScpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZWwub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgdmFyIHRhcmdldDtcclxuICAgICAgICAgICAgYXR0ci50YXJnZXQgJiYgKCB0YXJnZXQgPSAkKGF0dHIudGFyZ2V0KVswXSApOyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBzY3JlZW5mdWxsLnRvZ2dsZSh0YXJnZXQpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICAkZG9jdW1lbnQub24oc2NyZWVuZnVsbC5yYXcuZnVsbHNjcmVlbmNoYW5nZSwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZihzY3JlZW5mdWxsLmlzRnVsbHNjcmVlbil7XHJcbiAgICAgICAgICAgICAgZWwuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH1dKTsiLCIndXNlIHN0cmljdCc7XHJcblxyXG4vKipcclxuICogMC4xLjFcclxuICogR2VuZXJhbC1wdXJwb3NlIGpRdWVyeSB3cmFwcGVyLiBTaW1wbHkgcGFzcyB0aGUgcGx1Z2luIG5hbWUgYXMgdGhlIGV4cHJlc3Npb24uXHJcbiAqXHJcbiAqIEl0IGlzIHBvc3NpYmxlIHRvIHNwZWNpZnkgYSBkZWZhdWx0IHNldCBvZiBwYXJhbWV0ZXJzIGZvciBlYWNoIGpRdWVyeSBwbHVnaW4uXHJcbiAqIFVuZGVyIHRoZSBqcSBrZXksIG5hbWVzcGFjZSBlYWNoIHBsdWdpbiBieSB0aGF0IHdoaWNoIHdpbGwgYmUgcGFzc2VkIHRvIHVpLWpxLlxyXG4gKiBVbmZvcnR1bmF0ZWx5LCBhdCB0aGlzIHRpbWUgeW91IGNhbiBvbmx5IHByZS1kZWZpbmUgdGhlIGZpcnN0IHBhcmFtZXRlci5cclxuICogQGV4YW1wbGUgeyBqcSA6IHsgZGF0ZXBpY2tlciA6IHsgc2hvd09uOidjbGljaycgfSB9IH1cclxuICpcclxuICogQHBhcmFtIHVpLWpxIHtzdHJpbmd9IFRoZSAkZWxtLltwbHVnaW5OYW1lXSgpIHRvIGNhbGwuXHJcbiAqIEBwYXJhbSBbdWktb3B0aW9uc10ge21peGVkfSBFeHByZXNzaW9uIHRvIGJlIGV2YWx1YXRlZCBhbmQgcGFzc2VkIGFzIG9wdGlvbnMgdG8gdGhlIGZ1bmN0aW9uXHJcbiAqICAgICBNdWx0aXBsZSBwYXJhbWV0ZXJzIGNhbiBiZSBzZXBhcmF0ZWQgYnkgY29tbWFzXHJcbiAqIEBwYXJhbSBbdWktcmVmcmVzaF0ge2V4cHJlc3Npb259IFdhdGNoIGV4cHJlc3Npb24gYW5kIHJlZmlyZSBwbHVnaW4gb24gY2hhbmdlc1xyXG4gKlxyXG4gKiBAZXhhbXBsZSA8aW5wdXQgdWktanE9XCJkYXRlcGlja2VyXCIgdWktb3B0aW9ucz1cIntzaG93T246J2NsaWNrJ30sc2Vjb25kUGFyYW1ldGVyLHRoaXJkUGFyYW1ldGVyXCIgdWktcmVmcmVzaD1cImlDaGFuZ2VcIj5cclxuICovXHJcbmFuZ3VsYXIubW9kdWxlKCd1aS5qcScsIFsndWkubG9hZCddKS5cclxuICB2YWx1ZSgndWlKcUNvbmZpZycsIHt9KS5cclxuICBkaXJlY3RpdmUoJ3VpSnEnLCBbJ3VpSnFDb25maWcnLCAnSlFfQ09ORklHJywgJ3VpTG9hZCcsICckdGltZW91dCcsIGZ1bmN0aW9uIHVpSnFJbmplY3RpbmdGdW5jdGlvbih1aUpxQ29uZmlnLCBKUV9DT05GSUcsIHVpTG9hZCwgJHRpbWVvdXQpIHtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHJlc3RyaWN0OiAnQScsXHJcbiAgICBjb21waWxlOiBmdW5jdGlvbiB1aUpxQ29tcGlsaW5nRnVuY3Rpb24odEVsbSwgdEF0dHJzKSB7XHJcblxyXG4gICAgICBpZiAoIWFuZ3VsYXIuaXNGdW5jdGlvbih0RWxtW3RBdHRycy51aUpxXSkgJiYgIUpRX0NPTkZJR1t0QXR0cnMudWlKcV0pIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3VpLWpxOiBUaGUgXCInICsgdEF0dHJzLnVpSnEgKyAnXCIgZnVuY3Rpb24gZG9lcyBub3QgZXhpc3QnKTtcclxuICAgICAgfVxyXG4gICAgICB2YXIgb3B0aW9ucyA9IHVpSnFDb25maWcgJiYgdWlKcUNvbmZpZ1t0QXR0cnMudWlKcV07XHJcblxyXG4gICAgICByZXR1cm4gZnVuY3Rpb24gdWlKcUxpbmtpbmdGdW5jdGlvbihzY29wZSwgZWxtLCBhdHRycykge1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBnZXRPcHRpb25zKCl7XHJcbiAgICAgICAgICB2YXIgbGlua09wdGlvbnMgPSBbXTtcclxuXHJcbiAgICAgICAgICAvLyBJZiB1aS1vcHRpb25zIGFyZSBwYXNzZWQsIG1lcmdlIChvciBvdmVycmlkZSkgdGhlbSBvbnRvIGdsb2JhbCBkZWZhdWx0cyBhbmQgcGFzcyB0byB0aGUgalF1ZXJ5IG1ldGhvZFxyXG4gICAgICAgICAgaWYgKGF0dHJzLnVpT3B0aW9ucykge1xyXG4gICAgICAgICAgICBsaW5rT3B0aW9ucyA9IHNjb3BlLiRldmFsKCdbJyArIGF0dHJzLnVpT3B0aW9ucyArICddJyk7XHJcbiAgICAgICAgICAgIGlmIChhbmd1bGFyLmlzT2JqZWN0KG9wdGlvbnMpICYmIGFuZ3VsYXIuaXNPYmplY3QobGlua09wdGlvbnNbMF0pKSB7XHJcbiAgICAgICAgICAgICAgbGlua09wdGlvbnNbMF0gPSBhbmd1bGFyLmV4dGVuZCh7fSwgb3B0aW9ucywgbGlua09wdGlvbnNbMF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKG9wdGlvbnMpIHtcclxuICAgICAgICAgICAgbGlua09wdGlvbnMgPSBbb3B0aW9uc107XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gbGlua09wdGlvbnM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBJZiBjaGFuZ2UgY29tcGF0aWJpbGl0eSBpcyBlbmFibGVkLCB0aGUgZm9ybSBpbnB1dCdzIFwiY2hhbmdlXCIgZXZlbnQgd2lsbCB0cmlnZ2VyIGFuIFwiaW5wdXRcIiBldmVudFxyXG4gICAgICAgIGlmIChhdHRycy5uZ01vZGVsICYmIGVsbS5pcygnc2VsZWN0LGlucHV0LHRleHRhcmVhJykpIHtcclxuICAgICAgICAgIGVsbS5iaW5kKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgZWxtLnRyaWdnZXIoJ2lucHV0Jyk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIENhbGwgalF1ZXJ5IG1ldGhvZCBhbmQgcGFzcyByZWxldmFudCBvcHRpb25zXHJcbiAgICAgICAgZnVuY3Rpb24gY2FsbFBsdWdpbigpIHtcclxuICAgICAgICAgICR0aW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBlbG1bYXR0cnMudWlKcV0uYXBwbHkoZWxtLCBnZXRPcHRpb25zKCkpO1xyXG4gICAgICAgICAgfSwgMCwgZmFsc2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gcmVmcmVzaCgpe1xyXG4gICAgICAgICAgLy8gSWYgdWktcmVmcmVzaCBpcyB1c2VkLCByZS1maXJlIHRoZSB0aGUgbWV0aG9kIHVwb24gZXZlcnkgY2hhbmdlXHJcbiAgICAgICAgICBpZiAoYXR0cnMudWlSZWZyZXNoKSB7XHJcbiAgICAgICAgICAgIHNjb3BlLiR3YXRjaChhdHRycy51aVJlZnJlc2gsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgIGNhbGxQbHVnaW4oKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIEpRX0NPTkZJR1thdHRycy51aUpxXSApIHtcclxuICAgICAgICAgIHVpTG9hZC5sb2FkKEpRX0NPTkZJR1thdHRycy51aUpxXSkudGhlbihmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgY2FsbFBsdWdpbigpO1xyXG4gICAgICAgICAgICByZWZyZXNoKCk7XHJcbiAgICAgICAgICB9KS5jYXRjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY2FsbFBsdWdpbigpO1xyXG4gICAgICAgICAgcmVmcmVzaCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuICAgIH1cclxuICB9O1xyXG59XSk7IiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbiAgLmRpcmVjdGl2ZSgndWlNb2R1bGUnLCBbJ01PRFVMRV9DT05GSUcnLCd1aUxvYWQnLCAnJGNvbXBpbGUnLCBmdW5jdGlvbihNT0RVTEVfQ09ORklHLCB1aUxvYWQsICRjb21waWxlKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICByZXN0cmljdDogJ0EnLFxyXG4gICAgICBjb21waWxlOiBmdW5jdGlvbiAoZWwsIGF0dHJzKSB7XHJcbiAgICAgICAgdmFyIGNvbnRlbnRzID0gZWwuY29udGVudHMoKS5jbG9uZSgpO1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbihzY29wZSwgZWwsIGF0dHJzKXtcclxuICAgICAgICAgIGVsLmNvbnRlbnRzKCkucmVtb3ZlKCk7XHJcbiAgICAgICAgICB1aUxvYWQubG9hZChNT0RVTEVfQ09ORklHW2F0dHJzLnVpTW9kdWxlXSlcclxuICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICRjb21waWxlKGNvbnRlbnRzKShzY29wZSwgZnVuY3Rpb24oY2xvbmVkRWxlbWVudCwgc2NvcGUpIHtcclxuICAgICAgICAgICAgICBlbC5hcHBlbmQoY2xvbmVkRWxlbWVudCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH1dKTsiLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuICAuZGlyZWN0aXZlKCd1aU5hdicsIFsnJHRpbWVvdXQnLCBmdW5jdGlvbigkdGltZW91dCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcmVzdHJpY3Q6ICdBQycsXHJcbiAgICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbCwgYXR0cikge1xyXG4gICAgICAgIHZhciBfd2luZG93ID0gJCh3aW5kb3cpLCBcclxuICAgICAgICBfbWIgPSA3NjgsIFxyXG4gICAgICAgIHdyYXAgPSAkKCcuYXBwLWFzaWRlJyksIFxyXG4gICAgICAgIG5leHQsIFxyXG4gICAgICAgIGJhY2tkcm9wID0gJy5kcm9wZG93bi1iYWNrZHJvcCc7XHJcbiAgICAgICAgLy8gdW5mb2xkZWRcclxuICAgICAgICBlbC5vbignY2xpY2snLCAnYScsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgIG5leHQgJiYgbmV4dC50cmlnZ2VyKCdtb3VzZWxlYXZlLm5hdicpO1xyXG4gICAgICAgICAgdmFyIF90aGlzID0gJCh0aGlzKTtcclxuICAgICAgICAgIF90aGlzLnBhcmVudCgpLnNpYmxpbmdzKCBcIi5hY3RpdmVcIiApLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgIF90aGlzLm5leHQoKS5pcygndWwnKSAmJiAgX3RoaXMucGFyZW50KCkudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpICYmICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAvLyBtb2JpbGVcclxuICAgICAgICAgIF90aGlzLm5leHQoKS5pcygndWwnKSB8fCAoICggX3dpbmRvdy53aWR0aCgpIDwgX21iICkgJiYgJCgnLmFwcC1hc2lkZScpLnJlbW92ZUNsYXNzKCdzaG93IG9mZi1zY3JlZW4nKSApO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBmb2xkZWQgJiBmaXhlZFxyXG4gICAgICAgIGVsLm9uKCdtb3VzZWVudGVyJywgJ2EnLCBmdW5jdGlvbihlKXtcclxuICAgICAgICAgIG5leHQgJiYgbmV4dC50cmlnZ2VyKCdtb3VzZWxlYXZlLm5hdicpO1xyXG4gICAgICAgICAgJCgnPiAubmF2Jywgd3JhcCkucmVtb3ZlKCk7XHJcbiAgICAgICAgICBpZiAoICEkKCcuYXBwLWFzaWRlLWZpeGVkLmFwcC1hc2lkZS1mb2xkZWQnKS5sZW5ndGggfHwgKCBfd2luZG93LndpZHRoKCkgPCBfbWIgKSB8fCAkKCcuYXBwLWFzaWRlLWRvY2snKS5sZW5ndGgpIHJldHVybjtcclxuICAgICAgICAgIHZhciBfdGhpcyA9ICQoZS50YXJnZXQpXHJcbiAgICAgICAgICAsIHRvcFxyXG4gICAgICAgICAgLCB3X2ggPSAkKHdpbmRvdykuaGVpZ2h0KClcclxuICAgICAgICAgICwgb2Zmc2V0ID0gNTBcclxuICAgICAgICAgICwgbWluID0gMTUwO1xyXG5cclxuICAgICAgICAgICFfdGhpcy5pcygnYScpICYmIChfdGhpcyA9IF90aGlzLmNsb3Nlc3QoJ2EnKSk7XHJcbiAgICAgICAgICBpZiggX3RoaXMubmV4dCgpLmlzKCd1bCcpICl7XHJcbiAgICAgICAgICAgICBuZXh0ID0gX3RoaXMubmV4dCgpO1xyXG4gICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgXHJcbiAgICAgICAgICBfdGhpcy5wYXJlbnQoKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICB0b3AgPSBfdGhpcy5wYXJlbnQoKS5wb3NpdGlvbigpLnRvcCArIG9mZnNldDtcclxuICAgICAgICAgIG5leHQuY3NzKCd0b3AnLCB0b3ApO1xyXG4gICAgICAgICAgaWYoIHRvcCArIG5leHQuaGVpZ2h0KCkgPiB3X2ggKXtcclxuICAgICAgICAgICAgbmV4dC5jc3MoJ2JvdHRvbScsIDApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYodG9wICsgbWluID4gd19oKXtcclxuICAgICAgICAgICAgbmV4dC5jc3MoJ2JvdHRvbScsIHdfaCAtIHRvcCAtIG9mZnNldCkuY3NzKCd0b3AnLCAnYXV0bycpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgbmV4dC5hcHBlbmRUbyh3cmFwKTtcclxuXHJcbiAgICAgICAgICBuZXh0Lm9uKCdtb3VzZWxlYXZlLm5hdicsIGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgICAkKGJhY2tkcm9wKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgbmV4dC5hcHBlbmRUbyhfdGhpcy5wYXJlbnQoKSk7XHJcbiAgICAgICAgICAgIG5leHQub2ZmKCdtb3VzZWxlYXZlLm5hdicpLmNzcygndG9wJywgJ2F1dG8nKS5jc3MoJ2JvdHRvbScsICdhdXRvJyk7XHJcbiAgICAgICAgICAgIF90aGlzLnBhcmVudCgpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICQoJy5zbWFydCcpLmxlbmd0aCAmJiAkKCc8ZGl2IGNsYXNzPVwiZHJvcGRvd24tYmFja2Ryb3BcIi8+JykuaW5zZXJ0QWZ0ZXIoJy5hcHAtYXNpZGUnKS5vbignY2xpY2snLCBmdW5jdGlvbihuZXh0KXtcclxuICAgICAgICAgICAgbmV4dCAmJiBuZXh0LnRyaWdnZXIoJ21vdXNlbGVhdmUubmF2Jyk7XHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHdyYXAub24oJ21vdXNlbGVhdmUnLCBmdW5jdGlvbihlKXtcclxuICAgICAgICAgIG5leHQgJiYgbmV4dC50cmlnZ2VyKCdtb3VzZWxlYXZlLm5hdicpO1xyXG4gICAgICAgICAgJCgnPiAubmF2Jywgd3JhcCkucmVtb3ZlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfV0pOyIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4gIC5kaXJlY3RpdmUoJ3VpU2Nyb2xsJywgWyckbG9jYXRpb24nLCAnJGFuY2hvclNjcm9sbCcsIGZ1bmN0aW9uKCRsb2NhdGlvbiwgJGFuY2hvclNjcm9sbCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcmVzdHJpY3Q6ICdBQycsXHJcbiAgICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbCwgYXR0cikge1xyXG4gICAgICAgIGVsLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICRsb2NhdGlvbi5oYXNoKGF0dHIudWlTY3JvbGwpO1xyXG4gICAgICAgICAgJGFuY2hvclNjcm9sbCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH1dKTsiLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuICAuZGlyZWN0aXZlKCd1aVNoaWZ0JywgWyckdGltZW91dCcsIGZ1bmN0aW9uKCR0aW1lb3V0KSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICByZXN0cmljdDogJ0EnLFxyXG4gICAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWwsIGF0dHIpIHtcclxuICAgICAgICAvLyBnZXQgdGhlICRwcmV2IG9yICRwYXJlbnQgb2YgdGhpcyBlbFxyXG4gICAgICAgIHZhciBfZWwgPSAkKGVsKSxcclxuICAgICAgICAgICAgX3dpbmRvdyA9ICQod2luZG93KSxcclxuICAgICAgICAgICAgcHJldiA9IF9lbC5wcmV2KCksXHJcbiAgICAgICAgICAgIHBhcmVudCxcclxuICAgICAgICAgICAgd2lkdGggPSBfd2luZG93LndpZHRoKClcclxuICAgICAgICAgICAgO1xyXG5cclxuICAgICAgICAhcHJldi5sZW5ndGggJiYgKHBhcmVudCA9IF9lbC5wYXJlbnQoKSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZnVuY3Rpb24gc20oKXtcclxuICAgICAgICAgICR0aW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIG1ldGhvZCA9IGF0dHIudWlTaGlmdDtcclxuICAgICAgICAgICAgdmFyIHRhcmdldCA9IGF0dHIudGFyZ2V0O1xyXG4gICAgICAgICAgICBfZWwuaGFzQ2xhc3MoJ2luJykgfHwgX2VsW21ldGhvZF0odGFyZ2V0KS5hZGRDbGFzcygnaW4nKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBmdW5jdGlvbiBtZCgpe1xyXG4gICAgICAgICAgcGFyZW50ICYmIHBhcmVudFsncHJlcGVuZCddKGVsKTtcclxuICAgICAgICAgICFwYXJlbnQgJiYgX2VsWydpbnNlcnRBZnRlciddKHByZXYpO1xyXG4gICAgICAgICAgX2VsLnJlbW92ZUNsYXNzKCdpbicpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgKHdpZHRoIDwgNzY4ICYmIHNtKCkpIHx8IG1kKCk7XHJcblxyXG4gICAgICAgIF93aW5kb3cucmVzaXplKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgaWYod2lkdGggIT09IF93aW5kb3cud2lkdGgoKSl7XHJcbiAgICAgICAgICAgICR0aW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgKF93aW5kb3cud2lkdGgoKSA8IDc2OCAmJiBzbSgpKSB8fCBtZCgpO1xyXG4gICAgICAgICAgICAgIHdpZHRoID0gX3dpbmRvdy53aWR0aCgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9XSk7IiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbiAgLmRpcmVjdGl2ZSgndWlUb2dnbGVDbGFzcycsIFsnJHRpbWVvdXQnLCAnJGRvY3VtZW50JywgZnVuY3Rpb24oJHRpbWVvdXQsICRkb2N1bWVudCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcmVzdHJpY3Q6ICdBQycsXHJcbiAgICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbCwgYXR0cikge1xyXG4gICAgICAgIGVsLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgIHZhciBjbGFzc2VzID0gYXR0ci51aVRvZ2dsZUNsYXNzLnNwbGl0KCcsJyksXHJcbiAgICAgICAgICAgICAgdGFyZ2V0cyA9IChhdHRyLnRhcmdldCAmJiBhdHRyLnRhcmdldC5zcGxpdCgnLCcpKSB8fCBBcnJheShlbCksXHJcbiAgICAgICAgICAgICAga2V5ID0gMDtcclxuICAgICAgICAgIGFuZ3VsYXIuZm9yRWFjaChjbGFzc2VzLCBmdW5jdGlvbiggX2NsYXNzICkge1xyXG4gICAgICAgICAgICB2YXIgdGFyZ2V0ID0gdGFyZ2V0c1sodGFyZ2V0cy5sZW5ndGggJiYga2V5KV07ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICggX2NsYXNzLmluZGV4T2YoICcqJyApICE9PSAtMSApICYmIG1hZ2ljKF9jbGFzcywgdGFyZ2V0KTtcclxuICAgICAgICAgICAgJCggdGFyZ2V0ICkudG9nZ2xlQ2xhc3MoX2NsYXNzKTtcclxuICAgICAgICAgICAga2V5ICsrO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICAkKGVsKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcblxyXG4gICAgICAgICAgZnVuY3Rpb24gbWFnaWMoX2NsYXNzLCB0YXJnZXQpe1xyXG4gICAgICAgICAgICB2YXIgcGF0dCA9IG5ldyBSZWdFeHAoICdcXFxccycgKyBcclxuICAgICAgICAgICAgICAgIF9jbGFzcy5cclxuICAgICAgICAgICAgICAgICAgcmVwbGFjZSggL1xcKi9nLCAnW0EtWmEtejAtOS1fXSsnICkuXHJcbiAgICAgICAgICAgICAgICAgIHNwbGl0KCAnICcgKS5cclxuICAgICAgICAgICAgICAgICAgam9pbiggJ1xcXFxzfFxcXFxzJyApICsgXHJcbiAgICAgICAgICAgICAgICAnXFxcXHMnLCAnZycgKTtcclxuICAgICAgICAgICAgdmFyIGNuID0gJyAnICsgJCh0YXJnZXQpWzBdLmNsYXNzTmFtZSArICcgJztcclxuICAgICAgICAgICAgd2hpbGUgKCBwYXR0LnRlc3QoIGNuICkgKSB7XHJcbiAgICAgICAgICAgICAgY24gPSBjbi5yZXBsYWNlKCBwYXR0LCAnICcgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAkKHRhcmdldClbMF0uY2xhc3NOYW1lID0gJC50cmltKCBjbiApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH1dKTsiLCIndXNlIHN0cmljdCc7XHJcblxyXG4vKipcclxuICogR2VuZXJhbC1wdXJwb3NlIHZhbGlkYXRvciBmb3IgbmdNb2RlbC5cclxuICogYW5ndWxhci5qcyBjb21lcyB3aXRoIHNldmVyYWwgYnVpbHQtaW4gdmFsaWRhdGlvbiBtZWNoYW5pc20gZm9yIGlucHV0IGZpZWxkcyAobmdSZXF1aXJlZCwgbmdQYXR0ZXJuIGV0Yy4pIGJ1dCB1c2luZ1xyXG4gKiBhbiBhcmJpdHJhcnkgdmFsaWRhdGlvbiBmdW5jdGlvbiByZXF1aXJlcyBjcmVhdGlvbiBvZiBhIGN1c3RvbSBmb3JtYXR0ZXJzIGFuZCAvIG9yIHBhcnNlcnMuXHJcbiAqIFRoZSB1aS12YWxpZGF0ZSBkaXJlY3RpdmUgbWFrZXMgaXQgZWFzeSB0byB1c2UgYW55IGZ1bmN0aW9uKHMpIGRlZmluZWQgaW4gc2NvcGUgYXMgYSB2YWxpZGF0b3IgZnVuY3Rpb24ocykuXHJcbiAqIEEgdmFsaWRhdG9yIGZ1bmN0aW9uIHdpbGwgdHJpZ2dlciB2YWxpZGF0aW9uIG9uIGJvdGggbW9kZWwgYW5kIGlucHV0IGNoYW5nZXMuXHJcbiAqXHJcbiAqIEBleGFtcGxlIDxpbnB1dCB1aS12YWxpZGF0ZT1cIiAnbXlWYWxpZGF0b3JGdW5jdGlvbigkdmFsdWUpJyBcIj5cclxuICogQGV4YW1wbGUgPGlucHV0IHVpLXZhbGlkYXRlPVwieyBmb28gOiAnJHZhbHVlID4gYW5vdGhlck1vZGVsJywgYmFyIDogJ3ZhbGlkYXRlRm9vKCR2YWx1ZSknIH1cIj5cclxuICogQGV4YW1wbGUgPGlucHV0IHVpLXZhbGlkYXRlPVwieyBmb28gOiAnJHZhbHVlID4gYW5vdGhlck1vZGVsJyB9XCIgdWktdmFsaWRhdGUtd2F0Y2g9XCIgJ2Fub3RoZXJNb2RlbCcgXCI+XHJcbiAqIEBleGFtcGxlIDxpbnB1dCB1aS12YWxpZGF0ZT1cInsgZm9vIDogJyR2YWx1ZSA+IGFub3RoZXJNb2RlbCcsIGJhciA6ICd2YWxpZGF0ZUZvbygkdmFsdWUpJyB9XCIgdWktdmFsaWRhdGUtd2F0Y2g9XCIgeyBmb28gOiAnYW5vdGhlck1vZGVsJyB9IFwiPlxyXG4gKlxyXG4gKiBAcGFyYW0gdWktdmFsaWRhdGUge3N0cmluZ3xvYmplY3QgbGl0ZXJhbH0gSWYgc3RyaW5ncyBpcyBwYXNzZWQgaXQgc2hvdWxkIGJlIGEgc2NvcGUncyBmdW5jdGlvbiB0byBiZSB1c2VkIGFzIGEgdmFsaWRhdG9yLlxyXG4gKiBJZiBhbiBvYmplY3QgbGl0ZXJhbCBpcyBwYXNzZWQgYSBrZXkgZGVub3RlcyBhIHZhbGlkYXRpb24gZXJyb3Iga2V5IHdoaWxlIGEgdmFsdWUgc2hvdWxkIGJlIGEgdmFsaWRhdG9yIGZ1bmN0aW9uLlxyXG4gKiBJbiBib3RoIGNhc2VzIHZhbGlkYXRvciBmdW5jdGlvbiBzaG91bGQgdGFrZSBhIHZhbHVlIHRvIHZhbGlkYXRlIGFzIGl0cyBhcmd1bWVudCBhbmQgc2hvdWxkIHJldHVybiB0cnVlL2ZhbHNlIGluZGljYXRpbmcgYSB2YWxpZGF0aW9uIHJlc3VsdC5cclxuICovXHJcbmFuZ3VsYXIubW9kdWxlKCd1aS52YWxpZGF0ZScsW10pLmRpcmVjdGl2ZSgndWlWYWxpZGF0ZScsIGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHJlc3RyaWN0OiAnQScsXHJcbiAgICByZXF1aXJlOiAnbmdNb2RlbCcsXHJcbiAgICBsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsbSwgYXR0cnMsIGN0cmwpIHtcclxuICAgICAgdmFyIHZhbGlkYXRlRm4sIHZhbGlkYXRvcnMgPSB7fSxcclxuICAgICAgICAgIHZhbGlkYXRlRXhwciA9IHNjb3BlLiRldmFsKGF0dHJzLnVpVmFsaWRhdGUpO1xyXG5cclxuICAgICAgaWYgKCF2YWxpZGF0ZUV4cHIpeyByZXR1cm47fVxyXG5cclxuICAgICAgaWYgKGFuZ3VsYXIuaXNTdHJpbmcodmFsaWRhdGVFeHByKSkge1xyXG4gICAgICAgIHZhbGlkYXRlRXhwciA9IHsgdmFsaWRhdG9yOiB2YWxpZGF0ZUV4cHIgfTtcclxuICAgICAgfVxyXG5cclxuICAgICAgYW5ndWxhci5mb3JFYWNoKHZhbGlkYXRlRXhwciwgZnVuY3Rpb24gKGV4cHJzc24sIGtleSkge1xyXG4gICAgICAgIHZhbGlkYXRlRm4gPSBmdW5jdGlvbiAodmFsdWVUb1ZhbGlkYXRlKSB7XHJcbiAgICAgICAgICB2YXIgZXhwcmVzc2lvbiA9IHNjb3BlLiRldmFsKGV4cHJzc24sIHsgJyR2YWx1ZScgOiB2YWx1ZVRvVmFsaWRhdGUgfSk7XHJcbiAgICAgICAgICBpZiAoYW5ndWxhci5pc09iamVjdChleHByZXNzaW9uKSAmJiBhbmd1bGFyLmlzRnVuY3Rpb24oZXhwcmVzc2lvbi50aGVuKSkge1xyXG4gICAgICAgICAgICAvLyBleHByZXNzaW9uIGlzIGEgcHJvbWlzZVxyXG4gICAgICAgICAgICBleHByZXNzaW9uLnRoZW4oZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICBjdHJsLiRzZXRWYWxpZGl0eShrZXksIHRydWUpO1xyXG4gICAgICAgICAgICB9LCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgIGN0cmwuJHNldFZhbGlkaXR5KGtleSwgZmFsc2UpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlVG9WYWxpZGF0ZTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoZXhwcmVzc2lvbikge1xyXG4gICAgICAgICAgICAvLyBleHByZXNzaW9uIGlzIHRydWVcclxuICAgICAgICAgICAgY3RybC4kc2V0VmFsaWRpdHkoa2V5LCB0cnVlKTtcclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlVG9WYWxpZGF0ZTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIGV4cHJlc3Npb24gaXMgZmFsc2VcclxuICAgICAgICAgICAgY3RybC4kc2V0VmFsaWRpdHkoa2V5LCBmYWxzZSk7XHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZVRvVmFsaWRhdGU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB2YWxpZGF0b3JzW2tleV0gPSB2YWxpZGF0ZUZuO1xyXG4gICAgICAgIGN0cmwuJGZvcm1hdHRlcnMucHVzaCh2YWxpZGF0ZUZuKTtcclxuICAgICAgICBjdHJsLiRwYXJzZXJzLnB1c2godmFsaWRhdGVGbik7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgZnVuY3Rpb24gYXBwbHlfd2F0Y2god2F0Y2gpXHJcbiAgICAgIHtcclxuICAgICAgICAgIC8vc3RyaW5nIC0gdXBkYXRlIGFsbCB2YWxpZGF0b3JzIG9uIGV4cHJlc3Npb24gY2hhbmdlXHJcbiAgICAgICAgICBpZiAoYW5ndWxhci5pc1N0cmluZyh3YXRjaCkpXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgc2NvcGUuJHdhdGNoKHdhdGNoLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICBhbmd1bGFyLmZvckVhY2godmFsaWRhdG9ycywgZnVuY3Rpb24odmFsaWRhdG9yRm4pe1xyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yRm4oY3RybC4kbW9kZWxWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvL2FycmF5IC0gdXBkYXRlIGFsbCB2YWxpZGF0b3JzIG9uIGNoYW5nZSBvZiBhbnkgZXhwcmVzc2lvblxyXG4gICAgICAgICAgaWYgKGFuZ3VsYXIuaXNBcnJheSh3YXRjaCkpXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgYW5ndWxhci5mb3JFYWNoKHdhdGNoLCBmdW5jdGlvbihleHByZXNzaW9uKXtcclxuICAgICAgICAgICAgICAgICAgc2NvcGUuJHdhdGNoKGV4cHJlc3Npb24sIGZ1bmN0aW9uKClcclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgYW5ndWxhci5mb3JFYWNoKHZhbGlkYXRvcnMsIGZ1bmN0aW9uKHZhbGlkYXRvckZuKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3JGbihjdHJsLiRtb2RlbFZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLy9vYmplY3QgLSB1cGRhdGUgYXBwcm9wcmlhdGUgdmFsaWRhdG9yXHJcbiAgICAgICAgICBpZiAoYW5ndWxhci5pc09iamVjdCh3YXRjaCkpXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgYW5ndWxhci5mb3JFYWNoKHdhdGNoLCBmdW5jdGlvbihleHByZXNzaW9uLCB2YWxpZGF0b3JLZXkpXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAvL3ZhbHVlIGlzIHN0cmluZyAtIGxvb2sgYWZ0ZXIgb25lIGV4cHJlc3Npb25cclxuICAgICAgICAgICAgICAgICAgaWYgKGFuZ3VsYXIuaXNTdHJpbmcoZXhwcmVzc2lvbikpXHJcbiAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHNjb3BlLiR3YXRjaChleHByZXNzaW9uLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcnNbdmFsaWRhdG9yS2V5XShjdHJsLiRtb2RlbFZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAvL3ZhbHVlIGlzIGFycmF5IC0gbG9vayBhZnRlciBhbGwgZXhwcmVzc2lvbnMgaW4gYXJyYXlcclxuICAgICAgICAgICAgICAgICAgaWYgKGFuZ3VsYXIuaXNBcnJheShleHByZXNzaW9uKSlcclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgYW5ndWxhci5mb3JFYWNoKGV4cHJlc3Npb24sIGZ1bmN0aW9uKGludEV4cHJlc3Npb24pXHJcbiAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGUuJHdhdGNoKGludEV4cHJlc3Npb24sIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcnNbdmFsaWRhdG9yS2V5XShjdHJsLiRtb2RlbFZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLy8gU3VwcG9ydCBmb3IgdWktdmFsaWRhdGUtd2F0Y2hcclxuICAgICAgaWYgKGF0dHJzLnVpVmFsaWRhdGVXYXRjaCl7XHJcbiAgICAgICAgICBhcHBseV93YXRjaCggc2NvcGUuJGV2YWwoYXR0cnMudWlWYWxpZGF0ZVdhdGNoKSApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxufSk7XHJcbiJdfQ==
