// Get the scroll bar element
const scrollBar = document.getElementById('scrollBar');

// Add a scroll event listener
window.addEventListener('scroll', function() {
    // Get the scroll position and the height of the document
    const scrollPosition = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight;

    // Calculate the percentage of how far the user has scrolled
    const scrollPercent = scrollPosition / documentHeight;

    // Set the height of the black bar based on the scroll percentage
    scrollBar.style.height = (scrollPercent * 100) + 'vh'; // 100vh for full page height
});
