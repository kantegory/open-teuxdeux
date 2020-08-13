const ini = require('ini');
const fs = require('fs');

const configParser = (path, purpose) => {
  let configFile = fs.readFileSync(path, 'utf-8');
  let parsedConfig = ini.parse(configFile)[purpose];

  return parsedConfig;
}

module.exports = configParser;
