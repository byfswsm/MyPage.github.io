var slider_box = document.querySelector(".slider_box");
var slider_ul = document.querySelector(".slider_box>ul");
var slider_ul_li_list = document.querySelectorAll(".slider_box>ul>li");
slider_ul.style.left = 0;

function change(offset) {
    var newOffset = parseInt(slider_ul.style.left) + offset
    if (newOffset < -2000) {
        slider_ul.style.left = "0px"
    } else if (newOffset > 0) {
        slider_ul.style.left = "-2000px"
    } else {
        slider_ul.style.left = newOffset + "px"
    }

}


// 创建左右按钮
var left_btn = document.createElement("div")
left_btn.innerHTML = "<"
left_btn.className = "btn left_btn";
slider_box.appendChild(left_btn)
var right_btn = document.createElement("div")
right_btn.innerHTML = ">"
right_btn.className = "btn right_btn";
slider_box.appendChild(right_btn)



//创建图片所对应的点们的容器
var dotts = document.createElement("div")
dotts.className = "dotts"

//创建图片所对应的点
for (var i = 0; i < slider_ul_li_list.length; i++) {
    var dott = document.createElement("div");
    dott.setAttribute("index", i)
    if (i == 0) {
        dott.className = "current"
    }
    dotts.appendChild(dott)
}
slider_box.appendChild(dotts)

var index = 0;

//获取所有点们
var slider_dott_list = document.querySelectorAll(".slider_box>.dotts>div");

//高亮的函数
function highlight() {
    for (var j = 0; j < slider_dott_list.length; j++) {
        slider_dott_list[j].className = ""
    }
    slider_dott_list[index].className = "current"
}


//为左右按钮加点击事件
left_btn.onclick = function () {

    index--
    if (index < 0) {
        index = slider_dott_list.length - 1;
    }
    highlight()

    change(-1000)
}

right_btn.onclick = function () {
    index++
    if (index > slider_dott_list.length - 1) {
        index = 0
    }
    highlight()
    change(1000)
}

var timer = setInterval(right_btn.onclick, 2000);


//鼠标放到轮播上时，自动轮播停止
slider_box.onmouseover = function () {
    clearInterval(timer)
}

//鼠标离开到轮播区时，自动轮播开始
slider_box.onmouseout = function () {
    timer = setInterval(left_btn.onclick, 2000);
}


//为任意添加点击事件切换轮播
for (var k = 0; k < slider_dott_list.length; k++) {
    slider_dott_list[k].onclick = function () {
        var current_index = this.getAttribute("index")
        change((index - current_index) * 1000)
        index = current_index
        highlight();
    }
}