var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var browserSync = require('browser-sync').create();
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "dist/"
        }
    });
});

gulp.task('htmlmin',function(){

	gulp.src('src/*.html').
	pipe(htmlmin({collapseWhitespace : true})).
	pipe(gulp.dest('dist/'));
	browserSync.reload();
});
gulp.task('watch',function(){
	gulp.watch('src/*.html',['htmlmin','browser-sync']);
})
