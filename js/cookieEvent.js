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
        $("a").not("ul.ul_menuBar a").hover(
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

    // 子iframeとして読み込まれたとき
    if (window.parent !== window.top) {
        // ドキュメント全体のカーソル表示を指にする
        window.document.body.style.cursor = "pointer";
    }

    var win_ifmain = window.top.document.getElementById("iframe_main").contentWindow; // iframe_mainのウィンドウを取得
    $("a").on("click", function (event) {
        event.preventDefault();
        // index.htmlもしくはiframe_mainの中に表示されているとき
        if (window.parent === window.top) {
            win_ifmain.location.href = $(this).attr("href");
        }
    });
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

