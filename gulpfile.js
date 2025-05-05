import dartSass from "sass";
import gulpSass from "gulp-sass";
import { dest, series, src, watch } from "gulp";
const sass = gulpSass(dartSass);

export function compilarSass(done) {
  src("./src/sass/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(dest("./css"));
  done();
}

export function watchFiles() {
  watch("./src/sass/**/*.scss", compilarSass);
}

export default series(compilarSass, watchFiles);
