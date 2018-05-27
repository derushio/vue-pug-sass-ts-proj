import path from 'path';
import webpack from 'webpack';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';

import addpage from './webpack.addpage.babel';

/**
 * port
 */
const port = 8000;

/**
 * Path / File
 */
const contextPath = path.resolve(__dirname, './');
const distPath = path.resolve(__dirname, 'dist');
const srcPath = path.resolve(__dirname, 'src');
const srcPagePath = path.resolve(srcPath, 'pages');
const entryScriptsPath = path.resolve(srcPath, 'scripts/entry');

/**
 * Webpack Config
 */
const config = {
    mode: process.env.NODE_ENV,

    context: contextPath,
    entry: {},
    output: {
        path: distPath,
        filename: `[name].bundle.js`,
        // mark /dist/ folder as a public path so index.html can reach it
        publicPath: (process.env.NODE_ENV == 'production')? './': '/'
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

    resolve: {
        extensions: [ '.js', '.ts', '.json' ,'.vue' ],
        alias: {
            '@': path.resolve(srcPath),
            'vue$': 'vue/dist/vue.esm.js'
        },
    },

    module: {
        rules: [
            { test: /\.html$/, loader: 'html-loader' },
            { test: /\.pug$/, loader: 'pug-loader' },
            { test: /\.css$/, loader:
                process.env.NODE_ENV == 'production'?
                    'style-loader!css-loader':
                    'style-loader?sourceMap=true!css-loader?sourceMap=true'
            },
            { test: /\.sass$/, loader:
                process.env.NODE_ENV == 'production'?
                    'style-loader!css-loader!resolve-url-loader!sass-loader?indentedSyntax'
                        + '&includePaths[]=src/styles':
                    'style-loader?sourceMap=true!css-loader?sourceMap=true!'
                        + 'resolve-url-loader!sass-loader?indentedSyntax&sourceMap=true'
                        + '&includePaths[]=src/styles'
            },
            { test: /\.scss$/, loader:
                process.env.NODE_ENV == 'production'?
                    'style-loader!css-loader!resolve-url-loader!sass-loader'
                        + '?includePaths[]=src/styles':
                    'style-loader?sourceMap=true!css-loader?sourceMap=true!'
                        + 'resolve-url-loader!sass-loader?sourceMap=true'
                        + '&includePaths[]=src/styles'
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        sass: process.env.NODE_ENV == 'production'?
                            'vue-style-loader!css-loader!'
                                // なぜかsassのsourcemapが必要
                                + 'resolve-url-loader!sass-loader?indentedSyntax&sourceMap=true'
                                + '&includePaths[]=src/styles':
                            'vue-style-loader?sourceMap=true!css-loader?sourceMap=true!'
                                + 'resolve-url-loader!sass-loader?indentedSyntax&sourceMap=true'
                                + '&includePaths[]=src/styles'
                    }
                }
            },
            {
                test: /\.ts(x?)$/,
                loader: 'ts-loader',
                options: { appendTsSuffixTo: [ /\.vue$/ ] }
            },
            { test: /\.(jp(e?)g|png|gif|svg)(\?v=\d+\.\d+\.\d+)?$/, loaders: 'file-loader?name=resources/img/[name].[ext]' },
            { test: /\.woff(2)?(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff&name=resources/font/[name].[ext]" },
            { test: /\.(ttf|eot)(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader?name=resources/font/[name].[ext]" }
        ]
    },

    devtool: (process.env.NODE_ENV == 'production')? false: '#source-map',

    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                sourceMap: (process.env.NODE_ENV == 'production')? false: true,
                uglifyOptions: {
                    ecma: 8,
                    compress: {
                        warnings: false
                    },
                    mangle: {
                        // Vue Componentが動かなくなる対策
                        keep_fnames: true
                    }
                }
            })
        ]
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: `"${process.env.NODE_ENV}"`
            }
        })
    ]
};

/**
 * add pages
 */
addpage(config, 'index', '/', './static/favicon.ico');

export default config;
