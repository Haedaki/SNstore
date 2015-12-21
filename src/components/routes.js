angular.module('app').config(function($stateProvider, $urlRouterProvider){
// angular.module('app').config(function($stateProvider){

	$urlRouterProvider.otherwise('/error');
	$stateProvider.state('error', {
		url:'/error',
		template: '<h1>Tole je napaka</h1>'
	});
	$stateProvider.state('homepage', {
		url:'/',
		template: '<h1>Homepage</h1>'
	});
	// $stateProvider.state('prva', {
	// 	url:'/prva/:id',
	// 	template: '<h1>Prva stran</h1>',
	// 	controller: function($stateParms, $state){
	// 		$state.go('error');
	// 		$state.reload();
	// 		// alert($stateParms.id);
	// 		if($state.is('prva')){
	// 			//do stuff
	// 		}
	// 	}
	// })
});