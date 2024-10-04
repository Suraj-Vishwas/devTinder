const express = require("express");
const app = express();

// orders matters you cann't write (next,req,res,err)
app.use("/", (err, req, res, next) => {
    if(err){
    // log your error 
        res.status(500).send("Something went wrong");
    }
})
app.get("/getUserData", (req,res) => {
    try{
        // logic of DB call and get user data
        throw new Error("akjfn");
        res.send("User data sent")
    }catch(err){
        res.status(500).send("some error contact support team!");
    }
    // throw new Error("akjfn");
    // res.send("User data sent")
})
app.use("/", (err,req,res, next) => {
    if(err){
        res.status(500).send("Something went wrong");
    }
})
app.listen(4000, ()=>{
    console.log("Server is successfully listening on port 4000"); 
})
;