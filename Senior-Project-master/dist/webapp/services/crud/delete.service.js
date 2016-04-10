angular.module('ist-crud')
    .service("DeleteService", DeleteService);

DeleteService.$inject = ["HttpFactory"];

function DeleteService(http){
    var self = this;

    return {
        deleteProf: deleteProf,
        deleteRoom: deleteRoom
    };

    /*----------*/


    function deleteProf(){
        var params = {

        };

        return http.request('PHP_SCRIPT_GOES_HERE', params).then(function(data){
            //TODO: Success data here
        }, function(data){
            //TODO: Fail data here
        })
    }

    function deleteRoom(){
        var params = {

        };

        return http.request('PHP_SCRIPT_GOES_HERE', params).then(function(data){
            //TODO: Success data here
        }, function(data){
            //TODO: Fail data here
        })
    }
}