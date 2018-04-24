import Index from '@/components/entry/$_FILEPATH_$/$_FILENAME_$.vue';
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
    new $_FILENAME_$().$mount('#main');
}

init();
