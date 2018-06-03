const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    target: 'web',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'js/bundle.js'
    },
    module:{
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: path.resolve(__dirname, 'node_modules'),
                include: path.resolve(__dirname, 'src')
            },
            {
                test: /\.css$/,
                exclude: path.resolve(__dirname, 'node_modules'),
                use: [
                    'style-loader', {
                        loader : 'css-loader',
                        options : {
                            importLoaders : 1
                        },
                    },
                    'postcss-loader'
                ]
            },
            {
                test:/\.less$/,
                exclude: path.resolve(__dirname, 'node_modules'),
                use: [
                    'style-loader', {
                        loader : 'css-loader',
                        options : {
                            importLoaders : 1
                        },
                    },
                    'postcss-loader',
                    'less-loader'
                ]
            },
            {
                test:/\.(jpg|png|svg|jpeg|gif)$/,
                exclude: path.resolve(__dirname, 'node_modules'),
                use: {
                    loader: "url-loader",
                    options: {
                        name: 'assets/[name].[ext]',
                        limit: 1024 * 20
                    }
                }
            },
            {
                test:/\.vue$/,
                exclude: path.resolve(__dirname, 'node_modules'),
                loader: "vue-loader"
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin(),
        new VueLoaderPlugin()
    ],
    devServer: {
        port: 9000,
        host: '0.0.0.0',
        overlay: {
            errors: true
        }
    }
}