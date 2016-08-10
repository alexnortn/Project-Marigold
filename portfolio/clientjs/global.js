/*

Alex Norton
a^N 
http://alexnortn.com

*/

"use strict";

// jQuery things
let $ = require('jquery');
        require('./jquery.centerIn.js');

// Module Dependencies
let velocity    = require('velocity-animate'),
    velocity_ui = require('velocity-ui-pack'),
    slick       = require('slick-carousel'),
    Stickyfill  = require('stickyfill'),
    isMobile    = require('ismobilejs'),
    animation = require('./animation.js');

// Userlist data array for filling in info box
let userListData = [],
    projects,
    menu = false;

let _sections = $('.section'),
    _sectionCurrent,
    _caseStudySupport;

let stickyfill = Stickyfill();
// let widowtamer = WidowTamer();

let _mobile;

    // attachFastClick = require('fastclick');    


// DOM Ready =============================================================
$(document).ready(function() {

    // Check mobile
    if (isMobile.tablet || isMobile.phone) {
        _mobile = true;
    }

    // Set Greeting
    setGreeting();

    window.addEventListener("hashchange", hashChanged, false);

    // Call pagination
    pagination(_sections);
    paginationUpdate(_sectionCurrent);

    hashRoute();
    hashChanged();

    _caseStudySupport = caseStudySupport(); // Set up case study support

    $('body').addClass('loading');

    // Center In
    $('#pagination').alwaysCenterIn(window, { direction: 'vertical' });

    // Find all Vimeo videos
    let $allVideos = $("iframe[src^='//player.vimeo.com'], iframe[src^='//www.youtube.com']"),

    // The element that is fluid width
    $fluidEl = $("#video-frame");
    let newWidth = $fluidEl.width();

    // Figure out and save aspect ratio for each video
    $allVideos.each(function() {

        $(this)
            .data('aspectRatio', this.height / this.width)

                // and remove the hard coded width/height
                .removeAttr('height')
            .removeAttr('width');

    });

    // When the window is resized some fancy ui positioning
    $(window).resize(function() {

        newWidth = $fluidEl.width();

        // Resize all videos according to their own aspect ratio
        $allVideos.each(function() {
            let $elem = $(this);
            $elem
              .width(newWidth)
              .height(newWidth * $elem.data('aspectRatio'));
        });

        // Hack to keep case study section from getting out of sync
        if ($('.case-study').hasClass('case-study-open')) {
            $('.case-study').addClass('case-study-resize');
        }

        stickyUpdate();

    // Kick off one resize to fix all videos on page load
    }).resize();

    // Check current position relative to top of page
    $(window).scroll(function () {
        $('.scroll-arrow').velocity("fadeOut", { duration: 250 }); // Fade it out | They get it
    });

    function videoSize() {

            newWidth = $fluidEl.width();

        // Resize all videos according to their own aspect ratio
        $allVideos.each(function() {

            let $el = $(this);
            $el
              .width(newWidth)
              .height(newWidth * $el.data('aspectRatio'));

        });
    };

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

        if ($('.case-study').hasClass('case-study-open')) {
            closeCasestudy();
        }

        if (_sectionCurrent == "works") {
            _sectionCurrent = $(".case-study-view").attr('id');
        }

        animation.scrollToVelocity(_sectionCurrent); // Navigate
    });



    // --------------------------------------
    // Image-Grid Overlay

    $('.image-grid-container').click(function() {
        
        let containerId    = '#' + $(this).parent().attr('id'),  
            slickInitId    = containerId + "-slider",
            overlaySlider  = $(slickInitId),
            slideIndex     = $(this).data('slide');


        $(containerId)
            .children('.image-grid-container')
                .removeClass("active-grid")
                .addClass("bounce-sm");

        $(this)
            .removeClass("bounce-sm")
            .addClass("active-grid");

            
        if (!overlaySlider.hasClass('slick-initialized')) {    
            
            $(containerId)
                .children('.image-grid-container')
                    .removeClass("bounce")
                    .addClass('bounce-sm shrink-grid');
                
            overlaySlider.addClass('active-grid-slider');

            // Add Slick slider with current parent id
            addSlick(slickInitId, false);
                $(slickInitId).removeClass('slider-transition');

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

            overlaySlider.slick('slickGoTo', slideIndex, true);   // Do not animate to first position

        } else {
            overlaySlider.slick('slickGoTo', slideIndex, false);  // Once loaded, animate to new position
        }

        overlaySlider.on('swipe', function(event) {
            
            $(containerId)
                .children('.image-grid-container')
                    .removeClass("active-grid")
                    .addClass("bounce-sm");

            let currentSlide = $(slickInitId).slick('slickCurrentSlide');
            let activeSlide  = $(containerId)
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
    $('#logo').click(function(){
        
        //  Close current project
        if ($('.case-study').hasClass('case-study-open')) {
            closeCasestudy();
        }

        _sectionCurrent = "web-lab"; // Set #web-lab as current
        animation.scrollToVelocity(_sectionCurrent); // Navigate

    });

    // Header navigation --> Go Home (clicking 'a' sends the users to /#bios)
    $('#logo-header').click(function(){
        
        if ($('.case-study').hasClass('case-study-open')) closeCasestudy(); //  Close current project
        closeNav() // Close nav

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
        $('.case-study').addClass('hidden');
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

    // --------------------------------------
    // Works Interaction

    // $('.select-work-item').click(function(evt) {   // Open Project
    //     let elem = evt.currentTarget.id;  // Navigate

    //     $('.case-study').hasClass('case-study-open')
    //         ? openCasestudy(elem, evt)
    //         : closeCasestudy(elem, evt);     
    // });

    function openCasestudy(elem, evt) {
        $('#pagination').fadeToggle(1000);
        $('body').addClass('project-open');

        let work_type = evt.currentTarget.classList[0];
        elem = "#" + elem;

        _caseStudySupport.addListener($(elem)); // Set up case study sticky listener

        if (work_type === "case-study") {

            $(elem).find('.case-study-contents').fadeToggle(1000);
            $(elem).addClass('case-study-open');

            let bottomSlick = $(elem).find('.big-moment-3');
            if (!bottomSlick.hasClass('slick-initialized')) { 
                addSlick(bottomSlick, true);
            };

             $(elem).find('.case-study-overview').velocity("scroll", { 
                container: $(elem).find('.case-study-view'),
                duration:  800,
                delay:     250,
                offset:    '800px',
                mobileHA:  false
            });
        }
        else if (work_type === "select-work-item") {
            let project = evt.currentTarget.dataset.project; // Find project
                project = "#" + project; // Make ID
            
            $(project).fadeToggle(1000);
        }

        stickyUpdate();        
        videoSize(); // Size the video accordingly
    }

    // Make this more generalizable?
    // Close casestudy vs close project?
    function closeCasestudy(evt) {
        let elem = $('.case-study-open');

        $('#pagination').fadeToggle('slow');

        _caseStudySupport.removeListener(elem); // Set up case study sticky listener
        
        elem.find('.case-study-contents').fadeOut('slow', function() { // Eh kind of wordy
                $('body').removeClass('project-open');
                $('.case-study').removeClass('case-study-open');
        });

        $('.case-study').removeClass('case-study-resize');

    };


    // Close Project
    $('.close').click(function() {
        closeCasestudy();
    });    


    // --------------------------------------
    // Case Study Support

    function caseStudySupport() {
        let last_known_scroll_position = 0,
            last_known_scroll_position1 = 0,
            last_known_scroll_position2 = 0,
            ticking = false,
            startingYpos = 0,
            state = false,
            scrollThreshold = 0;

            setup();

        function updateThreshold($element) {
            $($element).offset().top - $element.prop("scrollHeight");
        }

        function setup() {
            $(".case-study-view .case-study-contents").click(function(evt) {
                evt.stopPropagation(); // keep child elements from toggling case-study
            });

            $('.case-study-view').click(function(evt) {   // Open Case Study
                let elem = evt.currentTarget.id;  // Navigate
                animation.scrollToVelocity(elem);

                $(this).hasClass('case-study-open')
                    ? closeCasestudy(elem, evt)
                    : openCasestudy(elem, evt); 
            });
        }

        function scrollCheckerEnter($element) {
            let scrollPercent = ($element.scrollTop() / $element.prop("scrollHeight")) * 100;

            if (scrollPercent >= 88 && !state) { // Experimentally Determined
                $element.addClass('case-study-sticky');
                $('body').removeClass('project-open');
                scrollThreshold = $('body').scrollTop();
                state = true;
            }
        }

        function scrollCheckerExit($element, scroll_pos, threshold) {
            if (scroll_pos <= threshold && state) { // Re-Enter Project upwards
                $element.removeClass('case-study-sticky');
                $('body').addClass('project-open');
                state = false;
            }
        }
        function parallaxChecker(element) {
            // if (window.innnerWidth < )
        }

        // Scroll listener for Case Study
        function addListener($element) {

            window.setTimeout(function() {
                startingYpos = window.pageYOffset;
            }, 0);

            $element.scroll(function(evt) { // Search for case-study with open class
                last_known_scroll_position = window.scrollY;
                if (!ticking) {
                    window.requestAnimationFrame(function() {
                        scrollCheckerEnter($element);
                        ticking = false;
                    });
                }
                ticking = true;
            });

            $(window).resize(function(evt) { // Search for case-study with open class // on resize
                last_known_scroll_position = window.scrollY;
                if (!ticking) {
                    window.requestAnimationFrame(function() {
                        scrollCheckerEnter($element);
                        parallaxChecker($element);
                        ticking = false;
                    });
                }
                ticking = true;
            });

            // Scroll event listener for window
            $(window).scroll(function(evt) {
                last_known_scroll_position1 = window.scrollY;
                if (!ticking) {
                    window.requestAnimationFrame(function() {
                        scrollCheckerExit($element, last_known_scroll_position1, scrollThreshold);
                        ticking = false;
                    });
                }
                ticking = true;
            });
        }

        function removeListener($element) {
            // Remove Scroll event listener for element
            // $element.off();

            // Remove Scroll event listener for window
            // $(window).off();

            // setup();
        }

        return {
            addListener: addListener,
            updateThreshold: updateThreshold,
            removeListener: removeListener,
        };
    }
});

// Functions =============================================================


// Page load routing + hashing
function hashRoute() {

    // Set current url hash
    let loaded;
    let _sections = $('.section');

    if ((window.location.hash == "") && (loaded !== true)) {

        // If the user requests the index page, redirect to #bios
        window.location.hash = "web-lab";

        // Set #bios as current
        _sectionCurrent = $(_sections).index($('#web-lab'));

        hashChanged('#web-lab');
        loaded = true;

    } else {

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
            if (currentHash == p.hash) {
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
        header.removeClass('header-open');
    } else {
        header.addClass('header-open');
    }
}

// Toggle visibility of Glyph Controls
function toggleGlyphControls(loc) {

    if (loc === "#web-lab") { 
        $('.lab-options').addClass('lab-open');
        $('.lab-what').addClass('lab-open');
    } else {
        $('.lab-options').removeClass('lab-open');
        $('.lab-what').removeClass('lab-open');
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
function addSlick(_id, _dotsBool) {

    $(_id).slick({
        arrows:             false,
        dots:               _dotsBool,
        lazyLoad:           'progressive',
        adaptiveHeight:     true
    });
}

function navSlick(_id) {

    $(_id).slick({
        arrows:             true,
        dots:               false,
        lazyLoad:           'progressive',
        infinite:           false,
        adaptiveHeight:     true,
        vertical:           true,
        verticalSwiping:    true
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