console.log("Web serverni boshlash");
const express = require("express");
const app = express();
const fs = require("fs");


// MongoDB call
const db = require("./server").db(); //Qalam

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
    try {
        console.log(req.body);
        const new_reja = req.body.reja;
        db.collection("plans").insertOne({reja: new_reja});
        res.end("successfully added");
    } catch {
        console.log(err);
        res.end("something went wrong");
    }
})

// app.post("/create-item", (req, res) => {
//     console.log(req.body);
//     const new_reja = req.body.reja;
//     db.collection("plans").insertOne({reja: new_reja}, (err, data) => {
//         if(err) {
//             console.log(err);
//             res.end("something went wrong");
//         } else {
//             res.end("successfully added");
//         }
//     })
// })

app.get("/author", (req, res) => {
    res.render("author", {user: user});
})

app.get("/", async (req, res) => {
    console.log("user entered to /");
    try {
        const data = await db.collection("plans").find().toArray();
        // console.log(data);

        res.render("reja", { items: data });
    } catch (err) {
        console.log(err);
        res.end("Something went wrong");
    }
});

// app.get("/", function(req, res) {
//     db.collection("plans").find().toArray((err, data) => {
//         if(err) {
//             console.log(err);
//             res.end("something went wrong");
//         } else {
//             console.log(data);
//             res.render("reja");
//         }
//     });
// })

module.exports = app;