import { DesignToken, DesignTokens } from 'style-dictionary';

const attributes = (group: string) =>
  <Partial<DesignToken>>{
    attributes: {
      category: 'size',
      group,
    },
  };

export const focus: DesignTokens = {
  outline: {
    offset: {
      value: 3,
      ...attributes('focus'),
    },
  },
};
