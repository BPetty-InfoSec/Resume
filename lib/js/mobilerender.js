$(document).ready(function() {
    $.fn.doRender = function() {
        if($(window).width() <= 720) {
            $("summary").css("font-size","175%");
            $("details").removeAttr("open");
            $("aside").css("width",("200px"));
            $("#skills").css("display", "block");
            $("#sidebar-bottom h2").css("margin-left", "auto");
            $("#sidebar-bottom h2").css("margin-right", "auto");
            $("#sidebar-bottom h2").replaceWith(function () {
                return "<h4>CONTACTS</h4>";
            });
            $(".namesection").css("transform", "rotate(0deg)");
            //$(".namesection").css("transform", "translate(-10%");
            $(".namesection").css("text-align", "center");
        } else {
            $("summary").css("font-size","100%");
            $("details").attr("open","open");
            $("aside").css("width","15%");
            $("aside").css("max-width", "250px");
            $("#skills").css("display", "flex");
            $("#sidebar-bottom h4").replaceWith(function () {
                return "<h2>CONTACTS</h2>";
            });
            $(".namesection").css("transform", "rotate(-90deg)");
            //$(".namesection").css("transform", "translate(-10%, 65%)")
        }
    }
    
    $(window).resize(function() {
        $.fn.doRender();
    });
});
