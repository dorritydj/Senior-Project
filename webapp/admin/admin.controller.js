/**
 * Created by dorritydj on 3/26/16.
 */
angular.module('ist-admin')
    .controller('AdminController', AdminController);

AdminController.$inject = ['$routeParams','$location'];

function AdminController($routeParams, $location){
    var self = this;

    self.page = $routeParams.page;
    self.user = {};
    self.goto = goto;


    function goto(page){
        $location.path('/admin/'+page);
    }

    function addProf(){

    }

    function addRoom(){

    }

    function addUser(){

    }

    function removeUser(){

    }
}