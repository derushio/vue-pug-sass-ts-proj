import path from 'path';
import webpack from 'webpack';

import VueLoaderPlugin from 'vue-loader/lib/plugin';
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

const isProduct = process.env.NODE_ENV == 'production';

/**
 * Webpack Config
 */
const config = {
    target: 'web',
    mode: process.env.NODE_ENV,

    context: contextPath,
    entry: {},
    output: {
        path: distPath,
        filename: '[name]-[hash].bundle.js',
        // mark /dist/ folder as a public path so index.html can reach it
        publicPath: '/'
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
        extensions: [ '.js', '.ts', '.json', '.vue' ],
        alias: {
            '@': path.resolve(srcPath),
            'vue$': 'vue/dist/vue.esm.js'
        },
    },

    module: {
        rules: [
            { test: /\.html$/, use: [ 'html-loader' ] },
            { test: /\.vue$/, use: [ 'vue-loader' ] },
            {
                test: /\.pug$/,
                oneOf: [
                    { resourceQuery: /^\?vue/, use: [ 'pug-plain-loader' ] },
                    { use: [ 'raw-loader', 'pug-plain-loader' ] }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    { loader: 'vue-style-loader', options: { sourceMap: !isProduct } },
                    { loader: 'css-loader', options: { sourceMap: !isProduct } },
                    { loader: 'resolve-url-loader', options: { sourceMap: !isProduct } },
                ]
            },
            { test: /\.sass$/,
                use: [
                    { loader: 'vue-style-loader', options: { sourceMap: !isProduct } },
                    { loader: 'css-loader', options: { sourceMap: !isProduct } },
                    { loader: 'resolve-url-loader', options: { sourceMap: !isProduct } },
                    {
                        loader: 'sass-loader',
                        options: {
                            indentedSyntax: true,
                            sourceMap: true,
                            includePaths: [ 'src/styles' ]
                        }
                    }
                ]
            },
            { test: /\.scss$/,
                use: [
                    { loader: 'vue-style-loader', options: { sourceMap: !isProduct } },
                    { loader: 'css-loader', options: { sourceMap: !isProduct } },
                    { loader: 'resolve-url-loader', options: { sourceMap: !isProduct } },
                    {
                        loader: 'sass-loader',
                        options: {
                            indentedSyntax: false,
                            sourceMap: true,
                            includePaths: [ 'src/styles' ]
                        }
                    }
                ]
            },
            {
                test: /\.ts(x?)$/,
                use: [ {
                    loader: 'ts-loader',
                    options: { appendTsSuffixTo: [ /\.vue$/ ] }
                } ],

            },
            { test: /\.(jp(e?)g|png|gif|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: { name: 'resources/img/[name].[ext]' }
                    }
                ]
            },
            { test: /\.(ttf|eot|woff(2)?)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: { name: 'resources/font/[name].[ext]' }
                    }
                ]
            }
        ]
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: `"${process.env.NODE_ENV}"`
            }
        }),
        new VueLoaderPlugin()
    ],

    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                sourceMap: !isProduct,
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

    devtool: isProduct? false: '#source-map'
};

/**
 * add pages
 */
addpage(config, 'index', '/', './static/favicon.ico');

export default config;
