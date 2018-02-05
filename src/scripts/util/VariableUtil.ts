export default class VariableUtil {
    private constructor() {};

    public static variableWithDefault<T1, T2>(variable: T1, def: T2): T1 | T2 {
        try {
            return variable || def;
        } catch(e) {
            return def;
        }
    }
}
