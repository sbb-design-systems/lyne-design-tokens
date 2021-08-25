/* eslint-disable sort-keys */

const baseBorderWidth = 1;
const baseBorderRadius = 2;

const borderWidth = (width) => width * Number(baseBorderWidth);
const borderRadius = (width) => width * Number(baseBorderRadius);

module.exports = {
  width: {
    '1x': {
      value: borderWidth(1)
    },
    '2x': {
      value: borderWidth(2)
    }
  },
  radius: {
    '1x': {
      value: borderRadius(1)
    },
    '4x': {
      value: borderRadius(4)
    },
    '8x': {
      value: borderRadius(8)
    },
    '16x': {
      value: borderRadius(16)
    }
  }
};

/* eslint-enable sort-keys */
