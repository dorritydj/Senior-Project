//TODO: Write tests, then code
//TODO: Start creating directives for bubbles and shit

/**
 * @ngdoc overview
 * @name ist-directory
 * @description Initial module declaration for ISTE 500 Senior Development Project
 */

angular.module('ist-directory', [
    'ist-professor',
    'ist-room',
    'ist-dept',
    'ist-crud',
    'ist-start'
]);

angular.module('ist-crud', ['ist-http']);