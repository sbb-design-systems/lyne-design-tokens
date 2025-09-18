import { FormatterArguments } from 'style-dictionary/types/Format';
import { config } from './config';
import StyleDictionaryBase, { TransformedToken } from 'style-dictionary';
import * as sass from 'sass';
import * as fs from 'fs';

const StyleDictionary = StyleDictionaryBase.extend(config);
const fileHeader = StyleDictionary.formatHelpers.fileHeader;

console.log('Build started...');
console.log('\n==============================================');

StyleDictionary.registerFormat({
  formatter: ({ file, dictionary }: FormatterArguments) => {
    const symbols = dictionary.allProperties.map(cssTemplate).join('') + '\n';

    const composedVars = sass
      .compile('./composed-variables/composed-variables.scss')
      .css.match(
        /\/\* EXTRACTING_CSS_VARS_START \*\/([\S\s]*)\/\* EXTRACTING_CSS_VARS_END \*\//m,
      )![1];

    return (
      fileHeader({ file }) +
      `:root {\n${symbols}\n  /* Composed variables */\n\n  ${composedVars.trim()}\n}\n`
    );
  },
  name: 'css/variables',
});

StyleDictionary.registerFormat({
  formatter: ({ file, dictionary }: FormatterArguments) => {
    const symbols = dictionary.allProperties.map(cssTemplate).join('') + '\n';
    const composedVars = fs.readFileSync('./composed-variables/composed-variables.scss', 'utf-8');

    const header = composedVars.match(
      /\/\* EXTRACTING_SCSS_HEADER_START \*\/([\S\s]*)\/\* EXTRACTING_SCSS_HEADER_END \*\//m,
    )![1];

    const body = composedVars.match(
      /\/\* EXTRACTING_CSS_VARS_START \*\/([\S\s]*)\/\* EXTRACTING_CSS_VARS_END \*\//m,
    )![1];

    return (
      fileHeader({ file }) +
      `${header.trim()}\n\n@mixin lyne-design-tokens-css-variables {\n${symbols}\n  /* Composed variables */\n\n  ${body.trim()}\n}\n`
    );
  },
  name: 'scss/variables',
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
      // if a token uses a reference token, we add the original token object
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

function cssTemplate(token: TransformedToken) {
  let output = '';
  if (token.deprecated || token.comment || token.attributes?.category === 'size') {
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
    if (token.attributes?.category === 'size') {
      output += `   * Original Value: ${token.original.value}px\n`;
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
  if (token.attributes?.category === 'size') {
    output += `/// Original Value: ${token.original.value}px\n`;
  }
  output += `$${token.name}: ${token.value};\n`;

  return output;
}

function commonjsTemplate(token: TransformedToken) {
  let output = '';
  if (token.deprecated || token.comment) {
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
    output += '   */\n';
  }
  output += `  ${token.name}: '${token.value}',\n`;
  return output;
}
