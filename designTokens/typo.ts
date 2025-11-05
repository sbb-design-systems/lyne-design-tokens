import type { DesignTokens } from 'style-dictionary/types';

const baseTypoSpacing = 16;
const typoSpacing = (value: number): string => `${value * baseTypoSpacing}px`;

const attributes: DesignTokens = {
  type: 'dimension',
};

export const typo: DesignTokens = {
  fontFamily: {
    type: 'fontFamily',
    value: '"SBB", "Helvetica Neue", Helvetica, Arial, sans-serif',
  },
  letterSpacing: {
    titles: {
      value: '0em',
    },
    bodyText: {
      value: '0.03em',
    },
  },
  lineHeight: {
    titles: {
      value: 1.4,
      type: 'number',
    },
    bodyText: {
      value: 1.75,
      type: 'number',
    },
  },
  scale: {
    '0-75x': {
      value: typoSpacing(0.75),
      ...attributes,
    },
    '0-8125x': {
      value: typoSpacing(0.8125),
      ...attributes,
    },
    '0-875x': {
      value: typoSpacing(0.875),
      ...attributes,
    },
    default: {
      value: typoSpacing(1),
      ...attributes,
    },
    '1-125x': {
      value: typoSpacing(1.125),
      ...attributes,
    },
    '1-25x': {
      value: typoSpacing(1.25),
      ...attributes,
    },
    '1-5x': {
      value: typoSpacing(1.5),
      ...attributes,
    },
    '2x': {
      value: typoSpacing(2),
      ...attributes,
    },
    '2-5x': {
      value: typoSpacing(2.5),
      ...attributes,
    },
    '3x': {
      value: typoSpacing(3),
      ...attributes,
    },
    '3-5x': {
      value: typoSpacing(3.5),
      ...attributes,
    },
    '4x': {
      value: typoSpacing(4),
      ...attributes,
    },
  },
};
