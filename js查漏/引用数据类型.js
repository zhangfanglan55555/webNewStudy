// 引用数据类型： Object、Function、Array、Data
var obj = {
    a: 1
};
var obj1 = obj;
obj1.b = obj = {
    x: 1
}
console.log(obj.a) //undefined
console.log(obj.b); //undefined
console.log(obj1.b) //{x:1}

// 函数
function fn() {
    // 有很多自己的内置属性
}
// 只要是引用数据类型都可以增加自定义属性
console.log(fn.name) //"fn"
(function () {}) //定义一个匿名函数
console.log((function () {}).name) // 返回一个空字符串""

// 使用构造函数创建一个函数
console.log((new Function("res", "return res")).name) //返回："anonymous"
var ff = new Function('res', 'return res')
console.log(ff.name) //anonymous

// bind
function f1() {

};
var f2 = f1.bind(null);
console.log(f2.name); //"bound f1",函数是通过f1的bind方法得到的，名称不会改变

// 只要是引用数据类型就可以添加自定义属性

// 函数的length指的是形参的长度,形参的默认值会影响length
// 
function fn(x, y = 'hello') {
    // 如果y没传的话就是hello,传了就是传的值
}
fn(1, 2, 3);
console.log(fn.length); //2

function fn2(x='hello',y){

}
fn2(1)
console.log(fn2.length);//0

function fn3(x,y='hello'){

}
fn3(1);
console.log(fn3.length);//0

// 默认值只有赋值为undefined时才会执行
function fn4(x=(function(){
    console.log('xxxxx');
    return 10;
})(),y){

}
fn4(1);

