export default class UrlUtil {
    /**
     * urlからparamを取得
     * @return {Params} [description]
     */
    public static getUrlParams(): Params {
        // "string=string"[] に分解
        const pairs: string[] = location.search.substring(1).split('&');

        // {[key: string]: string}[] に分解
        const params: Params = pairs.reduce((prev: Params, pair: string) => {
            const kv: string[] = pair.split('=');
            prev[kv[0]] = kv[1];
            return prev;
        }, {});

        return params;
    }

    /**
     * Params ObjectからParams Stringを生成
     * @param params
     */
    public static buildParams(params: Params): string {
        return Object.keys(params).reduce((prev, key): string => {
            return `${prev}&${key}=${params[key]}`;
        }, '').replace(/^&/, '');
    }

    /**
     * Pathにジャンプ
     * @param path
     * @param params
     */
    public static jumpPath(path: string, params?: Params): void {
        let url: string = path;
        if (params != null) {
            url += `?${this.buildParams(params)}`;
        }

        location.href = url;
    }
}

export interface Params {
    [key: string]: string;
}
