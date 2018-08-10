# dealers-fontface

Set of fonts for dealers

![dealers-fontface](https://user-images.githubusercontent.com/10347617/43892308-45fc1eb8-9bd4-11e8-8659-6ae4301658cd.png)

<p align="center">
    <a href="https://yarn.pm/dealers-fontface"><img src="https://img.shields.io/npm/dt/dealers-fontface.svg?style=flat-square" alt="Total Downloads" /></a>
    <a href="https://yarn.pm/dealers-fontface"><img src="https://img.shields.io/npm/v/dealers-fontface.svg?style=flat-square" alt="Latest Stable Version" /></a>
    <a href="LICENSE"><img src="https://img.shields.io/npm/l/dealers-fontface.svg?style=flat-square" alt="License" /></a>
</p>

## Installation

**NPM**
```bash
npm install --save-dev dealers-fontface
```

**Yarn**
```
yarn add --dev dealers-fontface
```


## What does it do?

The package contains official fonts of dealers:

 * [Cars](#cars)
    * [Ford](#ford)
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

And see [test.html](dist/test.html) as example.


## License

This package is released under the [MIT License](LICENSE).
