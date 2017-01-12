var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var webserver = require('gulp-webserver');

gulp.task('default', function() {
  gulp.src('./app')
   .pipe(webserver({
     livereload: true,
     open: true
   }));
});
