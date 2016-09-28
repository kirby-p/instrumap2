(function() {

	'use strict'

	// var app = angular.module('instrumentApp', ['auth0.lock', 'angular-jwt', 'ngRoute', 'angularLoad']);
	angular
		.module('instrumentApp', ['auth0.lock', 'angular-jwt', 'ngRoute', 'angularLoad'])
		// app.config(function($routeProvider, lockProvider) {
		.config(config);

		config.$inject = ['$routeProvider', 'lockProvider', 'jwtOptionsProvider', 'jwtInterceptorProvider'];

		function config($routeProvider, lockProvider, angularLoad, jwtOptionsProvider, jwtInterceptorProvider) {

			lockProvider.init ({
				clientID: 'wSOdfiXI43WyKI1bWL8i8pu0HNuZmaJV',
				domain: 'kirbyp.auth0.com'
			});

			$routeProvider
				.when('/', {
					templateUrl : 'app/pages/home/home.html',
					controller 	: 'homeController'
				})

				// .when('/login', {
				// 	templateUrl: 'app/pages/login/login.html',
				// 	controller: 'loginController'
				// })

				.when('/clarinet', {
					templateUrl : 'app/pages/basic-template.html',
					controller 	: 'clarinetController',
				})

				.when('/trumpet', {
					templateUrl : 'app/pages/basic-template.html',
					controller 	: 'trumpetController'
				});
		}
})();

function openNav() {
    document.getElementById("instrumapNav").style.height = "60%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    document.getElementById("instrumapNav").style.height = "0%";
}