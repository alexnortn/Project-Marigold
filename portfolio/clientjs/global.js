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

    $('.project-overview').alwaysCenterIn(window, { top: "-3%" });
    $('#pagination').alwaysCenterIn(window, { direction: 'vertical' });
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