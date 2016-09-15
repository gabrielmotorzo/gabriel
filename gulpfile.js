var args = require('yargs').argv,
    gulp = require('gulp'),
    jade = require('gulp-jade'),
    gulpif = require('gulp-if'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    cleancss = require('gulp-clean-css'),
    imagemin = require('gulp-imagemin'),
    autoprefixer = require('gulp-autoprefixer'),
    minifyInline = require('gulp-minify-inline');

gulp.task('styles', function () {
    var sources = [
        // vendor based
        'vendor/bootstrap/css/bootstrap.css',
        'vendor/font-awesome/css/font-awesome.min.css',
        'vendor/simple-line-icons/css/simple-line-icons.css',
        'vendor/owl.carousel/assets/owl.carousel.css',
        'vendor/owl.carousel/assets/owl.theme.default.css',
        'vendor/magnific-popup/magnific-popup.css',
        'vendor/rs-plugin/css/settings.css',
        'vendor/rs-plugin/css/layers.css',
        'vendor/rs-plugin/css/navigation.css',

        // theme based
        'css/theme.css',
        'css/theme-blog.css',
        'css/theme-elements.css',
        'css/theme-shop.css',
        'css/theme-animate.css',

        // custom
        'css/c2c.css',
        'css/custom.css',
    ];

    gulp.src(sources)
        .pipe(concat('main.css'))
        .pipe(gulpif(args.production, cleancss()))
        .pipe(autoprefixer())
        .pipe(gulp.dest('css/'));
});

gulp.task('templates', function () {
    gulp.src('jade/*.jade')
        .pipe(jade({
            pretty: !args.production
        }))
        .pipe(gulpif(args.production, minifyInline()))
        .pipe(gulp.dest('./'));
});

gulp.task('scripts', function () {
    var sources = [
        'vendor/jquery/jquery.min.js',
        'vendor/jquery.appear/jquery.appear.min.js',
        'vendor/jquery.easing/jquery.easing.min.js',
        'vendor/jquery-cookie/jquery-cookie.min.js',
        'vendor/bootstrap/js/bootstrap.min.js',
        'vendor/common/common.min.js',
        'vendor/jquery.validation/jquery.validation.min.js',
        'vendor/jquery.stellar/jquery.stellar.min.js',
        'vendor/jquery.easy-pie-chart/jquery.easy-pie-chart.min.js',
        'vendor/jquery.gmap/jquery.gmap.min.js',
        'vendor/jquery.lazyload/jquery.lazyload.min.js',
        'vendor/isotope/jquery.isotope.min.js',
        'vendor/owl.carousel/owl.carousel.min.js',
        'vendor/magnific-popup/jquery.magnific-popup.min.js',
        'vendor/vide/vide.min.js',
        'js/theme.js',
        'vendor/rs-plugin/js/jquery.themepunch.tools.min.js',
        'vendor/rs-plugin/js/jquery.themepunch.revolution.min.js',
        'js/custom.js',
        'js/theme.init.js',
        'js/views/booknow.js',
        'js/views/view.contact.js',
        'js/click2call.js',
        'js/views/sendlink.js',
    ];

    gulp.src(sources)
        .pipe(concat('main.js'))
        .pipe(gulpif(args.production, uglify()))
        .pipe(gulp.dest('js/'));
});

gulp.task('images', function () {
    gulp.src('img/unmin/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('img/'));
});

gulp.task('default', ['styles', 'scripts', 'images', 'templates']);