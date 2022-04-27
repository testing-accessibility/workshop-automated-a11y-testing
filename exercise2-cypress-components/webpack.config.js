const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    devServer: {
        // ignore cypress-axe circular dependency warning
        client: {
            overlay: {
                warnings: false
            }
        }
    },
    entry: path.join(__dirname, "/", "index.js"),
    output: {
        path:path.resolve(__dirname, "dist"),
    },
    module: {
        rules: [
            {
                test: /\.?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.scss$/i,
                use: [{
                    loader: 'style-loader',
                   },{
                     loader: 'css-loader',
                     options: {
                      url: false,
                    }
                  },{
                      loader: 'sass-loader',
                      options: {
                        additionalData: "@import '/global-styles/variables.scss';"
                      }
                }]
            },
            {
                test: /\.(png|jp(e*)g|svg|gif)$/,
                use: ['file-loader'],
            },
        ]
    },
    resolve: {
        alias: {
            "components": path.resolve(__dirname, "../components"),
            "data": path.resolve(__dirname, "../data"),
            images: path.resolve(__dirname, "../../images")
        }
    }
}