/**
 * Imports
 */
import Vue from 'vue';
import Test from '@/components/Test.vue';
import UrlUtil, { Params } from '@/scripts/util/UrlUtil';

/**
 * Require sass
 */
require('@/styles/entry/index.sass');

/**
 * Vue root
 */
class Index extends Vue {}

/**
 * init
 */
async function init(): Promise<void> {
    /**
     * GetUrlParams
     */
    const params: Params = UrlUtil.getUrlParams();

    /**
     * Register vue component
     */
    Vue.component('test', Test);

    /**
     * Mount vue root
     */
    new Index().$mount('#index');
}

init();
