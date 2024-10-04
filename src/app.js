const express = require("express");
const app = express();

// request handler

// // and here the b is optional because of ? means you can write ac or abc
// app.get("/ab?c", (req,res) => {
//     res.send({firstName:"suraj", lastName:"vishwas"});
// })

// app.get("/a(bc)+d", (req,res) => {
//     res.send({firstName:"suraj", lastName:"vishwas"});
// })


// // ====>  /abbbbbcd  here you can start with ab and end with cd and between them 
// // you can write as much as b
// app.get("/ab+cd", (req,res) => {
//     res.send({firstName:"suraj", lastName:"vishwas"});
// })

// // ====>  /abdskhfkshgcd  here you can start with ab and end with cd and between them 
// // you can write anything
// app.get("/ab*cd", (req,res) => {
//     res.send({firstName:"suraj", lastName:"vishwas"});
// })




// you can also pass here regex
// // here it will true if in your path a is exist
// app.get(/a/,(req,res)=>{
//     res.send({firstName:"suraj", lastName:"vishwas"});    
// })

// // here it will true if  your path end with fly
// app.get(/.*fly$/,(req,res)=>{
//         res.send({firstName:"suraj", lastName:"vishwas"});    
// })

// // http://localhost:4000/user?userId=suraj&password=xyz
// app.get("/user",(req,res)=>{
//     console.log(req.query);
//     res.send({firstName:"suraj", lastName:"vishwas"});    
// })
app.get("/user/:userId/:name/:password",(req,res)=>{
    console.log(req.params);
    res.send({firstName:"suraj", lastName:"vishwas"});    
})






app.listen(4000, ()=>{
    console.log("Server is successfully listening on port 4000"); 
})
;