function updateCountdown() {
    const targetDate = new Date('2025-10-12T15:30:00'); // Set your target date here
    const now = new Date();
    const timeDifference = targetDate - now;

    const days = timeDifference < 0 ? 0 : Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = timeDifference < 0 ? 0 : Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = timeDifference < 0 ? 0 : Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = timeDifference < 0 ? 0 : Math.floor((timeDifference % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = (days > 9 ? days : '0' + days) + ':';
    document.getElementById('hours').textContent = (hours > 9 ? hours : '0' + hours) + ':';
    document.getElementById('minutes').textContent = (minutes > 9 ? minutes : '0' + minutes) + ':';
    document.getElementById('seconds').textContent = (seconds > 9 ? seconds : '0' + seconds);

    if (days == 0) {
        clearInterval(interval);
        document.getElementById('countdown').textContent = "Its Today!";
    }
}

const interval = setInterval(updateCountdown, 1000);
updateCountdown();

function toggleZoom(element) {
    const slides = document.querySelectorAll('.gallery__img');
    slides.forEach((slide) => slide.classList.remove('zoomed'));
    
    element.classList.add('zoomed');
}
