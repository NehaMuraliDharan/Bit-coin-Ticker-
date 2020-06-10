const express= require("express");
const bodyParser= require("body-parser");
const request= require("request");
const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.listen(3000, function(){
  console.log("Server is running on port 3000");
});
app.get("/",function(req,res){
  res.sendFile(__dirname + "/index.html")
});
app.post("/",function(req, res)
{
  var crypto=req.body.crypto;
  var fiat=req.body.fiat;
  request("https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCUSD", function(error, response, body){
    console.log(body);
    var data = JSON.parse(body);
    var price=data.last;
    res.send(price);  
  });
});
