<template lang='pug'>
.vue-sub
    sample
</template>

<script lang='ts'>
import Vue from 'vue';
import Component from 'vue-class-component';
import VueUtil from '@/scripts/util/VueUtil';
import Sample from '@/components/Sample.vue';

/**
 * Vue Component
 */
@Component({})
export default class Sub extends Vue {
}
</script>

<style lang='sass'>
@import '../../styles/color.sass'
@import '../../styles/common.sass'

.vue-sub
</style>
