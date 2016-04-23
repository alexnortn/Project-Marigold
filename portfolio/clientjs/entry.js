
"use strict";

let $ = require('jquery');

window.jQuery = $; // Assign to global window object

// Node Modules
require('hammerjs');
require('jquery-hammerjs');

// Internal Scripts
require('./global.js');

let GLYPH = require('./p5/sketch.js');

// Activation Function
$(document).ready(function () {

	activateGlyph();

});


// Instantiate the Glyph simulation
function activateGlyph() {
	GLYPH.init();
	GLYPH.canvas().done(function (canvas) {
		// _this.view.canvas = $(canvas);
		// _this.view.canvas.addClass('neural-network');
	});
}