for (let i = 0; i < 3; i++) {
    setTimeout(function () {
        console.log(i)
    }, 1000)
}
// 0 1 2
// 相当于：
for (var i = 0; i < 3; i++) {
    (function (i) {
        __loop(i);
    })(i)
}

function __loop(i) {
    setTimeout(function () {
        console.log(i)
    }, 1000)
}
let arr4 = [1, 2, 'hhhh'];
// 省略赋值
let [, , j] = arr4;
console.log(j)

let users = [{
    id: 1,
    name: 'liming'
}, {
    id: 2,
    name: 'hanmm'
}];
let newLis = users.map(function (item, index) {
    return `<li>${item.id}${item.name}</li>`
})
console.log(newLis.join(''))
console.log('----')
let str = 'abcdef';
console.log(str.startsWith('a')); //str是否以a开头
console.log(str.includes('dd')); //str是否包含a字符串
console.log(str.endsWith('f')); //str是否以f结尾

let x = 'xx';
console.log(x.repeat(3))

let str5 = 'abc';
console.log("(" + str5.padStart(5, 'x') + ")")
console.log("(" + str5.padEnd(5, 'x') + ")")


let address = 'http://www.baidu.com';
if (address.startsWith('http')) {
    console.log('http')
} else if (address.startsWith('https')) {
    console.log('https')
}