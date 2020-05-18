[![Build Status](https://travis-ci.org/lyne-design-system/lyne-design-tokens.svg?branch=master)](https://travis-ci.org/lyne-design-system/lyne-design-tokens) [![Depfu](https://badges.depfu.com/badges/4f0c4270e17baf64e8ac9d54b16e1fd8/status.svg)](https://depfu.com) [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release) ![GitHub tag (latest SemVer)](https://img.shields.io/github/v/tag/lyne-design-system/lyne-design-tokens?label=release)

# Lyne Design Tokens

Managing and publishing design tokens for the lyne design system: [https://github.com/lyne-design-system](https://github.com/lyne-design-system).

## Installation

Install the design tokens with the following command:
```bash
npm install --save-dev lyne-design-tokens
```

## Usage

Have a look at the dist folder inside node_modules: `./node_modules/lyne-design-tokens/dist/`. There you will find the different variables files that you can import and use inside your project.

## Development

### Conventinal commit

Please use [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) to make sure we can automatically determine the next release version if any.

### JSON Lint

Since the heart of this repo are the configuration json files inside the properties folder, we use jsonlint to make sure we don't have parsing errors in the json. This will automatically be checked in the CI before the release is deployed.

If you develop locally, make sure to run ```npm run jsonlint``` before commiting and pushing to the repo.

## Deployment

TravisCI is building as soon as a branch gets merged into the master branch. After successfull linting, the package will be published to npm. You can find the package on npm [here](https://www.npmjs.com/package/lyne-design-tokens).
