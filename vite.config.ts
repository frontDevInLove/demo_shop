import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import dotenv from "dotenv";
dotenv.config();

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    base: process.env.VITE_APP_ROUTE || "/",
    plugins: [
      react({
        babel: {
          plugins: [["@babel/plugin-proposal-decorators", { legacy: true }]],
        },
      }),
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
