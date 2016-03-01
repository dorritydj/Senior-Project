angular.module('ist-room', ['ist-http']);
angular.module('ist-room').service("RoomService", RoomService);

RoomService.$inject = ['HttpFactory'];

function RoomService(http){
    var self = this;

    self.filePath = 'php/room';

    self.getRoomList = getRoomList;
    self.getRoomInfo = getRoomInfo;
    self.addRoom = addRoom;
    self.deleteRoom = deleteRoom;
    self.updateRoom = updateRoom;

    /*----------*/

    function getRoomList(){
        var params = {

        };

        return http.request('PHP_SCRIPT_GOES_HERE', params).then(function(data){
            //TODO: Success data here
        }, function(data){
            //TODO: Fail data here
        })
    }

    function getRoomInfo(){
        var params = {

        };

        return http.request('PHP_SCRIPT_GOES_HERE', params).then(function(data){
            //TODO: Success data here
        }, function(data){
            //TODO: Fail data here
        })
    }

    function addRoom(){
        var params = {

        };

        return http.request('PHP_SCRIPT_GOES_HERE', params).then(function(data){
            //TODO: Success data here
        }, function(data){
            //TODO: Fail data here
        })
    }

    function deleteRoom(){
        var params = {

        };

        return http.request('PHP_SCRIPT_GOES_HERE', params).then(function(data){
            //TODO: Success data here
        }, function(data){
            //TODO: Fail data here
        })
    }

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
