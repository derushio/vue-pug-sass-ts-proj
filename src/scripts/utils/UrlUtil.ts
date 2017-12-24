export default class UrlUtil {
    /**
     * urlからparamを取得
     * @return {Params} [description]
     */
    public static getUrlParams(): Params {
        // "string=string"[] に分解
        const pairs: string[] = location.search.substring(1).split('&')

        // {[key: string]: string}[] に分解
        const params: Params = pairs.reduce((prev: Params, pair: string) => {
            const kv: string[] = pair.split('=')
            prev[kv[0]] = kv[1]
            return prev
        }, {})

        return params
    }
}

export interface Params {
    [key: string]: string
}
