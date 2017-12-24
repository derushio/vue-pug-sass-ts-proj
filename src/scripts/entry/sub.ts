import Vue from 'vue';
import Test from './../../components/scripts/Test';

import UrlUtil, { Params } from './../../scripts/utils/UrlUtil';

const params: Params = UrlUtil.getUrlParams();

require('./../../styles/entry/index.sass');
class Sub extends Vue {};

Vue.component('test', Test);

new Sub().$mount('#sub');
