/* eslint-disable @typescript-eslint/no-explicit-any */

import { Format, Named, TransformedToken } from 'style-dictionary';
import * as SBBTokens from './designTokens';
import { Config, CustomThemeConfig } from 'tailwindcss/types/config';

export function createTailwindSdFormatter(): Named<Format> {
  return {
    name: 'custom/tailwind',
    formatter: (args) => {
      return createTailwindConfig(args.dictionary.allTokens);
    },
  };
}

export function createTailwindConfig(tokens: TransformedToken[]) {
  const sbbTokens = unnestObjects(tokens) as Record<keyof typeof SBBTokens, Record<string, any>>;

  // map colors and respective transparency variants to a common color
  // e.g. "black" and "blackAlpha" will get merged into one color object, with the value of "black" as the default
  const colors = sbbTokens.color;
  Object.keys(colors).forEach((color) => {
    if (color.endsWith('Alpha') && typeof colors[color] === 'object') {
      const realColorName = color.replace('Alpha', '');
      colors[realColorName] = withTwDefault(colors[realColorName], colors[color]);
      delete colors[color];
    }
  });

  const { fixed, responsive } = sbbTokens.spacing;

  // TODO: implement appropriate media queries (like currently done in lyne-components)
  const responsiveSizes = Object.fromEntries(
    Object.keys(responsive).map((size) => {
      const breakpoint = 'zero';
      const variableName = responsive[size][breakpoint].replace(`-${breakpoint}`, '');
      return [size, variableName];
    }),
  );

  const fixedSizes = removeDashPrefix(fixed);

  const spacing = { ...fixedSizes, ...responsiveSizes };

  const tailwindTheme: Partial<CustomThemeConfig> = {
    colors: { transparent: 'transparent', current: 'currentColor', ...colors },
    screens: sbbTokens.breakpoint,
    transitionDuration: removeDashPrefix(sbbTokens.animation.duration),
    transitionTimingFunction: withTwDefault(sbbTokens.animation.easing),
    borderRadius: sbbTokens.border.radius,
    borderWidth: sbbTokens.border.width,
    outlineOffset: withTwDefault(sbbTokens.focus.outline.offset),
    spacing,
    // TODO:
    // font
    // shadow
    // grid layout
  };

  return JSON.stringify({ theme: tailwindTheme } as Config, null, 2);
}
const withTwDefault = <T extends object, V>(defaultValue: V, obj = {} as T) => ({
  ...obj,
  DEFAULT: defaultValue,
});
// remove the dash prefix from the keys
// e.g. "-1x" becomes "1x" in the key

const removeDashPrefix = (obj: Record<string, any>) =>
  Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [
      key.startsWith('-') ? key.substring(1) : key,
      value,
    ]),
  );

function unnestObjects(objects: TransformedToken[]): object {
  const nestedObject: any = {};

  for (const obj of objects) {
    let currentObject = nestedObject;
    const path = obj.path;

    for (let i = 0; i < path.length - 1; i++) {
      const key = path[i];

      if (!(key in currentObject)) {
        currentObject[key] = {};
      }

      currentObject = currentObject[key];
    }

    const finalKey = path[path.length - 1];
    // add the actual value behind the variable as a comment for a better developer experience
    currentObject[finalKey] = `var(--${obj.name}) /* ${obj.value} */`;
  }

  return nestedObject;
}
