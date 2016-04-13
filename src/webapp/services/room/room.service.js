angular.module('ist-room', ['ist-http']);
angular.module('ist-room').service("RoomService", RoomService);

RoomService.$inject = ['HttpFactory'];

function RoomService(http){
    var self = this;

    self.filePath = 'php/room';

    self.getRoomList = getRoomList;
    self.getRoomForDept = getRoomForDept;
    self.addRoom = addRoom;
    self.deleteRoom = deleteRoom;
    self.updateRoom = updateRoom;

    /*----------*/

    /**
     * Returns a promise containing the list of rooms
     *
     * @returns {*}
     */
    function getRoomList(){
        var params = {

        };

        return http.request('https://orange.ist.rit.edu/teamOrange/php/Room/getRooms.php', params).then(function(data){
            if(data.success === true){
                return data.data;
            }
        }, function(data){
            //TODO: Fail data here
        })
    }

    function getRoomForDept(dept){
        return http.request('https://orange.ist.rit.edu/teamOrange/php/Room/getRoomsByDepartment.php', {deptCode: dept}).then(function(data){
            if(data.success){
                return data.data;
            }
        })
    }

    /**
     * Returns a promise containing success or error if the room was added to the DB
     *
     * @returns {*}
     */
    function addRoom(room){

        return http.request('https://orange.ist.rit.edu/teamOrange/php/Room/insertRoom.php', room).then(function(data){
            //TODO: Success data here
        }, function(data){
            //TODO: Fail data here
        })
    }

    /**
     * Returns a promise containing success or error if the room was removed from the DB
     *
     * @returns {*}
     */
    function deleteRoom(room){

        return http.request('https://orange.ist.rit.edu/teamOrange/php/Room/deleteRoom.php', room).then(function(data){
            //TODO: Success data here
            return data;
        }, function(data){
            //TODO: Fail data here
        })
    }

    /**
     * Returns a promise containing success or error if the room was updated in the DB
     *
     * @returns {*}
     */
    function updateRoom(room){

        return http.request('https://orange.ist.rit.edu/teamOrange/php/Room/updateRoom.php', room).then(function(data){
            //TODO: Success data here
        }, function(data){
            //TODO: Fail data here
        })
    }
}
