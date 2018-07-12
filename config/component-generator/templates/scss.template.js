const { uncapitalize } = require('./helpers');

module.exports = componentName => `\
.${uncapitalize(componentName)} {}
`;
