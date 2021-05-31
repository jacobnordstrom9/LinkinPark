const express = require("express");
const app = express();
const socket = require("socket.io")
let port = 3000;


//public
app.use(express.static('public'));


// views
app.set("view engine", "ejs");


//routes

app.use(require("./routes/index"))
app.use(require("./routes/artist"))
app.use(require("./routes/albums"))
app.use(require("./routes/allAlbums"))
app.use(require("./routes/feedback"))
app.use(require("./routes/chat"))


// starts server

let server = app.listen(port, () => {
    console.log(`running on port ${port}`);
})

let io = socket(server)

io.on("connection", (socket)=>{
    socket.on("postMessages", msg =>{
        io.emit("updateMessage", msg)
    })
})