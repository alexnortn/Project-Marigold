// Fluid Glyph
// Alex Norton :: 2016
// https://github.com/alexnortn/Portfolio

// A p5 class for implementing a custom button

"use strict";

let $ = require('jquery'),
	toxi = require('toxiclibsjs'),
	p5 = require('p5');

// Child class constructor
function MakeButton(args = {}) {
	
	let p = args.p;

	this.x = args.x || 0;
	this.y = args.y || 0;
	this.buttonWidth = args.buttonWidth || 10;
	
	let xPos;
	let yPos;
	let opacity = 0;

	let sizeOffset = this.buttonWidth / 2;

	this.display = function(_x, _y) {
		let x = _x;
		let y = _y;

		xPos = (50);
		yPos = y - (y / 2); // Normalize for position

		// Center ellipse
		p.fill(0,0,0,opacity);
		p.ellipseMode(CENTER);
		p.ellipse(xPos,yPos,25,25);

		// Center Cross
		stroke(255,255,255);
		strokeWeight(2);
		line(
			xPos,
			yPos+2.5,
			xPos,
			yPos-2.5
		);
		line(
			xPos-2.5,
			yPos,
			xPos+2.5,
			yPos
		);

		// Dashed Borders
		/*
		p.fill(0,0,0);
		p.noStroke();
		let r = 1;
		let spaces = 30;
		let spacing = this.buttonWidth / spaces;
		for (let i = 0; i < spaces; i+= spacing) {
			p.ellipse(((xPos - sizeOffset) + (i * spacing)), (yPos - sizeOffset), r, r);
			p.ellipse(((xPos - sizeOffset) + (i * spacing)), (yPos + sizeOffset), r, r);
			p.ellipse((xPos - sizeOffset), ((yPos + sizeOffset) - (i * spacing)), r, r);
			p.ellipse((xPos + sizeOffset), ((yPos + sizeOffset) - (i * spacing)), r, r);
		}
		*/
	}

	this.hover = function(_x, _y) {
		let x = _x,
			y = _y;

		xPos = (50);
		yPos = y - (y / 2); // Normalize for position

		// Center ellipse
		p.fill(0,0,0);
		p.ellipseMode(CENTER);
		p.ellipse(xPos,yPos,25,25);

		// Center Cross
		p.stroke(255,255,255);
		p.strokeWeight(2);
		p.line(
			xPos-2.5,
			yPos,
			xPos+2.5,
			yPos
		);
	}

	this.loc = function() {
		let loc = p.createVector(xPos, yPos);
		return loc;
	}

	this.opa = function(_opacity) {
		opacity = _opacity;
	}
}

	MakeButton.prototype.constructor = MakeButton;

	module.exports = MakeButton;




