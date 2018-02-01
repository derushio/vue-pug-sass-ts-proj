import Vue from 'vue';
import Sub from '@/components/entry/Sub.vue';
import UrlUtil, { Params } from '@/scripts/util/UrlUtil';

/**
 * init
 */
async function init(): Promise<void> {
    /**
     * GetUrlParams
     */
    const params: Params = UrlUtil.getUrlParams();

    /**
     * Mount vue root
     */
    new Sub().$mount('#sub');
}

init();
