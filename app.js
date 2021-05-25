const express = require("express");
const app = express();
let port = 3000;

//routes

app.use(require("./routes/index"))
app.use(require("./routes/albums"))


// starts server

app.listen(port, ()=>{
    console.log(`server is running on port ${port}`);
})