//Get the button
var mybutton = document.getElementById("myBtn");
// Defines how far the user has to scroll before he can see the scroll up button
var triggerPoint = 960;

// When the user scrolls down from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > triggerPoint || document.documentElement.scrollTop > triggerPoint) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}