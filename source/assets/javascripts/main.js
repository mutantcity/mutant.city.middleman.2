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