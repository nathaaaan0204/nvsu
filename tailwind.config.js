const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      'green': '#0E4C00',
      'black': '#3F3F3F',
    },
    extend: {},
  },
  plugins: [],
});
