// Wait for the entire HTML document to load before running the script
document.addEventListener('DOMContentLoaded', () => {
    
    // Select all elements we want to animate (we will add the 'hidden' class to them in HTML)
    const animatedElements = document.querySelectorAll('.hidden');

    // Create an Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            // If the element is visible on the screen
            if (entry.isIntersecting) {
                // Add the 'show' class to trigger the CSS animation
                entry.target.classList.add('show');
            }
        });
    }, {
        threshold: 0.1 // Triggers when 10% of the element is visible
    });

    // Tell the observer to watch every element we selected
    animatedElements.forEach((el) => observer.observe(el));
});