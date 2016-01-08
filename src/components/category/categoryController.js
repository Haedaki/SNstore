angular.module('app').controller('categoryController', function($scope, $http, $stateParams){
	var showProducts = [];
	var catid = $stateParams.id;
 	return $http.get("http://smartninja.betoo.si/api/eshop/categories/"+catid+"/products").
    then(function(products)
    {
    	showProducts = products.data;
	    $scope.prods = showProducts;
    })
});