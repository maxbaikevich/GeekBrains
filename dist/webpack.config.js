const path = require('path');


const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        path:path.resolve(__dirname, 'dist'),
        filename:'bundle.ls'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                },
            },
            {
                test:/\.css$/,
                use:['style-loader',MiniCssExtractPlugin, 'css-loader',]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'style.css',
        }),
        new HtmlWebpackPlugin ({
            template:path.resolve(__dirname, 'src', index.html),
            filename: 'index.html',
        }),
         
    ]
};