<template lang='pug'>
.vue-sample
    .vue-functions
        h3: .icon-text
            b-icon(icon='vuejs')
            span Vue 機能
        .chapter
            h4: .icon-text
                b-icon(icon='image')
                span 画像の読み込み
            .has-text-centered
                img.vue-logo(v-bind:src='imgs["vue-logo"]')

        .chapter
            h4: .icon-text
                b-icon(icon='rotate-3d')
                span 双方向データバインド
            .indent
                b-field(label='INPUT')
                    b-input(v-model='text')
                b-field(label='OUTPUT')
                    b-input(v-model='text' readonly)

        .chapter
            h4: .icon-text
                b-icon(icon='function')
                span 算術プロパティ
            .indent
                .columns
                    .column.is-3: span 算術プロパティ:
                    .column: span {{ calcProperty }}

                .columns
                    .column.is-3: span メソッド:
                    .column: span {{ method() }}

    .buefy-components
        h3: .icon-text
            b-icon(icon='package-variant')
            span Buefy コンポーネント
        .chapter
            h4 dialog / modal / toast / snackbar
            .columns.is-multiline
                .column.is-6.has-text-centered
                    a.button.is-primary(@click='showAlert') Show alert
                .column.is-6.has-text-centered
                    a.button.is-primary(@click='showModal') Show Modal

                .column.is-6.has-text-centered
                    a.button.is-primary(@click='showToast') Show toast
                .column.is-6.has-text-centered
                    a.button.is-primary(@click='showSnackbar') Show snackbar
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator';
import VueUtil from '@/scripts/util/VueUtil';
import SampleModal from '@/components/sample/SampleModal.vue';

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

    protected beforeCreate(): void {
        VueUtil.registerComponents([SampleModal]);
    }

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
    protected showAlert(): void {
        this.$dialog.alert('Show alert !!');
    }

    /**
     * モーダル
     */
    protected showModal(): void {
        this.$modal.open({component: SampleModal});
    }

    /**
     * トースト
     */
    protected showToast(): void {
        this.$toast.open('Show toast !!');
    }

    /**
     * スナックバー
     */
    protected showSnackbar(): void {
        this.$snackbar.open('Show snackbar !!');
    }
}
</script>

<style lang='sass' scoped>
@import 'entry/variable'

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
