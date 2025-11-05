import type { DesignTokens } from 'style-dictionary/types';

const attributes: DesignTokens = {
  type: 'dimension',
};

const shadowObject = (
  x1: string,
  y1: string,
  blur1: string,
  spread1: string,
  x2: string,
  y2: string,
  blur2: string,
  spread2: string,
): DesignTokens => ({
  shadow: {
    1: {
      offset: {
        x: {
          value: x1,
          ...attributes,
        },
        y: {
          value: y1,
          ...attributes,
        },
      },
      blur: {
        value: blur1,
        ...attributes,
      },
      spread: {
        value: spread1,
        ...attributes,
      },
    },
    2: {
      offset: {
        x: {
          value: x2,
          ...attributes,
        },
        y: {
          value: y2,
          ...attributes,
        },
      },
      blur: {
        value: blur2,
        ...attributes,
      },
      spread: {
        value: spread2,
        ...attributes,
      },
    },
  },
});

export const shadow: DesignTokens = {
  elevation: {
    level: {
      3: {
        ...shadowObject('0px', '2px', '16px', '0px', '0px', '1px', '4px', '0px'),
      },
      5: {
        ...shadowObject('0px', '4px', '32px', '0px', '0px', '1px', '8px', '0px'),
      },
      9: {
        ...shadowObject('0px', '16px', '128px', '0px', '0px', '4px', '32px', '0px'),
      },
      11: {
        ...shadowObject('0px', '24px', '192px', '0px', '0px', '4px', '64px', '0px'),
      },
    },
  },
};
