$(document).ready(documentReady);

function documentReady() {
    $('.Arrowup').click(Scrollup);
}

function Scrollup(event) {
    event.preventDefault();
    console.log("Go to top button is pressed" + $(window).scrollTop());
    $(window).scrollTop(0);
}