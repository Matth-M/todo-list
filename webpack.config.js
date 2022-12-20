const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: {
		index: './src/index.ts',
	},
	mode: 'development',
	devtool: 'inline-source-map',
	devServer: {
		port: 8000,
		static: './dist',
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Todo List',
			template: './index.html'
		}),
	],
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
		clean: true,
		publicPath: '/',
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},

			{
				test: /\.s[ac]ss$/i,
				use: ["style-loader", "css-loader", "sass-loader"],
			},
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
		],
	},
	optimization: {
		runtimeChunk: 'single',
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
};
