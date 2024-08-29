import type { DesignToken, DesignTokens } from 'style-dictionary';

const attributes = (group: string): Partial<DesignToken> => ({
  attributes: {
    group,
  },
});

export const hover: DesignTokens = {
  image: {
    brightness: {
      value: 1.075,
      ...attributes('hover'),
    },
  },
};
