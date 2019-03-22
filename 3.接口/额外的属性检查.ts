interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquares(config: SquareConfig): { color: string; area: number } {
    // ...
    return {
        color: "red",
        area: 100
    }
}

// let mySquares = createSquares({ colour: "red", width: 100 }); //Error
// 绕开这些检查非常简单。 最简便的方法是使用类型断言：
let mySquares = createSquares({ colour: "red", width: 100 } as SquareConfig);

// 最佳的方式是能够添加一个字符串索引签名，前提是你能够确定这个对象可能具有某些做为特殊用途使用的额外属性。
interface SquareConfigs {
    color?: string;
    width?: number;
    [propName: string]: any;
}

// 最后一种跳过这些检查的方式，这可能会让你感到惊讶，它就是将这个对象赋值给一个另一个变量： 因为 squareOptions不会经过额外属性检查，所以编译器不会报错。
let squareOptions = { colour: "red", width: 100 };
let mySquaress = createSquare(squareOptions);