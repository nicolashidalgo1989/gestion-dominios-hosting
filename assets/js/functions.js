$(document).on('click', 'a.global', function(event){
    event.preventDefault(); 
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
});
$(document).ready(function(){
	var imagen=$(".carousel").find("img").attr("src");
	$(".carousel").css(
		"background-image","url("+imagen+")"
	);
});