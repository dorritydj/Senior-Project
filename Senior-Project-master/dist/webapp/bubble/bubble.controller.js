angular.module('ist-bubble')
    .controller("BubbleController", BubbleController);

BubbleController.$inject = [];

function BubbleController(){
    var self = this;

    self.title = "";
    self.link = "";
}