angular.module('ist-http', []);
angular.module('ist-http')
    .factory("HttpFactory", HttpFactory);

HttpFactory.$inject = ['$http'];

function HttpFactory($http){
    var self = this;

    return {
        http: http
    };

    /* ---------- */

    function request(url, params){
        return $http({
            method: 'GET',
            url: url,
            params: params
        }).then(function(data){
            return data.data;
        })
    }
}