import { DesignToken, DesignTokens } from 'style-dictionary';

const attributes = (group: string) =>
  <Partial<DesignToken>>{
    attributes: {
      category: 'size',
      group,
    },
  };

const gridAttributes = (group: string) =>
  <Partial<DesignToken>>{
    attributes: {
      category: 'size',
      isPureNumber: true,
      group,
    },
  };

export const layout: DesignTokens = {
  base: {
    grid: {
      columns: {
        zero: {
          value: 4,
          ...gridAttributes('base-grid-columns'),
        },
        micro: {
          value: 4,
          ...gridAttributes('base-grid-columns'),
        },
        small: {
          value: 4,
          ...gridAttributes('base-grid-columns'),
        },
        medium: {
          value: 8,
          ...gridAttributes('base-grid-columns'),
        },
        large: {
          value: 8,
          ...gridAttributes('base-grid-columns'),
        },
        wide: {
          value: 12,
          ...gridAttributes('base-grid-columns'),
        },
        ultra: {
          value: 12,
          ...gridAttributes('base-grid-columns'),
        },
      },
      gutter: {
        responsive: {
          zero: {
            value: 16,
            ...attributes('base-grid-gutter-responsive'),
          },
          micro: {
            value: 16,
            ...attributes('base-grid-gutter-responsive'),
          },
          small: {
            value: 24,
            ...attributes('base-grid-gutter-responsive'),
          },
          medium: {
            value: 24,
            ...attributes('base-grid-gutter-responsive'),
          },
          large: {
            value: 32,
            ...attributes('base-grid-gutter-responsive'),
          },
          wide: {
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
          value: 16,
          ...attributes('base-offset-responsive'),
        },
        micro: {
          value: 20,
          ...attributes('base-offset-responsive'),
        },
        small: {
          value: 48,
          ...attributes('base-offset-responsive'),
        },
        medium: {
          value: 56,
          ...attributes('base-offset-responsive'),
        },
        large: {
          value: 64,
          ...attributes('base-offset-responsive'),
        },
        wide: {
          value: 72,
          ...attributes('base-offset-responsive'),
        },
        ultra: {
          value: 124,
          ...attributes('base-offset-responsive'),
        },
      },
    },
  },
};
