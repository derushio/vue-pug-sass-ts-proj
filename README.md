# vue-pug-sass-ts-proj README
## 概要
以下の環境をサポートするボイラープレートです
* [Vue](https://jp.vuejs.org/)
* [pug](https://pugjs.org/)
* [sass](http://sass-lang.com/)
* [TypeScript](https://www.typescriptlang.org/)

## 使用方法
1. 本プロジェクトをclone
1. `$ chmod +x ./install.sh; ./install.sh`
1. enjoy yourself

## ビルド方法
1. `$ npm run build`
1. `$ npm run dev`
1. ブラウザで [http://localhost:8000](http://localhost:8000) にアクセスする

## Component追加機能
Vueのコンポーネントを `./scripts.sh` から追加できます
1. `$ ./scripts.sh add_vue ComponentName`
    * コンポーネントの名前はアッパーキャメルケースにしてください
    * コンポーネントをディレクトリ指定して追加できます
        * `$ ./scripts.sh add_vue path/ComponentName`
1. コンポーネントに対応するpug, sass, tsが追加されます。

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
        * views
        * styles
        * scripts
            - componentに対応するそれぞれのフォルダ
        * component.ts
            - component用定義

* dist/
    - コンパイル後のプロジェクトを配置するディレクトリ
```
