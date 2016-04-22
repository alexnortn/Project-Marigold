

"use strict";

let express = require('express');
let router = express.Router();

/* 
 * GET userlist
 */
// router.get('/userlist', function(req, res) {
//     let db = req.db;
//     db.collection('userlist').find().toArray(function (err, items) {
//         res.json(items);
//     });
// });

module.exports = router;
