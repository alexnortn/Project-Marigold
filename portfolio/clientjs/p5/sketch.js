// Alex Norton
// a^N 
// http://alexnortn.com


"use strict";

let toxi = require('toxiclibsjs'),
	p5 = require('p5'),
	$ = require('jquery'),
	Particle = require('./particle.js'),
	Nudge = require('./nudge.js'),
	MakeButton = require('./makeButton.js'),
	vertices = require('./data/verts.json');

	// p5.dom
	// let dom = require('../../node_modules/p5/lib/addons/p5.dom.js');
	require('p5/lib/addons/p5.dom');

let _options = {
	width: 100,
	height: 100,
	anchor: null,
};

let _canvas = $.Deferred();


// Running the sketch in instance mode, don't forget to preface all P5 methods with { p }
let glyph = function (p) {

	// Reference to physics world
	let physics;

	// Canvas
	let canvas;

	let aLockVert = [],
		aSpringVert = [],
		aSpringArr = [],
		aCounterLockVert = [],
		aCounterSpringVert = [],
		aCounterSpringArr = [],
		nLockVert = [],
		nSpringVert = [],
		nSpringArr = [],
		w,h,
		gravity,
		gravityStrength,
		xOff,
		mousePos,
		scaleFactor,
		nScaleFactor,
		center,
		glyphCenter,
		nOffset,
		phi,
		alphaOpa,
		timeOut,
		timeOut1,
		alphaOpa1,
		buttonFade,
		buttonFade1,
		lineOp,
		glyphOp,
		tempSelection,
		aCenterOffset,
		liveText,
		describeText,
		describeText1,
		hover,
		clockBool,
		bigGlyph,
		interestsArr = [],
		aVerts = [],
		aCounterVerts = [],
		nVerts = [];

	let nudgeAttractor; 
	let dashButton;

	let descriptiveText  = "This interactive visualization of interest was developed using the P5js framework along with the Toxiclibs physics library."; 
	let descriptiveText1 = "Vertices used to construct the character are influenced by an underlying physics system and mapped to extend towards difference areas of my interest.";

	p.preload = function() {
		// vertices = p.loadJSON("clientjs/p5/data/verts.json");
	}

	p.setup = function() {

		canvas = p.createCanvas(window.innerWidth, window.innerHeight);
		canvas.parent('interactive');
		canvas.id('glyph');

		_canvas.resolve(canvas.elt); // --> Sneaky deferred shenanigans

		p.noStroke();
		
		phi = (1 + p.sqrt(5)) / 2;

		w = p.windowWidth;
		h = p.windowHeight;
		scaleFunc(w,h);

		/*

			Toggle the clock, scale glyph

		*/

		clockBool = true;
		clockBool ? bigGlyph = 0.75 : bigGlyph = 1.25;

		mousePos = p.createVector();
		xOff = 0;
		alphaOpa = 0;
		alphaOpa1 = 0;
		glyphOp = 0;
		buttonFade = 0;
		buttonFade1 = 0;
		lineOp = 0;
		timeOut = 500;
		timeOut1 = 400;
		hover = false;

		// Address N Scaling
		nScaleFactor = 0.3;
		nOffset = p.createVector(250, -500);

		// Centering functions
		center = p.createVector(w/2, h/2);
		glyphCenter = p.createVector();
		aCenterOffset = p.createVector();
		centerGlyph(vertices);
		findCenter();

		// Load the arrays
		loadArrays(vertices);

		physics = new toxi.physics2d.VerletPhysics2D(); // Initialize the physics
		physics.setDrag (0.01);
		gravityStrength = new toxi.geom.Vec2D(0,0.5);
		gravity = new toxi.physics2d.behaviors.GravityBehavior(gravityStrength); // Set up Gravity
		physics.addBehavior(gravity);

		// Set the world's bounding box
		physics.setWorldBounds(
			new toxi.geom.Rect(
				0,
				0,
				p.width*1.25,
				p.height*1.25
			)
		);

		// Initiate the physics array
		physInit();
		
		// Make our Node Object
		nudgeAttractor = new Nudge({
			physics: physics,
			position: new toxi.geom.Vec2D(p.width/2,p.height/2),
			radius: 24,
			range: p.width/2,
			strength: 0.1,
			p: p,
		});

		// Make the button
		dashButton = new MakeButton ({
			x: 0,
			y: 0,
			buttonWidth: 50,
			p: p,
		});

		// Create text node
		liveText = p.createP().id('interests');
		liveText.parent('interactive');
		liveText.style("opacity", "0");
		describeText = p.createP(descriptiveText).class('describe');
		describeText.parent('interactive');
		describeText.style("opacity", "0");
		describeText1 = p.createP(descriptiveText1).class('describe');
		describeText1.parent('interactive');
		describeText1.style("opacity", "0");

		interestsArr.push('Artificial Intelligence','Neuroscience','Game Design','Graphic Design','Architecture','Urban Design','Physics','Computation');

	}

	p.draw = function() {

		// Update the physics world
		physics.update();

		// Update the attractor position
		p.touchIsDown ? mousePos.set(p.touchX ,p.touchY) : mousePos.set(p.mouseX,p.mouseY);
		nudgeAttractor.set(mousePos.x ,mousePos.y);

		p.background(255);
		// motionBlur();

		// Draw the bezier Shapes 
		drawBasicA();
		drawBasicN();

		// Set timeout for loading the clockViz
		if (timeOut > 0) timeOut--;
		if ((timeOut == 0) && (clockBool)) {
			// clockViz(); 
		} 

		if (timeOut1 > 0) timeOut1--;
		if (timeOut1 == 0) {
			fadeInButton();
		} 

		// Display the Physiscs Particles;
		displayPhys();

		// Button Interactivity
		hoverButton1();

	}

	function windowResized() {
		p.resizeCanvas(p.windowWidth, p.windowHeight);
		w = p.windowWidth;
		h = p.windowHeight;

		scaleFunc(w,h);
		// Empty the Physics Sim
		physEmpty();
		findCenter();
		centerGlyph(vertices);
		// Reload the Arrays
		loadArrays(vertices);
		// Initiate the physics array
		physInit();

	}

	function drawBezier(vertices) {

		p.beginShape();
		for (let i = 0; i < vertices.a_vertex.length; i++) {
		if(vertices.a_vertex[i].vertexType == true) {
			p.p.bezierVertex(
			vertices.a_vertex[i].x, vertices.a_vertex[i].y,
			vertices.a_vertex[i++].x, vertices.a_vertex[i].y,
			vertices.a_vertex[i++].x, vertices.a_vertex[i].y
			);
		} else {
			p.vertex(vertices.a_vertex[i].x, vertices.a_vertex[i].y);
		}
		}
		p.endShape(p.CLOSE);

	}

	function drawBasicA(){
		let fadeSpeed = 2;
		if (glyphOp < 255) glyphOp += fadeSpeed;
		// p.noStroke();
		p.stroke(1);
		// p.fill(35,35,35,glyphOp);
		p.beginShape();
		p.vertex(aSpringVert[0].x, aSpringVert[0].y);
		p.vertex(aSpringVert[1].x, aSpringVert[1].y);
		p.bezierVertex(aSpringVert[2].x, aSpringVert[2].y, aSpringVert[3].x, aSpringVert[3].y, aSpringVert[4].x, aSpringVert[4].y);
		p.bezierVertex(aSpringVert[5].x, aSpringVert[5].y, aSpringVert[6].x, aSpringVert[6].y, aSpringVert[7].x, aSpringVert[7].y);
		p.bezierVertex(aSpringVert[8].x, aSpringVert[8].y, aSpringVert[9].x, aSpringVert[9].y, aSpringVert[10].x, aSpringVert[10].y);
		p.bezierVertex(aSpringVert[11].x, aSpringVert[11].y, aSpringVert[12].x, aSpringVert[12].y, aSpringVert[13].x, aSpringVert[13].y);
		p.bezierVertex(aSpringVert[14].x, aSpringVert[14].y, aSpringVert[15].x, aSpringVert[15].y, aSpringVert[16].x, aSpringVert[16].y);
		p.bezierVertex(aSpringVert[17].x, aSpringVert[17].y, aSpringVert[18].x, aSpringVert[18].y, aSpringVert[19].x, aSpringVert[19].y);
		p.vertex(aSpringVert[20].x, aSpringVert[20].y);
		p.bezierVertex(aSpringVert[21].x, aSpringVert[21].y, aSpringVert[22].x, aSpringVert[22].y, aSpringVert[23].x, aSpringVert[23].y);
		p.bezierVertex(aSpringVert[24].x, aSpringVert[24].y, aSpringVert[25].x, aSpringVert[25].y, aSpringVert[26].x, aSpringVert[26].y);
		p.bezierVertex(aSpringVert[27].x, aSpringVert[27].y, aSpringVert[28].x, aSpringVert[28].y, aSpringVert[29].x, aSpringVert[29].y);
		p.bezierVertex(aSpringVert[30].x, aSpringVert[30].y, aSpringVert[31].x, aSpringVert[31].y, aSpringVert[32].x, aSpringVert[32].y);
		p.bezierVertex(aSpringVert[33].x, aSpringVert[33].y, aSpringVert[34].x, aSpringVert[34].y, aSpringVert[35].x, aSpringVert[35].y);
		p.bezierVertex(aSpringVert[36].x, aSpringVert[36].y, aSpringVert[37].x, aSpringVert[37].y, aSpringVert[38].x, aSpringVert[38].y);
		p.bezierVertex(aSpringVert[39].x, aSpringVert[39].y, aSpringVert[40].x, aSpringVert[40].y, aSpringVert[41].x, aSpringVert[41].y);
		p.bezierVertex(aSpringVert[42].x, aSpringVert[42].y, aSpringVert[43].x, aSpringVert[43].y, aSpringVert[44].x, aSpringVert[44].y);
		p.bezierVertex(aSpringVert[45].x, aSpringVert[45].y, aSpringVert[46].x, aSpringVert[46].y, aSpringVert[47].x, aSpringVert[47].y);
		p.vertex(aSpringVert[48].x, aSpringVert[48].y);
		p.bezierVertex(aSpringVert[49].x, aSpringVert[49].y, aSpringVert[50].x, aSpringVert[50].y, aSpringVert[51].x, aSpringVert[51].y);
		p.bezierVertex(aSpringVert[52].x, aSpringVert[52].y, aSpringVert[53].x, aSpringVert[53].y, aSpringVert[54].x, aSpringVert[54].y);
		p.endShape(p.CLOSE);
		p.fill(255);
		p.beginShape();
		p.vertex(aCounterSpringVert[0].x, aCounterSpringVert[0].y);
		p.vertex(aCounterSpringVert[1].x, aCounterSpringVert[1].y);
		p.bezierVertex(aCounterSpringVert[2].x, aCounterSpringVert[2].y, aCounterSpringVert[3].x, aCounterSpringVert[3].y, aCounterSpringVert[4].x, aCounterSpringVert[4].y);
		p.bezierVertex(aCounterSpringVert[5].x, aCounterSpringVert[5].y, aCounterSpringVert[6].x, aCounterSpringVert[6].y, aCounterSpringVert[7].x, aCounterSpringVert[7].y);
		p.bezierVertex(aCounterSpringVert[8].x, aCounterSpringVert[8].y, aCounterSpringVert[9].x, aCounterSpringVert[9].y, aCounterSpringVert[10].x, aCounterSpringVert[10].y);
		p.bezierVertex(aCounterSpringVert[11].x, aCounterSpringVert[11].y, aCounterSpringVert[12].x, aCounterSpringVert[12].y, aCounterSpringVert[13].x, aCounterSpringVert[13].y);
		p.endShape(p.CLOSE);
	}

	function drawBasicN(){
		let fadeSpeed = 2;
		if (glyphOp < 255) glyphOp += fadeSpeed;
		p.stroke(1);
		// p.noStroke();
		// p.fill(35,35,35,glyphOp);
		p.beginShape();
			p.vertex(nSpringVert[0].x, nSpringVert[0].y);
			p.vertex(nSpringVert[1].x, nSpringVert[1].y);
			p.vertex(nSpringVert[2].x, nSpringVert[2].y);
			p.vertex(nSpringVert[3].x, nSpringVert[3].y);
			p.vertex(nSpringVert[4].x, nSpringVert[4].y);
			p.vertex(nSpringVert[5].x, nSpringVert[5].y);
			p.vertex(nSpringVert[6].x, nSpringVert[6].y);
			p.vertex(nSpringVert[7].x, nSpringVert[7].y);
			p.vertex(nSpringVert[8].x, nSpringVert[8].y);
			p.vertex(nSpringVert[9].x, nSpringVert[9].y);
		p.endShape(p.CLOSE);
	}

	function rayTest2() {
		let springVector = p.createVector(aSpringVert[5].x, aSpringVert[5].y);
		let lenOffset = springVector.dist(mouseVector);
		let lenMag = 150;
		let rayVector = p.createVector();
				rayVector.x = mouseVector.x + (mouseVector.x - springVector.x) / lenOffset * lenMag;
				rayVector.y = mouseVector.y + (mouseVector.y - springVector.y) / lenOffset * lenMag;

				p.ellipse(rayVector.x, rayVector.y, 10, 10);
				p.strokeWeight(1);
				p.stroke(0);
				p.line(springVector.x, springVector.y, rayVector.x, rayVector.y);
	}

	function clockDisp(alphaOpa) {
		let interests = 8;
		let tempLoc = p.createVector();
		let theta = p.TAU / interests;
		let radLen = ( w < h ? w : h ) / 2.75;
		let fadeSpeed1 = 10;

		for (let i = 0; i < interests; i++) {
			let selection;
			let x = (radLen * p.sin(theta * i)) + center.x;
			let y = (radLen * p.cos(theta * i)) + center.y - 50; // 50 = relative y offset

			// Display the clock p.ellipses
			p.fill(0,0,0, alphaOpa);
			p.noStroke();
			p.ellipse(x, y, 8, 8);

			// Calc distance to local point in clock array
			tempLoc.set(x,y);
			let dist1 = mousePos.dist(tempLoc);
			if (dist1 < 75) {
				// FadeIn content
				cursor(CROSS);
				if (alphaOpa1 < 255) alphaOpa1 += fadeSpeed1;
				tempSelection = i;
				nudgeAttractor.hover();

			} else {
				// FadeOut content
				if (i == tempSelection) {
					while (alphaOpa1 > 30) {
						p.cursor(ARROW);
						alphaOpa1 -= fadeSpeed1 * 3;  
					} if ((alphaOpa1 < 30) && (alphaOpa1 > 0)) alphaOpa1 -= fadeSpeed1 / 10;  

					nudgeAttractor.away();
				}
			}
			if (i == tempSelection) {
				// Display the proper interest type if hovered
				if (alphaOpa1 > 0) {
					interestDisp(i, x, y, alphaOpa1);
					dashedCircle(x, y, alphaOpa1);
					displayPhys1(x, y, alphaOpa1);
				}
			}
		}

	}

	function clockViz() {
		let fadeSpeed = 2;
			if ((w > 1000) && (h > 850)) {
				if (alphaOpa < 255) alphaOpa += fadeSpeed;
			} else {
				if (alphaOpa > 0) alphaOpa -= fadeSpeed;
				// Also control button fading as well
				fadeOutButton();
			}
		if (alphaOpa > 0) clockDisp(alphaOpa);
	}

	function dashedCircle(x,y,opacity) {
		// Dashed line around point using Polar Coordinates
		let circleRad = 12;
		let pointAmount = 25;
		let theta1 = p.TAU / pointAmount;
		for (let j = 0; j < pointAmount; j++) {
			let x1 = (circleRad * p.sin(theta1 * j)) + x;
			let y1 = (circleRad * p.cos(theta1 * j)) + y;
			p.push();
				p.fill(0,0,0,opacity);
				p.ellipse(x1, y1,1,1);
			p.pop();
		}
	}

	// Setup the dynamic arrays --> center them on the page
	function loadArrays(vertices) {
		// Always set the arrays to zero, in order to center properly
		aVerts.length = 0;
		aCounterVerts.length = 0;
		nVerts.length = 0;
		for (let i in vertices.a_vertex) {
			aVerts.push(p.createVector(vertices.a_vertex[i].x, vertices.a_vertex[i].y));
			aVerts[i].x *= scaleFactor;
			aVerts[i].x += (glyphCenter.x);
			aVerts[i].y *= scaleFactor;
			aVerts[i].y += (glyphCenter.y);
		}
		for(let j in vertices.counter_vertex) {
		aCounterVerts.push(p.createVector(vertices.counter_vertex[j].x, vertices.counter_vertex[j].y));
			aCounterVerts[j].x *= scaleFactor;
			aCounterVerts[j].x += (glyphCenter.x);
			aCounterVerts[j].y *= scaleFactor;
			aCounterVerts[j].y += (glyphCenter.y);
		}
		for(let k in vertices.n_vertex) {
		nVerts.push(p.createVector(vertices.n_vertex[k].x, vertices.n_vertex[k].y));
			nVerts[k].x *= nScaleFactor;
			nVerts[k].x += nOffset.x;
			nVerts[k].x *= scaleFactor;
			nVerts[k].x += glyphCenter.x;
			nVerts[k].y *= nScaleFactor;
			nVerts[k].y += nOffset.y
			nVerts[k].y *= scaleFactor;
			nVerts[k].y += glyphCenter.y;
		}
	}

	function displayPhys() {
			for(let i in aVerts) {
					p.strokeWeight(scaleFactor);
					let aVertPos = p.createVector(aLockVert[i].x, aLockVert[i].y);
					let trans = p.map(aVertPos.dist(mousePos), 0, center.x/2, 100, 0);
					let strokeCol = p.color(255,0,0,trans);
					p.fill(strokeCol);
					p.stroke(strokeCol);
					p.ellipse(aLockVert[i].x,aLockVert[i].y,scaleFactor,scaleFactor);
					p.line(aLockVert[i].x,aLockVert[i].y,aSpringVert[i].x,aSpringVert[i].y);
					aLockVert[i].display();
					aSpringVert[i].display();
			}
			// Display and draw line between the 'a counter' vertices
			for(let i in aCounterVerts) {
					p.strokeWeight(scaleFactor);
					let aVertPos = p.createVector(aCounterLockVert[i].x, aCounterLockVert[i].y);
					let trans = p.map(aVertPos.dist(mousePos), 0, center.x/2, 100, 0);
					let strokeCol = p.color(255,0,0,trans);
					p.stroke(strokeCol);
					p.fill(strokeCol);
					p.ellipse(aCounterLockVert[i].x,aCounterLockVert[i].y,scaleFactor,scaleFactor);
					p.line(aCounterLockVert[i].x,aCounterLockVert[i].y,aCounterSpringVert[i].x,aCounterSpringVert[i].y);
					aCounterLockVert[i].display();
					aCounterSpringVert[i].display();
			}
			// Display and draw line between the 'N' vertices
			for(let i in nVerts) {
					p.strokeWeight(scaleFactor);
					let aVertPos = p.createVector(nLockVert[i].x, nLockVert[i].y);
					let trans = p.map(aVertPos.dist(mousePos), 0, center.x/2, 100, 0);
					let strokeCol = p.color(255,0,0,trans);
					p.stroke(strokeCol);
					p.fill(strokeCol);
					p.ellipse(nLockVert[i].x,nLockVert[i].y,scaleFactor,scaleFactor);
					p.line(nLockVert[i].x,nLockVert[i].y,nSpringVert[i].x,nSpringVert[i].y);
					nLockVert[i].display();
					nSpringVert[i].display();
			}
	}

	function displayPhys1(x, y, alphaOpa1) {
			p.strokeWeight(scaleFactor);
			let locConverge = p.createVector(x,y);
			for(let i in aVerts) {
					let aVertPos = p.createVector(aSpringVert[i].x, aSpringVert[i].y);
					let trans = p.map(aVertPos.dist(locConverge), 0, center.x, 100, 0);
					let strokeCol = p.color(255,0,0,trans);
					p.fill(strokeCol);
					p.stroke(strokeCol);
					p.ellipse(aSpringVert[i].x,aSpringVert[i].y,scaleFactor,scaleFactor);
					p.line(aSpringVert[i].x,aSpringVert[i].y,locConverge.x,locConverge.y);
			}
			// Display and draw line between the 'a counter' vertices
			for(let i in aCounterVerts) {
					p.strokeWeight(scaleFactor);
					let aVertPos = p.createVector(aCounterSpringVert[i].x, aCounterSpringVert[i].y);
					let trans = p.map(aVertPos.dist(locConverge), 0, center.x, 100, 0);
					let strokeCol = p.color(255,0,0,trans);
					p.stroke(strokeCol);
					p.fill(strokeCol);
					p.ellipse(aCounterSpringVert[i].x,aCounterSpringVert[i].y,scaleFactor,scaleFactor);
					p.line(locConverge.x,locConverge.y,aCounterSpringVert[i].x,aCounterSpringVert[i].y);
			}
			// Display and draw line between the 'N' vertices
			for(let i in nVerts) {
					p.strokeWeight(scaleFactor);
					let aVertPos = p.createVector(nSpringVert[i].x, nSpringVert[i].y);
					let trans = p.map(aVertPos.dist(locConverge), 0, center.x, 100, 0);
					let strokeCol = p.color(255,0,0,trans);
					p.stroke(strokeCol);
					p.fill(strokeCol);
					p.ellipse(nSpringVert[i].x,nSpringVert[i].y,scaleFactor,scaleFactor);
					p.line(locConverge.x,locConverge.y,nSpringVert[i].x,nSpringVert[i].y);
			}
	}

	function physInit() {
			let springStrength = 0.00035,
					springLength   = 0.05;

				// Make our ToxiParticles for 'a'
				for (let i in aVerts) {
						aLockVert.push(
							new Particle ({
								position: new toxi.geom.Vec2D(aVerts[i].x, aVerts[i].y),
								p: p,
							})
						);
						aLockVert[i].lock();
						aSpringVert.push(
							new Particle ({
								position: new toxi.geom.Vec2D(aVerts[i].x, aVerts[i].y),
								p: p,
							})
						);
						aSpringArr.push(
							new toxi.physics2d.VerletSpring2D(aLockVert[i], aSpringVert[i],springLength, springStrength)
						);
								physics.addParticle(aLockVert[i]);
								physics.addParticle(aSpringVert[i]);
								physics.addSpring(aSpringArr[i]);
			}

			// Make our ToxiParticles for 'a counter'
			for(let i in aCounterVerts) {
					aCounterLockVert.push(
						new Particle ({
							position: new toxi.geom.Vec2D(aCounterVerts[i].x, aCounterVerts[i].y),
							p: p,
						})
					);

					aCounterLockVert[i].lock();

					aCounterSpringVert.push(
						new Particle ({
							position: new toxi.geom.Vec2D(aCounterVerts[i].x, aCounterVerts[i].y),
							p: p,
						})
					);

					aCounterSpringArr.push(
						new toxi.physics2d.VerletSpring2D(aCounterLockVert[i], aCounterSpringVert[i],springLength, springStrength)
					);

					physics.addParticle(aCounterLockVert[i]);
					physics.addParticle(aCounterSpringVert[i]);
					physics.addSpring(aCounterSpringArr[i]);
			}

			// Make our ToxiParticles for 'N'
			for (let i in nVerts) {
					nLockVert.push(
						new Particle ({
							position: new toxi.geom.Vec2D(nVerts[i].x, nVerts[i].y),
							p: p
						})
					);
					
					nLockVert[i].lock();

					nSpringVert.push(
						new Particle({
							position: new toxi.geom.Vec2D(nVerts[i].x, nVerts[i].y),
							p: p,
						})
					);
					
					nSpringArr.push(
						new toxi.physics2d.VerletSpring2D(nLockVert[i], nSpringVert[i],springLength, springStrength)
					);
					
					physics.addParticle(nLockVert[i]);
					physics.addParticle(nSpringVert[i]);
					physics.addSpring(nSpringArr[i]);
			}
	}

	function physEmpty() {
		if (aSpringArr.length == aVerts.length) {
			for(let i in aSpringArr) {
				physics.removeSpringElements(aSpringArr[i]);
			} 
			aSpringArr.length  = 0;
			aLockVert.length   = 0;
			aSpringVert.length = 0;
		}
		if (aCounterSpringArr.length == aCounterVerts.length) {
			for(let i in aCounterSpringArr) {
				physics.removeSpringElements(aCounterSpringArr[i]);
			}
			aCounterSpringArr.length  = 0;
			aCounterLockVert.length   = 0;
			aCounterSpringVert.length = 0;
		}

		if (nSpringArr.length == nVerts.length) {
			for(let i in nSpringArr) {
				physics.removeSpringElements(nSpringArr[i]);
			}
			nSpringArr.length  = 0;
			nLockVert.length   = 0;
			nSpringVert.length = 0;
		}
	}

	function findCenter() {
		w = p.windowWidth;
		h = p.windowHeight;
		center.set(w/2, h/2);
		let glyphCenterX = center.x - aCenterOffset.x; 
		let glyphCenterY = center.y + aCenterOffset.y - 75; 
		glyphCenter.set(glyphCenterX, glyphCenterY);
	}

	function centerGlyph(vertices) {
		let xArray = [];
		let yArray = [];
		let xArrayN = [];
		let yArrayN = [];

		for (let i in vertices.a_vertex) xArray.push(vertices.a_vertex[i].x * scaleFactor);
		for (let i in vertices.a_vertex) yArray.push(vertices.a_vertex[i].y * scaleFactor);
		for (let i in vertices.n_vertex) xArrayN.push(vertices.n_vertex[i].x * scaleFactor * nScaleFactor);
		for (let i in vertices.n_vertex) yArrayN.push(vertices.n_vertex[i].y * scaleFactor * nScaleFactor);

		let xMin = arrayMin(xArray);
		let yMin = arrayMin(yArray);
		let xMax = arrayMax(xArray);
		let yMax = arrayMax(yArray);
		let xMinN = arrayMin(xArrayN);
		let yMinN = arrayMin(yArrayN);
		let xMaxN = arrayMax(xArrayN);
		let yMaxN = arrayMax(yArrayN);

		let xCenter = ((xMaxN + xMax) - (xMinN +xMin)) / 2;
		let yCenter = (((yMaxN+ yMax) - (yMinN + yMin)) / 2) - 75;

		aCenterOffset.set(xCenter, yCenter);
		return aCenterOffset;

	}

	//  Calculation Min/Max of any array

	function arrayMin(arr) {
		return arr.reduce(function (p, v) {
			return ( p < v ? p : v );
		});
	}

	function arrayMax(arr) {
		return arr.reduce(function (p, v) {
			return ( p > v ? p : v );
		});
	}

	// Scaling function

	function scaleFunc(w,h) {
		let dynamicScale = ((w < 1000) || (h < 850)) ?  1.5 : 1.25;
		scaleFactor = w / (1920 / dynamicScale);
	}

	// A little too much interaction, if you ask me! Might be useful later

	function mouseClicked() {
		physics.removeBehavior(gravity);
		// Use perlin noise to achieve a similar* gravity vector
		xOff += 0.5;
		// Horizontal + Vertical leaping may be too much...
		// gravityStrength.x = noise(xOff) * 0.75;
		gravityStrength.y *= -1;
		gravity = toxi.physics2d.behaviors.GravityBehavior(gravityStrength);
		physics.addBehavior(gravity);
		// prevent default
		return false;
	}


	function motionBlur() {
		p.push();
			p.fill(255, 100);
			p.rect(0,0,width,height);
		p.pop();
	}

	// Display typography on hover
	function interestDisp(i, x, y, opacity) {

		i < 5 ? liveText.style("text-align", "left") : liveText.style("text-align", "right");
		// X offset from point
		i < 5 ? (x += 30) : (x -= 125);
		if (i > 4) y -= 3;
		if (i == 6) x += 45;
		let textOpacity = p.map(opacity, 0, 255, 0, 1);
		liveText.style("opacity", textOpacity);
		liveText.html(interestsArr[i]);
		liveText.position(x,y-7);

	}

	// Hover button interactivity
	function hoverButton() {
		let fadeSpeed = 20;
		let mousey = p.createVector(dashButton.loc().x, dashButton.loc().y);
		let overButton = mousey.dist(mousePos);
		let lineOffset = 60;
		let lineLoc;
		let opacity;

		lineLoc = p.map(buttonFade, 0, 255, 0, lineOffset);
		opacity = p.norm(buttonFade, 0, 255);

		// Position the descriptive text along with the button
		describeText.position(mousey.x, mousey.y -95);
		describeText.style("opacity", opacity);
		describeText1.position(mousey.x, mousey.y -35);
		describeText1.style("opacity", opacity);

	 p.push();
			p.stroke(0,0,0,lineOp);
			p.fill(0,0,0,lineOp);
			p.strokeWeight(1);
			if (timeOut == 0) {
				line (mousey.x, mousey.y, mousey.x, mousey.y - lineLoc);
				line (mousey.x, mousey.y, mousey.x, mousey.y + lineLoc);
			}
		p.pop();

		if (overButton < 50) { 
			lineOp = 255;
			p.cursor(HAND);
			dashButton.hover(width,height);
			 if (buttonFade < 255) buttonFade += fadeSpeed;
			 if (alphaOpa > 0) alphaOpa -= fadeSpeed;
		} else {
			dashButton.display(width,height);
			if (buttonFade > 60) {
				buttonFade -= fadeSpeed * 4;
				p.cursor(ARROW);
			} else  if (buttonFade > 0) buttonFade -= fadeSpeed / 2;
		}

	}

	// Hover button interactivity
	function hoverButton1() {
		let fadeSpeed = 20;
		let opacity;

		opacity = p.norm(buttonFade, 0, 255);

		let element = $('#cross-circle');

		element.hover(function() {
			hover = true;
		});

		element.mouseout(function() {
			hover = false;
		});

		if (hover) { 
			lineOp = 255;
			 if (buttonFade < 255) buttonFade += fadeSpeed;
			 if (alphaOpa > 0) alphaOpa -= fadeSpeed;
		} else {
			if (buttonFade > 60) {
				buttonFade -= fadeSpeed * 4;
			} else  if (buttonFade > 0) buttonFade -= fadeSpeed / 2;
		}

	}

	function fadeInButton() {
		let fadeSpeed = 5;
		if (buttonFade1 < 255) buttonFade1 += fadeSpeed;
		dashButton.opa(buttonFade1);
	}

	function fadeOutButton() {
		let fadeSpeed = 5;
		if (buttonFade1 > 0) buttonFade1 -= fadeSpeed;
		dashButton.opa(buttonFade1);
	}

	// Deal with resize events
	window.onresize = function() { 
		$("#glyph").width(window.innerWidth)
			     .height(window.innerHeight);

     	console.log("window resized")
     	console.log($("#glyph").width());

     	windowResized();	
  
	}

}

	/*
				Module Exports
				/////////////////////////////////////////////////////////////////////////////////////////
	*/


module.exports.init = function () {
	_canvas = $.Deferred();

	return new p5(glyph); // Instantiate the entire P5 sketch
}

module.exports.canvas = function () {
	return _canvas;
}










