const express = require('express')
const db = require('../db')
const router = express.Router()

router.get('/', async(req, res) => {
    try {
        let results = await db.all()
         res.json(results);
    } catch (err) {
         res.status(500).json({message: err.message});
    }    
});

router.get('/:id', async(req, res) => {
    try {
        let results = await db.one(req.params.id)
         res.json(results);
    } catch (err) {
         res.status(500).json({message: err.message});
    }    
});

module.exports = router;