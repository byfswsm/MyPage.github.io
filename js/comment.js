var loadMsg = function () {
    var tb = document.getElementById("show")
    tb.innerHTML = ""
    for (var i = 0, j = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i)
        if (key.indexOf('_fk') == 0) {
            var date = new Date()
            date.setTime(key.substring(3))
            var datestr = date.toLocaleDateString() + "&nbsp;" + date.toLocaleTimeString()
            var msgStr = localStorage[key]
            var msg = JSON.parse(msgStr)
            var row = tb.insertRow(j++)
            //row.insertCell(0).innerHTML = msg.title
            //row.insertCell(1).innerHTML = msg.content
            row.insertCell(0).innerHTML = msg.user + "(" + msg.title + ")" + " said " + msg.content
            row.insertCell(1).innerHTML = datestr
            // row.insertCell(1).innerHTML = datestr + "at"
            // row.insertCell(2).innerHTML = "123"
        }

    }
}
var addMsg = function () {
    var titleElement = document.getElementById("title")
    var contentElement = document.getElementById("content")
    var userElement = document.getElementById("user")
    var msg = {
        title: titleElement.value,
        content: contentElement.value,
        user: userElement.value
    }
    var time = new Date().getTime()
    localStorage['_fk' + time] = JSON.stringify(msg)
    titleElement.value = ""
    contentElement.value = ""
    userElement.value = ""
    alert("Saved!")
    loadMsg()
}

function clearMsg() {
    localStorage.clear()
    alert("All cleared!")
    loadMsg()
}
window.onload = loadMsg()