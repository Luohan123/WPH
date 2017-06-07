var gulp = require('gulp');
var uglify = require('gulp-uglify');
var htmlmini = require('gulp-minify-html');
var minify = require('gulp-minify-css');
var concat = require("gulp-concat");
var	sass = require('gulp-sass');
var imagemin = require('gulp-imagemin');

gulp.task('sass', function(){ // 第一个是我们自定义的方法名
	gulp.src('css/*.scss')
	    .pipe(sass())
	    .pipe(gulp.dest('dest/css'));
	    gulp.watch('css/*.scss', ['sass']);
});

/*//加载js压缩

// 定义一个任务 compass
gulp.task('compass', function () {
    gulp.src(['src/js/!*.js'])  //获取文件，同时过滤掉.min.js文件
        .pipe(uglify())
        .pipe(gulp.dest('dest/js'));  //输出文件
});


gulp.task('cssmini', function () {
    gulp.src(['src/css/!*.css'])  //要压缩的css
        .pipe(minify())
        .pipe(gulp.dest('dest/css'));
});



gulp.task('htmlmini', function () {
    gulp.src('src/!*.html')
        .pipe(htmlmini())
        .pipe(gulp.dest('dest'));
})


gulp.task('concat', function () {
    gulp.src('src/js/!*.js')  //要合并的文件
        .pipe(concat('all.js'))  // 合并匹配到的js文件并命名为 "all.js"
        .pipe(gulp.dest('dest/js'));
});


//
// gulp.task('imagemin', function () {
//     return gulp.src('src/images/!*')
//         .pipe(imagemin({
//             progressive: true,
//             use: [imagemin()] //使用pngquant来压缩png图片
//         }))
//         .pipe(gulp.dest('dest/images'));
// });


gulp.task('imagemin',function(){
    gulp.src('src/images/!*')
        .pipe(imagemin())
        .pipe(gulp.dest('dest/images'));
})*/

gulp.task('default', ['sass']);
/*gulp.task('default',['sass','compass','cssmini','htmlmini','concat','imagemin']);*/

