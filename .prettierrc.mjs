/** @type {import("prettier").Config} */
export default {
  singleQuote: true,
  trailingComma: 'all',
  jsxSingleQuote: true,
  plugins: ['prettier-plugin-astro'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
};
