var fs=require("fs"); 
var gulp = require('gulp'),
  connect = require('gulp-connect');
//使用connect启动一个Web服务器
gulp.task('connect', function () {
  connect.server();
});

