angular.module('F1FeederApp.controllers',[]).
// F1FeederDriversController
controller('F1FeederDriversController',function($scope, dataAPICalls){
	$scope.driversList = [];
	$scope.nameFilter = null;

	console.log('controller');

	dataAPICalls.getDrivers().success(function(response){
		console.log(response);
		$scope.driversList = response;
	});

	$scope.searchFilter = function (driver) {
	    var keyword = new RegExp($scope.nameFilter, 'i');
	    return !$scope.nameFilter || keyword.test(driver.Driver.givenName) || keyword.test(driver.Driver.familyName);
	};
}).


//F1FeederDriverDetailController
controller('F1FeederDriverDetailController',function($scope, $routeParams, dataAPICalls){
	$scope.driver = null;
	$scope.id = $routeParams.id;

	dataAPICalls.getDriverDetails($scope.id ).success(function(response){
		console.log(response);
		$scope.driver = response;
	});
});