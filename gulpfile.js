
var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var cleanCSS = require('gulp-clean-css');
var autoprefixer = require('gulp-autoprefixer');
var del = require('del');
var header = require('gulp-header');
var pkg = require('./package.json');

var banner = ['/*!',
    ' * <%= pkg.name %> <%= pkg.version %> (http://javatmp.com)',
    ' * <%= pkg.description %>',
    ' *',
    ' * @link <%= pkg.homepage %>',
    ' * @copyright 2018 JavaTMP',
    ' * @license <%= pkg.license %>',
    ' */',
    ''].join('\n');

gulp.task('delete-css', function (cb) {
    return del.sync(['./dist/**/*'], cb());
});

gulp.task('sass', gulp.series("delete-css", function (cb) {
    return gulp.src([
        './src/bootstrap-foundation.scss',
        './src/bootstrap-reverse.scss',
        './src/bootstrap-ltr-extender.scss',
        './src/bootstrap-extender.scss'
    ])
            .pipe(sass().on('error', sass.logError))
            .pipe(autoprefixer({
                browsers: ['last 2 versions'],
                cascade: false
            }))
            .pipe(header(banner, {pkg: pkg}))
            .pipe(cleanCSS())
            .pipe(rename({suffix: '.min'}))
            .pipe(gulp.dest('./dist/'));
}));

gulp.task('default', gulp.series("sass", function (cb) {
    // place code for your default task here
    cb();
}));
