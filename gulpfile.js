const {src, dest} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const ttf2woff2 = require('gulp-ttf2woff2');

const inputPath = './src'
const styleScss = `${inputPath}/scss/strcode.scss`;
const outputPath = './dist';
const fontTtf = `${inputPath}/fonts/*.ttf`;
const outputFonts = `${outputPath}/strcode`;
const fontWoff = `${inputPath}/fonts/*.woff2`;

const compileScss = () => 
  src(styleScss)
    .pipe(sass())
    .pipe(dest(outputPath))

const convertFonts = () =>
  src(fontTtf)
    .pipe(ttf2woff2())
    .pipe(dest(outputFonts))

const copyFonts = () => 
  src(fontWoff)
    .pipe(dest(outputFonts))

exports.copyFonts = copyFonts;
exports.convertFonts = convertFonts;
exports.default = compileScss;