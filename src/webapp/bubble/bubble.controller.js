angular.module('ist-bubble')
    .controller("BubbleController", BubbleController);

BubbleController.$inject = ['$location'];

function BubbleController($loc){
    var self = this;

    self.title = "";

    self.open = open;

    function open(link){
        $loc.path(link);
    }
}