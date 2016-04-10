angular.module('ist-admin-add')
    .controller("AdminAddController", AdminAddController);

AdminAddController.$inject = ['ProfessorService', 'RoomService'];

function AdminAddController(profServ, roomServ){
    var self = this;

    self.addProf = addProf;
    self.addRoom = addRoom;

    self.prof = {};
    self.room = {};
    self.dept = "";
    self.category = "Professor";

    function addProf(prof){
        profServ.addProf(prof);
    }

    function addRoom(room){
        roomServ.addRoom(room);
    }
}