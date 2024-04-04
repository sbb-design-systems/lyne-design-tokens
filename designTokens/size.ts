import { DesignToken, DesignTokens } from 'style-dictionary';

const attributes = (group?: string) =>
  <Partial<DesignToken>>{
    attributes: {
      category: 'size',
      group,
    },
  };

export const size: DesignTokens = {
  element: {
    xs: {
      zero: {
        value: 36,
        ...attributes(),
      },
      micro: {
        value: 36,
        ...attributes(),
      },
      small: {
        value: 36,
        ...attributes(),
      },
      medium: {
        value: 40,
        ...attributes(),
      },
      large: {
        value: 40,
        ...attributes(),
      },
      wide: {
        value: 40,
        ...attributes(),
      },
      ultra: {
        value: 40,
        ...attributes(),
      },
    },
    s: {
      zero: {
        value: 44,
        ...attributes(),
      },
      micro: {
        value: 44,
        ...attributes(),
      },
      small: {
        value: 44,
        ...attributes(),
      },
      medium: {
        value: 48,
        ...attributes(),
      },
      large: {
        value: 48,
        ...attributes(),
      },
      wide: {
        value: 48,
        ...attributes(),
      },
      ultra: {
        value: 48,
        ...attributes(),
      },
    },
    m: {
      zero: {
        value: 48,
        ...attributes(),
      },
      micro: {
        value: 48,
        ...attributes(),
      },
      small: {
        value: 48,
        ...attributes(),
      },
      medium: {
        value: 56,
        ...attributes(),
      },
      large: {
        value: 56,
        ...attributes(),
      },
      wide: {
        value: 56,
        ...attributes(),
      },
      ultra: {
        value: 56,
        ...attributes(),
      },
    },
    l: {
      zero: {
        value: 56,
        ...attributes(),
      },
      micro: {
        value: 56,
        ...attributes(),
      },
      small: {
        value: 56,
        ...attributes(),
      },
      medium: {
        value: 64,
        ...attributes(),
      },
      large: {
        value: 64,
        ...attributes(),
      },
      wide: {
        value: 64,
        ...attributes(),
      },
      ultra: {
        value: 64,
        ...attributes(),
      },
    },
  },
  icon: {
    ui: {
      small: {
        value: 24,
        ...attributes('icon'),
      },
      medium: {
        value: 36,
        ...attributes('icon'),
      },
      large: {
        value: 48,
        ...attributes('icon'),
      },
    },
  },
};
