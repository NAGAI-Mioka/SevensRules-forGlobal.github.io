// iframe属性をクリックすると、インライン表示されているページに飛ぶ
// マウスオーバー、マウスアウト時のCSSを変更する

// DOMツリー構築後にiframe要素を取得して、addEventlistenerを登録する

var overIframe = null;

document.addEventListener("DOMContentLoaded", () => {

    var ifch = document.getElementsByClassName("iframe_child");
    for (var i = 0; i < ifch.length; i++) {
        console.log(i);
        ifch[i].addEventListener("click", (e) => {
            //console.log("clicked!");
            if ($(overIframe).attr("src") != null) {
                if (window.name === "iframe_main") {
                    console.log(window);
                    window.location.href = $(overIframe).attr("src");
                } else {
                    //window.top.location.href = $(window.top.overIframe).attr("src");
                }
            }

            console.log(overIframe);
            console.log($(overIframe).attr("src"));

            // if ($(overIframe).attr("src") != null && window.name === "iframe_main") {
            //     console.log(window);
            //     window.location.href = $(overIframe).attr("src");
            // }

        });
        ifch[i].addEventListener("mouseover", (e) => {
            if (window.name === "iframe_main") {
                overIframe = e.currentTarget;
                $(e.currentTarget).removeClass("iframe_out").addClass("iframe_over");
                console.log("over!");
            }
            console.log(overIframe);
        });
        ifch[i].addEventListener("mouseout", (e) => {
            if (window.name === "iframe_main") {
                overIframe = null;
                $(e.currentTarget).removeClass("iframe_over").addClass("iframe_out");
                console.log("out!");
            }
            console.log(overIframe);
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