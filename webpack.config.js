const path = require('path');

module.exports = {
	entry: ['babel-polyfill',
	'./components/app/app.js'],
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'build')
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['env']
					}
				}

			},
			{ test: /\.css$/, use: [
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader'
                    }
                ]  
            }

		]
	}
};