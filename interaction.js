// Add this script before </body>
document.addEventListener('DOMContentLoaded', function() {
    const members = document.querySelectorAll('.group-member');
    
    function animateMembers() {
        members.forEach((member, index) => {
            // Add staggered animation delay
            member.style.animationDelay = `${index * 0.5}s`;
            
            // Add animation class
            member.classList.add('eject-animation');
        });
    }

    // Trigger animation when section is in view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateMembers();
            }
        });
    }, { threshold: 0.5 });

    observer.observe(document.querySelector('.group'));
});

