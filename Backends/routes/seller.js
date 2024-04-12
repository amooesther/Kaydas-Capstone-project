var express = require('express')
const sellerRouter = express.Router();

sellerRouter.get("/", (req, res) => {
    res.json({ seller  });
})


const seller = [
{
    id:1,
    name:'Drumsticks',
    currentPrice:'4500',
    imgSrc: 'https://media.istockphoto.com/id/599876836/photo/raw-chicken-legs.webp?b=1&s=170667a&w=0&k=20&c=WuoXqrCN77BVD5fkTpuvARyC6JE3AVD7gOLK0LjW-2M='
},
{
    id:2,
    name:'Tilapia Fish ',
    currentPrice:'3500',
    imgSrc: 'https://media.istockphoto.com/id/157648993/photo/tilapia-fish.webp?b=1&s=170667a&w=0&k=20&c=7apvoLC63PbIQTOtWx41rXZ6eD6N1uyuKtvKnwRqRqQ='
},
{
    id:3,
    name:'Sausages',
    currentPrice:'2000',
    imgSrc: 'https://media.istockphoto.com/id/1475630902/photo/tasty-sausages-frankfurters-isolated-on-white-background.webp?b=1&s=170667a&w=0&k=20&c=RnhoMQ3Ykf8xx2aY-C500H4qLFBQaQNpmmgaVZh7Yoc='
},

]

module.exports= sellerRouter;