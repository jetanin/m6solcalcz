const dvdLogo = document.querySelector('.dvd-logo');

let x = 0;
let y = 0;
let speedX = 3;
let speedY = 3;

function moveLogo() {
    x += speedX;
    y += speedY;

    const maxX = window.innerWidth - dvdLogo.clientWidth;
    const maxY = window.innerHeight - dvdLogo.clientHeight;

    if (x >= maxX || x <= 0) {
        speedX *= -1;
    }
    if (y >= maxY || y <= 0) {
        speedY *= -1;
    }

    dvdLogo.style.transform = `translate(${x}px, ${y}px)`;
    requestAnimationFrame(moveLogo);
}

moveLogo();
