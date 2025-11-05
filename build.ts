import { FormatFnArguments } from 'style-dictionary/types';
import { config } from './config.js';
import StyleDictionary, { TransformedToken } from 'style-dictionary';
import * as sass from 'sass';
import * as fs from 'fs';
import { fileHeader, getReferences, usesReferences } from 'style-dictionary/utils';
import { transformTypes } from 'style-dictionary/enums';
const { value: transformTypeValue } = transformTypes;

const styleDictionary = new StyleDictionary(config);

console.log('Build started...');
console.log('\n==============================================');

styleDictionary.registerTransform({
  name: 'custom/transform/pxToRem',
  type: transformTypeValue,
  filter: (token) => token.type === 'dimension',
  transform: (token) => `${parseInt(token.value) / 16}rem`,
});

styleDictionary.registerFormat({
  format: async ({ file, dictionary }: FormatFnArguments) => {
    const symbols = dictionary.allTokens.map(cssTemplate).join('');
    const composedVars = sass.compile('./composed-variables/composed-variables-root.scss').css;

    return (
      (await fileHeader({ file })) +
      composedVars.replace('/* DICTIONARY_VARIABLES */', symbols.trim())
    );
  },
  name: 'custom/format/css/variables',
});

styleDictionary.registerFormat({
  format: async ({ file, dictionary }: FormatFnArguments) => {
    const symbols = dictionary.allTokens.map(cssTemplate).join('');
    const composedVars = fs.readFileSync('./composed-variables/composed-variables.scss', 'utf-8');

    return (
      (await fileHeader({ file })) +
      composedVars.replace('/* DICTIONARY_VARIABLES */', symbols.trim())
    );
  },
  name: 'custom/format/scss/variables',
});

styleDictionary.registerFormat({
  format: (args: FormatFnArguments) => args.dictionary.allTokens.map(scssTemplate).join('') + '\n',
  name: 'custom/format/scss',
});

styleDictionary.registerFormat({
  format: ({ dictionary }) => {
    const { allTokens } = dictionary;

    allTokens.forEach((token) => {
      // If a token uses a reference token, we add the original token object
      const usesReference = usesReferences(token);

      if (usesReference) {
        token.refOriginal = getReferences(token.original.value, dictionary.tokens);
      }
    });

    const fileContents = {
      tokens: allTokens,
    };

    return JSON.stringify(fileContents, null, 2);
  },
  name: 'custom/format/json/extended',
});

// FINALLY, BUILD ALL THE PLATFORMS
await styleDictionary.buildAllPlatforms();

console.log('\n==============================================');
console.log('\nBuild completed!');

function cssTemplate(token: TransformedToken) {
  let output = '';
  if (token.deprecated || token.comment || token.type === 'dimension') {
    output += '  /**\n';
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
    if (token.type === 'dimension') {
      output += `   * Original Value: ${token.original.value}\n`;
    }
    output += '   */\n';
  }
  output += `  --${token.name}: ${token.value};\n`;

  return output;
}

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
  if (token.type === 'dimension') {
    output += `/// Original Value: ${token.original.value}\n`;
  }
  output += `$${token.name}: ${token.value};\n`;

  return output;
}
