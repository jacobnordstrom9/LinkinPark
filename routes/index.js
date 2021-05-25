// import express
const express = require("express");

//invoke the express router
const router = express.Router();

let albums ={ albums: [{  
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

let albumHeader = `
<link rel="stylesheet" href="css/styles.css">
<ul class="font">

<li><a href="/"> Homepage</a></li>
<li><a href="/album/0"> Hybrid Theory</a></li>
<li><a href="/album/1"> Meterora</a></li>
</ul>`
let albumNav = `
<link rel="stylesheet" href="css/styles.css">
<ul class="font">
<li><a href="/album/0"> Hybrid Theory</a></li>
<li><a href="/album/1"> Meterora</a></li>
</ul>`

app.get("/", (request, response)=>{
    response.send(`
    <h1> Linkin Park </h1> <br>
    <h4> Formed in 1996 </h4> <br>
    <p> Hybrid Theory is the debut studio album by American rock band Linkin Park. It reached the top 10 in 15 countries and has sold 27 million copies worldwide, making it the best-selling debut album since Guns N' Roses' Appetite for Destruction (1987) and the best-selling rock album of the 21st century. </p> <br> 
    <h2> Albums </h2>
    ${albumNav}
    <img src="https://www.gannett-cdn.com/-mm-/4e09c2618c2c46c8dd6669ce088d1637a1ad52a5/c=0-17-648-382/local/-/media/Phoenix/Phoenix/2014/05/27//1401210370000-linkin-park.jpg?width=648&height=365&fit=crop&format=pjpg&auto=webp" height="300px"> 
    <img src="https://i.redd.it/e051yl6umhl31.jpg" height="300px"> 

    `)
})

router.get("/", (request, response)=>{


    response.render("index", {
        pageTitle: "Home",
        bandName: "Linkin Park",
        formed: "1996",
        content: "Linkin Park is an American rock band from Agoura Hills, California. The band has won two Grammy Awards and sold over seventy million albums worldwide.",
        albums: [
            "Hybrid Theory",
            "Meteora"
        ]
        
    })
})





// export out to main application

module.exports = router;