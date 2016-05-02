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
let velocity    = require('velocity-animate');
let velocity_ui = require('velocity-ui-pack');
let slick       = require('slick-carousel');


// Userlist data array for filling in info box
let userListData = [],
    projects,
    open = false,
    menu = false;

let _sections = $('.section'),
    _sectionCurrent;

    // attachFastClick = require('fastclick');    


// DOM Ready =============================================================
$(document).ready(function() {

    // Set Greeting
    setGreeting();

    window.addEventListener("hashchange", hashChanged, false);

    // Call pagination
    pagination(_sections);
    paginationUpdate(_sectionCurrent);

    hashRoute();
    hashChanged();

    // let loader = function() {
    //     $.Velocity.RunSequence(loadingSequence);
    // } 

    $('body').addClass('loading');

    // Center In

    $('.project-overview').alwaysCenterIn(window, { top: "-3%" });
    $('#pagination').alwaysCenterIn(window, { direction: 'vertical' });
    // $('#bios-content').alwaysCenterIn('#bios', { top: "-3%" });

    // Open Project
    $('.project-overview').click(function(){
        open = !open;

        !open ? closeProject() : openProject(); 

    });

    function openProject() {
        $('#pagination').fadeToggle(1000);
        $('#arrow').fadeToggle(1000);
        $('.project-contents').fadeToggle(1000);

        let bottomSlick = $('.big-moment-3');

        // Initialize Slick object 
        if (!bottomSlick.hasClass('slick-initialized')) { 
            addSlick($('.big-moment-3'), true);
        };

        
        $('.project-overview').velocity("scroll", { 
            container: $('.project-view'),
            duration:  800,
            delay:     250,
            offset:    '800px',
            mobileHA:  false
        });
        

        // Size the video properly please
        videoSize();
    }

    function closeProject() {
        $('.project-contents').fadeOut('slow');
        $('#pagination').fadeToggle('slow');
        $('#arrow').fadeToggle('slow');
        open = false;
    };


    // Close Project
    $('.close').click(function() {
        closeProject();
    });

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

    // When the window is resized some fany ui positioning
    $(window).resize(function() {

            newWidth = $fluidEl.width();

        // Resize all videos according to their own aspect ratio
        $allVideos.each(function() {

            let $el = $(this);
            $el
              .width(newWidth)
              .height(newWidth * $el.data('aspectRatio'));

        });

    // Kick off one resize to fix all videos on page load
    }).resize();

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

                        let scrollInId = $('.project-view');
                        //     scrollTo = -centerOffest(scrollInId, overlaySlider);

                        //     console.log('scrollTo' + scrollTo );

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
        navigateScroll(_sectionCurrent);

    });

    // Header navigation --> Go Home (clicking 'a' sends the users to /#bios)
    $('#logo').click(function(){
        
        //  Close current project
        if (open) closeProject();

        // Set #bios as current
        _sectionCurrent = "web-lab";

        // Navigate
        navigateScroll(_sectionCurrent);

    });
    

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

    $(window).scroll(function () {
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
            
            // prevent browser to scroll
            $(document).scrollTop(scrollTop);
        }

        setTimeout(step, 200);
    }

    setTimeout(step, 200);

})();

// Toggle visibility of main logo
function toggleLogo(loc) {
    let logo = $('#logo');

    if (loc == "#web-lab") {
        if (logo.css('display') == 'block') {    
            logo.velocity("fadeOut", { duration: 250 });
        }
    } else {
        if (logo.css('display') == 'none') {    
            logo.velocity("fadeIn", { duration: 500 });
        }
    }
}

// Control Header or Anything else Hash related
function hashChanged() {
    let loc = window.location.hash;

    toggleLogo(loc); // Check the logo visibility

    let sectionUpdate = String(loc).slice(1);

    // Affect pagination on navigation change
    paginationUpdate(sectionUpdate);

};

// Navigate with velocity
function navigateScroll(_sectionCurrent) {

    let nav = "#" + _sectionCurrent;
    // Scroll navigate, call setHash when finished moveing
    $(nav).velocity("scroll", { duration: 750, easing: "ease-in-out" });
    
}


// Setup Pagination
function pagination(_sections) {

    $(_sections).each(function(i, obj) {

        let id = $(this).attr('id');

        // For each element with '_sections' class; append new pagination to dom.
        $('#pagination').append('<div class = "pagination"></div>');
        $('.pagination').eq(i).attr( 'data-sectionId', id );

    });

}

// Update pagination active states
function paginationUpdate(sectionUpdate) {

    $('.pagination').removeClass('pagination-active');
    $('#pagination')
        .find("[data-sectionId='" + sectionUpdate + "']")
        .addClass('pagination-active');

    // debugger;

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

    let scrollTop     = scrollInId.scrollTop(),
        elementOffset = scrollToId.offset().top,
        distance      = (elementOffset - scrollTop),
        middle        = distance - $(scrollInId).height()/2;

    return middle;
}

// Set up Date Query
function setGreeting() {

    // Get current time
    let d = new Date();
    let n = d.getHours();

    let greeting;

    if ((n < 11) && (n > 4)) {
        greeting = "Good Morning, ";
    } else if ((n < 18) && (n > 10)) {
        greeting = "Good Afternoon, ";
    } else if ((n > 18) || (n < 5)) {
        greeting = "Good Evening, ";
    }

    // Add the greeting to the very first interactive section*/
    $('#greeting').prepend(greeting);
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