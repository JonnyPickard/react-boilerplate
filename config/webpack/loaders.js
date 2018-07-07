module.exports = {
  module: {
    strictExportPresence: true,
    rules: [
      // "url" loader works just like "file" loader but it also embeds
      // assets smaller than specified size as data URLs to avoid requests.
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.svg$/],
        loader: require.resolve('url-loader'),
        options: {
          limit: 10000,
          name: 'static/media/[name].[hash:8].[ext]'
        }
      },
      // Add postcss support
      {
        test: /\.scss$/,
        use: [
          {
            loader: require.resolve('style-loader')
          },
          {
            loader: require.resolve('css-loader'), // 3rd load compiled css
            options: {
              importLoaders: 1,
              minimize: true,
              sourceMap: true,
              modules: true, // Use css modules
              camelCase: 'dashes',
              localIdentName: '[name]-[hash:4]' // TODO: remove [name] for prod
            }
          },
          {
            loader: require.resolve('postcss-loader'), // PostCSS
            options: {
              config: {
                path: __dirname
              }
            }
          },
          {
            loader: require.resolve('sass-loader') // SCSS
          }
        ]
      }
    ]
  }
};
