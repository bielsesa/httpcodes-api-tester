// 300-399 redirection-messages
const express = require('express')
const router = express.Router()
const fs = require('fs');

const parseHttpCode = (code) => {
    
}

router.route('/').all((req, res) => {
    res.send('This will return Client error HTTP codes, that range from 400 to 499.');
});

/* 400 Bad Request */
router.route('/400')
    .all((req, res) => {
        res.status(400)
            .send({
                name: 'Bad Request',
                description: 'The server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing).'
            });
    });
router.route('/bad-request')
    .all((req, res) => {
        res.status(400)
            .send('Bad Request');
    });

module.exports = router