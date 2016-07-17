
"use strict";

let $ = require('jquery'),
	isMobile = require('ismobilejs');

window.jQuery = $; // Assign to global window object

// Node Modules
require('hammerjs');
require('jquery-hammerjs');

// Internal Scripts
require('./global.js');

let GLYPH = require('./p5/sketch.js');
let _mobile = false; // Boolean for mobile devices

// Activation Function
$(document).ready(function () {

	// Check mobile
    if (isMobile.tablet || isMobile.phone) {
        _mobile = true;
    }

    let phone = isMobile.phone
    	? true
		: false;

    let tablet = isMobile.tablet
    	? true
    	: false;

	activateGlyph(_mobile, phone, tablet);

});


// Instantiate the Glyph simulation
function activateGlyph(mobile, phone, tablet) {
	
	GLYPH.init({
		mobile: mobile,
		phone: phone,
		tablet: tablet,
	});

	GLYPH.canvas().done(function (canvas) {
		// _this.view.canvas = $(canvas);
		// _this.view.canvas.addClass('neural-network');
	});
}