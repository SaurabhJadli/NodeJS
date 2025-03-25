const express = require("express")
const app = express()
const path = require("path")
const port = 3000

app.get("/", (req, res) => {
    res.send("hello root")
})

app.get("/about", (req, res) => {
    // res.send("this ia about")        send message to web page
    res.sendFile(path.join(__dirname, "index.html"))     //   send file to web page
})

app.get("/json", (req, res) => {
    res.json(
        {
            "name": 10,
            "num": 123
        }
    )
})

app.get("/params/:name", (req, res) => {
    res.send("hello " + req.params.name)
})

app.listen(port, () => {
    console.log("app lisning at port 3000")
})