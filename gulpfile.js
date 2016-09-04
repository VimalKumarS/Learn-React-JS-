/**
 * Created by vimal on 8/29/2016.
 */
"use strict"

var gulp = require('gulp');
var connect = require('gulp-connect');
var open = require('gulp-open');
//var connectLivereload = require('connect-livereload');
var browserify= require('browserify');
var reactify= require('reactify');
var source= require('vinyl-source-stream');
var concat= require('gulp-concat')
var eslint= require('gulp-eslint')
var config={
    port:9005,
    devBaseUrl:"http://localhost",
    paths:{
        html:'./src/*.html',
        js:'./src/**/*.js',
        dist:'./dist',
        mainJs:'./src/main.js'
    }
}
// Start a local development server
gulp.task('connect',function(){
    connect.server({
        root:['dist'],
        port:config.port,
        maincss:[
            './node_modules/bootstrap/dist/css/bootstrap.min.css',
            './node_modules/bootstrap/dist/css/bootstrap-theme.min.css'
         ],
        base:config.devBaseUrl,
        livereload:true
    })
})

gulp.task('open',['connect'],function () {
    gulp.src('dist/index.html')
        .pipe(open({uri:config.devBaseUrl+':'+config.port+'/'}));
})

gulp.task('watch',function () {
    gulp.watch(config.paths.html,['html'])
    gulp.watch(config.paths.js,['js','eslint'])
    //gulp.watch(config.paths.js,['css'])
})

gulp.task('maincss',function(){
    gulp.src(['./node_modules/bootstrap/dist/css/bootstrap.min.css','./node_modules/bootstrap/dist/css/bootstrap-theme.min.css'])
        .pipe(concat('bundle.css'))
       .pipe(gulp.dest(config.paths.dist +'/css'))
})

gulp.task('eslint',function(){
    return gulp.src(config.paths.js).pipe(eslint({config:'eslint.config.json'})).pipe(eslint.format())
})

gulp.task('js',function () {
    browserify(config.paths.mainJs).transform(reactify).bundle().on('error',console.error.bind(console))
        .pipe(source('bundle.js')).pipe(gulp.dest(config.paths.dist+'/scripts')).pipe(connect.reload())
})
gulp.task('html',function(){
    gulp.src(config.paths.html).pipe(gulp.dest(config.paths.dist))
        .pipe(connect.reload())
})

gulp.task('default',['html','maincss','js','open','watch'])