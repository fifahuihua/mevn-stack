var path = require('path')
var utils = require('./utils')
var vueLoaderConfig = require('./vue-loader.conf')
var isProduction = process.env.NODE_ENV === 'production'

function resolveClientPath (dir) {
  return path.join(__dirname, '../client/', dir)
}

module.exports = {
  entry: {
    app: './client/src/main.js'
  },
  output: {
    path: resolveClientPath('public/dist/js'),
    filename: '[name].js',
    publicPath: '/dist/js'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'assets':resolveClientPath('public/assets'),
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolveClientPath('src'),
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [resolveClientPath('src'), resolveClientPath('test')],
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: utils.cssLoaders({ sourceMap: isProduction, extract: isProduction }),
          transformToRequire: {
            video: 'src',
            source: 'src',
            img: 'src',
            image: 'xlink:href'
          }
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolveClientPath('src'), resolveClientPath('test')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'img/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'media/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'fonts/[name].[hash:7].[ext]'
        }
      }
    ]
  }
}
