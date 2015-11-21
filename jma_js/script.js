$(document).ready(function () {

	$("#titlelink").click(function() {
		$('html, body').animate({
			scrollTop: 0
		},500);
		return false;
	});

	$("#mppslink").click(function() {
		$('html, body').animate({
		   	scrollTop: $("#mpps").offset().top
		},500);
		return false;
	});

	$("#ruleslink").click(function() {
		$('html, body').animate({
		   	scrollTop: $("#rules").offset().top
		},500);
		return false;
	});

	$("#tipslink").click(function() {
		$('html, body').animate({
		   	scrollTop: $("#tips").offset().top
		},500);
		return false;
	});

	$("#toolslink").click(function() {
		$('html, body').animate({
		   	scrollTop: $("#tools").offset().top
		},500);
		return false;
	});

});