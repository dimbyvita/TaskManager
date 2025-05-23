import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    host: 'localhost',
    port: 8122,
<<<<<<< HEAD
    // hmr: {
    //   overlay: true,
    // },
=======
    hmr: {
      overlay: true,
    },
>>>>>>> 172494c122605f1dd6dec4d477fddad4e2575a23
  }
})
