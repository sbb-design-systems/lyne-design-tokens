const StyleDictionary = require('style-dictionary').extend(__dirname + '/config.js');
const fs = require('fs');
const _ = require('lodash');


console.log('Build started...');
console.log('\n==============================================');

StyleDictionary.registerFormat({
  name: 'custom/format/scss',
  formatter: _.template(fs.readFileSync(__dirname + '/templates/web-scss.template'))
});

StyleDictionary.registerFormat({
  name: 'custom/format/javascript/module',
  formatter: _.template(fs.readFileSync(__dirname + '/templates/commonjs.template'))
});

// FINALLY, BUILD ALL THE PLATFORMS
StyleDictionary.buildAllPlatforms();


console.log('\n==============================================');
console.log('\nBuild completed!');
