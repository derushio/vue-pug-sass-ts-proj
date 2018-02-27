declare module '*.vue' {
    import { Vue } from 'vue-property-decorator';
    export default Vue;
}

/**
 * Vueコンポーネント内でImgリソースを列挙するための型
 */
declare interface Imgs {
    [keys: string]: string
}

declare module 'buefy';
