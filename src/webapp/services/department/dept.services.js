angular.module('ist-dept', ['ist-http']);
angular.module('ist-dept')
    .service("DepartmentService", DepartmentService);

DepartmentService.$inject = ['HttpFactory'];

function DepartmentService(http){
    var self = this;


    self.getDeptList = getDeptList;
    self.getDeptInfo = getDeptInfo;
    self.addDept = addDept;
    self.deleteDept = deleteDept;
    self.updateDept = updateDept;

    /*----------*/

    /**
     * Returns a promise containing the list of all departments
     *
     * @returns {*} AngularJS promise
     */
    function getDeptList(){
        var params = {

        };

        return http.request('PHP_SCRIPT_GOES_HERE', params).then(function(data){
            //TODO: Success data here
        }, function(data){
            //TODO: Fail data here
        })
    }

    /**
     * Returns a promise containing the information of a single department
     *
     * @returns {*}
     */
    function getDeptInfo(){
        var params = {

        };

        return http.request('PHP_SCRIPT_GOES_HERE', params).then(function(data){
            //TODO: Success data here
        }, function(data){
            //TODO: Fail data here
        })
    }

    /**
     * Returns a promise containing success or error if the department was added to the DB
     *
     * @returns {*}
     */
    function addDept(){
        var params = {

        };

        return http.request('PHP_SCRIPT_GOES_HERE', params).then(function(data){
            //TODO: Success data here
        }, function(data){
            //TODO: Fail data here
        })
    }

    /**
     * Returns a promise containing success or error if the department was removed from the DB
     *
     * @returns {*}
     */
    function deleteDept(){
        var params = {

        };

        return http.request('PHP_SCRIPT_GOES_HERE', params).then(function(data){
            //TODO: Success data here
        }, function(data){
            //TODO: Fail data here
        })
    }

    /**
     * Returns a promise containing success or error if the department was updated the DB
     *
     * @returns {*}
     */
    function updateDept(){
        var params = {

        };

        return http.request('PHP_SCRIPT_GOES_HERE', params).then(function(data){
            //TODO: Success data here
        }, function(data){
            //TODO: Fail data here
        })
    }
}