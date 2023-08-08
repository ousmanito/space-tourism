var gulp = require('gulp');
var sass = require('node-sass');
var fs = require('fs');
var path = require('path');

function compileSass(file) {
  sass.render({
    file: file
  }, function (err, result) {
    if (err) {
      console.error(err);
    } else {
      fs.writeFile(path.join(path.dirname(file), path.basename(file, '.scss') + '.css'), result.css, function (err) {
        if (err) {
          console.error(err);
        }
      });
    }
  });
}

gulp.task('sass', function () {
  return gulp.src('src/**/*.scss') // Modifiez ce chemin pour correspondre à vos fichiers SCSS
    .on('data', function (file) {
      compileSass(file.path);
    });
});

gulp.task('watch', function () {
  gulp.watch('src/**/*.scss', gulp.series('sass')); // Modifiez ce chemin pour correspondre à vos fichiers SCSS
});

