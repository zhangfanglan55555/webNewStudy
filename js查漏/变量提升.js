// 变量提升：在作用域形成之后，代码执行之前将所有的带var和function
// 关键字的变量提前的声明或定义

// 作用域：全局作用域、私有作用域、块作用域（es6)
// 作用域也叫   栈内存 === 代码执行的环境/空间
// 全局作用域：只要是浏览器打开就会形成全局作用域,window
// 私有作用域：一个函数执行就行形成一个私有作用域
// 块作用域：es6新增，用{}包起来的就是块作用域 
// eval("{a:1,b:2}") 报错： 浏览器解析为a:1,b:2，赋值不能用冒号，会报错
eval("({{a:1,b:2}})"); //就不报错了

// 带var关键字的只是提前声明，而带function关键字的既声明又定义
console.log(a); //undefined
var a;

console.log(fn); // function fn(){}
function fn() {}


// 例子
console.log(b);//undefined
var b = 1;
ff()
function ff() {
    console.log(1);//1
}
console.log(b);//1

// es6中
// 变量声明用let 和 const，没有变量提升
let a;
console.log(a);//undefined

// let:
// 1、不可重复声明
// 2、不会发生变量提升,
// 3、定义的变量不会给window增加属性

var a =1;//window.a 输出1
console.log("a" in window);//true
let b ;//报错,a has already been declared
console.log("b" in window);//false

// const:
// 1、没有变量提升
// 2、不可重复声明
// 3、定义的变量不会给window增加属性
// 4、定义的是个常量，定义之后不可修改
// 5、一旦声明必须赋值
console.log(b);
let b;
console.log(b)//b is not defined