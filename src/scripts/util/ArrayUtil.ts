export default class ArrayUtil {
    private constructor() {}

    /**
     * Arrayを生成
     */
    public static gen(min: number, max: number): number[] {
        return [...Array(max-min+1)].map((_, i: number) => { return i+min });
    }
}
