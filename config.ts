import type { Config } from 'style-dictionary/types';

import tokens from './designTokens/index.js';
import { formats, transforms } from 'style-dictionary/enums';

const { javascriptEs6, jsonFlat, typescriptEs6Declarations } = formats;
const { nameKebab, timeSeconds } = transforms;

export const config: Config = {
  tokens,
  platforms: {
    css: {
      buildPath: 'dist/css/',
      prefix: 'sbb',
      files: [
        {
          destination: 'sbb-variables.css',
          format: 'custom/format/css/variables',
        },
      ],
      transformGroup: 'css',
      transforms: [nameKebab, 'custom/transform/pxToRem'],
    },
    js: {
      buildPath: 'dist/js/',
      prefix: 'sbb',
      files: [
        {
          destination: 'sbb-tokens.js',
          format: javascriptEs6,
        },
        {
          destination: 'sbb-tokens.d.ts',
          format: typescriptEs6Declarations,
        },
      ],
      transformGroup: 'js',
      transforms: ['custom/transform/pxToRem', timeSeconds],
    },
    jsonFlat: {
      buildPath: 'dist/js/',
      prefix: 'sbb',
      files: [
        {
          destination: 'sbb-tokens.json',
          format: jsonFlat,
        },
      ],
      transformGroup: 'js',
      transforms: [nameKebab, 'custom/transform/pxToRem', timeSeconds],
    },
    jsonRaw: {
      buildPath: 'dist/js/',
      prefix: 'sbb',
      files: [
        {
          destination: 'sbb-tokens-raw.json',
          format: 'custom/format/json/extended',
        },
      ],
      transformGroup: 'js',
      transforms: [nameKebab, timeSeconds],
    },
    scss: {
      buildPath: 'dist/scss/',
      prefix: 'sbb',
      files: [
        {
          destination: 'sbb-variables.scss',
          format: 'custom/format/scss',
        },
        {
          destination: 'sbb-variables-as-css.scss',
          format: 'custom/format/scss/variables',
        },
      ],
      transformGroup: 'scss',
      transforms: [nameKebab, 'custom/transform/pxToRem'],
    },
  },
};
