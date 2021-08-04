const baseSpacing = 4;
const spacing = (value) => value * Number(baseSpacing);
const sizeCategory = {
  attributes: {
    implicitCategory: 'size'
  }
};

/* eslint-disable sort-keys */
module.exports = {
  fixed: {
    '-1x': {
      value: spacing(1),
      ...sizeCategory
    },
    '-2x': {
      value: spacing(2),
      ...sizeCategory
    },
    '-3x': {
      value: spacing(3),
      ...sizeCategory
    },
    '-4x': {
      value: spacing(4),
      ...sizeCategory
    },
    '-5x': {
      value: spacing(5),
      ...sizeCategory
    },
    '-6x': {
      value: spacing(6),
      ...sizeCategory
    },
    '-8x': {
      value: spacing(8),
      ...sizeCategory
    },
    '-10x': {
      value: spacing(10),
      ...sizeCategory
    }
  },
  responsive: {
    xs: {
      zero: {
        value: spacing(5),
        ...sizeCategory
      },
      micro: {
        value: spacing(5),
        ...sizeCategory
      },
      small: {
        value: spacing(5),
        ...sizeCategory
      },
      medium: {
        value: spacing(6),
        ...sizeCategory
      },
      large: {
        value: spacing(6),
        ...sizeCategory
      },
      wide: {
        value: spacing(6),
        ...sizeCategory
      },
      ultra: {
        value: spacing(6),
        ...sizeCategory
      }
    },
    s: {
      zero: {
        value: spacing(6),
        ...sizeCategory
      },
      micro: {
        value: spacing(6),
        ...sizeCategory
      },
      small: {
        value: spacing(6),
        ...sizeCategory
      },
      medium: {
        value: spacing(8),
        ...sizeCategory
      },
      large: {
        value: spacing(8),
        ...sizeCategory
      },
      wide: {
        value: spacing(8),
        ...sizeCategory
      },
      ultra: {
        value: spacing(8),
        ...sizeCategory
      }
    },
    m: {
      zero: {
        value: spacing(8),
        ...sizeCategory
      },
      micro: {
        value: spacing(8),
        ...sizeCategory
      },
      small: {
        value: spacing(8),
        ...sizeCategory
      },
      medium: {
        value: spacing(10),
        ...sizeCategory
      },
      large: {
        value: spacing(10),
        ...sizeCategory
      },
      wide: {
        value: spacing(12),
        ...sizeCategory
      },
      ultra: {
        value: spacing(12),
        ...sizeCategory
      }
    },
    l: {
      zero: {
        value: spacing(8),
        ...sizeCategory
      },
      micro: {
        value: spacing(8),
        ...sizeCategory
      },
      small: {
        value: spacing(10),
        ...sizeCategory
      },
      medium: {
        value: spacing(12),
        ...sizeCategory
      },
      large: {
        value: spacing(14),
        ...sizeCategory
      },
      wide: {
        value: spacing(14),
        ...sizeCategory
      },
      ultra: {
        value: spacing(16),
        ...sizeCategory
      }
    },
    xl: {
      zero: {
        value: spacing(8),
        ...sizeCategory
      },
      micro: {
        value: spacing(8),
        ...sizeCategory
      },
      small: {
        value: spacing(12),
        ...sizeCategory
      },
      medium: {
        value: spacing(16),
        ...sizeCategory
      },
      large: {
        value: spacing(20),
        ...sizeCategory
      },
      wide: {
        value: spacing(20),
        ...sizeCategory
      },
      ultra: {
        value: spacing(24),
        ...sizeCategory
      }
    }
  }
};

/* eslint-enable sort-keys */
