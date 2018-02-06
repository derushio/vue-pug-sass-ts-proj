# vue-pug-sass-ts-proj README
## 概要
以下の環境をサポートするボイラープレートです
* [Vue](https://jp.vuejs.org/)
* [pug](https://pugjs.org/)
* [sass](http://sass-lang.com/)
* [TypeScript](https://www.typescriptlang.org/)

## 使用方法
1. 本プロジェクトをclone
    ```sh
    $ git clone --depth 1 https://github.com/narumi18wa/vue-pug-sass-ts-proj.git
    $ cd vue-pug-sass-ts-proj && rm -fr .git
    ```
1. `$ chmod +x ./install.sh; ./install.sh`
1. enjoy yourself

## ビルド方法
1. `$ npm run build`
1. `$ npm run dev`
1. ブラウザで [http://localhost:8000](http://localhost:8000) にアクセスする

## Page追加機能
Pugのページを `./scripts.sh` から追加できます
1. `$ ./scripts.sh add_page PageName`
    * ページの名前はアッパーキャメルケースにしてください
    * ページのファイル名はハイフネーションになります
    * ページをディレクトリ指定して追加できます
        * `$ ./scripts.sh add_page path/PageName`
1. ページに対応するpug, sass, tsが追加されます

## Component追加機能
Vueのコンポーネントを `./scripts.sh` から追加できます
1. `$ ./scripts.sh add_vue ComponentName`
    * コンポーネントの名前はアッパーキャメルケースにしてください
    * コンポーネントをディレクトリ指定して追加できます
        * `$ ./scripts.sh add_vue path/ComponentName`
1. コンポーネントに対応するpug, sass, tsが追加されます

## プロジェクト構成

```
* src/
    - プロジェクトのリソースを管理するディレクトリ

    * page/
        - pugディレクトリ
        - エントリポイントディレクトリ
    * styles/
        - 汎用sassディレクトリ
        entry/
            - エントリポイントディレクトリ
    * scripts/
        - 汎用typescriptディレクトリ
        entry/
            - エントリポイントディレクトリ
    * static/
        - favicon.ico等

    * components/
        - component用フォルダ

* dist/
    - コンパイル後のプロジェクトを配置するディレクトリ
```
