
    document.addEventListener("DOMContentLoaded", function() {
        const gameImages = document.querySelectorAll('.game-image');

        gameImages.forEach(image => {
            image.addEventListener('mouseover', function() {
                this.classList.add('active');
            });

            image.addEventListener('mouseout', function() {
                this.classList.remove('active');
            });

            image.addEventListener('click', function() {
                // Toggle active class on click for mobile devices
                this.classList.toggle('active');
            });
        });
    });
