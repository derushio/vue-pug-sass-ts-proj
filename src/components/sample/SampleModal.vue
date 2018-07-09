<template lang='pug'>
section.vue-sample-modal.section
    h3.title ログイン
    form.form
        b-field(label='Email')
            b-input(type='text')
        b-field(label='Password')
            b-input(type='password')

        .buttons.is-right
            a.button.is-primary ログイン
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator';

/**
 * Vue Component
 */
@Component
export default class SampleModal extends Vue {
}
</script>

<style lang='sass' scoped>
@import 'entry/variable'

.vue-sample-modal
    background: $white
    border-radius: 4px
</style>
