const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
	context: __dirname,
	entry:'./src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'index.js'
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
                include: path.resolve(__dirname, 'src')
            },
            {
            	test: /\.css$/,
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
                test:/\.(jpg|png|svg|jpeg|gif)$/,
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
                loader: "vue-loader"
            }
        ]
	},
	plugins:[
		new HtmlWebpackPlugin({
			template: 'index.html',
			filename: 'index.html'
		}),
        new VueLoaderPlugin()
	],
    devServer: {
        port: 9000,
        host: '0.0.0.0',
        overlay: {
            errors: true
        }
    },
    resolve:{
	    alias:{
	        'vue':path.join(__dirname, './node_modules/vue/dist/vue.esm.js')
        }
    }
}