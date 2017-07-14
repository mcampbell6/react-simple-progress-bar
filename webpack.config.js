/**
 * Created by n0235960 on 7/13/17.
 */
const path = require('path')

module.exports = {
    context: path.join(__dirname, 'src'),
    entry: {
        component: './index.js'
    },
    output: {
        path: path.join(__dirname, 'www'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader'
                ]
            }
        ]
    },
    resolve: {
        modules: [
            path.join(__dirname, 'node_modules')
        ]
    }
}
