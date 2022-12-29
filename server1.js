const express=require("express");
const app = express();
app.use(function(req,resp,next){
    console.log("url :"+req.url+"method :"+req.method);
    next();
})
app.use(function(req,resp,next){

    console.log("In second middle ware");
    next();
})
app.get("/",function(req,resp){
     resp.send("<h1> In / url </h1>");
})
app.get("/aboutus",function(req,resp){
     resp.send("<h1> In / about us </h1>");
})
app.get("/home",function(req,resp){
     resp.send("<h1> In / home </h1>");
})
app.listen(3000);
console.log("inside 3000");
