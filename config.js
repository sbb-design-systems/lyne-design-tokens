module.exports = {
  source: ["properties/**/*.json"],
  platforms: {
    scss: {
      transformGroup: "scss",
      buildPath: "dist/scss/",
      files: [
        {
          destination: "_variables.scss",
          format: "custom/format/scss"
        }
      ]
    },
    less: {
      transformGroup: "less",
      buildPath: "dist/less/",
      files: [{
        destination: "_variables.less",
        format: "less/variables"
      }]
    },
    css: {
      transformGroup: "css",
      buildPath: "dist/css/",
      files: [{
        destination: "_variables.css",
        format: "css/variables"
      }]
    },
    js: {
      transformGroup: "js",
      buildPath: "dist/js/",
      files: [
        {
          destination: "tokens.es6.js",
          format: "javascript/es6"
        },
        {
          destination: "tokens.commonjs.js",
          format: "custom/format/javascript/module"
        },
        {
          destination: "tokens.umd.js",
          format: "javascript/umd"
        },
        {
          destination: "tokens.raw.json",
          format: "json"
        },
        {
          destination: "tokens.nested.json",
          format: "json/nested"
        },
        {
          destination: "tokens.flat.json",
          format: "json/flat"
        }
      ]
    },
    sketch: {
      transforms: ["name/cti/camel","attribute/cti", "color/sketch"],
      buildPath: "dist/sketch/",
      files: [
        {
          destination: "tokens.sketchpalette",
          format: "sketch/palette/v2",
          filter: {
            attributes: {
              category: "color"
            }
          }
        }
      ]
    },
    android: {
      transformGroup: "android",
      buildPath: "dist/android/",
      files: [{
        destination: "font_dimens.xml",
        format: "android/fontDimens"
      },{
        destination: "colors.xml",
        format: "android/colors"
      }]
    },
    ios: {
      transformGroup: "ios",
      buildPath: "dist/ios/",
      files: [{
        destination: "StyleDictionaryColor.h",
        format: "ios/colors.h",
        className: "StyleDictionaryColor",
        type: "StyleDictionaryColorName",
        filter: {
          attributes: {
            category: "color"
          }
        }
      },{
        destination: "StyleDictionaryColor.m",
        format: "ios/colors.m",
        className: "StyleDictionaryColor",
        type: "StyleDictionaryColorName",
        filter: {
          attributes: {
            category: "color"
          }
        }
      },{
        destination: "StyleDictionarySize.h",
        format: "ios/static.h",
        className: "StyleDictionarySize",
        type: "float",
        filter: {
          attributes: {
            category: "size"
          }
        }
      },{
        destination: "StyleDictionarySize.m",
        format: "ios/static.m",
        className: "StyleDictionarySize",
        type: "float",
        filter: {
          attributes: {
            category: "size"
          }
        }
      }]
    },
    iosSwift: {
      transformGroup: "ios-swift",
      buildPath: "dist/ios-swift/",
      files: [{
        destination: "StyleDictionary.swift",
        format: "ios-swift/class.swift",
        className: "StyleDictionary",
        filter: {}
      }]
    },
    iosSwiftSeparateEnums: {
      transformGroup: "ios-swift-separate",
      buildPath: "dist/ios-swift/",
      files: [{
        destination: "StyleDictionaryColor.swift",
        format: "ios-swift/enum.swift",
        className: "StyleDictionaryColor",
        filter: {
          attributes: {
            category: "color"
          }
        }
      },{
        destination: "StyleDictionarySize.swift",
        format: "ios-swift/enum.swift",
        className: "StyleDictionarySize",
        type: "float",
        filter: {
          attributes: {
            category: "size"
          }
        }
      }]
    }
  }
}
