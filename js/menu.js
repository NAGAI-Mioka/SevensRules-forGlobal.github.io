var iframe_main = document.getElementById("iframe_main");

$(document).ready(function () {
    $(".button_back").on("click", function () {
        history.back();
    });
    $(".button_up").on("click", function () {
        var url = iframe_main.contentWindow.location.href;
        if (url !== "https://nagai-mioka.github.io/SevensRules-forGlobal.github.io/contents.html") {
            var ary = url.split("/");
            var str = ary[ary.length - 2] + "/" + ary[ary.length - 1];
            var rep = url.replace(str, "contents.html");
            iframe_main.contentWindow.location.href = rep;
        }
    });
    $(".button_top").on("click", function () {
        iframe_main.contentWindow.location.href = "https://nagai-mioka.github.io/SevensRules-forGlobal.github.io/contents.html";
    });

    $(iframe_main).on("load", function () {
        $(".ul_menuBar a").each(function (i, elem) {
            if ($(elem).attr("href") === iframe_main.contentWindow.location.href) {
                $(elem).removeClass("menu_a_close").addClass("menu_a_open");
                var parent = $(elem).parent();
                while (!$(parent).hasClass("section")) {
                    if (parent.tagName === "A") {
                        $(parent).removeClass("menu_a_close").addClass("menu_a_open_parent")
                    }
                    parent = parent.parent();
                }
            } else {
                $(elem).removeClass("menu_a_open menu_a_open_parent").addClass("menu_a_close");
            }
        });
    });
});