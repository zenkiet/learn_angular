// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{html,ts}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };

import type { Config } from 'tailwindcss';

export default <Partial<Config>>{
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
