[![Build Status](https://travis-ci.com/lyne-design-system/lyne-design-tokens.svg?branch=master)](https://travis-ci.com/lyne-design-system/lyne-design-tokens) [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release) ![GitHub tag (latest SemVer)](https://img.shields.io/github/v/tag/lyne-design-system/lyne-design-tokens?label=release)

# Lyne Design Tokens

Automatically generate cross platform Design Tokens for the Lyne Design System based json properties files and publish them as `lyne-design-tokens` npm package.

## Installation

Install the Lyne Design Tokens with the following command:

```bash
npm install --save-dev lyne-design-tokens
```

## What's included

```
lyne-design-tokens/
├── designTokens/                            # Token source files
└── dist/                                    # These files get built through the build task and get published via npm — are part of the npm package
    ├── css/
    │    ├── variables--host.css             # CSS variables with :host selector
    │    └── variables--root.css             # CSS variables with :root selector
    ├── js/
    │    ├── tokens-raw.json                 # Nested .json file
    │    ├── tokens.mjs                      # Flat esm file
    │    ├── tokens.cjs                      # Flat commonjs file
    │    ├── tokens.d.ts                     # Flat type declaration
    │    └── tokens.json                     # Flat .json file
    ├── less/
    │    └── variables.less                  # Less variables
    └── scss/
         ├── variables_css--placeholder.scss # CSS variables with Sass placeholder selector (%)
         └── variables.scss                  # Sass variables
```

## Usage

Have a look at the dist folder inside node_modules: `./node_modules/lyne-design-tokens/dist/`. There you will find the different variables files which you can import and use in your project.

## Development

### Conventional Commits

Please follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification to make sure we can automatically determine the next release version if necessary.

## Deployment

TravisCI is building as soon as a branch gets merged into the master branch. After successful linting, the Lyne Design Tokens package will be published to npm. You can find the package on npm [here](https://www.npmjs.com/package/lyne-design-tokens).

After successful build, the job for lyne-components will be triggered.
