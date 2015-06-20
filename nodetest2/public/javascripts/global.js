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
    fadeInPage();

    // Center In
    $('.project-overview').alwaysCenterIn(window, { top: "-3%" });
    $('#pagination').alwaysCenterIn(window, { direction: 'vertical' });
    var bios_div = $('#bios');
    $('#bios-box').alwaysCenterIn(bios_div);;

    // Open Project
    $('.project-overview').click(function(){
        open = !open;

        !open ? $('.project-contents').fadeOut('slow') : $('.project-contents').fadeIn('slow'); 

        $('#logo p').fadeToggle(1000);
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
            $("html, body").animate({ scrollTop: "0px" }, 500);
            $('.project-contents').fadeOut('slow')
    
            $('#logo p').fadeToggle('slow');
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
                if($(this).is(':visible'))
                    $('#bio').html("Read Less")
                else 
                    $('#bio').html("Read More");
            });            
        });


    /*

    $('.hamburger').click(function(){
        $('.nav').toggleClass('nav-in');
        $('.hamburger').toggleClass('hamburger-out');
    });

    if  ($('.nav').hasClass('nav-in')) {

        $('html').click(function() {
          //Hide the menus if visible
          $('.nav').toggleClass('nav-in');
        });

        $('#nav').click(function(event){
            event.stopPropagation();
        });

    }

    */
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


// // Pull in our content Json
// var content = (function () {
//     content = null;
//     $.ajax({
//         'async': false,
//         'global': false,
//         'url': "javascripts/content.json",
//         'dataType': "json",
//         'success': function (data) {
//             content = data;
//             // alert("Success!");
//         }
//     });
//     return content;
// })(); 

// function buildSite() {

//     // Set up projects array
//     projects = content.projects;
//     console.log(projects);  
//     $('#im-test').attr("src", content.projects[0].images[0].src);
// }

// Set up Date Query
var setGreeting = function () {

    // Get current time
    var d = new Date();
    var n = d.getHours();

    var greeting;

    if (n < 11) {
        greeting = "Good Morning, ";
    } else if (n < 18) {
        greeting = "Good Afternoon, ";
    } else {
        greeting = "Good Evening, ";
    }

    console.log("Current hour is " + n);

    $('#greeting').prepend(greeting);
    $('#greeting').delay(1000).fadeIn(1000);
}

// Set the bottom element width to full using jQuery
var setWidth = function() {
    var windowWidth = $( window ).width();
    $("#triangle-bottom-left").css("border-left-width", windowWidth);
    $("#triangle-bottom-right").css("border-right-width", windowWidth);
}

var fadeInPage = function() {
    $("#nav-footer").delay(2000).fadeIn('slow');
}