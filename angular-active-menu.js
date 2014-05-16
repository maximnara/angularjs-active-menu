(function(window, angular) {
	'use strict';

	angular.module('angularActiveMenu', [])
	
		.directive('usActiveMenu', ['$rootScope', '$route', function($rootScope, $route){
			return {
				scope: false,
				link: function(scope, element, attr) {

					if (attr.usActiveMenu == $route.current.$$route.controller || (attr.usActiveMenu.indexOf('[') >= 0 && !!~eval(attr.usActiveMenu).indexOf($route.current.$$route.controller)))
						element.addClass('active');

					else if (element.hasClass('active') && attr.usActiveMenu != $route.current.$$route.controller)
						element.removeClass('active');

					$rootScope.$on('$locationChangeSuccess', function () {

						if (element.hasClass('active'))
							element.removeClass('active');

						if (attr.usActiveMenu == $route.current.$$route.controller || (attr.usActiveMenu.indexOf('[') >= 0 && !!~eval(attr.usActiveMenu).indexOf($route.current.$$route.controller)))
							element.addClass('active');

					}, true);
				}
			};
		}]);
	
})(window, window.angular);