/**
 * Created by dorritydj on 3/26/16.
 */
angular.module('ist-admin')
    .controller('AdminController', AdminController);

AdminController.$inject = ['$routeParams','$location'];

function AdminController($routeParams, $location){
    var self = this;

    self.page = $routeParams.page;
    self.login = login;
    self.goto = goto;

    function login(u, p){
        //TODO: Call login functionality here
        $location.path('/admin/choose');
    }

    function goto(page){
        $location.path('/admin/'+page);
    }
}