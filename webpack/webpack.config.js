const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	context: __dirname,
	entry:'./src/app.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'js/main.js'
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
            }
        ]
	},
	plugins:[
		new HtmlWebpackPlugin({
			template: 'index.html',
			filename: 'index.html',
			inject: 'head'
		})
	]
}