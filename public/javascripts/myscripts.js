$(document).ready(function() {

	// handle the danger button
	$("#dangerButton").click(function() {
		$("body").addClass("animated hinge").delay(3000).queue(function(){
			$(this).removeClass("animated hinge");
			$(this).addClass("animated zoomInUp");		
			$("#dangerButton").text("You CAN'T kill me! XD");
			$("#dangerButton").prop('disabled', true);
			$(this).dequeue();
		});
	});

});