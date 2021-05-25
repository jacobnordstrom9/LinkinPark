// import express
const express = require("express");

//invoke the express router
const router = express.Router();

let albums = { albums: [{  
    id: 0,
    name: "Hybrid Theory",
    description: "Hybrid Theory is the debut studio album by American rock band Linkin Park. It reached the top 10 in 15 countries and has sold 27 million copies worldwide, making it the best-selling debut album since Guns N' Roses' Appetite for Destruction (1987) and the best-selling rock album of the 21st century. ",
    publishDate: "2000",
    img: "https://images-na.ssl-images-amazon.com/images/I/81bZybDlLwL._SL1500_.jpg",

    singlesTitles:["One Step Closer","In The End", "Crawling", "Papercut"]
},
{  
    id: 1,
    name: "Meteora",
    description: "Meteora is the second studio album by American rock band Linkin Park. Meteora debuted at number one on the Billboard 200, selling over 810,000 copies in its first week.",
    publishDate: "2003",
    img: "https://upload.wikimedia.org/wikipedia/en/0/0c/Linkin_Park_Meteora_Album_Cover.jpg",

    singlesTitles:["Somewhere I Belong","Faint", "Numb", "From the Inside"]
}
]}

const albumCovers = [
    "https://images-na.ssl-images-amazon.com/images/I/81bZybDlLwL._SL1500_.jpg",
    "https://upload.wikimedia.org/wikipedia/en/0/0c/Linkin_Park_Meteora_Album_Cover.jpg"
]

app.get("/cds", (request, response)=>{
    response.send(`${albumNav}`)
})




app.get("/album/:id", (request, response)=>{

    let id = request.params.id;

    response.send(`
    ${albumHeader}
    <h1> Album Title: ${albums.albums[id].name} </h1>
    <img src="${albums.albums[id].img}" height="300px">
    <h4> Year Released: ${albums.albums[id].publishDate} </h4>
    <p> ${albums.albums[id].description} <p>
    <h4> Singles on the album </h4>
    <ul> 
        <li>${albums.albums[id].singlesTitles[0]} </li>
        <li>${albums.albums[id].singlesTitles[1]} </li>
        <li>${albums.albums[id].singlesTitles[2]} </li>
        <li>${albums.albums[id].singlesTitles[3]} </li>
    </ul>

    `)
})

// export out to main application

module.exports = router;