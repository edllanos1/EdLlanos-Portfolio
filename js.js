

//inner element animations
var animateHTML = function() {
    var elems, windowHeight;

    var init = function() {
        window.addEventListener('scroll', _checkPosition);
        window.addEventListener('resize', _checkPosition);
        _checkPosition(); //to check if there are default elements to scroll
    }

    var _checkPosition = function() {
        elems = document.querySelectorAll('.animation-element');
        windowHeight = window.innerHeight;
        for (var i = 0; i < elems.length; i++) {
            var posFromTop = elems[i].getBoundingClientRect().top
            if (posFromTop - windowHeight <= 0) {
                elems[i].classList.add('in-view');
            } else {
                elems[i].classList.remove('in-view');
            }
        }
    }
    return {
        init: init
    }
}
animateHTML().init()



//scroll
var els = document.querySelectorAll('nav li a');
var links = document.getElementsByTagName('a');
for (var i = 0; i < links.length; i++) {
    var link = links[i];
    if (location.pathname.replace(/^\//, '') == link.pathname.replace(/^\//, '') &&
        location.hostname == link.hostname && link.hash.replace(/#/, '')) {
        link.addEventListener('click', function(e) {
            //remove all active elements
            for (var i = 0; i < els.length; i++) {
                els[i].classList.remove('active');
            }
            var targetId = this.hash,
                targetAnchor = '[name=' + this.hash.slice(1) + ']';
            var target = targetId.length ? targetId : targetAnchor.length ? targetAnchor : false;
            this.classList.add('active');
            //find top coordinate of the element
            window.scroll({
                top: document.querySelector(target).offsetTop, // could be negative value
                left: 0,
                behavior: 'smooth'
            });
            e.preventDefault();
        });
    }
}


//mobile menu show/hide
var menu = document.querySelector('#menu');

function check_on_window(e) {
    //close if outside the box 
    if (!e.target.closest('nav')) {
        menu.classList.remove('is-visible');
        //remove the window event listener
        window.removeEventListener('click', check_on_window);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        document.querySelector('.page-preloader').style.display = "none";
    }, 500);

    document.querySelector('#menu-icon').addEventListener("click",
        function() {
            menu.classList.toggle('is-visible');
            //add event listener for the menu to close
            window.addEventListener("click", check_on_window);
        });
});




/*
var els = document.querySelectorAll('nav li a'); //remove if active
var links = document.querySelectorAll('a'); //check all links
for (var i = 0; i < links.length; i++) {
    var link = links[i]; //check their locations without the trailing dash, then check the hostnames (if we are on the same server page),

if (location.pathname.replace(/^\//, '') == link.pathname.replace(/^\//, '') &&
        location.hostname == link.hostname && link.hash.replace(/#/, '')) { //if we are on navigational link with #
        link.addEventListener('click', function(e) {
            //remove all active elements
            for (var i = 0; i < els.length; i++) {
                els[i].classList.remove('active');
            }
            var targetId = this.hash, //get the target
                targetAnchor = '[name=' + this.hash.slice(1) + ']';
//check if target exists            

var target = targetId.length ? targetId : targetAnchor.length ? targetAnchor : false;
if(target) { 
            this.classList.add('active');
            //find top coordinate of the element
            window.scroll({
                top: document.querySelector(target).offsetTop, // could be negative value
                left: 0,
                behavior: 'smooth'
            });
            e.preventDefault(); //stop the actual click
        }        

        });
    }
}


*/
