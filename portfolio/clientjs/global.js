/*

Alex Norton
a^N 
http://alexnortn.com

*/

"use strict";

// jQuery things
let $ = require('jquery');

// Module Dependencies
let velocity    = require('velocity-animate');
let velocity_ui = require('velocity-ui-pack');
let slick       = require('slick-carousel');


// Userlist data array for filling in info box
let userListData = [],
    projects,
    open = false,
    menu = false;

let _sections = $('.slickNav'),
    _sectionCurrent;

    // attachFastClick = require('fastclick');    


// DOM Ready =============================================================
$(document).ready(function() {

    hashRoute();

    // Set Greeting
    setGreeting();

    // Set Initial Width
    setWidth();

    // Call pagination
    pagination(_sections);
    paginationUpdate(_sectionCurrent);

    // Check for section (header)
    hashChanged(window.location.hash);

    // let loader = function() {
    //     $.Velocity.RunSequence(loadingSequence);
    // } 

    $('body').addClass('loading');

    // Center In

    // $('.project-overview').alwaysCenterIn(window, { top: "-3%" });
    // $('#pagination').alwaysCenterIn(window, { direction: 'vertical' });
    // $('#bios-content').alwaysCenterIn('#bios', { top: "-3%" });

    // Display Interaction Info
    $('#cross-circle').hover(function() {
        $('#infoText').slideToggle('slow', 'swing');
    });

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

    // Set the bottom elements to proper size
    $(window).resize(function() {
        setWidth();
    });

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
            console.log(newWidth);

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
            console.log(newWidth);

        // Resize all videos according to their own aspect ratio
        $allVideos.each(function() {

            let $el = $(this);
            $el
              .width(newWidth)
              .height(newWidth * $el.data('aspectRatio'));

        });

    };


    // Event Handlers


    $('.nav-footer').click(function(){
        $('#bios').velocity("scroll", { duration: 1000, easing: "ease-in-out" });
    });


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

            console.log("slideIndex " + slideIndex);
            console.log("slickInitId " + slickInitId);


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


    // Navigation Functions

    $('html').bind('mousewheel DOMMouseScroll', function (e) {
        setTimeout( function() {
            let delta = (e.originalEvent.wheelDelta || -e.originalEvent.detail);
            let _sectionCount = _sections.length;

            if(e.handled !== true) { // This will prevent event triggering more then once

                if (open == false) {
            
                    if (delta < 0) {

                            console.log('You scrolled down');   

                        if (_sectionCurrent < _sectionCount - 1) {

                            // Remove active class
                            $(_sections[_sectionCurrent]).removeClass('currentSection');
                            
                            // Increment _sectionCurrent 
                            _sectionCurrent++;

                            // Add active class
                            $(_sections[_sectionCurrent]).addClass('currentSection');

                                console.log(_sectionCurrent + " down");

                            // Navigate
                            navigateScroll(_sectionCurrent);

                        }

                    } else if (delta > 0) {
                            
                            console.log('You scrolled up');
                        
                        if (_sectionCurrent > 0) {

                            // Remove active class
                            $(_sections[_sectionCurrent]).removeClass('currentSection');
                            
                            // Decrement _sectionCurrent 
                            _sectionCurrent--;

                            // Add active class
                            $(_sections[_sectionCurrent]).addClass('currentSection');

                            console.log(_sectionCurrent + " up");

                            // Navigate
                            navigateScroll(_sectionCurrent);

                        }
                    }
                }
            }
        }, 100);

    });

    // Pagination event listener
    $('.pagination').click(function() {

        _sectionCurrent = $('.pagination').index($(this));

        // Navigate
        navigateScroll(_sectionCurrent);

    });

    // Header navigation --> Go Home (clicking 'a' sends the users to /#bios)
    $('#logo').click(function(){
        
        //  Close current project
        if (open) closeProject();

        // Set #bios as current
        _sectionCurrent = $(_sections).index($('#bios'));

        // Call function to make sure the header is loaded
        hashChanged('#bios');


        // Navigate
        navigateScroll(_sectionCurrent);

    });


    // Footer navigation moments

    $('#prev').click( function(e) {

         if(e.handled !== true) { // This will prevent event triggering more then once
        
            if (_sectionCurrent > 0) {

                // Remove active class
                $(_sections[_sectionCurrent]).removeClass('currentSection');
                
                // Decrement _sectionCurrent 
                _sectionCurrent--;

                // Add active class
                $(_sections[_sectionCurrent]).addClass('currentSection');

                console.log(_sectionCurrent + " prev");

                // Navigate
                navigateScroll(_sectionCurrent);

            }
        }
    });

    $('#next').click( function(e) {

         if(e.handled !== true) { // This will prevent event triggering more then once
        
            if (_sectionCurrent < _sections.length - 1) {

                // Remove active class
                $(_sections[_sectionCurrent]).removeClass('currentSection');
                
                // Increment _sectionCurrent 
                _sectionCurrent++;

                // Add active class
                $(_sections[_sectionCurrent]).addClass('currentSection');

                    console.log(_sectionCurrent + " next");

                // Navigate
                navigateScroll(_sectionCurrent);

            }
        }

    });


    // Dealing with key events regarding navigation

    /*

    let UP = 38;
    let DOWN = 40;
    let ENTER = 13;

    let getKey = function(e) {
      if(window.event) { return e.keyCode; }  // IE
      else if(e.which) { return e.which; }    // Netscape/Firefox/Opera
    };


        let keynum = getKey(e);

        if(keynum === UP) {
          //Move selection up
        }

        if(keynum === DOWN) {
          //Move selection down
        }

        if(keynum === ENTER) {
          //Act on current selection
        }

    */
    

});

// Functions =============================================================


// Page load routing + hashing
function hashRoute() {

    // Set current url hash
    let loaded;
    let _sections = $('.slickNav');

    if ((window.location.hash == "") && (loaded !== true)) {

        // If the user requests the index page, redirect to #bios
        window.location.hash = "bios";

        // Set #bios as current
        _sectionCurrent = $(_sections).index($('#bios'));

        console.log("section current " + _sectionCurrent);
        hashChanged('#bios')
        loaded = true;

    } else {

        // Find requested route
        let loc = window.location.hash;

        // Set current object to this route
        _sectionCurrent = $(_sections).index($(loc));

        console.log("section current " + _sectionCurrent);

    }

    $(_sections).removeClass('currentSection');

    $( _sections[ _sectionCurrent ] )
        .addClass('currentSection')
        .velocity("scroll", { duration: 1});

}

// Dealing with in-page use generated routinge events (copy+paste stack overflow hotfix)

if ("onhashchange" in window) { // event supported?
    window.onhashchange = function () {
        hashChanged(window.location.hash);
        console.log("HASH CHANGE");
        // update current hash
        hashRoute();
    }
}
else { // event not supported:
    let storedHash = window.location.hash;
    window.setInterval(function () {
        if (window.location.hash != storedHash) {
            storedHash = window.location.hash;
            hashChanged(storedHash);
            // update current hash
            hashRoute();
        }
    }, 100);
}

function setHash(_sectionCurrent) {

    // Get the id of the current section, set the url hash to match
    window.location.hash = $(_sections[_sectionCurrent]).attr('id');

}

// Control Header or Anything else Hash related
function hashChanged(_hash) {

    setTimeout(
        function() {
            if (_hash == "#interactive") {
                $('header').delay( 10 ).fadeOut( 400 );
                console.log("fade OUT");
            } else {
                $('header').delay( 10 ).fadeIn( 400 );
                console.log("fade IN");
            }

            // Affect pagination on navigation change
            paginationUpdate(_sectionCurrent);

            // Affect the bottom navigation bar
            navUpdate(_sectionCurrent);

        }
    , 10 );

};

// Navigate with velocity
function navigateScroll(_sectionCurrent) {

    // Scroll navigate, call setHash when finished moveing
    $(_sections[_sectionCurrent]).velocity("scroll", { duration: 750, easing: "ease-in-out" });

    setTimeout(function() {

        setHash(_sectionCurrent);

    }, 250);
    
}


function pagination(_sections) {

    $(_sections).each(function(i, obj) {

        let id = $(this).attr('id');

        // For each element with '_sections' class; append new pagination to dom.
        $('#pagination').append('<div class = "pagination"></div>');
        $('.pagination').eq(i).attr( 'data-sectionId', id );

    });

}

function paginationUpdate(_sectionCurrent) {

    $('.pagination').removeClass('pagination-active');
    $('.pagination').eq(_sectionCurrent).addClass('pagination-active');

}

// Set the state of the bottom nav-footer
function navUpdate(_sectionCurrent) {

    // Check for prev section
    if (_sectionCurrent > 0) {

            // PREV section
        let prev   = _sectionCurrent - 1;
        let prevId = $(_sections[prev]).attr('id');
            // REGEX for dealing with hyphen conversion to spaces
            prevId = prevId.replace(/-/g, ' ');

            // Set the inner html of our <strong> section
        $('.section-prev strong').html(prevId);
        $('.section-prev').removeClass('qt-opacity');

    } else {

        // If there is nothing beforehand, set the inner html to nothing
        // Also, probably set it to display none <--
        $('.section-prev strong').html("");
        $('.section-prev').addClass('qt-opacity');

    }

    // Check for next section
    if (_sectionCurrent < (_sections.length - 1)) {

            // NEXT section
        let next   = _sectionCurrent + 1;
        let nextId = $(_sections[next]).attr('id');
            // REGEX for dealing with hyphen conversion to spaces
            nextId = nextId.replace(/-/g, ' ');

            // Set the inner html of our <strong> section
        $('.section-next strong').html(nextId);
        $('.section-next').removeClass('qt-opacity');

    } else {

        // If there is nothing beforehand, set the inner html to nothing
        // Also, probably set it to display none <--
        $('.section-next strong').html("");
        $('.section-next').addClass('qt-opacity');

    }

        // Set the inner html of the current project
    let currentId = $(_sections[_sectionCurrent]).attr('id');
        // REGEX for dealing with hyphen conversion to spaces
        currentId = currentId.replace(/-/g, ' ');
    $('.section-current strong').html(currentId);

    // Check if we're in a project --> controle footer color ::
    if ($(_sections[_sectionCurrent]).data('inproject')) {

        $('.nav-footer')
            .removeClass('.dark-nav')
            .addClass('.white-nav');

    } else {

        $('.nav-footer')
            .removeClass('.white-nav')
            .addClass('.dark-nav');

    }

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

        console.log("element-offset " + elementOffset);
        console.log("distance " + distance);
        console.log("middle " + middle);

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

    console.log("Current hour is " + n);

    /* $('#greeting').prepend(greeting);  // Add the greeting to the very first interactive section*/
    $('#bios-header').prepend(greeting);
}

// Set the bottom element width to full using jQuery
function setWidth() {
    let windowWidth = $( window ).width();
    $("#triangle-bottom-left").css("border-left-width", windowWidth);
    $("#triangle-bottom-right").css("border-right-width", windowWidth);
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