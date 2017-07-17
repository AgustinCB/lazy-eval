"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
;
exports.default = (v) => {
    let evaluated = false;
    let _res = null;
    const handler = {
        apply: function (target, ctx, args) {
            if (evaluated)
                return _res;
            _res = target.apply(ctx, args);
            evaluated = true;
            return _res;
        }
    };
    const res = (new Proxy(v, handler));
    res.isLazy = true;
    return res;
};
//# sourceMappingURL=lazy.js.map