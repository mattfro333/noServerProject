var gulp = require('gulp'),
    
    del = require('del'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    // uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    // print = require('gulp-print'),
    babel = require('gulp-babel');

    var CacheBuster = require('gulp-cachebust');
    var cachebust = new CacheBuster();

    gulp.task('css', function () {
      return gulp.src('./css/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        // .pipe(cachebust.resources())
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./dist'));
    });

    gulp.task('js', function() {
       return gulp.src(['./app.js', './js/**/*.js'])
       .pipe(babel({
         presets: ['es2015']
       }))
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest('./dist'));
      });

      gulp.task('build', [ 'css', 'js'], function() {
          return gulp.src('index.html')
              .pipe(cachebust.references())
              .pipe(gulp.dest('dist'));
      });

gulp.watch(['./js/**/*.js'], ['js']);
gulp.watch(['./css/**/*.scss'], ['css']);
