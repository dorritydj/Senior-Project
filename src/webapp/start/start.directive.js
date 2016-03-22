angular.module('ist-start')
    .directive('istStartScreen', StartScreenDirective);

/**
 * @ngdoc directive
 * @name ist-start:startScreen
 *
 * @description Directive for start screen
 */
function StartScreenDirective(){

    return {
        link: link,
        templateUrl: 'webapp/start/start.html',
        controller: 'StartScreenController',
        controllerAs: 'StartCtrl',
        restrict: 'E'
    };

    /* --------- */

    function link(scope, element, attrs, ctrl) {

    }
}