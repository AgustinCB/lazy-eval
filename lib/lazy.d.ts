export interface Lazy<T> {
    (): T;
    isLazy: boolean;
}
declare const _default: <T>(v: () => T) => Lazy<T>;
export default _default;
