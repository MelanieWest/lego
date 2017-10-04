var legoData = require("../data/legoData.js");

module.exports = function(app){

    app.get("/api/legos",function(req,res){
        //receive data from html fields
        //res.json(legoData);
        var listItems = {dataArray: []};
        for (var i=0; i< legoData.length; i++){
            if(!legoData[i].built){
                listItems.dataArray.push(legoData[i]);
            }
        }
        res.render("index",listItems);

        var legoJSON = JSON.stringify(legoData);
        console.log(legoData);
    });     //end of get

 


    app.post("/api/legos", function(req, res) {

//if entering for the first time, set tableData[thisindex].built to false.
//if the built button was pressed, set tableData[thisindex].built to true 

          tableData.push(req.body);

      }); //end of post

};     // end of function