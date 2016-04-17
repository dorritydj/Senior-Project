angular.module('ist-dept', ['ist-http']);
angular.module('ist-dept')
    .service("DepartmentService", DepartmentService);

DepartmentService.$inject = ['HttpFactory'];

function DepartmentService(http){
    var self = this;


    self.getDeptList = getDeptList;
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

        return http.request('https://orange.ist.rit.edu/teamOrange/php/Department/getDepartments.php', params).then(function(data){
            console.log(data.data);
            return data.data;
        }, function(data){
            //TODO: Fail data here
        })
    }
    
}