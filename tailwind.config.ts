import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{html,js,ts,jsx,tsx,mdx}",
    "./components/**/*.{html,js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        buttonGrad: "linear-gradient(270deg, #FF1AC4 0%, #AB47FF 100%)",
        login: "url('/images/signin.png')",
        signup: "url('/images/signup.png')",
        forgotPassword: "url('/images/forgot.png')",
        verificationCode: "url('/images/verification.png')",
        newPassword: "url('/images/new-password.png')",
        passwordUpdated: "url('/images/password-updated.png')",
      },
      boxShadow: {
        buttonShadow:
          "0px 0px 50px 0px rgba(171, 71, 255, 0.2), 0px 0px 50px 0px rgba(171, 71, 255, 0.2)",
      },
      colors: {
        boulder: "#747474",
        cowboy: "#343434",
        purple: "#AB47FF",
        grad: "linear-gradient(180deg, rgba(171, 71, 255, 0.90) 0%, rgba(255, 26, 196, 0.90) 100%)",
      },
    },
    fontFamily: {
      aeonik: "Aeonik",
    },
  },
  plugins: [],
};
export default config;
