// 300-399 redirection-messages
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
    res.send('This will return Redirection messages HTTP codes, that range from 300 to 399.');
});

router.route('/:httpCode').all((req, res) => {
    console.debug(req.params.httpCode);
    let httpCodeDefinition = httpCodesDefinition['redirection-messages'][req.params.httpCode];
    console.log(httpCodeDefinition);
    res.status(parseInt(req.params.httpCode));
    res.json(httpCodeDefinition);
    res.end();
});

init();

module.exports = router