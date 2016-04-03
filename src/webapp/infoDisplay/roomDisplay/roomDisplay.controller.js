/**
 * Created by dorritydj on 3/25/16.
 */
angular.module('ist-roomDisplay')
    .controller("RoomDisplayController", RoomDisplayController)
    .controller("RoomModalCtrl", RoomModalCtrl);

RoomDisplayController.$inject = ['RoomService', '$uibModal', '$scope'];

function RoomDisplayController(roomServ, $uibModal, $scope){
    var self = this;

    self.roomList = [];

    self.loadRoomList = loadRoomList;
    self.open = open;

    function loadRoomList(){
        roomServ.getRoomList().then(function(data){
            self.roomList = data;
        });
    }

    function open(id){
        for(var i = 0; i < self.roomList.length; i++){
            if(self.roomList[i].roomId == id){
                var modalInstance = $uibModal.open({
                    animation: true,
                    templateUrl: 'roomModal.html',
                    controller: 'RoomModalCtrl',
                    size: 'lg',
                    resolve: {
                        room: function(){
                            return self.roomList[i]
                        }
                    }
                });
            }
        }
    }
}

RoomModalCtrl.$inject = ['$scope', '$uibModalInstance', 'room'];

function RoomModalCtrl($scope, $uibModal, room){
    var self = this;

    $scope.rooms = room;

    $scope.cancel = function() {
        $uibModal.close();
    }
}

