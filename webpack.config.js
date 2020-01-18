'use strict'

const path = require('path')
const webpack = require('webpack')
const validate = require('webpack-validator')

module.exports = validate({
    devtool: 'source-map', //mostrar as pastas direto no arquivo no browser
    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        path.join(__dirname, 'src', 'index') //tudo que for gerado no index.js
    ], 
    output: {
        path:  path.join(__dirname, 'dist'), //o bundle será criado na pasta dist (dist/budle.js)
        filename: 'bundle.js', //arquivo que será gerado como bundle
        publicPath: '/static/' //pasta que será gerado o arquivo virtual em modo de desenvolvimento
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],

    module: {
        preLoaders: [{
           test:/\.js$/,
           exclude: /node_modules/,
           include: /src/,
           loader: "standard" 
        }],

        loaders: [{
            test: /\.js$/, 
            exclude: /node_modules/,
            include: /src/,
            loader: "babel"
        }]
    }
})