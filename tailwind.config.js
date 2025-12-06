/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./app/components/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        primaryStrong: "var(--color-primary-strong)",
        primarySoft: "var(--color-primary-soft)",
        surface: "var(--color-surface)",
        muted: "var(--color-muted)",
        fg: "var(--color-foreground)",
        bg: "var(--color-bg)",
      },
      spacing: {
        xs: "var(--s-xs)",
        sm: "var(--s-sm)",
        md: "var(--s-md)",
        lg: "var(--s-lg)",
        xl: "var(--s-xl)",
        "2xl": "var(--s-2xl)",
      },
      borderRadius: {
        sm: "var(--r-sm)",
        md: "var(--r-md)",
        lg: "var(--r-lg)",
      },
      boxShadow: {
        soft: "var(--shadow-soft)",
        subtle: "var(--shadow-subtle)",
      },
      fontSize: {
        h1: "var(--font-h1)",
        h2: "var(--font-h2)",
        body: "var(--font-body)",
        small: "var(--font-small)",
      },
    },
  },
  plugins: [],
};
