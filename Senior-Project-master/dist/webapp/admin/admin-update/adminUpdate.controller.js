angular.module('ist-admin-update')
    .controller("AdminUpdateController", AdminUpdateController);

AdminUpdateController.$inject = ['ProfessorService', 'RoomService'];

function AdminUpdateController(profServ, roomServ){
    var self = this;

    self.updateProf = updateProf;
    self.updateRoom = updateRoom;
    self.deleteProf = deleteProf;
    self.deleteRoom = deleteRoom;
    self.getInfoForDept = getInfoForDept;

    self.profs = [];
    self.rooms = [];
    self.dept = "";

    function getInfoForDept(){
        profServ.getProfForDept(self.dept).then(function(data){
            //TODO: set profs properly
            self.profs = data;

            roomServ.getRoomForDept(self.dept).then(function(data){
                //TODO: set rooms properly
                self.rooms = data;
            })
        });
    }

    function updateProf(prof){
        profServ.updateProf(prof);
    }

    function updateRoom(room){
        roomServ.updateRoom(room);
    }

    function deleteProf(prof){
        profServ.deleteProf(prof).then(function(data){
            if(data.success){
                console.log(data.success);
                profServ.getProfForDept(self.dept).then(function(data){
                    self.profs = data;
                });
            }
        });
    }

    function deleteRoom(room){
        roomServ.deleteRoom(room).then(function(data){
            if(data.success){
                console.log(data.success);
                roomServ.getRoomForDept(self.dept).then(function(data){
                    self.rooms = data;
                });
            }
        });
    }
}