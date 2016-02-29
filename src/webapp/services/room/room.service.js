angular.module('ist-room', ['ist-http']);
angular.module('ist-room').service("RoomService", RoomService);

RoomService.$inject = ['HttpFactory'];

function RoomService(http){
    var self = this;

    self.getRoomList = getRoomList;
    self.getRoomInfo = getRoomInfo;
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

        return http.request('PHP_SCRIPT_GOES_HERE', params).then(function(data){
            //TODO: Success data here
        }, function(data){
            //TODO: Fail data here
        })
    }

    /**
     * Returns a promise containing the details of a single room
     *
     * @returns {*}
     */
    function getRoomInfo(){
        var params = {

        };

        return http.request('PHP_SCRIPT_GOES_HERE', params).then(function(data){
            //TODO: Success data here
        }, function(data){
            //TODO: Fail data here
        })
    }

    /**
     * Returns a promise containing success or error if the room was added to the DB
     *
     * @returns {*}
     */
    function addRoom(){
        var params = {

        };

        return http.request('PHP_SCRIPT_GOES_HERE', params).then(function(data){
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
    function deleteRoom(){
        var params = {

        };

        return http.request('PHP_SCRIPT_GOES_HERE', params).then(function(data){
            //TODO: Success data here
        }, function(data){
            //TODO: Fail data here
        })
    }

    /**
     * Returns a promise containing success or error if the room was updated in the DB
     *
     * @returns {*}
     */
    function updateRoom(){
        var params = {

        };

        return http.request('PHP_SCRIPT_GOES_HERE', params).then(function(data){
            //TODO: Success data here
        }, function(data){
            //TODO: Fail data here
        })
    }
}
