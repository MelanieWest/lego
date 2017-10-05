var legoData = require("../data/legoData.js");
var listItems = {dataArray: [],doneArray: []};

module.exports = function(app){

    app.get("/legos",function(req,res){
        //receive data from html fields
        //res.json(legoData);

        res.render("index",listItems);

//this is extra output, to test data
        // var legoJSON = JSON.stringify(legoData);
        // console.log(legoData);
    });     //end of get


    app.post("/legos", function(req, res) {

//if entering for the first time, set tableData[thisindex].built to false.
//if the built button was pressed, set tableData[thisindex].built to true 

            console.log(req.body);
            legoData.push(req.body);

             
                for (var i=0; i< legoData.length; i++){
                    if(!legoData[i].built){
                        listItems.dataArray.push(legoData[i]);
                    }else{
                        listItems.doneArray.push(legoData[i]);
                    }
                }

        console.log(listItems);
        res.json(listItems);

         res.render("index",listItems);
      }); //end of post

};     // end of function