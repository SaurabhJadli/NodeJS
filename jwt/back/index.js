require('dotenv').config();
const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const app = express();
app.use(cors());

const uesrDAta = {
    Uname: "name",
    email: "emaail"
}


app.get('/login', async (req, res) => {
    uData = req.body
    res.send('hi')
})

app.post('/login', async (req, res) => {
    uData = req.body
    console.log(uData);
    
})

const token = jwt.sign(uesrDAta, 'thihohf')

console.log(token);


app.listen(3000, () => {
    console.log("app is listing");
})