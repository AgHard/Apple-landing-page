import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), sentryVitePlugin({
    org: "the-german-university",
    project: "javascript-react-as"
  }), sentryVitePlugin({
    org: "the-german-university",
    project: "iphone"
  }), sentryVitePlugin({
    org: "the-german-university",
    project: "iphone"
  })],

  build: {
    sourcemap: true
  }
})