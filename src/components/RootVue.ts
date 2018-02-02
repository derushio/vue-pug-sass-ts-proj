import Vue from 'vue';

export default class RootVue extends Vue {
    public title: string;
    protected beforeCreate(): void {};

    private reactiveTitle(): void {
        document.title = this.title;
    }
}
