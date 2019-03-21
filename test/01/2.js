// 剩余操作符
function sum(prefix, ...rest) {
    // rest=[1,2,3,4]
    // 循环求和
    let result = 0;
    rest.forEach((item, index) => {
        return result += item
    })
    return prefix + result
}
console.log(sum('$', 1, 2, 3, 4))


var rest = [4, 1, 2, 3];
console.log(
    rest.reduce((pre, next, index, item) => {
        console.log(pre)
        return pre + next
    })
)
var arr4 = [2, 3, 4, 1]
let result = arr4.reduce(function (val, item, index, origin) {
    let sum = val + item; //返回值会成为下一次函数执行的时候的val
    if (index == origin.length - 1) {
        return sum / origin.length
    }else{
        return sum
    }
})
console.log(result)

Array.prototype.reduce1 = function (reducer, initiVal=0) {
    // initiVal初始值
    for (let i = 0; i < this.length; i++) {
        initiVal = reducer(initiVal, this[i]);
    }
    return initiVal;
}
let myResult = arr4.reduce1(function(val,item,index,origin){    
    return val+item;
},0)
console.log(myResult)