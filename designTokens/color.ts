import type { DesignTokens } from 'style-dictionary';

export const color: DesignTokens = {
  black: {
    value: 'rgba(0,0,0,1)',
  },
  blackAlpha: {
    0: {
      value: 'rgba(0,0,0,0)',
    },
    10: {
      value: 'rgba(0,0,0,.1)',
    },
    15: {
      value: 'rgba(0,0,0,.15)',
    },
    20: {
      value: 'rgba(0,0,0,.2)',
    },
    30: {
      value: 'rgba(0,0,0,.3)',
    },
    40: {
      value: 'rgba(0,0,0,.4)',
    },
    50: {
      value: 'rgba(0,0,0,.5)',
    },
    60: {
      value: 'rgba(0,0,0,.6)',
    },
    70: {
      value: 'rgba(0,0,0,.7)',
    },
  },
  midnight: {
    value: 'rgba(21,21,21,1)',
  },
  blue: {
    value: 'rgba(45,50,125,1)',
  },
  charcoal: {
    value: 'rgba(33,33,33,1)',
  },
  iron: {
    value: 'rgba(68,68,68,1)',
  },
  anthracite: {
    value: 'rgba(90,90,90,1)',
  },
  granite: {
    value: 'rgba(104,104,104,1)',
  },
  metal: {
    value: 'rgba(118,118,118,1)',
  },
  metalAlpha: {
    0: {
      value: 'rgba(118,118,118,0)',
    },
    20: {
      value: 'rgba(118,118,118,.2)',
    },
  },
  smoke: {
    value: 'rgba(141,141,141,1)',
  },
  smokeAlpha: {
    0: {
      value: 'rgba(141,141,141,0)',
    },
    5: {
      value: 'rgba(141,141,141,.05)',
    },
    10: {
      value: 'rgba(141,141,141,.1)',
    },
    20: {
      value: 'rgba(141,141,141,.2)',
    },
  },
  storm: {
    value: 'rgba(168,168,168,1)',
  },
  graphite: {
    value: 'rgba(183,183,183,1)',
  },
  cement: {
    value: 'rgba(189,189,189,1)',
  },
  cementAlpha: {
    0: {
      value: 'rgba(189,189,189,0)',
    },
    20: {
      value: 'rgba(189,189,189,.2)',
    },
  },
  platinum: {
    value: 'rgba(205,205,205,1)',
  },
  platinumAlpha: {
    0: {
      value: 'rgba(205,205,205,0)',
    },
    20: {
      value: 'rgba(205,205,205,.2)',
    },
  },
  aluminium: {
    value: 'rgba(210,210,210,1)',
  },
  silver: {
    value: 'rgba(220,220,220,1)',
  },
  cloud: {
    value: 'rgba(229,229,229,1)',
  },
  cloudAlpha: {
    80: {
      value: 'rgba(229,229,229,.8)',
    },
  },
  milk: {
    value: 'rgba(246,246,246,1)',
  },
  red: {
    value: 'rgba(235,0,0,1)',
  },
  redAlpha: {
    0: {
      value: 'rgba(235,0,0,0)',
    },
    20: {
      value: 'rgba(235,0,0,.2)',
    },
    40: {
      value: 'rgba(235,0,0,.4)',
    },
    60: {
      value: 'rgba(235,0,0,.6)',
    },
    90: {
      value: 'rgba(235,0,0,.9)',
    },
  },
  // @deprecated, use red85 instead
  redMode: {
    dark: {
      value: 'rgba(255,56,56,1)',
    },
  },
  red85: {
    value: 'rgba(255,56,56,1)',
  },
  red125: {
    value: 'rgba(198,0,24,1)',
  },
  red125Alpha: {
    0: {
      value: 'rgba(198,0,24,0)',
    },
    20: {
      value: 'rgba(198,0,24,.2)',
    },
    40: {
      value: 'rgba(198,0,24,.4)',
    },
    60: {
      value: 'rgba(198,0,24,.6)',
    },
  },
  red150: {
    value: 'rgba(162,0,19,1)',
  },
  royal: {
    value: 'rgba(6,52,139,1)',
  },
  royalAlpha: {
    20: {
      value: 'rgba(6,52,139,.2)',
    },
    40: {
      value: 'rgba(6,52,139,.4)',
    },
    60: {
      value: 'rgba(6,52,139,.6)',
    },
    90: {
      value: 'rgba(6,52,139,.9)',
    },
  },
  royal85: {
    value: 'rgba(64,119,223,1)',
  },
  royal125: {
    value: 'rgba(3,38,104,1)',
  },
  royal125Alpha: {
    20: {
      value: 'rgba(3,38,104,.2)',
    },
    40: {
      value: 'rgba(3,38,104,.4)',
    },
    60: {
      value: 'rgba(3,38,104,.6)',
    },
  },
  royal150: {
    value: 'rgba(2,28,78,1)',
  },
  white: {
    value: 'rgba(255,255,255,1)',
  },
  whiteAlpha: {
    0: {
      value: 'rgba(255,255,255,0)',
    },
    20: {
      value: 'rgba(255,255,255,.2)',
    },
    30: {
      value: 'rgba(255,255,255,.3)',
    },
    50: {
      value: 'rgba(255,255,255,.5)',
    },
    60: {
      value: 'rgba(255,255,255,.6)',
    },
    70: {
      value: 'rgba(255,255,255,.7)',
    },
    80: {
      value: 'rgba(255,255,255,.8)',
    },
  },
  // @deprecated, use -light or -dark instead
  sky: {
    value: 'rgba(0,116,191,1)',
  },
  skyLight: {
    value: 'rgba(0,116,191,1)',
  },
  skyDark: {
    value: 'rgba(18,142,222,1)',
  },
  // @deprecated, use -light or -dark instead
  night: {
    value: 'rgba(20,58,133,1)',
  },
  nightLight: {
    value: 'rgba(20,58,133,1)',
  },
  nightDark: {
    value: 'rgba(101,135,202,1)',
  },
  // @deprecated, use -light or -dark instead
  violet: {
    value: 'rgba(111,34,130,1)',
  },
  violetLight: {
    value: 'rgba(111,34,130,1)',
  },
  violetDark: {
    value: 'rgba(179,108,197,1)',
  },
  // @deprecated, use -light or -dark instead
  pink: {
    value: 'rgba(199,56,122,1)',
  },
  pinkLight: {
    value: 'rgba(199,56,122,1)',
  },
  pinkDark: {
    value: 'rgba(228,82,149,1)',
  },
  // @deprecated, use -light or -dark instead
  autumn: {
    value: 'rgba(207,59,0,1)',
  },
  autumnLight: {
    value: 'rgba(207,59,0,1)',
  },
  autumnDark: {
    value: 'rgba(240,83,19,1)',
  },
  // @deprecated, use -light or -dark instead
  orange: {
    value: 'rgba(242,126,0,1)',
  },
  orangeLight: {
    value: 'rgba(242,126,0,1)',
  },
  orangeDark: {
    value: 'rgba(251,142,25,1)',
  },
  // @deprecated, use -light or -dark instead
  peach: {
    value: 'rgba(252,187,0,1)',
  },
  peachLight: {
    value: 'rgba(252,187,0,1)',
  },
  peachDark: {
    value: 'rgba(255,199,39,1)',
  },
  // @deprecated, use -light or -dark instead
  lemon: {
    value: 'rgba(255,222,21,1)',
  },
  lemonLight: {
    value: 'rgba(255,222,21,1)',
  },
  lemonDark: {
    value: 'rgba(255,229,71,1)',
  },
  // @deprecated, use -light or -dark instead
  brown: {
    value: 'rgba(160,84,0,1)',
  },
  brownLight: {
    value: 'rgba(160,84,0,1)',
  },
  brownDark: {
    value: 'rgba(207,111,4)',
  },
  // @deprecated, use -light or -dark instead
  green: {
    value: 'rgba(0,130,51,1)',
  },
  greenLight: {
    value: 'rgba(0,130,51,1)',
  },
  greenDark: {
    value: 'rgba(16,157,71,1)',
  },
  // @deprecated, use -light or -dark instead
  turquoise: {
    value: 'rgba(0,126,132,1)',
  },
  turquoiseLight: {
    value: 'rgba(0,126,132,1)',
  },
  turquoiseDark: {
    value: 'rgba(0,165,155,1)',
  },
};
