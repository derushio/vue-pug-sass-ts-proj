/**
 * require
 */
const path = require('path')
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')

/**
 * port
 */
const port = 8000

/**
 * Path / File
 */
const contextPath = path.resolve(__dirname, './')
const distPath = path.resolve(__dirname, 'dist')
const srcPath = path.resolve(__dirname, 'src')
const outputFileName = 'bundle'

/**
 * Webpack Config
 */
const config = {
    context: contextPath,

    entry: [path.resolve(srcPath, 'index.ts')],

    output: {
        path: distPath,
        filename: outputFileName + '.js',
        // mark /dist/ folder as a public path so index.html can reach it
        publicPath: '/dist/'
    },

    /**
     * webpack-dev-server config
     * see: https://webpack.github.io/docs/webpack-dev-server.html
     */
    devServer: {
        contentBase: distPath,
        hot: true,
        inline: true,
        port: port
    },

    /**
     * http://webpack.github.io/docs/configuration.html#devtool
     */
    devtool: '#eval-source-map',

    resolve: {
        extensions: ['.js', '.ts'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        },
    },

    module: {
        loaders: [
            { test: /\.html$/, loader: 'html-loader' },
            { test: /\.pug$/, loader: 'pug-loader' },
            { test: /\.sass$/, use: [
                'style-loader',
                'css-loader', {
                    loader: 'sass-loader',
                    options: {includePaths: [path.resolve(__dirname, 'src/')]}
                }
            ] }
        ]
    },

    plugins: [
        /**
         * HMR issue, see: https://github.com/webpack/webpack/issues/1151
         * new webpack.HotModuleReplacementPlugin(),
         */
        new htmlWebpackPlugin({
            filename: path.join(distPath, 'index.html'),
            template: path.join(srcPath, 'index.pug'),
            favicon: path.join(srcPath, 'static' , 'favicon.ico'),
            inject: true,
        }),
    ]

}

/**
 * When use in production (npm run build)
 */
if (process.env.NODE_ENV === 'production') {
    // still need babel for production stage since uglifyJs not support es6
    config.module.loaders = (config.module.loaders || []).concat([
        { test: /\.ts(x?)$/, loader: 'babel-loader?presets[]=es2017!ts-loader' },
        { test: /\.js$/, loader: 'babel-loader', query: { presets: ['es2017'] } }
    ])

    config.devtool = '#source-map'

    /**
     * https://vuejs.org/guide/deployment.html
     */
    config.plugins = (config.plugins || []).concat([
        new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: '"production"'
        }
        }),
        new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
        }),
        new webpack.optimize.OccurrenceOrderPlugin()
    ])

} else {
    config.module.loaders = config.module.loaders.concat([
        { test: /\.ts(x?)$/, loader: 'ts-loader' }
    ])
}

module.exports = config
