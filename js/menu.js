$(document).ready(function () {
    $(".button_back").on("click", function () {
        history.back();
    });
    $(".button_up").on("click", function () {
        var url = window.location.href;
        var ary = url.split("/");
        var str = ary[ary.length - 2] + "/" + ary[ary.length - 1];
        var rep = url.replace(str, "index.html");
        window.location.href = rep;
    });
});