// 一度見たページのデザインを変える

// 描画されたとき
$(window).on("load", function () {
    console.log("load!");
    if (Cookies.get("is_read") === "true") {
        $("body").removeClass("body_unread").addClass("body_read");
    } else {
        $("body").removeClass("body_read").addClass("body_unread");
    }
});

// iframe_mainの表示から外れたとき
$(window).on("unload", function () {
    if (window.parent === window.top) {
        console.log("unload!" + window.location.href);
        Cookies.set("is_read", "true", { path: "/page-game/contents.html" });
    }
});