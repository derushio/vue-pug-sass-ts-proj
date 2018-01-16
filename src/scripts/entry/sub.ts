import Vue from 'vue';
import Test from '@/components/Test.vue';
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
     * Register vue component
     */
    Vue.component('test', Test);

    /**
     * Mount vue root
     */
    new Sub().$mount('#sub');
}

init();
