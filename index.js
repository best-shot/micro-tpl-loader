const { getOptions } = require('loader-utils');
const validateOptions = require('schema-utils');

const schema = {
  type: 'object',
  additionalProperties: false,
  properties: {
    params: {
      type: 'object'
    }
  }
};

module.exports = function loader(source) {
  if (this.cacheable) {
    this.cacheable();
  }

  const options = getOptions(this) || {};

  validateOptions(schema, options, 'Micro tpl Loader');

  return `
  module.exports = function render(templateParams={}) {
    const { render } = require('micromustache');
    const data = ${JSON.stringify(options.params)};
    return render(\`${source}\`, { ...data, ...templateParams });
  }`;
};
