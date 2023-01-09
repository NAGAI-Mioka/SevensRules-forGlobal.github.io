var iframe_main = document.getElementById("iframe_main");

$(document).ready(function () {
    // 「戻る」ボタンを押したとき
    $(".button_back").on("click", function () {
        history.back();
    });

    // 「TOPへ」ボタンを押したとき
    $(".button_top").on("click", function () {
        iframe_main.contentWindow.location.href = "https://nagai-mioka.github.io/SevensRules-forGlobal.github.io/contents.html";
    });

    // ページ更新でクッキー全削除
    const cks = document.cookie.split(';')
    for (let i = 0; i < cks.length; i++) {
        const ck = cks[i].trim();
        const content = ck.split('=');
        Cookies.remove(content[0]);
    }

    // ドロップダウンメニューに関する処理
    $(iframe_main).on("load", function () {
        $(".ul_menuBar a").each(function (i, elem) {
            if ($(elem).attr("href") === iframe_main.contentWindow.location.href) {
                // 現在iframe_mainで開いているページに対応するメニューの項目について
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

        // メニュー：現在開いているページの項目のみ残す
        $(".ul_menuBar").find("ul").hide();
        $(".ul_menuBar li li.menu_li_close").hide();
        $(".ul_menuBar li li.menu_li_open_parent").show();
        $(".ul_menuBar li li.menu_li_open").show();
        $(".ul_menuBar li li.menu_li_open_parent").parent().show();
        $(".ul_menuBar li li.menu_li_open").parent().show();
    });

    // メニューの項目にカーソルが入った時
    $(".ul_menuBar li").on("mouseover", function (e) {
        $(this).siblings().find("ul").hide(); // 兄弟liの子孫にいるulを全て非表示にする
        $(this).children().children().show(); // 自分の直下のliを表示する
        $(this).children().show(); // 自分の直下のulを表示する
    });

    // メニューからカーソルアウトすると閉じる（現在開いているページの項目のみ残す）
    $(".ul_menuBar").on("mouseout", function () {
        $(".ul_menuBar").find("ul").hide();
        $(".ul_menuBar li li.menu_li_close").hide();
        $(".ul_menuBar li li.menu_li_open_parent").show();
        $(".ul_menuBar li li.menu_li_open").show();
        $(".ul_menuBar li li.menu_li_open_parent").parent().show();
        $(".ul_menuBar li li.menu_li_open").parent().show();
    });


});