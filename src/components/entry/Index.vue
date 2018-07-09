<template lang='pug'>
.vue-index
    .reactive-title {{ reactiveTitle() }}
    common-navbar.is-light(:brand='title')
    common-hero.is-dark(:title='title' :subtitle='subtitle')

    section.main.section
        sample
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator';
import Buefy from 'buefy';
import RootVue from '@/components/base/RootVue';

import CommonNavbar from '@/components/common/CommonNavbar.vue';
import CommonHero from '@/components/common/CommonHero.vue';
import Sample from '@/components/sample/Sample.vue';

Vue.use(Buefy);

/**
 * Vue Component
 */
@Component({
    components: {
        CommonNavbar, CommonHero, Sample
    }
})
export default class Index extends RootVue {
    public title = 'Sample';
    public subtitle = 'Index';
}
</script>

<style lang='sass'>
@import 'entry/all'

.vue-index
    section.main
        max-width: 800px
        margin-left: auto
        margin-right: auto
</style>
