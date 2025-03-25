const express = require('express')
const route = require('./routes/index')
const app = express()
const cors = require('cors');
const port = 3000

app.use(cors());
app.use(express.json())

app.get('/', (req, res) => {
    res.send('server is running')
} )


app.use(route)

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
})