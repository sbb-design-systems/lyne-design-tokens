import { DesignToken, DesignTokens } from 'style-dictionary';

const attributes = (group: string) =>
  <Partial<DesignToken>>{
    attributes: {
      category: 'size',
      group,
    },
  };

export const size: DesignTokens = {
  button: {
    m: {
      min: {
        height: {
          zero: {
            value: 44,
            ...attributes('button'),
          },
          micro: {
            value: 44,
            ...attributes('button'),
          },
          small: {
            value: 44,
            ...attributes('button'),
          },
          medium: {
            value: 48,
            ...attributes('button'),
          },
          large: {
            value: 48,
            ...attributes('button'),
          },
          wide: {
            value: 48,
            ...attributes('button'),
          },
          ultra: {
            value: 48,
            ...attributes('button'),
          },
        },
      },
    },
    l: {
      min: {
        height: {
          zero: {
            value: 48,
            ...attributes('button'),
          },
          micro: {
            value: 48,
            ...attributes('button'),
          },
          small: {
            value: 48,
            ...attributes('button'),
          },
          medium: {
            value: 56,
            ...attributes('button'),
          },
          large: {
            value: 56,
            ...attributes('button'),
          },
          wide: {
            value: 56,
            ...attributes('button'),
          },
          ultra: {
            value: 56,
            ...attributes('button'),
          },
        },
      },
    },
  },
  form: {
    element: {
      m: {
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
      l: {
        min: {
          height: {
            zero: {
              value: 56,
              ...attributes('form'),
            },
            micro: {
              value: 56,
              ...attributes('form'),
            },
            small: {
              value: 56,
              ...attributes('form'),
            },
            medium: {
              value: 64,
              ...attributes('form'),
            },
            large: {
              value: 64,
              ...attributes('form'),
            },
            wide: {
              value: 64,
              ...attributes('form'),
            },
            ultra: {
              value: 64,
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
    form: {
      error: {
        value: 17,
        ...attributes('icon'),
      },
    },
  },
};
