(function(test)
{

    test.init = function(app, views)
    {
        console.log("Initialise test controller");

        app.get("/test", function(req, res)
        {
            res.sendFile("test.html", views);
        });
    };

})(module.exports);