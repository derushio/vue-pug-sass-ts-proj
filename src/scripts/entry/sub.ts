import Vue from 'vue';
import Test from '../../components/Test.vue';

import UrlUtil, { Params } from '../../scripts/util/UrlUtil';

const params: Params = UrlUtil.getUrlParams();

require('../../styles/entry/sub.sass');
class Sub extends Vue {}

Vue.component('test', Test);

new Sub().$mount('#sub');
