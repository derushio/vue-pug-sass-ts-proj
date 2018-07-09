<template lang='pug'>
.vue-$_FILENAME_$
    .reactive-title {{ reactiveTitle() }}
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator';
import Buefy from 'buefy';
import RootVue from '@/components/base/RootVue';

Vue.use(Buefy);

/**
 * Vue Component
 */
@Component
export default class $_PAGENAME_$ extends RootVue {
    public title = '';
    public subtitle = '$_PAGENAME_$';
}
</script>

<style lang='sass'>
@import 'entry/all'

.vue-$_FILENAME_$
</style>
