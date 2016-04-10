/**
 * Created by dorritydj on 2/14/16.
 */
var gulp = require('gulp');
var inject = require('gulp-inject');
var jasmine = require('gulp-jasmine');
var docs = require('gulp-ngdocs');

gulp.task('inject', function(){
    var sources = gulp.src([
        '../dist/libs/jquery.min.js',
        '../dist/libs/angular.js',
        '../dist/libs/*.js',
        '../dist/libs/*.css',
        'webapp/**/*.css',
        'webapp/**/*.module.js',
        'webapp/**/*.js'
    ]);

    return gulp.src('index.html')
        .pipe(inject(sources, {relative:true, ignorePath: '../dist/'}))
        .pipe(gulp.dest(""));
});

gulp.task('build', ['inject'], function(){
    var libs = gulp.src([
        'node_modules/jquery/dist/jquery.min.js',
        'node_modules/angular/angular.js',
        'node_modules/angular-animate/angular-animate.min.js',
        'node_modules/angular-route/angular-route.min.js',
        'node_modules/angular-ui-bootstrap/dist/ui-bootstrap-tpls.js',
        'node_modules/angular-ui-bootstrap/dist/ui-bootstrap-csp.css',
        'node_modules/bootstrap/dist/css/bootstrap.min.css'
    ]);

    var sources = gulp.src([
        'webapp/**/*.*',
    ]);

    var index = gulp.src([
        'index.html'
    ]);

    libs
        .pipe(gulp.dest('../dist/libs'));

    sources
        .pipe(gulp.dest('../dist/webapp'));

    index
        .pipe(gulp.dest('../dist'))
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