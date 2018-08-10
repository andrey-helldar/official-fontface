let mix = require('laravel-mix');

const base_path = './src/scss/';
const public_path = './dist/';
const company_path = base_path + 'companies/';
const css_path = public_path + 'css/';

mix
    .setPublicPath(public_path)

    .sass(base_path + 'official-fontface.scss', css_path)
    .sass(base_path + 'test.scss', css_path)

    .sass(company_path + 'ford.scss', css_path)
    .sass(company_path + 'honda.scss', css_path)
    .sass(company_path + 'hyundai.scss', css_path)
    .sass(company_path + 'isuzu.scss', css_path)
    .sass(company_path + 'mercedes-benz.scss', css_path)
    .sass(company_path + 'mitsubishi.scss', css_path)

    .disableNotifications()
    .version();
