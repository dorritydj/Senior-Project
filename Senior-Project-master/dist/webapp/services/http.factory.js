angular.module('ist-http', []);
angular.module('ist-http')
    .factory("HttpFactory", HttpFactory);

HttpFactory.$inject = ['$http'];

function HttpFactory($http){

    function request(url, params){
        return $http({
            method: 'POST',
            url: url,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            data: $.param(params)
        }).then(function(data){
            return data.data;
        })
    }

    return{
        request: request
    }
}