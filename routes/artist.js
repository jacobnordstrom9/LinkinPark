// import express
const express = require("express");

//invoke the express router
const router = express.Router();

let dataFile = require("../data/data.json");

// console.log(dataFile.artist.name)
// console.log(typeof dataFile.artist)

router.get("/artist", (request, response)=>{
    
    
    response.render("artist", {
        pageTitle: dataFile.artist.name,
        bandName: dataFile.artist.name,
        formed: dataFile.artist.formation,
        descritpion: dataFile.artist.description,
        albums: dataFile.artist.albums,
        bandMembers: dataFile.artist.bandMembers
        
    })
})

router.get("/api", (request, response)=>{
    response.json(dataFile)
})

// export out to main application

module.exports = router;
