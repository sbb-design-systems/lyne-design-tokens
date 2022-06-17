const baseSpacing = 4;
const calculatedSpacing = (value: number) => value * baseSpacing;

export const spacing = {
  fixed: {
    '-1x': {
      value: calculatedSpacing(1),
    },
    '-2x': {
      value: calculatedSpacing(2),
    },
    '-3x': {
      value: calculatedSpacing(3),
    },
    '-4x': {
      value: calculatedSpacing(4),
    },
    '-5x': {
      value: calculatedSpacing(5),
    },
    '-6x': {
      value: calculatedSpacing(6),
    },
    '-8x': {
      value: calculatedSpacing(8),
    },
    '-10x': {
      value: calculatedSpacing(10),
    },
    '-12x': {
      value: calculatedSpacing(12),
    },
    '-14x': {
      value: calculatedSpacing(14),
    },
    '-16x': {
      value: calculatedSpacing(16),
    },
    '-18x': {
      value: calculatedSpacing(18),
    },
    '-20x': {
      value: calculatedSpacing(20),
    },
    '-24x': {
      value: calculatedSpacing(24),
    },
    '-30x': {
      value: calculatedSpacing(30),
    },
  },
  responsive: {
    xxxs: {
      zero: {
        value: calculatedSpacing(3),
      },
      micro: {
        value: calculatedSpacing(3),
      },
      small: {
        value: calculatedSpacing(3),
      },
      medium: {
        value: calculatedSpacing(4),
      },
      large: {
        value: calculatedSpacing(4),
      },
      wide: {
        value: calculatedSpacing(4),
      },
      ultra: {
        value: calculatedSpacing(4),
      },
    },
    xxs: {
      zero: {
        value: calculatedSpacing(4),
      },
      micro: {
        value: calculatedSpacing(4),
      },
      small: {
        value: calculatedSpacing(4),
      },
      medium: {
        value: calculatedSpacing(6),
      },
      large: {
        value: calculatedSpacing(6),
      },
      wide: {
        value: calculatedSpacing(6),
      },
      ultra: {
        value: calculatedSpacing(6),
      },
    },
    xs: {
      zero: {
        value: calculatedSpacing(5),
      },
      micro: {
        value: calculatedSpacing(5),
      },
      small: {
        value: calculatedSpacing(5),
      },
      medium: {
        value: calculatedSpacing(6),
      },
      large: {
        value: calculatedSpacing(6),
      },
      wide: {
        value: calculatedSpacing(6),
      },
      ultra: {
        value: calculatedSpacing(6),
      },
    },
    s: {
      zero: {
        value: calculatedSpacing(6),
      },
      micro: {
        value: calculatedSpacing(6),
      },
      small: {
        value: calculatedSpacing(6),
      },
      medium: {
        value: calculatedSpacing(8),
      },
      large: {
        value: calculatedSpacing(8),
      },
      wide: {
        value: calculatedSpacing(8),
      },
      ultra: {
        value: calculatedSpacing(8),
      },
    },
    m: {
      zero: {
        value: calculatedSpacing(8),
      },
      micro: {
        value: calculatedSpacing(8),
      },
      small: {
        value: calculatedSpacing(8),
      },
      medium: {
        value: calculatedSpacing(10),
      },
      large: {
        value: calculatedSpacing(10),
      },
      wide: {
        value: calculatedSpacing(12),
      },
      ultra: {
        value: calculatedSpacing(12),
      },
    },
    l: {
      zero: {
        value: calculatedSpacing(8),
      },
      micro: {
        value: calculatedSpacing(8),
      },
      small: {
        value: calculatedSpacing(10),
      },
      medium: {
        value: calculatedSpacing(12),
      },
      large: {
        value: calculatedSpacing(14),
      },
      wide: {
        value: calculatedSpacing(14),
      },
      ultra: {
        value: calculatedSpacing(16),
      },
    },
    xl: {
      zero: {
        value: calculatedSpacing(8),
      },
      micro: {
        value: calculatedSpacing(8),
      },
      small: {
        value: calculatedSpacing(12),
      },
      medium: {
        value: calculatedSpacing(16),
      },
      large: {
        value: calculatedSpacing(20),
      },
      wide: {
        value: calculatedSpacing(20),
      },
      ultra: {
        value: calculatedSpacing(24),
      },
    },
    xxl: {
      zero: {
        value: calculatedSpacing(12),
      },
      micro: {
        value: calculatedSpacing(12),
      },
      small: {
        value: calculatedSpacing(18),
      },
      medium: {
        value: calculatedSpacing(20),
      },
      large: {
        value: calculatedSpacing(24),
      },
      wide: {
        value: calculatedSpacing(24),
      },
      ultra: {
        value: calculatedSpacing(30),
      },
    },
  },
};
