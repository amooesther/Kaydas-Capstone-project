var express = require('express')
const detailsRouter = express.Router();

detailsRouter.get("/", (req, res) => {
    res.json({ details });
})


const details = [
{
    id:1,
    name:'Natundo',
    type: 'Broiler',
    description: "Frozen fish has a wide variety of associated health benefits, including its ability to boost overall metabolism, speed up repair and growth throughout the body, build strong bones, reduce the risk of various chronic diseases.",   
    imgSrc: "https://media.istockphoto.com/id/93456512/photo/raw-chicken.webp?b=1&s=170667a&w=0&k=20&c=RYuIV0FpnvJM5PFKoo0QCGVX5mctuFmRSyjYyx7JyZg="
},
{
    id:2,
    name:'old Layer',
    type: 'medium',
    description: " the exquisite taste of our succulent old layer chickens. Slow-grown for maximum flavor and tenderness, perfect for creating unforgettable culinary masterpieces",   
    imgSrc: "https://media.istockphoto.com/id/1282866808/photo/fresh-raw-chicken.webp?b=1&s=170667a&w=0&k=20&c=tVhkkolwq60QmPMQnDimXAeXyOmgKBuURTykgvFznwo="
},
{
    id:3,
    name:'Fiesta Chicken',
    type: "medium",
    description: "the exquisite taste of our succulent chicken fiesta. Slow-grown for maximum flavor and tenderness, perfect for creating unforgettable culinary masterpieces",
    imgSrc: "https://media.istockphoto.com/id/93456470/photo/two-raw-chicken-breast-on-white-backdrop.webp?b=1&s=170667a&w=0&k=20&c=wAOTKX0Vv_3d_Brat7SFC1ExMsyICnEO2zgQprWCfSU="

},
{
    id:4,
    name:'Sausages',
    type: "medium",
    description: "Savor the sizzle with our premium sausages! Crafted from the finest ingredients and seasoned to perfection, each bite bursts with savory flavor. Whether grilled, pan-fried, or added to your favorite recipes, our sausages are sure to delight your taste buds",
    imgSrc: "https://media.istockphoto.com/id/1475630902/photo/tasty-sausages-frankfurters-isolated-on-white-background.webp?b=1&s=170667a&w=0&k=20&c=RnhoMQ3Ykf8xx2aY-C500H4qLFBQaQNpmmgaVZh7Yoc="

},
{
    id:5,
    name:'Gizzard',
    type: 'medium',
    description: "Delight in the savory crunch of our tender gizzards! Perfect for frying, stewing, or adding to your favorite dishes, our gizzards are packed with flavor and nutrients",   
    imgSrc: "https://media.istockphoto.com/id/1880132133/photo/raw-chicken-or-turkey-gizzards-with-salt-spices-and-herbs.webp?b=1&s=170667a&w=0&k=20&c=uKLyrywxapeZZElUnYck-IzydWf8gjSYNoUOxSMwmJA="
},
{
    id:6,
    name:'wings',
    type: 'medium',
    description: "our wings are sure to satisfy your cravings. Perfect for game days, parties, or just a tasty snack, these juicy wings are a crowd-pleaser every time. Elevate your gatherings with our delicious chicken wings today",   
    imgSrc: "https://media.istockphoto.com/id/489516996/photo/raw-chicken-wings-isolated-on-white-background.webp?b=1&s=170667a&w=0&k=20&c=1tPtBii0uTXrB7H7eQtSS1A95bINfm_ZhZB9fu1A2AU="
},
{
    id:7,
    name:'chicken laps',
    type: "2500",
    description: "our chicken laps are sure to satisfy your cravings. Perfect for game days, parties, or just a tasty snack, these juicy chicken laps are a crowd-pleaser every time. Elevate your gatherings with our delicious chicken laps today",
    imgSrc: "https://media.istockphoto.com/id/1397742712/photo/marinated-raw-chicken-legs.webp?b=1&s=170667a&w=0&k=20&c=s1VaRCx05hfu5aSQqqoqm1mlf8Gm5oKnQhDAg8ik5QA="

},
{
    id:8,
    name:'Drumsticks',
    type: "medium",
    description: "Drum up some deliciousness with our succulent chicken drumsticks! Juicy, flavorful, and oh-so-tende",
    imgSrc: "https://media.istockphoto.com/id/599876836/photo/raw-chicken-legs.webp?b=1&s=170667a&w=0&k=20&c=WuoXqrCN77BVD5fkTpuvARyC6JE3AVD7gOLK0LjW-2M="

},
{
    id:9,
    name:'Whole Chicken',
    type: "kilogram",
    description: "Experience the epitome of poultry perfection with our whole chicken! Fresh, plump, and expertly prepared, our whole chickens are ready to be roasted, grilled, or slow-cooked to juicy,",
    imgSrc: "https://media.istockphoto.com/id/93456512/photo/raw-chicken.webp?b=1&s=170667a&w=0&k=20&c=RYuIV0FpnvJM5PFKoo0QCGVX5mctuFmRSyjYyx7JyZg="

},
{
    id:10,
    name:'Hake Fish',
    type: "carton",
    description: "Dive into a sea of flavor with our premium hake fish! Delicately flaky and mild in taste, our hake fish is a versatile option for any seafood lover",
    imgSrc: "https://media.istockphoto.com/id/1170632108/photo/box-of-hake-fish-at-fishing-market.webp?b=1&s=170667a&w=0&k=20&c=v9C-iRqmDGNc55KjseJyM_bcjxn_akKvlhf8jqCZkpo="

},
{
    id:11,
    name:'Croaker',
    type: 'medium',
    description: "Discover the delightful taste of the sea with our premium croaker fish! Renowned for its firm texture and sweet",   
    imgSrc: "https://media.istockphoto.com/id/1437417668/photo/croaker-fish-isolated-on-white.webp?b=1&s=170667a&w=0&k=20&c=Z-xTQmVIRb_8iPGWP1pmS-kmLFidr6LfE0aquSAtqaU="
},
{
    id:12,
    name:'Tilapia Fish',
    type: 'medium',
    description: "Whether you're cooking for a family dinner or hosting a gathering, our tilapia fish promises a delightful dining experience.",   
    imgSrc: "https://media.istockphoto.com/id/157648993/photo/tilapia-fish.webp?b=1&s=170667a&w=0&k=20&c=7apvoLC63PbIQTOtWx41rXZ6eD6N1uyuKtvKnwRqRqQ="
},
{
    id:13,
    name:'Hake',
    type: "kilogram",
    description: "Dive into a sea of flavor with our premium hake fish! Delicately flaky and mild in taste, our hake fish is a versatile option for any seafood lover",
    imgSrc: "https://media.istockphoto.com/id/1299761857/photo/hake-on-white.webp?b=1&s=170667a&w=0&k=20&c=5a4BAH7QrVlqITLX009sabtb9cm7TGqgVUSvZjooFvg="

},
{
    id:14,
    name:'Mackrel',
    type: "Kilogram",
    description: "Bring the taste of the ocean to your table with our premium frozen mackerel fish! Individually quick-frozen to preserve freshness and flavor",
    imgSrc: "https://media.istockphoto.com/id/508418674/photo/fresh-frozen-mackerel-couple-on-a-white-background.webp?b=1&s=170667a&w=0&k=20&c=O3kjTYrLcGRcyks8b5qb4WHPxtmT5xuRPXjqtIfmOgw="

},

{
    id:15,
    name:'Zartech',
    type: 'Broiler',
    description: "Experience the epitome of poultry perfection from Zartech with our whole chicken! Fresh, plump, and expertly prepared, our whole chickens are ready to be roasted, grilled, or slow-cooked to juicy,",   
    imgSrc: "https://media.istockphoto.com/id/1282866808/photo/fresh-raw-chicken.webp?b=1&s=170667a&w=0&k=20&c=tVhkkolwq60QmPMQnDimXAeXyOmgKBuURTykgvFznwo="
},
{
    id:16,
    name:'Valentine',
    type: "medium",
    description: "Elevate your meals with the unmatched quality and taste of our premium chicken today",
    imgSrc: "https://media.istockphoto.com/id/599876836/photo/raw-chicken-legs.webp?b=1&s=170667a&w=0&k=20&c=WuoXqrCN77BVD5fkTpuvARyC6JE3AVD7gOLK0LjW-2M="

},
]

module.exports= detailsRouter;