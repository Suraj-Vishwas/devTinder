const express = require("express");
const app = express();

// request handler

// app.use("/route", rH, [rH2, rH3], rH4, rH5);

app.get(
    "/user", 
    (req, res, next) => {
        console.log("Handling the route handler 1");
        // res.send("1st Response!")
        next();
    },
   [ (req, res, next) => {
        console.log("Handling the route handler 2");
        // res.send("2nd Response!")
        next();
    },
    (req, res, next) => {
        console.log("Handling the route handler 3");
        res.send("3rd Response!")
        // next();
    }],
    (req, res, next) => {
        console.log("Handling the route handler 4");
        // res.send("4th Response!")
        // next();
    },
    (req, res, next) => {
        console.log("Handling the route handler 5");
        res.send("5th Response!")
        // next();
    }
    )

app.listen(4000, ()=>{
    console.log("Server is successfully listening on port 4000"); 
})
;