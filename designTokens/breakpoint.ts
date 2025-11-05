import type { DesignTokens } from 'style-dictionary/types';

const attributes: DesignTokens = {
  type: 'dimension',
};

export const breakpoint: DesignTokens = {
  zero: {
    min: {
      value: '0px',
      ...attributes,
    },
    max: {
      value: '599px',
      ...attributes,
    },
  },
  small: {
    min: {
      value: '600px',
      ...attributes,
    },
    max: {
      value: '1023px',
      ...attributes,
    },
  },
  large: {
    min: {
      value: '1024px',
      ...attributes,
    },
    max: {
      value: '1439px',
      ...attributes,
    },
  },
  ultra: {
    min: {
      value: '1440px',
      ...attributes,
    },
    max: {
      value: '2579px',
      ...attributes,
    },
  },
};
