const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.send('task route'));

router.post('/', (req, res) => {
    console.log(req.body);
    res.send('task route');
});

module.exports = router;
