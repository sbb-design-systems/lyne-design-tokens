import type { DesignToken, DesignTokens } from 'style-dictionary';

const attributes = (shadowLevel: number, category?: string): Partial<DesignToken> => ({
  attributes: {
    category,
    group: shadowLevel,
  },
});

const shadowObject = (
  shadowLevel: number,
  x1: number,
  y1: number,
  blur1: number,
  spread1: number,
  x2: number,
  y2: number,
  blur2: number,
  spread2: number,
): DesignTokens => ({
  shadow: {
    1: {
      offset: {
        x: {
          value: x1,
          ...attributes(shadowLevel, 'size'),
        },
        y: {
          value: y1,
          ...attributes(shadowLevel, 'size'),
        },
      },
      blur: {
        value: blur1,
        ...attributes(shadowLevel, 'size'),
      },
      spread: {
        value: spread1,
        ...attributes(shadowLevel, 'size'),
      },
    },
    2: {
      offset: {
        x: {
          value: x2,
          ...attributes(shadowLevel, 'size'),
        },
        y: {
          value: y2,
          ...attributes(shadowLevel, 'size'),
        },
      },
      blur: {
        value: blur2,
        ...attributes(shadowLevel, 'size'),
      },
      spread: {
        value: spread2,
        ...attributes(shadowLevel, 'size'),
      },
    },
  },
});

export const shadow: DesignTokens = {
  elevation: {
    level: {
      3: {
        ...shadowObject(3, 0, 2, 16, 0, 0, 1, 4, 0),
      },
      5: {
        ...shadowObject(5, 0, 4, 32, 0, 0, 1, 8, 0),
      },
      9: {
        ...shadowObject(9, 0, 16, 128, 0, 0, 4, 32, 0),
      },
      11: {
        ...shadowObject(11, 0, 24, 192, 0, 0, 4, 64, 0),
      },
    },
  },
};
