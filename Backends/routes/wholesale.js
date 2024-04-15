var express = require('express')
const wholesaleRouter = express.Router();

wholesaleRouter.get("/", (req, res) => {
    res.json({ wholesale });
})


const wholesale = [
{
    id:17,
    name:'Valentine',
    type: 'carton',
    price: "60000",   
    imgSrc: "https://media.istockphoto.com/id/599876836/photo/raw-chicken-legs.webp?b=1&s=170667a&w=0&k=20&c=WuoXqrCN77BVD5fkTpuvARyC6JE3AVD7gOLK0LjW-2M="
},
{
    id:18,
    name:'wings',
    type: 'carton',
    price: "55000",   
    imgSrc: "https://media.istockphoto.com/id/1487436087/photo/chicken-thighs.webp?b=1&s=170667a&w=0&k=20&c=r96a6RDkPiPikGtdQ8Bkz7KykNM5Tqf9G1FEykoOGzI="
},
{
    id:19,
    name:'Chicken Fiesta',
    type: "carton",
    price: "44000",
    imgSrc: "https://media.istockphoto.com/id/182372395/photo/chicken-breasts-against-white-background.webp?b=1&s=170667a&w=0&k=20&c=uOB467YiPklm7yKN_96oNOVdbbakn8zI_Wk_gsdFg5k="

},
{
    id:20,
    name:'Tilapia fish',
    type: "carton",
    price: "45000",
    imgSrc: "https://media.istockphoto.com/id/495669292/photo/fish-on-the-box.webp?b=1&s=170667a&w=0&k=20&c=1RMm1YkdICWN5Gs1wu1dr3c75Djxx4FWkBZPksLESWw="

}

]

module.exports= wholesaleRouter;