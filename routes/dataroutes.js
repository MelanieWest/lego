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


    app.post("/", function(req, res) {

        console.log('app.post')
  //      console.log(req.body);

        // false was coming back as a string; make sure it's boolean
        req.body.built = false;
        //it also returns quotes around property names- try to remove quotes:
        //req.body = req.body.replace(/\"([^(\")"]+)\":/g,"$1:");

        legoData.push(req.body);
        var dataArray = JSON.stringify(legoData)
        console.log('lego array seen by post: '+ dataArray);

        res.redirect("/");

      }); //end of post



app.get("/api/legos",function(req,res){
        //console.log(req.body);
        res.send(legoData);
        //res.render("test",legoData);     
});


};     // end of function