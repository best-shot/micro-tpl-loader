# micro-tpl-loader

Micro mustache template loader for webpack.

[url]: https://www.npmjs.com/package/micro-tpl-loader

[![npm version](https://img.shields.io/npm/v/micro-tpl-loader.svg?style=flat-square&logo=npm)][![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FAirkro%2Fmicro-tpl-loader.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2FAirkro%2Fmicro-tpl-loader?ref=badge_shield)
[url]
![node](https://img.shields.io/node/v/micro-tpl-loader.svg?style=flat-square&colorB=green)
![license](https://img.shields.io/npm/l/micro-tpl-loader.svg?style=flat-square&colorB=blue)

Support [MicroMustache](https://www.npmjs.com/package/micromustache) interpolation. Not for `Handlebars` and `Mustache`.

## Install

```bash
npm install micro-tpl-loader --save-dev
```

## Usage

```js
// webpack.config.js

const params = {
  // define params here
  foo: 'bar',
  xyz: {
    abc: 123
  }
};

module.exports = {
  module: {
    rules: [
      {
        test: /\.tpl$/,
        use: {
          loader: 'micro-tpl-loader',
          options: {
            params: params
          }
        }
      }
    ]
  }
};
```

```html
<!-- index.tpl -->
<div>{{ foo }}</div>
<div>{{ xyz.abc }} - test</div>

↓↓

<!-- index.html -->
<div>bar</div>
<div>123 - test</div>
```


## License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FAirkro%2Fmicro-tpl-loader.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2FAirkro%2Fmicro-tpl-loader?ref=badge_large)