import Vue from 'vue';
import Sample from '@/components/Sample.vue';
import VueUtil from '@/scripts/util/VueUtil';
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
     * Register vue components
     */
    VueUtil.registerComponents([Sample]);

    /**
     * Mount vue root
     */
    new Index().$mount('#index');
}

init();
