

"use strict";

let express = require('express');
let router  = express.Router();


// Declare letiables
let fs = require('fs'),
    endeavors,
    bios_text,
    welcome_text,
    feature,
    projects,
    case_studies,
    contact;

// Read the file and send to the callback
fs.readFile('./clientjs/content.json', handleFile)

// Write the callback function
function handleFile(err, data) {
    if (err) throw err
    endeavors = JSON.parse(data)
    // You can now play with your datas
    // console.log(endeavors);
    case_studies = endeavors.case_studies;
    projects = endeavors.projects;
    feature = endeavors.feature;
    bios_text = endeavors.bios_text;
    welcome_text = endeavors.welcome_text;
    contact = endeavors.contact;
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
  	title: 'Alex Norton',
  	case_studies: case_studies,
    projects: projects,
    welcome_text: welcome_text,
    contact: contact,
    feature: feature,
    bios_text: bios_text
  });
});

module.exports = router;
