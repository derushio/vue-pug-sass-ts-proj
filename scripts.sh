#!/bin/bash -eu

function clean() {
    $(npm bin)/rimraf './dist/*'
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
    mkdir -p "./src/pages/${filepath}"
    mkdir -p "./src/components/entry/${filepath}"
    mkdir -p "./src/scripts/entry/${filepath}"

    # add pug
    touch "./src/pages/${filepath}${filename}.pug"
    echo "doctype html" >> "./src/pages/${filepath}${filename}.pug"
    echo "html"                                                                          >> "./src/pages/${filepath}${filename}.pug"
    echo "    head"                                                                      >> "./src/pages/${filepath}${filename}.pug"
    echo "        meta(charset='utf-8')"                                                 >> "./src/pages/${filepath}${filename}.pug"
    echo "        meta(http-equiv='X-UA-Compatible' content='IE=edge')"                  >> "./src/pages/${filepath}${filename}.pug"
    echo "        meta(name='viewport' content='width=device-width, initial-scale=1.0')" >> "./src/pages/${filepath}${filename}.pug"
    echo "        title"                                                                 >> "./src/pages/${filepath}${filename}.pug"
    echo ""                                                                              >> "./src/pages/${filepath}${filename}.pug"
    echo "    body"                                                                      >> "./src/pages/${filepath}${filename}.pug"
    echo "        ${filename}#main"                                                      >> "./src/pages/${filepath}${filename}.pug"
    echo ""                                                                              >> "./src/pages/${filepath}${filename}.pug"
    echo "        script(src='./${filename}.bundle.js')"                                 >> "./src/pages/${filepath}${filename}.pug"

    # add entry vue
    add_vue "entry/$1" "true"

    # add ts
    touch "./src/scripts/entry/${filepath}${filename}.ts"
    echo "import ${pagename} from '@/components/entry/${pagename}.vue';" >> "./src/scripts/entry/${filepath}${filename}.ts"
    echo "import UrlUtil, { Params } from '@/scripts/util/UrlUtil';"     >> "./src/scripts/entry/${filepath}${filename}.ts"
    echo ""                                                              >> "./src/scripts/entry/${filepath}${filename}.ts"
    echo "/**"                                                           >> "./src/scripts/entry/${filepath}${filename}.ts"
    echo " * init"                                                       >> "./src/scripts/entry/${filepath}${filename}.ts"
    echo " */"                                                           >> "./src/scripts/entry/${filepath}${filename}.ts"
    echo "async function init(): Promise<void> {"                        >> "./src/scripts/entry/${filepath}${filename}.ts"
    echo "    /**"                                                       >> "./src/scripts/entry/${filepath}${filename}.ts"
    echo "     * GetUrlParams"                                           >> "./src/scripts/entry/${filepath}${filename}.ts"
    echo "     */"                                                       >> "./src/scripts/entry/${filepath}${filename}.ts"
    echo "    const params: Params = UrlUtil.getUrlParams();"            >> "./src/scripts/entry/${filepath}${filename}.ts"
    echo ""                                                              >> "./src/scripts/entry/${filepath}${filename}.ts"
    echo "    /**"                                                       >> "./src/scripts/entry/${filepath}${filename}.ts"
    echo "     * Mount vue root"                                         >> "./src/scripts/entry/${filepath}${filename}.ts"
    echo "     */"                                                       >> "./src/scripts/entry/${filepath}${filename}.ts"
    echo "    new ${pagename}().\$mount('#main');"                       >> "./src/scripts/entry/${filepath}${filename}.ts"
    echo "}"                                                             >> "./src/scripts/entry/${filepath}${filename}.ts"
    echo ""                                                              >> "./src/scripts/entry/${filepath}${filename}.ts"
    echo "init();"                                                       >> "./src/scripts/entry/${filepath}${filename}.ts"
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
    local is_root='false'
    if [ 2 -le $# ]; then
        is_root="$2"
    fi

    # $1分解
    local filepath=`echo "${1%/*}"`
    local filename=`echo "${1##*/}"`
    if [ "$filepath" = "$1" ]; then
        filepath=""
    else
        filepath="${filepath}/"
    fi

    # mkdir
    mkdir -p "./src/components/${filepath}"
    touch "./src/components/${filepath}${filename}.vue"

    # add pug
    echo "<template lang='pug'>"                          >> "./src/components/${filepath}${filename}.vue"
    echo ".vue${filename}"                                | sed -E -e $insert_hyphen -e $to_lower >> "./src/components/${filepath}${filename}.vue"
    echo "</template>"                                    >> "./src/components/${filepath}${filename}.vue"
    echo ""                                               >> "./src/components/${filepath}${filename}.vue"

    # add ts
    echo "<script lang='ts'>"                                        >> "./src/components/${filepath}${filename}.vue"
    echo "import { Vue, Component } from 'vue-property-decorator';"  >> "./src/components/${filepath}${filename}.vue"
    echo "import VueUtil from '@/scripts/util/VueUtil';"             >> "./src/components/${filepath}${filename}.vue"
    if [ "$is_root" = "true" ]; then
    echo "import RootVue from '@/components/base/RootVue';"          >> "./src/components/${filepath}${filename}.vue"
    echo ""                                                          >> "./src/components/${filepath}${filename}.vue"
    echo "import 'mdi/scss/materialdesignicons.scss';"               >> "./src/components/${filepath}${filename}.vue"
    echo "import Buefy from 'buefy';"                                >> "./src/components/${filepath}${filename}.vue"
    echo "import 'buefy/lib/buefy.min.css';"                         >> "./src/components/${filepath}${filename}.vue"
    echo ""                                                          >> "./src/components/${filepath}${filename}.vue"
    echo "Vue.use(Buefy);"                                           >> "./src/components/${filepath}${filename}.vue"
    else
    echo "import BuefyVue from '@/components/base/BuefyVue';"        >> "./src/components/${filepath}${filename}.vue"
    fi
    echo ""                                                          >> "./src/components/${filepath}${filename}.vue"
    echo "/**"                                                       >> "./src/components/${filepath}${filename}.vue"
    echo " * Vue Component"                                          >> "./src/components/${filepath}${filename}.vue"
    echo " */"                                                       >> "./src/components/${filepath}${filename}.vue"
    echo "@Component"                                                >> "./src/components/${filepath}${filename}.vue"
    if [ "$is_root" = "true" ]; then
    echo "export default class ${filename} extends RootVue {"        >> "./src/components/${filepath}${filename}.vue"
    echo "    public title: string = '';"                            >> "./src/components/${filepath}${filename}.vue"
    echo ""                                                          >> "./src/components/${filepath}${filename}.vue"
    echo "    protected beforeCreate(): void {"                      >> "./src/components/${filepath}${filename}.vue"
    echo "        VueUtil.registerComponents([]);"                   >> "./src/components/${filepath}${filename}.vue"
    echo "    }"                                                     >> "./src/components/${filepath}${filename}.vue"
    else
    echo "export default class ${filename} extends BuefyVue {"       >> "./src/components/${filepath}${filename}.vue"
    fi
    echo "}"                                                         >> "./src/components/${filepath}${filename}.vue"
    echo "</script>"                                                 >> "./src/components/${filepath}${filename}.vue"
    echo ""                                                          >> "./src/components/${filepath}${filename}.vue"

    # add sass
    if [ "$is_root" = "true" ]; then
    echo "<style lang='sass'>"                            >> "./src/components/${filepath}${filename}.vue"
    else
    echo "<style lang='sass' scoped>"                     >> "./src/components/${filepath}${filename}.vue"
    fi
    echo ".vue${filename}"                                | sed -E -e $insert_hyphen -e $to_lower >> "./src/components/${filepath}${filename}.vue"
    echo "</style>"                                       >> "./src/components/${filepath}${filename}.vue"
}

if [ -z ${2+UNDEF} ]; then
    $1
else
    $1 $2
fi
