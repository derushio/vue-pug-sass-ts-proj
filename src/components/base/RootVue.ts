import { Vue } from 'vue-property-decorator';

// TODO: vue-property-decoratorへ以降
export default abstract class RootVue extends Vue {
    public abstract title: string;
    public abstract subtitle: string;

    protected reactiveTitle(): void {
        document.title = `${this.subtitle} | ${this.title}`;
    }
}
