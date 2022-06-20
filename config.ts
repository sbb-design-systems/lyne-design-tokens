import { Config } from 'style-dictionary';

export const config: Config = {
  platforms: {
    css: {
      buildPath: 'dist/css/',
      files: [
        {
          destination: 'variables--root.css',
          format: 'css/variables',
          options: {
            selector: ':root',
          },
        },
        {
          destination: 'variables--host.css',
          format: 'css/variables',
          options: {
            selector: ':host',
          },
        },
      ],
      transformGroup: 'css',
      transforms: ['attribute/cti', 'name/cti/kebab', 'time/seconds', 'content/icon', 'color/css'],
    },
    cssPrefix: {
      buildPath: 'dist/css/',
      prefix: 'sbb',
      files: [
        {
          destination: 'sbb-variables--root.css',
          format: 'css/variables',
          options: {
            selector: ':root',
          },
        },
        {
          destination: 'sbb-variables--host.css',
          format: 'css/variables',
          options: {
            selector: ':host',
          },
        },
      ],
      transformGroup: 'css',
      transforms: [
        'attribute/cti',
        'name/cti/kebab',
        'time/seconds',
        'content/icon',
        'color/css',
        'size/pxToRem',
      ],
    },
    js: {
      buildPath: 'dist/js/',
      files: [
        {
          destination: 'tokens.mjs',
          format: 'javascript/es6',
        },
        {
          destination: 'tokens.cjs',
          format: 'custom/format/javascript/module',
        },
        {
          destination: 'tokens.d.ts',
          format: 'typescript/es6-declarations',
        },
        {
          destination: 'tokens.json',
          format: 'json/flat',
        },
      ],
      transformGroup: 'js',
      transforms: ['attribute/cti', 'name/cti/pascal', 'color/css'],
    },
    jsPrefix: {
      buildPath: 'dist/js/',
      prefix: 'sbb',
      files: [
        {
          destination: 'sbb-tokens.mjs',
          format: 'javascript/es6',
        },
        {
          destination: 'sbb-tokens.cjs',
          format: 'custom/format/javascript/module',
        },
        {
          destination: 'sbb-tokens.d.ts',
          format: 'typescript/es6-declarations',
        },
        {
          destination: 'sbb-tokens.json',
          format: 'json/flat',
        },
      ],
      transformGroup: 'js',
      transforms: ['attribute/cti', 'name/cti/pascal', 'color/css'],
    },
    jsonFlat: {
      buildPath: 'dist/js/',
      files: [
        {
          destination: 'tokens.json',
          format: 'json/flat',
        },
      ],
      transformGroup: 'js',
      transforms: ['attribute/cti', 'name/cti/kebab', 'color/css'],
    },
    jsonFlatPrefix: {
      buildPath: 'dist/js/',
      prefix: 'sbb',
      files: [
        {
          destination: 'sbb-tokens.json',
          format: 'json/flat',
        },
      ],
      transformGroup: 'js',
      transforms: ['attribute/cti', 'name/cti/kebab', 'color/css'],
    },
    jsonRaw: {
      buildPath: 'dist/js/',
      files: [
        {
          destination: 'tokens-raw.json',
          format: 'json/extended',
        },
      ],
      transformGroup: 'js',
      transforms: ['attribute/cti', 'name/cti/kebab', 'color/css'],
    },
    jsonRawPrefix: {
      buildPath: 'dist/js/',
      prefix: 'sbb',
      files: [
        {
          destination: 'sbb-tokens-raw.json',
          format: 'json/extended',
        },
      ],
      transformGroup: 'js',
      transforms: ['attribute/cti', 'name/cti/kebab', 'color/css'],
    },
    less: {
      buildPath: 'dist/less/',
      files: [
        {
          destination: 'variables.less',
          format: 'less/variables',
        },
      ],
      transformGroup: 'less',
      transforms: ['attribute/cti', 'name/cti/kebab', 'time/seconds', 'content/icon', 'color/css'],
    },
    lessPrefix: {
      buildPath: 'dist/less/',
      prefix: 'sbb',
      files: [
        {
          destination: 'sbb-variables.less',
          format: 'less/variables',
        },
      ],
      transformGroup: 'less',
      transforms: [
        'attribute/cti',
        'name/cti/kebab',
        'time/seconds',
        'content/icon',
        'color/css',
        'size/pxToRem',
      ],
    },
    scss: {
      buildPath: 'dist/scss/',
      files: [
        {
          destination: 'variables.scss',
          format: 'custom/format/scss',
        },
        {
          destination: 'variables_css--placeholder.scss',
          format: 'css/variables',
          options: {
            selector: '%lyne-design-tokens-css-variables',
          },
        },
      ],
      transformGroup: 'scss',
      transforms: ['attribute/cti', 'name/cti/kebab', 'time/seconds', 'content/icon', 'color/css'],
    },
    scssPrefix: {
      buildPath: 'dist/scss/',
      prefix: 'sbb',
      files: [
        {
          destination: 'sbb-variables.scss',
          format: 'custom/format/scss',
        },
        {
          destination: 'sbb-variables_css--placeholder.scss',
          format: 'css/variables',
          options: {
            selector: '%lyne-design-tokens-css-variables',
          },
        },
      ],
      transformGroup: 'scss',
      transforms: [
        'attribute/cti',
        'name/cti/kebab',
        'time/seconds',
        'content/icon',
        'color/css',
        'size/pxToRem',
      ],
    },
  },
  source: ['designTokens'],
};
