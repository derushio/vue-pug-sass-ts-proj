<template lang='pug'>
section.vue-common-hero.hero
    .hero-body
        .container
            h1.title {{ title }}
            h2.subtitle {{ subtitle }}
</template>

<script lang='ts'>
import { Vue, Component, Prop } from 'vue-property-decorator';
import VueUtil from '@/scripts/util/VueUtil';

/**
 * Vue Component
 */
@Component
export default class CommonHero extends Vue {
    @Prop({type: String, default: () => ''})
    protected title?: string;
    @Prop({type: String, default: () => ''})
    protected subtitle?: string;
}
</script>

<style lang='sass' scoped>
@import 'variable'

.vue-common-hero
</style>
