/* eslint-disable sort-keys */

const sizeCategory = {
  attributes: {
    implicitCategory: 'size'
  }
};

module.exports = {
  zero: {
    min: {
      value: 0,
      ...sizeCategory
    },
    max: {
      value: 359,
      ...sizeCategory
    }
  },
  micro: {
    min: {
      value: 360,
      ...sizeCategory
    },
    max: {
      value: 599,
      ...sizeCategory
    }
  },
  small: {
    min: {
      value: 600,
      ...sizeCategory
    },
    max: {
      value: 839,
      ...sizeCategory
    }
  },
  medium: {
    min: {
      value: 840,
      ...sizeCategory
    },
    max: {
      value: 1023,
      ...sizeCategory
    }
  },
  large: {
    min: {
      value: 1024,
      ...sizeCategory
    },
    max: {
      value: 1279,
      ...sizeCategory
    }
  },
  wide: {
    min: {
      value: 1280,
      ...sizeCategory
    },
    max: {
      value: 1439,
      ...sizeCategory
    }
  },
  ultra: {
    min: {
      value: 1440,
      ...sizeCategory
    },
    max: {
      value: 2579,
      ...sizeCategory
    }
  }
};

/* eslint-enable sort-keys */
