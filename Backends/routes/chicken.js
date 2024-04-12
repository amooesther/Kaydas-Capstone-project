var express = require('express')
const chickenRouter = express.Router();

chickenRouter.get("/", (req, res) => {
    res.json({ chicken  });
})


const chicken= [
{
    id:1,
    name:'Natundo',
    type: 'Broiler',
    price: "6000",   
    imgrc: "https://media.istockphoto.com/id/93456512/photo/raw-chicken.webp?b=1&s=170667a&w=0&k=20&c=RYuIV0FpnvJM5PFKoo0QCGVX5mctuFmRSyjYyx7JyZg="
},
{
    id:2,
    name:'Old Layer',
    type: 'Hard',
    price: "5000",   
    imgrc: "https://media.istockphoto.com/id/1282866808/photo/fresh-raw-chicken.webp?b=1&s=170667a&w=0&k=20&c=tVhkkolwq60QmPMQnDimXAeXyOmgKBuURTykgvFznwo="
},
{
    id:3,
    name:'Fiesta Chicken',
    type: "medium",
    price: "4000",
    imgrc: "https://media.istockphoto.com/id/93456470/photo/two-raw-chicken-breast-on-white-backdrop.webp?b=1&s=170667a&w=0&k=20&c=wAOTKX0Vv_3d_Brat7SFC1ExMsyICnEO2zgQprWCfSU="

},
{
    id:4,
    name:'Sausage',
    type: "medium",
    price: "2000",
    imgrc: "https://media.istockphoto.com/id/1475630902/photo/tasty-sausages-frankfurters-isolated-on-white-background.webp?b=1&s=170667a&w=0&k=20&c=RnhoMQ3Ykf8xx2aY-C500H4qLFBQaQNpmmgaVZh7Yoc="

}

]

module.exports= chickenRouter;