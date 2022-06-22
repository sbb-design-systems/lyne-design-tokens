import { FormatterArguments } from 'style-dictionary/types/Format';
import { config } from './config';
import StyleDictionaryBase, { Platform, TransformedToken } from 'style-dictionary';

const StyleDictionary = StyleDictionaryBase.extend(config);

console.log('Build started...');
console.log('\n==============================================');

StyleDictionary.registerTransform({
  name: 'size/customPxToRem',
  type: 'value',
  matcher: function (prop: TransformedToken) {
    return prop.attributes?.category === 'size' && !prop.attributes?.isPureNumber;
  },
  transformer: (prop: TransformedToken, options?: Platform) => {
    const baseFont = (options && options.basePxFontSize) || 16;
    const floatVal = parseFloat(prop.value);

    if (isNaN(floatVal)) {
      throw `Invalid Number: '${prop.name}: ${prop.value}' is not a valid number, cannot transform to 'rem' \n`;
    }

    return `${floatVal / baseFont}rem`;
  },
});

StyleDictionary.registerTransformGroup({
  name: 'custom-style',
  transforms: [
    'attribute/cti',
    'name/cti/kebab',
    'time/seconds',
    'content/icon',
    'color/css',
    'size/customPxToRem',
  ],
});

StyleDictionary.registerFormat({
  formatter: (args: FormatterArguments) =>
    args.dictionary.allProperties.map(scssTemplate).join('') + '\n',
  name: 'custom/format/scss',
});

StyleDictionary.registerFormat({
  formatter: (args: FormatterArguments) => {
    const symbols = args.dictionary.allProperties.map(commonjsTemplate).join('');
    return `module.exports = {\n${symbols}};\n`;
  },
  name: 'custom/format/javascript/module',
});

StyleDictionary.registerFormat({
  formatter: ({ dictionary }) => {
    const { allTokens } = dictionary;

    allTokens.forEach((token) => {
      // if a token uses a refernce token, we add the original token object
      const usesReference = dictionary.usesReference(token);

      if (usesReference) {
        const ref = dictionary.getReferences(token.original.value);

        token.refOriginal = ref;
      }
    });

    const fileContents = {
      tokens: allTokens,
    };

    return JSON.stringify(fileContents, null, 2);
  },
  name: 'json/extended',
});

// FINALLY, BUILD ALL THE PLATFORMS
StyleDictionary.buildAllPlatforms();

console.log('\n==============================================');
console.log('\nBuild completed!');

function scssTemplate(token: TransformedToken) {
  let output = '';
  if (token.deprecated) {
    output += `/// @deprecated Notice: ${token.name} is deprecated`;
    if (token.deprecated_comment) {
      output += ` (${token.deprecated_comment})`;
    }
    output += '\n';
  }

  if (token.comment) {
    output += `/// ${token.comment}\n`;
  }
  output += `$${token.name}: ${token.value};\n`;

  return output;
}

function commonjsTemplate(token: TransformedToken) {
  let output = '';
  if (token.deprecated || token.comment) {
    output += '  /**';
    if (token.deprecated) {
      output += `   * @deprecated ${token.name} is deprecated`;
      if (token.deprecated_comment) {
        output += ` (${token.deprecated_comment})`;
      }
      output += '\n';
    }
    if (token.comment) {
      output += `   * ${token.comment}\n`;
    }
    output += ' */\n';
  }
  output += `  ${token.name}: '${token.value}',\n`;
  return output;
}
