/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        poppinsRegular: ["PoppinsRegular"],
        robotoRegular: ["RobotoRegular"]
      },
      colors: {
        white: "#FFFFFF",
        lightGray: "#F9FAFB",
        black: "#111827",
        gray: "#6B7280",
        red: "#EF4444",
        blue: "#3B82F6"
      }
    },
  },
  plugins: [],
}