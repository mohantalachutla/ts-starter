const path = require('path')

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    bundle: path.resolve(__dirname, '..', './src/index.ts'),
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.json', '.js'], //extensions to resolve
    modules: [path.resolve(__dirname, 'src'), 'node_modules'], // to specify external modules
    // fallback: {},
    // alias: {},
    // enforceExtension: true
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
    ],
  },
  target: 'node14',
}
