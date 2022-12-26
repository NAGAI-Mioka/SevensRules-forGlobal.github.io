// iframe属性をクリックすると、インライン表示されているページに飛ぶ
// マウスオーバー、マウスアウト時のCSSを変更する

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

    $("#iframe_main").iframeTracker({
        blurCallback: function (event) {
        },
        overCallback: function (element, event) {
            this._overElement = $(element);
        },
        outCallback: function (element, event) {
            this._overElement = null;
        },
        _overElement: null
    });
});