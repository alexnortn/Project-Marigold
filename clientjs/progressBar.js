// Alex Norton 2017
// Progress Bar Class

"use strict";

let $ = require('jquery'),
	hammertime  = require('hammerjs'),
	velocity    = require('velocity-animate'),
    velocity_ui = require('velocity-ui-pack');


class ProgressBar {
    constructor(args) {
    	args = args || {};

    	this._components = {
    		"_capsule" : {
    			classList : [
    				"endeavor-flex","endeavor-flex-nowrap","endeavor-flex-between","endeavor-width-75-prcnt","endeavor-center","endeavor-flex-center","endeavor-height-100-prcnt"
    			],
    			tagName : "div"
    		},
    		"_progress" : {
    			classList : [
    				"progress","endeavor-border-medium-1","medium-border-1","endeavor-left-0","endeavor-width-35-prcnt","endeavor-pos-abs","endeavor-top-50-prcnt","endeavor-push-1","header-hover-grow"
    			],
    			tagName : "div"
    		},
    		"_progress_bg" : { 
    			classList : [
    				"progress_bg","endeavor-border-medium-1","medium-border-1","endeavor-border-dashed","endeavor-left-0","fsw","endeavor-pos-abs","endeavor-top-50-prcnt","header-hover-grow"
    			],
    			tagName : "div"
    		},
    		"_section" : {
    			classList : [
    				"section-pagination","endeavor-flex-column","endeavor-flex-justify-center","endeavor-push-2"
    			],
    			tagName : "div"
    		},
    		"_section_name" : {
    			classList : "endeavor-text-center medium-text-1",
    			tagName : "div"
    		},
    		"_section_node" : {
    			classList : [
    				"endeavor-square-5px","endeavor-circle","endeavor-flex-self-center","medium-bg-1"
    			],
    			tagName : "h5"
    		}
    	}

    	this._section = {

    	}

    	this._container = args.container || document.getElementById("header");
    	this._scroller = args.scroller || document.window;
    	this._sections = args.sections || [];
    	this._t = args.t || 0;

    	let _this = this;
        
    	// Create Self
    	this.create(this._components);

    };

    get t() {
        return this._t;
    }
    
    set t(t) {
    	if (t < 0 || t > 1)
            throw new Error("ProgressBar expects normalized T values");
        this._t = t;
    }

    // Create progress bar, append to container
    create(components) {
    	let _this = this;

    	// Iterate through Obj
		// for (var prop in components) {
		// 	if (components.hasOwnProperty(prop)) {
		// 		console.log('obj.' + prop + ' = ' + components[prop]); // create dom elements, add them to this object
		// 		this.prop = document.createElement(components[prop].tagName);
		// 		this.prop.classList.add(components[prop].classList);
		// 	} 
		// }

		// Create DOM elements
		_this._capsule = document.createElement(components._capsule.tagName);	
			for (let i in components._capsule.classList) {
				_this._capsule.classList.add(components._capsule.classList[i]);
			}

		_this._progress = document.createElement(components._progress.tagName);	
			for (let i in components._progress.classList) {
				_this._progress.classList.add(components._progress.classList[i]);
			}

		_this._progress_bg = document.createElement(components._progress_bg.tagName);
			for (let i in components._progress_bg.classList) {
				_this._progress_bg.classList.add(components._progress_bg.classList[i]);
			}

		
		// Add elements to DOM
		_this._container.appendChild(_this._capsule);
		_this._capsule.appendChild(_this._progress);
		_this._capsule.appendChild(_this._progress_bg);

		// If endeavor has sections..
		_this._sections.forEach(function(section) {
			_this._section = document.createElement(components._section.tagName);	
				for (let i in components._section.classList) {
					_this._section.classList.add(components._section.classList[i]);
				}

			_this._section_name = document.createElement(components._section_name.tagName);	
				for (let i in components._section_name.classList) {
					_this._section_name.classList.add(components._section_name.classList[i]);
				}

			_this._section_node = document.createElement(components._section_node.tagName);	
				for (let i in components._section_node.classList) {
					_this._section_node.classList.add(components._section_node.classList[i]);
				}

		});

		if (!_this._sections.length) {
			console.log('no sections')
			return;
		}

		_this._sections.map(function(s) {
			let section = document.createElement(components._section.tagName);	
				section.classList.add(components._section.classList);
				section.dataset.section = s;

			let section_name = document.createElement(components._section_name.tagName);	
				section_name.classList.add(components._section_name.classList);
				section_name.innerHTML = s;

			let section_node = document.createElement(components._section_node.tagName);	
				section_node.classList.add(components._section_node.classList);
				section_node.addEventListener('click', this._scrollTo, false);

			// Add elements to DOM
			section.appendChild(section_name);
			section.appendChild(section_node);

			_this.capsule.appendChild(section);

			return section;
		});

    }

	scrollTo() {
		// Use Velocity to scroll <current endeavor> to <evt.target -> data.section>
	}


    // Update progress bar position wrt scroll state
    // Call this from <ScrollHandler>
    update(t) {

    }

    // Call before Destroy
    fadeOut() {

    } 

    // Call before rendering to DOM
    fadeIn() {

    }

    // Remove this instance of class from DOM
    destroy() {
    	// _this.fadeout();
    	// remove container + contents
    }
}

module.exports = ProgressBar;






