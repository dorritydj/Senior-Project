angular.module('ist-professor', ['ist-http']);
angular.module('ist-professor')
    .service("ProfessorService", ProfessorService);

ProfessorService.$inject = ['HttpFactory'];

function ProfessorService(http){
    var self = this;

    return {
        getProfList: getProfList,
        getProfInfo: getProfInfo
    };

    /*----------*/


    function getProfList(){
        var params = {

        };

        return http.request('PHP_SCRIPT_GOES_HERE', params).then(function(data){
            //TODO: Success data here
        }, function(data){
            //TODO: Fail data here
        })
    }

    function getProfInfo(){
        var params = {

        };

        return http.request('PHP_SCRIPT_GOES_HERE', params).then(function(data){
            //TODO: Success data here
        }, function(data){
            //TODO: Fail data here
        })
    }
}
