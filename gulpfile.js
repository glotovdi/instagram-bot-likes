var gulp = require("gulp");
var minifyCss = require("gulp-minify-css");
var sass = require("gulp-sass");
var browserSync = require("browser-sync");
var reload = browserSync.reload;

var paths = {
  html: ["src/index.html"],
  css: ["src/styles/*.scss"],
  script: ["src/scripts/*.js"]
};

gulp.task(
  "mincss",
  gulp.series(function() {
    return gulp
      .src(paths.css)
      .pipe(sass().on("error", sass.logError))
      .pipe(minifyCss())
      .pipe(gulp.dest("dist"))
      .pipe(reload({ stream: true }));
  })
);

gulp.task(
  "html",
  gulp.series(function() {
    return gulp
      .src(paths.html)
      .pipe(gulp.dest("dist"))
      .pipe(reload({ stream: true }));
  })
);

gulp.task(
  "browserSync",
  gulp.series(function() {
    browserSync({
      server: {
        baseDir: "./dist"
      },
      port: 8080,
      open: true,
      notify: false
    });
  })
);

gulp.task(
  "scripts",
  gulp.series(function() {
    return gulp
      .src(paths.script)
      .pipe(gulp.dest("dist"))
      .pipe(reload({ stream: true }));
  })
);

gulp.task(
  "watcher",
  gulp.series(function() {
    gulp.watch(paths.css, gulp.series(["mincss"]));
    gulp.watch(paths.script, gulp.series(["scripts"]));
    gulp.watch(paths.html, gulp.series(["html"]));
  })
);

gulp.task("prepare", gulp.parallel("mincss", "scripts", "html"));

gulp.task("default", gulp.parallel(["prepare", "watcher", "browserSync"]));
