/**
 * Vues
 */
import Vue from 'vue';
import Test from '@/components/Test.vue';

/**
 * Url Utils
 */
import UrlUtil, { Params } from '@/scripts/util/UrlUtil';
const params: Params = UrlUtil.getUrlParams();

/**
 * Require sass
 */
require('@/styles/entry/index.sass');
/**
 * Vue root
 */
class Index extends Vue {}

/**
 * Register vue component
 */
Vue.component('test', Test);

/**
 * Mount vue root
 */
new Index().$mount('#index');
