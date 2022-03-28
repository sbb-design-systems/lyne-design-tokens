/* eslint-disable sort-keys */

const attributes = (group) => ({
  attributes: {
    group
  }
});

module.exports = {
  grid: {
    base: {
      columns: {
        zero: {
          value: 4,
          ...attributes('grid-base-columns')
        },
        micro: {
          value: 4,
          ...attributes('grid-base-columns')
        },
        small: {
          value: 4,
          ...attributes('grid-base-columns')
        },
        medium: {
          value: 8,
          ...attributes('grid-base-columns')
        },
        large: {
          value: 8,
          ...attributes('grid-base-columns')
        },
        wide: {
          value: 12,
          ...attributes('grid-base-columns')
        },
        ultra: {
          value: 12,
          ...attributes('grid-base-columns')
        }
      },
      gutter: {
        zero: {
          value: 16,
          ...attributes('grid-base-gutter')
        },
        micro: {
          value: 16,
          ...attributes('grid-base-gutter')
        },
        small: {
          value: 24,
          ...attributes('grid-base-gutter')
        },
        medium: {
          value: 24,
          ...attributes('grid-base-gutter')
        },
        large: {
          value: 32,
          ...attributes('grid-base-gutter')
        },
        wide: {
          value: 32,
          ...attributes('grid-base-gutter')
        },
        ultra: {
          value: 32,
          ...attributes('grid-base-gutter')
        }
      }
    }
  },
  offset: {
    base: {
      zero: {
        value: 16,
        ...attributes('offset-base')
      },
      micro: {
        value: 20,
        ...attributes('offset-base')
      },
      small: {
        value: 48,
        ...attributes('offset-base')
      },
      medium: {
        value: 56,
        ...attributes('offset-base')
      },
      large: {
        value: 64,
        ...attributes('offset-base')
      },
      wide: {
        value: 72,
        ...attributes('offset-base')
      },
      ultra: {
        value: 124,
        ...attributes('offset-base')
      }
    }
  }
};

/* eslint-enable sort-keys */
