/**
 * Created by dorritydj on 3/25/16.
 */
angular.module('ist-roomDisplay')
    .directive('istRoom', RoomDisplayDirective);

function RoomDisplayDirective(){
    function link(scope, attr, elem, ctrl){
        ctrl.loadRoomList();
    }

    return {
        link: link,
        templateUrl: 'webapp/infoDisplay/roomDisplay/roomDisplay.html',
        controller: 'RoomDisplayController',
        controllerAs: 'RoomDispCtrl',
        restrict: 'E'
    };
}