var htmlWebpackPlugin = require('html-webpack-plugin'); //引用
module.exports = {
    entry: {
        main: './src/script/main.js',
        a: './src/script/a.js',
        b: './src/script/b.js',
        c: './src/script/c.js'
    },
    output: {
        filename: 'js/[name]-[chunkhash].js',
        path: __dirname + '/dist',
        publicPath: 'http://cdn.com/'
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: 'a.html',
            template: 'index.html',
            inject: 'body',
            title: 'webpack is a.html',
            chunks:['main','a']
        }),

        new htmlWebpackPlugin({
            filename: 'b.html',
            template: 'index.html',
            inject: 'body',
            title: 'webpack is b.html',
            chunks:['b']
        }),

        new htmlWebpackPlugin({
            filename: 'c.html',
            template: 'index.html',
            inject: 'body',
            title: 'webpack is c.html',
            chunks:['c']
        }),
    ]
}