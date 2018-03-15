var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var mincss = require('gulp-clean-css');

gulp.task('concatjs', function() {  // Обьединяем и минимизируем скрипты
  return gulp.src('src/*.js')
    .pipe(concat('script.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist'))
});
gulp.task('concatcss', function() {  // Обьединяем и минимизируем css
  return gulp.src('src/*.css')
    .pipe(concat('style.css'))
    .pipe(mincss())
    .pipe(gulp.dest('dist'))
});
gulp.task('concat', ['concatjs', 'concatcss']); // Обе задачи
