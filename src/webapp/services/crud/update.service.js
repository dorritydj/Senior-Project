angular.module('ist-crud')
    .service("UpdateService", UpdateService);

UpdateService.$inject = ["HttpFactory"];

function UpdateService(http){
    var self = this;

    return {
        updateProf: updateProf,
        updateRoom: updateRoom
    };

    /*----------*/


    function updateProf(){
        var params = {

        };

        return http.request('PHP_SCRIPT_GOES_HERE', params).then(function(data){
            //TODO: Success data here
        }, function(data){
            //TODO: Fail data here
        })
    }

    function updateRoom(){
        var params = {

        };

        return http.request('PHP_SCRIPT_GOES_HERE', params).then(function(data){
            //TODO: Success data here
        }, function(data){
            //TODO: Fail data here
        })
    }
}