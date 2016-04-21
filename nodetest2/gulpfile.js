'use strict';

var gulp       = require('gulp'),
    jade       = require('gulp-jade'), 
    source     = require('vinyl-source-stream'),
    rename     = require('gulp-rename'),
    browserify = require('browserify'),
    es         = require('event-stream');

// Compile Jade --> HTML
gulp.task('jade', function() {
    return gulp.src('src/views/**/*.jade')
        .pipe(jade())
        .pipe(gulp.dest('builds/development'))
});

// Concatenate Js
gulp.task('default', function() {
    // we define our input files, which we want to have
    // bundled:
    var files = [
        './public/javascripts/global.js',
        './public/javascripts/p5/sketch.js',
        './public/javascripts/jquery.centerIn.js'
    ];
    // map them to our stream function
    var tasks = files.map(function(entry) {
        return browserify({ entries: [entry] })
            .bundle()
            .pipe(source(entry))
            // rename them to have "bundle as postfix"
            .pipe(rename({
                extname: '.bundle.js'
            }))
            .pipe(gulp.dest('./dist')); 
        });
    // create a merged stream
    return es.merge.apply(null, tasks);
});

// From Eyewire

var argv = require('yargs').argv,
    gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    stylus = require('gulp-stylus'),
    replace = require('gulp-replace'),
    include = require('gulp-include'),
    browserify = require('browserify'),
    minifyCss = require('gulp-minify-css'),
    autoprefixer = require('gulp-autoprefixer'),
    rsync = require('gulp-rsync'),
    print = require('gulp-print')
    sourcemaps = require('gulp-sourcemaps'),
    babel = require("gulp-babel"),
    shell = require('gulp-shell'),
    GulpSSH = require('gulp-ssh'),
    //sprite = require('gulp-node-spritesheet'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    gutil = require('gulp-util'),
    babelify = require('babelify'),
    browserify_shim = require('browserify-shim');

var fs = require('fs');
var del = require('del');
var path = require('path');
var extend = require('node.extend');

var BASEURL = argv.production 
    ? 'http://alexnortn.com/'
    : '';

gulp.task('default', ['make']);

gulp.task('make', [ 'images', 'animations', 'js', 'css', 'fonts' ]);

// gulp.task('sprite', function () {
//  gulp.src("assets/images/sprite")
//   .pipe(sprite({
//         outputCss: 'assets/css/sprite.css',
//         selector: '.sprite',

//         // Optional ImageMagick sampling filter.
//         downsampling: "LanczosSharp",

//         // Output configurations: in this instance to output two sprite sheets,
//         // one for "legacy" (i.e. 72dpi, pixel ratio 1), and "retina" (x2).
//         // These keys (legacy, retina) are completely arbitrary.
//         output: {
//             legacy: {
//                 pixelRatio: 1,
//                 outputImage: 'assets/images/sprite.png',
//                 // Optional path to output image
//                 httpImagePath: '/images/sprite.png'
//             },
//             retina: {
//                 pixelRatio: 2,
//                 outputImage: 'assets/images/sprite@2x.png',
//                 httpImagePath: '/images/sprite@2x.png'
//             }
//         },
        
//         // Allows you to augment your selector names for each image, based on
//         // the bare image "name", or the full image path.
//         resolveImageSelector: function(name, fullpath) {
//             // For example, your files may well already be named with @2x, but
//             // you won't want that included in your CSS selectors.
//             return name.split('@2x').join('');
//         }
//     }))
//  .pipe(gulp.dest('assets/images/'));
// });

gulp.task('images', [ ], function () {
    gulp
        .src('assets/images/**')
        .pipe(gulp.dest('dist/public/images/'));

    gulp
        .src('assets/favicon*')
        .pipe(gulp.dest('dist/public/'));
});

gulp.task('animations', function () {
    gulp
        .src('assets/animations/**')
        .pipe(gulp.dest('dist/public/animations/'));
});

gulp.task('clean', function () {
    del([
        'build/**',
        'dist/**'
    ]);
});

gulp.task('js', function () {
    var b = browserify({
        entries: 'clientjs/main.js',
        //debug: true,
        // defining transforms here will avoid crashing your stream
        transform: [ babelify, browserify_shim ],
    });

    var stream = b.bundle()
        .pipe(source('intake.min.js'))
        .pipe(buffer())
        .pipe(replace(/__BASE_URL/g, `'${BASEURL}'`));

    if (argv.production) {
        stream
            .pipe(sourcemaps.init())
                .pipe(uglify())
            .pipe(sourcemaps.write('./'))
    }

    return stream
        .pipe(gulp.dest('./dist/public/js/'));

});

gulp.task('css', [ ], function () {
    gulp.src([
        'assets/css/normalize.css',
        'assets/css/*.css',
        'assets/css/main.styl'
    ])
        .pipe(concat('all.styl'))
        .pipe(stylus())
        .pipe(replace(/\$GULP_BASE_URL/g, BASEURL))
        .pipe(autoprefixer({
            browser: "> 1%, last 2 versions, Firefox ESR"
        }))
        .pipe(minifyCss())
        .pipe(gulp.dest('dist/public/css/'))

    // del([
    //  'assets/css/sprites/**'
    // ]);
});

gulp.task('fonts', function () {
    gulp.src([
        'assets/fonts/**'
    ])
        .pipe(gulp.dest('dist/public/fonts/'))
})

gulp.task('watch', function () {
    gulp.watch([
        'assets/animations/**'
    ], [ 'animations' ]);

    gulp.watch([
        'assets/fonts/**'
    ], [ 'fonts' ]);

    gulp.watch([
        'assets/css/*'
    ], [ 'css' ]);

    gulp.watch([
        'assets/images/**'
    ], [ 'images' ]);

    gulp.watch([
        'clientjs/**',
        'components/**'
    ], [ 'js' ]);
});