$(document).ready(function() {
 

 	$("#stream1_btn").on("click", function() {
 		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream1").addClass('highlight_stream');
	});
	$("#stream2_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream2").addClass('highlight_stream');
	});
	$("#stream3_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream3").addClass('highlight_stream');
	});
	$("p").on("click", function(){
		$("p").children("a").css("background-color", "yellow");
	});
	$("img").click(function(){
		$(this).next().children("p").slideDown();
	});
	$(".card").click(function(){
		$(this).toggleClass("highlight");
	});
	$("#select").click(function(){
		$(".card:not(.highlight)").hide();
	});
	$("#all").click(function(){
		$(".card").show();
	});


}); 
