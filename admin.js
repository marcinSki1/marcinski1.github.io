const screenWidth = window.screen.availWidth;
const screenHeight = window.screen.availHeight;
const windowWidth = 400; // Szerokość nowego okna
const windowHeight = 300; // Wysokość nowego okna
const velocity = 15;

let x = 0;
let y = 0;
let vx = velocity;
let vy = velocity;

function moveWindowBounce() {
    setInterval(() => {
        if (x <= 0 || x + windowWidth >= screenWidth) {
            vx *= -1;
        }
        if (y <= 0 || y + windowHeight >= screenHeight) {
            vy *= -1;
        }

        x += vx;
        y += vy;

        window.moveTo(x, y);
    }, 100);
}

moveWindowBounce();



