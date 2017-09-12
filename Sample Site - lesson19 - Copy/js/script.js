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

    $("a").hover(function(){
        $("body").addClass("bodycolor_change");
    });
    $("a").mouseleave(function(){
        $("body").addClass("bodycolor_grey");
    });

}); 
