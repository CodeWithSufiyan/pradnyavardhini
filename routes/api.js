const express = require('express')
const router = express.Router();

router.get('/products', (req, res) => {
    res.send("hello")
})
router.post('/products', (req, res) => {
    res.send(req.body)
})
router.put('/products/:id', (req, res) => {
    res.send(req.params.id)
})
router.delete('/products/:id', (req, res) => {
    res.send(req.params.id)
})
module.exports = router