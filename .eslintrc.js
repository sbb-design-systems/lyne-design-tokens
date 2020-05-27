module.exports = {
    env: {
      browser: true,
      es6: true
    },
    parserOptions: {
      ecmaVersion: 2018,
      sourceType: 'module'
    },
    plugins: [
      'yaml',
      'json'
    ],
    extends: [
      'plugin:json/recommended'
    ]
};
