/**
 * Created by dorritydj on 3/25/16.
 */
angular.module('ist-profDisplay')
    .directive('istProf', ProfDisplayDirective);

function ProfDisplayDirective(){
    function link(scope, attr, elem, ctrl){
        ctrl.loadProfList();
    }

    return {
        link: link,
        templateUrl: 'webapp/infoDisplay/profDisplay/profDisplay.html',
        controller: 'ProfDisplayController',
        controllerAs: 'ProfDispCtrl',
        restrict: 'E'
    };
}