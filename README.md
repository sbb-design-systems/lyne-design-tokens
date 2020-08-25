[![Build Status](https://travis-ci.org/lyne-design-system/lyne-design-tokens.svg?branch=master)](https://travis-ci.org/lyne-design-system/lyne-design-tokens) [![Depfu](https://badges.depfu.com/badges/4f0c4270e17baf64e8ac9d54b16e1fd8/overview.svg)](https://depfu.com/github/lyne-design-system/lyne-design-tokens?project_id=12757) [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release) ![GitHub tag (latest SemVer)](https://img.shields.io/github/v/tag/lyne-design-system/lyne-design-tokens?label=release)

# Lyne Design Tokens

Automatically generate design tokens for the lyne design system based on the Figma Design Library:
- Lyne Design System: [https://github.com/lyne-design-system](https://github.com/lyne-design-system).
- Lyne Figma Library [https://www.figma.com/file/mWknI2rC5DJmOgRO61WKai/LyneDesignSystemLibrary?node-id=2%3A2](https://www.figma.com/file/mWknI2rC5DJmOgRO61WKai/LyneDesignSystemLibrary?node-id=2%3A2)

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

## Deployment

The TravisCI job to build and deploy the design tokens will be triggered as soon as the Team Library Figma File is changed an published. In that case, the configured Figma webhook will fire a request to the Express server hosted on Heroku (https://powerful-harbor-93786.herokuapp.com/). After the express server has verified, that the request comes from the corresponding figma file, it will trigger the Travis build via API.

As well, TravisCI is building as soon as a branch gets merged into the master branch. After successfull linting, the package will be published to npm. You can find the package on npm [here](https://www.npmjs.com/package/lyne-design-tokens).

## Figma

For the whole workflow to work correctly, it is neccessary that the Figma Team Library File has the proper content. Following are the requirements:
- All the style definitions must be on the first page of the figma document.
- Every design token type should be listed on a separate frame in Figma. If you want to define colors, make a frame named "colors".
- Every token must be defined as a Figma Component. If you want to define a color design token, make a frame, give it a background color and convert it to a component.
- Every component shall only have one child element (for example a frame representing a color). That child must be named correctly. If you want to create a design token for red color, name the child red.
- Everything inside a frame can be organized in groups as you like.
- The editor of the Figma Library MUST provide a description when publishing changes to the library. The description shall follow the conventional commit messages.
- Frames that contain the string ```***ignore***``` in their name are ignored by this workflow.

### Examples

#### color-white
- Frame: color
  - Component (name does not matter)
    - Child: white (a frame with white background)

#### color-red-regular
- Frame: color
  - Group: red
    - Component (name does not matter)
      - Child: regular (a frame with red background)

#### font-size-headline-1
- Frame: font-size
  - Group: headline
    - Component (name does not matter)
      - Child: 1 (A Text box with a text that has desired font size)
