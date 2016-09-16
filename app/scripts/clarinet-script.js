$(document).ready(function() {
	console.log("clarinet script loaded...");	

	$(".clarinet-note-buttons").on("click", function() {
	  switch($(this).attr("id")) {
	    case "button-clarinet-C":
	      $("#img-clarinet-C").css("display", "block");
	      break;
	    case "button-clarinet-D":
	      console.log("D note for Clarinet");
	      break;    
	  	case "button-clarinet-E":
	      console.log("E note for Clarinet");
	      break;
	  }
	})
})
