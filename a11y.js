module.exports = {
  plugins: ['stylelint-a11y'],
  rules: {
    'a11y/media-prefers-reduced-motion': true,
    'a11y/no-outline-none': true,
    'a11y/selector-pseudo-class-focus': [
      true,
      {
        severity: 'warning',
        message:
          'Expected that &:hover is used together with :focus-visible pseudo-class',
        disableFix: true,
      },
    ],
    'a11y/no-obsolete-element': true,
  },
};
