/**
 * ArrayUtil
 */
export default class ArrayUtil {
    private constructor() {}

    public static gen(num: number): number[];

    /**
     * Arrayを生成
     */
    public static gen(min: number, max?: number): number[] {
        // overload
        if (max == null) {
            max = min;
            min = 1;
        }

        const array = [];
        for (let i = min; i <= max; i++) {
            array.push(i);
        }

        return array;
    }
}
