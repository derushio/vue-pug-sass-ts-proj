#!/bin/bash

function clean() {
    $(npm bin)/rimraf './dist'
}

function build() {
    clean && $(npm bin)/webpack
}

function dev() {
    $(npm bin)/webpack-dev-server --inline --hot
}

###
# 直呼び出し専用
# 例
# ./scripts.sh add_vue HogeHoge
# Vue名はアッパーキャメルケース
###
function add_vue() {
    insert_hyphen='s/([A-Z])/-\1/g'
    to_lower='y/ABCDEFGHIJKLMNOPQRSTUVWXYZ/abcdefghijklmnopqrstuvwxyz/'

    # $1分解
    filepath=`echo "${1%/*}"`
    filename=`echo "${1##*/}"`
    if [ "$filepath" = "$1" ]; then
        filepath=""
    else
        filepath="${filepath}/"
    fi

    # mkdir
    mkdir -p "./src/components/views/${filepath}"
    mkdir -p "./src/components/styles/${filepath}"
    mkdir -p "./src/components/scripts/${filepath}"

    # add pug
    touch "./src/components/views/${filepath}${filename}.pug"
    echo ".vue${filename}" | sed -E -e $insert_hyphen -e $to_lower >> "./src/components/views/${filepath}${filename}.pug"

    # add sass
    touch "./src/components/styles/${filepath}${filename}.sass"
    echo ".vue${filename}" | sed -E -e $insert_hyphen -e $to_lower >> "./src/components/styles/${filepath}${filename}.sass"

    # add ts
    touch "./src/components/scripts/${filepath}${filename}.ts"
    echo "import Vue from 'vue';" >> "./src/components/scripts/${filepath}${filename}.ts"
    echo "import Component from 'vue-class-component';" >> "./src/components/scripts/${filepath}${filename}.ts"
    echo "" >> "./src/components/scripts/${filepath}${filename}.ts"
    echo "require('../styles/${filepath}${filename}.sass');" >> "./src/components/scripts/${filepath}${filename}.ts"
    echo "@Component({template: require('../views/${filepath}${filename}.pug')()})" >> "./src/components/scripts/${filepath}${filename}.ts"
    echo "export default class ${filename} extends Vue {" >> "./src/components/scripts/${filepath}${filename}.ts"
    echo "" >> "./src/components/scripts/${filepath}${filename}.ts"
    echo "};" >> "./src/components/scripts/${filepath}${filename}.ts"
}

$1 $2
