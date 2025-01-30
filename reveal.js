// Scroll animation trigger
window.addEventListener('scroll', revealSections);

function revealSections() {
    const reveals = document.querySelectorAll('.reveal');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    // Add reveal class to sections
    document.querySelectorAll('#mission, #goal, #roles, .group').forEach(section => {
        section.classList.add('reveal');
    });
    revealSections(); // Initial check
});
