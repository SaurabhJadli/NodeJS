const api1Route = require('./api1Route')
const api2Route = require('./api2Route')

let router = require('express').Router()

router.use('/apis', api1Route)
router.use('/apis', api2Route)

module.exports = router