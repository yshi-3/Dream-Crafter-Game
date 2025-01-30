// Add this script before the closing </body> tag
function toggleDescription() {
    const description = button.nextElementSibling; // Get the description element
    const isVisible = description.classList.contains('show');

    // Close all other descriptions first
    document.querySelectorAll('.member-description.show').forEach(desc => {
        if (desc !== description) {
            desc.classList.remove('show');
        }
    });

    // Toggle the current description
    description.classList.toggle('show');

    // Scroll to the description if it's opened
    if (description.classList.contains('show')) {
        description.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

// Close description when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.classList.contains('member-name') && !e.target.closest('.member-description')) {
        document.querySelectorAll('.member-description.show').forEach(desc => {
            desc.classList.remove('show');
        });
    }
});
