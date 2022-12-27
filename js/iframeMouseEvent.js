// iframe属性をクリックすると、インライン表示されているページに飛ぶ
// マウスオーバー、マウスアウト時のCSSを変更する

// DOMツリー構築後にiframe要素を取得して、addEventlistenerを登録する

window.addEventListener("DOMContentLoaded", () => {
    var ifch = document.getElementsByClassName("iframe_child");
    for (var i = 0; i < ifch.length; i++) {
        console.log(i);
        ifch[i].contentWindow.addEventListener("click", (e) => {
            console.log("clicked!");
            console.log($(e.currentTarget).attr("scr"));
        });
        ifch[i].addEventListener("mouseenter", (e) => {
            console.log("over!" + e.currentTarget);
            $(e.currentTarget).removeClass("iframe_out").addClass("iframe_over");
        });
        ifch[i].addEventListener("mouseleave", (e) => {
            console.log("out!" + e.currentTarget);
            $(e.currentTarget).removeClass("iframe_over").addClass("iframe_out");
        });
    }
});


/*
window.addEventListener("unload", function (e) {
    console.log("unload!");
    var ifch = document.getElementsByClassName("iframe_child");
    for (var i = 0; i < ifch.length; i++) {
        ifch[i].style.pointerEvents = "auto";
    }
});

window.addEventListener("beforeunload", function (e) {
    console.log("before unload!");
    var ifch = document.getElementsByClassName("iframe_child");
    for (var i = 0; i < ifch.length; i++) {
        ifch[i].style.pointerEvents = "none";
    }
});
*/

/*
$(document).ready(function () {

    /*
    $(".iframe_child").iframeTracker({
        blurCallback: function (event) {
            //window.location.href = $(this._overElement).attr("src");
            //console.log($(this._overElement).attr("src"));
            //console.log(event);
            //$(this._overElement).iframeTracker(null);
        },
        overCallback: function (element, event) {
            this._overElement = $(element);
            //console.log("over!");
            $(element).removeClass("iframe_out").addClass("iframe_over");
        },
        outCallback: function (element, event) {
            this._overElement = null;
            //console.log("out!");
            $(element).removeClass("iframe_over").addClass("iframe_out");
        },
        _overElement: null
    });
    */

/*
$(iframe_main).on("load", function () {

});
$(iframe_main).on("beforeunload", function () {
    $(".iframe_child").css("pointer-events", "none");
});
 
});

*/