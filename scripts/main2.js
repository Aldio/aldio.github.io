//height & width
var h = $(window).height() - 64;
var w = $(window).width();

//presize svgs
$("svg").attr("width", w);
$("svg").attr("height", h);

$(window).on('resize', function(){
	h = $(window).height() - 64;
	w = $(window).width();
	$("svg").attr("width", w);
	$("svg").attr("height", h);
});

$( document ).ready(function() {

});
