// module.exports = {
//   theme: {
//     extend: {
//     },
//   },
//   plugins: [
//     require("daisyui"),
//   ],
//   daisyui: {
//     themes: ["light", "dark", "aqua"],
//   },

// };

export const purge = ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"];
export const theme = {
  extend: {
    daisyui: {
      themes: ["light", "dark", "aqua"],
    },
  },
};

export const plugins = [require("daisyui")];