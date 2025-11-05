import type { DesignTokens } from 'style-dictionary/types';

const baseBorderWidth = 1;
const baseBorderRadius = 2;

const borderWidth = (width: number): string => `${width * baseBorderWidth}px`;
const borderRadius = (width: number): string => `${width * baseBorderRadius}px`;

const attributes: DesignTokens = {
  type: 'dimension',
};

export const border: DesignTokens = {
  width: {
    '1x': {
      value: borderWidth(1),
      ...attributes,
    },
    '2x': {
      value: borderWidth(2),
      ...attributes,
    },
    '3x': {
      value: borderWidth(3),
      ...attributes,
    },
    '4x': {
      value: borderWidth(4),
      ...attributes,
    },
  },
  radius: {
    '1x': {
      value: borderRadius(1),
      ...attributes,
    },
    '2x': {
      value: borderRadius(2),
      ...attributes,
    },
    '4x': {
      value: borderRadius(4),
      ...attributes,
    },
    '6x': {
      value: borderRadius(6),
      ...attributes,
    },
    '8x': {
      value: borderRadius(8),
      ...attributes,
    },
    '16x': {
      value: borderRadius(16),
      ...attributes,
    },
  },
};
