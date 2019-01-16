const { getOptions } = require('loader-utils');
const validateOptions = require('schema-utils');
const { render } = require('micromustache');

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

  let template = source;

  if (options.params) {
    template = render(source, options.params);
  }

  return `
  module.exports = function render(templateParams={}) {
    const { render } = require('micromustache');
    return render(\`${template}\`,templateParams);
  }`;
};
