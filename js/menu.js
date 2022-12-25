$(document).ready(function () {
    $(".button_back").on("click", function () {
        history.back();
    });
    $(".button_up").on("click", function () {
        var url = window.location.href;
        var ary = url.split("/");
        var str = ary[ary.length - 2] + "/" + ary[ary.length - 1];
        var rep = url.replace(str, "contents.html");
        window.location.href = rep;
    });
    $(".button_top").on("click", function () {
        window.location.href = "https://nagai-mioka.github.io/SevensRules-forGlobal.github.io/index.html";
    });
});