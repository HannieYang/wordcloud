const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: { 
    output: { 
      globalObject: 'this', 
    }, 
  },
  publicPath:process.env.NODE_ENV==='production'?'./':'/',
  // devServer:{
  //   proxy:{
  //     '/cloudapi':{//表示拦截以/api开头的请求路径
  //       // target:'http://8.134.73.140:58003',
  //       target:window.location.origin,
  //       changOrigin: true,//是否开启跨域
  //       pathRewrite:{
  //         '^/cloudapi':'' //重写api，把api变成空字符，因为我们真正请求的路径是没有api的
  //       }
  //     }
  //   }
  // }
})
// module.exports = {
//   configureWebpack: { 
//     output: { 
//       globalObject: 'this', 
//     }, 
//   },
//   devServer:{
//     proxy:{
//       '/cloudapi':{//表示拦截以/api开头的请求路径
//         // target:'http://8.134.73.140:58003',
//         target:window.location.origin,
//         changOrigin: true,//是否开启跨域
//         pathRewrite:{
//           '^/cloudapi':'' //重写api，把api变成空字符，因为我们真正请求的路径是没有api的
//         }
//       }
//     }
//   }
// }
