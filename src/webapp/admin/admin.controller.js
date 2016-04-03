/**
 * Created by dorritydj on 3/26/16.
 */
angular.module('ist-admin')
    .controller('AdminController', AdminController);

AdminController.$inject = ['$routeParams','$location', 'LoginService'];

function AdminController($routeParams, $location, loginServ){
    var self = this;

    self.page = $routeParams.page;
    self.user = {};
    self.getSession = getSession;
    self.goto = goto;
    self.add = add;
    self.update = update;
    self.deleteStuff = deleteStuff;

    function init(){
        getSession();
    }

    init();

    function getSession(){
        loginServ.getSession().then(function(data){
            self.user = data.data;
        }, function(data){

        });
    }

    function goto(page){
        $location.path('/admin/'+page);
    }

    function addProf(){

    }

    function addRoom(){

    }

    function updateProf(){

    }

    function updateRoom(){

    }

    function deleteProf(){

    }

    function deleteRoom(){

    }

    function addUser(){

    }

    function removeUser(){

    }
}