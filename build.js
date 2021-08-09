const StyleDictionary = require('style-dictionary')
  .extend(`${__dirname}/config.js`);
const fs = require('fs');
const _ = require('lodash');

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

StyleDictionary.registerFormat({
  formatter: ({
    dictionary
  }) => {
    const {
      allTokens
    } = dictionary;

    allTokens.forEach((token) => {

      // if a token uses a refernce token, we add the original token object
      const usesReference = dictionary.usesReference(token);

      if (usesReference) {
        const ref = dictionary.getReferences(token.original.value);

        token.refOriginal = ref;
      }

    });

    const fileContents = {
      tokens: allTokens
    };

    return JSON.stringify(fileContents, null, 2);
  },
  name: 'json/extended'
});

// FINALLY, BUILD ALL THE PLATFORMS
StyleDictionary.buildAllPlatforms();

console.log('\n==============================================');
console.log('\nBuild completed!');
