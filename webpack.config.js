const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {

    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        hot: true,
        static: './public',
    },
   
    entry: path.resolve(__dirname, 'src/index.js'),

    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'public'),
        assetModuleFilename: 'images/[hash][ext][query]',
        clean: true,
    },

    plugins: [

        new HtmlWebpackPlugin({
            title: 'Sorting Visualizer',
            template: path.resolve(__dirname, 'src/templates/template.html'),
        }),

        new MiniCssExtractPlugin(),
    ],

    module: {
        rules: [
            // CSS
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },

            // Images

            {
                test: /\.(png|svg|jpg)$/i,
                type: 'asset/resource',
            }
        ]
    }

}