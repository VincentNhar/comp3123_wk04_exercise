var express = require('express')

const SERVER_PORT = 8081

var app = express()

app.get("/Hello", (req,res)=>{
    res.send("<h1>Hello Express JS</h1>")
})

app.get("/User", (req,res) => {
    //Querystring
    res.json(req.query)
})

app.post("/User/:firstname/:lastname", (req,res) => {
    //Path-parameter
    res.json(req.params)
})


app.listen(SERVER_PORT,() => {
    console.log(`Server running at http://localhost:${SERVER_PORT}/`)
})