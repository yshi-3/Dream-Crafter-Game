// Track likes for each game
let gameLikes = {
    1: 0, // Game 1 likes
    2: 0, // Game 2 likes
    3: 0, // Game 3 likes
    // Add more games if necessary
};

// Function to handle the like toggle
function toggleLike(gameId) {
    const heart = document.getElementById(`like-heart-${gameId}`);
    const count = document.getElementById(`like-count-${gameId}`);
    
    // Check if the game has already been liked
    if (heart.classList.contains('liked')) {
        return; // Prevent liking again
    }

    // Change heart to filled red and update like count
    heart.classList.add('liked');
    heart.innerHTML = "❤️"; // Change to filled heart (red)
    
    // Increment the like count
    gameLikes[gameId]++;

    // Update the like count on the page
    count.textContent = `${gameLikes[gameId]} Likes`;
}

// Add event listeners to each heart icon
document.getElementById('like-heart-1').addEventListener('click', () => toggleLike(1));
document.getElementById('like-heart-2').addEventListener('click', () => toggleLike(2));
document.getElementById('like-heart-3').addEventListener('click', () => toggleLike(3));
// Add more listeners for other games if necessary
