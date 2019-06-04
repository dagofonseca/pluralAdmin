"use strict";

var gulp = require('gulp');
var connect = require('gulp-connect');
var open = require('gulp-open');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
var concat = require('gulp-concat');
var lint = require('gulp-eslint');

var config = {
    port: 9005,
    devBaseUrl: 'http://localhost',
    paths: {
        html: './src/*.html',
        js: './src/**/*.js',
        images: './src/images/*',
        css: [
            'node_modules/bootstrap/dist/css/bootstrap.min.css',
            'node_modules/toastr/build/toastr.css'            
        ],
        dist: './dist',
        mainJs: './src/main.js'
    }
}

//Start a local development server
gulp.task('connect', function (done) {
    connect.server({
        root: ['dist'],
        port: config.port,
        base: config.devBaseUrl,
        livereload: true
    });
    done();
});

gulp.task('open', gulp.series('connect', function (done) {
    gulp.src('dist/index.html')
        .pipe(open({ uri: config.devBaseUrl + ":" + config.port + "/" }));
    done();
}));

gulp.task('html', function (done) {
    gulp.src(config.paths.html)
        .pipe(gulp.dest(config.paths.dist))
        .pipe(connect.reload());
    done();
});

gulp.task('js', function (done) {
    browserify(config.paths.mainJs)
        .transform(reactify)
        .bundle()
        .on('error', console.error.bind(console))
        .pipe(source('bundle.js'))
        .pipe(gulp.dest(config.paths.dist + '/scripts'))
        .pipe(connect.reload());
    done();
});

gulp.task('css', function(done) {
    gulp.src(config.paths.css)
        .pipe(concat('bundle.css'))
        .pipe(gulp.dest(config.paths.dist + '/css'));
    done();
})

gulp.task('images', function(done) {
    gulp.src(config.paths.images)
        .pipe(gulp.dest(config.paths.dist + '/images'))
        .pipe(connect.reload());

    gulp.src('./src/favicon.ico')
        .pipe(gulp.dest(config.paths.dist));
    done();    
})

gulp.task('lint', function () {
    return gulp.src(config.paths.js)
        .pipe(lint())
        .pipe(lint.format());        
})

gulp.task('watch',  async function () {
    gulp.watch(config.paths.html).on('change', gulp.series('html'));
    gulp.watch(config.paths.js).on('change', gulp.series('js','lint'));
})

gulp.task('default', gulp.series('html', 'js', 'css', 'images', 'lint', 'open', 'watch'));
