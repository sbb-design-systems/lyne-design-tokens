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
  // @deprecated start
  colorSoft1: string,
  colorSoft2: string,
  colorSoftNegative1: string,
  colorSoftNegative2: string,
  colorHard1: string,
  colorHard2: string,
  colorHardNegative1: string,
  colorHardNegative2: string,
  // @deprecated end
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
  // @deprecated
  soft: {
    1: {
      color: {
        value: colorSoft1,
        ...attributes(shadowLevel),
      },
    },
    2: {
      color: {
        value: colorSoft2,
        ...attributes(shadowLevel),
      },
    },
    negative: {
      1: {
        color: {
          value: colorSoftNegative1,
          ...attributes(shadowLevel),
        },
      },
      2: {
        color: {
          value: colorSoftNegative2,
          ...attributes(shadowLevel),
        },
      },
    },
  },
  // @deprecated
  hard: {
    1: {
      color: {
        value: colorHard1,
        ...attributes(shadowLevel),
      },
    },
    2: {
      color: {
        value: colorHard2,
        ...attributes(shadowLevel),
      },
    },
    negative: {
      1: {
        color: {
          value: colorHardNegative1,
          ...attributes(shadowLevel),
        },
      },
      2: {
        color: {
          value: colorHardNegative2,
          ...attributes(shadowLevel),
        },
      },
    },
  },
});

export const shadow: DesignTokens = {
  color: {
    soft: {
      1: {
        light: { value: '{color.smokeAlpha.5.value}' },
        dark: { value: '{color.blackAlpha.15.value}' },
        negative: {
          light: { value: '{color.blackAlpha.15.value}' },
          dark: { value: '{color.blackAlpha.15.value}' },
        },
      },
      2: {
        light: { value: '{color.smokeAlpha.10.value}' },
        dark: { value: '{color.blackAlpha.20.value}' },
        negative: {
          light: { value: '{color.blackAlpha.20.value}' },
          dark: { value: '{color.blackAlpha.20.value}' },
        },
      },
    },
    hard: {
      1: {
        light: { value: '{color.smokeAlpha.10.value}' },
        dark: { value: '{color.blackAlpha.30.value}' },
        negative: {
          light: { value: '{color.blackAlpha.30.value}' },
          dark: { value: '{color.blackAlpha.30.value}' },
        },
      },
      2: {
        light: { value: '{color.smokeAlpha.20.value}' },
        dark: { value: '{color.blackAlpha.40.value}' },
        negative: {
          light: { value: '{color.blackAlpha.40.value}' },
          dark: { value: '{color.blackAlpha.40.value}' },
        },
      },
    },
  },
  elevation: {
    level: {
      3: {
        ...shadowObject(
          3,
          0,
          2,
          16,
          0,
          0,
          1,
          4,
          0,
          '{color.smokeAlpha.5.value}',
          '{color.smokeAlpha.10.value}',
          '{color.blackAlpha.15.value}',
          '{color.blackAlpha.20.value}',
          '{color.smokeAlpha.10.value}',
          '{color.smokeAlpha.20.value}',
          '{color.blackAlpha.30.value}',
          '{color.blackAlpha.40.value}',
        ),
      },
      5: {
        ...shadowObject(
          5,
          0,
          4,
          32,
          0,
          0,
          1,
          8,
          0,
          '{color.smokeAlpha.5.value}',
          '{color.smokeAlpha.10.value}',
          '{color.blackAlpha.15.value}',
          '{color.blackAlpha.20.value}',
          '{color.smokeAlpha.10.value}',
          '{color.smokeAlpha.20.value}',
          '{color.blackAlpha.30.value}',
          '{color.blackAlpha.40.value}',
        ),
      },
      9: {
        ...shadowObject(
          9,
          0,
          16,
          128,
          0,
          0,
          4,
          32,
          0,
          '{color.smokeAlpha.5.value}',
          '{color.smokeAlpha.10.value}',
          '{color.blackAlpha.15.value}',
          '{color.blackAlpha.20.value}',
          '{color.smokeAlpha.10.value}',
          '{color.smokeAlpha.20.value}',
          '{color.blackAlpha.30.value}',
          '{color.blackAlpha.40.value}',
        ),
      },
      11: {
        ...shadowObject(
          11,
          0,
          24,
          192,
          0,
          0,
          4,
          64,
          0,
          '{color.smokeAlpha.5.value}',
          '{color.smokeAlpha.10.value}',
          '{color.blackAlpha.15.value}',
          '{color.blackAlpha.20.value}',
          '{color.smokeAlpha.10.value}',
          '{color.smokeAlpha.20.value}',
          '{color.blackAlpha.30.value}',
          '{color.blackAlpha.40.value}',
        ),
      },
    },
  },
};
