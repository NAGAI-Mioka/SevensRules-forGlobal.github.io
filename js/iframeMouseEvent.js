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

