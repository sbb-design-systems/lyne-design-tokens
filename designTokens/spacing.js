/*
 * Aside from the base definition, the number assigned to the value is
 * representing the factor by which the base value will get multiplied by
 * to create the actual spacing size (e.g. spacing-3x: 8 * 4 = 32). The
 * transformation is happening in the calculateSpacings transformation
 * inside of the build.js file.
 */

/* eslint-disable sort-keys */
module.exports = {
  base: {
    value: 4,
    attributes: {
      category: ''
    }
  },
  fixed: {
    '-1x': {
      value: 1
    },
    '-2x': {
      value: 2
    },
    '-3x': {
      value: 3
    },
    '-4x': {
      value: 4
    },
    '-5x': {
      value: 5
    },
    '-6x': {
      value: 6
    },
    '-8x': {
      value: 8
    },
    '-10x': {
      value: 10
    }
  },
  responsive: {
    '-xs': {
      zero: {
        value: 5
      },
      micro: {
        value: 5
      },
      small: {
        value: 5
      },
      medium: {
        value: 6
      },
      large: {
        value: 6
      },
      wide: {
        value: 6
      },
      ultra: {
        value: 6
      }
    },
    '-s': {
      zero: {
        value: 6
      },
      micro: {
        value: 6
      },
      small: {
        value: 6
      },
      medium: {
        value: 8
      },
      large: {
        value: 8
      },
      wide: {
        value: 8
      },
      ultra: {
        value: 8
      }
    },
    '-m': {
      zero: {
        value: 8
      },
      micro: {
        value: 8
      },
      small: {
        value: 8
      },
      medium: {
        value: 10
      },
      large: {
        value: 10
      },
      wide: {
        value: 12
      },
      ultra: {
        value: 12
      }
    },
    '-l': {
      zero: {
        value: 8
      },
      micro: {
        value: 8
      },
      small: {
        value: 10
      },
      medium: {
        value: 12
      },
      large: {
        value: 14
      },
      wide: {
        value: 14
      },
      ultra: {
        value: 16
      }
    },
    '-xl': {
      zero: {
        value: 8
      },
      micro: {
        value: 8
      },
      small: {
        value: 12
      },
      medium: {
        value: 16
      },
      large: {
        value: 20
      },
      wide: {
        value: 20
      },
      ultra: {
        value: 24
      }
    }
  }
};

/* eslint-enable sort-keys */
