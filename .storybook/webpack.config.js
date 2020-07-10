const path = require('path')
const rootPath = path.resolve(__dirname, '..')

module.exports = async ({ config }) => {
  mode = 'development'

  config.resolve.extensions = ['.js', '.vue', '.json']
  config.resolve.alias['~'] = rootPath
  config.resolve.alias['@'] = rootPath

  // 必要に同じて各種loaderを設定する
  // 今回は不要なのでやらない

  return config
}
