var express = require('express')
const chickenPartRouter = express.Router();

chickenPartRouter.get("/", (req, res) => {
    res.json({ chickenPart });
})


const chickenPart = [
{
    id:9,
    name:'Gizzard',
    type: 'medium',
    price: "6000",   
    imgSrc: "https://media.istockphoto.com/id/1880132133/photo/raw-chicken-or-turkey-gizzards-with-salt-spices-and-herbs.webp?b=1&s=170667a&w=0&k=20&c=uKLyrywxapeZZElUnYck-IzydWf8gjSYNoUOxSMwmJA="
},
{
    id:10,
    name:'wings',
    type: 'medium',
    price: "5000",   
    imgSrc: "https://media.istockphoto.com/id/489516996/photo/raw-chicken-wings-isolated-on-white-background.webp?b=1&s=170667a&w=0&k=20&c=1tPtBii0uTXrB7H7eQtSS1A95bINfm_ZhZB9fu1A2AU="
},
{
    id:11,
    name:'chicken laps',
    type: "2500",
    price: "4000",
    imgSrc: "https://media.istockphoto.com/id/1397742712/photo/marinated-raw-chicken-legs.webp?b=1&s=170667a&w=0&k=20&c=s1VaRCx05hfu5aSQqqoqm1mlf8Gm5oKnQhDAg8ik5QA="

},
{
    id:12,
    name:'Drumsticks',
    type: "medium",
    price: "4500",
    imgSrc: "https://media.istockphoto.com/id/599876836/photo/raw-chicken-legs.webp?b=1&s=170667a&w=0&k=20&c=WuoXqrCN77BVD5fkTpuvARyC6JE3AVD7gOLK0LjW-2M="

}

]

module.exports= chickenPartRouter;