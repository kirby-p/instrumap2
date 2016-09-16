$(document).ready(function() {
	console.log("clarinet script loaded...");	

	$(".clarinet-note-buttons").on("click", function() {
	  switch($(this).attr("id")) {
	    case "clarinet-C":
	      console.log("C note for Clarinet");
	      break;
	    case "clarinet-D":
	      console.log("D note for Clarinet");
	      break;    
	  	case "clarinet-E":
	      console.log("E note for Clarinet");
	      break;
	  }
	})
})
