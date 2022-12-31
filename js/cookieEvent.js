// 一度見たページのデザインを変える
var times_visited = 0;

// 描画されたとき
$(window).on("load", function () {
    console.log("load!");
    if (Cookies.get("visited-" + window.location.pathname) != null) {
        $("body").removeClass("body_unread").addClass("body_read");
    } else {
        $("body").removeClass("body_read").addClass("body_unread");
    }
});

// iframe_mainの表示から外れたとき
$(window).on("unload", function () {
    if (window.parent === window.top) {
        console.log("unload!" + window.location.pathname);
        times_visited += 1;
        if (Cookies.get("visited-" + window.location.pathname) == null) {
            Cookies.set("visited-" + window.location.pathname, times_visited);
        }
    }
});