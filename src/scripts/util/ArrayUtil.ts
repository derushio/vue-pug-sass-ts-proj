/**
 * ArrayUtil
 */
export default class ArrayUtil {
    private constructor() {}

    /**
     * Arrayを生成
     */
    public static gen(min: number, max: number): number[] {
        const array = [];
        for (let i = min; i <= max; i++) {
            array.push(i);
        }

        return array;
    }
}
