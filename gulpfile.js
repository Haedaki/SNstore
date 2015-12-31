var gulp = require('gulp');
var concat = require('gulp-concat');
var notify = require('gulp-notify');
var flatten = require('gulp-flatten');
var webserver = require('gulp-webserver');
var livereload = require('gulp-livereload');

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
	.pipe(livereload())
	.pipe(notify('Javascript compiled!'));
});

gulp.task('styles', function(){
	gulp.src(['src/**/*.css'])
	.pipe(concat('styles.css'))
	.pipe(gulp.dest('./dist/css'))
	.pipe(livereload())
	.pipe(notify('Styles compiled!'));
});

gulp.task('move', function(){
	gulp.src(['src/index.html'])
	.pipe(gulp.dest('dist'))
	.pipe(livereload());

	gulp.src(['./src/images/**/*'])
	.pipe(gulp.dest('dist/images'))
	.pipe(livereload());

	gulp.src(['!./src/index.html', 'src/**/*.html'])
	.pipe(flatten())
	.pipe(livereload())
	.pipe(gulp.dest('dist/templates'));
});

gulp.task('moveAngular', function(){
	gulp.src(['bower_components/angular/angular.min.js'])
	.pipe(concat('angular.js'))
	.pipe(gulp.dest('./dist/js'))
	.pipe(livereload())
	.pipe(notify('Angular compiled!'));
});

gulp.task('watch', function(){
	gulp.start('serve');
	gulp.watch(['src/**/*.html'], ['move']);
	gulp.watch(['src/**/*.css'], ['styles']);
	gulp.watch(['src/**/*.js'], ['scripts']);
	gulp.watch(['bower_components/**/*.js'], ['moveAngular']);
	livereload.listen();
});