
var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var cleanCSS = require('gulp-clean-css');
var autoprefixer = require('gulp-autoprefixer');
var del = require('del');

gulp.task('delete-css', function () {
    return del(['./dist/**/*']);
});

gulp.task('sass', ["delete-css"], function () {
    return gulp.src([
        './sass/bootstrap-foundation.scss',
        './sass/bootstrap-reverse.scss',
        './sass/bootstrap-ltr-extender.scss',
        './sass/bootstrap-extender.scss',
    ])
            .pipe(sass().on('error', sass.logError))
            .pipe(autoprefixer({
                browsers: ['last 2 versions'],
                cascade: false
            }))
            .pipe(cleanCSS())
            .pipe(rename({suffix: '.min'}))
            .pipe(gulp.dest('./dist/'));
});

gulp.task('default', ["sass"], function () {
    // place code for your default task here

});
