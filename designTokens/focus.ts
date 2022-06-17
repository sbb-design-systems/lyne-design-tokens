const attributes = (group: string) => ({
  attributes: {
    group,
  },
});

export const focus = {
  outline: {
    offset: {
      value: 3,
      ...attributes('focus'),
    },
  },
};
