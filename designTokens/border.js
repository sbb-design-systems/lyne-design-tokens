/* eslint-disable sort-keys */

const baseBorderWidth = 1;
const baseBorderRadius = 2;

const borderWidth = (width) => width * Number(baseBorderWidth);
const borderRadius = (width) => width * Number(baseBorderRadius);

module.exports = {
  width: {
    1: {
      value: borderWidth(1)
    },
    2: {
      value: borderWidth(2)
    }
  },
  radius: {
    1: {
      value: borderRadius(1)
    },
    8: {
      value: borderRadius(8)
    },
    16: {
      value: borderRadius(16)
    }
  }
};

/* eslint-enable sort-keys */
