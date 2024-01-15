// Check if the user prefers dark mode
const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');

// Function to set the correct favicon based on color scheme preference
function setFavicon() {
    const favicon = document.getElementById('favicon');
    if (darkModeQuery.matches) {
    favicon.href = 'IMG/Favicons/pixoblix Studio - Favicon (white).png';
    } else {
    favicon.href = 'IMG/Favicons/pixoblix Studio - Favicon (blue).png';
    }
}

// Initial call to set favicon when the page loads
setFavicon();

// Add a listener to update the favicon if the user's color scheme preference changes
darkModeQuery.addListener(setFavicon);




// Burger animation
var icons = document.querySelectorAll('#nav-icon1, #nav-icon2, #nav-icon3, #nav-icon4');

document.addEventListener('DOMContentLoaded', function() {

    icons.forEach(function(icon) {
        icon.addEventListener('click', function() {
            this.classList.toggle('open');
        });
    });
});


// Nav animation
let navIcon = document.querySelector('#nav-icon3'); 
let nav = document.querySelector('.navigation'); 
let navigationChildren = document.querySelectorAll('.navigation > *');

navIcon.addEventListener('click', () => {
    nav.classList.toggle('open');
    navigationChildren.forEach(child => {
        child.style.visibility = nav.classList.contains('open') ? 'visible' : 'hidden';
    });
    disable();
});

