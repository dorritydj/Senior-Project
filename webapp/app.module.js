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
    'ist-info',
    'ist-admin'
]);

angular.module('ist-directory')
    .config(function($routeProvider){
        $routeProvider.when("/",{
            templateUrl: "webapp/start/start.html"
        }).when("/info/:type/:code?",{
            templateUrl: "webapp/infoDisplay/infoDisplay.html",
            controller: "InfoController as infoCtrl"
        }).when('/admin/:page?',{
            templateUrl: "webapp/admin/admin.php",
            controller: "AdminController as AdminCtrl"
        }).when('/admin/',{
            redirectTo: "/admin/choose"
        }).otherwise({
            redirectTo: "/"
        })
    });

