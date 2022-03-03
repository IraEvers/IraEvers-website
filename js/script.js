$(document).ready(documentReady);

function documentReady() {
    $('.Arrowup').click(Scrollup);
    $('.projects a').click(UnderConstruction);
    $('.btnResume').click(ResumeUpdated);
}

function Scrollup(event) {
    event.preventDefault();
    console.log("Go to top button is pressed" + $(window).scrollTop());
    $(window).scrollTop(0);
}

function UnderConstruction(event) {
    event.preventDefault();
    console.log("Alert UnderConstruction");
    alert("My apoligies. The detail page of the project is underconstruction.");
}

function ResumeUpdated(event) {
    event.preventDefault();
    console.log("Alert Resume being updated");
    alert("My apoligies. I am updating my resume at the moment.");
}