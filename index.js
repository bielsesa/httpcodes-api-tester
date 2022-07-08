// https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
'use strict'

const express = require('express');
const app = express();
const jsonParser = express.json();
const port = 3000;

const clientError = require('./httpCodes/clientError');
const serverError = require('./httpCodes/serverError');

app.get('/', (req, res) => {
    res.send('Hello! This is a simple API for testing purposes. It returns different HTTP Status Codes.');
});

// 100-199 informational-responses
// 200-299 successful-responses
// 300-399 redirection-messages
app.use('/client-error', clientError);
app.use('/server-error', serverError);


app.listen(port, () => {
    console.log(`Tester API running on port ${port}`);
});