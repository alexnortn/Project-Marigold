/*

Alex Norton
a^N 
http://alexnortn.com

*/

"use strict";

// jQuery things
let $ = require('jquery');
        require('./jquery.centerIn.js');
        require('./cssTransitionEnd.js');
        require('../node_modules/unveil2/src/jquery.unveil2.js');

let _site_content = require('./content.json');

// Module Dependencies
let velocity    = require('velocity-animate'),
    velocity_ui = require('velocity-ui-pack'),
    slick       = require('slick-carousel'),
    hammertime  = require('hammerjs'),
    Stickyfill  = require('stickyfill'),
    isMobile    = require('ismobilejs'),
    animation   = require('./animation.js');

// Bower Dependencies
let bower_url = '../bower_components/';

// Userlist data array for filling in info box
let userListData = [],
    case_studies,
    projects,
    menu = false;

let _sections = $('.section'),
    _sectionCurrent,
    _$projectCurrentContents = null;

let stickyfill = Stickyfill();
// let widowtamer = WidowTamer();

let _mobile;

let _projectCurrentId,
    _openProjectState = false,
    _closeProject,
    _endeavor_routes;

let _itemInteraction,
    _endeavorRouter;


    // attachFastClick = require('fastclick');    


// DOM Ready =============================================================
$(document).ready(function() {
    // Check mobile
    if (isMobile.tablet || isMobile.phone) {
        _mobile = true;
    }

    // Set Greeting
    setGreeting();

    // Parse Contents
    _endeavor_routes = {
        projects: [],
        case_studies: []
    };

    _site_content.case_studies.forEach(function(item) {
        _endeavor_routes.case_studies.push(item.route);    
    });

    _site_content.projects.forEach(function(item) {
        _endeavor_routes.projects.push(item.route);    
    });    

    window.addEventListener("hashchange", hashChanged, false);

    // Intro loader
    $.Velocity.animate( $('.loader'), "fadeOut", { duration: 750 })
        .then(function(elements) {
            setTimeout(function() {
                _endeavorRouter.route(); // Initial Page Routing
                hashChanged();
                
                window.addEventListener('popstate', function(event) {
                    _endeavorRouter.route(); // Event handler for History state change
                }, false);
            }, 0);
        })
        .catch(function(error) { 
            console.log("Rejected.");
        });

    // Call pagination
    pagination(_sections);
    paginationUpdate(_sectionCurrent);

    stickyUpdate();

    _closeProject = closeProject; // Set up close project global

    // Center In
    $('#pagination').alwaysCenterIn(window, { direction: 'vertical' });

    // Set media size + aspect ratio
    function setupMedia($elem = null) {
        if ($elem === null) {
            if (_$projectCurrentContents === null) {
                return;
            }

            $elem = _$projectCurrentContents;
        }

        let width =  $elem.innerWidth(),
            height =  width * 9/16;
            
            width = width + "px";
            height = height + "px";

            $('.media-frame').css('width', width)
                             .css('height', height);

            $('.media-settings').css('height', height);

    }

    // When the window is resized some fancy ui positioning
    $(window).resize(function() {

        stickyUpdate();
        setupMedia();

        if (_mobile) { // Disable blur effect on mobile devices + tablets
            return;
        }

        let timer;

        clearTimeout(timer);

        // $('#wrapper').addClass('resize-window');
        
        // timer = setTimeout(function() {
        //     $('#wrapper').removeClass('resize-window');
        // }, 500);

    });

    // Check current position relative to top of page
    $(window).scroll(function () {
        $('.scroll-arrow').velocity("fadeOut", { duration: 250 }); // Fade it out | They get it
    });

    // --------------------------------------
    // Event Handlers


    // Bios page button
    $('#bios-button').click(function() {
        $(this).velocity("fadeOut", { duration: 500 });
        $('#long').velocity("fadeIn", { delay: 500, duration: 666 });
        setTimeout(
            function(e) {
                // $('#bios-content').centerIn('#bios', { top: "-3%" });   
        }, 750);
    });

    // Header navigation | JS Interaction
    $('#nav-trigger').click(function() {
        let e = document.getElementById("nav-trigger");
        $("body").toggleClass("nav-open");

    });   

    // Close the nav overlay
    function closeNav() {
        document.getElementById("nav-trigger").checked = false;
    }

    // Get Event Target
    function getEventTarget(evt) {
        evt = evt || window.event;
        return evt.target || evt.srcElement; 
    }

    // Navigation
    $('#web-lab-nav').click(function() {
        let target = getEventTarget(event);
        _sectionCurrent = target.getAttribute('data-nav'); // Get target id from data attr
        closeNav(); // Close Section

        closeProject();

        animation.scrollToVelocity(_sectionCurrent); // Navigate
    });

    // Create SVG Circle
    function createCircle(_cx, _cy) {
        let svgNS = "http://www.w3.org/2000/svg";  
        let myCircle = document.createElementNS(svgNS, "circle");
            myCircle.setAttribute("class", "transition-svg");
            myCircle.setAttributeNS(null,"id", "mycircle");
            myCircle.setAttributeNS(null,"cx", _cx);
            myCircle.setAttributeNS(null,"cy", _cy);
            myCircle.setAttributeNS(null,"r", 0);
            myCircle.setAttributeNS(null,"stroke", "none");

        document.getElementById("svg-container").appendChild(myCircle);

        return $('.transition-svg');
    }      

    // Close overlay project
    function closeProject() {
        let transition = false;

        $('#fx-container').removeClass('opaque').onCSSTransitionEnd( function() {

            if (transition) {
                return;
            }

            $( this ).addClass('passive');
            $('#content-wrapper').removeClass('visibility-hidden');

            $('.endeavor-container').removeClass('visible')

            setTimeout(function() {
                $('.endeavor-container').removeClass('flex-row');
            }, 1000);

            $('.arrow-container').removeClass('arrow-bottom disabled')
                                 .addClass('transparent');

            $('body').removeClass('endeavor-open');

            $('#pagination').fadeToggle(500); // Fade Out Pagination
                _openProjectState = false;

            transition = true;

            // Internal URL Routing + Hashing
            _endeavorRouter.resetURL();
            _endeavorRouter.setHash("works");

        });
    } 

    // Project Grid Handlers
    _itemInteraction = function() { // For lexical scoping
        let current_index = 0,
            container,
            case_studies = $('.case-study-view').toArray(),
            projects = $('.project-view').toArray(),
            currents = [],
            scrollHandler,
            project_id; 

        let captureScrollHandler = function(evt) {
            evt.stopPropagation();
        }

        function updateCurrentProject(index, current_id) {
            let new_id = '#' + currents[index].id;
            updateProjectHandlers(current_id, new_id);

            return new_id;
        }

        function resetProjectControls() {
            $('.arrow-container').removeClass('arrow-bottom');
        }

        function updateProjectHandlers(current_id, new_id) {

            if (scrollHandler) {
                $(current_id).off("scroll", scrollHandler);
            }

            scrollHandler = function() {
                if ($(new_id).scrollTop() > 0) {
                    $('.arrow-container').addClass('arrow-bottom');
                    $('.arrow-center').addClass('visible');
                    $('#prev').addClass('arrow-left-alt');
                }
                else {
                    $('.arrow-container').removeClass('arrow-bottom');
                    $('.arrow-center').removeClass('visible');
                    $('#prev').removeClass('arrow-left-alt');
                }
            }

            $(new_id).scroll(scrollHandler);
        }

        function updateArrow() {
            if (current_index >= currents.length - 1) {
                $('#next').addClass('disabled');
            }
            else {
                $('#next').removeClass('disabled');
            }

            if (current_index <= 0) {
                $('#prev').addClass('disabled');
            }
            else {
                $('#prev').removeClass('disabled');
            }
        }

        function workItemInteraction(_project_id, evt) {

            if (_openProjectState) {
                return;
            }

            // Testing for touch || click
            let x_pos,
                y_pos;

            let $currentTarget;

            if (evt.type === "click") {
                x_pos = evt.clientX;
                y_pos = evt.clientY;

                $currentTarget = $(evt.currentTarget);

            }
            else if (evt.pointerType === "touch") {
                x_pos = evt.pointers[0].screenX;
                y_pos = evt.pointers[0].screenY;

                $currentTarget = $(evt.srcEvent.currentTarget);

            }
            else if (evt instanceof jQuery) { // For URL Routing
                x_pos = window.innerWidth / 2;
                y_pos = window.innerHeight / 2;

                $currentTarget = evt;               
            }

            project_id = _project_id;

            if (!$currentTarget) {
                return;
            }

            if ($currentTarget.hasClass('case-study-item')) {
                currents = case_studies;
                container = $('.case-study-container');
            }
            else if ($currentTarget.hasClass('project-item')) {
                currents = projects;
                container = $('.project-container');
            }

            // Setup Slick
            let bottomSlick = container.find('.endeavor-image-slider');
                if (!bottomSlick.hasClass('slick-initialized')) { 
                    addSlick(bottomSlick, true);
                    bottomSlick.slick('slickNext')
                               .slick('slickNext')
                               .slick('slickNext')
                               .slick('slickGoTo', 0, false)
                               .slick('slickGoTo', 1, false)
                               .slick('slickGoTo', 0, false);
                };

            currents.forEach(function(project_item, index) {
                if (project_item.id === project_id) {
                    current_index = index;
                    updateCurrentProject(current_index, project_id);
                }
            });

            updateArrow();

            project_id = "#" + project_id;
            let opaque = false;

            $('#fx-container').removeClass('passive');
            $('#content-wrapper').addClass('visibility-hidden');

            let $transitionSVG = createCircle(x_pos, y_pos);

            $('#pagination').velocity("fadeOut", { duration: 500 });

            $.Velocity.animate( $transitionSVG, { r: 2000 }, { duration: 750 },  "ease-out" )
                .then(function(elements) {
                    $('body').addClass('endeavor-open');
                    
                    container.addClass('flex-row');

                    $.Velocity.animate( $(project_id), "scroll", { axis: "x", duration: 0, container: container })
                        .then(function(elems) {
                            // $(project_id).velocity("scroll", { axis: "x", duration: 0, container: container });
                            $(project_id).scrollTop(0);     // Reset project scroll             
                            container.addClass('visible')
                        
                            $('#fx-container').addClass('opaque').onCSSTransitionEnd( function() { 
                                if (opaque) {
                                    return;
                                }

                                $.Velocity.animate( $transitionSVG, "fadeOut", { duration: 500 } )
                                    .then(function(elements) {
                                        $('.arrow-container').removeClass('transparent');
                                        
                                        _$projectCurrentContents = $(project_id).find('.contents');
                                        setupMedia(_$projectCurrentContents); // Resize Video players

                                        $transitionSVG.remove();
                                    })
                                    .catch(function(error) { 
                                        console.log("Rejected.");
                                    });

                                opaque = true;

                            });

                        })
                        .catch(function(error) { 
                            console.log("Rejected.");
                        });
                });

            _openProjectState = true;
        }

        // --------------------------------------
        // Project Event Handlers

        $('.item').on('click', function(evt) {
            workItemInteraction($(this).attr('data-project'), evt);
            _endeavorRouter.setURL($(this).attr('data-project')); // Internal URL Routing
        });

        $('.item').each(function(){
            var $this = $(this);
            var hammertime = new Hammer(this);
            hammertime.on("tap", function(evt) {
                workItemInteraction($(evt.srcEvent.currentTarget).attr('data-project'), evt);
                _endeavorRouter.setURL($(evt.srcEvent.currentTarget).attr('data-project')); // Internal URL Routing
                return false;
            });
        });
 
        // Scroll to previous project
        $('#prev').click(function(evt) {
            if (!_openProjectState) {
                return;
            }

            if (current_index >= 1) {
                current_index--;
                project_id = updateCurrentProject(current_index, project_id);
                
                _endeavorRouter.setURL(project_id.substring(1)); // Internal URL Routing

                $('.arrow-container').removeClass('dip-to-white');
                // $('.project-container').removeClass('dip-to-white');

                resetProjectControls();
                
                $(project_id).scrollTop(0)     // Reset project scroll                        
                $(project_id).velocity("scroll", { axis: "x", duration: 750, container: container, easing: 'ease-in-out' }); // Scroll to next project
                
                updateArrow();

                setTimeout(function() {
                    $('.arrow-container').addClass('dip-to-white');
                    // $('.project-container').addClass('dip-to-white');
                }, 0);
            }
        });

        // Scroll to next project
        $('#next').click(function(evt) {
            if (!_openProjectState) {
                return;
            }

            if (current_index < currents.length - 1) {
                current_index++;
                project_id = updateCurrentProject(current_index, project_id);

                _endeavorRouter.setURL(project_id.substring(1)); // Internal URL Routing

                $('.arrow-container').removeClass('dip-to-white');
                // $('.project-container').removeClass('dip-to-white');

                resetProjectControls();

                $(project_id).scrollTop(0)     // Reset project scroll             
                $(project_id).velocity("scroll", { axis: "x", duration: 750, container: container, easing: 'ease-in-out' }); // Scroll to next project
                
                updateArrow();

                setTimeout(function() {
                    $('.arrow-container').addClass('dip-to-white');
                    // $('.project-container').addClass('dip-to-white');
                }, 0);
            }
        });

        // Scroll to next project
        $('#close').click(function(evt) {
            if (!_openProjectState) {
                return;
            }

            closeProject();

        });

        // Resize
        $(window).resize(function(evt) {
            let timer;

            clearTimeout(timer);
            
            timer = setTimeout(function() {
                $(project_id).velocity("scroll", { axis: "x", duration: 0, container: container }); 
            }, 500);
        });

        // Closure
        return {
            workItemInteraction: function(_project_id, evt) {
                workItemInteraction(_project_id, evt);
            }
        }

    }();


    // --------------------------------------
    // Lazy Load Images --> Unveil2

    $('.img-load').unveil({
        offset: 800,
        container: $('.endeavor-view'),
        placeholder: '../images/loader.gif'
    });


    // $('.img-load').unveil({
    //     placeholder: 'http://placehold.it/500x300',
    // }).on('loading.unveil', function() {
    //     console.log('unveiling ' + this);
    // }).on('loaded.unveil', function() {
    //     this.removeClass('veil');
    //     console.log('unveiled ' + this);
    // });

    // $('.img-load').unveil();    

    // $('.img-load').unveil(200, function() {
    //     $(this).load(function() {
    //         this.removeClass('veil');
    //         console.log('unviel ' + this);
    //     });
    // });


    // --------------------------------------
    // Image-Grid Overlay

    $('.image-grid-container').click(function() {
        
        let $containerClass    = $(this).parent(),  
            $slickInitClass    = $containerClass.find('.grid-slider'),
            slideIndex        = $(this).data('slide');

        $containerClass
            .children('.image-grid-container')
                .removeClass("active-grid")
                .addClass("bounce-sm");

        $(this)
            .removeClass("bounce-sm")
            .addClass("active-grid");

            
        if (!$slickInitClass.hasClass('slick-initialized')) {    
            
            $containerClass
                .children('.image-grid-container')
                    .removeClass("bounce")
                    .addClass('bounce-sm shrink-grid');
                
            $slickInitClass.addClass('active-grid-slider');

            // Add Slick slider with current parent id
            addSlick($slickInitClass, false, false);
                $slickInitClass.removeClass('slider-transition');

                // Wait to calculate page offset until class transition ends
                setTimeout(
                    function(e) {

                        let scrollInId = $('.case-study-view');

                        $(this).velocity("scroll", { 
                            container: scrollInId,
                            duration:  800,
                            delay:     0,
                            mobileHA:  false
                        });

                }, 500);

            $slickInitClass.slick('slickGoTo', slideIndex, true);   // Do not animate to first position

        } else {
            $slickInitClass.slick('slickGoTo', slideIndex, false);  // Once loaded, animate to new position
        }

        $slickInitClass.on('swipe', function(event) {
            
            $containerClass
                .children('.image-grid-container')
                    .removeClass("active-grid")
                    .addClass("bounce-sm");

            let currentSlide = $slickInitClass.slick('slickCurrentSlide');
            let activeSlide  = $containerClass
                                    .find("[data-slide='" + currentSlide + "']");
                activeSlide
                    .addClass("active-grid")
                    .removeClass("bounce-sm");
        });
    });

    // Pagination event listener
    $('.pagination').click(function() {

        _sectionCurrent = $(this).attr("data-sectionId");

        // Navigate
        animation.scrollToVelocity(_sectionCurrent);

    });

    // Header navigation --> Go Home (clicking 'a' sends the users to /#bios)
    $('.logo').click(function(){
        
        //  Close current project
        closeProject();
        closeNav();

        _sectionCurrent = "web-lab"; // Set #web-lab as current
        animation.scrollToVelocity(_sectionCurrent); // Navigate

    });

    $('.scroll-arrow').click(function() {
        _sectionCurrent = "bios"; // Set #bios as current
        animation.scrollToVelocity(_sectionCurrent); // Navigate
        $(this).velocity("fadeOut", { duration: 250 }); // Fade it out | They get it
    });


    // --------------------------------------
    // Widow Tamer

    // if (_mobile) {
    //     wt.fix({
    //         elements: '.tamer',
    //         chars: 14,
    //         method: 'letter-spacing',
    //         event: 'orientationchange'
    //     });
    // }
    // else if (window.innerWidth > 400) {
    //     wt.fix({
    //         elements: '.tamer',
    //         chars: 14,
    //         method: 'letter-spacing',
    //         event: 'resize'
    //     });
    // }


    // --------------------------------------
    // Sticky Elements

    function stickyUpdate() {
        let stickyElements = $('.sticky');

        stickyfill.kill(); // --> Reset
        
        if (_mobile || window.innerWidth < 1000) {
            stickyfill.kill();
            return;
        }

        for (let i = stickyElements.length - 1; i >= 0; i--) {
            stickyfill.add(stickyElements[i]);
        }

        stickyfill.rebuild();
    }


    // --------------------------------------
    // Mobile

    // Hide Case study option
    if (_mobile) {
        // $('.case-study').addClass('hidden');
    }

    /*
        Alternative check for mobile devices

        _mobile = window.mobilecheck = (function() {
            let check = false;
            (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
            
            return check;
        })(); // Call immediately
    */

    $('#bios-more').click(function() {
        $(this).velocity("fadeOut", { duration: 500 });
        $('#self-long').velocity("fadeIn", { duration: 500 });
    });

    $('#select-more').click(function() {
        $(this).velocity("fadeOut", { duration: 500 });
        $('#select-work li:nth-child(n+8)').velocity("fadeIn", { duration: 500 });
    });

    // Close Project
    $('.close').click(function() {
        closeCasestudy();
    });    

});

// Functions =============================================================


// Page load routing + hashing
_endeavorRouter = function() {

    // Set current url hash
    let loaded;
    let _sections = $('.section');

    function route() {
        // If the user requests the index page, redirect to #bios
        if ((window.location.pathname === "/") && (loaded !== true)) {
            window.location.hash = "web-lab";
            _sectionCurrent = $(_sections).index($('#web-lab')); // Set #bios as current

            hashChanged('#web-lab');
            loaded = true;
        }
        else {
            // Check for Project Incoming Routing
            for (let i = 0; i < _endeavor_routes.case_studies.length; i++) {
                let item = _endeavor_routes.case_studies[i],
                    path = window.location.pathname;

                if (path === ("/" + item)) {
                    window.location.hash = "#works";
                    hashChanged();

                    setTimeout(function() {
                        window.history.replaceState('routing', item, "/" + item); // Update browser state without refreshing the page
                       _itemInteraction.workItemInteraction(item, $('.case-study-item'));
                    }, 500); // I'm sorry : (

                    _sectionCurrent = $(_sections).index($('#works')); // Set #bios as current
                    return;
                }
            }

            // Check for Project Incoming Routing
            for (let i = 0; i < _endeavor_routes.projects.length; i++) {
                let item = _endeavor_routes.projects[i],
                    path = window.location.pathname;

                if (path === ("/" + item)) {
                    window.location.hash = "#works";
                    hashChanged();

                    setTimeout(function() {
                        window.history.replaceState('routing', item, "/" + item); // Update browser state without refreshing the page
                       _itemInteraction.workItemInteraction(item, $('.project-item'));
                    }, 500); // I'm sorry : (

                    _sectionCurrent = $(_sections).index($('#works')); // Set #bios as current
                    return;
                }
            }

            // Find requested route
            let loc = window.location.hash;
            // Set current object to this route
            _sectionCurrent = $(_sections).index($(loc));
        }

        $(_sections).removeClass('currentSection');

        $( _sections[ _sectionCurrent ] )
            .addClass('currentSection')
            .velocity("scroll", { duration: 1});
    }

    // Closure
    return {
        route: function() {
            route();
        },
        resetURL: function() {
            window.history.pushState('routing', "", "/"); // Update browser state without refreshing the page
        },
        setHash: function(hash) {
            window.location.hash = "#" + hash;
        },
        setURL: function(URL) {
            window.history.pushState('routing', "", "/" + URL); // Update browser state without refreshing the page
            window.location.hash = "";
        }
    }
}();

// Dynamic page hash setting (anonymous fn)
(function () {
    // Find all top,bottom and Hash of each sections
    let section = $.map($("section"), function (e) {
        let $e = $(e);
        let pos = $e.position();
        return {
            top: pos.top - 100,
            bottom: pos.top - 100 + $e.height(),
            hash: $e.attr('id')
        };
    });
     // Checking scroll 
    let top = null;
    let changed = false;
    let currentHash = null;

    $(document).scroll(function () {
        let newTop = $(document).scrollTop();
       
        changed = newTop != top;

        if (changed) {
            top = newTop;
        }
    });
  
    //Set Hash while start scroll | check only every 200ms
    function step() {
        if (!changed) {
            return setTimeout(step, 200);
        }

        let count = section.length,
            p;

        while (p = section[--count]) {
            if (p.top >= top || p.bottom <= top) {
                continue;
            }
            if (currentHash === p.hash) {
                break;
            }
            
            let scrollTop = $(document).scrollTop();
            window.location.hash = currentHash = p.hash;

            _sectionCurrent = p.hash;
            
            // prevent browser to scroll
            $(document).scrollTop(scrollTop);
        }

        setTimeout(step, 200);
    }

    setTimeout(step, 200);

})();

// Toggle visibility of main logo
function toggleLogo(loc) {
    let header = $('#header');

    if (loc === "#web-lab") { 
        console.log('Header Closed');
        header.removeClass('header-open');
    } else {
        header.addClass('header-open');
        console.log('Header Open');
    }
}

// Toggle visibility of Glyph Controls
function toggleGlyphControls(loc) {

    if (loc === "#web-lab") { 
        $('.lab-options').velocity("fadeIn", { duration: 250, display: "flex" });
        $('.lab-what').velocity("fadeIn", { duration: 250, display: "flex" });
    } else {
        $('.lab-options').velocity("fadeOut", { duration: 250 });
        $('.lab-what').velocity("fadeOut", { duration: 250 });
    }
}

// Control Header or Anything else Hash related
function hashChanged() {
    let loc = window.location.hash;

    toggleLogo(loc); // Check the logo visibility
    toggleGlyphControls(loc) // Check weblab control visibility

    let sectionUpdate = String(loc).slice(1);

    // Affect pagination on navigation change
    paginationUpdate(sectionUpdate);

    // Close project overlay if open
    if (_openProjectState) {
        _closeProject();
    }

};

// Setup Pagination
function pagination(_sections) {

    $(_sections).each(function(i, obj) {

        let id = $(this).attr('id');

        // For each element with '_sections' class; append new pagination to dom.
        $('#pagination').append('<div class = "pagination"></div>');
        $('.pagination').eq(i).attr( 'data-sectionId', id );
        $('.pagination').eq(i).attr( 'data-content', id );

    });

}

// Update pagination active states
function paginationUpdate(sectionUpdate) {
    $('.pagination').removeClass('pagination-active');
    let active_section = $('#pagination').find("[data-sectionId='" + sectionUpdate + "']");
        active_section.addClass('pagination-active pagination-active-before');

    setTimeout(function() {
        active_section.removeClass('pagination-active-before');
    }, 2000
    );
}


// Setup for Slick slider plugin Grid #1
function addSlick($elem, _dotsBool, _autoplay = true) {

    $elem.slick({
        arrows:             false,
        pauseOnHover:       true,
        autoplay:           _autoplay,
        dots:               _dotsBool,
        lazyLoad:           'progressive',
        adaptiveHeight:     true
    });
}

function centerOffest(scrollInId, scrollToId) {

    let elementOffset = scrollToId.offset().top,
        distance      = (elementOffset - scrollTop),
        middle        = distance - $(scrollInId).height()/2;

    return middle;
}

// Set up Date Query
function setGreeting() {

    // Get current time
    let d = new Date(),
        n = d.getHours(),
        greeting;

    if ((n < 11) && (n > 4)) {
        greeting = "Good Morning ";
    } else if ((n < 18) && (n > 10)) {
        greeting = "Good Afternoon ";
    } else if ((n > 17) || (n < 5)) {
        greeting = "Good Evening ";
    } else {
        greeting = "Hello ";
    }

    // Add the greeting to the very first interactive section*/
    $('#greeting p:first-child').html(greeting);
}

/*


Seperation of styling for complex page animations


*/


// Set up page-load animation

let $info          = $("#info"),
    $navBurger     = $('#nav-burger'),
    $pagination    = $('#pagination'),
    $navFooter     = $('.nav-footer');


let loadingSequence = [
    {
        e: $navBurger,
        p: {
            right: 50,
            opacity: 1 
        },
        o: {
            duration: 500,
            easing: "easeInSine",
            sequenceQueue: false
        }
    },
    {
        e: $pagination,
        p: {
            right: 57, 
        }, 
        o: {
            duration: 500,
            easing: "easeInSine",
            sequenceQueue: false
        }
    },
    { 
        e: $info,
        p: { opacity: 1 },
        o: { 
            duration: 500,
            easing: "easeInSine",
            sequenceQueue: false
        }
    },
    { 
        e: $navFooter,
        p: { bottom: 0 },
        o: { 
            duration: 500,
            easing: "easeInSine",
            sequenceQueue: false
        }
    }
]


// jQuery Extentions =============================================================

$.fn.appendAttr = function(attrName, suffix) {
    this.attr(attrName, function(i, val) {
        return val + suffix;
    });
    return this;
};

// scrollTo

/* sigmoidFactory
*
* Generate an ease-in-out function with desired steepness.
* https://medium.com/analytic-animations/ease-in-out-the-sigmoid-factory-c5116d8abce9#.riq7ob6tj
* 
* Required:
*   k: (float != 0), sharpness of ease
*
* Return: f(t), t in 0..1
*/
function sigmoidFactory(k) {
    function base(t) {
        return 1 / (1 + Math.exp(-k * t)) - 0.5;
    }

    var correction = 0.5 / base(1);

    return function (t) {
        t = clamp(t, 0, 1);
        return correction * base(2 * t - 1) + 0.5;
    };
}

function clamp(val, lower, upper) {
    return Math.max(Math.min(val, upper), lower);
}

function Deferred(fn) {
    fn = fn || function () {};

    var res = void 0,
        rej = void 0;

    var p = new Promise(function (resolve, reject) {
        fn(resolve, reject);

        res = resolve;
        rej = reject;
    });

    p.resolve = res;
    p.reject = rej;

    return p;
}

/* scrollTo
 *
 * Smoothly scrolls to a particular element.
 *
 * Required:
 *   [0] target: The element to scroll to
 *
 * Optional:
 *     msec: defaults to 250 msec
 *     easing: defaults to ease-in-out-cubic
 *     offset: extra offset in pixels
 *
 * Return: void
 */
function scrollTo(container, target, options) {
    if (target === null) {
        target = container;
    }

    if (options === undefined || typeof options === 'function') {
        options = {};
    }

    var msec = options.msec || 250;
    var easing = options.easing || sigmoidFactory(6);
    var offset = options.offset || 0;

    var position_offset = target.offsetTop - container.offsetTop + offset;

    if (position_offset === 0) {
        return Promise.resolve();
    }

    var distance_traveled = 0;
    var start_pos = container.scrollTop;

    var req;

    var deferred = Deferred();

    deferred.then(function () {
        container.scrollTop = start_pos + position_offset;
    }, function () {
        if (req) {
            cancelAnimationFrame(req);
        }
    });

    var start_time = window.performance.now();

    function animate() {
        var now = window.performance.now();
        var t = (now - start_time) / msec;

        if (t >= 1) {
            deferred.resolve();
            return;
        }

        var proportion = easing(t);

        distance_traveled = proportion * position_offset;
        container.scrollTop = start_pos + distance_traveled;

        req = requestAnimationFrame(animate);
    }

    req = requestAnimationFrame(animate);

    return deferred;
};