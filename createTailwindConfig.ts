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
  const sbbTokens = unnestObjects<typeof SBBTokens>(tokens);

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

  const spacing = { ...fixedSizes, ...responsiveSizes, '0': '0' };

  // ignore the max values from the breakpoint and only use the min sizes,
  // since min-width media queries are to be used
  const minWidthScreens = Object.fromEntries(
    Object.entries(sbbTokens.breakpoint).map(([bpName, range]) => [bpName, range.min]),
  );

  const maxWidthScreens = Object.fromEntries(
    Object.entries(sbbTokens.breakpoint).map(([bpName, range]) => [
      `max-${bpName}`,
      { max: range.max },
    ]),
  );

  const typeFaces = sbbTokens.typo.typeFace;

  const fontFamily: CustomThemeConfig['fontFamily'] = {
    roman: typeFaces.sbbRoman,
    bold: typeFaces.sbbBold,
    light: typeFaces.sbbLight,
  };

  // const fontSize =

  // Object.fromEntries(
  //   Object.entries(sbbTokens.typo.typeFace).map(([name, value]) => {
  //     if (name.startsWith('sbb')) name = name.substring(0, 3);
  //     return [name, ];
  //   }),
  // );

  // const font: CustomThemeConfig["fontFamily"]

  const tailwindTheme: Partial<CustomThemeConfig> = {
    colors: { transparent: 'transparent', current: 'currentColor', ...colors },
    screens: { ...minWidthScreens, ...maxWidthScreens },
    transitionDuration: removeDashPrefix(sbbTokens.animation.duration),
    transitionTimingFunction: withTwDefault(sbbTokens.animation.easing),
    borderRadius: { ...sbbTokens.border.radius, '0': '0', full: '9999px' },
    borderWidth: { ...sbbTokens.border.width, '0': '0' },
    outlineOffset: withTwDefault(sbbTokens.focus.outline.offset),
    spacing,
    fontFamily,

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

// this type recursively unnests objects that have a "value" property
// e.g. recursively transforms objects like { a: { value: "b" } } to { a: "b" }
type UnnestValue<T> = {
  [K in keyof T]: T[K] extends { value: any } ? T[K]['value'] : UnnestValue<T[K]>;
};

function unnestObjects<T extends object>(objects: TransformedToken[]): UnnestValue<T> {
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

    if (path[0] === 'breakpoint') {
      // breakpoints don't support css variables, we need to use the actual value of the variable instead
      currentObject[finalKey] = `${obj.value} /* var(--${obj.name}) */`;
    } else {
      // add the actual value behind the variable as a comment for a better developer experience
      currentObject[finalKey] =
        `var(--${obj.name}) /* ${obj.attributes?.category === 'size' ? obj.original.value + 'px' : obj.value} */`;
    }
  }

  return nestedObject;
}
