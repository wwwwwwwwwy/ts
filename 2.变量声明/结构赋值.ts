// 最简单的解构莫过于数组的解构赋值了：
let input: Array<number> = [1, 2];
let [first, second] = input;
console.log(first); // outputs 1
console.log(second); // outputs 2


let nums = [1, 2];
// 作用于函数参数：
function f([first, second]: [number, number]) {
    console.log(first);
    console.log(second);
}
f(nums as [number, number]);

// 你可以在数组里使用...语法创建剩余变量：
; (function () {
    let [first, ...rest] = [1, 2, 3, 4];
    console.log(first); // outputs 1
    console.log(rest); // outputs [ 2, 3, 4 ]
})();

// 属性重命名
// 这里的语法开始变得混乱。 你可以将 a: newName1 读做 "a 作为 newName1"。 方向是从左到右，好像你写成了以下样子
; (function () {
    let o = {
        a: "foo",
        b: 12,
        c: "bar"
    };
    let { a: newName1, b: newName2 } = o;
})();

// 默认值

; (function () {
    function keepWholeObject(wholeObject: { a: string, b?: number }) {
        let { a, b = 1001 } = wholeObject;
    }
})();

// 解构也能用于函数声明。

; (function () {
    type C = { a: string, b?: number }
    function f({ a, b }: C): void {
        console.log({ a, b })
    }
    f({ a: '1', b: 2 })
})();