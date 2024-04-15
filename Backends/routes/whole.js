var express = require('express')
const wholeRouter = express.Router();

wholeRouter.get("/", (req, res) => {
    res.json({ whole });
})


const whole = [
{
    id:13,
    name:'Zartech',
    type: 'Broiler',
    price: "3800",   
    imgSrc: "https://media.istockphoto.com/id/1282866808/photo/fresh-raw-chicken.webp?b=1&s=170667a&w=0&k=20&c=tVhkkolwq60QmPMQnDimXAeXyOmgKBuURTykgvFznwo="
},
{
    id:14,
    name:'Chicken Fiesta',
    type: 'Broiler',
    price: "3000",   
    imgSrc: "https://media.istockphoto.com/id/93456470/photo/two-raw-chicken-breast-on-white-backdrop.webp?b=1&s=170667a&w=0&k=20&c=wAOTKX0Vv_3d_Brat7SFC1ExMsyICnEO2zgQprWCfSU="
},
{
    id:15,
    name:'Natundo',
    type: "medium",
    price: "6000",
    imgSrc: "https://media.istockphoto.com/id/93456512/photo/raw-chicken.webp?b=1&s=170667a&w=0&k=20&c=RYuIV0FpnvJM5PFKoo0QCGVX5mctuFmRSyjYyx7JyZg="

},
{
    id:16,
    name:'Valentine',
    type: "medium",
    price: "3500",
    imgSrc: "https://media.istockphoto.com/id/599876836/photo/raw-chicken-legs.webp?b=1&s=170667a&w=0&k=20&c=WuoXqrCN77BVD5fkTpuvARyC6JE3AVD7gOLK0LjW-2M="

}

]

module.exports= wholeRouter;