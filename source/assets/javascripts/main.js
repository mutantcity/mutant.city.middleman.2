var $ = require('jquery');

//import 'headroom.js/dist/jQuery.headroom.js'
var Headroom = require('headroom.js/dist/headroom.js');
import '../stylesheets/main.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import TweenMax from 'TweenMax';
import ScrollMagic from 'ScrollMagic';
import 'animation.gsap';
import 'debug.addIndicators';
//var ScrollMagic = require('scrollmagic/scrollmagic/minified/ScrollMagic.min.js');
//require('scrollmagic/scrollmagic/minified/plugins/debug.addIndicators.min.js');
//var ScrollMagic =  require('scrollmagic/scrollmagic/minified/ScrollMagic.min.js');
//import 'gsap';


var myElement = document.querySelector("#header");

// create a Headroom object passing in the #header element
var headroom = new Headroom(myElement);

// initialize the library
headroom.init({
    tolerance: 5,
    offset: 305
});

/**  ScrollMagic/GSAP  */
$(function () {


var  controller = new ScrollMagic.Controller();


// Parallax background
new ScrollMagic.Scene({
        triggerElement: "#sc-container",
        triggerHook: "onEnter",
    })
    .duration('400%')
    .setTween("#sc-parallax", {
        backgroundPosition: "0% 800%",
        ease: Linear.easeNone
    })
    .addIndicators() // for debugging purposes
    .addTo(controller);

//
// new ScrollMagic.Scene({
//         triggerElement: "#sc-slidein",
//         triggerHook: "onLeave",
//     })
//     .setPin("#sc-slidein")
//     //.addIndicators() // add indicators (requires plugin)
//     .addTo(controller);
//
// new ScrollMagic.Scene({
//         triggerElement: "#sc-slidein2",
//         triggerHook: "onLeave",
//     })
//     .setPin("#sc-slidein2")
//     //.addIndicators() // add indicators (requires plugin)
//     .addTo(controller);

});
