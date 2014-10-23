(function(home)
{

    home.init = function(app, views)
    {
        console.log("Initialise home controller");

        app.get("/", function(req, res)
        {
            res.sendFile("index.html", views);
        });
    };

})(module.exports);