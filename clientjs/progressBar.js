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
    		"capsule" : {
                "id" : "progress-capsule",
    			classList : [
    				"endeavor-flex","endeavor-flex-nowrap","endeavor-flex-between","endeavor-width-75-prcnt","endeavor-center","endeavor-flex-center","endeavor-height-100-prcnt"
    			],
    			tagName : "div"
    		},
    		"progress" : {
    			classList : [
    				"progress","endeavor-border-medium-1","medium-border-1","endeavor-left-0","endeavor-width-35-prcnt","endeavor-pos-abs","endeavor-top-50-prcnt","endeavor-push-1","header-hover-grow"
    			],
    			tagName : "div"
    		},
    		"progress_bg" : { 
    			classList : [
    				"progress_bg","endeavor-border-medium-1","medium-border-1","endeavor-border-dashed","endeavor-left-0","fsw","endeavor-pos-abs","endeavor-top-50-prcnt","header-hover-grow"
    			],
    			tagName : "div"
    		},
    		"section" : {
    			classList : [
    				"section-pagination","endeavor-flex-column","endeavor-flex-justify-center","endeavor-push-2"
    			],
    			tagName : "div"
    		},
    		"section_name" : {
    			classList : "endeavor-text-center medium-text-1",
    			tagName : "div"
    		},
    		"section_node" : {
    			classList : [
    				"endeavor-square-5px","endeavor-circle","endeavor-flex-self-center","medium-bg-1"
    			],
    			tagName : "h5"
    		}
    	}

    	this.section = {

    	}

    	this.container = args.container || document.getElementById("header");
    	this.scroller = args.scroller   || document.window;
    	this.sections = args.sections   || [];
    	this._t = args.t || 0;

    	let _this = this;

        // Create Self
        let promise = new Promise(
            function(resolve, reject) {;
                _this.create();
                resolve();
            }
        );

        promise
            .then(() => _this.fadeIn())
            .catch((reason) => console.log('Handle rejected promise ('+reason+') here.'));

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
    create() {
    	let _this = this;
        let components = _this.components;

    	// Iterate through Obj
		// for (var prop in components) {
		// 	if (components.hasOwnProperty(prop)) {
		// 		console.log('obj.' + prop + ' = ' + components[prop]); // create dom elements, add them to this object
		// 		this.prop = document.createElement(components[prop].tagName);
		// 		this.prop.classList.add(components[prop].classList);
		// 	} 
		// }

		// Create DOM elements
		_this.capsule = document.createElement(components.capsule.tagName);	
            _this.capsule.id = components.capsule.id;
			for (let i in components.capsule.classList) {
				_this.capsule.classList.add(components.capsule.classList[i]);
			}

		_this.progress = document.createElement(components.progress.tagName);	
			for (let i in components.progress.classList) {
				_this.progress.classList.add(components.progress.classList[i]);
			}

		_this.progress_bg = document.createElement(components.progress_bg.tagName);
			for (let i in components.progress_bg.classList) {
				_this.progress_bg.classList.add(components.progress_bg.classList[i]);
			}

		
		// Add elements to DOM
		_this.container.appendChild(_this.capsule);
		_this.capsule.appendChild(_this.progress);
		_this.capsule.appendChild(_this.progress_bg);

		// If endeavor has sections..
		_this.sections.forEach(function(section) {
			_this.section = document.createElement(components.section.tagName);	
				for (let i in components.section.classList) {
					_this.section.classList.add(components.section.classList[i]);
				}

			_this.section_name = document.createElement(components.section_name.tagName);	
				for (let i in components.section_name.classList) {
					_this.section_name.classList.add(components.section_name.classList[i]);
				}

			_this.section_node = document.createElement(components.section_node.tagName);	
				for (let i in components.section_node.classList) {
					_this.section_node.classList.add(components.section_node.classList[i]);
				}

		});

		if (!_this.sections.length) {
			console.log('no sections')
			return;
		}

		_this.sections.map(function(s) {
			let section = document.createElement(components.section.tagName);	
				section.classList.add(components.section.classList);
				section.dataset.section = s;

			let section_name = document.createElement(components.section_name.tagName);	
				section_name.classList.add(components.section_name.classList);
				section_name.innerHTML = s;

			let section_node = document.createElement(components.section_node.tagName);	
				section_node.classList.add(components.section_node.classList);
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
        console.log('scrollTo');
	}


    // Update progress bar position wrt scroll state
    // Call this from <ScrollHandler>
    update(t) {
        console.log('updating t');
    }

    // Call before Destroy
    fadeOut() {
        let _this = this;
        $(_this.capsule.id).velocity("fadeOut", { duration: 500 });

        console.log("You feel much lighter");
    } 

    // Call before rendering to DOM
    fadeIn() {
        let _this = this;
        $(_this.capsule.id).velocity("fadeIn", { duration: 500 });

        console.log("Welcome to the Interzone");
    }

    // Remove this instance of class from DOM
    destroy() {
        let _this = this;
    	$.Velocity.animate( $(_this.capsule.id), "fadeOut", { duration: 500 })
            .then(function(el) {
                // Remove container from DOM
                $(this).remove();
                // Destroy self
                _this = null;
            })
            .catch(function(reason) { 
                console.log("Rejected because " + reason);
            });

        console.log("I am disappeared");
    }
}

module.exports = ProgressBar;




