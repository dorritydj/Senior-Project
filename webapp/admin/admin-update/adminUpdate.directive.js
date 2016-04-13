angular.module('ist-admin-update')
    .directive('istAdminUpdate', AdminUpdateDirective);

/**
 * @ngdoc directive
 * @name ist-bubble:bubbleButton
 *
 * @description Directive for bubble button
 */
function AdminUpdateDirective(){
    function link(scope, element, attrs, ctrl) {
        ctrl.dept = scope.dept;
        ctrl.getInfoForDept();
    }

    return {
        link: link,
        templateUrl: 'webapp/admin/admin-update/adminUpdate.html',
        controller: 'AdminUpdateController',
        controllerAs: 'adUpdateCtrl',
        restrict: 'E',
        scope:{
            dept: "@",
            prof: "@",
            room: "@"
        }
    };
}