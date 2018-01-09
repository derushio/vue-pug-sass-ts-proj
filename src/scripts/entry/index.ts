import Vue from 'vue';
import Test from '../../components/scripts/Test';

import UrlUtil, { Params } from '../../scripts/util/UrlUtil';

const params: Params = UrlUtil.getUrlParams();

require('../../styles/entry/index.sass');
class Index extends Vue {};

Vue.component('test', Test);

new Index().$mount('#index');
