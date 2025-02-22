function createRaindrop() {
    const raindrop = document.createElement('div');
    raindrop.classList.add('raindrop');
    document.body.appendChild(raindrop);

    raindrop.style.left = Math.random() * window.innerWidth + 'px';
    raindrop.style.animationDuration = (Math.random() * 1.2 + 0.8) + 's';

    raindrop.addEventListener('animationend', () => {
        raindrop.remove();
    });
}

for (let i = 0; i < 50; i++) {
    createRaindrop();
}

function updateCountdown() {
    const eventDate = new Date('February 28, ' + new Date().getFullYear() + ' 18:00:00');
    const now = new Date();
    const timeDiff = eventDate - now;

    if (timeDiff > 0) {
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
        document.getElementById('timer').textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    } else {
        document.getElementById('countdown').textContent = 'Festen har börjat! 🎉';
    }
}

setInterval(updateCountdown, 1000);
updateCountdown();