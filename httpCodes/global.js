// TODO

// Unify code and avoid DRY (e.g. the method that returns http codes using the JSON)

// router.route('/:httpCode').all((req, res) => {
//     console.debug(req.params.httpCode);
//     let httpCodeDefinition = httpCodesDefinition['custom-error-responses'][req.params.httpCode];
//     console.log(httpCodeDefinition);
//     res.status(parseInt(req.params.httpCode));
//     res.json(httpCodeDefinition);
//     res.end();
// });