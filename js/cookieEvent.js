var iframe_main = document.getElementById("iframe_main");

$(iframe_main).on("load", function () {
    console.log("load!");
    if (Cookies.get("is_read") === "true") {
        $("body").removeClass("body_unread").addClass("body_read");
    } else {
        $("body").removeClass("body_read").addClass("body_unread");
    }
});

$(iframe_main).on("unload", function () {
    console.log("unload!");
    Cookies.set("is_read", "true");
});