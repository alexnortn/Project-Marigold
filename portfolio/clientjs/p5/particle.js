// Fluid Glyph
// Alex Norton :: 2016
// https://github.com/alexnortn/Portfolio

// A Toxilibs class for implementing particles

"use strict";

let $ = require('jquery'),
	toxi = require('toxiclibsjs'),
	p5 = require('p5');

// Child class constructor
function Particle(args = {}) {

	// Private arguments from constructor
	let p = args.p;
	let _this = this;

	this.position = args.position || new toxi.geom.Vec2D(0,0);

	toxi.physics2d.VerletParticle2D.call(this,_this.position);

	// Override the display method
	this.display = function(){
		p.fill(255,0,0);
		// p.stroke(200);
		// p.strokeWeight(2);
		p.noStroke();
		// p.ellipse(this.x,this.y,1,1);
	}
}

// Inherit from the parent class
Particle.prototype = Object.create(toxi.physics2d.VerletParticle2D.prototype);
Particle.prototype.constructor = Particle;

module.exports = Particle;