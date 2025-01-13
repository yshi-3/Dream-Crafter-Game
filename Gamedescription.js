
   // Function to toggle the visibility of the game description
function toggleDescription(event) {
    event.preventDefault(); // Prevents any default action (useful for links if needed)

    const description = event.target.closest('.game-image').querySelector('.game-description'); // Get the description
    description.classList.toggle('show'); // Toggle the 'show' class for visibility
}

// Add hover effect (this works for desktop)
document.querySelectorAll('.game-image').forEach(image => {
    image.addEventListener('mouseenter', function() {
        this.querySelector('.game-description').classList.add('show');
    });

    image.addEventListener('mouseleave', function() {
        this.querySelector('.game-description').classList.remove('show');
    });
});

// Add click event for mobile (or when touch happens)
document.querySelectorAll('.game-image img').forEach(img => {
    img.addEventListener('click', function(event) {
        toggleDescription(event);  // Toggle description on click
    });
});
