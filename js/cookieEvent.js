// 一度見たページのデザインを変える

// 描画されたとき
$(window).on("load", function () {
    if (Cookies.get("visited-" + window.location.pathname) != null) {
        $("body, h1").removeClass("unvisited").addClass("visited");
    } else {
        $("body, h1").removeClass("visited").addClass("unvisited");
    }
});

// iframe_mainの表示から外れたとき
$(window).on("unload", function () {
    if (window.parent === window.top) {
        if (Cookies.get("visited-" + window.location.pathname) == null) {
            Cookies.set("visited-" + window.location.pathname, "true");
        }
    }
});

$(document).ready(function () {
    $("p a").hover(
        function () {
            console.log("iframe ToolTip!");
            $(this).css("position", "relative");
            $(this).append('<div id="tooltip"><iframe src="https://nagai-mioka.github.io/SevensRules-forGlobal.github.io/page-game/contents.html"></iframe></div>')
        },
        function () {
            $("#tooltip").remove();
            $(this).css("position", "static");
        }
    );
});