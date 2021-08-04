$(document).ready(function() {
    $.fn.doRender = function() {
        if($(window).width() <= 600) {
            $("details").removeAttr("open");
        } else {
            $("details").attr("open","open");
        }
        if($(window).width() <= 450) {
            $(".resumelink").text("Resume");
            $(".maillink").text("EMail");
            $(".githublink").text("GitHub");
            $(".twitterlink").text("Twitter");
            $(".linkedinlink").text("LinkedIn")
        } else {
            $(".resumelink").text("https://resume.bpetty.tech");
            $(".maillink").text("bwpetty@protonmail.com");
            $(".githublink").text("@BPetty-InfoSec");
            $(".twitterlink").text("@BPetty_InfoSec");
            $(".linkedinlink").text("/bwpetty")
        }
    }
    
    $(window).resize(function() {
        $.fn.doRender();
    });

    if($(window).width() <= 600) {
        $.fn.doRender();
    }
});
