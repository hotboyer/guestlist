const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");


const aboutContent = "I am a web developer. I love 💖 coffee and i love listening to music."
const contactContent = "you can contact me via the following: phone: 08105344452, 0805558042 email: jas@gmail.com"


const app = express();

app.set('view engine', 'ejs');



app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const guestList = ["davido", "olamide", "tobi", "asake", "mimi", "chioma", "darasimi"];
const guestName = guestList.includes;
// console.log(guestList[2]);


app.get("/", function(req, res) {
    res.render("home")
});

app.get("/about", function(req, res){
    res.render("about", {about: aboutContent})
});

app.get("/contact", function(req, res){
    res.render("contact", {contact: contactContent})
});

app.get("/welcome", function(req, res){
    res.render("welcome")
});

app.get("/decline", function(req, res){
    res.render("decline")
});

app.post("/", function(req, res){
    const guestName=req.body.guest[0]
    
    // const guest = req.body.guest;
// const guestName = req.body.guest
// console.log(guestList.includes("tobi"))
    if (guestList.includes(guestName)) {
        res.redirect("/welcome");
    } else {
        res.redirect("/decline");
    }
    
});


app.post("/decline", function(req, res){
    res.redirect("/")
});

app.listen(5000, function() {
    console.log("server is running on port 5000")
});

