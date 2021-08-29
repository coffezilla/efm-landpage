const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
	mode: 'development',
	devtool: 'inline-source-map',
	devServer: {
		contentBase: path.join(__dirname, 'public'),
		port: 9000,
		hot: true,
		host: '0.0.0.0',
	},
});
