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
    isMobile    = require('ismobilejs');

// Userlist data array for filling in info box
let userListData = [],
    projects,
    open = false,
    menu = false;

let _sections = $('.section'),
    _sectionCurrent;

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

    $('body').addClass('loading');

    // Center In

    // $('.case-study-overview').alwaysCenterIn(window, { top: "-3%" });
    $('#pagination').alwaysCenterIn(window, { direction: 'vertical' });
    // $('#bios-content').alwaysCenterIn('#bios', { top: "-3%" });

    function openProject(el) {
        $('#pagination').fadeToggle(1000);
        $('#arrow').fadeToggle(1000);
        $('body').addClass('project-open');

        el = "#" + el;
        $(el).find('.case-study-contents').fadeToggle(1000);
        $(el).addClass('case-study-open');

        let bottomSlick = $(el).find('.big-moment-3');

        // Initialize Slick object 
        if (!bottomSlick.hasClass('slick-initialized')) { 
            addSlick(bottomSlick, true);
        };

        
        $(el).find('.case-study-overview').velocity("scroll", { 
            container: $(el).find('.case-study-view'),
            duration:  800,
            delay:     250,
            offset:    '800px',
            mobileHA:  false
        });
        

        // Size the video properly please
        videoSize();
    }

    function closeProject(el) {
        $('#pagination').fadeToggle('slow');
        $('#arrow').fadeToggle('slow');

        el = "#" + el;
        $(el).find('.case-study-contents').fadeOut('slow', function() {
            $('body').removeClass('project-open');
            $(el).removeClass('case-study-open');
            console.log('faded');
        });

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

    // When the window is resized some fancy ui positioning
    $(window).resize(function() {

            newWidth = $fluidEl.width();

        // Resize all videos according to their own aspect ratio
        $allVideos.each(function() {

            let $el = $(this);
            $el
              .width(newWidth)
              .height(newWidth * $el.data('aspectRatio'));

        });

        stickyUpdate();

    // Kick off one resize to fix all videos on page load
    }).resize();

    // Check current position relative to top of page
    $(window).scroll(function () {
        let scrollTop = $(document).scrollTop();
       
        setTimeout(function() {
            toggleGlyphControls(scrollTop);    
        }, 100);

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


    // --------------------------------------
    // Works Interaction

    $('.case-study-overview').click(function(e) {
        // Navigate
        let el = e.currentTarget.parentElement.id;
        navigateScroll(el);

        // Open Project
        open = !open;

        !open ? closeProject(el) : openProject(el); 

    });
    

    // Close the nav overlay
    function closeNav() {
        document.getElementById("nav-trigger").checked = false;
    }

    // Get Event Target
    function getEventTarget(e) {
        e = e || window.event;
        return e.target || e.srcElement; 
    }

    // Navigation
    $('#web-lab-nav').click(function() {
        let target = getEventTarget(event);
        _sectionCurrent = target.getAttribute('data-nav'); // Get target id from data attr
        closeNav(); // Close Section

        if (_sectionCurrent == "works") {
            _sectionCurrent = $(".case-study-view").attr('id');
        }

        navigateScroll(_sectionCurrent); // Navigate
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

        _sectionCurrent = "web-lab"; // Set #web-lab as current
        navigateScroll(_sectionCurrent); // Navigate

    });

    // Header navigation --> Go Home (clicking 'a' sends the users to /#bios)
    $('#logo-header').click(function(){
        
        if (open) closeProject(); //  Close current project
        closeNav() // Close nav

        _sectionCurrent = "web-lab"; // Set #web-lab as current
        navigateScroll(_sectionCurrent); // Navigate

    });

    $('.scroll-arrow').click(function() {
        _sectionCurrent = "bios"; // Set #bios as current
        navigateScroll(_sectionCurrent); // Navigate
        $(this).velocity("fadeOut", { duration: 250 }); // Fade it out | They get it
    });


    // --------------------------------------
    // Widow Tamer

    if (_mobile) {
        wt.fix({
            elements: '.tamer',
            chars: 14,
            method: 'letter-spacing',
            event: 'orientationchange'
        });
    } else {
        wt.fix({
            elements: '.tamer',
            chars: 14,
            method: 'letter-spacing',
            event: 'resize'
        });
    }


    // --------------------------------------
    // Sticky Elements

    function stickyUpdate() {
        let bios_title = $('#bios-title')[0];
        if (_mobile || window.innerWidth < 1000) {
            stickyfill.remove(bios_title);
            return;
        }
            stickyfill.rebuild();
            stickyfill.add(bios_title);

    }


    // --------------------------------------
    // Mobile

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

    if (loc == "#web-lab") {
        if (header.css('display') == 'block') {    
            header.velocity("fadeOut", { duration: 250 });
        }
    } else {
        if (header.css('display') == 'none') {    
            header.velocity("fadeIn", { duration: 500 });
        }
    }
}

// Toggle visibility of Glyph Controls
function toggleGlyphControls(scrollTop) {
    let lab_options = $('#lab-options');
    let lab_what = $('#lab-what');

    if (scrollTop > 100) {
        if (lab_what.css('display') === 'flex') {    
            lab_options.velocity("fadeOut", { duration: 250 });
            lab_what.velocity("fadeOut", { duration: 250 });
        }
    } else {
        if (lab_what.css('display') === 'none') {    
            lab_options.velocity("fadeIn", { duration: 250, display: 'flex' });
            lab_what.velocity("fadeIn", { duration: 250, display: 'flex'  });
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