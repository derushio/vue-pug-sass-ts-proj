<template lang='pug'>
.vue-sample
    header.hero.is-dark
        .hero-body
            .container
                h1.title Sample

    section.main.section
        .chapter
            h2 画像の読み込み
            .has-text-centered
                img.vue-logo(v-bind:src='imgs["vue-logo"]')

        .chapter
            h2 データバインド
            .indent
                b-field(label='INPUT')
                    b-input(v-model='text')
                b-field(label='OUTPUT')
                    b-input(v-model='text' readonly)

        .chapter
            h2 算術プロパティ
            .indent
                .columns
                    .column.is-3: span 算術プロパティ:
                    .column: span {{ calcProperty }}

                .columns
                    .column.is-3: span メソッド:
                    .column: span {{ method() }}

        .chapter
            h2 Buefy コンポーネント
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
     * イメージ列挙
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

    h1
        font-size: 1.4em

    h2
        font-size: 1.2em
        margin-bottom: 0.75rem

    .main
        max-width: 700px
        margin-left: auto
        margin-right: auto

        .chapter
            position: relative
            margin-bottom: 2rem

        .vue-logo
            width: 80px
            height: auto
</style>
