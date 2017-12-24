import Vue from 'vue';
import Sidebar from './components/scripts/Sidebar';
import VariableSample from './components/scripts/VariableSample';
import DirectiveSample from './components/scripts/DirectiveSample';
import StyleSample from './components/scripts/StyleSample';
import LifecycleSample from './components/scripts/LifecycleSample';

import UrlUtil, { Params } from './scripts/utils/UrlUtil';

const params: Params = UrlUtil.getUrlParams();

require('./index.sass');
class Index extends Vue {
    private p :string = params['p'];
};

Vue.component('sidebar', Sidebar);
Vue.component('variable-sample', VariableSample);
Vue.component('directive-sample', DirectiveSample);
Vue.component('style-sample', StyleSample);
Vue.component('lifecycle-sample', LifecycleSample);

new Index().$mount('#index');
