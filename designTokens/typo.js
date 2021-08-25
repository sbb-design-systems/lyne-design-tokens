/*
 * The file structure follows from generic to more and more specific
 * definitions. Only exceptions get defined to avoid bloat in the
 * variables files. This comes at the cost of additional mental
 * complexity when the the variables get consumed. Therefore the consumers
 * have to remember to stick with default styles as long as there is no
 * additional specification defined for the style they want to use. Within
 * each style definition, the generics are again grouped outside of the
 * breakpoint definitions to avoid repetition.
 */

/* eslint-disable sort-keys */

module.exports = {
  'font': {
    family: {
      fallback: {
        value: '\'Helvetica Neue\', Helvetica, Arial, sans-serif'
      },
      sbbLight: {
        value: '\'SBBWeb Light\', {typo.font.family.fallback.value}'
      },
      sbbRoman: {
        value: '\'SBBWeb Roman\', {typo.font.family.fallback.value}'
      },
      sbbBold: {
        value: '\'SBBWeb Bold\', {typo.font.family.fallback.value}'
      },
      i18n: {
        traditionalChinese: {
          value: '\'Example for possible i18n structure\''
        }
      }
    }
  },
  'base': {
    font: {
      size: {
        value: 16
      }
    }
  },
  'default': {
    fontColor: {
      value: '{color.charcoal.default.value}'
    },
    fontFamily: {
      value: '{typo.font.family.sbbRoman.value}'
    },
    fontSize: {
      value: 16
    },
    bodyText: {
      fontFamily: {
        value: '{typo.font.family.sbbRoman.value}'
      },
      letterSpacing: {
        value: '0.03em'
      },
      lineHeight: {
        value: '1.7'
      }
    },
    titles: {
      fontFamily: {
        value: '{typo.font.family.sbbBold.value}'
      },
      letterSpacing: {
        value: '0'
      },
      lineHeight: {
        value: '1.3'
      }
    }
  },
  'title-1': {
    zeroToMicro: {
      fontSize: {
        value: 40
      }
    },
    smallToMedium: {
      fontSize: {
        value: 48
      }
    },
    largeToWide: {
      fontSize: {
        value: 56
      }
    },
    ultra: {
      fontSize: {
        value: 64
      }
    }
  },
  'title-2': {
    zeroToSmall: {
      fontSize: {
        value: 32
      }
    },
    mediumToUltra: {
      fontSize: {
        value: 40
      }
    }
  },
  'title-3': {
    zeroToSmall: {
      fontSize: {
        value: 24
      }
    },
    mediumToUltra: {
      fontSize: {
        value: 32
      }
    }
  },
  'title-4': {
    zeroToSmall: {
      fontSize: {
        value: 20
      }
    },
    mediumToUltra: {
      fontSize: {
        value: 24
      }
    }
  },
  'title-5': {
    lineHeight: {
      value: '{typo.default.bodyText.lineHeight.value}'
    },
    zeroToSmall: {
      fontSize: {
        value: 16
      }
    },
    mediumToUltra: {
      fontSize: {
        value: 20
      }
    }
  },
  'title-6': {
    lineHeight: {
      value: '{typo.default.bodyText.lineHeight.value}'
    },
    zeroToSmall: {
      fontSize: {
        value: 14
      }
    },
    mediumToUltra: {
      fontSize: {
        value: 16
      }
    }
  },
  'text-xl-regular': {
    zeroToSmall: {
      fontSize: {
        value: 20
      }
    },
    mediumToUltra: {
      fontSize: {
        value: 24
      }
    }
  },
  'text-xl-bold': {
    fontFamily: {
      value: '{typo.font.family.sbbBold.value}'
    }
  },
  'text-m-regular': {
    zeroToSmall: {
      fontSize: {
        value: 16
      }
    },
    mediumToUltra: {
      fontSize: {
        value: 18
      }
    }
  },
  'text-m-bold': {
    fontFamily: {
      value: '{typo.font.family.sbbBold.value}'
    }
  },
  'text-s-regular': {
    zeroToSmall: {
      fontSize: {
        value: 14
      }
    },
    mediumToUltra: {
      fontSize: {
        value: 16
      }
    }
  },
  'text-s-bold': {
    fontFamily: {
      value: '{typo.font.family.sbbBold.value}'
    }
  },
  'text-xs-regular': {
    zeroToSmall: {
      fontSize: {
        value: 12
      }
    },
    mediumToUltra: {
      fontSize: {
        value: 14
      }
    }
  },
  'text-xs-bold': {
    fontFamily: {
      value: '{typo.font.family.sbbBold.value}'
    }
  }
};

/* eslint-enable sort-keys */
