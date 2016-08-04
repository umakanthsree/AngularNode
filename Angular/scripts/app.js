angular.module('F1FeederApp',[
"F1FeederApp.controllers",
"F1FeederApp.services","ngRoute"])
.directive('helloWorld',function(){
	return {
		restrict: 'AE',
		replace: true,
		transclude: true,
		scope: {
			first:'@',
			second: '@'
		},
		// compile:function(ele,attr){
		// 	console.log("ele",ele);
		// 	console.log("attr",attr);	
		// },
		link: function(scope, element, attrs) {
      		console.log("scope",scope);
      		console.log("ele",element);
			console.log("attr",attrs);	
            scope.name = attrs.first + attrs.second;
        },
        controller: "F1FeederDriversController",
		template: '<div style="border: 1px solid black; width: 20%; margin:10px 0">' +
                    '<div style="background-color: gray">Mr./Ms. {{first}}{{second}} <ng-transclude></ng-transclude> </div>' +
                  '</div>'
	}
})
.config(["$routeProvider",function($routeProvider){
	$routeProvider
		.when("/drivers",{templateUrl: "/drivers.html", controller: "F1FeederDriversController"})
		.when("/drivers/:id",{templateUrl: "/driverDetails.html", controller: "F1FeederDriverDetailController"})
		.otherwise({redirectTo: "/drivers"})
}]);
