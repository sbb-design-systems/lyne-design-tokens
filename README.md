[![Build Status](https://travis-ci.org/lyne-design-system/lyne-design-tokens.svg?branch=master)](https://travis-ci.org/lyne-design-system/lyne-design-tokens) [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release) ![GitHub tag (latest SemVer)](https://img.shields.io/github/v/tag/lyne-design-system/lyne-design-tokens?label=release)

# Lyne Design Tokens

Automatically generate Design Tokens for the Lyne Design System based on the Figma Design Library:
- Lyne Design System: [https://github.com/lyne-design-system](https://github.com/lyne-design-system).
- Lyne Figma Library [https://www.figma.com/file/mWknI2rC5DJmOgRO61WKai/LyneDesignSystemLibrary?node-id=2%3A2](https://www.figma.com/file/mWknI2rC5DJmOgRO61WKai/LyneDesignSystemLibrary?node-id=2%3A2)

## Installation

Install the Design Tokens with the following command:
```bash
npm install --save-dev lyne-design-tokens
```

## Usage

Have a look at the dist folder inside node_modules: `./node_modules/lyne-design-tokens/dist/`. There you will find the different variables files which you can import and use in your project.

## Development

### Conventional Commits

Please follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification to make sure we can automatically determine the next release version if necessary.

## Deployment

The TravisCI job to build and deploy the Design Tokens will be triggered as soon as the Figma Team Library file for the Design Tokens got changed and published. In this case, the configured Figma Webhook will fire a request to the Express Server hosted on Heroku (https://powerful-harbor-93786.herokuapp.com/). After the Express Server has verified that the request comes from the corresponding Figma file, it will trigger the Travis build via API.

Furthermore, TravisCI is building as soon as a branch gets merged into the master branch. After successful linting, the Lyne Design Tokens package will be published to npm. You can find the package on npm [here](https://www.npmjs.com/package/lyne-design-tokens).

After successful build, the job for lyne-components will be triggered.

## Figma

For the whole workflow to work correctly, it is necessary that the Figma Team Library file has the proper content. Following are the requirements:
- All style definitions must be on the first page of the Figma document.
- Every Design Token type should be listed on a separate frame in Figma. If you want to define colors, create a new frame named "colors".
- Every token must be defined as a Figma component. If you want to define a color Design Token, create a new frame, give it a background color and convert it to a component.
- Every component shall only have one child element (for example a frame representing a color). That child must be named correctly. If you want to create a Design Token for the color red, name the child red.
- Everything inside a frame can be organized in groups as you like. Nesting of groups is possible to achieve multi-level names e.g. for variants.
- The person who edits the Figma Library MUST provide a description when they want to publish their changes to the library. The description shall follow the Conventional Commit specification as well.
- Frames which contain the string ```***ignore***``` in their name, will be ignored from processing during the workflow.

### Examples
Explaining the necessary structure and naming of the Design Tokens within Figma.

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
