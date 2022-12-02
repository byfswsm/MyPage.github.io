var firstLi = document.querySelectorAll(".top_right_down>ul>li")
for (var i = 0; i < firstLi.length; i++) {
    firstLi[i].onmouseover = function () {
        var sumHeight = 0;
        var secondLi = this.querySelectorAll("ul li");
        for (var j = 0; j < secondLi.length; j++) {
            sumHeight += secondLi[j].clientHeight;
        }
        if (this.querySelector("ul")) {
            this.querySelector("ul").style.height = sumHeight + "px"
        }
    }
    firstLi[i].onmouseout = function () {
        if (this.querySelector("ul")) {
            this.querySelector("ul").style.height = "0px"
        }

    }
}


var middle_left_titleArr = document.querySelectorAll(".middle_left_title ul li");
var bodyArr = document.querySelectorAll(".middle_left_list>ul");
for (var i = 0; i < middle_left_titleArr.length; i++) {


    middle_left_titleArr[i].onmouseover = function () {
        for (var j = 0; j < middle_left_titleArr.length; j++) {
            middle_left_titleArr[j].className = "";
        }
        this.className = "current";

        var current_index = this.getAttribute("index");
        for (var k = 0; k < bodyArr.length; k++) {
            if (k == current_index) {
                bodyArr[k].style.display = "block"
            } else {
                bodyArr[k].style.display = "none"
            }
        }

    }
}

var middle_right_top_titleArr = document.querySelectorAll(".middle_right_top_title ul li");
var bodyArr2 = document.querySelectorAll(".middle_right_top_list>ul");
for (var i = 0; i < middle_right_top_titleArr.length; i++) {


    middle_right_top_titleArr[i].onmouseover = function () {
        for (var j = 0; j < middle_right_top_titleArr.length; j++) {
            middle_right_top_titleArr[j].className = "";
        }
        this.className = "current1";

        var current_index1 = this.getAttribute("index");
        for (var k = 0; k < bodyArr2.length; k++) {
            if (k == current_index1) {
                bodyArr2[k].style.display = "block"
            } else {
                bodyArr2[k].style.display = "none"
            }
        }

    }
}








