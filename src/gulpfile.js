/**
 * Created by dorritydj on 2/14/16.
 */
var gulp = require('gulp');
var inject = require('gulp-inject');
var jasmine = require('gulp-jasmine');

gulp.task('inject', function(){
    var sources = gulp.src([
        'node_modules/angular/angular.js',
        'webapp/**/*.module.js',
        'webapp/**/*.js'
    ]);

    gulp.src('index.html')
        .pipe(inject(sources, {relative:true}))
        .pipe(gulp.dest(""));
});

gulp.task('tests', function(){
    gulp.src('tests/*.spec.js')
        .pipe(jasmine());
});