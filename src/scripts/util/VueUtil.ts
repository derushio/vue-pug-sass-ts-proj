import Vue from 'vue';
import { VueConstructor } from 'vue/types/vue';

/**
 * VueのComponentを
 * クラス名をアッパーキャメルケース
 * タグ名をハイフネーションで記述している場合に
 * 使用できるUrilクラス
 */
export default class VueUtil {
    private constructor() {}

    /**
     * 配列でcomponentを纏めて登録する
     * @param components
     */
    public static registerComponents(components: VueConstructor<Vue>[]) {
        components.forEach((component) => {
            // アッパーキャメルケースからハイフネーションに変換
            const tagName: string = component.name.replace(/([A-Z])/g, '-$1')
                .toLocaleLowerCase().replace(/^-/, '');
            // Vueに登録
            Vue.component(tagName, component);
        });
    }
}
