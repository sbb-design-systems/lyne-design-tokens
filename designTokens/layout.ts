import type { DesignTokens } from 'style-dictionary/types';

export const layout: DesignTokens = {
  base: {
    grid: {
      columns: {
        zero: {
          value: 4,
          type: 'number',
        },
        small: {
          value: 8,
          type: 'number',
        },
        large: {
          value: 12,
          type: 'number',
        },
        ultra: {
          value: 16,
          type: 'number',
        },
      },
      gutter: {
        responsive: {
          zero: {
            value: '16px',
            type: 'dimension',
          },
          small: {
            value: '24px',
            type: 'dimension',
          },
          large: {
            value: '32px',
            type: 'dimension',
          },
          ultra: {
            value: '32px',
            type: 'dimension',
          },
        },
      },
    },
    offset: {
      responsive: {
        zero: {
          value: '20px',
          type: 'dimension',
        },
        small: {
          value: '48px',
          type: 'dimension',
        },
        large: {
          value: '64px',
          type: 'dimension',
        },
        ultra: {
          value: '120px',
          type: 'dimension',
        },
      },
    },
    page: {
      maxWidth: {
        value: '1200px',
        type: 'dimension',
      },
    },
  },
};
