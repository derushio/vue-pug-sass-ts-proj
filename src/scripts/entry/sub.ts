import Vue from 'vue';
import Sample from '@/components/Sample.vue';
import VueUtil from '@/scripts/util/VueUtil';
import UrlUtil, { Params } from '@/scripts/util/UrlUtil';

/**
 * Require sass
 */
require('@/styles/entry/sub.sass');

/**
 * Vue root
 */
class Sub extends Vue {}

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
    new Sub().$mount('#sub');
}

init();
