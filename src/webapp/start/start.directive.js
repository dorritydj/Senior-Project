angular.module('ist-start')
    .directive('istStart', StartScreenDirective);

/**
 * @ngdoc directive
 * @name ist-start:startScreen
 *
 * @description Directive for start screen
 */
function StartScreenDirective(){

    function link(scope, element, attrs, ctrl) {
        console.log("in start directive")
    }

    return {
        link: link,
        templateUrl: 'webapp/start/start.html',
        controller: 'StartScreenController',
        controllerAs: 'StartCtrl',
        restrict: 'E'
    };
}