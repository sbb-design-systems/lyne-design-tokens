const StyleDictionary = require('style-dictionary')
  .extend(`${__dirname}/config.js`);
const fs = require('fs');
const _ = require('lodash');

// Transform to calculate rem from pixel values based on basePxFontSize
StyleDictionary.registerTransform({
  matcher: (token) => {
    console.log(token.attributes.category);

    return token.attributes.category === 'size';
  },
  name: 'size/pxToRem',
  transformer: (token) => token.value,
  transitive: true,
  type: 'value'
});

console.log('Build started...');
console.log('\n==============================================');

StyleDictionary.registerFormat({
  formatter: _.template(fs.readFileSync(`${__dirname}/templates/web-scss.template`)),
  name: 'custom/format/scss'
});

StyleDictionary.registerFormat({
  formatter: _.template(fs.readFileSync(`${__dirname}/templates/commonjs.template`)),
  name: 'custom/format/javascript/module'
});

// FINALLY, BUILD ALL THE PLATFORMS
StyleDictionary.buildAllPlatforms();

console.log('\n==============================================');
console.log('\nBuild completed!');
