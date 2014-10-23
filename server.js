var express 	= require("express"),
	http 		= require("http"),
	path 		= require("path"),
	app 		= express();

app.set("port", process.env.PORT || 3000); //80
app.set("view engine", "html");

app.use(express.static(path.join(__dirname, "public")));

if ("development" == app.get("env"))
{
    // TODO
} 

var routes = require("./routes");

routes.init(app);

http.createServer(app).listen(app.get("port"), function()
{
    console.log("Express server listening on port " + app.get("port"));
});