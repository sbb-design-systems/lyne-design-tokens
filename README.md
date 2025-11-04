# Lyne Design Tokens

Automatically generate cross-platform Design Tokens for the Lyne Design System based json properties files
and publish them as `@sbb-esta/lyne-design-tokens` npm package.

## Installation

Install the Lyne Design Tokens with the following command:

```bash
npm install --save-dev @sbb-esta/lyne-design-tokens
```

## What's included

```
lyne-design-tokens/
├── composed-variables/                             # Composed CSS variables like responsive tokens
├── designTokens/                                   # Token source files
└── dist/                                           # These files get built through the build task and get published via npm — are part of the npm package
    ├── css/
    │    ├── sbb-variables.css                      # `sbb-` prefixed CSS variables with :root selector
    ├── js/
    │    ├── sbb-tokens-raw.json                    # `sbb-` prefixed nested .json file
    │    ├── sbb-tokens.js                          # `Sbb` prefixed flat esm file
    │    ├── sbb-tokens.d.ts                        # `Sbb` prefixed flat type declaration
    │    └── sbb-tokens.json                        # `sbb-` prefixed flat .json file
    └── scss/
         ├── sbb-variables-as-css.scss              # `sbb-` prefixed CSS variables wrapped in Sass mixins per breakpoint and forced colors.
         └── sbb-variables.scss                     # `sbb-` prefixed Sass variables
```

## Usage

Have a look at the dist folder inside node_modules: `./node_modules/@sbb-esta/lyne-design-tokens/dist/`.
There you will find the different variables files which you can import and use in your project.

## Development

### Conventional Commits

Please follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification to make sure we can automatically
determine the next release version if necessary.

## Components

See [Lyne Components](https://github.com/sbb-design-systems/lyne-components) for components using these design tokens.
