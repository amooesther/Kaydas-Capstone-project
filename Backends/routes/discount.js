var express = require('express')
const discountRouter = express.Router();

discountRouter.get("/", (req, res) => {
    res.json({ discount  });
})


const discount= [
{
    id:1,
    name:'Gizzard',
    currentPrice: "4500",
    oldPrice: "6000",
    imgrc: "https://media.istockphoto.com/id/1880132133/photo/raw-chicken-or-turkey-gizzards-with-salt-spices-and-herbs.webp?b=1&s=170667a&w=0&k=20&c=uKLyrywxapeZZElUnYck-IzydWf8gjSYNoUOxSMwmJA="
},
{
    id:2,
    name:'Whole Chicken',
    currentPrice: "3500",
    oldPrice: "4000",
    imgrc: "https://media.istockphoto.com/id/93456512/photo/raw-chicken.webp?b=1&s=170667a&w=0&k=20&c=RYuIV0FpnvJM5PFKoo0QCGVX5mctuFmRSyjYyx7JyZg="

},
{
    id:3,
    name:'Hake Fish',
    currentPrice: "2500",
    oldPrice: "4000",
    imgrc: "https://media.istockphoto.com/id/1170632108/photo/box-of-hake-fish-at-fishing-market.webp?b=1&s=170667a&w=0&k=20&c=v9C-iRqmDGNc55KjseJyM_bcjxn_akKvlhf8jqCZkpo="

},

]

module.exports= discountRouter;