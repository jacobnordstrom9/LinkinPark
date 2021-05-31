const express = require("express");
const router = express.Router();

router.get("/chat", (request, response)=>{
    response.render("chat", {
        pageID: "chat",
        pageTitle: "RouxChat"
    })
})

module.exports = router;