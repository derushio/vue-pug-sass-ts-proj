import Index from '@/components/entry/Index.vue';
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
    new Index().$mount('#main');
}

init();
