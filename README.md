# official-fontface

Set of official fonts of companies in SCSS.

![official-fontface](https://user-images.githubusercontent.com/10347617/43892308-45fc1eb8-9bd4-11e8-8659-6ae4301658cd.png)

<p align="center">
    <a href="https://yarn.pm/official-fontface"><img src="https://img.shields.io/npm/dt/official-fontface.svg?style=flat-square" alt="Total Downloads" /></a>
    <a href="https://yarn.pm/official-fontface"><img src="https://img.shields.io/npm/v/official-fontface.svg?style=flat-square" alt="Latest Stable Version" /></a>
    <a href="LICENSE"><img src="https://img.shields.io/npm/l/official-fontface.svg?style=flat-square" alt="License" /></a>
</p>

## Installation

**NPM**
```bash
npm i --save-dev official-fontface
```

**Yarn**
```
yarn add --dev official-fontface
```


## What does it do?

The package contains official fonts of dealers:

 * [Cars](#cars)
    * [Ford](#ford)
    * [Honda](#honda)
    * [Hyundai](#hyundai)
    * [Isuzu](#isuzu)
    * [Mercedes-Benz](#mercedes-benz)
    * [Mitsubishi](#mitsubishi)

### Cars

#### Ford
```css
.ford-antenna-black     { font-family: 'FordAntenna'; font-weight: 900; font-style: normal; }
.ford-antenna-bold      { font-family: 'FordAntenna'; font-weight: 700; font-style: normal; }
.ford-antenna-semibold  { font-family: 'FordAntenna'; font-weight: 600; font-style: normal; }
.ford-antenna-medium    { font-family: 'FordAntenna'; font-weight: 500; font-style: normal; }
.ford-antenna-regular   { font-family: 'FordAntenna'; font-weight: 400; font-style: normal; }
.ford-antenna-light     { font-family: 'FordAntenna'; font-weight: 300; font-style: normal; }

.ford-antenna-comp-black { font-family: 'FordAntennaComp'; font-weight: 900; font-style: normal; font-stretch: extra-condensed; }

.ford-antenna-cond-bold     { font-family: 'FordAntennaCond'; font-weight: 700; font-style: normal; }
.ford-antenna-cond-medium   { font-family: 'FordAntennaCond'; font-weight: 500; font-style: normal; }
.ford-antenna-cond-regular  { font-family: 'FordAntennaCond'; font-weight: 400; font-style: normal; }
```

#### Honda
```css
.honda-bold { font-family: 'AvenirNext'; font-weight: 700; font-style: normal; }
.honda-demibold { font-family: 'AvenirNext'; font-weight: 600; font-style: normal; }
.honda-medium { font-family: 'AvenirNext'; font-weight: 500; font-style: normal; }
.honda-medium-italic { font-family: 'AvenirNext'; font-weight: 500; font-style: italic; }
.honda-regular { font-family: 'AvenirNext'; font-weight: 400; font-style: normal; }
.honda-light { font-family: 'AvenirNext'; font-weight: 300; font-style: normal; }
```

#### Hyundai
```css
.hyundai-sans-head-bold    { font-family: 'HyundaiSansHead'; font-weight: 700;    font-style: normal; font-size: 30px; }
.hyundai-sans-head-medium  { font-family: 'HyundaiSansHead'; font-weight: 500;    font-style: normal; font-size: 30px; }
.hyundai-sans-head-regular { font-family: 'HyundaiSansHead'; font-weight: normal; font-style: normal; font-size: 30px; }
.hyundai-sans-head-light   { font-family: 'HyundaiSansHead'; font-weight: 300;    font-style: normal; font-size: 30px; }

.hyundai-sans-text-bold          { font-family: 'HyundaiSans'; font-weight: 600;    font-style: normal; }
.hyundai-sans-text-bold-italic   { font-family: 'HyundaiSans'; font-weight: 600;    font-style: italic; }
.hyundai-sans-text-medium        { font-family: 'HyundaiSans'; font-weight: 500;    font-style: normal; }
.hyundai-sans-text-medium-italic { font-family: 'HyundaiSans'; font-weight: 500;    font-style: italic; }
.hyundai-sans-text-italic        { font-family: 'HyundaiSans'; font-weight: normal; font-style: italic; }
.hyundai-sans-text-regular       { font-family: 'HyundaiSans'; font-weight: normal; font-style: normal; }
```

#### Isuzu
```css
.isuzu-expand { font-family: 'Usuzi Expanded'; font-weight: normal; font-style: normal; }
``` 

#### Mercedes-Benz
```css
.mercedes-benz-cac-regular { font-family: 'Corporate A Condensed'; font-weight: 400; font-size: 30px; }
.mercedes-benz-cs-regular  { font-family: 'Corporate S Regular';   font-weight: 400; }
.mercedes-benz-cs-demi     { font-family: 'Corporate S Bold';      font-weight: 600; }
```

#### Mitsubishi
```css
.mitsubishi-regular { font-family: 'Bitsumishi'; font-weight: 400; font-style: normal; }
```

And see [test.html](tests/test.html) as example.

## Using

### SCSS
You can use certain fonts pack in your application:
```scss
@import "~official-fontface/src/scss/dealers/ford";
@import "~official-fontface/src/scss/dealers/hyundai";
@import "~official-fontface/src/scss/dealers/isuzu";
@import "~official-fontface/src/scss/dealers/mercedes-benz";
@import "~official-fontface/src/scss/dealers/mitsubishi";
```

Or connect a specific font. For example:
```scss
@import "~official-fontface/src/scss/dealers/mercedes-benz/corporate-a-condensed";
@import "~official-fontface/src/scss/dealers/hyundai/hyundai-sans-head-regular";
@import "~official-fontface/src/scss/dealers/ford/fordantennacond-regular";
```

### CSS
Copy the folders `dist/css` and `dist/fonts` to root dir of your project and connect them:
```html
<head>
    <!-- ... -->
    
    <link href="/css/official-fontface.css" rel="stylesheet" media="screen,projection">
</head>
```

Also, you can use certain fonts pack in your application:
```html
<head>
    <!-- ... -->
    
    <link href="/css/ford.css" rel="stylesheet" media="screen,projection">
    <link href="/css/hyundai.css" rel="stylesheet" media="screen,projection">
    <link href="/css/isuzu.css" rel="stylesheet" media="screen,projection">
    <link href="/css/mercedes-benz.css" rel="stylesheet" media="screen,projection">
    <link href="/css/mitsubishi.css" rel="stylesheet" media="screen,projection">
</head>
```


# For contributors

You can easily add any official dealer fonts by following the steps.

For example, add fonts `Honda`:

1. Create `honda` folder in `src/fonts` and storing files:
```
src/fonts/honda/AvenirNext-Light/
    AvenirNext-Light.eot
    AvenirNext-Light.svg
    AvenirNext-Light.ttf
    AvenirNext-Light.woff
    AvenirNext-Light.woff2

src/fonts/mercedes-benz/AvenirNext-Regular/
    AvenirNext-Regular.eot
    AvenirNext-Regular.svg
    AvenirNext-Regular.ttf
    AvenirNext-Regular.woff
    AvenirNext-Regular.woff2
```

2. Create `scss` files in `src/scss/companies`, as well as a directory named `honda`:
```
src/scss/honda/
src/scss/honda.scss
```

3. In the folder `src/scss/honda`, create style files for each font, named files in `kebab-case`:
```
src/scss/honda/_avenirnext-light.scss
src/scss/honda/_avenirnext-regular.scss
```

4. Next, fill the files with styles. For example:
```scss
@font-face {
    font-family: 'AvenirNext-Light';
    font-weight: 300;
    font-style: normal;

    src: local('AvenirNext-Light'),
    local('Avenir Next Cyr W00 Light'),
    url('../../../fonts/honda/AvenirNext-Light/AvenirNext-Light.eot'),
    url('../../../fonts/honda/AvenirNext-Light/AvenirNext-Light.eot?#iefix') format('embedded-opentype'),
    url('../../../fonts/honda/AvenirNext-Light/AvenirNext-Light.woff2') format('woff2'),
    url('../../../fonts/honda/AvenirNext-Light/AvenirNext-Light.woff') format('woff'),
    url('../../../fonts/honda/AvenirNext-Light/AvenirNext-Light.svg#DaimlerCAC-Regular') format('svg');
}
```

5. After that, add links to these files in `src/scss/honda.scss` file:
```scss
@import "honda/avenirnext-bold";
@import "honda/avenirnext-demibold";
@import "honda/avenirnext-medium";
@import "honda/avenirnext-mediumitalic";
@import "honda/avenirnext-regular";
@import "honda/avenirnext-light";
```

6. Add the file import to the main stylesheet `src/scss/official-fontface.scss`:
```scss
@import "companies/honda";
```

7. Finally, add a link to the file in the webpack settings:
```js
mix
    // ...
    .sass(path + 'companies/honda.scss', 'dist/css')
```

8. Profit!


## License

This package is released under the [MIT License](LICENSE).
