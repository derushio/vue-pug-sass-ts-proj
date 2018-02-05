export default class VariableUtil {
    private constructor() {};

    /**
     * 変数をデフォルト指定して取得
     * 存在が保証されない変数を安全に取得
     * @param variable
     * @param key
     * @param def
     */
    public static vardef<T1, T2>(parent: any, key: string, def: T2): T1 | T2 {
        try {
            const keys: string[] = key.split('.');
            return keys.reduce((prev: any, k) => {
                return prev[k];
            }, parent) || def;
        } catch(e) {
            return def;
        }
    }
}
