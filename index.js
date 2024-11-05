const express = require("express")
const app = express()
app.use(express.json())
const jwt = require("jsonwebtoken")

const users = [
    {name:'zolboo',id:1},
    {name:'unuu',id:2},
    {name:'unku',id:3}
]

app.get("/users",(req,res)=>{
    const token = req.headers.authorization
    jwt.verify(token,"secret",(err)=>{
        if(err){
            res.send("invalid token")
        }
    })
    if(token){
        res.send(users)
    } 
})

app.post("/login", (req,res)=>{
    const body = req.body
    const token = jwt.sign(body,"secret")
    res.send(token)
})

app.listen(8000)