/*
This file is the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. https://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp'),
    sass = require('gulp-sass');

gulp.task('build-css', function () {
    return gulp
        .src('./SASS/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./Content'));
});

gulp.task('default', ['build-css']);