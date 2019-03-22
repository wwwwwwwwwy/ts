// enum类型是对JavaScript标准数据类型的一个补充。 像C#等其它语言一样，使用枚举类型可以为一组数值赋予友好的名字。

enum Colors {
    Red = 1,
    Blue = 2,
    Yellow = 3
}

let c: Colors = Colors.Yellow;

console.log(c);//3
console.log(Colors[3]);//Yellow