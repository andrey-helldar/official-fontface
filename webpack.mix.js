let mix = require('laravel-mix');

const path = './src/scss/';

mix
    .setPublicPath('./dist')

    .sass(path + 'official-fontface.scss', 'dist/css')
    .sass(path + 'test.scss', 'dist/css')

    .sass(path + 'companies/ford.scss', 'dist/css')
    .sass(path + 'companies/honda.scss', 'dist/css')
    .sass(path + 'companies/hyundai.scss', 'dist/css')
    .sass(path + 'companies/isuzu.scss', 'dist/css')
    .sass(path + 'companies/mercedes-benz.scss', 'dist/css')
    .sass(path + 'companies/mitsubishi.scss', 'dist/css')

    .disableNotifications()
    .version();
