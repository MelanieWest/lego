var legoData = require("../data/legoData.js");

module.exports = function(app){

    var dataRender = {data:legoData};
    var dataArray  = JSON.stringify(legoData);

    app.get("/",function(req,res){
       
        //res.json(legoData);
        console.log('app.get');
        if(!legoData.length){
            dataArray = JSON.stringify(legoData)
            console.log('lego data seen by get: '+ dataArray);
        }
        
        res.render("index", dataRender);
 
});     //end of get


    app.post("/", function(req, res) {

        console.log('app.post')
        console.log(req.body);

        //set data values for insertion into object array
        req.body.built = false;     //it was reading as a string
        req.body.id = (legoData.length)+1;    //array length viewable here

        var lego = {
            id:  legoData.length +1,
            object:  req.body.object,
            built:  false
        };

        if (legoData[(legoData.length-1)].object ==""){
            //if the previous entry was blank
            lego.id = legoData.length;
            legoData[(legoData.length-1)] = lego;
        }else{
            //legoData.push(req.body);
            legoData.push(lego);
        }


 
        
        dataArray = JSON.stringify(legoData)
        console.log('lego array seen by post: '+ dataArray);

        res.redirect("/");

      }); //end of post

app.post("/move",function(req,res){
    console.log('move');        //this never logs
    for (var i=0; i<legoData.length; i++){
        if(req.body.object = dataRender.data[i].object){
            console.log("they're the same!");
            dataRender.data[i].built = true;
        }
    }
    res.render("index", dataRender);
    
})

app.get("/api/legos",function(req,res){
        //console.log(req.body);
        res.send(legoData);
        //res.render("test",legoData);     
});

// this does something similar to "/move" endpoint. Neither
//works as desired.  if this is used with pressing 'build',
// a question mark shows up.  Some show as undefined.


app.post('/update/:id', (request, response) => {

    let updateID = parseInt(request.params.id);

    //toggle the boolean value of 'built' parameter
    // the array index is one less than the id.

    var bool = dataRender.data[updateID-1].built;
    dataRender.data[updateID-1].built = !bool;
    console.log('object is '+ request.params.object)
    console.log('boolean =' +bool);

     //this is supposed to refresh the screen (and it does)
    response.redirect('/')
    console.log('UPDATE ID: ' + updateID);
  });

};     // end of function