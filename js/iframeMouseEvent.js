// iframe属性をクリックすると、インライン表示されているページに飛ぶ
// マウスオーバー、マウスアウト時のCSSを変更する

document.addEventListener("DOMContentLoaded", () => {
    var win_ifmain = window.top.document.getElementById("iframe_main").contentWindow; // iframe_mainのウィンドウを取得
    var ifch = document.getElementsByClassName("iframe_child"); // 全てのiframe_childを取得
    var overIframe = null; // 現在カーソルが入っているiframe_childを入れる変数

    for (var i = 0; i < ifch.length; i++) {

        // iframe_childの内部をクリックした時
        ifch[i].contentWindow.addEventListener("click", (e) => {
            if ($(overIframe).attr("src") != null) {
                var user = window.top.location.search;
                var attr = "click";
                var name = window.document.title;
                var loc = window.location.href;

                pushJsonLog(user, attr, name, loc);

                win_ifmain.location.href = $(overIframe).attr("src");
            }
        });

        // iframe_childにカーソルが入った時
        ifch[i].addEventListener("mouseover", (e) => {
            overIframe = e.currentTarget;
            $(e.currentTarget).removeClass("iframe_out").addClass("iframe_over");
        });

        // iframe_childからカーソルが出た時
        ifch[i].addEventListener("mouseout", (e) => {
            overIframe = null;
            $(e.currentTarget).removeClass("iframe_over").addClass("iframe_out");
        });
    }
});

function pushJsonLog(user, attr, name, loc) {
    var now = new Date();
    var date = {
        "year": now.getFullYear(),
        "month": now.getMonth() + 1,
        "date": now.getDate(),
        "hours": now.getHours(),
        "minutes": now.getMinutes(),
        "seconds": now.getSeconds(),
        "milli": now.getMilliseconds()
    }
    var logJson = {
        "user": user,
        "attr": attr,
        "name": name,
        "location": loc,
        "date": date
    };
    logSubmit(logJson);
}

function logSubmit(eventLog) {
    fetch("http://172.21.214.123/SevensRules-forGlobal.github.io/php/writeLogFile.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        //body: JSON.stringify(accessLog)
        body: JSON.stringify(eventLog)
    })
        .then(response => {
            //response.text();
            console.log("通信成功" + response);
        })
        .then(res => {
            console.log(res);
        })
        .catch(error => {
            console.log(error);
        })
}