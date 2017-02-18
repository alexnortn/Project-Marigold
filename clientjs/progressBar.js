// Alex Norton 2017
// Progress Bar Class

"use strict";

let $ = require('jquery'),
	hammertime  = require('hammerjs'),
	velocity    = require('velocity-animate'),
    velocity_ui = require('velocity-ui-pack'),
    animation   = require('./animation.js');


class ProgressBar {
    constructor(args) {
    	args = args || {};

    	this.components = {
    		"capsule" : {
                "id" : "progress-capsule",
    			classList : [
    				"endeavor-flex","endeavor-flex-nowrap","endeavor-flex-between","endeavor-width-75-prcnt","endeavor-center","endeavor-flex-center","endeavor-height-100-prcnt"
    			],
    			tagName : "div"
    		},
    		"progress" : {
    			classList : [
    				"progress","medium-bg-1","endeavor-left-0","endeavor-pos-abs","endeavor-push-1","header-hover-grow"
    			],
    			tagName : "div"
    		},
    		"progress_bg" : { 
    			classList : [
    				"progress_bg","medium-bg-1","endeavor-left-0","fsw","endeavor-pos-abs","header-hover-grow"
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
    			classList : [
                    "endeavor-text-center","medium-text-1","endeavor-transition-ease-250"
                ],
    			tagName : "h5"
    		},
    		"section_node_hit" : {
    			classList : [
    				"endeavor-flex","endeavor-flex-center","node_hit","endeavor-flex-self-center"
    			],
    			tagName : "div"
    		},
            "section_node" : {
                classList : [
                    "node","endeavor-flex-self-center","medium-bg-1","endeavor-transition-ease-250"
                ],
                tagName : "div"
            }
    	}

    	this.container = args.container                || document.getElementById("header");
    	this.scrollContainer = args.scrollContainer    || document.window;
    	this.sections = args.sections                  || $(this.scrollContainer).find('.endeavor-process');
    	this._t = args.t                               || 0;

        this.exist = true;

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


        if (!_this.sections.length) {
            return;
        }

		_this.sections.map(function(i, value) {
			let section = document.createElement(components.section.tagName);
                section.dataset.section = value.dataset.process;
                for (let i in components.section.classList) {
                    section.classList.add(components.section.classList[i]);
                }

			let section_name = document.createElement(components.section_name.tagName);	
				section_name.innerHTML = value.dataset.process;
                for (let i in components.section_name.classList) {
                    section_name.classList.add(components.section_name.classList[i]);
                }

			let section_node = document.createElement(components.section_node.tagName);	
                for (let i in components.section_node.classList) {
                    section_node.classList.add(components.section_node.classList[i]);
                }

            let section_node_hit = document.createElement(components.section_node_hit.tagName); 
                section_node_hit.addEventListener('click', function(){
                    _this.scrollTo(value.dataset.process);
                }, false);
                section_node_hit.dataset.section = value.dataset.process;
                for (let i in components.section_node_hit.classList) {
                    section_node_hit.classList.add(components.section_node_hit.classList[i]);
                }

            // Add elements to DOM
            section_node_hit.appendChild(section_name);
            section_node_hit.appendChild(section_node)
            section.appendChild(section_node_hit);

			_this.capsule.appendChild(section);

			return section;
		});

    }

	scrollTo(target) {
        let _this = this;
        debugger;
        let scrollTarget =  $(_this.scrollContainer).find("[data-process='" + target + "']");
        $(scrollTarget).velocity("scroll", { duration: 750, container: $(_this.scrollContainer), easing: 'ease-in-out' }); // Scroll to next section
        console.log('scrollTo');        
	}


    // Update progress bar position wrt scroll state
    // Call this from <ScrollHandler>
    update(t) {
        let _this = this;
        _this._t = Math.min(Math.max(t, 0), 1); // Clamp _t [0, 1]
        _this._t *= 100;

        _this.progress.style.width = _this._t + "%"
    }

    // Call before Destroy
    fadeOut() {
        let _this = this;
        $("#" + _this.capsule.id).velocity("fadeOut", { duration: 500 });
    } 

    // Call before rendering to DOM
    fadeIn() {
        let _this = this;
        $("#" + _this.capsule.id).velocity("fadeIn", { duration: 500, display: "flex" });
    }

    // Remove this instance of class from DOM
    destroy() {
        let _this = this;
    	$.Velocity.animate( $("#" + _this.capsule.id), "fadeOut", { duration: 500 })
            .then(function(el) {
                // Remove container from DOM
                $(el).remove();
                // Destroy self
                _this = null;
            })
            .catch(function(reason) { 
                console.log("Rejected because " + reason);
            });
    }
}

module.exports = ProgressBar;




