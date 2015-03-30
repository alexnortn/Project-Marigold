// Userlist data array for filling in info box
var userListData = [];
var projects;
var open = false;
var menu = false;

// DOM Ready =============================================================
$(document).ready(function() {

    // Populate the user table on initial page load
    // populateTable();

    // Build Site
    // buildSite();

    // Username link click
    // $('#userList table tbody').on('click', 'td a.linkshowuser', showUserInfo);

    // Center In
    $('.project-overview').alwaysCenterIn(window, { top: "-3%" });
    $('#pagination').alwaysCenterIn(window, { direction: 'vertical' });

    // Open Project
    $('.project-overview').click(function(){
        open = !open;

        $('.project-contents').toggle('slow');
        $('#logo p').fadeToggle('slow');
        $('#pagination').fadeToggle('slow');
        $('#arrow').fadeToggle('slow');

        console.log("click");

        if (open == true) {
            $('html, body').animate({
                scrollTop: $('.main-description').offset().top
                }, 750);
                return false;
                console.log(open);
        };
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

    $('#logo').click(function(){
        // $("html, body").animate({ scrollTop: "300px" });
        $("html, body").animate({ scrollTop: "0px" }, 500);
        console.log('scroll click');
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


// // Pull in our content Json
// var content = (function () {
//     var content = null;
//     $.ajax({
//         'async': false,
//         'global': false,
//         'url': "javascripts/content.json",
//         'dataType': "json",
//         'success': function (data) {
//             content = data;
//             alert("Success!");
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