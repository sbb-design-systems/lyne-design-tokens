import type { DesignToken, DesignTokens } from 'style-dictionary';

const attributes = (group: string, category = 'size'): Partial<DesignToken> => ({
  attributes: {
    category,
    group,
  },
});

export const layout: DesignTokens = {
  base: {
    grid: {
      columns: {
        zero: {
          value: 4,
          ...attributes('base-grid-columns', 'noUnit'),
        },
        small: {
          value: 8,
          ...attributes('base-grid-columns', 'noUnit'),
        },
        large: {
          value: 12,
          ...attributes('base-grid-columns', 'noUnit'),
        },
        ultra: {
          value: 16,
          ...attributes('base-grid-columns', 'noUnit'),
        },
      },
      gutter: {
        responsive: {
          zero: {
            value: 16,
            ...attributes('base-grid-gutter-responsive'),
          },
          small: {
            value: 24,
            ...attributes('base-grid-gutter-responsive'),
          },
          large: {
            value: 32,
            ...attributes('base-grid-gutter-responsive'),
          },
          ultra: {
            value: 32,
            ...attributes('base-grid-gutter-responsive'),
          },
        },
      },
    },
    offset: {
      responsive: {
        zero: {
          value: 20,
          ...attributes('base-offset-responsive'),
        },
        small: {
          value: 48,
          ...attributes('base-offset-responsive'),
        },
        large: {
          value: 64,
          ...attributes('base-offset-responsive'),
        },
        ultra: {
          value: 120,
          ...attributes('base-offset-responsive'),
        },
      },
    },
    page: {
      maxWidth: {
        value: 1200,
        ...attributes('base-page'),
      },
    },
  },
};
