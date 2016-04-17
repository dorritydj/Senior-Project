angular.module('ist-admin-add')
    .controller("AdminAddController", AdminAddController);

AdminAddController.$inject = ['ProfessorService', 'RoomService', '$uibModal'];

function AdminAddController(profServ, roomServ, $uibModal){
    var self = this;

    self.addProf = addProf;
    self.addRoom = addRoom;

    self.prof = {};
    self.room = {};
    self.dept = "";
    self.category = "Professor";

    /**
     * Opens a modal to confirm the add selection.
     * If the input looks good, calls the script to add to DB,
     * if not, returns back to the input screen
     *
     * @param prof
     */
    function addProf(prof){
        var modalInstance = $uibModal.open({
            animation: true,
            templateUrl: 'webapp/infoDisplay/profDisplay/profModal.html',
            controller: 'ProfModalCtrl',
            size: 'lg',
            resolve: {
                staff: function(){
                    return self.prof;
                }
            }
        });

        modalInstance.result.then(function(){
            profServ.addProf(prof);
        });
    }

    /**
     * Calls the script to add the room to the DB
     *
     * @param room
     */
    function addRoom(room){
        roomServ.addRoom(room);
    }
}