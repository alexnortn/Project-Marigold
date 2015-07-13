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
    $.Velocity.RunSequence(loadingSequence);

    // Center In
    $('.project-overview').alwaysCenterIn(window, { top: "-3%" });
    $('#pagination').alwaysCenterIn(window, { direction: 'vertical' });
    var bios_div = $('#bios');
    $('#bios-box').alwaysCenterIn(bios_div);;
    $('.scroll-arrow').alwaysCenterIn(window, { direction: 'horizontal' });

    // Display Interaction Info
    $('#cross-circle').hover(function() {
        $('#infoText').slideToggle('slow', 'swing');
    });


    // Control Header
    $(window).on('scroll', function() {
        if ( $(document).scrollTop() > $(window).height()) {
            $('header').fadeIn(500);
            console.log("fade IN");
        } else if ( $(document).scrollTop() < $(window).height()) {
            $('header').fadeOut(500);
            console.log("fade OUT");
        }
    });

    // Open Project
    $('.project-overview').click(function(){
        open = !open;

        !open ? $('.project-contents').fadeOut('slow') : $('.project-contents').fadeIn('slow'); 

        // $('#logo p').fadeToggle(1000);
        $('#pagination').fadeToggle(1000);
        $('#arrow').fadeToggle(1000);

        console.log("click");

        // Size the video properly please
        videoSize();

        if (open == true) {
            $('html, body').animate({
                scrollTop: $('.main-description').offset().top
                }, 750);
                return false;
                console.log(open);
        };
    });

    $('body').keyup(function(e){
        if(e.keyCode == 32){
           // user has pressed space
           videoSize();
           console.log("video size");
        }
    });

    function closeProject() {
        if (open == true) {
            // $("html, body").animate({ scrollTop: "0px" }, 500);
            $('.project-contents').fadeOut('slow')
    
            // $('#logo p').fadeToggle('slow');
            $('#pagination').fadeToggle('slow');
            $('#arrow').fadeToggle('slow');
            open = false;
        }
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

        // When the window is resized
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
});

// Functions =============================================================

// Fill table with data
function populateTable() {

    // Empty content string
    var tableContent = '';

    // jQuery AJAX call for JSON
    $.getJSON( '/users/userlist', function( data ) {

        // Stick our user data array into a userlist variable in the global object
        userListData = data;


        // For each item in our JSON, add a table row and cells to the content string
        $.each(data, function(){
            tableContent += '<tr>';
            tableContent += '<td><a href="#" class="linkshowuser" rel="' + this.username + '">' + this.username + '</a></td>';
            tableContent += '<td>' + this.email + '</td>';
            tableContent += '<td><a href="#" class="linkdeleteuser" rel="' + this._id + '">delete</a></td>';
            tableContent += '</tr>';
        });

        // Inject the whole content string into our existing HTML table
        $('#userList table tbody').html(tableContent);
        console.log(tableContent);
    });
};

// Show User Info
function showUserInfo(event) {

    // Prevent Link from Firing
    event.preventDefault();

    // Retrieve username from link rel attribute
    var thisUserName = $(this).attr('rel');

    // Get Index of object based on id value
    var arrayPosition = userListData.map(function(arrayItem) { return arrayItem.username; }).indexOf(thisUserName);

    // Get our User Object
    var thisUserObject = userListData[arrayPosition];

    //Populate Info Box
    $('#userInfoName').text(thisUserObject.fullname);
    $('#userInfoAge').text(thisUserObject.age);
    $('#userInfoGender').text(thisUserObject.gender);
    $('#userInfoLocation').text(thisUserObject.location);

};

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

var fadeInPage = function() {

    setTimeout(
      function() {
        $(".nav-footer").animate({
            bottom: "0"
        }, { duration: 200, queue: false });

        $("#greeting").animate({
            opacity: "1"
        }, { duration: 250, queue: false });

        $("#cross-circle").animate({
            opacity: "1"
        }, { duration: 250, queue: false });

        $("#pagination").animate({
            right: "57"
        }, { duration: 500, queue: false });

        $("#nav-burger").removeClass('nav-burger-preload').addClass('nav-burger-load');

      }, 3000);
}

// Alex Norton
// a^N 
// http://alexnortn.com

/*


Seperation of styling for complex page animations


*/


// Set up page-load animation

var $info = $("#info"),
    $landingArrow = $("#landing-arrow"),
    $navBurger = $('#nav-burger'),
    $pagination = $('#pagination');


var loadingSequence = [
    {
        e: $landingArrow,
        p: {
            opacity: 1,
            bottom: 75
        },
        o: {
            duration: 250,
            easing: "easeInSine",
            sequenceQueue: false
        }
    },
    {
        e: $navBurger,
        p: {
            right: 50,
            opacity: 1 
        },
        o: {
            duration: 250,
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
            duration: 250,
            easing: "easeInSine",
            sequenceQueue: false
        }
    },
    { 
        e: $info,
        p: { opacity: 1 },
        o: { 
            duration: 250,
            easing: "easeInSine",
            sequenceQueue: false
        }
    }
]