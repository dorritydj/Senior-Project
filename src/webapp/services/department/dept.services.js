angular.module('ist-dept', ['ist-http']);
angular.module('ist-dept')
    .service("DepartmentService", DepartmentService);

DepartmentService.$inject = ['HttpFactory'];

function DepartmentService(http){
    var self = this;

    return {
        getDeptList: getDeptList,
        getDeptInfo: getDeptInfo
    };

    /*----------*/


    function getDeptList(){
        var params = {

        };

        return http.request('PHP_SCRIPT_GOES_HERE', params).then(function(data){
            //TODO: Success data here
        }, function(data){
            //TODO: Fail data here
        })
    }

    function getDeptInfo(){
        var params = {

        };

        return http.request('PHP_SCRIPT_GOES_HERE', params).then(function(data){
            //TODO: Success data here
        }, function(data){
            //TODO: Fail data here
        })
    }
}