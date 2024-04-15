var express = require('express')
const fishRouter = express.Router();

fishRouter.get("/", (req, res) => {
    res.json({ fish });
})


const fish = [
{
    id:5,
    name:'Croaker',
    type: 'medium',
    price: "6000",   
    imgSrc: "https://media.istockphoto.com/id/1437417668/photo/croaker-fish-isolated-on-white.webp?b=1&s=170667a&w=0&k=20&c=Z-xTQmVIRb_8iPGWP1pmS-kmLFidr6LfE0aquSAtqaU="
},
{
    id:6,
    name:'Tilapia Fish',
    type: 'medium',
    price: "5000",   
    imgSrc: "https://media.istockphoto.com/id/157648993/photo/tilapia-fish.webp?b=1&s=170667a&w=0&k=20&c=7apvoLC63PbIQTOtWx41rXZ6eD6N1uyuKtvKnwRqRqQ="
},
{
    id:7,
    name:'Hake',
    type: "2500",
    price: "4000",
    imgSrc: "https://media.istockphoto.com/id/1299761857/photo/hake-on-white.webp?b=1&s=170667a&w=0&k=20&c=5a4BAH7QrVlqITLX009sabtb9cm7TGqgVUSvZjooFvg="

},
{
    id:8,
    name:'Mackrel',
    type: "kilogram",
    price: "2000",
    imgSrc: "https://media.istockphoto.com/id/508418674/photo/fresh-frozen-mackerel-couple-on-a-white-background.webp?b=1&s=170667a&w=0&k=20&c=O3kjTYrLcGRcyks8b5qb4WHPxtmT5xuRPXjqtIfmOgw="

}

]

module.exports= fishRouter;