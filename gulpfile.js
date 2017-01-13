var gulp = require('gulp');
var watchLess = require('gulp-watch-less');
var less = require('gulp-less');
var webserver = require('gulp-webserver');

gulp.task('webserver', function() {
  gulp.src('.')
    .pipe(webserver({
      livereload:true,
      open: true
  }));
});

gulp.task('less', function () {
  return gulp.src('./src/style.less')
    .pipe(less())
    .pipe(gulp.dest('./bin'));
});

gulp.task('watchless', function() {
  watchLess('./src/style.less')
    .pipe(less())
    .pipe(gulp.dest('./bin')
  );
});

gulp.task('default', ['less', 'watchless', 'webserver']);
