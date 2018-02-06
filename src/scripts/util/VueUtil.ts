import Vue from 'vue';
import { VueConstructor } from 'vue/types/vue';

/**
 * VueのComponentを
 * クラス名をアッパーキャメルケース
 * タグ名をハイフネーションで記述している場合に
 * 使用できるUrilクラス
 */
export default class VueUtil {
    /**
     * 登録済みComponents
     */
    private static registeredComponents: VueConstructor<Vue>[] = [];

    private constructor() {}

    /**
     * 配列でcomponentを纏めて登録する
     * @param components
     */
    public static registerComponents(components: VueConstructor<Vue>[]): void {
        components.forEach((component) => {
            if (this.registeredComponents.includes(component)) {
                // 登録済みは登録しない
                return;
            }

            // アッパーキャメルケースからハイフネーションに変換
            const tagName: string = component.name.replace(/([A-Z])/g, '-$1')
                .toLocaleLowerCase().replace(/^-/, '');
            // Vueに登録
            Vue.component(tagName, component);
            this.registeredComponents.push(component)
        });
    }
}
