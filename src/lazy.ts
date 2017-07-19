export interface Lazy<T> {
  (): T;
  then<T1>(modifier: (a: T) => Lazy<T1>): Lazy<T1>;
  isLazy: boolean;
};

const lazy = <T>(getter: () => T): Lazy<T> => {
  let evaluated: boolean = false;
  let _res: T = null;
  const res = <Lazy<T>>function (): T {
    if (evaluated) return _res
    _res = getter.apply(this, arguments);
    evaluated = true;
    return _res;
  }
  res.isLazy = true;
  res.then = function<T1> (modifier: (a: T) => Lazy<T1>): Lazy<T1> {
    return modifier(res());
  };
  return res;
};

export default lazy;
