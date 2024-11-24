const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { type } = require('os');
const PORT = 8000;

module.exports = {
    entry: {
        index: './src/ts/index.ts',
        configuracoes: './src/ts/configuracoes.ts',
        converter: './src/ts/converter.ts',
        sobre: './src/ts/sobre.ts'
    },

    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },

    mode: "development",
    
    resolve: {
        extensions: ['.ts', '.js']
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|svg|jpeg|gif|ico)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'images/[name][ext]'
                }
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/html/index.html',
            chunks: ['index']
        }),
        new HtmlWebpackPlugin({
            filename: 'configuracoes.html',
            template: './src/html/configuracoes.html',
            chunks: ['configuracoes']
        }),
        new HtmlWebpackPlugin({
            filename: 'converter.html',
            template: './src/html/converter.html',
            chunks: ['converter']
        }),
        new HtmlWebpackPlugin({
            filename: 'sobre.html',
            template: './src/html/sobre.html',
            chunks: ['sobre']
        }),
    ],

    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },

        hot: true,
        compress: true,
        port: PORT
    }
};