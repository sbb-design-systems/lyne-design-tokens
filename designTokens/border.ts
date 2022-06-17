const baseBorderWidth = 1;
const baseBorderRadius = 2;

const borderWidth = (width: number) => width * baseBorderWidth;
const borderRadius = (width: number) => width * baseBorderRadius;

export const border = {
  width: {
    '1x': {
      value: borderWidth(1),
    },
    '2x': {
      value: borderWidth(2),
    },
  },
  radius: {
    '1x': {
      value: borderRadius(1),
    },
    '4x': {
      value: borderRadius(4),
    },
    '8x': {
      value: borderRadius(8),
    },
    '16x': {
      value: borderRadius(16),
    },
  },
};
