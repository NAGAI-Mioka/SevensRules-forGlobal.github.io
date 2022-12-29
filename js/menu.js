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

        // メニューバー：現在開いているページの項目のみ残す
        $(".ul_menuBar").find("ul").hide();
        $(".ul_menuBar li li.menu_li_close").hide();
        $(".ul_menuBar li li.menu_li_open_parent").show();
        $(".ul_menuBar li li.menu_li_open").show();
        $(".ul_menuBar li li.menu_li_open_parent").parent().show();
        $(".ul_menuBar li li.menu_li_open").parent().show();
    });

    // メニューバーの最上位の項目にカーソルオンすると開く
    $(".ul_menuBar > li").on("mouseover", function () {
        //$(".ul_menuBar a").css("pointer-events", "auto");
        $(this).siblings().find("ul").hide(); // 兄弟liの子孫にいるulを全て非表示にする
        //$(this).siblings().hide(); // 兄弟liを全て非表示にする
        $(this).children().children().show(); // 自分の直下のliを表示する
        $(this).children().show(); // 自分の直下のulを表示する（スライド）
    });

    $(".ul_menuBar > li li").on("mouseover", function (e) {
        //e.stopPropagation();
        $(this).siblings().find("ul").hide(); // 兄弟liの子孫にいるulを全て非表示にする
        $(this).siblings().hide(); // 兄弟liを全て非表示にする
        $(this).children().children().show(); // 自分の直下のliを表示する
        $(this).children().show(); // 自分の直下のulを表示する（スライド）

    });

    // メニューバーからカーソルアウトすると閉じる（現在開いているページの項目のみ残す）
    $(".ul_menuBar").on("mouseout", function () {
        $(".ul_menuBar").find("ul").hide();
        $(".ul_menuBar li li.menu_li_close").hide();
        $(".ul_menuBar li li.menu_li_open_parent").show();
        $(".ul_menuBar li li.menu_li_open").show();
        $(".ul_menuBar li li.menu_li_open_parent").parent().show();
        $(".ul_menuBar li li.menu_li_open").parent().show();
    });

    /*
    $(document).on("click", function (e) {
        if ($(e.target).closest(".ul_menuBar").length) {
            // メニューバーをクリックしたら
        } else {
            // メニューバー以外をクリックしたら
            //$(".ul_menuBar a").css("pointer-events", "none");
            $(".ul_menuBar").find("ul").hide();
            $(".ul_menuBar li li.menu_li_close").hide();
            $(".ul_menuBar li li.menu_li_open_parent").show();
            $(".ul_menuBar li li.menu_li_open").show();
            $(".ul_menuBar li li.menu_li_open_parent").parent().show();
            $(".ul_menuBar li li.menu_li_open").parent().show();
        }
    });
    */
});