const express = require("express");
const router = express.Router();

// bring in feedback.json file
const feedbackData = require("../data/feedback.json");


// import fs modules - read and write to file on disk
const fs = require("fs")

// body parser req.body.name
router.use(express.json());
router.use(express.urlencoded({extended: true}))


router.get("/feedback", (request, response)=>{
    
    response.render("feedback",{
        pageTitle: "Linkin Park - Feedback Form",
        pageID: "Feedback"
    })
})

router.get("/api", (request, response)=>{
    response.json(feedbackData)
})

router.post("/api", (request, response) =>{

    console.log("FormData" , request.body)

    feedbackData.unshift(request.body);

    fs.writeFile("data/feedback.json", JSON.stringify(feedbackData), "utf8", (error) =>{
        if(error){
            console.log(error);
        }
    })
    response.json(feedbackData)
})

module.exports = router; 