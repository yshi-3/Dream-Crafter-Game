function expandDirectory() {
    const bar = document.querySelector('.directory-bar');
    const list = document.querySelector('.directory-list');
    bar.style.height = 'auto';
    list.style.opacity = '1';
    list.style.transform = 'scaleY(1)';
}

function collapseDirectory() {
    const bar = document.querySelector('.directory-bar');
    const list = document.querySelector('.directory-list');
    bar.style.height = '50px';
    list.style.opacity = '0';
    list.style.transform = 'scaleY(0)';
}
