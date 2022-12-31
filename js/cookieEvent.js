var iframe_main = document.getElementById("iframe_main");

$(window).on("load", function () {
    if (window.parent === window.top) {
        console.log("load!");
        if (Cookies.get("is_read") === "true") {
            $("body").removeClass("body_unread").addClass("body_read");
        } else {
            $("body").removeClass("body_read").addClass("body_unread");
        }
    }
});

$(window).on("unload", function () {
    if (window.parent === window.top) {
        console.log("unload!");
        Cookies.set("is_read", "true");
    }
});