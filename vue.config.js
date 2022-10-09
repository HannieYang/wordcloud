const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: { 
    output: { 
      globalObject: 'this', 
    }, 
  },
  publicPath:process.env.NODE_ENV==='production'?'./':'/',
})
