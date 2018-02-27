#!/bin/bash -eu

npm init
node ./_boilerplate/install-npm-scripts.js
npm install

rm ./install.sh
rm -rf ./_boilerplate
