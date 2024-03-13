const express=require('express');
const mysql=require('mysql');
const cors=require('cors');

const app = express();
app.use(cors())
app.use(express.json())

const dataBase=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"SignUp"
})


app.post('/SignUp', (req, res)=>{
    const sql ="INSERT INTO login('name','email', 'password') VALUE(?)"
    const value= [
        req.body.name,
        req.body.email,
        req.body.password
    ]
    dataBase.query(sql, [value], (err, data)=>{
        if (err){
            return res.json(Error)
        }
        return res.json(data)

    })
     
})



app.listen(8081,()=>{
console.log('listening')
})