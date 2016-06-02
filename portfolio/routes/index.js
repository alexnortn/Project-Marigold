

"use strict";

let express = require('express');
let router  = express.Router();


// Declare letiables
let fs = require('fs'),
    contents,
    bios_text,
    welcome_text,
    feature,
    select_work,
    case_studies;

// Read the file and send to the callback
fs.readFile('./clientjs/content.json', handleFile)

// Write the callback function
function handleFile(err, data) {
    if (err) throw err
    contents = JSON.parse(data)
    // You can now play with your datas
    // console.log(contents);
    case_studies = contents.projects.case_studies;
    select_work = contents.projects.select_work;
    feature = contents.feature;
    bios_text = contents.bios_text;
    welcome_text = contents.welcome_text;
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
  	title: 'Alex Norton',
  	case_studies: case_studies,
    select_work: select_work,
    welcome_text: welcome_text,
    feature: feature,
    bios_text: bios_text
  });
});

module.exports = router;
