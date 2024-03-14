import { FormatterArguments } from 'style-dictionary/types/Format';
import { config } from './config';
import StyleDictionaryBase, { TransformedToken } from 'style-dictionary';
import { makeSdTailwindConfig } from 'sd-tailwindcss-transformer';

const StyleDictionary = StyleDictionaryBase.extend(config).extend(
  makeSdTailwindConfig({
    tailwind: { content: ['./src/**/*.{ts,tsx,html}'] },
    buildPath: 'dist/tailwind/',
    type: 'all',
    transforms: ['attribute/cti', 'name/cti/kebab', 'custom/tailwind/organizeprops'],
    isVariables: true,
    prefix: 'sbb',
  }),
);
const fileHeader = StyleDictionary.formatHelpers.fileHeader;

console.log('Build started...');
console.log('\n==============================================');

StyleDictionary.registerTransform({
  type: 'attribute',
  name: 'custom/tailwind/organizeprops',
  transformer: (token) => {
    const [rootCategory, secondCategory] = token.path;
    if (rootCategory === 'color') {
      token.path[0] = 'colors';
    } else if (rootCategory === 'breakpoint') {
      token.path[0] = 'screens';
    } else if (rootCategory === 'animation' && secondCategory === 'duration') {
      token.path.splice(0, 2, 'transitionDuration');
    } else if (rootCategory === 'animation' && secondCategory === 'easing') {
      token.path.splice(0, 2, 'transitionTimingFunction');
    } else if (rootCategory === 'border' && secondCategory === 'width') {
      token.path.splice(0, 2, 'borderWidth');
    } else if (rootCategory === 'border' && secondCategory === 'radius') {
      token.path.splice(0, 2, 'borderRadius');
    } else if (rootCategory === 'focus' && secondCategory === 'outline') {
      token.path.splice(0, 3, 'outlineOffset');
    } else if (rootCategory === 'spacing' && secondCategory === 'responsive') {
      // remove "responsive"
      token.path.splice(1, 1);
      // remove "xxxs" etc.
      token.path.splice(2, 1);
      // remove media query value at the end
      token.name = token.name.split('-').slice(0, -1).join('-');
    } else if (rootCategory === 'spacing' && secondCategory === 'fixed') {
      token.path.splice(1, 1);
    } else if (rootCategory === 'shadow' && secondCategory === 'elevation') {
      // remove "level" and <level-value> (e.g. 3)
      token.path.splice(2, 2, 'lvl' + token.path[3]);
    }

    return token;
  },
});

StyleDictionary.registerFormat({
  formatter: ({ file, dictionary, options }: FormatterArguments) => {
    const symbols = dictionary.allProperties.map(cssTemplate).join('') + '\n';
    return fileHeader({ file }) + `${options.selector ?? ':root'} {\n${symbols}\n}\n`;
  },
  name: 'css/variables',
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
