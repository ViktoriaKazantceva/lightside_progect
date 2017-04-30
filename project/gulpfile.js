var gulp = require('gulp');
var pug = require('gulp-pug');
var sass = require('gulp-sass');
var Comb = require('csscomb');
var sourcemaps = require('gulp-sourcemaps');
var prefix = require('gulp-autoprefixer');
var changed = require('gulp-changed');
var browserSync = require('browser-sync').create();

var paths = {
    pugPages: './dev/pug/pages/*.pug',
    pugPartials: ['./dev/pug/**/*.pug', '!./dev/pug/pages/*.pug'],
    html: './build/',

    cssComb: './csscomb.json',
    scssToComb: './dev/scss',
    scssPartials: './dev/scss/**/*.scss',
    mainScss: './dev/scss/main.scss',
    css: './build/css/',
};

gulp.task('html', function() {
    gulp.src(paths.pugPages)
    .pipe(changed(paths.html, {extension: '.html'}))
    .pipe(pug({pretty: true}))
    .on('error', onError)
    .pipe(gulp.dest(paths.html))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('html-partials', function() {
    gulp.src(paths.pugPages)
    .pipe(pug({pretty: true}))
    .on('error', onError)
    .pipe(gulp.dest(paths.html))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('csscomb', function() {
    var comb = new Comb(require(paths.cssComb));
    return comb.processDirectory(paths.scssToComb); });

gulp.task('css', ['csscomb'], function(){
    gulp.src(paths.mainScss)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(prefix(">0.05%", "ie 9"))
    .pipe(gulp.dest(paths.css))
    .pipe(browserSync.stream());
});

gulp.task('watch', ['html-partials', 'html', 'css'], function() {
    gulp.watch(paths.pugPages, ['html']);
    gulp.watch(paths.pugPartials, ['html-partials']);
    gulp.watch(paths.scssPartials, ['css']);
    gulp.watch(paths.mainScss, ['css']);

    browserSync.init({
        notify: false,
        server: {
            baseDir: "./build/"
        }
    });
});

function onError(err) {
  console.log(err);
  this.emit('end');
}

gulp.task('default', ['html', 'css']);
