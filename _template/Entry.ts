import $_PAGENAME_$ from '@/components/entry/$_FILEPATH_$$_PAGENAME_$.vue';
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
    new $_PAGENAME_$().$mount('#main');
}

init();
