// https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
'use strict'

const express = require('express');
const app = express();
const jsonParser = express.json();
const port = 3000;

const informationalResponses = require('./httpCodes/informationalResponses');
const successfulResponses = require('./httpCodes/successfulResponses');
const redirectionMessages = require('./httpCodes/redirectionMessages');
const clientError = require('./httpCodes/clientError');
const serverError = require('./httpCodes/serverError');
const customCodes = require('./httpCodes/customCodes');

app.get('/', (req, res) => {
    res.send('Hello! This is a simple API for testing purposes. It returns different HTTP Status Codes.');
});

app.use('/informational-responses', informationalResponses);
app.use('/successful-responses', successfulResponses);
app.use('/redirection-messages', redirectionMessages);
app.use('/client-error', clientError);
app.use('/server-error', serverError);
app.use('/custom', customCodes);


app.listen(port, () => {
    console.log(`Tester API running on port ${port}`);
});