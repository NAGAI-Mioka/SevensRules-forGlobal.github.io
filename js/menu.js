$(document).ready(function () {
    $(".button_back").on("click", function () {
        history.back();
    });
    $(".button_up").on("click", function () {
        window.location.href = "../index.html";
    });
});