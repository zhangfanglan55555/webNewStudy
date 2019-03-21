var Page2Render = (function () {
    var page2 = document.getElementById('page2');
    var h2 = page2.children[0];
    var timer = null;
    return {
        init() {
            page2.style.display = 'block';
            page2.children[0].innerHTML = '大家好我是新来的同事';
            this.change();
        },
        change() {
            var str = '大家好我是新来的同事';
            var index = str.length-1;
            timer = setInterval(function () {
                h2.innerHTML += str[index--];
                if(index == 0){
                    clearInterval(timer);
                    // 自己消失
                    page2.style.display = 'none';
                    Page3Render.init();
                }
            }, 50)
        }
    }
})()