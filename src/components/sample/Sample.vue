<template lang='pug'>
.vue-sample
    h1 Sample

    h2 画像の読み込み
    .indent
        img.vue-logo(v-bind:src='imgs["vue-logo"]')

    h2 データバインド
    .indent
        p: input(v-model='text')
        p {{ text }}

    h2 算術プロパティ
    .indent
        p
            span.head 算術プロパティ:
            span {{ calcProperty }}

        p
            span.head メソッド:
            span {{ method() }}
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator';
import VueUtil from '@/scripts/util/VueUtil';

/**
 * Vue Component
 */
@Component
export default class Sample extends Vue {
    /**
     * イメージ列挙
     */
    private imgs: Imgs = {
        'vue-logo': require('@/resources/img/vue-logo.png')
    };

    private text: string = 'Hello Vue.';

    /**
     * 算術プロパティ例
     */
    private get calcProperty(): string {
        return `${this.text} And hi there!`;
    }

    /**
     * メソッド例
     */
    private method(): string {
        return `${this.text} And hi there!`;
    }
}
</script>

<style lang='sass' scoped>
@import 'all'

.vue-sample
    width: 80%
    max-width: 700px
    margin: 16px auto

    h1
        font-size: 1.4em
        margin: 16px 0

    h2
        font-size: 1.2em
        margin: 8px 0

    .vue-logo
        width: 80px
        height: auto

    .indent
        margin: 0 2em

    .head
        margin: 0 0.5em 0 0
</style>
