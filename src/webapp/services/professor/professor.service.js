angular.module('ist-professor', ['ist-http']);
angular.module('ist-professor')
    .service("ProfessorService", ProfessorService);

ProfessorService.$inject = ['HttpFactory'];

function ProfessorService(http){
    var self = this;


    self.getProfList = getProfList;
    self.getProfInfo = getProfInfo;
    self.addProf = addProf;
    self.deleteProf = deleteProf;
    self.updateProf = updateProf;

    /*----------*/

    /**
     * Returns a promise containing a list of the professor names
     *
     * @returns {*}
     */
    function getProfList(){
        var params = {

        };

        return http.request('PHP_SCRIPT_GOES_HERE', params).then(function(data){
            //TODO: Success data here
        }, function(data){
            //TODO: Fail data here
        })
    }

    /**
     * Returns a promise containing the information for a single professor
     *
     * @returns {*}
     */
    function getProfInfo(){
        var params = {

        };

        return http.request('PHP_SCRIPT_GOES_HERE', params).then(function(data){
            //TODO: Success data here
        }, function(data){
            //TODO: Fail data here
        })
    }

    /**
     * Returns a promise containing success or error if the professor was added to the DB
     *
     * @returns {*}
     */
    function addProf(){
        var params = {

        };

        return http.request('PHP_SCRIPT_GOES_HERE', params).then(function(data){
            //TODO: Success data here
        }, function(data){
            //TODO: Fail data here
        })
    }

    /**
     * Returns a promise containing success or error if the professor was removed from the DB
     *
     * @returns {*}
     */
    function deleteProf(){
        var params = {

        };

        return http.request('PHP_SCRIPT_GOES_HERE', params).then(function(data){
            //TODO: Success data here
        }, function(data){
            //TODO: Fail data here
        })
    }

    /**
     * Returns a promise containing success or error if the professor was updated in the DB
     *
     * @returns {*}
     */
    function updateProf(){
        var params = {

        };

        return http.request('PHP_SCRIPT_GOES_HERE', params).then(function(data){
            //TODO: Success data here
        }, function(data){
            //TODO: Fail data here
        })
    }
}
