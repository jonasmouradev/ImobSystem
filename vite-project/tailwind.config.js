export const purge = ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"];
// export const darkMode = "media";
export const theme = {
  extend: {
    daisyui: {
      themes: ["light", "dark", "corporativo"],
    },
  },
};

export const plugins = [
  require('daisyui'),
];
