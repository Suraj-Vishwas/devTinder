const express = require("express");
const {connectDB} = require("./config/database")
const app = express();
const User = require("./models/user");
const { Mongoose } = require("mongoose");
const user = require("./models/user");

app.post("/signup", async (req, res) => {
    const user = new User({
        firstName: "Suraj",
        lastName: "Vishwas",
        emailId: "sunshineknight365@gmail.com",
        password: "ABZ",
    })
    try{
        await user.save();
        res.send("User Created Successfully");
    }catch(err){
        res.status(400).send("Error saving the user", err.massage)}
    // creating a new instance of the user model
    // const user = new User(userObj);



})



connectDB()
    .then(() => {
        console.log('MongoDB connected...');
        app.listen(7777, ()=>{
            console.log("Server is successfully listening on port 7777"); 
        });
    }).catch((err) => console.error("Database cann't be connected"));