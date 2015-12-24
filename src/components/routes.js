angular.module('app').config(function($stateProvider, $urlRouterProvider){

	$urlRouterProvider.otherwise('/error');
	
	$stateProvider.state('home', {
		url:'/',
		templateUrl: 'index.html',
		controller:  function ($scope, CategoryFactory)
		{
		  $scope.categories = CategoryFactory.query({});
		}
	});
	$stateProvider.state('category', {
		url: '/category',
		templateUrl: '/category.html',
		controller:  function ($scope, CategoryFactory)
		{
		  $scope.categories = CategoryFactory.query({});
		}
	});
	$stateProvider.state('error', {
		url:'/error',
		template: '<h1>Napaka oz. stran ne obstaja.</h1>'
	});

});