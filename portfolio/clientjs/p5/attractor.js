// Fluid Glyph
// Alex Norton :: 2016
// https://github.com/alexnortn/Portfolio

// A Toxilibs class for implementing a Strange Attractor

"use strict";

let $ = require('jquery'),
	toxi = require('toxiclibsjs'),
	p5 = require('p5');

// Child class constructor
function Attractor(args = {}) {
	
	let p = args.p; // p5 instance
	let _this = this;

	this.physics = args.physics || new toxi.physics2d.VerletPhysics2D(0,0); // Initialize the physics;
	this.position = args.position || 0;
	this.range = args.range || 10;
	this.strength = args.strength || 1;
	this.locked = args.locked || false;

	toxi.physics2d.VerletParticle2D.call(_this,_this.position);
	
	this.attractForce = new toxi.physics2d.behaviors.AttractionBehavior(_this, _this.range, _this.strength);

	_this.physics.addParticle(_this);
	_this.physics.addBehavior(_this.attractForce);

	if (_this.locked) {
		_this.lock(); // Lock particle in place
	}

	// // Override the display method
	this.display = function() {
		let radius = p.abs(_this.strength * 200);
		let alpha = p.map(_this.strength, 0.05, -0.05, 0, 255); // 1/x | inversely proportional

		p.noStroke();
		p.fill(35,35,35,alpha);
		p.ellipse(
			_this.x,
			_this.y,
			radius,
			radius
		);
	}
 	
	this.hover = function() {
		attractForce.setStrength(0.5);
	}

	this.away = function() {
		attractForce.setStrength(0.1);
	}

	this.press = function() {
		let newOpStrength = attractForce.getStrength() * -25;
		attractForce.setStrength(newOpStrength);
	}
}

// Inherit from the parent class
Attractor.prototype = Object.create(toxi.physics2d.VerletParticle2D.prototype);
Attractor.prototype.constructor = Attractor;

module.exports = Attractor;