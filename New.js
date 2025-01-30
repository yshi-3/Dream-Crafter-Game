let currentImageIndex = 0;
const images = document.querySelectorAll('.carousel-image');
const totalImages = images.length;

function showImage(index) {
    const offset = -index * 100; 
    document.querySelector('.carousel').style.transform = `translateX(${offset}%)`;
}

function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % totalImages;
    showImage(currentImageIndex);
}

function showPrevImage() {
    currentImageIndex = (currentImageIndex - 1 + totalImages) % totalImages;
    showImage(currentImageIndex);
}
setInterval(showNextImage, 5000);

showImage(currentImageIndex);
