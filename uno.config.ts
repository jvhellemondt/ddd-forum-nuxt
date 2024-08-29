import { defineConfig } from 'unocss'
import presetWind from '@unocss/preset-wind'

export default defineConfig({
  presets: [
    presetWind({
      extend: {
        screens: {
          print: { raw: 'print' },
          screen: { raw: 'screen' },
        },
      },
    }),
  ],
})
