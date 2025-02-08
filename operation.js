document.addEventListener('DOMContentLoaded', function () {
    const directoryCircle = document.getElementById('directory-circle');
    const directoryList = document.getElementById('directory-list');

    directoryCircle.addEventListener('click', function () {
        if (directoryList.style.opacity === '1') {
            directoryList.style.opacity = '0';
            directoryList.style.transform = 'scaleY(0)';
        } else {
            directoryList.style.opacity = '1';
            directoryList.style.transform = 'scaleY(1)';
        }
    });

    // Close the directory list when clicking outside
    document.addEventListener('click', function (event) {
        if (!directoryCircle.contains(event.target) && !directoryList.contains(event.target)) {
            directoryList.style.opacity = '0';
            directoryList.style.transform = 'scaleY(0)';
        }
    });
});