$(document).ready(function () {

	$("#homelink").click(function() {
		$('html, body').animate({
			scrollTop: 0
		},500);
		return false;
	});

	$("#orglink").click(function() {
		$('html, body').animate({
		   	scrollTop: $("#org").offset().top
		},500);
		return false;
	});

	$("#memslink").click(function() {
		$('html, body').animate({
		   	scrollTop: $("#mems").offset().top
		},500);
		return false;
	});

	$("#eventslink").click(function() {
		$('html, body').animate({
		   	scrollTop: $("#events").offset().top
		},500);
		return false;
	});

	$("#sponsorslink").click(function() {
		$('html, body').animate({
		   	scrollTop: $("#sponsors").offset().top
		},500);
		return false;
	});

	$("#contactlink").click(function() {
		$('html, body').animate({
		   	scrollTop: $("#contact").offset().top
		},500);
		return false;
	});

});