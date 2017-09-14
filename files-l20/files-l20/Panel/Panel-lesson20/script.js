$(document).ready(function(){
 
// $(".theButton").click(function(){
//     $("#panel .container").siblings().hide();
// });
// $(".theButton").click(function(){
//     $(this).hide();
// });
// $(".thebutton").click(function(){
//     $(this).siblings().fadeTo(1000, .5);
// });
 $(".theButton").click(function(){
     var resetText = $(this).css("background-color");
     $(".superButton").text(resetText);
     
    });


});