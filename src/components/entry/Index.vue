<template lang='pug'>
.vue-index
    .reactive-title {{ reactiveTitle() }}
    common-navbar.is-light

    section.main.section
        sample
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator';
import VueUtil from '@/scripts/util/VueUtil';
import RootVue from '@/components/base/RootVue';
import CommonNavbar from '@/components/common/CommonNavbar.vue';
import Sample from '@/components/sample/Sample.vue';

import Buefy from 'buefy';

Vue.use(Buefy);

/**
 * Vue Component
 */
@Component
export default class Index extends RootVue {
    public title = 'Sample';
    public subtitle = 'Index';

    protected beforeCreate(): void {
        // Inner Vue 登録
        VueUtil.registerComponents([CommonNavbar, Sample]);
    }
}
</script>

<style lang='sass'>
@import 'all'

.vue-index
</style>
