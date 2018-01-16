import Vue from 'vue';
import Test from '../../components/vues/Test.vue';

import UrlUtil, { Params } from '../../scripts/util/UrlUtil';

const params: Params = UrlUtil.getUrlParams();

require('../../styles/entry/index.sass');
class Index extends Vue {}

Vue.component('test', Test);

new Index().$mount('#index');
