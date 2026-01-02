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
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

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

    await db.collection("plans").deleteOne({_id: new ObjectId(req.body.id)});
    res.json({state: "success"});
});

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