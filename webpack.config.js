const path = require('path');

module.exports = {
    entry: "./src/app.js",
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    // devServer: {
    //     historyApiFallback: true
    // },
    module: {
        loaders: [{
            test: /\.js?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['env', 'react', 'stage-2'],
                plugins: ['transform-object-rest-spread']
            }
        }]
    }
}