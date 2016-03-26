/**
 * Created by dorritydj on 3/22/16.
 */
angular.module("ist-info", [
    'ist-profDisplay'
]);

angular.module("ist-info")
    .controller("InfoController", InfoController);

InfoController.$inject = ['$routeParams'];

function InfoController($routeParams){
    var self = this;

    self.route = $routeParams.type;
}