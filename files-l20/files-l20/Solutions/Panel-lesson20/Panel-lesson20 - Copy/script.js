$(document).ready(function(){
 /*  $(".container").click(function(){
	$(this).siblings().fadeTo(1000,0.1);
   });*/
  // $(".superButton").click(function(){
	// $("#panel .container").siblings().fadeTo(1000,1);
  //  });
  //  $(".theButton").click(function(){
  //   var col = $(this).css('background-color');
	// $('.superButton').css('background-color',col);

  //  });
 /*  $(".theButton").mouseenter(function(){
	$(this).addClass("makeBlack");
   });
     $(".theButton").mouseout(function(){
	$(this).removeClass("makeBlack");
   });*/

  //  $(".theButton").click(function(){
  //     $(".container").siblings().hide();
  //  });
  // $(".theButton").click(function(){
  //   $(this).hide();
  // });
  $(".theButton").click(function(){
    $(".container").siblings().fadeTo(1000, .1);
  });
  $(".superButton").click(function(){
    $(".container").fadeTo(1000, 1);
  });
  $(".theButton").mouseenter(function(){
    $(this).addClass("makeBlack");
  });
  $(".theButton").mouseleave(function(){
    $(this).removeClass("makeBlack");
  });



});