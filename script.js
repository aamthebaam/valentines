const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');

yesButton.addEventListener('click', function () {
    alert('Yay! Happy Valentine\'s Day! 💖 Thank you for this honour...');
});

noButton.addEventListener('click', function () {
    moveNoButton();
});

function moveNoButton() {
    const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
    const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
    noButton.style.position = 'absolute';
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
}

// Optional: Add a small delay to make it harder to click "No"
noButton.addEventListener('mouseover', function () {
    moveNoButton();
});
