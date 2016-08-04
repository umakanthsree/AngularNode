var app = angular.module('F1FeederApp.directives', []);

app.directive('helloWorld', function() {
  return {
      restrict: 'E',
      replace: 'true',
      scope:{},
      link: function(scope, element, attrs) {
      	console.log("attrs",attrs);
            // scope.name = attrs.first + attrs.second;
        },
      template: '<h3>Hello World!! {{name}}</h3>'
  };
});