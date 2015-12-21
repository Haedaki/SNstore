var gulp = require('gulp');
var concat = require('gulp-concat');
var notify = require('gulp-notify');
var flatten = require('gulp-flatten');
var webserver = require('gulp-webserver');

gulp.task('serve', function(){
	gulp.src('.').
	pipe(webserver({
		port:48080,
		livereload:true,
		open: 'http://localhost:48080/dist/'
	}));
});

gulp.task('scripts', function(){
	gulp.src(['src/app.js', 'src/**/*.js'])
	.pipe(concat('all.js'))
	.pipe(gulp.dest('./dist/js'))
	.pipe(notify('Javascript compiled!'));
});

gulp.task('move', function(){
	gulp.src(['src/index.html'])
	.pipe(gulp.dest('dist'));

	gulp.src(['!./src/index.html', 'src/**/*.html'])
	.pipe(flatten())
	.pipe(gulp.dest('dist/templates'));
});

gulp.task('moveAngular', function(){
	gulp.src(['bower_components/angular/angular.min.js'])
	.pipe(concat('angular.js'))
	.pipe(gulp.dest('./dist/js'))
	.pipe(notify('Angular compiled!'));
});

gulp.task('watch', function(){
	gulp.start('serve');
	gulp.watch(['src/**/*.html'], ['move']);
	gulp.watch(['src/**/*.js'], ['scripts']);
	gulp.watch(['bower_components/**/*.js'], ['moveAngular']);
});