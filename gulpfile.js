'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
var concat = require('gulp-concat');
var prefix = require('gulp-autoprefixer')
sass.compiler = require('node-sass');


gulp.task('sass', async function () {
   return gulp.src('sass/*.scss')
   .pipe(concat('style.scss'))
   .pipe(sass().on('error', sass.logError))
   .pipe(prefix({cascade: false}))
   .pipe(gulp.dest('css/'));
});

gulp.task('sass:watch', async function () {
	gulp.watch('./sass/**/*.scss', gulp.series('sass'));
 });