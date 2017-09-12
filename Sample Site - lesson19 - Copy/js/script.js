$(document).ready(function() {
    

    $("p").click(function(){
        $("p").addClass("highlight_text");
    });
  
    $("h2").hover(function(){
        $("h2").addClass("hover_color");
    });

    $("#hr_html").hover(function(){
        $("#hr_html").addClass("font_increase");
    });

    $("button").hover(function(){
        $("body").addClass("bodycolor_change");
    });
    $("button").mouseleave(function(){
        $("body").addClass("bodycolor_grey");
    });
    $("#button1").hide(500);
    $("#button2").click(function(){
        $("#paragraph2").slideToggle();
        });
    $("#button3").mouseenter(function(){
        $("#button3").fadeTo(1000, 0.5);
    });
    $("#button3").mouseleave(function(){
        $("#button3").fadeTo(1000, 1);
    });

}); 
