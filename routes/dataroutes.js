var legoData = require("../data/legoData.js");

module.exports = function(app){

    app.get("/",function(req,res){
       
        //res.json(legoData);
        console.log('app.get');
        var dataArray = JSON.stringify(legoData)
        var dataRender ={data:legoData};
        console.log('lego data seen by get: '+ dataArray);
        
        res.render("index", dataRender);
 
});     //end of get


    app.post("/legos", function(req, res) {

        console.log('app.post')
  //      console.log(req.body);
        legoData.push(req.body);
        var dataArray = JSON.stringify(legoData)
        console.log('lego array seen by post: '+ dataArray);

        res.redirect("/");

      }); //end of post

};     // end of function