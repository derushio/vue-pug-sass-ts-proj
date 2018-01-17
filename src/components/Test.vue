<template lang='pug'>
.vue-test
    h1 Test
    p: input(v-model="text")
    p {{ text }}
</template>

<script lang='ts'>
import Vue from 'vue';
import Component from 'vue-class-component';

/**
 * Vue Component
 */
@Component({})
export default class Test extends Vue {
    private text: string = 'Hello Vue.';
}
</script>

<style lang='sass' scoped>
.vue-test
</style>
