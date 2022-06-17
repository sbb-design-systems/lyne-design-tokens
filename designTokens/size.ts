const attributes = (group: string) => ({
  attributes: {
    group,
  },
});

export const size = {
  form: {
    element: {
      m: {
        min: {
          height: {
            zero: {
              value: 44,
              ...attributes('form'),
            },
            micro: {
              value: 44,
              ...attributes('form'),
            },
            small: {
              value: 44,
              ...attributes('form'),
            },
            medium: {
              value: 48,
              ...attributes('form'),
            },
            large: {
              value: 48,
              ...attributes('form'),
            },
            wide: {
              value: 48,
              ...attributes('form'),
            },
            ultra: {
              value: 48,
              ...attributes('form'),
            },
          },
        },
      },
      l: {
        min: {
          height: {
            zero: {
              value: 48,
              ...attributes('form'),
            },
            micro: {
              value: 48,
              ...attributes('form'),
            },
            small: {
              value: 48,
              ...attributes('form'),
            },
            medium: {
              value: 56,
              ...attributes('form'),
            },
            large: {
              value: 56,
              ...attributes('form'),
            },
            wide: {
              value: 56,
              ...attributes('form'),
            },
            ultra: {
              value: 56,
              ...attributes('form'),
            },
          },
        },
      },
    },
  },
  touch: {
    min: {
      value: 44,
      ...attributes('touch'),
    },
  },
  icon: {
    ui: {
      small: {
        value: 24,
        ...attributes('icon'),
      },
      medium: {
        value: 36,
        ...attributes('icon'),
      },
      large: {
        value: 48,
        ...attributes('icon'),
      },
    },
    timetable: {
      attribute: {
        value: 16,
        ...attributes('icon'),
      },
      'him-cus': {
        value: 16,
        ...attributes('icon'),
      },
      'product-brand': {
        value: 20,
        ...attributes('icon'),
      },
    },
    pictograms: {
      value: 24,
      ...attributes('icon'),
    },
  },
};
