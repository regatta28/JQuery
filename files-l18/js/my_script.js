$(document).ready(function(){
    $("h2").removeClass("underline");
    $("nav").removeClass("border");
    $("h2").addClass("underline");

// $(document).ready(function(){
//     $("tr:odd").css("background-color", "red");
//     $("tr:even").css("background-color", "pink");
// })
// $("p").click(function(){
//    $("p").css("color", "red");
// });

$("th").click(function(){
    $("tr").children().removeClass("highlight");
    $(this).siblings().addClass("highlight");    
});

});