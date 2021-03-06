const path = require('path');

module.exports = {
  mode: 'production',
  entry: [
    path.resolve('src', 'index.js')
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: path.resolve('node_modules'),
        loader: 'babel-loader',
        options: {
          presets: [
              [
                '@babel/preset-env', {
                  'modules': false,
                  targets: {
                    node: 'current',
                    browsers: 'last 2 versions'
                  },
                'useBuiltIns': 'usage',
                'useBuiltIns': 'entry'
              }]
          ]
        },
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'eslint-loader',
        options: {
          // 自動修正させる
          fix: true,
          // eslintでエラーだしたらビルドを中断する
          failOnError: true,
        }
      }
    ]
  },
  resolve: {
    modules: [
      path.resolve('src'),
      'node_modules'
    ]
  },
  devtool: 'source-map',
  devServer: {
    port: 3000,
    open: true,
    contentBase: path.resolve(__dirname, 'dist'),
    watchContentBase: true
  }
};

