/* eslint-disable sort-keys */
const _color1 = 'rgba(141,141,141,.05)';
const _color2 = 'rgba(141,141,141,.06)';
const _color3 = 'rgba(141,141,141,.1)';
const _color4 = 'rgba(141,141,141,.2)';

const shadowObject = (x1, y1, blur1, spread1, x2, y2, blur2, spread2, color1, color2, color3, color4) => ({
  soft: {
    shadow: {
      1: {
        color: {
          value: color1
        }
      },
      2: {
        color: {
          value: color2
        }
      }
    }
  },
  hard: {
    shadow: {
      1: {
        color: {
          value: color3
        }
      },
      2: {
        color: {
          value: color4
        }
      }
    }
  },
  shadow: {
    1: {
      offset: {
        x: {
          value: x1
        },
        y: {
          value: y1
        }
      },
      blur: {
        value: blur1
      },
      spread: {
        value: spread1
      }
    },
    2: {
      offset: {
        x: {
          value: x2
        },
        y: {
          value: y2
        }
      },
      blur: {
        value: blur2
      },
      spread: {
        value: spread2
      }
    }
  }
});

module.exports = {
  elevation: {
    level: {
      1: {
        ...shadowObject(0, 1, 8, 0, 0, 1, 2, 0, _color1, _color2, _color3, _color4)
      },
      3: {
        ...shadowObject(0, 2, 16, 0, 0, 1, 4, 0, _color1, _color3, _color3, _color4)
      },
      5: {
        ...shadowObject(0, 4, 32, 0, 0, 1, 8, 0, _color1, _color3, _color3, _color4)
      },
      7: {
        ...shadowObject(0, 8, 64, 0, 0, 2, 16, 0, _color1, _color3, _color3, _color4)
      },
      9: {
        ...shadowObject(0, 16, 128, 0, 0, 4, 32, 0, _color1, _color3, _color3, _color4)
      }
    }
  }
};

/* eslint-enable sort-keys */
