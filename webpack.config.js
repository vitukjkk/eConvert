const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
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

    
};