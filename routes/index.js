// import express
const express = require("express");

//invoke the express router
const router = express.Router();

router.get("/", (request, response)=>{
    
    
    response.render("index", {
        pageTitle: "Homepage",
        
    })
})


// export out to main application

module.exports = router;