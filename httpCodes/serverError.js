// 500-599 server-error-responses
const express = require('express')
const router = express.Router()
const fs = require('fs');

router.route('/').all((req, res) => {
    res.send('This will return Server error HTTP codes, that range from 500 to 599.');
});

/* 500 Internal Server Error */
router.route('/500')
    .all((req, res) => {
        res.status(500)
            .send('Internal Server Error');
    });
router.route('/internal-server-error')
    .all((req, res) => {
        res.status(500)
            .send('Internal Server Error');
    });

/* 501 Not Implemented */
router.route('/501')
.all((req, res) => {
    res.status(501)
        .send('Not Implemented');
});
router.route('/not-implemented')
.all((req, res) => {
    res.status(501)
        .send('Not Implemented');
});

/* 502 Bad Gateway */
router.route('/502')
.all((req, res) => {
    res.status(502)
        .send('Bad Gateway');
});
router.route('/bad-gateway')
.all((req, res) => {
    res.status(502)
        .send('Bad Gateway');
});

/* 503 Service Unavailable */
router.route('/503')
    .all((req, res) => {
        res.status(503)
            .send('Service Unavailable');
    });
router.route('/service-unavailable')
    .all((req, res) => {
        res.status(503)
            .send('Service Unavailable');
    });

/* 504 Gateway Timeout */
router.route('/504')
    .all((req, res) => {
        res.status(504)
            .send('Gateway Timeout');
    });
router.route('/gateway-timeout')
    .all((req, res) => {
        res.status(504)
            .send('Gateway Timeout');
    });

/* 505 HTTP Version Not Supported */
router.route('/505')
    .all((req, res) => {
        res.status(505)
            .send('HTTP Version Not Supported');
    });
router.route('/http-version-not-supported')
    .all((req, res) => {
        res.status(505)
            .send('HTTP Version Not Supported');
    });

/* 506 Variant Also Negotiates */
router.route('/506')
    .all((req, res) => {
        res.status(506)
            .send('Variant Also Negotiates');
    });
router.route('/variant-also-negotiates')
    .all((req, res) => {
        res.status(506)
            .send('Variant Also Negotiates');
    });

/* 507 Insufficient Storage (WebDAV) */
router.route('/507')
    .all((req, res) => {
        res.status(507)
            .send('Insufficient Storage');
    });
router.route('/insufficient-storage')
    .all((req, res) => {
        res.status(507)
            .send('Insufficient Storage');
    });

/* 508 Loop Detected (WebDAV) */
router.route('/508')
    .all((req, res) => {
        res.status(508)
            .send('Loop Detected');
    });
router.route('/loop-detected')
    .all((req, res) => {
        res.status(508)
            .send('Loop Detected');
    });

/* 510 Not Extended */
router.route('/510')
    .all((req, res) => {
        res.status(510)
            .send('Not Extended');
    });
router.route('/not-extended')
    .all((req, res) => {
        res.status(510)
            .send('Not Extended');
    });

/* 511 Network Authentication Required */
router.route('/511')
    .all((req, res) => {
        res.status(511)
            .send('Network Authentication Required');
    });
router.route('/network-authentication-required')
    .all((req, res) => {
        res.status(511)
            .send('Network Authentication Required');
    });

module.exports = router