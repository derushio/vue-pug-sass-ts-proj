import Vue from 'vue';
import Test from './components/scripts/Test';

import UrlUtil, { Params } from './scripts/utils/UrlUtil';

const params: Params = UrlUtil.getUrlParams();

require('./index.sass');
class Index extends Vue {};

Vue.component('test', Test);

new Index().$mount('#index');
