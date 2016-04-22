

"use strict";

let express = require('express');
let router  = express.Router();


// Declare letiables
let fs = require('fs'),
    contents,
    bios_text,
    welcome_text,
    projects;

// Read the file and send to the callback
fs.readFile('./clientjs/content.json', handleFile)

// Write the callback function
function handleFile(err, data) {
    if (err) throw err
    contents = JSON.parse(data)
    // You can now play with your datas
    console.log(contents);
    projects = contents.projects;
    bios_text = contents.bios_text;
    welcome_text = contents.welcome_text;
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
  	title: 'Alex Norton',
  	projects: projects,
    welcome_text: welcome_text,
    bios_text: bios_text
  });
});

module.exports = router;
