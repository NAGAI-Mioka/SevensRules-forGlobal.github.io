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
                $(elem).parent().removeClass("menu_li_close menu_li_open_parent").addClass("menu_li_open");
                var parentUl = $(elem).closest("ul");
                while (!$(parentUl).hasClass("ul_menuBar")) {
                    $(parentUl).parent().removeClass("menu_li_close menu_li_open").addClass("menu_li_open_parent");
                    parentUl = $(parentUl).parents("ul").first();
                }
            } else {
                $(elem).parent().removeClass("menu_li_open menu_li_open_parent").addClass("menu_li_close");
            }
        });
        $(".ul_menuBar > li").each(function () {
            $(this).find(".menu_li_open , .menu_li_open_parent").show();
            $(this).find(".menu_li_open , .menu_li_open_parent").parent().show();
            $(this).find(".menu_li_close").hide();
            $(this).find(".menu_li_close").parent().hide();
        });
    });

    $(".ul_menuBar li").on("mouseenter", function () {
        $(this).siblings().find("ul").hide(); // 兄弟liの子孫にいるulを全て非表示にする
        $(this).children().slideDown(150); // 自分の直下の子ulを表示する（スライド）
    });
    $(".ul_menuBar").on("mouseleave", function () {
        //$(".ul_menuBar ul").slideUp(150);
        $(this).find("ul").slideUp(150); // 2列目以降の全てのulを非表示にする（スライド）
        $(".ul_menuBar > li").each(function () {
            $(this).find(".menu_li_open , .menu_li_open_parent").show();
            $(this).find(".menu_li_open , .menu_li_open_parent").parent().show();
            $(this).find(".menu_li_close").hide();
            $(this).find(".menu_li_close").parent().hide();
        });
    });
});