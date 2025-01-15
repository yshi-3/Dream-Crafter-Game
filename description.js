// Function to toggle the description on click (for mobile)
function toggleDescription(event) {
    // Prevent default behavior (if necessary)
    event.preventDefault();

    const description = event.target.nextElementSibling; // Get the description sibling
    description.classList.toggle('show'); // Toggle the 'show' class for visibility
}

// Add hover effect (this works for desktop)
document.querySelectorAll('.group-member').forEach(member => {
    member.addEventListener('mouseenter', function() {
        this.querySelector('.member-description').classList.add('show');
    });

    member.addEventListener('mouseleave', function() {
        this.querySelector('.member-description').classList.remove('show');
    });
});

// Add click event for mobile (or when touch happens)
document.querySelectorAll('.group-member img').forEach(img => {
    img.addEventListener('click', function(event) {
        toggleDescription(event); // Toggle description on click
    });
});
