//引入插件
const gulp = require('gulp');
const del = require('del');
const browserSync = require('browser-sync').create();
const watch = require('gulp-watch');
const apidoc = require('gulp-apidoc');

// clean
gulp.task('clean', function () {
	del(['build/']);
});

// server
gulp.task('server', function () {
	browserSync.init({
		startPath: "/",
		server: {
			baseDir: 'build/'
		},
		open: false,
		notify: true
	});
});

// apidoc
gulp.task('apidoc', function (done) {
	apidoc({
		src: "src/",
		dest: "build/"
	}, done);
});

// apidoc:watch
gulp.task('apidoc:watch', function () {
	watch('src/**/*.*', function (event) {
		gulp.run('apidoc', function () {
			browserSync.reload(); // 刷新浏览器
		});
	});
});

//运行Gulp时，默认的Task
gulp.task('dev', ['apidoc', 'apidoc:watch', 'server']);

gulp.task('build', ['apidoc']);