var Page3Render = (function () {
    var page3 = document.getElementById('page3');
    var h3 = page3.children[0];
    var timer = null;
    // 显示，h1的背景颜色变成红色(渐变：时长5s)，完成后消失，显示第4个模块
    return {
        init() {
            page3.style.display = 'block';
            this.change();
        },
        change() {
            h3.style.backgroundColor = 'red';
            h3.style.opacity = 0;
            timer = setInterval(function () {
                var opacity = parseFloat(h3.style.opacity) + 0.1
                h3.style.opacity = opacity;
                if (opacity >= 1) {
                    clearInterval(timer);
                    page3.style.display = 'none';
                    Page4Render.init();
                }
            }, 500)
        }
    }
})()