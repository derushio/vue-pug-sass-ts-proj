import { Vue } from 'vue-property-decorator';
import BuefyVue from '@/components/base/BuefyVue';

// TODO: vue-property-decoratorへ以降
export default abstract class RootVue extends BuefyVue {
    public abstract title: string;

    /**
     * Inner VueのComponentsをここで登録する
     */
    protected abstract beforeCreate(): void;

    protected reactiveTitle(): void {
        document.title = this.title;
    }
}
