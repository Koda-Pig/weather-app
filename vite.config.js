import { defineConfig, loadEnv } from 'vite'

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    define: {
      VITE_WEATHER_API_KEY: env.VITE_WEATHER_API_KEY
    }
  }
})
