var express = require('express')
const wholesaleRouter = express.Router();

wholesaleRouter.get("/", (req, res) => {
    res.json({ wholesale });
})


const wholesale = [
{
    id:1,
    name:'Valentine',
    type: 'carton',
    price: "60000",   
    imgSrc: "https://media.istockphoto.com/id/599876836/photo/raw-chicken-legs.webp?b=1&s=170667a&w=0&k=20&c=WuoXqrCN77BVD5fkTpuvARyC6JE3AVD7gOLK0LjW-2M="
},
{
    id:2,
    name:'wings',
    type: 'carton',
    price: "55000",   
    imgSrc: "https://media.istockphoto.com/id/489516996/photo/raw-chicken-wings-isolated-on-white-background.webp?b=1&s=170667a&w=0&k=20&c=1tPtBii0uTXrB7H7eQtSS1A95bINfm_ZhZB9fu1A2AU="
},
{
    id:3,
    name:'Chicken Fiesta',
    type: "carton",
    price: "44000",
    imgSrc: "https://media.istockphoto.com/id/93456470/photo/two-raw-chicken-breast-on-white-backdrop.webp?b=1&s=170667a&w=0&k=20&c=wAOTKX0Vv_3d_Brat7SFC1ExMsyICnEO2zgQprWCfSU="

},
{
    id:4,
    name:'Tilapia fish',
    type: "carton",
    price: "45000",
    imgSrc: "https://media.istockphoto.com/id/495669292/photo/fish-on-the-box.webp?b=1&s=170667a&w=0&k=20&c=1RMm1YkdICWN5Gs1wu1dr3c75Djxx4FWkBZPksLESWw="

}

]

module.exports= wholesaleRouter;