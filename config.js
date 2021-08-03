module.exports = {
  platforms: {
    css: {
      buildPath: 'dist/css/',
      files: [
        {
          destination: '_variables.css',
          format: 'css/variables'
        }
      ],
      transformGroup: 'css',
      transforms: [
        'attribute/cti',
        'name/cti/kebab',
        'time/seconds',
        'content/icon',
        'size/px',
        'color/css',
        'size/pxToRem'
      ]
    },
    js: {
      buildPath: 'dist/js/',
      files: [
        {
          destination: 'tokens.es6.js',
          format: 'javascript/es6'
        },
        {
          destination: 'tokens.commonjs.js',
          format: 'custom/format/javascript/module'
        },
        {
          destination: 'tokens.umd.js',
          format: 'javascript/umd'
        },
        {
          destination: 'tokens.raw.json',
          format: 'json'
        },
        {
          destination: 'tokens.nested.json',
          format: 'json/nested'
        },
        {
          destination: 'tokens.flat.json',
          format: 'json/flat'
        }
      ],
      transformGroup: 'js',
      transforms: [
        'attribute/cti',
        'name/cti/pascal',
        'size/px',
        'color/css',
        'size/pxToRem'
      ]
    },
    less: {
      buildPath: 'dist/less/',
      files: [
        {
          destination: 'variables.less',
          format: 'less/variables'
        }
      ],
      transformGroup: 'less',
      transforms: [
        'attribute/cti',
        'name/cti/kebab',
        'time/seconds',
        'content/icon',
        'size/px',
        'color/css',
        'size/pxToRem'
      ]
    },
    scss: {
      buildPath: 'dist/scss/',
      files: [
        {
          destination: 'variables.scss',
          format: 'custom/format/scss'
        },
        {
          destination: 'css_variables.scss',
          format: 'css/variables',
          options: {
            selector: ':host'
          }
        }
      ],
      transformGroup: 'scss',
      transforms: [
        'attribute/cti',
        'name/cti/kebab',
        'time/seconds',
        'content/icon',
        'size/px',
        'color/css',
        'size/pxToRem'
      ]
    }
  },
  source: ['designTokens']
};
