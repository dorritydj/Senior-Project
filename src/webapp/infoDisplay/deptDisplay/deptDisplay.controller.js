/**
 * Created by dorritydj on 3/25/16.
 */
angular.module('ist-deptDisplay')
    .controller("DeptDisplayController", DeptDisplayController);

DeptDisplayController.$inject = ['DepartmentService', '$location'];

function DeptDisplayController(deptServ, $loc){
    var self = this;

    self.departments = [];

    self.loadDeptList = loadDeptList;
    self.open = open;

    function loadDeptList(){
        deptServ.getDeptList().then(function(data){
            self.departments = data;
        });
    }

    function open(id){
        $loc.path('info/professors/' + id);
    }
}

