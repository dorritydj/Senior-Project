/**
 * Created by dorritydj on 3/25/16.
 */
angular.module('ist-deptDisplay')
    .directive('istDept', DeptDisplayDirective);

function DeptDisplayDirective(){
    function link(scope, attr, elem, ctrl){
        ctrl.loadDeptList();
        console.log(ctrl.departments);
    }

    return {
        link: link,
        templateUrl: 'webapp/infoDisplay/deptDisplay/deptDisplay.html',
        controller: 'DeptDisplayController',
        controllerAs: 'DeptDispCtrl',
        restrict: 'E'
    };
}