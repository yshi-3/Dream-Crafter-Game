
    // Add event listener for the directory circle
    document.querySelector('.directory-circle').addEventListener('click', function(event) {
        const directoryList = document.querySelector('.directory-list');
        
        // Toggle visibility
        if (directoryList.style.opacity === '1') {
            directoryList.style.opacity = '0';
            directoryList.style.transform = 'scaleY(0)';
        } else {
            directoryList.style.opacity = '1';
            directoryList.style.transform = 'scaleY(1)';
        }

        // Prevent default behavior to avoid scrolling when tapping
        event.preventDefault();
    });
