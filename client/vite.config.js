import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({

////start from here
server:{
  proxy:{
    '/api':{
      target:'http://localhost:3000',
      secure:false,
    },
  },
},
//end here these line are used to work on client and api as well




  plugins: [react()],
})
