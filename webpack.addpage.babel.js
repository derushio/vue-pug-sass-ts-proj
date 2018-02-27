import path from 'path';
import htmlWebpackPlugin from 'html-webpack-plugin';

const contextPath = path.resolve(__dirname, './');
const distPath = path.resolve(__dirname, 'dist');
const srcPath = path.resolve(__dirname, 'src');
const srcPagePath = path.resolve(srcPath, 'pages');
const entryScriptsPath = path.resolve(srcPath, 'scripts/entry');

/**
 * configへページ定義を追加
 * @param {any} config
 * @param {string} pagename (pages/ からのpath, `./` を付けない)
 * @param {string} faviconpath (src/ からのpath)
 * @return {any} config
 */
export default function addpage(config, pagename, faviconpath) {
    config.entry[pagename] = path.resolve(entryScriptsPath, `${pagename}.ts`);
    config.plugins.push(
        new htmlWebpackPlugin({
            filename: path.join(distPath, `${pagename}.html`),
            template: path.join(srcPagePath, `${pagename}.pug`),
            favicon: path.join(srcPath, 'static' , `${faviconpath}.ico`),
            inject: false,
        })
    );

    return config;
}
