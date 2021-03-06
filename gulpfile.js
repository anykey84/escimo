const gulp = require('gulp'),
    webserver = require('gulp-webserver'),
    less = require('gulp-less'),
    react = require('gulp-react'),
    babel = require('gulp-babel'),
    autoprefixer = require('gulp-autoprefixer');

gulp.task('jsx', function() {
    gulp.src('development/js/**/*.jsx')
        .pipe(react())
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('dist/js/'));
});

gulp.task('html', function() {
    gulp.src('development/**/*.html')
        .pipe(gulp.dest('dist/'));
});

gulp.task('less', function() {
    gulp.src('development/less/main.less')
        .pipe(less({
          compress: true
        }))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('dist/css/'));
});

gulp.task('css', function() {
    gulp.src('development/less/**/*.css')
        .pipe(gulp.dest('dist/css/'));
});

gulp.task('img', function() {
    gulp.src('development/img/**/*')
        .pipe(gulp.dest('dist/img/'));
});

gulp.task('fonts', function() {
    gulp.src('development/fonts/**/*')
        .pipe(gulp.dest('dist/fonts/'));
});

gulp.task('watch', function() {
    gulp.watch('development/js/**/*.jsx', ['jsx']);
    gulp.watch('development/less/**/*.less', ['less']);
    gulp.watch('development/**/*.html', ['html']);
    gulp.watch('development/img/**/*', ['img']);
    gulp.watch('development/fonts/**/*', ['fonts']);
});

gulp.task('vendor', function() {
    gulp.src('node_modules/react/dist/react.min.js')
        .pipe(gulp.dest('dist/js/vendor/'));
    gulp.src('node_modules/react-dom/dist/react-dom.min.js')
        .pipe(gulp.dest('dist/js/vendor/'));
});


gulp.task('webserver', function() {
    gulp.src('dist/')
        .pipe(webserver({
            livereload: true,
            open: true
        }));
});


gulp.task('default', [
    'jsx',
    'html',
    'vendor',
    'img',
    'less',
    'css',
    'watch',
    'fonts',
    'webserver'
]);
