const attributes = (shadowLevel: number) => ({
  attributes: {
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
  color1: string,
  color2: string,
  color3: string,
  color4: string
) => ({
  shadow: {
    1: {
      offset: {
        x: {
          value: x1,
          ...attributes(shadowLevel),
        },
        y: {
          value: y1,
          ...attributes(shadowLevel),
        },
      },
      blur: {
        value: blur1,
        ...attributes(shadowLevel),
      },
      spread: {
        value: spread1,
        ...attributes(shadowLevel),
      },
    },
    2: {
      offset: {
        x: {
          value: x2,
          ...attributes(shadowLevel),
        },
        y: {
          value: y2,
          ...attributes(shadowLevel),
        },
      },
      blur: {
        value: blur2,
        ...attributes(shadowLevel),
      },
      spread: {
        value: spread2,
        ...attributes(shadowLevel),
      },
    },
  },
  soft: {
    1: {
      color: {
        value: color1,
        ...attributes(shadowLevel),
      },
    },
    2: {
      color: {
        value: color2,
        ...attributes(shadowLevel),
      },
    },
  },
  hard: {
    1: {
      color: {
        value: color3,
        ...attributes(shadowLevel),
      },
    },
    2: {
      color: {
        value: color4,
        ...attributes(shadowLevel),
      },
    },
  },
});

export const shadow = {
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
          '{color.smoke.alpha.10.value}',
          '{color.smoke.alpha.20.value}'
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
          '{color.smoke.alpha.10.value}',
          '{color.smoke.alpha.20.value}'
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
          '{color.smoke.alpha.10.value}',
          '{color.smoke.alpha.20.value}'
        ),
      },
    },
  },
};
