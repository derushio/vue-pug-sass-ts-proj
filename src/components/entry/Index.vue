<template lang='pug'>
.vue-index
    .reactive-title {{ reactiveTitle() }}
    sample
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator';
import VueUtil from '@/scripts/util/VueUtil';
import RootVue from '@/components/base/RootVue';
import Sample from '@/components/sample/Sample.vue';

import 'mdi/scss/materialdesignicons.scss';
import Buefy from 'buefy';
import 'buefy/lib/buefy.min.css';

Vue.use(Buefy);

/**
 * Vue Component
 */
@Component
export default class Index extends RootVue {
    public title: string = 'index';

    protected beforeCreate(): void {
        // Inner Vue 登録
        VueUtil.registerComponents([Sample]);
    }
}
</script>

<style lang='sass'>
@import 'all'

.vue-index
</style>
