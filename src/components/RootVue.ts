import Vue from 'vue';

export default class RootVue extends Vue {
    public title: string = '';
    protected beforeCreate(): void {};

    protected reactiveTitle(): void {
        document.title = this.title;
    }
}
