angular.module('ist-bubble')
    .directive('istBubble', BubbleButtonDirective);

/**
 * @ngdoc directive
 * @name ist-bubble:bubbleButton
 *
 * @description Directive for bubble button
 */
function BubbleButtonDirective(){
    function link(scope, element, attrs, ctrl) {
        ctrl.title = scope.title;
        ctrl.link = scope.goto;
    }

    return {
        link: link,
        templateUrl: 'webapp/bubble/bubble.html',
        controller: 'BubbleController',
        controllerAs: 'bubbleCtrl',
        restrict: 'E',
        scope:{
            title: "@",
            goto: "@"
        }
    };
}