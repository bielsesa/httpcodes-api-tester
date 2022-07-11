// 100-199 informational-responses
const express = require('express')
const router = express.Router()
const fs = require('fs');
const path = require('node:path');

let httpCodesDefinition;
let requestedHttpCodeDefinition;

const init = () => {
    console.debug('init informationalResponses.js');
    // console.debug('init informationalResponses.js');

    // parse codesDefinition.json
    const rawData = fs.readFileSync(path.join(__dirname, '../res/httpCodesDefinition.json'));

    // load into memory as a json object
    httpCodesDefinition = JSON.parse(rawData);

    // console.debug('httpCodesDefinition value:');
    // console.debug(httpCodesDefinition);
};

const parseHttpCode = (code) => {
    return httpCodesDefinition['informational-responses'][code];
    // return new Promise(resolve => {
    //     resolve(httpCodesDefinition['informational-responses'][code]);
    // }); 
};

// DOES NOT WORK
// router.use((req, res, next) => {
//     requestedHttpCodeDefinition = httpCodesDefinition['informational-responses'][req.params.httpCode];
//     next();
// });

router.route('/').all((req, res) => {
    res.send('This will return Informational Responses HTTP codes, that range from 100 to 199.');
});

// all codes from parsing
router.route('/:httpCode')
    .all((req, res, next) => {
        setTimeout(() => {            
            res.status(parseInt(req.params.httpCode))
            .json(parseHttpCode(req.params.httpCode));
            // try {
            //     // let response = parseHttpCode(req.params.httpCode);
            //     // console.debug('httpCode value:');
            //     // console.debug(req.params.httpCode);
            //     // console.debug('response value:');
            //     // console.debug(response);
            //     // console.debug('requestedHttpCodeDefinition value:');
            //     // console.debug(requestedHttpCodeDefinition);

            //     res.status(parseInt(req.params.httpCode))
            //         .json(parseHttpCode(req.params.httpCode));
            // } catch (err) {
            //     next(err)
            // }
        }, 100);
    });

/* 400 Bad Request */
// router.route('/400')
//     .all((req, res) => {
//         let response = parseHttpCode("100");
//         console.debug('response value:');
//         console.debug(response);

//         res.status(400)
//             .send(JSON.stringify(response));
//     });
// router.route('/bad-request')
//     .all((req, res) => {
//         res.status(400)
//             .send('Bad Request');
//     });

init();

module.exports = router