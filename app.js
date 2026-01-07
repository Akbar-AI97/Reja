console.log("Web serverni boshlash");
const express = require("express");
const app = express();
const fs = require("fs");
const { json } = require("stream/consumers");


// MongoDB call
const db = require("./server").db(); //Qalam
const { ObjectId } = require("mongodb"); // used to string => ObjectID(string) 

let user;
fs.readFile("database/user.json", "utf-8", (err, data) => {
    if(err) {
        console.log("ERROR:", err);
    } else {
        user = JSON.parse(data);
    }
});

//1: Entry code
app.use(express.static("public")); // Middleware DP => opens access to public
app.use(express.json()); // Middleware DP => Rest API support
app.use(express.urlencoded({extended: true})); // Middleware DP => Traditional API support (e.g. Form)

//2: Session code

//3: Views code
app.set("views", "views");
app.set("view engine", "ejs"); //BSSR: Backend Server Side Rendering (Creating Frontend in the Backend side)

//4: Routing code
app.post("/create-item", async (req, res) => {
    console.log("user entered to /create-item");

    const new_reja = {reja: req.body.reja};
    await db.collection("plans").insertOne(new_reja);
    res.json({
        _id: new_reja._id,
        reja: new_reja.reja 
    });
});

app.post("/delete-me", async (req, res) => {
    console.log("user entered to /delete-me");
    
    const data = req.body;

    await db.collection("plans").deleteOne({_id: new ObjectId(data.id)});
    res.json({
        _id: data.id
    });
});

app.post("/delete-all", async (req, res) => {
  try {
    await db.collection("plans").deleteMany({});
    res.json({ state: "All data deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ state: "Delete failed" });
  }
});


app.post("/edit-item", async (req, res) => {
    console.log("user entered to /edit-item");

    const data = req.body;

    await db.collection("plans").findOneAndUpdate(
        {_id: new ObjectId(data.id)},
        {$set: {reja: data.new_input}}
    );

    res.json({
        _id: data.id,
        reja: data.new_input 
    });
})

app.get("/", async (req, res) => {
    console.log("user entered to /");
    try {
        const data = await db.collection("plans").find().toArray();
        // console.log(data);

        res.render("reja", { items: data });
    } catch (err) {
        // console.log(err);
        res.end("Something went wrong");
    }
});

app.get("/author", (req, res) => {
    res.render("author", {user: user});
})

module.exports = app;