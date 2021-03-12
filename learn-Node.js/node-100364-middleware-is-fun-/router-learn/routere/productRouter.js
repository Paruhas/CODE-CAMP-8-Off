const express = require('express');

const router = express.Router();

router.post('/login', (req, res, next) => {
    res.status(200).send('USER PRODUCT LOGIN');
});
router.post('/register', (req, res, next) => {});
router.get('/profile', (req, res, next) => {});
router.get('/post', (req, res, next) => {});
router.post('/profile', (req, res, next) => {});
router.delete('/post', (req, res, next) => {});

module.exports = router