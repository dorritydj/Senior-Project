angular.module('ist-crud')
    .service("AddService", AddService);

AddService.$inject = ["HttpFactory"];

function AddService(http){
    var self = this;

    return {
        addProf: addProf,
        addRoom: addRoom
    };

    /*----------*/


    function addProf(){
        var params = {

        };

        return http.request('PHP_SCRIPT_GOES_HERE', params).then(function(data){
            //TODO: Success data here
        }, function(data){
            //TODO: Fail data here
        })
    }

    function addRoom(){
        var params = {

        };

        return http.request('PHP_SCRIPT_GOES_HERE', params).then(function(data){
            //TODO: Success data here
        }, function(data){
            //TODO: Fail data here
        })
    }
}