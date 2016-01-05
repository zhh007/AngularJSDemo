var myModule = angular.module('MyModule', []);

myModule.directive('hello', function(){
    return {
        restrict: 'E',
        template: '<div>hi, everyone!</div>',
        replace: true
    };
});