/* eslint-disable sort-keys */

const baseTypoSpacing = 16;
const typoSpacing = (value) => value * Number(baseTypoSpacing);

module.exports = {
  fontFamilyFallback: {
    value: '"Helvetica Neue", Helvetica, Arial, sans-serif',
  },
  typeFace: {
    sbbLight: {
      value: '"SBBWeb Light", {typo.fontFamilyFallback.value}',
    },
    sbbRoman: {
      value: '"SBBWeb Roman", {typo.fontFamilyFallback.value}',
    },
    sbbBold: {
      value: '"SBBWeb Bold", {typo.fontFamilyFallback.value}',
    },
    i18n: {
      traditionalChinese: {
        value: '"Example for possible i18n structure"',
      },
    },
  },
  letterSpacing: {
    titles: {
      value: '0',
    },
    bodyText: {
      value: '0.03em',
    },
  },
  lineHeight: {
    titles: {
      value: '1.3',
    },
    bodyText: {
      value: '1.7',
    },
  },
  scale: {
    '0-75x': {
      value: typoSpacing(0.75),
    },
    '0-8125x': {
      value: typoSpacing(0.8125),
    },
    '0-875x': {
      value: typoSpacing(0.875),
    },
    default: {
      value: typoSpacing(1),
    },
    '1-125x': {
      value: typoSpacing(1.125),
    },
    '1-25x': {
      value: typoSpacing(1.25),
    },
    '1-5x': {
      value: typoSpacing(1.5),
    },
    '2x': {
      value: typoSpacing(2),
    },
    '2-5x': {
      value: typoSpacing(2.5),
    },
    '3x': {
      value: typoSpacing(3),
    },
    '3-5x': {
      value: typoSpacing(3.5),
    },
    '4x': {
      value: typoSpacing(4),
    },
  },
};

/* eslint-enable sort-keys */
