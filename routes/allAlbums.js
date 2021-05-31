// import express
const express = require("express");

//invoke the express router
const router = express.Router();

let dataFile = require("../data/data.json")


router.get("/album", (request, response)=>{

    response.render("allAlbums",{
        pageTitle: "Albums",
        albumName1: dataFile.albums[0].album,
        albumName2: dataFile.albums[1].album,
        albumName3: dataFile.albums[2].album,
        albumName4: dataFile.albums[3].album,
        albumCover1: dataFile.albums[0].albumCovers,
        albumCover2: dataFile.albums[1].albumCovers,
        albumCover3: dataFile.albums[2].albumCovers,
        albumCover4: dataFile.albums[3].albumCovers,
    })
})

router.get("/api", (request, response)=>{
    response.json(dataFile)
})

// export out to main application

module.exports = router;