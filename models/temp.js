(function(model)
{
	
	var mongoose = require("mongoose");

	model = mongoose.model("Temp", {
	    name : { type : String, default: "" }
	});

})(module.exports);