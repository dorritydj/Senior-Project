angular.module('ist-room', ['ist-http']);
angular.module('ist-room').service("RoomService", RoomService);

RoomService.$inject = ['HttpFactory'];

function RoomService(http){
    var self = this;

    return {
        getRoomList: getRoomList
    };

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
}
