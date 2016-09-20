$(document).ready(function() {
	console.log("clarinet script loaded...");	

	$(".clarinet-note-buttons").on("click", function() {
		$(".overlay").hide();
		switch($(this).attr("id")) {
		    case "button-clarinet-C":
		    	console.log("C note");
		    	$("#img-clarinet-C").show();
				break;
		    case "button-clarinet-C#":
		    	console.log("C# note");
		    	$("#img-clarinet-Csharp").show();
				break;
		    case "button-clarinet-D":
		    	console.log("D note");
		    	$("#img-clarinet-D").show();
		    	break;    
		    case "button-clarinet-D#":
		    	console.log("D# note");
		    	$("#img-clarinet-Dsharp").show();
				break;
		  	case "button-clarinet-E":
		    	$("#img-clarinet-E").show();
		    	break;
		  	case "button-clarinet-F":
		    	$("#img-clarinet-F").show();
		    	break;
		    case "button-clarinet-F#":
		    	console.log("F# note");
		    	$("#img-clarinet-Fsharp").show();
				break;		
			// No case for "G"; played open
		    case "button-clarinet-G#":
		    	console.log("G# note");
		    	$("#img-clarinet-Gsharp").show();
				break;
		    case "button-clarinet-A":
		    	console.log("A note");
		    	$("#img-clarinet-A").show();
				break;

		    case "button-clarinet-A#":
		    	console.log("A# note");
		    	$("#img-clarinet-Asharp").show();
				break;

		    case "button-clarinet-B":
		    	console.log("B note");
		    	$("#img-clarinet-B").show();
				break;

		// angularLoad.loadScript('./app/scripts/clarinet-script.js').then(function() {
		//     // Script loaded succesfully.
		//     // We can now start using the functions from someplugin.js
		//     console.log("Success!");
		// }).catch(function() {
		//     // There was some error loading the script. Meh
		//     console.log("Boo!");
		// });
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
