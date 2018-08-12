const webpack = require('webpack');
require('dotenv').config();

module.exports = {
  webpack: (config, { dev }) => {
      const env = Object.keys(process.env).reduce((acc, curr) => {
          acc[`process.env.${curr}`] = JSON.stringify(process.env[curr]);
          return acc;
      }, {});

      config.plugins.push(new webpack.DefinePlugin(env));

      config.module.rules.push(
      {
        test: /\.(css|scss)/,
        loader: 'emit-file-loader',
        options: {
          name: 'dist/[path][name].[ext]'
        }
      },
      {
        test: /\.css$/,
        loader: 'babel-loader!raw-loader'
      },
      {
        test: /\.scss$/,
        loader: 'babel-loader!raw-loader!sass-loader'
      },
        {
            test: /\.(gif|png|jpe?g|svg)$/i,
            use: [
                'file-loader',
                {
                    loader: 'image-webpack-loader',
                    options: {
                        bypassOnDebug: true, // webpack@1.x
                        disable: true, // webpack@2.x and newer
                    },
                },
            ],
        }
    )
    return config
  }
}