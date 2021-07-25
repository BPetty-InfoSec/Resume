$(document).ready(function() {
    $.fn.doRender = function() {
        if($(window).width() <= 720) {
            $("summary").css("font-size","175%");
            $("details").removeAttr("open");
            $("#skills").css("display", "block");
            $("#sidebar-bottom h2").css("margin-left", "auto");
            $("#sidebar-bottom h2").css("margin-right", "auto");
            $("#sidebar-bottom h2").replaceWith(function () {
                return "<h4>CONTACTS</h4>";
            });
            $(".namesection").css("transform", "rotate(0deg)");
            $(".namesection").css("transform", "translate(-10%");
            $(".namesection").css("text-align", "center");
        } else {
            $("summary").css("font-size","100%");
            $("details").attr("open","open");
            $("#skills").css("display", "flex");
            $("#sidebar-bottom h4").replaceWith(function () {
                return "<h2>CONTACTS</h2>";
            });
            $(".namesection").css("transform", "translate(-10%, 65%) rotate(-90deg)");
        }
    }
    $("body").attr("height",function() {
        return $(window).height();
    });
    $.fn.doRender();

    $(window).resize(function() {
        $.fn.doRender();
    });
});
