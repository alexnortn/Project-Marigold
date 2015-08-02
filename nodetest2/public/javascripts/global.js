// Alex Norton
// a^N 
// http://alexnortn.com


// Userlist data array for filling in info box
var userListData = [],
    projects,
    open = false,
    menu = false;
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
    
    var bios_div = $('#bios');
    
    $('#bios-box').alwaysCenterIn(bios_div);
    $('.scroll-arrow').alwaysCenterIn(window, { direction: 'horizontal' });

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
        // $('#logo p').fadeToggle(1000);
        $('#pagination').fadeToggle(1000);
        $('#arrow').fadeToggle(1000);
        $('.project-contents').fadeToggle(1000);
        // Initialize Slick object 
        slickInitBtm();
        // $('.project-view').css("overflow-y", "scroll");
        /*
        $('html, body').animate({
            scrollTop: $('.main-description').offset().top
            }, 750);
            return false;
            console.log(open);
        */

        // Size the video properly please
        videoSize();
    }

    function closeProject() {
        // $("html, body").animate({ scrollTop: "0px" }, 500);
        $('.project-contents').fadeOut('slow');
        // $('.project-view').css("overflow-y", "hidden"); 
    
        // $('#logo p').fadeToggle('slow');
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

        // Bios readmore function
        $('#bio').click(function(){
            $('#readMore').slideToggle('slow', 'swing', function() {
                if($(this).is(':visible')) {
                    $('#bio').html("Read Less")
                    $('#bios-box').css("width", '411px');
                    $('#bios-text').css("padding-right", '20px');
                    $('#bios-text').css("overflowY", 'scroll');
                }
                else {
                    $('#bio').html("Read More");
                    $('#bios-box').css("width", '391px');
                    $('#bios-text').css("padding-right", '0px');
                    $('#bios-text').css("overflowY", 'hidden');
                }

                $('#bios-box').centerIn('#bios', { direction: 'vertical'});
            });            
        });

        // Event Handlers
        $('.nav-footer').click(function(){
          $('#bios').velocity("scroll", { duration: 1000, easing: "ease-in-out" });
        });

        var animateBool = true;

        // Image-Grid Overlay
        $('.image-grid-container').click(function() {
            
            var overlaySlider = $('.grid-slider');
            var slideIndex    = $(this).data('slide');

            $('.image-grid-container').removeClass("active-grid");
            $('.image-grid-container').addClass("bounce");

            $(this)
                .removeClass("bounce")
                .addClass("active-grid");
                
            if (animateBool) {    
                
                $('.gridOne').addClass('shrink-grid');
                    
                overlaySlider.addClass('active-grid-slider');
                slickInitOverlay();

                overlaySlider.slick('slickGoTo', slideIndex, true);
            } else {
                overlaySlider.slick('slickGoTo', slideIndex, false);
            }

            overlaySlider.on('init', function(event) {
                animateBool = false;
            });

            overlaySlider.on('swipe', function(event) {
                $('.image-grid-container').removeClass("active-grid");
                $('.image-grid-container').addClass("bounce");

                var currentSlide = $('.grid-slider').slick('slickCurrentSlide');
                var activeSlide  = $('.image-grid-wrapper').find("[data-slide='" + currentSlide + "']");
                    activeSlide
                        .addClass("active-grid")
                        .removeClass("bounce");
            });

        });


    /*

        $('html').bind('mousewheel DOMMouseScroll', function (e) {
            var delta = (e.originalEvent.wheelDelta || -e.originalEvent.detail);
        
            if (delta < 0) {
                console.log('You scrolled down');
                $("html").velocity("scroll", { offset: ($(document).scrollTop() + $(window).height()), duration: 1000, easing: "ease-in-out" });
                // $('#bios').velocity("scroll", { duration: 1000, easing: "ease-in-out" });
            } else if (delta > 0) {
                console.log('You scrolled up');
                // $('#interactive').velocity("scroll", { duration: 1000, easing: "ease-in-out" });
                $("html").velocity("scroll", { offset: -($(document).scrollTop() - ($(document).scrollTop()-$(window).height())), duration: 1000, easing: "ease-in-out" });
            }
        });

        
    */

});

// Functions =============================================================


// Setup for Slick slider plugin Grid #1
function slickInitOverlay() {

    $('.grid-slider').slick({
        arrows:             false,
        dots:               false,
        lazyLoad:           'progressive',
        adaptiveHeight:     true
    });
}

// Setup for Slick slider plugin Bottom
function slickInitBtm() {

    $('.big-moment-3').slick({
        arrows:             false,
        dots:               true,
        lazyLoad:           'ondemand',
        adaptiveHeight:     true
    });
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