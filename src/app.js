const express = require("express");
const app = express();

// request handler

app.get("/user", (req,res) => {
    res.send("getting data successfully from DB...");
})
app.post("/user", (req,res) => {
    // create entries in db
    // res.send("post data successfully in DB...");
    res.send({firstName:"suraj", lastName:"vishwas"});
})
app.delete("/user", (req,res) => {
    res.send("Delete data from DB...");
})


// app.use("/", (req,res) => {
//     res.send("Hello from the server...");
// })

app.use("/hello/3", (req,res) => {
    res.send("Hello Hi Namaste Hello Hi Namaste...");
})

app.use("/hello", (req,res) => {
    res.send("Hello Hi Namaste...");
})

// app.use("/hello/3", (req,res) => {
//     res.send("Hello Hi Namaste Hello Hi Namaste...");
// })

app.use("/test", (req,res) => {
    res.send("This is testing phase...");
})

// app.use("/", (req,res) => {
//     res.send("Hello Suraj...");
// })

app.listen(4000, ()=>{
    console.log("Server is successfully listening on port 4000"); 
})
;