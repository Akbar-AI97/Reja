console.log("Web serverni boshlash");
const express = require("express");
const app = express();
const http = require("http");

//1: Entry code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));


//2: Session code

//3: Views code
app.set("views", "views");
app.set("view engine", "ejs"); //BSSR: Backend Server Side Rendering (Creating Frontend in the Backend side)

//4: Routing code
// app.get("/hello", function(req, res) {
//     res.end("<h1>Hello world</h1>");
// });
// app.get("/gift", function(req, res) {
//     res.end("<h1>You're in the gifts section</h1>");
// });

app.post("/create-item", (req, res) => {
    console.log(req.body);
    res.json({test: "success"});
})

app.get("/", function(req, res) {
    res.render("harid");
})

const server = http.createServer(app);
const PORT = 3000;
server.listen(PORT, function() {
    console.log(`The server is running on port: ${PORT}`);
});