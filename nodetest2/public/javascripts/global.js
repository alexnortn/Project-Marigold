// Alex Norton
// a^N 
// http://alexnortn.com


// Userlist data array for filling in info box
var userListData = [],
    projects,
    open = false,
    menu = false;

var _sections = $('.slickNav'),
    _sectionCurrent;

    // attachFastClick = require('fastclick');    


// DOM Ready =============================================================
$(document).ready(function() {

    // Populate the user table on initial page load
    // populateTable();

    // Build Site
    // buildSite();

    // Username link click
    // $('#userList table tbody').on('click', 'td a.linkshowuser', showUserInfo);

    // Attach Fast Click
    // attachFastClick(document.body);

    hashRoute();

    // Set Greeting
    setGreeting();

    // Set Initial Width
    setWidth();

    // Initial FadeIn
    // fadeInPage();
    window.setTimeout(function() { loader() }, 5000);

    var loader = function() {
        $.Velocity.RunSequence(loadingSequence);
    } 

    // Center In

    $('.project-overview').alwaysCenterIn(window, { top: "-3%" });
    $('#pagination').alwaysCenterIn(window, { direction: 'vertical' });
    // $('#bios-content').alwaysCenterIn('#bios', { top: "-3%" });

    // Display Interaction Info
    $('#cross-circle').hover(function() {
        $('#infoText').slideToggle('slow', 'swing');
    });


    // Control Header
    $(window).on('scroll', function() {
        if ( $(document).scrollTop() > $(window).height() - 50) {
            $('header').fadeIn(500);
            console.log("fade IN");
        } else if ( $(document).scrollTop() < $(window).height() - 50) {
            $('header').fadeOut(500);
            console.log("fade OUT");
        }
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

        var bottomSlick = $('.big-moment-3');

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

    $('#logo').click(function(){
        closeProject();
        $("html, body").animate({ scrollTop: "0px" }, 750);
    });

    $('.close').click(function() {
        closeProject();
    });

        // Find all Vimeo videos
        var $allVideos = $("iframe[src^='//player.vimeo.com'], iframe[src^='//www.youtube.com']"),

        // The element that is fluid width
        $fluidEl = $("#video-frame");
        var newWidth = $fluidEl.width();

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

            var $el = $(this);
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

            var $el = $(this);
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
        
        var containerId    = '#' + $(this).parent().attr('id'),  
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

                        var scrollInId = $('.project-view');
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

            var currentSlide = $(slickInitId).slick('slickCurrentSlide');
            var activeSlide  = $(containerId)
                                    .find("[data-slide='" + currentSlide + "']");
                activeSlide
                    .addClass("active-grid")
                    .removeClass("bounce-sm");
        });

    });


    // Navigation Functions

    $('html').bind('mousewheel DOMMouseScroll', function (e) {
        var delta = (e.originalEvent.wheelDelta || -e.originalEvent.detail);
        var _sectionCount = _sections.length;

        if (open == false) {
    
            if (delta < 0) {

                    console.log('You scrolled down');   

                if (_sectionCurrent < _sectionCount - 1) {

                    // Remove active class
                    $(_sections[_sectionCurrent]).removeClass('currentSection');
                    
                    // Increment _sectionCurrent 
                     _sectionCurrent++

                     // Add active class
                     $(_sections[_sectionCurrent]).addClass('currentSection');

                        console.log(_sectionCurrent + " down");

                     // Scroll to section
                    $(_sections[_sectionCurrent]).velocity("scroll", { duration: 750, easing: "ease-in-out" });

                    // Set the url hash
                    setHash(_sectionCurrent);

                }

            } else if (delta > 0) {
                    
                    console.log('You scrolled up');
                
                if (_sectionCurrent > 0) {

                    // Remove active class
                    $(_sections[_sectionCurrent]).removeClass('currentSection');
                    
                    // Decrement _sectionCurrent 
                     _sectionCurrent--

                     // Add active class
                     $(_sections[_sectionCurrent]).addClass('currentSection');

                     console.log(_sectionCurrent + " up");

                     // Scroll to section
                    $(_sections[_sectionCurrent]).velocity("scroll", { duration: 750, easing: "ease-in-out" });

                    // Set the url hash
                    setHash(_sectionCurrent);

                }
            }
        }

    });

        
    

});

// Functions =============================================================


// Page load routing + hashing
function hashRoute() {

    // Set current url hash
    var _sections = $('.slickNav');

    if (window.location.hash == "") {

        // If the user requests the index page, redirect to #bios
        window.location.hash = "bios";

        // Set #bios as current
        _sectionCurrent = $(_sections).index($('#bios'));

        console.log("section current " + _sectionCurrent);

    } else {

        // Find requested route
        var loc = window.location.hash;

        // Set current object to this route
        _sectionCurrent = $(_sections).index($(loc));

        console.log("section current " + _sectionCurrent);

    }

    $(_sections).removeClass('currentSection');

    $( _sections[ _sectionCurrent ] )
        .addClass('currentSection')
        .velocity("scroll", { duration: 1});

}

function setHash(_sectionCurrent) {

    // Get the id of the current section, set the url hash to match
    window.location.hash = $(_sections[_sectionCurrent]).attr('id');

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

    var scrollTop     = scrollInId.scrollTop(),
        elementOffset = scrollToId.offset().top,
        distance      = (elementOffset - scrollTop),
        middle        = distance - $(scrollInId).height()/2;

        console.log("element-offset " + elementOffset);
        console.log("distance " + distance);
        console.log("middle " + middle);

    return middle;
}

// Set up Date Query
var setGreeting = function () {

    // Get current time
    var d = new Date();
    var n = d.getHours();

    var greeting;

    if ((n < 11) && (n > 4)) {
        greeting = "Good Morning, ";
    } else if ((n < 18) && (n > 10)) {
        greeting = "Good Afternoon, ";
    } else if ((n > 18) || (n < 5)) {
        greeting = "Good Evening, ";
    }

    console.log("Current hour is " + n);

    $('#greeting').prepend(greeting);
    $('#bios-header').prepend(greeting);
}

// Set the bottom element width to full using jQuery
var setWidth = function() {
    var windowWidth = $( window ).width();
    $("#triangle-bottom-left").css("border-left-width", windowWidth);
    $("#triangle-bottom-right").css("border-right-width", windowWidth);
}

/*


Seperation of styling for complex page animations


*/


// Set up page-load animation

var $info          = $("#info"),
    $navBurger     = $('#nav-burger'),
    $pagination    = $('#pagination'),
    $navFooter     = $('.nav-footer');


var loadingSequence = [
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