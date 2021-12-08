module.exports = {
  plugins: ['stylelint-scss'],
  rules: {
    'scss/map-keys-quotes': 'always',
    'scss/no-duplicate-mixins': true,
    'scss/at-import-no-partial-leading-underscore': true,
    'scss/function-quote-no-quoted-strings-inside': true,
    'scss/dollar-variable-first-in-block': [
      true,
      {
        ignore: ['comments', 'imports'],
      },
    ],
  },
};
