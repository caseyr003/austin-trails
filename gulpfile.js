var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    minifyCSS = require('gulp-clean-css');

// Minifies and combines all js files into js/min/app.min.js
gulp.task('scripts', function(){
   return gulp.src('src/js/*.js')
              .pipe(uglify())
              .pipe(concat('app.min.js'))
              .pipe(gulp.dest('dist/js/'));
});

// Minifies and combines all css files into css/min/app.min.css
gulp.task('styles', function(){
   return gulp.src('src/css/*.css')
              .pipe(minifyCSS())
              .pipe(concat('app.min.css'))
              .pipe(gulp.dest('dist/css/'));
});

// Start watch for changes to all js and css files
gulp.task('watch', function(){
   gulp.watch('src/js/*.js', ['scripts']);
   gulp.watch('src/css/*.css', ['styles']);
});

// Set default to run all gulp tasks
gulp.task('default', ['styles', 'scripts', 'watch']);
