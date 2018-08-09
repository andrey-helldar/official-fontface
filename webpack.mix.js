let mix = require('laravel-mix');

const path = './src/scss/';

mix
    .setPublicPath('./dist')

    .sass(path + 'dealer-fonts.scss', 'dist/css')

    .sass(path + 'dealers/mercedes-benz.scss', 'dist/css')

    .disableNotifications()
    .sourceMaps()
    .version();
