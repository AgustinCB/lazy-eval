export interface Lazy<T> {
	(): T;
	isLazy: boolean;
};

export default <T>(v: () => T): Lazy<T> => {
	let evaluated: boolean = false;
	let _res: T = null;
  const handler = {
		apply: function (target: () => T, ctx: Object, args: Array<any>): T {
   	  if (evaluated) return _res;
			_res = target.apply(ctx, args);
			evaluated = true;
			return _res;
    }
  }
  const res = <Lazy<T>>(new Proxy(v, handler));
	res.isLazy = true;
	return res;
}
