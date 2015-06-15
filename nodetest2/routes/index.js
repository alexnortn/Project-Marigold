var express = require('express');
var router  = express.Router();


// Declare variables
var fs = require('fs'),
    contents,
    welcome,
    projects;

// Read the file and send to the callback
fs.readFile('./public/javascripts/content.json', handleFile)

// Write the callback function
function handleFile(err, data) {
    if (err) throw err
    contents = JSON.parse(data)
    // You can now play with your datas
    console.log(contents);
    projects = contents.projects;
    welcome = contents.welcome;
}


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
  	title: 'Alex Norton',
  	projects: projects,
    welcome: welcome
  });
});

module.exports = router;
