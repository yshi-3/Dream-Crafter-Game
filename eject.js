window.addEventListener('load', function () {
    const games = document.querySelectorAll('.game');
    games.forEach((game, index) => {
        setTimeout(() => {
            game.style.animationDelay = `${index * 0.2}s`;
            game.classList.add('eject-animation');
        }, 100);
    });
});