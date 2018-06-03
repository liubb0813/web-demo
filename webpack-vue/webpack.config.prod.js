const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: '[name].js'
    },
    module:{
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "env"
                        ]
                    }
                },
                exclude: path.resolve(__dirname, 'node_modules'),
                include: path.resolve(__dirname, 'src')
            },
            {
                test: /\.css$/,
                exclude: path.resolve(__dirname, 'node_modules'),
                use: ExtractPlugin.extract({
                    fallback: 'style-loader',
                    use: [{
                            loader : 'css-loader',
                            options : {
                                importLoaders : 1
                            },
                        },
                        'postcss-loader'
                    ]
                })
            },
            {
                test:/\.less$/,
                exclude: path.resolve(__dirname, 'node_modules'),
                use: ExtractPlugin.extract({
                    fallback: 'style-loader',
                    use: [{
                            loader : 'css-loader',
                            options : {
                                importLoaders : 1
                            },
                        },
                        'postcss-loader',
                        'less-loader'
                    ]
                })
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
        new VueLoaderPlugin(),
        new ExtractPlugin('style.css')
    ]
}