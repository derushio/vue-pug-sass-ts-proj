import path from 'path';
import webpack from 'webpack';
import addpage from './webpack.addpage.babel'

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
const outputFileName = 'bundle';

/**
 * Webpack Config
 */
const config = {
    context: contextPath,

    entry: {},

    output: {
        path: distPath,
        filename: '[name].' + outputFileName + '.js',
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
        extensions: ['.js', '.ts', '.json' ,'.vue'],
        alias: {
            '@': path.resolve(srcPath),
            'vue$': 'vue/dist/vue.esm.js'
        },
    },

    module: {
        loaders: [
            { test: /\.html$/, loader: 'html-loader' },
            { test: /\.pug$/, loader: 'pug-loader' },
            { test: /\.css$/, loader:
                process.env.NODE_ENV === 'production'?
                    'vue-style-loader!css-loader':
                    'vue-style-loader?sourceMap=true!css-loader?sourceMap=true'
            },
            { test: /\.sass$/, loader:
                process.env.NODE_ENV === 'production'?
                    'vue-style-loader!css-loader!sass-loader?indentedSyntax'
                    + '&includePaths[]=src/styles&includePaths[]=node_modules':
                    'vue-style-loader?sourceMap=true!css-loader?sourceMap=true!sass-loader?indentedSyntax&sourceMap=true'
                    + '&includePaths[]=src/styles&includePaths[]=node_modules'
            },
            { test: /\.scss$/, loader:
                process.env.NODE_ENV === 'production'?
                    'vue-style-loader!css-loader!sass-loader'
                    + '?includePaths[]=src/styles&includePaths[]=node_modules':
                    'vue-style-loader?sourceMap=true!css-loader?sourceMap=true!sass-loader?sourceMap=true'
                    + '&includePaths[]=src/styles&includePaths[]=node_modules'
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        sass: process.env.NODE_ENV === 'production'?
                            'vue-style-loader!css-loader!sass-loader?indentedSyntax'
                            + '&includePaths[]=src/styles&includePaths[]=node_modules':
                            'vue-style-loader?sourceMap=true!css-loader?sourceMap=true!sass-loader?indentedSyntax&sourceMap=true'
                            + '&includePaths[]=src/styles&includePaths[]=node_modules'
                    }
                }
            },
            {
                test: /\.ts(x?)$/,
                loader: 'ts-loader',
                options: { appendTsSuffixTo: [ /\.vue$/ ] }
            },
            { test: /\.(jp(e?)g|png|gif|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loaders: 'file-loader?name=resources/img/[name].[ext]' },
            { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff&name=resources/font/[name].[ext]" },
            { test: /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader?name=resources/font/[name].[ext]" }
        ]
    },

    plugins: []
};

/**
 * add pages
 */
addpage(config, 'index', '/', './static/favicon.ico');

/**
 * When use in production (npm run build)
 */
if (process.env.NODE_ENV === 'production') {
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
            sourceMap: false,
            mangle: {
                // Vue Componentが動かなくなる対策
                keep_fnames: true
            },
            ecma: 8,
            compress: {
                warnings: false
            }
        })
    ]);
} else {
    config.devtool = '#eval-source-map';
    config.plugins = (config.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"development"'
            }
        }),
    ]);
};

module.exports = config;
