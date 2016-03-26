/**
 * Created by dorritydj on 3/25/16.
 */
angular.module('ist-profDisplay')
    .controller("ProfDisplayController", ProfDisplayController)
    .controller("ModalInstanceCtrl", ModalInstanceCtrl);

ProfDisplayController.$inject = ['ProfessorService', '$uibModal', '$scope'];

function ProfDisplayController(profServ, $uibModal, $scope){
    var self = this;

    self.profNames = [];

    self.loadProfList = loadProfList;
    self.open = open;

    function loadProfList(){
        profServ.getProfList().then(function(data){
            self.profNames = data;
        });
    }

    function open(id){
        for(var i = 0; i < self.profNames.length; i++){
            if(self.profNames[i].idStaff == id){
                var modalInstance = $uibModal.open({
                    animation: true,
                    templateUrl: 'myModalContent.html',
                    controller: 'ModalInstanceCtrl',
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

ModalInstanceCtrl.$inject = ['$scope', '$uibModalInstance', 'staff'];

function ModalInstanceCtrl($scope, $uibModal, staff){
    var self = this;

    console.log(staff);
    $scope.staff = staff;

    $scope.cancel = function() {
        $uibModal.close();
    }
}

