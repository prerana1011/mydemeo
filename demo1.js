const express=require("express");
const mysql=require("mysql");
const app=express();

const connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'manager',
    database:'devops'
});
connection.connect();


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
var data=[];
app.get("/",function(request,response){
    
    var state=`select * from product`;
    connection.query(state,(error,result)=>{
        if(error==null){
        data=result;
        response.contentType("application/json");     
response.send(JSON.stringify(data));
response.send("welcome");
        }
        else
        response.send(error);
    });

});

app.listen(4000,()=>{
    console.log("server is started....");
})