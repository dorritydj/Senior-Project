/**
 * Created by dorritydj on 3/22/16.
 */
angular.module("ist-info", [
    'ist-profDisplay',
    'ist-roomDisplay',
    'ist-deptDisplay'
]);

angular.module("ist-info")
    .controller("InfoController", InfoController);

InfoController.$inject = ['$routeParams'];

function InfoController($routeParams){
    var self = this;

    self.route = $routeParams.type;
    self.code = ($routeParams.code === undefined) ? "ALL"  : $routeParams.code;
}