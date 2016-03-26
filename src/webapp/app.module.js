//TODO: Write tests, then code
//TODO: Start creating directives for bubbles and shit

/**
 * @ngdoc overview
 * @name ist-directory
 * @description Initial module declaration for ISTE 500 Senior Development Project
 */

angular.module('ist-directory', [
    'ngRoute',
    'ist-start',
    'ist-bubble',
    'ist-info'
]);

angular.module('ist-directory')
    .config(function($routeProvider){
        $routeProvider.when("/",{
            templateUrl: "webapp/start/start.html"
        }).when("/info/:type",{
            templateUrl: "webapp/infoDisplay/infoDisplay.html",
            controller: "InfoController as infoCtrl"
        }).otherwise({
            redirectTo: "/"
        })
    });

