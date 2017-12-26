#!/bin/bash

npm init
npm install --save-dev @types/node babel babel-core babel-loader\
    css-loader file-loader html-loader html-webpack-plugin node-sass pug pug-loader\
    rimraf sass-loader style-loader ts-loader typescript vue\
    vue-class-component webpack webpack-dev-server

node ./install-npm-scripts.js

rm ./install.sh
rm ./install-npm-scripts.js
