// 一度見たページのデザインを変える

// 描画されたとき
$(window).on("load", function () {
    var path = window.location.pathname.replace(/\//g, "-");
    if (Cookies.get("visited-" + path) === "true") {
        $("body, h1").removeClass("unvisited").addClass("visited");
    } else {
        $("body, h1").removeClass("visited").addClass("unvisited");
    }

    // ツールチップiframeを表示する
    if (window.parent === window.top) {
        $("p a, dt a, dd a, li a").not("ul.ul_menuBar a").hover(
            function () {
                href = $(this).attr("href");
                $(this).css("position", "relative");
                $(this).append('<div id="tooltip"><iframe src="' + href + '"></iframe></div>')
            },
            function () {
                $("#tooltip").remove();
                $(this).css("position", "static");
            }
        );
    }
});

// iframe_mainの表示から外れたとき
$(window).on("unload", function () {
    if (window.parent === window.top) {
        var path = window.location.pathname.replace(/\//g, "-");
        if (Cookies.get("visited-" + path) == null) {
            Cookies.set("visited-" + path, "true");
        }
    }
});

