angular.module('app').directive('navMenu', function(){
	return {
		restrict: 'E',
		scope:{}, 
		controller: 'navmenuController',
		templateUrl: 'templates/navmenu.html'
	};
});