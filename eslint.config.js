import globals from 'globals';
import tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';
import yaml from 'eslint-plugin-yaml';

import path from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import pluginJs from '@eslint/js';

// mimic CommonJS variables -- not needed if using CommonJS
const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
const compat = new FlatCompat({
  baseDirectory: dirname,
  recommendedConfig: pluginJs.configs.recommended,
});

export default [
  {
    languageOptions: { globals: globals.es2020, ecmaVersion: 2020 },
    plugins: { yaml },
    ignores: ['!.github/*', 'dist/**/*'],
  },
  ...compat.extends('standard-with-typescript'),
  ...tseslint.configs.recommended,
  eslintConfigPrettier,
];
