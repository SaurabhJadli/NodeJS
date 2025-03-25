let express = require('express')
let mongoose = require('mongoose')
const cors = require("cors");
require('dotenv').config()
const { create, read, del, update } = require('./controllers/curd');
let app = express()


// Middleware
app.use(cors());
app.use(express.json())

app.post('/user', create)
app.get('/user/data', read)
app.put('/user/update/:id', update)
app.delete('/user/delete/:id', del)


mongoose.connect(process.env.DBurl)
.then(() => {
    console.log('Connected to Database')
})
.catch((err) => {
    console.log('Error connecting to Database')
})

app.listen(process.env.PORT, () => {
    console.log('Server is running on port 3000')
})