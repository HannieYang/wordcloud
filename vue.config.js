// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true,
//   devServer:{
//     proxy:{
//       '/cloudapi':{//表示拦截以/api开头的请求路径
//         target:'http://8.134.73.140:58003',
//         changOrigin: true,//是否开启跨域
//         pathRewrite:{
//           '^/cloudapi':'' //重写api，把api变成空字符，因为我们真正请求的路径是没有api的
//         }
//       }
//     }
//   }
// })
module.exports = {
  devServer:{
    proxy:{
      '/cloudapi':{//表示拦截以/api开头的请求路径
        target:'http://8.134.73.140:58003',
        changOrigin: true,//是否开启跨域
        pathRewrite:{
          '^/cloudapi':'' //重写api，把api变成空字符，因为我们真正请求的路径是没有api的
        }
      }
    }
  }
}
