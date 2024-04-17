import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {},
  },
  plugins: [
    // if container needs modification
    // ({ addComponents }) => {
    //   addComponents({
    //     '.container': {
    //       '@screen sm': {
    //         maxWidth: '640px',
    //       },
    //       '@screen md': {
    //         maxWidth: '768px',
    //       },
    //       '@screen lg': {
    //         maxWidth: '1024px',
    //       },
    //       '@screen xl': {
    //         maxWidth: '1280px',
    //       },
    //       '@screen 2xl': {
    //         maxWidth: '1536px',
    //       },
    //     },
    //   });
    // },
  ],
};

export default config;
