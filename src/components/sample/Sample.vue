<template lang='pug'>
.vue-sample
    .vue-functions
        h3 Vue 機能
        .chapter
            h4 画像の読み込み
            .has-text-centered
                img.vue-logo(v-bind:src='imgs["vue-logo"]')

        .chapter
            h4 データバインド
            .indent
                b-field(label='INPUT')
                    b-input(v-model='text')
                b-field(label='OUTPUT')
                    b-input(v-model='text' readonly)

        .chapter
            h4 算術プロパティ
            .indent
                .columns
                    .column.is-3: span 算術プロパティ:
                    .column: span {{ calcProperty }}

                .columns
                    .column.is-3: span メソッド:
                    .column: span {{ method() }}

    .buefy-components
        h3 Buefy コンポーネント
        .chapter
            h4 dialog / modal
            .columns
                .column.is-harf.has-text-centered
                    a.button.is-primary(@click='alert') Launch alert
                .column.is-harf.has-text-centered
                    a.button.is-primary(@click='showModal') Show Modal
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
     * 画像読み込み
     */
    protected imgs = {
        'vue-logo': require('@/resources/img/vue-logo.png')
    } as Imgs;

    protected text = 'Hello Vue.';

    /**
     * 算術プロパティ例
     */
    protected get calcProperty(): string {
        return `${this.text} And hi there!`;
    }

    /**
     * メソッド例
     */
    protected method(): string {
        return `${this.text} And hi there!`;
    }

    /**
     * アラート
     */
    private alert(): void {
        this.$dialog.alert('Everything looks fine!');
    }

    /**
     * モーダル
     */
    private showModal(): void {
        this.$modal.open({component: Sample, hasModalCard: false});
    }
}
</script>

<style lang='sass' scoped>
@import 'variable'

.vue-sample
    background-color: $white

    h3
        font-size: 1.5em
        margin-bottom: 0.75rem

    h4
        font-size: 1.2em
        margin-bottom: 0.75rem

    .chapter
        position: relative
        margin-bottom: 2rem

    .vue-logo
        width: 80px
        height: auto
</style>
