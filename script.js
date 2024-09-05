const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const message = document.getElementById('message');
const gifContainer = document.getElementById('gifContainer');

// Array of cute GIF URLs
const gifs = [
    '1h.gif', // cute hug
    '4h.gif',  // cute kiss
    '3h.gif'   // heart animation
];

// Function to display GIFs
function showGifs() {
    gifs.forEach(gifUrl => {
        const img = document.createElement('img');
        img.src = gifUrl;
        img.classList.add('cute-gif');
        gifContainer.appendChild(img);
    });
}

// Handle the "Yes" button click
yesButton.addEventListener('click', () => {
    message.classList.remove('hidden');
    gifContainer.innerHTML = ''; // Clear any previous GIFs
    showGifs(); // Display cute GIFs
});

// Make the "No" button move
noButton.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
    const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
    
    noButton.style.position = 'absolute';
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
});
