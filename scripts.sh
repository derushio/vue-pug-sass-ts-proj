#!/bin/bash -eu

function clean() {
    $(npm bin)/rimraf './dist/*'
}

function build() {
    export NODE_ENV='production'
    clean && $(npm bin)/webpack
}

function dev() {
    export NODE_ENV='development'
    $(npm bin)/webpack-dev-server --inline --hot
}

###
# 直呼び出し専用
# 例
# ./scripts.sh add_page HogeHoge
# Page名はアッパーキャメルケース(ファイル名はハイフネーションになります)
###
function add_page() {
    local insert_hyphen='s/([A-Z])/-\1/g'
    local to_lower='y/ABCDEFGHIJKLMNOPQRSTUVWXYZ/abcdefghijklmnopqrstuvwxyz/'

    # $1分解
    local filepath=`echo "${1%/*}"`
    local pagename=`echo "${1##*/}"`
    local filename=`echo "${pagename}" | sed -E -e $insert_hyphen -e $to_lower -e "s/^-//"`
    if [ "$filepath" = "$1" ]; then
        filepath=""
    else
        filepath="${filepath}/"
    fi

    # add pug
    mkdir -p "./src/pages/${filepath}"
    cp "./_template/Entry.pug" "./src/pages/${filepath}${filename}.pug"

    # add entry vue
    mkdir -p "./src/components/entry/${filepath}"
    cp "./_template/Entry.vue" "./src/components/entry/${filepath}${pagename}.vue"

    # add ts
    mkdir -p "./src/scripts/entry/${filepath}"
    cp "./_template/Entry.ts" "./src/scripts/entry/${filepath}${filename}.ts"
}

###
# 直呼び出し専用
# 例
# ./scripts.sh add_vue HogeHoge
# Vue名はアッパーキャメルケース
###
function add_vue() {
    local insert_hyphen='s/([A-Z])/-\1/g'
    local to_lower='y/ABCDEFGHIJKLMNOPQRSTUVWXYZ/abcdefghijklmnopqrstuvwxyz/'

    # $1分解
    local filepath=`echo "${1%/*}"`
    local pagename=`echo "${1##*/}"`
    local filename=`echo "${pagename}" | sed -E -e $insert_hyphen -e $to_lower -e "s/^-//"`
    if [ "$filepath" = "$1" ]; then
        filepath=""
    else
        filepath="${filepath}/"
    fi

    # mkdir

    # add vue
    mkdir -p "./src/components/${filepath}"
    cp "./_template/Vue.vue" "./src/components/${filepath}${pagename}.vue"
}

if [ -z ${2+UNDEF} ]; then
    $1
else
    $1 $2
fi
