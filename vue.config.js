// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        // '@':'src'   //默认有这个别名了
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'router': '@/router',
        'store': '@/store',
        'views': '@/views'   //但我觉得只起src的别名@就够用了
      }
    }
  }
}