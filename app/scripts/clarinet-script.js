$(document).ready(function() {
	console.log("clarinet script loaded...");	

	$(".clarinet-note-buttons").on("click", function() {
      $(".overlay").hide();
	  switch($(this).attr("id")) {
	    case "button-clarinet-C":
	      $("#img-clarinet-C").show();
	      break;
	    case "button-clarinet-D":
	      $(".overlay").hide();
	      break;    
	  	case "button-clarinet-E":
	      $(".overlay").css("display", "hidden");
	      break;
	  }
	})
})
