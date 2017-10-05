var legoData = require("../data/legoData.js");

module.exports = function(app){

    app.get("/api/legos",function(req,res){
        //receive data from html fields
        //res.json(legoData);
        var listItems = {dataArray: [],doneArray: []};

//listItems go on the left, as 'unbuilt' legos;
//doneItems go on the right, after being 'built'

        for (var i=0; i< legoData.length; i++){
            if(!legoData[i].built){
                listItems.dataArray.push(legoData[i]);
            }else{
                listItems.doneArray.push(legoData[i]);
            }
        }

        // can I 'render' more than one variable at a time?

        res.render("index",listItems);

//this is extra output, to test data
        var legoJSON = JSON.stringify(legoData);
        console.log(legoData);
    });     //end of get

 


    app.post("/api/legos", function(req, res) {

//if entering for the first time, set tableData[thisindex].built to false.
//if the built button was pressed, set tableData[thisindex].built to true 

          tableData.push(req.body);

      }); //end of post

};     // end of function