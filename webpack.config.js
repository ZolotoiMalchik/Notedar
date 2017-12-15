const path = require('path');

module.exports = {
	entry: './components/app/app.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'build')
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: {
					loader: 'babel-loader'
				}
			}

		]
	}
};