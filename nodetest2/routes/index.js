var express = require('express');
var router  = express.Router();


    // Declare variables
var fs = require('fs'),
    obj

// Read the file and send to the callback
fs.readFile('./public/javascripts/content.json', handleFile)

// Write the callback function
function handleFile(err, data) {
    if (err) throw err
    obj = JSON.parse(data)
    // You can now play with your datas
    console.log(obj);
}


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Alex Norton', json: obj });
});

module.exports = router;
