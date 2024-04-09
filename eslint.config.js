// @ts-check

import globals from 'globals';
import tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginYml from 'eslint-plugin-yml';
import eslint from '@eslint/js';

/** @type {import('@typescript-eslint/utils').TSESLint.FlatConfig.ConfigFile} */
export default [
  {
    languageOptions: { globals: globals.es2020, ecmaVersion: 2020 },
    ignores: ['dist/**/*'],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...eslintPluginYml.configs['flat/standard'],
  eslintConfigPrettier,
];
