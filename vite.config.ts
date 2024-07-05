import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import svgSpritePlugin from "vite-plugin-svg-sprite-component";
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';

import path from 'path'
const plugins=[
  react(),
  Icons({ autoInstall: true }),
  svgSpritePlugin.default({ symbolId: (name) => "icon-" + name }),
]
const resolve= {
  alias: {
    '@':  path.resolve(__dirname, './src'),
  },
  extensions: ['.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
}
const build = {
  rollupOptions: {
    output: {
      // 最小化拆分包
      manualChunks(id: string) {
        if (id.includes("node_modules")) {
          return id
            .toString()
            .split("node_modules/")[1]
            .split("/")[0]
            .toString();
        }
      },
      chunkFileNames: (chunkInfo:any) => {
        const facadeModuleId = chunkInfo.facadeModuleId
          ? chunkInfo.facadeModuleId.split("/")
          : [];
        const fileName1 =
          facadeModuleId[facadeModuleId.length - 2] || "[name]";
        return `js/${fileName1}/[name].[hash].js`;
      },
      entryFileNames: "js/[name].[hash].js",
      assetFileNames: "[ext]/[name].[hash:4].[ext]",
    },
  },
}
const esbuild= {
	drop: ['console', 'debugger'],
}

export default defineConfig(({ mode }:{ mode: string }) => { 
  const env = loadEnv(mode, __dirname)
  const  server = {
    port:  parseInt(env.VITE_APP_START_PORT),
    proxy: {
      [env.VITE_APP_PREFIX]: {
        target: env.VITE_APP_URL,
        changeOrigin: true,
        rewrite: (p:string) => p.replace(new RegExp('^' + env.VITE_APP_PREFIX), '')
      }
    }
  }
  return {
    plugins,
    resolve,
    server,
    build,
    // esbuild,
    base: './',
  
  }
})
