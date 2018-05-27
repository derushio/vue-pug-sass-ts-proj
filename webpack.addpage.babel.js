import path from 'path';
import htmlWebpackPlugin from 'html-webpack-plugin';

const CONTEXT_PATH = path.resolve(__dirname, './');
const DIST_PATH = path.resolve(__dirname, 'dist');
const SRC_PATH = path.resolve(__dirname, 'src');
const SRC_PAGE_PATH = path.resolve(SRC_PATH, 'pages');
const ENTRY_SCRIPT_PATH = path.resolve(SRC_PATH, 'scripts/entry');

/**
 * configへページ定義を追加
 * @param {any} config
 * @param {string} page pages/ からのpath
 * @param {string} dist distpath
 * @param {string} faviconpath src/ からのpath
 * @return {any} config
 */
export default function addpage(config, page, distpath, faviconpath) {
    const dist = distpath.replace(/^\.?\//, '');
    const favicon = faviconpath.replace(/^\.\//, '');
    const scriptpath = dist == ''
        ? 'index'
        : `${dist.replace(/^.*?\/(.*)/, '$1')}/${dist}`;

    config.entry[scriptpath] = path.resolve(ENTRY_SCRIPT_PATH, `${page}.ts`);
    config.plugins.push(
        new htmlWebpackPlugin({
            filename: path.join(DIST_PATH, dist, 'index.html'),
            template: path.join(SRC_PAGE_PATH, `${page}.pug`),
            favicon: path.join(SRC_PATH, faviconpath),
            inject: 'body',
            chunks: [ scriptpath ]
        })
    );

    return config;
}
