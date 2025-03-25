const api1 = require('../../controllers/api1')
const router = require('express').Router()

router.get('/api1', api1)

module.exports = router