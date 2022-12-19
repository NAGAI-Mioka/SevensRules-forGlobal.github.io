$(document).ready(function () {
    $(".iframe_child").iframeTracker({
        blurCallback: function (event) {
            //var src = $(this).attr("src");
            //alert("iframe click!");
            //console.log(src);
            console.log($(this._overElement).attr("src"));
            window.location.href = $(this._overElement).attr("src");
        },
        overCallback: function (element, event) {
            this._overElement = $(element);
            $(element).removeClass("iframe_out").addClass("iframe_over");
        },
        outCallback: function (element, event) {
            this._overElement = null;
            $(element).removeClass("iframe_over").addClass("iframe_out");
        },
        _overElement: null
    });
});