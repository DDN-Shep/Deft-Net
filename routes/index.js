(function(routes)
{
	
    var home = require("./home"),
    	path = require("path"),
    	views = { 
    		root: path.join(__dirname, "../views") 
    	};

    routes.init = function(app)
    {
        console.log("Initialise routes");

        home.init(app, views);
    };

})(module.exports);