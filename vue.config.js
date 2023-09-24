module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: process.env.VUE_APP_BASE_URL,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}