// 一度見たページのデザインを変える

// 描画されたとき
$(window).on("load", function () {
    if (Cookies.get("visited-" + window.location.pathname) != null) {
        $("body, h1").removeClass("unvisited").addClass("visited");
    } else {
        $("body, h1").removeClass("visited").addClass("unvisited");
    }

    // iframe_mainに表示されているとき、ドロップダウンメニューを避ける
    if (window.parent === window.top) {
        $("body.contents").prop("padding", "25px 20px 10px 20px");
    } else {
        $("body.contents").prop("padding", "0px 20px 10px 20px");
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