const path = require("path");

//this path isn't used.  it is commented out in the server

module.exports = function(app){

    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/test.html"));
    });

};