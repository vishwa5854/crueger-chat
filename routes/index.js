const express = require('express');
const router = express.Router();

router.get('/',
    (req, res) => {
        res.render('index');
    }
);

router.get('/chat',
    (req, res) => {
        console.log(req.query);
        res.render('chat');
    }
);

module.exports = router;
