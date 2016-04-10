/**
 * Created by dorritydj on 3/25/16.
 */
angular.module('ist-profDisplay')
    .controller("ProfDisplayController", ProfDisplayController);

ProfDisplayController.$inject = ['ProfessorService'];

function ProfDisplayController(profServ){
    var self = this;

    self.profNames = [];

    self.loadProfList = loadProfList;

    function loadProfList(){
        profServ.getProfList().then(function(data){
            self.profNames = data;
        });
    }
}