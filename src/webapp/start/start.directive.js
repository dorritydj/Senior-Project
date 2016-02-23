angular.module('ist-start')
    .directive('startScreen', StartScreenDirective);

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