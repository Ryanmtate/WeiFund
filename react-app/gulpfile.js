var gulp = require('gulp');
var gulp_jspm = require('gulp-jspm');

gulp.task('default', function(){
    return gulp.src('client/main.js')
        .pipe(gulp_jspm())
        .pipe(gulp.dest('client/build/'));
});
