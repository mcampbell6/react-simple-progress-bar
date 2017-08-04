const path = require('path')
module.exports = {
    context: path.join(__dirname, './'),
    entry: [
        './index.js'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'index.js',
        library: 'react-simple-progress-bar',
        libraryTarget: 'umd',
        umdNamedDefine: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader'
                ]
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: "style-loader!css-loader"
            },
        ]
    },
    resolve: {
        modules: [
            path.join(__dirname, 'node_modules')
        ]
    }
}
