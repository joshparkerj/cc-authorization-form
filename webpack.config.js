module.exports = {
  mode: 'development',
  entry: './src/Contact.jsx',
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'swc-loader',
        options: {
          jsc: {
            parser: {
              jsx: true,
            },
          },
        },
      },
    ],
  },
};
