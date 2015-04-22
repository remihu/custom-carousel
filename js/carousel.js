$(document).ready(function(){

	var slideWidth = $(".slide").width(),
	    numOfSlides = $(".slide").size(),
	    positionNum = 0,
	    slideSpeed = 400;

	//set the width of div#tray
	$("#tray").width(slideWidth * numOfSlides);

	$("a.next").click(function(event){

		//update positionNumber
		positionNum += 1;
		//calculate distance to move
		var distance = positionNum * slideWidth;
		//animate the #tray
		$("#tray").animate({
			right: distance
		}, slideSpeed);

		event.preventDefault();
	});

	$("a.prev").click(function(event){

		//update positionNumber
		positionNum -= 1;
		//calculate distance to move
		var distance = positionNum * slideWidth;
		//animate the #tray
		$("#tray").animate({
			right: distance
		}, slideSpeed);

		event.preventDefault();
	});

});