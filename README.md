# micro-tpl-loader

Micro mustache template loader for webpack.

[![npm][npm-badge]][npm-url]
[![github][github-badge]][github-url]
![node][node-badge]

[npm-url]: https://www.npmjs.com/package/micro-tpl-loader
[npm-badge]: https://img.shields.io/npm/v/micro-tpl-loader.svg?style=flat-square&logo=npm
[github-url]: https://github.com/airkro/micro-tpl-loader
[github-badge]: https://img.shields.io/npm/l/micro-tpl-loader.svg?style=flat-square&colorB=blue&logo=github
[node-badge]: https://img.shields.io/node/v/micro-tpl-loader.svg?style=flat-square&colorB=green&logo=node.js

Support [MicroMustache](https://www.npmjs.com/package/micromustache) interpolation. Not for `Handlebars` and `Mustache`.

## Installation

```bash
npm install micro-tpl-loader --save-dev
```

## Usage

```cjs
// example: webpack.config.cjs

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
            params
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
