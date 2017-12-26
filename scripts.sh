#!/bin/bash -eu

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
# ./scripts.sh add_page HogeHoge
# Page名はアッパーキャメルケース(ファイル名はハイフネーションになります)
###
function add_page() {
    insert_hyphen='s/([A-Z])/-\1/g'
    to_lower='y/ABCDEFGHIJKLMNOPQRSTUVWXYZ/abcdefghijklmnopqrstuvwxyz/'

    # $1分解
    filepath=`echo "${1%/*}"`
    pagename=`echo "${1##*/}"`
    filename=`echo "${pagename}" | sed -E -e $insert_hyphen -e $to_lower -e "s/^-//"`
    if [ "$filepath" = "$1" ]; then
        filepath=""
    else
        filepath="${filepath}/"
    fi

    # mkdir
    mkdir -p "./src/pages/${filepath}"
    mkdir -p "./src/styles/entry/${filepath}"
    mkdir -p "./src/scripts/entry/${filepath}"

    # add pug
    touch "./src/pages/${filepath}${filename}.pug"
    echo 'doctype html' >> "./src/pages/${filepath}${filename}.pug"
    echo 'html' >> "./src/pages/${filepath}${filename}.pug"
    echo '    head' >> "./src/pages/${filepath}${filename}.pug"
    echo '        meta(charset='utf-8')' >> "./src/pages/${filepath}${filename}.pug"
    echo '        meta(http-equiv='X-UA-Compatible' content='IE=edge')' >> "./src/pages/${filepath}${filename}.pug"
    echo '        meta(name='viewport' content='width=device-width, initial-scale=1.0')' >> "./src/pages/${filepath}${filename}.pug"
    echo '        title vue proj' >> "./src/pages/${filepath}${filename}.pug"
    echo '' >> "./src/pages/${filepath}${filename}.pug"
    echo '    body' >> "./src/pages/${filepath}${filename}.pug"
    echo "        #${filename}" >> "./src/pages/${filepath}${filename}.pug"
    echo '' >> "./src/pages/${filepath}${filename}.pug"
    echo "        script(src='./${filepath}${filename}.bundle.js')" >> "./src/pages/${filepath}${filename}.pug"

    # add sass
    touch "./src/styles/entry/${filepath}${filename}.sass"
    echo "@import './../common.sass'" >> "./src/styles/entry/${filepath}${filename}.sass"
    echo "@import './../color.sass'" >> "./src/styles/entry/${filepath}${filename}.sass"
    echo '' >>  "./src/styles/entry/${filepath}${filename}.sass"
    echo "#${filename}" >> "./src/styles/entry/${filepath}${filename}.sass"

    # add ts
    touch "./src/scripts/entry/${filepath}${filename}.ts"
    echo "import Vue from 'vue';" >> "./src/scripts/entry/${filepath}${filename}.ts"
    echo '' >> "./src/scripts/entry/${filepath}${filename}.ts"
    echo "import UrlUtil, { Params } from './../../scripts/utils/UrlUtil';" >> "./src/scripts/entry/${filepath}${filename}.ts"
    echo '' >> "./src/scripts/entry/${filepath}${filename}.ts"
    echo 'const params: Params = UrlUtil.getUrlParams();' >> "./src/scripts/entry/${filepath}${filename}.ts"
    echo '' >> "./src/scripts/entry/${filepath}${filename}.ts"
    echo "require('./../../styles/entry/${filepath}${filename}.sass');" >> "./src/scripts/entry/${filepath}${filename}.ts"
    echo "class ${pagename} extends Vue {};" >> "./src/scripts/entry/${filepath}${filename}.ts"
    echo '' >> "./src/scripts/entry/${filepath}${filename}.ts"
    echo "new ${pagename}().\$mount('#${filename}');" >> "./src/scripts/entry/${filepath}${filename}.ts"
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

if [ -z ${2+UNDEF} ]; then
    $1
else
    $1 $2
fi
