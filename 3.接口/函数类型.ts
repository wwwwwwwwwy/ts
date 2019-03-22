interface SearchFunc {
    (source: string, subString: string): boolean;
}

// 对于函数类型的类型检查来说，函数的参数名不需要与接口里定义的名字相匹配。
let fn: SearchFunc = (src: string, sub: string): boolean => {
    let result = src.search(sub);
    return result > -1;
}

/**
 * 函数的参数会逐个进行检查，要求对应位置上的参数类型是兼容的。
 * 如果你不想指定类型，TypeScript的类型系统会推断出参数类型，因为函数直接赋值给了 SearchFunc类型变量。
 *  函数的返回值类型是通过其返回值推断出来的（此例是 false和true）。
 * 如果让这个函数返回数字或字符串，类型检查器会警告我们函数的返回值类型与 SearchFunc接口中的定义不匹配。
 */

let func: SearchFunc = (src, sub) => {
    let result = src.substring(sub.length);
    return !!result.length;
}