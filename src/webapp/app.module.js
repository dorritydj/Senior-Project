/**
 * Created by dorritydj on 2/14/16.
 */

//TODO: Write tests, then code
//TODO: Start creating directives for bubbles and shit

angular.module('ist-directory', [
    'ist-professor',
    'ist-room',
    'ist-dept',
    'ist-crud',
    'ist-start'
]);

angular.module('ist-crud', ['ist-http']);