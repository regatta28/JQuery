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

    // $("button").hover(function(){
    //     $("body").addClass("bodycolor_change");
    // });
    // $("button").mouseleave(function(){
    //     $("body").addClass("bodycolor_grey");
    // });
    // $("#button1").hide(500);
    $("#button2").click(function(){
        $("#paragraph2").slideToggle();
        });
    $("#button3").mouseenter(function(){
        $("#button3").fadeTo(1000, 0.5);
    });
    $("#button3").mouseleave(function(){
        $("#button3").fadeTo(1000, 1);
    });
    $("#button1").mouseenter(function(){
        $("#button1").removeClass("makeRed").addClass("makeBorder");
    });
    $("#button1").mouseleave(function(){
        $("#button1").removeClass("makeBorder").addClass("makeRed");
    });
    $("#button1").click(function(){
        $("p").slideToggle();
    });
    $("#button1").click(function(){
        $("#button1").hide("slow").show("slow");
    });
    $("#button1").click(function(){
        $("#button1").fadeOut("slow").fadeIn("slow");
    });
    $(".stream_nav").on("click", function() {
        var elementId = $(this).attr("id");
        var cardNames = $(".card").attr("class").split(" ");
         if ($("." + elementId).css("background-color") == "rgb(235, 82, 85)") {
            $("." + elementId).css("background-color", "#fff");
        } else {
            $("." + cardNames).css("background-color", "#fff");
            $("." + elementId).css("background-color", "rgb(235, 82, 85)");
        }
    });

    
   

    

}); 
