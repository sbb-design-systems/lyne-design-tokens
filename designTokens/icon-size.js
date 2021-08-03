/* eslint-disable sort-keys */

const sizeCategory = {
  attributes: {
    implicitCategory: 'size'
  }
};

module.exports = {
  ui: {
    small: {
      value: 24,
      ...sizeCategory
    },
    medium: {
      value: 36,
      ...sizeCategory
    },
    large: {
      value: 48,
      ...sizeCategory
    }
  },
  timetable: {
    'attribute': {
      value: 16,
      ...sizeCategory
    },
    'him-cus': {
      value: 16,
      ...sizeCategory
    },
    'product-brand': {
      value: 20,
      ...sizeCategory
    }
  },
  pictograms: {
    value: 24,
    ...sizeCategory
  }
};

/* eslint-enable sort-keys */
