<template lang='pug'>
.vue-$_PAGENAME_$
    .reactive-title {{ reactiveTitle() }}
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator';
import VueUtil from '@/scripts/util/VueUtil';
import RootVue from '@/components/base/RootVue';

import Buefy from 'buefy';
Vue.use(Buefy);

/**
 * Vue Component
 */
@Component
export default class $_FILENAME_$ extends RootVue {
    public title = '';
    public subtitle = '$_FILENAME_$';

    protected beforeCreate(): void {
        // Inner Vue 登録
        VueUtil.registerComponents([]);
    }
}
</script>

<style lang='sass'>
@import 'entry/all'

.vue-$_PAGENAME_$
</style>
