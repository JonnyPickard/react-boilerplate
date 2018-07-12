module.exports = componentName => `\
{
  "name": "${componentName}",
  "description": "Presentational",
  "version": "0.0.0",
  "main": "./index.js",
  "files": [
    "./__themes__/${componentName}.default.scss"
  ],
  "dependencies": {
    "react": "^16.2.0",
    "classnames": "^2.2.5"
  }
}
`;
