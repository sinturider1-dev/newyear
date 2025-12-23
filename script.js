const unlockDate = new Date("january 1, 2026 00:00:00").getTime();

const message = document.getElementById("message");

const today = new Date();
const newYear = new Date("January 1, 2026 00:00:00");

if (today >= newYear) {
    message.innerHTML = "May 2026 bring you happiness, smiles, and beautiful moments 🌸✨<br>Stay amazing always 💕";
} else {
    message.innerHTML = "Counting days for a beautiful New Year made special for you 🎆💖";
}
// Fireworks setup
const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function random(min, max) {
    return Math.random() * (max - min) + min;
}

// Particle
class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.radius = 2;
        this.color = `hsl(${random(0, 360)}, 100%, 60%)`;
        this.speedX = random(-4, 4);
        this.speedY = random(-4, 4);
        this.life = 60;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.life--;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}

let particles = [];

// Firework create
function createFirework() {
    const x = random(100, canvas.width - 100);
    const y = random(100, canvas.height / 2);

    for (let i = 0; i < 50; i++) {
        particles.push(new Particle(x, y));
    }
}

// Animation loop
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((p, index) => {
        p.update();
        p.draw();
        if (p.life <= 0) {
            particles.splice(index, 1);
        }
    });

    requestAnimationFrame(animate);
}

// Start
setInterval(createFirework, 200);
animate();
setTimeout(() => {
    message.innerHTML = " RADHE RADHE.. KEMON ACHO..?💫";
}, 4000); // 4 seconds
// ===== DATE LOCK + COUNTDOWN =====

const lockscreen = document.getElementById("lockscreen");
const card = document.querySelector(".card");
const timer = document.getElementById("timer");

const countdown = setInterval(() => {
    const now = new Date().getTime();
    const distance = unlockDate - now;

    if (distance <= 0) {
        clearInterval(countdown);
        lockscreen.style.display = "none";
        card.style.display = "block";

        document.getElementById("message").innerText =
            "Wishing you a year full of happiness 💖✨";
        return;
    }

    const d = Math.floor(distance / (1000 * 60 * 60 * 24));
    const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((distance % (1000 * 60)) / 1000);

    timer.innerHTML = `⏳ ${d}d ${h}h ${m}m ${s}s`;
}, 1000);