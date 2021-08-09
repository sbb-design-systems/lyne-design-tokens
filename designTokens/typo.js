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
  base: {
    font: {
      size: {
        value: 16
      }
    }
  },
  default: {
    fontColor: {
      value: '{color.charcoal.default.value}'
    },
    fontFamily: {
      value: '{typo.font.family.sbbRoman.value}'
    },
    fontSize: {
      value: 16
    },
    letterSpacing: {
      value: '0.03em'
    }
  },
  font: {
    family: {
      fallback: {
        value: '\'Helvetica Neue\', Helvetica, Arial, sans-serif'
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
    },
    style: {
      'title-1': {
        fontFamily: {
          value: '{typo.font.family.sbbBold.value}'
        },
        letterSpacing: {
          value: 0
        },
        zeroToMicro: {
          fontSize: {
            value: 40
          },
          lineHeight: {
            value: 1.2
          }
        },
        smallToMedium: {
          fontSize: {
            value: 48
          },
          lineHeight: {
            value: 1.1
          }
        },
        largeToWide: {
          fontSize: {
            value: 56
          },
          lineHeight: {
            value: 1.2
          }
        },
        ultra: {
          fontSize: {
            value: 64
          },
          lineHeight: {
            value: 1.1
          }
        }
      },
      'title-2': {
        fontFamily: {
          value: '{typo.font.family.sbbBold.value}'
        },
        letterSpacing: {
          value: 0
        },
        zeroToMedium: {
          fontSize: {
            value: 32
          },
          lineHeight: {
            value: 1.3
          }
        },
        mediumToUltra: {
          fontSize: {
            value: 40
          },
          lineHeight: {
            value: 1.2
          }
        }
      },
      'title-3': {
        fontFamily: {
          value: '{typo.font.family.sbbBold.value}'
        },
        letterSpacing: {
          value: 0
        },
        zeroToMedium: {
          fontSize: {
            value: 24
          },
          lineHeight: {
            value: 1.3
          }
        },
        mediumToUltra: {
          fontSize: {
            value: 32
          },
          lineHeight: {
            value: 1.3
          }
        }
      },
      'title-4': {
        fontFamily: {
          value: '{typo.font.family.sbbBold.value}'
        },
        letterSpacing: {
          value: 0
        },
        zeroToMedium: {
          fontSize: {
            value: 20
          },
          lineHeight: {
            value: 1.4
          }
        },
        mediumToUltra: {
          fontSize: {
            value: 24
          },
          lineHeight: {
            value: 1.3
          }
        }
      },
      'title-5': {
        fontFamily: {
          value: '{typo.font.family.sbbBold.value}'
        },
        letterSpacing: {
          value: 0
        },
        zeroToSmall: {
          fontSize: {
            value: 16
          },
          lineHeight: {
            value: 1.5
          }
        },
        medium: {
          fontSize: {
            value: 18
          },
          lineHeight: {
            value: 1.4
          }
        },
        largeToUltra: {
          fontSize: {
            value: 20
          },
          lineHeight: {
            value: 1.4
          }
        }
      },
      'title-6': {
        fontFamily: {
          value: '{typo.font.family.sbbBold.value}'
        },
        letterSpacing: {
          value: 0
        },
        zeroToSmall: {
          fontSize: {
            value: 14
          },
          lineHeight: {
            value: 1.6
          }
        },
        mediumToUltra: {
          fontSize: {
            value: 16
          },
          lineHeight: {
            value: 1.5
          }
        }
      },
      'titlePanel': {
        letterSpacing: {
          value: 0
        },
        zeroToSmall: {
          fontSize: {
            value: 24
          },
          lineHeight: {
            value: 1.3
          }
        },
        medium: {
          fontSize: {
            value: 32
          },
          lineHeight: {
            value: 1.3
          }
        },
        largeToUltra: {
          fontSize: {
            value: 40
          },
          lineHeight: {
            value: 1.2
          }
        }
      },
      'lead': {
        zeroToSmall: {
          fontSize: {
            value: 20
          },
          lineHeight: {
            value: 1.5
          }
        },
        mediumToUltra: {
          fontSize: {
            value: 24
          },
          lineHeight: {
            value: 1.6
          }
        }
      },
      'text-1-regular': {
        zeroToSmall: {
          fontSize: {
            value: 16
          },
          lineHeight: {
            value: 1.6
          }
        },
        mediumToUltra: {
          fontSize: {
            value: 18
          },
          lineHeight: {
            value: 1.8
          }
        }
      },
      'text-1-underline': {
        textDecoration: {
          value: 'underline'
        }
      },
      'text-1-bold': {
        fontFamily: {
          value: '{typo.font.family.sbbBold.value}'
        }
      },
      'text-2-regular': {
        zeroToSmall: {
          fontSize: {
            value: 14
          },
          lineHeight: {
            value: 1.6
          }
        },
        mediumToUltra: {
          fontSize: {
            value: 16
          },
          letterSpacing: {
            value: '0.03em'
          }
        }
      },
      'text-2-underline': {
        textDecoration: {
          value: 'underline'
        }
      },
      'text-2-bold': {
        fontFamily: {
          value: '{typo.font.family.sbbBold.value}'
        }
      },
      'text-3-regular': {
        zeroToSmall: {
          fontSize: {
            value: 12
          },
          lineHeight: {
            value: 1.6
          }
        },
        mediumToUltra: {
          fontSize: {
            value: 14
          },
          lineHeight: {
            value: 1.6
          }
        }
      },
      'text-3-underline': {
        textDecoration: {
          value: 'underline'
        }
      },
      'text-3-bold': {
        fontFamily: {
          value: '{typo.font.family.sbbBold.value}'
        }
      },
      'text-4-regular': {
        zeroToSmall: {
          fontSize: {
            value: 10
          },
          lineHeight: {
            value: 1.6
          }
        },
        mediumToUltra: {
          fontSize: {
            value: 12
          },
          lineHeight: {
            value: 1.6
          }
        }
      },
      'text-4-underline': {
        textDecoration: {
          value: 'underline'
        }
      },
      'text-4-bold': {
        fontFamily: {
          value: '{typo.font.family.sbbBold.value}'
        }
      },
      'label-1': {
        fontSize: {
          value: 16
        },
        lineHeight: {
          value: 1.4
        }
      },
      'label-2': {
        fontSize: {
          value: 14
        },
        lineHeight: {
          value: 1.4
        }
      },
      'label-3': {
        fontSize: {
          value: 12
        },
        lineHeight: {
          value: 1.5
        }
      },
      'navigation': {
        fontFamily: {
          value: '{typo.font.family.sbbBold.value}'
        },
        fontSize: {
          value: 18
        },
        lineHeight: {
          value: 1.4
        }
      },
      'navigationBold': {
        fontFamily: {
          value: '{typo.font.family.sbbBold.value}'
        }
      },
      'badge': {
        zeroToSmall: {
          fontSize: {
            value: 10
          },
          lineHeight: {
            value: 1.4
          }
        },
        mediumToUltra: {
          fontFamily: {
            value: '{typo.font.family.sbbBold.value}'
          },
          fontSize: {
            value: 12
          },
          lineHeight: {
            value: 1.4
          }
        }
      },
      'button': {
        zeroToSmall: {
          fontFamily: {
            value: '{typo.font.family.sbbBold.value}'
          },
          fontSize: {
            value: 13
          },
          letterSpacing: {
            value: '0.01em'
          },
          lineHeight: {
            value: 1.4
          }
        },
        mediumToUltra: {
          fontFamily: {
            value: '{typo.font.family.sbbBold.value}'
          },
          fontSize: {
            value: 14
          },
          letterSpacing: {
            value: '0.01em'
          },
          lineHeight: {
            value: 1.4
          }
        }
      },
      'buttonStrikethrough': {
        textDecoration: {
          value: 'line-through'
        }
      },
      'caption': {
        zeroToSmall: {
          fontSize: {
            value: 13
          },
          lineHeight: {
            value: 1.6
          }
        },
        mediumToUltra: {
          fontSize: {
            value: 14
          },
          lineHeight: {
            value: 1.6
          }
        }
      },
      'input': {
        zeroToSmall: {
          fontSize: {
            value: 16
          },
          lineHeight: {
            value: 1.6
          }
        },
        mediumToUltra: {
          fontSize: {
            value: 18
          },
          lineHeight: {
            value: 1.8
          }
        }
      }
    }
  }
};

/* eslint-enable sort-keys */
