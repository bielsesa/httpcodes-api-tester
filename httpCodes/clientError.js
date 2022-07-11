// 400-499 client-error-responses
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
    res.send('This will return Client error HTTP codes, that range from 400 to 499.');
});

router.route('/:httpCode').all((req, res) => {
    console.debug(req.params.httpCode);
    let httpCodeDefinition = httpCodesDefinition['client-error-responses'][req.params.httpCode];
    console.log(httpCodeDefinition);
    res.status(req.params.httpCode);
    res.json(httpCodeDefinition);
    res.end();
});

init();

module.exports = router