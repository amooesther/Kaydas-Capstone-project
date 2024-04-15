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
    price:"6000",
    description: "Fresh Natundo Chicken offers premium-quality, farm-fresh poultry products, providing a healthy and natural choice for consumers",   
    imgSrc: "https://media.istockphoto.com/id/93456512/photo/raw-chicken.webp?b=1&s=170667a&w=0&k=20&c=RYuIV0FpnvJM5PFKoo0QCGVX5mctuFmRSyjYyx7JyZg="
},
{
    id:2,
    name:'old Layer',
    type: 'medium',
    price:"5000",
    description: " the exquisite taste of our succulent old layer chickens. Slow-grown for maximum flavor and tenderness, perfect for creating unforgettable culinary masterpieces",   
    imgSrc: "https://media.istockphoto.com/id/1282866808/photo/fresh-raw-chicken.webp?b=1&s=170667a&w=0&k=20&c=tVhkkolwq60QmPMQnDimXAeXyOmgKBuURTykgvFznwo="
},
{
    id:3,
    name:'Fiesta ',
    type: "medium",
    price:"4000",
    description: "the exquisite taste of our succulent chicken fiesta. Slow-grown for maximum flavor and tenderness, perfect for creating unforgettable culinary masterpieces",
    imgSrc: "https://media.istockphoto.com/id/93456470/photo/two-raw-chicken-breast-on-white-backdrop.webp?b=1&s=170667a&w=0&k=20&c=wAOTKX0Vv_3d_Brat7SFC1ExMsyICnEO2zgQprWCfSU="

},
{
    id:4,
    name:'Sausages',
    type: "medium",
    price:"2000",
    description: "Savor the sizzle with our premium sausages! Crafted from the finest ingredients and seasoned to perfection, each bite bursts with savory flavor. Whether grilled, pan-fried, or added to your favorite recipes, our sausages are sure to delight your taste buds",
    imgSrc: "https://media.istockphoto.com/id/1475630902/photo/tasty-sausages-frankfurters-isolated-on-white-background.webp?b=1&s=170667a&w=0&k=20&c=RnhoMQ3Ykf8xx2aY-C500H4qLFBQaQNpmmgaVZh7Yoc="

},
{
    id:5,
    name:'Croaker',
    type: 'medium',
    price:"6000",
    description: "Discover the delightful taste of the sea with our premium croaker fish! Renowned for its firm texture and sweet",   
    imgSrc: "https://media.istockphoto.com/id/1437417668/photo/croaker-fish-isolated-on-white.webp?b=1&s=170667a&w=0&k=20&c=Z-xTQmVIRb_8iPGWP1pmS-kmLFidr6LfE0aquSAtqaU="
},

{
    id:6,
    name:'Tilapia Fish',
    type: 'medium',
    price:"5000",
    description: "Whether you're cooking for a family dinner or hosting a gathering, our tilapia fish promises a delightful dining experience.",   
    imgSrc: "https://media.istockphoto.com/id/157648993/photo/tilapia-fish.webp?b=1&s=170667a&w=0&k=20&c=7apvoLC63PbIQTOtWx41rXZ6eD6N1uyuKtvKnwRqRqQ="
},
{
    id:7,
    name:'Hake',
    type: "kilogram",
    price:"4000",
    description: "Dive into a sea of flavor with our premium hake fish! Delicately flaky and mild in taste, our hake fish is a versatile option for any seafood lover",
    imgSrc: "https://media.istockphoto.com/id/1299761857/photo/hake-on-white.webp?b=1&s=170667a&w=0&k=20&c=5a4BAH7QrVlqITLX009sabtb9cm7TGqgVUSvZjooFvg="

},
{
    id:8,
    name:'Mackrel',
    type: "Kilogram",
    price:"2000",
    description: "Bring the taste of the ocean to your table with our premium frozen mackerel fish! Individually quick-frozen to preserve freshness and flavor",
    imgSrc: "https://media.istockphoto.com/id/508418674/photo/fresh-frozen-mackerel-couple-on-a-white-background.webp?b=1&s=170667a&w=0&k=20&c=O3kjTYrLcGRcyks8b5qb4WHPxtmT5xuRPXjqtIfmOgw="

},
{
    id:9,
    name:'Gizzard',
    type: 'medium',
    price:"6000",
    description: "Delight in the savory crunch of our tender gizzards! Perfect for frying, stewing, or adding to your favorite dishes, our gizzards are packed with flavor and nutrients",   
    imgSrc: "https://media.istockphoto.com/id/1880132133/photo/raw-chicken-or-turkey-gizzards-with-salt-spices-and-herbs.webp?b=1&s=170667a&w=0&k=20&c=uKLyrywxapeZZElUnYck-IzydWf8gjSYNoUOxSMwmJA="
},
{
    id:10,
    name:'wings',
    type: 'medium',
    price:"5000",
    description: "our wings are sure to satisfy your cravings. Perfect for game days, parties, or just a tasty snack, these juicy wings are a crowd-pleaser every time. Elevate your gatherings with our delicious chicken wings today",   
    imgSrc: "https://media.istockphoto.com/id/489516996/photo/raw-chicken-wings-isolated-on-white-background.webp?b=1&s=170667a&w=0&k=20&c=1tPtBii0uTXrB7H7eQtSS1A95bINfm_ZhZB9fu1A2AU="
},
{
    id:11,
    name:'chicken laps',
    type: "medium",
    price:"4000",
    description: "our chicken laps are sure to satisfy your cravings. Perfect for game days, parties, or just a tasty snack, these juicy chicken laps are a crowd-pleaser every time. Elevate your gatherings with our delicious chicken laps today",
    imgSrc: "https://media.istockphoto.com/id/1397742712/photo/marinated-raw-chicken-legs.webp?b=1&s=170667a&w=0&k=20&c=s1VaRCx05hfu5aSQqqoqm1mlf8Gm5oKnQhDAg8ik5QA="

},

{
    id:12,
    name:'Drumsticks',
    type: "medium",
    price:"4500",
    description: "Drum up some deliciousness with our succulent chicken drumsticks! Juicy, flavorful, and oh-so-tende",
    imgSrc: "https://media.istockphoto.com/id/599876836/photo/raw-chicken-legs.webp?b=1&s=170667a&w=0&k=20&c=WuoXqrCN77BVD5fkTpuvARyC6JE3AVD7gOLK0LjW-2M="

},
{
    id:13,
    name:'Zartech',
    type: 'Broiler',
    price:"3800",
    description: "Experience the epitome of poultry perfection from Zartech with our whole chicken! Fresh, plump, and expertly prepared, our whole chickens are ready to be roasted, grilled, or slow-cooked to juicy,",   
    imgSrc: "https://media.istockphoto.com/id/1282866808/photo/fresh-raw-chicken.webp?b=1&s=170667a&w=0&k=20&c=tVhkkolwq60QmPMQnDimXAeXyOmgKBuURTykgvFznwo="
},
{
    id:14,
    name:'chicken Fiesta',
    type: 'carton',
    price:"3000",
    description: "our chicken fiesta are sure to satisfy your cravings. Perfect for game days, parties, or just a tasty snack, these juicy wings are a crowd-pleaser every time. Elevate your gatherings with our delicious chicken wings today",   
    imgSrc: "https://media.istockphoto.com/id/93456470/photo/two-raw-chicken-breast-on-white-backdrop.webp?b=1&s=170667a&w=0&k=20&c=wAOTKX0Vv_3d_Brat7SFC1ExMsyICnEO2zgQprWCfSU="
},
{
    id:15,
    name:'Natundo',
    type: "medium",
    price:"6000",
    description: "the exquisite taste of our succulent chicken fiesta. Slow-grown for maximum flavor and tenderness, perfect for creating unforgettable culinary masterpieces",
    imgSrc: "https://media.istockphoto.com/id/93456512/photo/raw-chicken.webp?b=1&s=170667a&w=0&k=20&c=RYuIV0FpnvJM5PFKoo0QCGVX5mctuFmRSyjYyx7JyZg="

},


{
    id:16,
    name:'Valentine',
    type: "medium",
    price:"3500",
    description: "Elevate your meals with the unmatched quality and taste of our premium chicken today",
    imgSrc: "https://media.istockphoto.com/id/599876836/photo/raw-chicken-legs.webp?b=1&s=170667a&w=0&k=20&c=WuoXqrCN77BVD5fkTpuvARyC6JE3AVD7gOLK0LjW-2M="

},
{
    id:17,
    name:'Valentine',
    type: "carton",
    price:"60000",
    description: "Elevate your meals with the unmatched quality and taste of our premium chicken today",
    imgSrc: "https://media.istockphoto.com/id/599876836/photo/raw-chicken-legs.webp?b=1&s=170667a&w=0&k=20&c=WuoXqrCN77BVD5fkTpuvARyC6JE3AVD7gOLK0LjW-2M="

},
{
    id:18,
    name:'Chicken wings',
    type: "carton",
    price:"55000",
    description: "Elevate your meals with the unmatched quality and taste of our premium chicken today",
    imgSrc: "https://media.istockphoto.com/id/1487436087/photo/chicken-thighs.webp?b=1&s=170667a&w=0&k=20&c=r96a6RDkPiPikGtdQ8Bkz7KykNM5Tqf9G1FEykoOGzI="

},
{
    id:19,
    name:'Chicken fiesta',
    type: "carton",
    price:"44000",
    description: "Elevate your meals with the unmatched quality and taste of our premium chicken today",
    imgSrc: "https://media.istockphoto.com/id/182372395/photo/chicken-breasts-against-white-background.webp?b=1&s=170667a&w=0&k=20&c=uOB467YiPklm7yKN_96oNOVdbbakn8zI_Wk_gsdFg5k="

},
{
    id:20,
    name:'Tilapia fish',
    type: "carton",
    price:"45000",
    description: "Elevate your meals with the unmatched quality and taste of our premium Tilapia fish today",
    imgSrc: "https://media.istockphoto.com/id/495669292/photo/fish-on-the-box.webp?b=1&s=170667a&w=0&k=20&c=1RMm1YkdICWN5Gs1wu1dr3c75Djxx4FWkBZPksLESWw="

},
]

module.exports= detailsRouter;