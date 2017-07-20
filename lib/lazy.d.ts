export interface Lazy<T> {
    (): T;
    then<T1>(modifier: (a: T) => Lazy<T1>): Lazy<T1>;
    map<T1>(mapper: (a: T) => T1): Lazy<T1>;
    isLazy: boolean;
}
declare const lazy: <T>(getter: () => T) => Lazy<T>;
export default lazy;
