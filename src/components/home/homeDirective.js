angular.module('app').directive('homePage', function(){
	return {
		restrict: 'E',
		scope:{}, 
		controller: 'homeController',
		templateUrl: 'templates/home.html'
	};
});