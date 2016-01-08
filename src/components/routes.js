angular.module('app').config(function($stateProvider, $urlRouterProvider){

	$urlRouterProvider.otherwise('/error');
	
	$stateProvider.state('home', {
		url:'/',
		templateUrl: 'templates/home.html', 
	}); 
	$stateProvider.state('category', {
		url: '/category/:id',
		controller: 'categoryController',
		templateUrl: 'templates/category.html',
	});
	$stateProvider.state('error', {
		url:'/error',
		template: '<h1>Napaka oz. stran ne obstaja.</h1>'
	});

});