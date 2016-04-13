angular.module('ist-back-to-home')
    .directive('istBackToStart', BackToStartDirective);

/**
 * @ngdoc directive
 * @name ist-bubble:bubbleButton
 *
 * @description Directive for bubble button
 */
function BackToStartDirective(){
    function link(scope, element, attrs, ctrl) {

    }

    return {
        link: link,
        templateUrl: 'webapp/bubble/bubble.html',
        controller: 'BubbleController',
        controllerAs: 'bubbleCtrl',
        restrict: 'E',
        scope:{
        }
    };
}