const path = require('path');
const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  name: 'wordrelay-setting', // 아무 이름을 넣는다.
  mode: 'development', // 실제 서비스 -> production
  devtool: 'eval',  // 빠르게
  resolve: {
    extensions: ['.js', '.jsx']
  },
  entry: {
    app: ['./client'],
  },  // 입력
  module: { // 적용할 모듈
    rules: [{ // 규칙
      test: /\.jsx?/,   // js 랑 jsx 파일에 규칙을 적용하겠다. (정규표현식)
      loader: 'babel-loader', // babel-loader 를 적용해서 바벨을 적용하겠다.
      options: {  // 바벨 옵션을 넣어준다.
        presets: [
          ['@babel/preset-env', {
            targets: {
              browsers: ['> 5% in KR'],
            },
            debug: true,
          }], '@babel/preset-react',
        ],
        plugins: [
          'react-refresh/babel',
        ],
      },
    }],
  },
  plugins: [
    new RefreshWebpackPlugin({ overlay: false }),
  ],
  output: {
    path: path.join(__dirname, 'dist'), // path 모듈의 실제 경로
    filename: 'app.js',
    publicPath: '/dist/',
  },  // 출력
  devServer: {
    devMiddleware: { publicPath: '/dist' },
    static: { directory: path.resolve(__dirname) },
    hot: true
  }
};