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
          ...attributes('grid')
        },
        micro: {
          value: 4,
          ...attributes('grid')
        },
        small: {
          value: 4,
          ...attributes('grid')
        },
        medium: {
          value: 8,
          ...attributes('grid')
        },
        large: {
          value: 8,
          ...attributes('grid')
        },
        wide: {
          value: 12,
          ...attributes('grid')
        },
        ultra: {
          value: 12,
          ...attributes('grid')
        }
      },
      gutter: {
        zero: {
          value: 16,
          ...attributes('grid')
        },
        micro: {
          value: 16,
          ...attributes('grid')
        },
        small: {
          value: 24,
          ...attributes('grid')
        },
        medium: {
          value: 24,
          ...attributes('grid')
        },
        large: {
          value: 32,
          ...attributes('grid')
        },
        wide: {
          value: 32,
          ...attributes('grid')
        },
        ultra: {
          value: 32,
          ...attributes('grid')
        }
      }
    },
    offset: {
      base: {
        zero: {
          value: 16,
          ...attributes('layout')
        },
        micro: {
          value: 20,
          ...attributes('layout')
        },
        small: {
          value: 48,
          ...attributes('layout')
        },
        medium: {
          value: 56,
          ...attributes('layout')
        },
        large: {
          value: 64,
          ...attributes('layout')
        },
        wide: {
          value: 72,
          ...attributes('layout')
        },
        ultra: {
          value: 124,
          ...attributes('layout')
        }
      }
    }
  }
};

/* eslint-enable sort-keys */
