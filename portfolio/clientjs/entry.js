
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

	activateGlyph(_mobile);

});


// Instantiate the Glyph simulation
function activateGlyph(mobile) {
	
	GLYPH.init({
		mobile: mobile,
	});

	GLYPH.canvas().done(function (canvas) {
		// _this.view.canvas = $(canvas);
		// _this.view.canvas.addClass('neural-network');
	});
}