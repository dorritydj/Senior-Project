/**
 * Created by dorritydj on 3/25/16.
 */
angular.module('ist-profDisplay')
    .controller("ProfDisplayController", ProfDisplayController)
    .controller("ProfModalCtrl", ProfModalCtrl);

ProfDisplayController.$inject = ['ProfessorService', '$uibModal'];

function ProfDisplayController(profServ, $uibModal){
    var self = this;

    self.profNames = [];

    self.loadProfList = loadProfList;
    self.open = open;

    function loadProfList(code){
        profServ.getProfList().then(function(data){
            if(code !== "ALL"){
                for(var i = 0; i < data.length; i++){
                    if(data[i].department == code){
                        self.profNames.push(data[i]);
                    }
                }
            }else if(code === "ALL"){
                self.profNames = data;
            }
        });
    }

    function open(id){
        for(var i = 0; i < self.profNames.length; i++){
            if(self.profNames[i].idStaff == id){
                var modalInstance = $uibModal.open({
                    animation: true,
                    templateUrl: 'profModal.html',
                    controller: 'ProfModalCtrl',
                    size: 'lg',
                    resolve: {
                        staff: function(){
                            return self.profNames[i]
                        }
                    }
                });
            }
        }
    }
}

ProfModalCtrl.$inject = ['$scope', '$uibModalInstance', 'staff'];

function ProfModalCtrl($scope, $uibModal, staff){
    var self = this;

    console.log(staff);
    $scope.staff = staff;

    $scope.cancel = function() {
        $uibModal.close();
    }
}

