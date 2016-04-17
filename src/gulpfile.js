/**
 * Created by dorritydj on 2/14/16.
 */
var gulp = require('gulp');
var inject = require('gulp-inject');
var jasmine = require('gulp-jasmine');
var docs = require('gulp-ngdocs');
var annotate = require('gulp-ng-annotate');
var concat = require('gulp-concat');
var del = require('del');
var merge = require('merge-stream');
var debug = require('gulp-debug');
var run = require('run-sequence');

var libsjs = gulp.src([
    'node_modules/jquery/dist/jquery.min.js',
    'node_modules/angular/angular.min.js',
    'node_modules/angular-animate/angular-animate.min.js',
    'node_modules/angular-route/angular-route.min.js',
    'node_modules/angular-ui-bootstrap/dist/ui-bootstrap-tpls.js'
]);

var libscss = gulp.src([
    'node_modules/angular-ui-bootstrap/dist/ui-bootstrap-csp.css',
    'node_modules/bootstrap/dist/css/bootstrap.min.css',
    'webapp/styles/app.css'
]);

var sources = gulp.src([
    'webapp/**/*.js'
]);

var php = gulp.src([
    'php/**/*.php'
]);

var html = gulp.src([
    'webapp/**/*.html',
    'webapp/**/*.php'
]);

var index = gulp.src([
    'index.html'
]);

gulp.task('clean', function(){
    return del([
        '../dist/'
    ], {
        force: true
    }).then(function(paths) {
        console.log('Files and folders that would be deleted:\n', paths.join('\n'));
    });
});


gulp.task('move-dev', function(){
    console.log("Moving files to dist/");

    libsjs.pipe(gulp.dest('../dist/libs/'));
    libscss.pipe(gulp.dest('../dist/libs/'));
    php.pipe(gulp.dest('../dist/php'));
    sources.pipe(gulp.dest('../dist/webapp/'));
    html.pipe(gulp.dest('../dist/webapp/'));

    return merge(libsjs,libscss,sources,html,index);
});

gulp.task('move-prod', function(){
    console.log("Moving files to dist/");

    libsjs
        .pipe(concat('libs.js'))
        .pipe(gulp.dest('../dist/libs/'));

    libscss
        .pipe(gulp.dest('../dist/libs/'));

    php.pipe(gulp.dest('../dist/php'));

    sources
        .pipe(concat('app.js'))
        .pipe(gulp.dest('webapp/'));

    html
        .pipe(gulp.dest('../dist/webapp/'));

    return merge(libsjs,libscss,sources,html,index);
});

gulp.task('inject-dev', function(){
    var sources = gulp.src([
        '../dist/libs/jquery.min.js',
        '../dist/libs/angular.js',
        '../dist/libs/*.js',
        '../dist/libs/bootstrap.min.css',
        '../dist/libs/ui-bootstrap-csp.css',
        '../dist/libs/*.css',
        'webapp/**/*.module.js',
        'webapp/**/*.controller.js',
        'webapp/**/*.service.js',
        'webapp/**/*.factory.js',
        'webapp/**/*.html',
        'webapp/**/*.php'
    ]);

    console.log("Adding files to dist/index.html");

    return gulp.src('index.html')
        .pipe(inject(sources, {relative:true, ignorePath:'../dist/'}))
        .pipe(gulp.dest("../dist/"));
});

gulp.task('inject-prod', function(){
    var sources = gulp.src([
        '../dist/libs/libs.js',
        '../dist/libs/bootstrap.min.css',
        '../dist/libs/ui-bootstrap-csp.css',
        '../dist/libs/app.css',
        'webapp/app.js'
    ]);

    gulp.src('webapp/app.js')
        .pipe(gulp.dest('../dist/webapp/'));

    console.log("Adding files to dist/index.html");

    return gulp.src('index.html')
        .pipe(inject(sources, {relative:true, ignorePath:'../dist/'}))
        .pipe(gulp.dest("../dist/"));
});

gulp.task('ngDocs', function(){
    return gulp.src(['webapp/**/*.js'])
        .pipe(docs.process())
        .pipe(gulp.dest('./docs'))
});

gulp.task('tests', function(){
    gulp.src('tests/*.spec.js')
        .pipe(jasmine());
});

gulp.task('build-dev', function(cb){
    run('clean', 'move-dev', 'inject-dev', cb);
});

gulp.task('build-prod', function(cb){
    run('clean', 'move-prod', 'inject-prod', cb);
});
