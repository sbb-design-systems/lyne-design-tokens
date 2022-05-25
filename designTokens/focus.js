/* eslint-disable sort-keys */

const attributes = (group) => ({
  attributes: {
    group
  }
});

module.exports = {
  outline: {
    offset: {
      value: 3,
      ...attributes('focus')
    }
  }
};

/* eslint-enable sort-keys */
