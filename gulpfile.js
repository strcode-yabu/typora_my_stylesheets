const {src, dest, watch} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const ttf2woff2 = require('gulp-ttf2woff2');

const styleScss = 'src/scss/strcode.scss';
const outputCss = 'strcode';
const fontTtf = 'src/fonts/*.ttf';
const outputFonts = 'strcode/fonts/';
const fontWoff = 'src/fonts/*.woff2';

const compileScss = () => 
  src(styleScss)
    .pipe(sass())
    .pipe(dest(outputCss))

const watchScssFiles = () => watch(styleScss, compileScss());

const convertFonts = () =>
  src(fontTtf)
    .pipe(ttf2woff2())
    .pipe(dest(outputFonts))

const copyFonts = () => 
  src(fontWoff)
    .pipe(dest(outputFonts))

exports.copyFonts = copyFonts;
exports.convertFonts = convertFonts;
exports.default = watchScssFiles;