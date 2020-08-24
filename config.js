module.exports = {

  /*
   * action: {
   *   buildSketch: {
   *     do: require('./sketch'),
   *     undo: () => console.log('no undo')
   *   }
   * },
   */
  platforms: {

    /**
     * sketch: {
     *  transforms: ['attribute/cti','name/cti/snake'],
     *  actions: ['buildSketch']
     * },
     */

    android: {
      buildPath: 'dist/android/',
      files: [
        {
          destination: 'font_dimens.xml',
          format: 'android/fontDimens'
        },
        {
          destination: 'colors.xml',
          format: 'android/colors'
        }
      ],
      transformGroup: 'android'
    },
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
        'color/css'
      ]
    },
    ios: {
      buildPath: 'dist/ios/',
      files: [
        {
          className: 'StyleDictionaryColor',
          destination: 'StyleDictionaryColor.h',
          filter: {
            attributes: {
              category: 'color'
            }
          },
          format: 'ios/colors.h',
          type: 'StyleDictionaryColorName'
        },
        {
          className: 'StyleDictionaryColor',
          destination: 'StyleDictionaryColor.m',
          filter: {
            attributes: {
              category: 'color'
            }
          },
          format: 'ios/colors.m',
          type: 'StyleDictionaryColorName'
        },
        {
          className: 'StyleDictionarySize',
          destination: 'StyleDictionarySize.h',
          filter: {
            attributes: {
              category: 'size'
            }
          },
          format: 'ios/static.h',
          type: 'float'
        },
        {
          className: 'StyleDictionarySize',
          destination: 'StyleDictionarySize.m',
          filter: {
            attributes: {
              category: 'size'
            }
          },
          format: 'ios/static.m',
          type: 'float'
        }
      ],
      transformGroup: 'ios'
    },
    iosSwift: {
      buildPath: 'dist/ios-swift/',
      files: [
        {
          className: 'StyleDictionary',
          destination: 'StyleDictionary.swift',
          filter: {},
          format: 'ios-swift/class.swift'
        }
      ],
      transformGroup: 'ios-swift'
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
        'color/hex'
      ]
    },
    less: {
      buildPath: 'dist/less/',
      files: [
        {
          destination: '_variables.less',
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
        'color/hex'
      ]
    },
    scss: {
      buildPath: 'dist/scss/',
      files: [
        {
          destination: '_variables.scss',
          format: 'custom/format/scss'
        }
      ],
      transformGroup: 'scss',
      transforms: [
        'attribute/cti',
        'name/cti/kebab',
        'time/seconds',
        'content/icon',
        'size/px',
        'color/css'
      ]
    }
  },
  source: ['properties/**/*.json']
}
