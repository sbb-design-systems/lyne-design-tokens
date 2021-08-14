/* eslint-disable sort-keys */
const attributes = (group) => ({
  attributes: {
    group
  }
});

module.exports = {
  form: {
    element: {
      large: {
        min: {
          height: {
            value: 56,
            ...attributes('form')
          }
        }
      },
      small: {
        min: {
          height: {
            value: 40,
            ...attributes('form')
          }
        }
      }
    }
  },
  touch: {
    min: {
      value: 48,
      ...attributes('touch')
    }
  },
  icon: {
    ui: {
      small: {
        value: 24,
        ...attributes('icon')
      },
      medium: {
        value: 36,
        ...attributes('icon')
      },
      large: {
        value: 48,
        ...attributes('icon')
      }
    },
    timetable: {
      'attribute': {
        value: 16,
        ...attributes('icon')
      },
      'him-cus': {
        value: 16,
        ...attributes('icon')
      },
      'product-brand': {
        value: 20,
        ...attributes('icon')
      }
    },
    pictograms: {
      value: 24,
      ...attributes('icon')
    }
  }
};

/* eslint-enable sort-keys */
