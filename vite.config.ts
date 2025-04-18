import { defineConfig, loadEnv } from "vite"
import react from "@vitejs/plugin-react"
import path from "path"

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  const env = loadEnv(mode, process.cwd(), "")

  return {
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    server: {
      port: 3000,
      host: true,
    },
    build: {
      outDir: "dist",
      sourcemap: true,
      commonjsOptions: {
        transformMixedEsModules: true,
      },
    },
    optimizeDeps: {
      include: ["@chakra-ui/react", "@emotion/react", "@emotion/styled"],
      esbuildOptions: {
        target: "es2020",
      },
    },
    define: {
      // Telegram Web App global
      "window.Telegram": "window.Telegram",
    },
  }
})


