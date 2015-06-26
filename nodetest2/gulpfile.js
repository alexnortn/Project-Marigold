'use strict';

var gulp       = require('gulp'),
    source     = require('vinyl-source-stream'),
    rename     = require('gulp-rename'),
    browserify = require('browserify'),
    es         = require('event-stream');

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