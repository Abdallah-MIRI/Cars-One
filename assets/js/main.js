/* 
    Author: Abdallah Mohammed
    Version: 1.0
*/


// Fixd Navigation Top Scroll
var nav = document.getElementById('nav');

window.onscroll = function () {

    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        nav.classList.add('fexd-nav');
    } else {
        nav.classList.remove('fexd-nav');
    }

}


// Menu Icon Hamburger
var nav = document.getElementById('nav'),
    icon = document.getElementById('icon');

icon.onclick = function () {

    nav.classList.toggle('active');

}
