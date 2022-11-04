// ???-??? custom-error-responses
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

function delay(time) {
return new Promise(resolve => setTimeout(resolve, time));
};

router.route('/').all((req, res) => {
    res.send('This will return Custom errors and responses.');
});

// [DEVELOPER TODO]
// Use this method as a template for your custom errors.
/* I'm a sweet potato */
router.route('/419').all(async (req, res) => {
    console.debug(`I'm a sweet potato`);
        
    res.status(419);
    res.send(`I'm a sweet potato 🍠`);
    res.end();
});

// [DEVELOPER TODO]
// You can also add your custom error and responses to the
// httpCodesDefinition.json file, and they will be automatically
// caught here.
router.route('/:httpCode').all((req, res) => {
    console.debug(req.params.httpCode);
    let httpCodeDefinition = httpCodesDefinition['custom-error-responses'][req.params.httpCode];
    console.log(httpCodeDefinition);
    res.status(parseInt(req.params.httpCode));
    res.json(httpCodeDefinition);
    res.end();
});

init();

module.exports = router