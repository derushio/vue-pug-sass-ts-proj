import Vue from 'vue';

// TODO: vue-property-decoratorへ以降
export default class RootVue extends Vue {
    public title: string = '';
    protected beforeCreate(): void {};

    protected reactiveTitle(): void {
        document.title = this.title;
    }
}
