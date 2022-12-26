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
});