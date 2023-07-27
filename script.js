// Check if the user prefers dark mode
const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');

// Function to set the correct favicon based on color scheme preference
function setFavicon() {
    const favicon = document.getElementById('favicon');
    if (darkModeQuery.matches) {
    favicon.href = 'IMG/pixoblix Studio - Favicon (white).png';
    } else {
    favicon.href = 'IMG/pixoblix Studio - Favicon (blue).png';
    }
}

// Initial call to set favicon when the page loads
setFavicon();

// Add a listener to update the favicon if the user's color scheme preference changes
darkModeQuery.addListener(setFavicon);