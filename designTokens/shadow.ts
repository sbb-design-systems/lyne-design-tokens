import { DesignToken, DesignTokens } from 'style-dictionary';

const attributes = (shadowLevel: number, category?: string) =>
  <Partial<DesignToken>>{
    attributes: {
      category,
      group: shadowLevel,
    },
  };

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
  colorSoft1: string,
  colorSoft2: string,
  colorSoftNegative1: string,
  colorSoftNegative2: string,
  colorHard1: string,
  colorHard2: string,
  colorHardNegative1: string,
  colorHardNegative2: string,
) => ({
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
          '{color.smoke.alpha.5.value}',
          '{color.smoke.alpha.10.value}',
          '{color.black.alpha.15.value}',
          '{color.black.alpha.20.value}',
          '{color.smoke.alpha.10.value}',
          '{color.smoke.alpha.20.value}',
          '{color.black.alpha.30.value}',
          '{color.black.alpha.40.value}',
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
          '{color.smoke.alpha.5.value}',
          '{color.smoke.alpha.10.value}',
          '{color.black.alpha.15.value}',
          '{color.black.alpha.20.value}',
          '{color.smoke.alpha.10.value}',
          '{color.smoke.alpha.20.value}',
          '{color.black.alpha.30.value}',
          '{color.black.alpha.40.value}',
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
          '{color.smoke.alpha.5.value}',
          '{color.smoke.alpha.10.value}',
          '{color.black.alpha.15.value}',
          '{color.black.alpha.20.value}',
          '{color.smoke.alpha.10.value}',
          '{color.smoke.alpha.20.value}',
          '{color.black.alpha.30.value}',
          '{color.black.alpha.40.value}',
        ),
      },
    },
  },
};
