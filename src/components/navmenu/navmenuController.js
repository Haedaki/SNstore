angular.module('app').controller('navmenuController', function($scope, $q, $http){

	var showCategories = [];

 	return $http.get("http://smartninja.betoo.si/api/eshop/categories").
    then(function(categories)
    {
    	showCategories = categories.data;
	    $scope.cats = showCategories;
    })
});