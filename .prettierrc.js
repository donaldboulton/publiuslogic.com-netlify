/** @type {import("prettier").Config} */
const config = {
  trailingComma: "es5",
  semi: false,
  singleQuote: true,
  printWidth: 120,
  plugins: ['prettier-plugin-tailwindcss'],
};

export default config;