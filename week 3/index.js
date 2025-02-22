const express = require("express");

const app = express();
const port = 8080;

/*looging middleware function*/
function requestlogger(request, response, next){
    console.log(`request method: ${request.method}, URL: ${request.url}`);
    next(); //PASSING CONTROL TO THE NEXT MIDDLEWARE FUNCTION/ROUTE HANDLER
}
app.use(requestlogger);// we then apply the middleware to all routes

 /* to print hello world on the web page*/
app.get("/", (req,res)=>{
    res.send("hello world");
})

app.listen(port,()=>{
    console.log(`the server is running on ${port}`);
})/* to print the port number on the console*/
