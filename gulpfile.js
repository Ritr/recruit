var fs = require("fs");
var gulp = require('gulp'),
    connect = require('gulp-connect'),
    runSequence = require('run-sequence'),
    runSequence = require('run-sequence');
//使用connect启动一个Web服务器
gulp.task('connect', function() {
    connect.server();
});

gulp.task('fileincludeAdmin', function() {
    gulp.src("admin/html/*.html")
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest('admin/html2'));
});

gulp.task('fileincludePerson', function() {
    gulp.src("person/html/*.html")
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest('person/html2'));
});

gulp.task('fileinclude', function() {
    runSequence("fileincludeAdmin","fileincludeAdmin");
})
