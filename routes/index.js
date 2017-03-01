

"use strict";

let express = require('express');
let router  = express.Router();

let fs = require('fs'),
    endeavors,
    bios_text,
    welcome_text,
    feature,
    projects,
    case_studies,
    contact;

fs.readFile('./clientjs/content.js', handleFile);

function handleFile(err, data) {
    if (err) {
        throw err;
    }

    endeavors = JSON.parse(data);
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
