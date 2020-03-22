
const express = require('express')
const app = express()
const router = express.Router()
const path = require('path')


router.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/about.html'))
});

module.exports = router;