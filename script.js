const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resize();
window.addEventListener("resize", resize);

ctx.font = "5px Arial";
ctx.fillStyle = "#ff69b4";

let t = 0;

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < 900; i++) {
        let a = i * 0.1 + t;

        let x = 16 * Math.pow(Math.sin(a), 3);
        let y = 13 * Math.cos(a)
              - 5 * Math.cos(2 * a)
              - 2 * Math.cos(3 * a)
              - Math.cos(4 * a);

        ctx.fillText(
            "❤️ Camila ❤️",
            canvas.width / 2 + x * 10,
            canvas.height / 2 - y * 10
        );
    }

    t += 0.020;
    requestAnimationFrame(draw);
}

draw();
function crearCorazon() {
    const heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = window.innerHeight + "px";
    heart.style.fontSize = "25px";
    heart.style.pointerEvents = "none";
    heart.style.animation = "subir 4s linear forwards";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 4000);
}

setInterval(crearCorazon, 300);

const style = document.createElement("style");
style.innerHTML = `
@keyframes subir {
    from { transform: translateY(0); opacity: 1; }
    to { transform: translateY(-100vh); opacity: 0; }
}`;
document.head.appendChild(style);
