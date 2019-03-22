/**
 * 接口就好比一个名字，用来描述上面例子里的要求。 它代表了有一个 label属性且类型为string的对象。
 * 需要注意的是，我们在这里并不能像在其它语言里一样，说传给 printLabel的对象实现了这个接口。
 * 我们只会去关注值的外形。 只要传入的对象满足上面提到的必要条件，那么它就是被允许的。
 * 还有一点值得提的是，类型检查器不会去检查属性的顺序，只要相应的属性存在并且类型也是对的就可以
 */

interface LabelledValue {
    label: string;
}

function printLabel(labelledObj: LabelledValue) {
    console.log(labelledObj.label);
}

let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);