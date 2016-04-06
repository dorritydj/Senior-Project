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

    function init(){
        getSession();
    }

    init();

    function getSession(){
        loginServ.getSession().then(function(data){
            self.user = data.data;
            console.log(self.user);
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

    function addUser(){

    }

    function removeUser(){

    }
}