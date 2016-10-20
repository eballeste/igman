var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('watch', function() {
  browserSync.init({server: {baseDir: './'}});
  gulp.watch('./scripts/igman.js').on('change', browserSync.reload);
});
