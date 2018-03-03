declare module 'buefy' {
    import _Vue from 'vue';
    import { BuefyConfig } from '@/scripts/dts/buefy/index';
    import { Dialog, ModalProgrammatic, LoadingProgrammatic,
        Toast, Snackbar } from '@/scripts/dts/buefy/components';
    import { ColorModifiers } from '@/scripts/dts/buefy/helpers';

    const _default: (Vue: typeof _Vue, config: BuefyConfig) => {};

    export default _default;
    export { Dialog, ModalProgrammatic, LoadingProgrammatic,
        Toast, Snackbar, ColorModifiers };
}
