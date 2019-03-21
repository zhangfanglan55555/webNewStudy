var Page1Render = (function () {
    // 获取当前模块
    var page1 = document.getElementById('page1');
    var timer = null;
    return {
        init() {
            page1.style.display = 'block';
            return this;
        },
        // 改变h1内容
        change() {
            timer = window.setInterval(function () {
                page1.children[0].innerHTML++;
                // 当加到10的时候清除定时器
                if (parseInt(page1.children[0].innerHTML) >= 3) {
                    window.clearInterval(timer);
                    // 自己消失
                    page1.style.display = 'none';
                    // 让模块2展示
                    Page2Render.init();
                }
            }, 1000)
        }
    }
})()