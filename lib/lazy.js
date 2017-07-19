"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
;
const lazy = (getter) => {
    let evaluated = false;
    let _res = null;
    const res = function () {
        if (evaluated)
            return _res;
        _res = getter.apply(this, arguments);
        evaluated = true;
        return _res;
    };
    res.isLazy = true;
    res.then = function (modifier) {
        return modifier(res());
    };
    return res;
};
exports.default = lazy;
//# sourceMappingURL=lazy.js.map