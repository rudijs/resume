'use strict';

var gulp = require('gulp');
var execSync = require('child_process').execSync;

gulp.task('watch', () => {
  return gulp.watch([
    'index.html',
    'resume.tpl.html',
    'resume.json'
  ], ['build']);
});

gulp.task('build', () => {
  console.log('building index.html...');
  var cmd = [
    'node',
    './resume.js',
    '>',
    './index.html'
  ];

  return execSync(cmd.join(' '), { stdio: [0, 1, 2] });
});

gulp.task('serve', () => {
  var browserSync = require('browser-sync');
  var browserSyncConfig = require('./bs-config');
  // start the server
  browserSync(browserSyncConfig);
});
