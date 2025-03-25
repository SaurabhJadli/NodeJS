let router = require('express').Router()
let allAPI = require('./API/index')

router.use('/routes', allAPI)

module.exports = router