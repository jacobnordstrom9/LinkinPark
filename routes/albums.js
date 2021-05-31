// import express
const express = require("express");

//invoke the express router
const router = express.Router();

let dataFile = require("../data/data.json")

// console.log("albumData", dataFile)
// console.log(dataFile)

router.get("/album/:id", (request, response)=>{
    let id = request.params.id;
    
    response.render("albums", {
        pageTitle: dataFile.albums[id].album,
        albumName: dataFile.albums[id].album,
        description: dataFile.albums[id].description,
        released: dataFile.albums[id].publishDate, 
        albumCover: dataFile.albums[id].albumCovers,
        tracks : dataFile.albums[id].trackList,
    })
    
})


// export out to main application

module.exports = router;





// let albumHeader = `
// <link rel="stylesheet" href="css/styles.css">
// <ul class="font">

// <li><a href="/"> Homepage</a></li>
// <li><a href="/album/0"> Hybrid Theory</a></li>
// <li><a href="/album/1"> Meterora</a></li>
// </ul>`
// let albumNav = `
// <link rel="stylesheet" href="css/styles.css">
// <ul class="font">
// <li><a href="/album/0"> Hybrid Theory</a></li>
// <li><a href="/album/1"> Meterora</a></li>
// </ul>`