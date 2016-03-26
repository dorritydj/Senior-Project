/**
 * Created by dorritydj on 3/25/16.
 */
angular.module('ist-login')
    .service('LoginService', LoginService);

LoginService.$inject = ['HttpFactory'];

function LoginService(){
    var self = this;

    self.login = login;
    self.logout = logout;

    function login(){

    }

    function logout(){

    }
}