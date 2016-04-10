angular.module('ist-professor', ['ist-http']);
angular.module('ist-professor')
    .service("ProfessorService", ProfessorService);

ProfessorService.$inject = ['HttpFactory'];

function ProfessorService(http){
    var self = this;


    self.getProfList = getProfList;
    self.addProf = addProf;
    self.deleteProf = deleteProf;
    self.updateProf = updateProf;
    self.getProfForDept = getProfForDept;

    /*----------*/

    /**
     * Returns a promise containing a list of the professor names
     *
     * @returns {*}
     */
    function getProfList(){
        return http.request('http://orange.ist.rit.edu/teamOrange/php/Staff/getStaffList.php', {}).then(function(data){
            if(data.success){
                return data.data;
            }
        }, function(data){
            //TODO: Fail data here
        })
    }

    function getProfForDept(dept){
        return http.request('http://orange.ist.rit.edu/teamOrange/php/Staff/getStaffByDepartment.php', {deptCode: dept}).then(function(data){
            if(data.success){
                return data.data;
            }
        })
    }

    /**
     * Returns a promise containing success or error if the professor was added to the DB
     *
     * @returns {*}
     */
    function addProf(prof){

        return http.request('http://orange.ist.rit.edu/teamOrange/php/Staff/insertStaff.php', prof).then(function(data){
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
    function deleteProf(prof){

        return http.request('http://orange.ist.rit.edu/teamOrange/php/Staff/deleteStaff.php', prof).then(function(data){
            //TODO: Success data here
            return data;
        }, function(data){
            //TODO: Fail data here
        })
    }

    /**
     * Returns a promise containing success or error if the professor was updated in the DB
     *
     * @returns {*}
     */
    function updateProf(prof){
        return http.request('http://orange.ist.rit.edu/teamOrange/php/Staff/updateStaff.php', prof).then(function(data){
            //TODO: Success data here
            return data;
        }, function(data){
            //TODO: Fail data here
        })
    }
}
