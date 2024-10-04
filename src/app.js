const express = require("express");
const app = express();
const {adminAuth, userAuth} = require("./middlewares/auth")

// handle Auth Middleware for all GET,POST,....requests

app.use("/admin", adminAuth);
// app.use("/user", userAuth);

app.get("/user/login", (req,res) => {
    res.send("User logged successfully");
})

app.get("/user", userAuth, (req,res) => {
    res.send("User data get successfully");
})
app.get("/admin/getAllData", (req,res) => {
    res.send("admin get all the data successfully");
    // console.log("done");
    
})
app.get("/admin/deleteData", (req,res) => {
    res.send("deleted data successfully");
})







// request handler

// app.use("/route", rH, [rH2, rH3], rH4, rH5);

// app.get("/user", (req, res, next) => {
//         console.log("Handling the route handler 1");
//         res.send("1st Response!")
//         // next();
//     });
// app.get("/user", (req, res, next) => {
//         console.log("Handling the route handler 2");
//         res.send("2nd Response!")
//         next();
//     });

app.listen(4000, ()=>{
    console.log("Server is successfully listening on port 4000"); 
})
;