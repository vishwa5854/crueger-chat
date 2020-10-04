const express = require('express');
const router = express.Router();
const messages = require('../models/messages');

router.post("/sendMessage",
    (req, res) => {
        messages.send(req.body,
            (error, data) => {
                if(error){
                    res.status(500).send(error.message);
                }
                else {
                    res.status(200).send(data);
                }
            }
        );
    }
);

router.post("/receiveNewMessages",
    (req, res) => {
        messages.getNew(req.body,
            (error, data) => {
                if(error){
                    res.status(500).send(error.message);
                }
                else {
                    res.status(200).send(data);
                }
            }
        );
    }
);

router.post("/getAllMessages",
    (req, res) => {
        console.log(req.body);
        messages.getAll(req.body,
            (error, data) => {
                if(error){
                    res.status(500).send(error.message);
                }
                else {
                    res.status(200).send(data);
                }
            }
        );
    }
);

module.exports = router;
