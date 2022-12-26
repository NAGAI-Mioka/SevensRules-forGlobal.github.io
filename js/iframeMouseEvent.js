// iframe属性をクリックすると、インライン表示されているページに飛ぶ
// マウスオーバー、マウスアウト時のCSSを変更する

var iframe_main = document.getElementById("iframe_main");

$(document).ready(function () {
    $(".iframe_child").iframeTracker({
        blurCallback: function (event) {
            window.location.href = $(this._overElement).attr("src");
        },
        overCallback: function (element, event) {
            this._overElement = $(element);
            $(element).removeClass("iframe_out").addClass("iframe_over");
        },
        outCallback: function (element, event) {
            this._overElement = null;
            $(element).removeClass("iframe_over").addClass("iframe_out");
        },
        _overElement: null
    });

    $(iframe_main).on("load", function () {
        $(".iframe_child").css("pointer-events", "auto");
    });
    $(iframe_main).on("beforeunload", function () {
        $(".iframe_child").css("pointer-events", "none");
    });
});