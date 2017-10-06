var legoData = require("../data/legoData.js");

module.exports = function(app){

    app.get("/legos",function(req,res){
        //receive data from html fields
        //res.json(legoData);
        console.log('app.get');
        res.render("index",legoData);

    });     //end of get


    app.post("/legos", function(req, res) {

        console.log('app.post')
  //      console.log(req.body);
        legoData.push(req.body);
        console.log('lego array: '+legoData);
        
            // legoData.id[legoData.length-1] = legoData.length-1;
            
            //     for (var i=0; i< legoData.length; i++){
            //         if(!legoData[i].built){
            //             listItems.dataArray.push(legoData[i]);
            //         }else{
            //             listItems.doneArray.push(legoData[i]);
            //         }
            //     }


         res.render("index",legoData);
      }); //end of post

};     // end of function