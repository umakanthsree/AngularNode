angular.module("F1FeederApp.services",[])
.factory("dataAPICalls",function($http){
	
	var dataAPICalls = {}

	dataAPICalls.getDrivers = function(){
		return $http({
        method: 'GET', 
        url: 'http://127.0.0.1:6060/drivers'
      });
	}

	dataAPICalls.getDriverDetails = function(id){
		return $http({
        method: 'GET', 
        url: 'http://127.0.0.1:6060/drivers/'+id
      });
	}
	return dataAPICalls;
});