$(document).ready(function() {
	console.log("clarinet script loaded...");	

	$(".clarinet-note-buttons").on("click", function() {
		$(".overlay").hide();
		switch($(this).attr("id")) {
		    case "button-clarinet-C":
		    	console.log("C note");
		    	$("#img-clarinet-C").show();
				break;
		    case "button-clarinet-D":
		    	console.log("D note");
		    	$("#img-clarinet-D").show();
		    	break;    
		  	case "button-clarinet-E":
		    	$("#img-clarinet-E").show();
		    	break;
		  	case "button-clarinet-F":
		    	$("#img-clarinet-F").show();
		    	break;
			// var notes = {
			// 	"button-clarinet-C": "$('#img-clarinet-C').show();",
			// 	"button-clarinet-D": "$('#img-clarinet-D').show();"
			// };
			// if (notes[$(this).attr("id")]) {
			// 	notes[$(this).attr("id")]();
			// }
		}
	});
})
