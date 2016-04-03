/**
 * Created by dorritydj on 3/25/16.
 */
angular.module('ist-login')
    .service('LoginService', LoginService);

LoginService.$inject = ['HttpFactory'];

function LoginService(http){
    var self = this;

    self.getSession = getSession;

    function getSession(u,p){
        return http.request('http://orange.ist.rit.edu/teamOrange/php/User/getSession.php', {}).then(function(data){
            return data;
        }, function(data){

        });
    }
}