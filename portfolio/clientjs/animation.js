let $ = require('jquery');
let velocity    = require('velocity-animate'),
    velocity_ui = require('velocity-ui-pack');

// Navigate with velocity   
module.exports.scrollToVelocity = function (_sectionCurrent) {
    let nav = "#" + _sectionCurrent;
    // Scroll navigate, call setHash when finished moveing
    $(nav).velocity("scroll", { duration: 750, easing: "ease-in-out" });
};