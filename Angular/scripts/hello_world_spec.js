
// var angular = require('./app/assets/javascripts/angular/angular.js');
// var app = require('./app/assets/javascripts/directives/app.js');
//var app = angular.app
describe('Sample Directive', function(){
  var injector;
  var element;
  var scope;

  beforeEach(function() {
    /// Create a new dependency injector using the 'myApp' module
    console.log('injector');
    injector = angular.injector(['ng', 'F1FeederApp'])
    // injector = angular.injector(['F1FeederApp']);

    console.log('injector next');

    injector.invoke(function($rootScope, $compile) {
      // Get a new scope
      scope = $rootScope.$new();

      // Compile some HTML that uses the directive
	  element = $compile('<hello-world first="uma" second="kanth"></hello-world>')(scope);
      scope.$digest();
    });
    //return element;
  });

  
    it('should return Sample directive', function(){
      console.log(element);
      expect(element.html()).to.equal('hello world umakanth');
      expect(true).to.be.truthy;
      expect("true").to.equal('true');
    });
 
});
