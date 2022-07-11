// 100-199 informational-responses
const express = require('express');
const router = express.Router();
const fs = require('node:fs');
const path = require('node:path');

let httpCodesDefinition;

const init = () => {
    // parse codesDefinition.json
    const rawData = fs.readFileSync(path.join(__dirname, '../res/httpCodesDefinition.json'));
    // load into memory as a json object
    httpCodesDefinition = JSON.parse(rawData);
};

router.route('/').all((req, res) => {
    res.send('This will return Informational Responses HTTP codes, that range from 100 to 199.');
});

router.route('/:httpCode').all((req, res) => {
    console.debug(req.params.httpCode);
    let intResultCode = parseInt(req.params.httpCode);
    let httpCodeDefinition = httpCodesDefinition['informational-responses'][req.params.httpCode];
    console.debug(httpCodeDefinition);
    
    // res.status(intResultCode === 100 ? 200 : intResultCode);
    res.status(intResultCode);
    res.json(httpCodeDefinition);
    res.end();
});

init();

module.exports = router