var gulp = require('gulp'),
    gutil = require('gulp-util');
var browserify = require('gulp-browserify');
// create a default task and just log a message

gulp.task('default', function () {
	gutil.log('in the scripts')
	gulp.src('typescript/app/main.js')
        .pipe(browserify({
        	debug: true
        }))
        .pipe(gulp.dest('build'))
});