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
require('@/styles/entry/sub.sass');
/**
 * Vue root
 */
class Sub extends Vue {}

/**
 * Register vue component
 */
Vue.component('test', Test);

/**
 * Mount vue root
 */
new Sub().$mount('#sub');
