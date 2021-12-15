'use strict';

const schema = {
  type: 'object',
  additionalProperties: false,
  properties: {
    params: {
      type: 'object',
    },
  },
};

module.exports = function loader(source) {
  if (this.cacheable) {
    this.cacheable();
  }

  const options = this.getOptions(schema) || {};

  return `
  export default function render(templateParams={}) {
    const { render } = require('micromustache');
    const data = ${JSON.stringify(options.params)};
    return render(\`${source}\`, { ...data, ...templateParams });
  }`;
};
