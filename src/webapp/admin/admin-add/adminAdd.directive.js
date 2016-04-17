angular.module('ist-admin-add')
    .directive('istAdminAdd', AdminAddDirective);

/**
 * @ngdoc directive
 * @name ist-admin-add
 *
 * @description Directive for admin add
 */
function AdminAddDirective(){
    function link(scope, element, attrs, ctrl) {
        ctrl.dept = scope.dept;
    }

    return {
        link: link,
        templateUrl: 'webapp/admin/admin-add/adminAdd.html',
        controller: 'AdminAddController',
        controllerAs: 'adAddCtrl',
        restrict: 'E',
        scope:{
            dept: "@"
        }
    };
}